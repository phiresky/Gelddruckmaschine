import { Websocket_API } from "./markets/btcde-client/generated";
import * as api from "./markets/btcde-client/generated";

import * as _debug from "debug";
import config from "./config";
import { BitcoindeClient } from "./markets/btcde-client";
import { KrakenClient } from "./markets/kraken-client";
import { literal } from "./util";
import { onBitcoindeOrderCreated } from "./markets/btcde-client/bitcoin-de-ws";
import { sleep, formatCurrency, significantDigits, asyncSwap, formatBTC, unwrap, swapOrderType } from "./util";
import { MarketClient, TradeOffer } from "./markets/market-client";
import { currency } from "./definitions/currency";
import { TelegramInteractiveLogger } from "./telegram";
import * as clients from "./clients";
import { getProfitMargin, formatRequest } from "./printerUtil";
import { TerminalLogger, InteractiveLogger } from "./InteractiveLogger";

const _io = { telegram: () => new TelegramInteractiveLogger(), terminal: () => new TerminalLogger() }[
	config.general.ioInterface
] as () => InteractiveLogger;
if (!_io) throw Error("invalid ioInterface " + config.general.ioInterface);
const io = _io();

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
					await io.debug(
						`Could not retrieve margin for: ${client1.name} --> ${client2.name}: ${possibleMargin.error
							.message}. Skipping.`,
					);
					await io.debug(`Error was: ${JSON.stringify(possibleMargin.error)}`);
					continue;
				}
				const possibleMarginStr = significantDigits(possibleMargin.value * 100, 2);
				await io.debug(`${client1.name} -> ${client2.name}: Margin of ${possibleMarginStr}% possible.`);
				if (possibleMargin.value > config.general.minProfit) {
					await io.debug(`Noice! Possible margin of ${possibleMarginStr}% found :O`);
					try {
						await tryPrintMoney(client1, client2);
					} catch (e) {
						console.warn("tryPrintMoney", e);
						await io.warning("uncaught error while printing money: " + e);
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
	const tradingCurrency = buyClient.tradingCurrency;
	const baseCurrency = buyClient.baseCurrency;
	const isBuyMoreRisky = buyClient.risk >= sellClient.risk;

	const remoteBilanceRet = await buyClient.getAvailableBaseCurrency();
	if (!remoteBilanceRet.success) {
		await io.debug(`Could not fetch balance of ${baseCurrency} from ${buyClient.name}.`);
		return;
	}
	const availableMoney = Math.min(remoteBilanceRet.value, config.general.maxStake) as baseCurrency;
	if (availableMoney === (0 as baseCurrency)) {
		await io.debug(`No money in ${baseCurrency} available on ${buyClient.name} to trade with.`);
		return;
	}

	// Depending on which trade is more risky change order (risky one at the end)
	const { a: buyOfferRet, b: sellOfferRet } = await asyncSwap(isBuyMoreRisky, {
		a: () => buyClient.getCheapestOfferToBuy(availableMoney),
		b: () => sellClient.getHighestOfferToSell(),
	});

	if (!buyOfferRet.success) {
		await io.debug(`No buy offer was found for ${buyClient.name}`);
		await io.debug(`Error was: ${JSON.stringify(buyOfferRet.error)}`);
		return;
	}
	if (!sellOfferRet.success) {
		await io.debug(`No sell offers found for ${sellClient.name}.`);
		await io.debug(`Error was: ${JSON.stringify(sellOfferRet.error)}`);
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
		config.general.confirmBeforeRiskyOrder &&
		!await io.decide(
			formatRequest(
				risky.client.name,
				`${formatBTC(tradeAmount)} ${tradingCurrency}`,
				`${formatCurrency(risky.offer.price)} ${baseCurrency}/${tradingCurrency}`,
				`${swapOrderType(risky.offer.type)} existing offer?`,
			),
		)
	) {
		await io.info("Aborting because of io decision");
		return;
	}

	const riskyTradeRet = await risky.client.executePendingTradeOffer(risky.offer, tradeAmount);
	if (!riskyTradeRet.success) {
		await io.debug(`Error was: ${JSON.stringify(riskyTradeRet.error)}`);
		throw new Error(`ERROR while accepting risky order on ${risky.client.name}!!`);
	}

	const promiseIO = io.info(
		`Accepted trade offer on ${risky.client.name} (type ${risky.offer.type}, amount ${formatBTC(
			tradeAmount,
		)} ${tradingCurrency}, price ${formatCurrency(risky.effPrice)} ${baseCurrency}, total money ${formatCurrency(
			risky.effPrice.n * tradeAmount.n,
		)}  ${baseCurrency})`,
	);

	if (
		config.general.confirmBeforeSafeOrder &&
		!await io.decide(
			formatRequest(
				safer.client.name,
				`${formatBTC(tradeAmount)} ${tradingCurrency}`,
				`${formatCurrency(safer.offer.price)} ${baseCurrency}/${tradingCurrency}`,
				`${swapOrderType(safer.offer.type)} market?`,
			),
		)
	) {
		await io.info("Aborting because of io decision");
		return;
	}
	// Insert market order to endMarket:
	// TODO Check if btc.de client takes care of higher tradeamount necessary
	const saferTradeRet = await safer.client.setMarketOrder(swapOrderType(safer.offer.type), tradeAmount);
	if (!saferTradeRet.success) {
		await io.debug(`Error was: ${JSON.stringify(saferTradeRet.error)}`);
		throw new Error(`ERROR while creating market order on ${safer.client.name}!!`);
	}

	await promiseIO; // Await msg only _after_ second trade was executed to avoid unnecessary delays increasing risk

	await io.info(
		`Created market order on ${safer.client.name} (type ${swapOrderType(safer.offer.type)}, amount ${formatBTC(
			tradeAmount,
		)} ${tradingCurrency}, estimated total money ${formatCurrency(
			safer.effPrice.n * tradeAmount.n,
		)}  ${baseCurrency})`,
	);
}

console.log("running");
if (require.main === module) {
	const never = moneyPrinterLoop();
}
