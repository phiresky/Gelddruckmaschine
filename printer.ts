import { Websocket_API } from "./markets/btcde-client/generated";
import * as api from "./markets/btcde-client/generated";

import * as _debug from "debug";
import config from "./config";
import { BitcoindeClient } from "./markets/btcde-client";
import { KrakenClient } from "./markets/kraken-client";
import { literal } from "./util";
import { onBitcoindeOrderCreated } from "./markets/btcde-client/bitcoin-de-ws";
import { sleep, significantDigits, asyncSwap } from "./util";
import { MarketClient, TradeOffer } from "./markets/market-client";
import { currency } from "./definitions/currency";

const debug = _debug("printer");

export const clients = {
	bde: new BitcoindeClient(),
	kraken: new KrakenClient(),
};

export async function getProfitMarginBasic<tradingCurrency extends currency, baseCurrency extends currency>(
	startClient: MarketClient<tradingCurrency, baseCurrency, TradeOffer<tradingCurrency, baseCurrency>>,
	endClient: MarketClient<tradingCurrency, baseCurrency, TradeOffer<tradingCurrency, baseCurrency>>,
) {
	const buyPrice = (await startClient.getEffCurrBuyPrice()) as currency;
	const sellPrice = (await endClient.getEffCurrSellPrice()) as currency;
	return (sellPrice - buyPrice) / buyPrice;
}

export async function printMoney() {
	while (true) {
		for (const [clientName1, client1] of Object.entries(clients)) {
			for (const [clientName2, client2] of Object.entries(clients)) {
				if (client1 === client2) continue; // Exclude same clients
				const possibleMargin = await getProfitMarginBasic(client1, client2);
				const possibleMarginStr = significantDigits(possibleMargin * 100, 2);
				debug(`${clientName1} -> ${clientName2}: Margin of ${possibleMarginStr}% possible.`);
				if (possibleMargin > config.general.minProfit) {
					debug(`Noice! Possible margin of ${possibleMarginStr}% found :O`);
					await tryPrintMoney(client1, client2);
				}
			}
		}
		await sleep(2000);
	}
}

async function tryPrintMoney<tradingCurrency extends currency, baseCurrency extends currency>(
	buyClient: MarketClient<tradingCurrency, baseCurrency, TradeOffer<tradingCurrency, baseCurrency>>,
	sellClient: MarketClient<tradingCurrency, baseCurrency, TradeOffer<tradingCurrency, baseCurrency>>,
) {
	const availableMoney = Math.min(
		await buyClient.getAvailableBaseCurrency(),
		config.general.maxStake,
	) as baseCurrency;
	const isBuyMoreRisky = buyClient.risk >= sellClient.risk;

	// Depending on which trade is more risky change order (risky one at the end)
	const { a: buyOffer, b: sellOffer } = await asyncSwap(isBuyMoreRisky, {
		a: () => buyClient.getCheapestOfferToBuy(availableMoney),
		b: () => sellClient.getHighestOfferToSell(),
	});

	if (buyOffer === null) {
		debug(`No offer was found for ${buyClient.name}`);
		return;
	}
	const buyPriceEffective = buyClient.getEffectiveBuyPrice(buyOffer.price);

	if (sellOffer === null) {
		debug(`No sell offers found for ${sellClient.name}.`);
		return;
	}
	const sellPriceEffective = sellClient.getEffectiveSellPrice(sellOffer.price);

	// calculate how many tradingCurrency we can buy with this
	const tradeAmount = Math.min(availableMoney.n / buyPriceEffective.n, buyOffer.amount_max) as tradingCurrency;

	// check if gap condition is still satisfied
	const margin = (sellPriceEffective.n - buyPriceEffective.n) / buyPriceEffective.n;
	const marginStr = significantDigits(margin * 100, 2);
	if (margin <= config.general.minProfit) {
		debug(`Actual margin of ${marginStr}% unfortunately is too low now.. Sorry bro.`);
		return;
	}
	debug(`Noice! Found trades with margin ${marginStr}%. EXECUUUUTEEE!`);
	// Accept start offer
	const [riskyClient, riskyOffer, saferClient, saferOffer] = isBuyMoreRisky
		? [buyClient, buyOffer, sellClient, sellOffer]
		: [sellClient, sellOffer, buyClient, buyOffer];

	if (!await riskyClient.executePendingTradeOffer(riskyOffer, tradeAmount)) {
		throw new Error(`ERROR while accepting order on ${riskyClient.name}!!`);
	}

	debug(
		`Risky offer (type: ${riskyOffer.type}, amount: ${significantDigits(tradeAmount, 3)},
		price: ${buyPriceEffective}) from ${buyClient.name} successfull.`,
	);

	// Insert market order to endMarket:
	// TODO Check if btc.de client takes care of higher tradeamount necessary
	if (!await saferClient.setMarketOrder(saferOffer.type, tradeAmount)) {
		throw new Error(`ERROR while creating market order on ${saferClient.name}!!`);
	}

	debug(`Market order (type: ${saferOffer.type}) on ${saferClient.name} created.`);
}

async function run() {
	console.log(await clients.kraken.getCurrentSellPrice());
	console.log("kraken -> bde");
	console.log(await getProfitMarginBasic(clients.kraken, clients.bde));
	console.log("bde -> kraken");
	console.log(await getProfitMarginBasic(clients.bde, clients.kraken));
}

if (require.main === module) {
	//run();
	printMoney();
}
