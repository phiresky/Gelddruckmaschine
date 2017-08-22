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
			only_express_orders: 1
		});
		return Math.max(...orders.map(order => order.price)).EUR;
	}
	async getCurrentBuyPrice(): Promise<EUR> {
		const { orders } = await API.Orders.showOrderbook(this.client, {
			type: "buy",
			only_express_orders: 1
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
			amount: volume
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
			type: "buy"
		};
	}

	getTradeAmountsForBuyVolume(buyVolume: BTC): Promise<{ costs: EUR; receivedVolume: BTC }> {
		throw new Error("Method not implemented.");
	}
	getRefundForSellVolume(sellVolume: BTC): Promise<EUR> {
		throw new Error("Method not implemented.");
	}
	getHighestOfferToSell(
		volume?: BTC | undefined
	): Promise<Simplify<TradeOffer<BTC, EUR> & { bitcoindeId: string } & As<"bitcoindeoffer">>> {
		throw new Error("Method not implemented.");
	}
	setMarketBuyOrder(amount: BTC, amount_min?: BTC | undefined): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	setMarketSellOrder(amount: BTC, amount_min?: BTC | undefined): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	executePendingTradeOffer(
		offer: Simplify<TradeOffer<BTC, EUR> & { bitcoindeId: string } & As<"bitcoindeoffer">>
	): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	getAvailableTradingCurrency(): Promise<BTC> {
		throw new Error("Method not implemented.");
	}
	getAvailableBaseCurrency(): Promise<EUR> {
		throw new Error("Method not implemented.");
	}
}
