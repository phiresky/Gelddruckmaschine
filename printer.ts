import { Websocket_API } from "./markets/btcde-client/generated";
import * as api from "./markets/btcde-client/generated";

import * as _debug from "debug";
import config from "./config";
import { BitcoindeClient } from "./markets/btcde-client";
import { KrakenClient } from "./markets/kraken-client";
import { literal } from "./util";
import { onBitcoindeOrderCreated } from "./markets/btcde-client/bitcoin-de-ws";
import { sleep, significantDigits, asyncSwap, formatBTC, unwrap } from "./util";
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
	const buyPrice = unwrap(await startClient.getEffCurrBuyPrice());
	const sellPrice = unwrap(await endClient.getEffCurrSellPrice());
	return (sellPrice.n - buyPrice.n) / buyPrice.n;
}

export async function printMoney() {
	while (true) {
		for (const [clientName1, client1] of Object.entries(clients)) {
			for (const [clientName2, client2] of Object.entries(clients)) {
				if (
					client1 === client2 ||
					client1.tradingCurrency !== client2.tradingCurrency ||
					client1.baseCurrency !== client2.baseCurrency
				)
					continue; // Exclude same clients

				const possibleMargin = await getProfitMarginBasic(client1, client2);
				if (possibleMargin === null) {
					debug(`Could not retrieve margin for: ${client1.name} --> ${client2.name}. Continue`);
					continue;
				}
				const possibleMarginStr = significantDigits(possibleMargin * 100, 2);
				debug(`${clientName1} -> ${clientName2}: Margin of ${possibleMarginStr}% possible.`);
				if (possibleMargin > config.general.minProfit) {
					debug(`Noice! Possible margin of ${possibleMarginStr}% found :O`);
					await tryPrintMoney(client1, client2);
				}
			}
		}
		await sleep(10000);
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

	const buy = {
		offer: buyOffer,
		client: buyClient,
		effPrice: buyPriceEffective,
	};
	const sell = {
		offer: sellOffer,
		client: sellClient,
		effPrice: sellPriceEffective,
	};

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
	const [risky, safer] = isBuyMoreRisky ? [buy, sell] : [sell, buy];

	if (!await risky.client.executePendingTradeOffer(risky.offer, tradeAmount)) {
		throw new Error(`ERROR while accepting order on ${risky.client.name}!!`);
	}

	debug(
		`Risky offer (type: ${risky.offer.type}, amount: ${formatBTC(tradeAmount)} ${risky.client.tradingCurrency},
		price: ${risky.effPrice}) from ${risky.client.name} successfull.`,
	);

	// Insert market order to endMarket:
	// TODO Check if btc.de client takes care of higher tradeamount necessary
	if (!await safer.client.setMarketOrder(safer.offer.type, tradeAmount)) {
		throw new Error(`ERROR while creating market order on ${safer.client.name}!!`);
	}

	debug(`Market order (type: ${safer.offer.type}) on ${safer.client.name} created.`);
}

async function run() {
	console.log(await clients.kraken.getCurrentSellPrice());
	console.log("kraken -> bde");
	console.log(await getProfitMarginBasic(clients.kraken, clients.bde));
	console.log("bde -> kraken");
	console.log(await getProfitMarginBasic(clients.bde, clients.kraken));
}
console.log("running");
if (require.main === module) {
	//run();
	printMoney();
}
