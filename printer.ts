import { Websocket_API } from "./markets/btcde-client/generated";
import * as api from "./markets/btcde-client/generated";

import * as _debug from "debug";
import keyconfig from "./config";
import { BitcoindeClient } from "./markets/btcde-client";
import { KrakenClient } from "./markets/kraken-client";
import { literal } from "./util";
import { onBitcoindeOrderCreated } from "./markets/btcde-client/bitcoin-de-ws";
import { sleep } from "./util";
import { MarketClient, TradeOffer } from "./markets/market-client";
import { currency } from "./definitions/currency";

const debug = _debug("printer");

export const clients = {
	bde: new BitcoindeClient(),
	kraken: new KrakenClient()
};

/**
 * Returns profit margin if trading with a certain volume.
 * @param startClient The client buying *tradingCurrency* from *baseCurrency*
 * @param endClient The client selling *tradingCurrency* for 'baseCurrency*
 * @param volume The volume in *tradingCurrency* to buy.
 * @returns profit margin as ratio (1 = 100%)
 */
export async function getProfitMargin<tradingCurrency extends currency, baseCurrency extends currency>(
	startClient: MarketClient<tradingCurrency, baseCurrency, TradeOffer<tradingCurrency, baseCurrency>>,
	endClient: MarketClient<tradingCurrency, baseCurrency, TradeOffer<tradingCurrency, baseCurrency>>,
	volume: tradingCurrency
) {
	// TODO Think of better solution for type problem here
	const {
		costs,
		receivedVolume
	}: { costs: currency; receivedVolume: tradingCurrency } = await startClient.getTradeAmountsForBuyVolume(volume);
	const refund: currency = await endClient.getRefundForSellVolume(receivedVolume);
	return (refund - costs) / costs;
}

export async function getProfitMarginBasic<tradingCurrency extends currency, baseCurrency extends currency>(
	startClient: MarketClient<tradingCurrency, baseCurrency, TradeOffer<tradingCurrency, baseCurrency>>,
	endClient: MarketClient<tradingCurrency, baseCurrency, TradeOffer<tradingCurrency, baseCurrency>>
) {
	const buyPrice = (await startClient.getCurrentBuyCondition()) as currency;
	console.log(buyPrice);
	const sellPrice = (await endClient.getCurrentSellCondition()) as currency;
	console.log(sellPrice);
	return (sellPrice - buyPrice) / buyPrice;
}

async function run() {
	console.log(await clients.kraken.getCurrentSellPrice());
	console.log("kraken -> bde");
	console.log(await getProfitMarginBasic(clients.kraken, clients.bde));
	console.log("bde -> kraken");
	console.log(await getProfitMarginBasic(clients.bde, clients.kraken));
}

run();
