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
