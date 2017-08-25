import { MarketClient, TradeOffer } from "./market-client";
import { BTC, EUR } from "../definitions/currency";
import { As, Simplify, minBy } from "../util";
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
	risk = 5;
	name = "Bitcoin.de";
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
		const res = await API.Orders.showOrderbook(this.client, {
			type: "sell",
			only_express_orders: 1,
		});
		if (!res.success) return res;

		if (res.value.orders.length === 0) {
			return {
				success: false,
				error: {
					canRetry: true,
					message: "No sell offers were found. API returned empty list.",
					origin: `BitcoindeClient/getCurrentSellPrice`,
					raw: res.value,
				},
			};
		}
		return { success: true, value: Math.max(...res.value.orders.map(order => order.price)).EUR };
	}
	async getCurrentBuyPrice(): CheckedPromise<EUR> {
		const res = await API.Orders.showOrderbook(this.client, {
			type: "buy",
			only_express_orders: 1,
		});
		if (!res.success) return res;

		if (res.value.orders.length === 0) {
			return {
				success: false,
				error: {
					canRetry: true,
					message: "No buy offers were found. API returned empty list.",
					origin: `BitcoindeClient/getCurrentBuyPrice`,
					raw: res.value,
				},
			};
		}
		return { success: true, value: Math.min(...res.value.orders.map(order => order.price)).EUR };
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
		const res = await API.Orders.showOrderbook(this.client, {
			type: "buy",
			only_express_orders: 1,
			amount: volume,
		});
		if (!res.success) return res;

		if (res.value.orders.length === 0)
			return {
				success: false,
				error: {
					canRetry: true,
					message: "No buy offers were found. API returned empty list.",
					origin: `BitcoindeClient/getCheapestOfferToBuy (volume: ${volume})`,
					raw: res.value,
				},
			};
		const order = res.value.orders.reduce(minBy(order => -order.price));
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
	}

	async getTradeAmountsForBuyVolume(buyVolume: BTC): CheckedPromise<{ costs: EUR; receivedVolume: BTC }> {
		throw new Error("Method not implemented.");
	}
	async getRefundForSellVolume(sellVolume: BTC): CheckedPromise<EUR> {
		throw new Error("Method not implemented.");
	}
	async getHighestOfferToSell(volume?: BTC | undefined): CheckedPromise<BitcoindeOffer> {
		const res = await API.Orders.showOrderbook(this.client, {
			type: "sell",
			only_express_orders: 1,
			amount: volume,
		});
		if (!res.success) return res;

		if (res.value.orders.length === 0)
			return {
				success: false,
				error: {
					canRetry: true,
					message: "No sell offers were found. API returned empty list.",
					origin: `BitcoindeClient/getHighestOfferToSell (volume: ${volume})`,
					raw: res.value,
				},
			};
		const order = res.value.orders.reduce(minBy(order => -order.price));
		return {
			success: true,
			value: {
				amount_max: order.max_amount.BTC,
				amount_min: order.min_amount.BTC,
				bitcoindeId: order.order_id,
				price: order.price.EUR,
				time: new Date(),
				type: "sell",
			} as BitcoindeOffer,
		};
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
		try {
			/**await API.Trades.executeTrade(this.client, {
				order_id: offer.bitcoindeId,
				type: offer.type, //{ sell: literal("buy"), buy: literal("sell") }[order.order_type as "buy" | "sell"] as "buy" | "sell",
				amount,
			});*/
			console.warn("WOULD EXECUTE", offer.type, amount, offer.bitcoindeId);
			return { success: true, value: null };
		} catch (error) {
			return {
				success: false,
				error: {
					canRetry: false,
					message: "Unknown error occured while executing pending trade offer.",
					origin: "BitcoindeClient/executePendingTradeOffer",
					raw: error,
				},
			};
		}
	}
	async getAccountInfo(): CheckedPromise<API.Sonstiges.showAccountInfo.Response.Data> {
		const res = await API.Sonstiges.showAccountInfo(this.client);
		if (!res.success) return res;
		return { success: true, value: res.value.data };
	}
	async getAvailableTradingCurrency(): CheckedPromise<BTC> {
		const res = await this.getAccountInfo();
		if (!res.success) return res;
		return { success: true, value: (+res.value.btc_balance.available_amount).BTC };
	}
	async getAvailableBaseCurrency(): CheckedPromise<EUR> {
		const res = await this.getAccountInfo();
		if (!res.success) return res;
		if (!res.value.fidor_reservation) return { success: true, value: (0).EUR };
		const { valid_until, available_amount } = res.value.fidor_reservation;
		if (new Date(valid_until).getTime() < Date.now() + 5 * 60 * 1000) return { success: true, value: (0).EUR };
		return { success: true, value: (+available_amount).EUR };
	}
}
