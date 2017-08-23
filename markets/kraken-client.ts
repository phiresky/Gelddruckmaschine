import { EUR, BTC } from "../definitions/currency";
import { MarketClient, TradeOffer } from "./market-client";
import { Simplify, As, cache } from "../util";
import { KrakenClient as APIClient } from "./kraken-client/kraken";
import config from "../config";

export interface KrakenResult<T> {
	XXBTZEUR: T;
	last?: string;
}
export type KrakenOffer = Simplify<
	TradeOffer<BTC, EUR> & {
		krakenId: string; // optional identifier to know with which order you are dealing
	} & As<"krakenoffer">
>;

type returnTypes = {
	/** <price>, <volume>, <timestamp> */
	getDepth: KrakenResult<{ bids: [string, string, number]; asks: [string, string, number] }>;
	getBalance: {
		ZEUR: string;
		XXBT: string;
		BCH: string;
	};
};

export class KrakenClient extends MarketClient<BTC, EUR, KrakenOffer> {
	risk = 1;
	name = "Kraken.com";

	api = new APIClient(config.krakencom.key, config.krakencom.secret);
	constructor() {
		super();
	}
	async getCurrentSellPrice(): Promise<EUR> {
		const offers: returnTypes["getDepth"] = await this.api.getDepth({ pair: BTCEUR, count: 1 });
		const [price, volume, timestamp] = offers.XXBTZEUR.bids[0];
		return (+price).EUR;
	}
	async getCurrentBuyPrice(): Promise<EUR> {
		const offers: returnTypes["getDepth"] = await this.api.getDepth({ pair: BTCEUR, count: 1 });
		const [price, volume, timestamp] = offers.XXBTZEUR.asks[0];
		return (+price).EUR;
	}

	getEffectiveSellPrice(price: EUR): EUR {
		return (price * (1 - config.krakencom.krakenFee)) as EUR;
	}
	getEffectiveBuyPrice(price: EUR): EUR {
		// buy a * (prize - 0.4%) EUR for a * (1 - 0.8%) BTC =!= 1 BTC
		// => a = 1 / (1 - 0.8%)
		return (price * (1 + config.krakencom.krakenFee)) as EUR;
	}

	async getTradeAmountsForBuyVolume(buyVolume: BTC): Promise<{ costs: EUR; receivedVolume: BTC }> {
		throw new Error("Method not implemented.");
	}
	async getRefundForSellVolume(sellVolume: BTC): Promise<EUR> {
		throw new Error("Method not implemented.");
	}
	async getCheapestOfferToBuy(volume?: EUR | undefined): Promise<KrakenOffer> {
		throw new Error("Method not implemented.");
	}
	async getHighestOfferToSell(volume?: BTC | undefined): Promise<KrakenOffer> {
		throw new Error("Method not implemented.");
	}
	async setMarketBuyOrder(amount: BTC, amount_min?: BTC | undefined): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	async setMarketSellOrder(amount: BTC, amount_min?: BTC | undefined): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	async executePendingTradeOffer(offer: KrakenOffer): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	//@cache(10.seconds)
	async getBalance(): Promise<returnTypes["getBalance"]> {
		return await this.api.getBalance();
	}
	async getAvailableTradingCurrency(): Promise<BTC> {
		const { XXBT } = await this.getBalance();
		return (+XXBT).BTC;
	}
	async getAvailableBaseCurrency(): Promise<EUR> {
		const { ZEUR } = await this.getBalance();
		return (+ZEUR).EUR;
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
	"XXBTZEUR": SpreadResult[];
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
