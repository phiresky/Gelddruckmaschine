import { MarketClient, TradeOffer } from "./market-client";
import { BTC, EUR } from "../definitions/currency";
import { As, Simplify, minBy, modifyPromise, checkPromise } from "../util";
import config from "../config";
import { BitcoindeClient as APIClient } from "./btcde-client/bitcoin-de";
import * as API from "./btcde-client/generated";
import { CheckedPromise } from "../definitions/promises";

export type BitcoindeOffer = Simplify<
	TradeOffer<BTC, EUR> & {
		bitcoindeId: string; // optional identifier to know with which order you are dealing
	} & As<"bitcoindeoffer">
>;

export class BitcoindeClient extends MarketClient<BTC, EUR, BitcoindeOffer> {
	readonly risk = 5;
	readonly name = "Bitcoin.de";
	readonly tradingCurrency = "BTC";
	readonly baseCurrency = "EUR";

	client: APIClient;

	/**
	 *
	 */
	constructor() {
		super();
		this.client = new APIClient(config.bitcoinde.key, config.bitcoinde.secret);
	}

	async getCurrentSellPrice(): CheckedPromise<EUR> {
		return await checkPromise(this.getHighestOfferToSell(), offer => offer.price);
	}
	async getCurrentBuyPrice(): CheckedPromise<EUR> {
		return await checkPromise(this.getCheapestOfferToBuy(), offer => offer.price);
	}

	getEffectiveSellPrice(price: EUR): EUR {
		return (price * (1 - config.bitcoinde.feeLessPrice)) as EUR;
	}
	getEffectiveBuyPrice(price: EUR): EUR {
		// buy a * (prize - 0.4%) EUR for a * (1 - 0.8%) BTC =!= 1 BTC
		// => a = 1 / (1 - 0.8%)
		return (price * (1 - config.bitcoinde.feeLessPrice) / (1 - config.bitcoinde.feeLessBTC)) as EUR;
	}

	async getCheapestOfferToBuy(volume?: EUR): CheckedPromise<BitcoindeOffer> {
		return await modifyPromise(
			API.Orders.showOrderbook(this.client, { type: "buy", only_express_orders: 1 }),
			result => {
				if (result.orders.length === 0)
					return {
						success: false,
						error: {
							canRetry: true,
							message: "No buy offers were found. API returned empty list.",
							origin: `BitcoindeClient/getCheapestOfferToBuy (volume: ${volume})`,
							raw: result,
						},
					};
				const orders = result.orders.filter(order => volume === undefined || order.min_volume <= volume);
				if (orders.length === 0)
					return {
						success: false,
						error: {
							canRetry: true,
							message: `No buy offers matching requested volume limit of ${volume} EUR found.`,
							origin: `BitcoindeClient/getCheapestOfferToBuy (volume: ${volume})`,
							raw: result,
						},
					};

				const order = orders.reduce(minBy(order => order.price));
				return {
					success: true,
					value: {
						amount_max: order.max_amount.BTC,
						amount_min: order.min_amount.BTC,
						bitcoindeId: order.order_id,
						price: order.price.EUR,
						time: new Date(),
						type: "sell", // Person offering sells bitcoin -> we can buy them
					} as BitcoindeOffer,
				};
			},
		);
	}
	async getHighestOfferToSell(volume?: BTC | undefined): CheckedPromise<BitcoindeOffer> {
		return await modifyPromise(
			API.Orders.showOrderbook(this.client, { type: "sell", only_express_orders: 1, amount: volume }),
			result => {
				if (result.orders.length === 0)
					return {
						success: false,
						error: {
							canRetry: true,
							message: "No sell offers were found. API returned empty list.",
							origin: `BitcoindeClient/getHighestOfferToSell (volume: ${volume})`,
							raw: result,
						},
					};
				const order = result.orders.reduce(minBy(order => -order.price));
				return {
					success: true,
					value: {
						amount_max: order.max_amount.BTC,
						amount_min: order.min_amount.BTC,
						bitcoindeId: order.order_id,
						price: order.price.EUR,
						time: new Date(),
						type: "buy",
					} as BitcoindeOffer,
				};
			},
		);
	}

	async getTradeAmountsForBuyVolume(buyVolume: BTC): CheckedPromise<{ costs: EUR; receivedVolume: BTC }> {
		throw new Error("Method not implemented.");
	}
	async getRefundForSellVolume(sellVolume: BTC): CheckedPromise<EUR> {
		throw new Error("Method not implemented.");
	}

	async setMarketBuyOrder(amount: BTC, amount_min?: BTC | undefined): CheckedPromise<null> {
		throw new Error("Method not implemented.");
	}
	async setMarketSellOrder(amount: BTC, amount_min?: BTC | undefined): CheckedPromise<null> {
		throw new Error("Dont do market orders on Bitcoin.de, you fool!");
		/*
		const response = await API.Orders.createOrder(this.client, {
			type: "sell",
			max_amount: amount,
			min_amount: amount_min === undefined ? amount : amount_min,
			price: await this.getCurrentSellPrice(),
		});
		*/
	}
	async executePendingTradeOffer(offer: BitcoindeOffer, amount: BTC): CheckedPromise<null> {
		/*
		return await checkPromise(API.Trades.executeTrade(this.client, {
			order_id: offer.bitcoindeId,
			type: offer.type, //{ sell: literal("buy"), buy: literal("sell") }[order.order_type as "buy" | "sell"] as "buy" | "sell",
			amount,
		}), result => null);
		*/
		// TODO Use above checkPromise here when execution should actually happen
		console.warn("WOULD EXECUTE", offer.type, amount, offer.bitcoindeId);
		return { success: true, value: null };
	}
	async getAccountInfo(): CheckedPromise<API.Sonstiges.showAccountInfo.Response.Data> {
		return await checkPromise(API.Sonstiges.showAccountInfo(this.client), res => res.data);
	}
	async getAvailableTradingCurrency(): CheckedPromise<BTC> {
		return await checkPromise(this.getAccountInfo(), info => (+info.btc_balance.available_amount).BTC);
	}
	async getAvailableBaseCurrency(): CheckedPromise<EUR> {
		return await checkPromise(this.getAccountInfo(), info => {
			if (!info.fidor_reservation) return (0).EUR;
			const { valid_until, available_amount } = info.fidor_reservation;
			if (new Date(valid_until).getTime() < Date.now() + 5 * 60 * 1000) return (0).EUR;
			return (+available_amount).EUR;
		});
	}
}
