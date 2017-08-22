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
	kraken: new KrakenClient()
};

export async function getProfitMarginBasic<tradingCurrency extends currency, baseCurrency extends currency>(
	startClient: MarketClient<tradingCurrency, baseCurrency, TradeOffer<tradingCurrency, baseCurrency>>,
	endClient: MarketClient<tradingCurrency, baseCurrency, TradeOffer<tradingCurrency, baseCurrency>>
) {
	const buyPrice = (await startClient.getCurrentBuyCondition()) as currency;
	const sellPrice = (await endClient.getCurrentSellCondition()) as currency;
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
	endClient: MarketClient<tradingCurrency, baseCurrency, TradeOffer<tradingCurrency, baseCurrency>>
) {
	// dodo
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
