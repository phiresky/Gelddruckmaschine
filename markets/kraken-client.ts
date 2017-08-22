import { EUR, BTC } from "../definitions/currency";
import { MarketClient, TradeOffer } from "./market-client";
import { Simplify, As } from "../util";
export type KrakenOffer = Simplify<
	TradeOffer<BTC, EUR> & {
		bitcoindeId: string; // optional identifier to know with which order you are dealing
	} & As<"krakenoffer">
>;

export class KrakenClient extends MarketClient<BTC, EUR, KrakenOffer> {
	getCurrentSellPrice(): Promise<EUR> {
		throw new Error("Method not implemented.");
	}
	getCurrentBuyPrice(): Promise<EUR> {
		throw new Error("Method not implemented.");
	}
	getTradeAmountsForBuyVolume(buyVolume: BTC): Promise<{ price: EUR; receivedVolume: BTC }> {
		throw new Error("Method not implemented.");
	}
	getRefundForSellVolume(sellVolume: BTC): Promise<EUR> {
		throw new Error("Method not implemented.");
	}
	getCheapestOfferToBuy(volume?: EUR | undefined): Promise<KrakenOffer> {
		throw new Error("Method not implemented.");
	}
	getHighestOfferToSell(volume?: BTC | undefined): Promise<KrakenOffer> {
		throw new Error("Method not implemented.");
	}
	setMarketBuyOrder(amount: BTC, amount_min?: BTC | undefined): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	setMarketSellOrder(amount: BTC, amount_min?: BTC | undefined): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	executePendingTradeOffer(offer: KrakenOffer): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
}

// Old stuff from printer
let kraken: any;
let config: any;
let debug: any;

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
			pair: "XXBTZEUR"
		});
		const formattedResult = result.XXBTZEUR.map(
			([timestamp, bid, ask]) =>
				({
					time: new Date(timestamp * 1000),
					price_EUR: parseFloat(bid) // TODO Should be ask?
				} as MarketPrice)
		);
		if (formattedResult.length === 0) throw Error("Empty GetSpreadResult!");
		console.log(formattedResult.slice().reverse());
		const lastTime = formattedResult[formattedResult.length - 1].time;
		const timediff_SECS = (new Date().getTime() - lastTime.getTime()) / 1000;
		if (timediff_SECS > config.maxPriceAge_SECS) {
			throw Error(`Last Kraken price is more than ${config.maxPriceAge_SECS} seconds old.`);
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
