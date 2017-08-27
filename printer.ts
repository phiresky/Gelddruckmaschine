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
	const isBuyMoreRisky = buyClient.risk >= sellClient.risk;

	const remoteBilanceRet = await buyClient.getAvailableBaseCurrency();
	if (!remoteBilanceRet.success) {
		debug(`Could not fetch balance of ${buyClient.baseCurrency} from ${buyClient.name}.`);
		return;
	}
	const availableMoney = Math.min(remoteBilanceRet.value, config.general.maxStake) as baseCurrency;
	if (availableMoney === (0 as baseCurrency)) {
		debug(`No money in ${buyClient.baseCurrency} available on ${buyClient.name} to trade with.`);
		return;
	}

	// Depending on which trade is more risky change order (risky one at the end)
	const { a: buyOfferRet, b: sellOfferRet } = await asyncSwap(isBuyMoreRisky, {
		a: () => buyClient.getCheapestOfferToBuy(availableMoney),
		b: () => sellClient.getHighestOfferToSell(),
	});

	if (!buyOfferRet.success) {
		debug(`No buy offer was found for ${buyClient.name}`);
		debug(`Error was: ${JSON.stringify(buyOfferRet.error)}`);
		return;
	}
	if (!sellOfferRet.success) {
		debug(`No sell offers found for ${sellClient.name}.`);
		debug(`Error was: ${JSON.stringify(sellOfferRet.error)}`);
		return;
	}

	const buy = {
		offer: buyOfferRet.value,
		client: buyClient,
		effPrice: buyClient.getEffectiveBuyPrice(buyOfferRet.value.price),
	};
	const sell = {
		offer: sellOfferRet.value,
		client: sellClient,
		effPrice: sellClient.getEffectiveSellPrice(sellOfferRet.value.price),
	};

	// calculate how many tradingCurrency we can buy with this
	const tradeAmount = Math.min(availableMoney.n / buy.effPrice.n, buy.offer.amount_max) as tradingCurrency;

	// check if gap condition is still satisfied
	const margin = (sell.effPrice.n - buy.effPrice.n) / buy.effPrice.n;
	const marginStr = significantDigits(margin * 100, 2);
	if (margin <= config.general.minProfit) {
		debug(`Actual margin of ${marginStr}% unfortunately is too low now.. Sorry bro.`);
		return;
	}
	debug(`Noice! Found trades with margin ${marginStr}%. EXECUUUUTEEE!`);
	// Accept start offer
	const [risky, safer] = isBuyMoreRisky ? [buy, sell] : [sell, buy];

	const riskyTradeRet = await risky.client.executePendingTradeOffer(risky.offer, tradeAmount);
	if (!riskyTradeRet.success) {
		debug(`Error was: ${JSON.stringify(riskyTradeRet.error)}`);
		throw new Error(`ERROR while accepting risky order on ${risky.client.name}!!`);
	}

	debug(
		`Risky offer (type: ${risky.offer.type}, amount: ${formatBTC(tradeAmount)} ${risky.client.tradingCurrency},
		price: ${risky.effPrice}) from ${risky.client.name} successfull.`,
	);

	// Insert market order to endMarket:
	// TODO Check if btc.de client takes care of higher tradeamount necessary
	const saferTradeRet = await safer.client.setMarketOrder(safer.offer.type, tradeAmount);
	if (!saferTradeRet.success) {
		debug(`Error was: ${JSON.stringify(saferTradeRet.error)}`);
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
