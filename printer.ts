import { Websocket_API } from "./markets/btcde-client/generated";
import * as api from "./markets/btcde-client/generated";

import * as _debug from "debug";
import config from "./config";
import { BitcoindeClient } from "./markets/btcde-client";
import { KrakenClient } from "./markets/kraken-client";
import { literal } from "./util";
import { onBitcoindeOrderCreated } from "./markets/btcde-client/bitcoin-de-ws";
import { sleep, currency as formatCurrency, significantDigits, asyncSwap, formatBTC, unwrap } from "./util";
import { MarketClient, TradeOffer } from "./markets/market-client";
import { currency } from "./definitions/currency";
import { InteractiveLogger, TelegramInteractiveLogger } from "./telegram";
import * as clients from "./clients";
import { getProfitMargin } from "./printerUtil";

const io = new TelegramInteractiveLogger() as InteractiveLogger;

export async function moneyPrinterLoop() {
	while (true) {
		for (const [_, client1] of Object.entries(clients)) {
			for (const [_, client2] of Object.entries(clients)) {
				if (
					client1 === client2 ||
					client1.tradingCurrency !== client2.tradingCurrency ||
					client1.baseCurrency !== client2.baseCurrency
				)
					continue; // Exclude same clients

				const possibleMargin = await getProfitMargin(client1, client2);
				if (!possibleMargin.success) {
					io.debug(
						`Could not retrieve margin for: ${client1.name} --> ${client2.name}: ${possibleMargin.error
							.message}. Skipping.`,
					);
					continue;
				}
				const possibleMarginStr = significantDigits(possibleMargin.value * 100, 2);
				io.debug(`${client1.name} -> ${client2.name}: Margin of ${possibleMarginStr}% possible.`);
				if (possibleMargin.value > config.general.minProfit) {
					io.debug(`Noice! Possible margin of ${possibleMarginStr}% found :O`);
					try {
						await tryPrintMoney(client1, client2);
					} catch (e) {
						console.warn("tryPrintMoney", e);
						io.warning("uncaught error while printing money: " + e);
					}
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
		io.debug(`Could not fetch balance of ${buyClient.baseCurrency} from ${buyClient.name}.`);
		return;
	}
	const availableMoney = Math.min(remoteBilanceRet.value, config.general.maxStake) as baseCurrency;
	if (availableMoney === (0 as baseCurrency)) {
		io.debug(`No money in ${buyClient.baseCurrency} available on ${buyClient.name} to trade with.`);
		return;
	}

	// Depending on which trade is more risky change order (risky one at the end)
	const { a: buyOfferRet, b: sellOfferRet } = await asyncSwap(isBuyMoreRisky, {
		a: () => buyClient.getCheapestOfferToBuy(availableMoney),
		b: () => sellClient.getHighestOfferToSell(),
	});

	if (!buyOfferRet.success) {
		io.debug(`No buy offer was found for ${buyClient.name}`);
		io.debug(`Error was: ${JSON.stringify(buyOfferRet.error)}`);
		return;
	}
	if (!sellOfferRet.success) {
		io.debug(`No sell offers found for ${sellClient.name}.`);
		io.debug(`Error was: ${JSON.stringify(sellOfferRet.error)}`);
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
		await io.debug(`Actual margin of ${marginStr}% unfortunately is too low now.. Sorry bro.`);
		return;
	}
	await io.info(`Noice! Found trades with margin ${marginStr}%. EXECUUUUTEEE!`);
	// Accept start offer
	const [risky, safer] = isBuyMoreRisky ? [buy, sell] : [sell, buy];

	if (
		!await io.decide(
			`I'm going to ${risky.offer.type}
			${formatBTC(tradeAmount)} ${risky.client.tradingCurrency}
			for ${formatCurrency(risky.offer.price)} ${risky.client.baseCurrency}/${risky.client.tradingCurrency}
			via ${risky.client.name}.
				Continue?`,
		)
	) {
		await io.info("Aborting because of io decision");
		return;
	}

	const riskyTradeRet = await risky.client.executePendingTradeOffer(risky.offer, tradeAmount);
	if (!riskyTradeRet.success) {
		io.debug(`Error was: ${JSON.stringify(riskyTradeRet.error)}`);
		throw new Error(`ERROR while accepting risky order on ${risky.client.name}!!`);
	}

	await io.info(
		`Risky offer (type: ${risky.offer.type}, amount: ${formatBTC(tradeAmount)} ${risky.client.tradingCurrency},
		price: ${risky.effPrice}) from ${risky.client.name} successfull.`,
	);

	// Insert market order to endMarket:
	// TODO Check if btc.de client takes care of higher tradeamount necessary
	const saferTradeRet = await safer.client.setMarketOrder(safer.offer.type, tradeAmount);
	if (!saferTradeRet.success) {
		io.debug(`Error was: ${JSON.stringify(saferTradeRet.error)}`);
		throw new Error(`ERROR while creating market order on ${safer.client.name}!!`);
	}

	io.debug(`Market order (type: ${safer.offer.type}) on ${safer.client.name} created.`);
}

console.log("running");
if (require.main === module) {
	moneyPrinterLoop();
}
