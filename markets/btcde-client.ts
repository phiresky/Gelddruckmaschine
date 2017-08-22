import { MarketClient, TradeOffer } from "./market-client";
import { BTC, EUR } from "../definitions/currency";
import { As, Simplify } from "../util";

export type BitcoindeOffer = Simplify<
	TradeOffer<BTC, EUR> & {
		bitcoindeId: string; // optional identifier to know with which order you are dealing
	} & As<"bitcoindeoffer">
>;

export class BitcoindeClient implements MarketClient<BTC, EUR, BitcoindeOffer> {
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
	getCheapestOfferToBuy(volume?: EUR): Promise<BitcoindeOffer> {
		throw new Error("Method not implemented.");
	}
	getHighestOfferToSell(volume?: BTC): Promise<BitcoindeOffer> {
		throw new Error("Method not implemented.");
	}
	setMarketBuyOrder(amount: BTC, amount_min?: BTC): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	setMarketSellOrder(amount: BTC, amount_min?: BTC): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	executePendingTradeOffer(offer: BitcoindeOffer): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
}
a;
