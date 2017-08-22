import { MarketClient, TradeOffer } from "./market-client";
import { BTC, EUR } from "../definitions/currency";
import { As, Simplify } from "../util";
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
			only_express_orders: 1
		});
		console.log(orders);
		return Math.max(...orders.map(order => order.price)).EUR;
	}
	async getCurrentBuyPrice(): Promise<EUR> {
		const { orders } = await API.Orders.showOrderbook(this.client, {
			type: "buy",
			only_express_orders: 1
		});
		return Math.min(...orders.map(order => order.price)).EUR;
	}
	async getTradeAmountsForBuyVolume(buyVolume: BTC): Promise<{ price: EUR; receivedVolume: BTC }> {
		throw new Error("Method not implemented.");
	}
	async getRefundForSellVolume(sellVolume: BTC): Promise<EUR> {
		throw new Error("Method not implemented.");
	}
	async getCheapestOfferToBuy(volume?: EUR): Promise<BitcoindeOffer> {
		throw new Error("Method not implemented.");
	}
	async getHighestOfferToSell(volume?: BTC): Promise<BitcoindeOffer> {
		throw new Error("Method not implemented.");
	}
	async setMarketBuyOrder(amount: BTC, amount_min?: BTC): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	async setMarketSellOrder(amount: BTC, amount_min?: BTC): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	async executePendingTradeOffer(offer: BitcoindeOffer): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	async getAvailableTradingCurrency(): Promise<BTC> {
		throw new Error("Method not implemented.");
	}
	async getAvailableBaseCurrency(): Promise<EUR> {
		throw new Error("Method not implemented.");
	}
}
