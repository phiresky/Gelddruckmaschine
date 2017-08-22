import { Websocket_API } from "./markets/btcde-client/generated";
import * as api from "./markets/btcde-client/generated";

import * as _debug from "debug";
import config from "./config";
import { BitcoindeClient } from "./markets/btcde-client";
import { KrakenClient } from "./markets/kraken-client";
import { literal } from "./util";
import { onBitcoindeOrderCreated } from "./markets/btcde-client/bitcoin-de-ws";
import { sleep, significantDigits } from "./util";
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
	startClient: MarketClient<tradingCurrency, baseCurrency, TradeOffer<tradingCurrency, baseCurrency>>,
	endClient: MarketClient<tradingCurrency, baseCurrency, TradeOffer<tradingCurrency, baseCurrency>>,
) {
	const availableMoney = Math.min(
		await startClient.getAvailableBaseCurrency(),
		config.general.maxStake,
	) as baseCurrency;
	// will be market order but we check for price in order to ensure gap
	const endOffer = await endClient.getHighestOfferToSell();
	const endPriceEffective: currency = endClient.getEffectiveSellPrice(endOffer.price);

	// check if buy order was found for given money
	const startOffer = await startClient.getCheapestOfferToBuy(availableMoney);
	if (startOffer === null) {
		debug(`No offer was found for client ${startClient.constructor.name}`);
		return;
	}
	const startPriceEffective: currency = startClient.getEffectiveBuyPrice(startOffer.price);
	// calculate how many tradingCurrency we can buy with this
	const tradeAmount = Math.min(availableMoney.n / startPriceEffective, startOffer.amount_max) as tradingCurrency;

	// check if gap condition is still satisfied
	const margin = (endPriceEffective - startPriceEffective) / startPriceEffective;
	const marginStr = significantDigits(margin * 100, 2);
	if (margin > config.general.minProfit) {
		debug(`Noice! Found trades with margin ${marginStr}%. EXECUUUUTEEE!`);
		// Accept start offer
		if (await startClient.executePendingTradeOffer(startOffer, tradeAmount)) {
			debug(
				`Buy trade (amount: ${significantDigits(
					tradeAmount,
					3,
				)}, price: ${startPriceEffective}) from ${startClient.constructor.name} successfull.`,
			);
			// Insert market order to endMarket:
			if (await endClient.setMarketSellOrder(tradeAmount)) {
				debug(`Market order on ${endClient.constructor.name} created.`);
			} else {
				throw new Error(`ERROR while creating market order on endClient!!`);
			}
		} else {
			throw new Error(`ERROR while accepting order on startClient!!`);
		}
	} else {
		debug(`Actual margin of ${marginStr}% unfortunately is too low now.. Sorry bro.`);
	}
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
