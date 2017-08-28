import { EUR, BTC } from "../definitions/currency";
import { MarketClient, TradeOffer } from "./market-client";
import { Simplify, As, cache, checkPromise, modifyPromise } from "../util";
import { KrakenClient as APIClient } from "./kraken-client/kraken";
import config from "../config";
import { CheckedPromise, CheckedPromiseReturn } from "../definitions/promises";

export interface KrakenResult<T> {
	XXBTZEUR: T;
	last?: string;
}
export type KrakenOffer = Simplify<TradeOffer<BTC, EUR> & {} & As<"krakenoffer">>;

type returnTypes = {
	/** <price>, <volume>, <timestamp> */
	getDepth: KrakenResult<{ bids: [string, string, number][]; asks: [string, string, number][] }>;
	getBalance: {
		ZEUR: string;
		XXBT: string;
		BCH: string;
	};
};

export class KrakenClient extends MarketClient<BTC, EUR, KrakenOffer> {
	risk = 1;
	name = "Kraken.com";
	readonly tradingCurrency = "BTC";
	readonly baseCurrency = "EUR";

	api = new APIClient(config.secrets.krakencom.key, config.secrets.krakencom.secret);
	constructor() {
		super();
	}
	async getCurrentSellPrice(): CheckedPromise<EUR> {
		return await checkPromise(this.getHighestOfferToSell(), offer => offer.price);
	}
	async getCurrentBuyPrice(): CheckedPromise<EUR> {
		return await checkPromise(this.getCheapestOfferToBuy(), offer => offer.price);
	}

	getEffectiveSellPrice(price: EUR): EUR {
		return (price * (1 - config.krakencom.krakenFee)) as EUR;
	}
	getEffectiveBuyPrice(price: EUR): EUR {
		// buy a * (prize - 0.4%) EUR for a * (1 - 0.8%) BTC =!= 1 BTC
		// => a = 1 / (1 - 0.8%)
		return (price * (1 + config.krakencom.krakenFee)) as EUR;
	}

	async getTradeAmountsForBuyVolume(buyVolume: BTC): CheckedPromise<{ costs: EUR; receivedVolume: BTC }> {
		throw new Error("Method getTradeAmountsForBuyVolume not implemented.");
	}
	async getRefundForSellVolume(sellVolume: BTC): CheckedPromise<EUR> {
		throw new Error("Method getRefundForSellVolume not implemented.");
	}
	async getBestOffer(type: "buy" | "sell"): CheckedPromise<KrakenOffer> {
		return await modifyPromise(
			this.api.getDepth({ pair: BTCEUR, count: 1 }) as CheckedPromise<returnTypes["getDepth"]>,
			offers => {
				const offerList = type === "buy" ? offers.XXBTZEUR.asks : offers.XXBTZEUR.bids;
				if (offerList.length === 0) {
					return {
						success: false,
						error: {
							canRetry: true,
							message: `Could not retrieve current ${type} price. No offers found.`,
							origin: "KrakenClient/getBestOffer",
							raw: offers,
						},
					};
				}
				const [price, volume, timestamp] = offerList[0];
				return {
					success: true,
					value: {
						amount_min: (+volume).BTC,
						amount_max: (+volume).BTC,
						price: (+price).EUR,
						time: new Date(timestamp * 1000),
						type: type === "sell" ? "buy" : "sell", // offer has opposite type of what we want (different viewpoint)
					} as KrakenOffer,
				};
			},
		);
	}
	async getCheapestOfferToBuy(volume?: EUR | undefined): CheckedPromise<KrakenOffer> {
		// TODO Volume not implemented!
		return await this.getBestOffer("buy");
	}
	async getHighestOfferToSell(volume?: BTC | undefined): CheckedPromise<KrakenOffer> {
		// TODO Volume not implemented
		return await this.getBestOffer("sell");
	}
	async setMarketBuyOrder(amount: BTC, amount_min?: BTC | undefined): CheckedPromise<null> {
		// TODO Implement logic
		console.warn(`ẀOULD CREATE MARKET ORDER: buy, ${amount} BTC (min: ${amount_min || "not set"})`);
		return { success: true, value: null };
	}
	async setMarketSellOrder(amount: BTC, amount_min?: BTC | undefined): CheckedPromise<null> {
		console.warn(`ẀOULD CREATE MARKET ORDER: sell, ${amount} BTC (min: ${amount_min || "not set"})`);
		return { success: true, value: null };
	}
	async executePendingTradeOffer(offer: KrakenOffer): CheckedPromise<null> {
		throw new Error("Method executePendingTradeOffer not implemented.");
	}
	//@cache(10.seconds)
	async getBalance(): CheckedPromise<returnTypes["getBalance"]> {
		return (await this.api.getBalance()) as CheckedPromiseReturn<returnTypes["getBalance"]>;
	}
	async getAvailableTradingCurrency(): CheckedPromise<BTC> {
		return checkPromise(this.getBalance(), balance => (+balance.XXBT || 0).BTC);
	}
	async getAvailableBaseCurrency(): CheckedPromise<EUR> {
		return checkPromise(this.getBalance(), balance => (+balance.ZEUR || 0).EUR);
	}
}

// Old stuff from printer
let kraken: any;
let debug: any;
const BTCEUR = "XXBTZEUR";

type SpreadResult = [number, string, string];
interface MarketPrice {
	time: Date;
	price_EUR: number;
}
interface GetSpreadResult {
	XXBTZEUR: SpreadResult[];
}

let krakenPrice_EUR: number | "unknown" = "unknown";
async function updateKrakenPrice() {
	try {
		const result: GetSpreadResult = await kraken.getSpread({
			pair: "XXBTZEUR",
		});
		const formattedResult = result.XXBTZEUR.map(
			([timestamp, bid, ask]) =>
				({
					time: new Date(timestamp * 1000),
					price_EUR: parseFloat(bid), // TODO Should be ask?
				} as MarketPrice),
		);
		if (formattedResult.length === 0) throw Error("Empty GetSpreadResult!");
		console.log(formattedResult.slice().reverse());
		const lastTime = formattedResult[formattedResult.length - 1].time;
		const timediff_SECS = (new Date().getTime() - lastTime.getTime()) / 1000;
		if (timediff_SECS > config.krakencom.maxPriceAge_SECS) {
			throw Error(`Last Kraken price is more than ${config.krakencom.maxPriceAge_SECS} seconds old.`);
		}
		krakenPrice_EUR = formattedResult[formattedResult.length - 1].price_EUR;
		debug(`Fetched new Kraken price: ${krakenPrice_EUR} EUR (from ${lastTime})`);
	} catch (error) {
		if (error.statusCode) {
			error = `Status Code: ${error.statusCode}`;
		}
		krakenPrice_EUR = "unknown";
		console.warn(`Could not fetch new Kraken prices - setting 'unknown'. Error: ${error}`);
	}
}

type KrakenAddOrderResponse = {
	descr: {
		order: string; //KrakenOrderDescription;
	};
	txid: string[];
};
