import { MarketClient, TradeOffer } from "./market-client";
import { BTC, EUR } from "../definitions/currency";
import { As, Simplify, minBy } from "../util";
import config from "../config";
import { BitcoindeClient as APIClient } from "./btcde-client/bitcoin-de";
import * as API from "./btcde-client/generated";

export type BitcoindeOffer = Simplify<
	TradeOffer<BTC, EUR> & {
		bitcoindeId: string; // optional identifier to know with which order you are dealing
	} & As<"bitcoindeoffer">
>;

export class BitcoindeClient extends MarketClient<BTC, EUR, BitcoindeOffer> {
	client: APIClient;

	/**
	 *
	 */
	constructor() {
		super();
		this.client = new APIClient(config.bitcoinde.key, config.bitcoinde.secret);
	}

	async getCurrentSellPrice(): Promise<EUR> {
		const { orders } = await API.Orders.showOrderbook(this.client, {
			type: "sell",
			only_express_orders: 1,
		});
		return Math.max(...orders.map(order => order.price)).EUR;
	}
	async getCurrentBuyPrice(): Promise<EUR> {
		const { orders } = await API.Orders.showOrderbook(this.client, {
			type: "buy",
			only_express_orders: 1,
		});
		return Math.min(...orders.map(order => order.price)).EUR;
	}

	getEffectiveSellPrice(price: EUR): EUR {
		return (price * (1 - config.bitcoinde.feeLessPrice)) as EUR;
	}
	getEffectiveBuyPrice(price: EUR): EUR {
		// buy a * (prize - 0.4%) EUR for a * (1 - 0.8%) BTC =!= 1 BTC
		// => a = 1 / (1 - 0.8%)
		return (price * (1 - config.bitcoinde.feeLessPrice) / (1 - config.bitcoinde.feeLessBTC)) as EUR;
	}

	async getCheapestOfferToBuy(volume?: EUR): Promise<BitcoindeOffer | null> {
		const { orders } = await API.Orders.showOrderbook(this.client, {
			type: "buy",
			only_express_orders: 1,
			amount: volume,
		});
		if (orders.length === 0) {
			return null;
		}
		const order = orders.reduce(minBy(order => order.price));
		return {
			amount_max: order.max_amount.BTC,
			amount_min: order.min_amount.BTC,
			bitcoindeId: order.order_id,
			price: order.price.EUR,
			time: new Date(),
			type: "buy",
		};
	}

	async getTradeAmountsForBuyVolume(buyVolume: BTC): Promise<{ costs: EUR; receivedVolume: BTC }> {
		throw new Error("Method not implemented.");
	}
	async getRefundForSellVolume(sellVolume: BTC): Promise<EUR> {
		throw new Error("Method not implemented.");
	}
	async getHighestOfferToSell(volume?: BTC | undefined): Promise<BitcoindeOffer> {
		throw new Error("Method not implemented.");
	}
	async setMarketBuyOrder(amount: BTC, amount_min?: BTC | undefined): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	async setMarketSellOrder(amount: BTC, amount_min?: BTC | undefined): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	async executePendingTradeOffer(offer: BitcoindeOffer): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	async getAccountInfo(): Promise<API.Sonstiges.showAccountInfo.Response.Data> {
		const { data } = await API.Sonstiges.showAccountInfo(this.client);
		return data;
	}
	async getAvailableTradingCurrency(): Promise<BTC> {
		const res = await this.getAccountInfo();
		return (+res.btc_balance.available_amount).BTC;
	}
	async getAvailableBaseCurrency(): Promise<EUR> {
		const res = await this.getAccountInfo();
		if (!res.fidor_reservation) return (0).EUR;
		const { valid_until, available_amount } = res.fidor_reservation;
		if (new Date(valid_until).getTime() < Date.now() + 5 * 60 * 1000) return (0).EUR;
		return (+available_amount).EUR;
	}
}
