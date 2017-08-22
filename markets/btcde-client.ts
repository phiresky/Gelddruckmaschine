import { MarketClient, TradeOffer } from "./market-client";
import { BTC, EUR } from "../definitions/currency";

export class BitcoindeClient implements MarketClient<BTC, EUR> {
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
	getCheapestOfferToBuy(volume?: EUR): Promise<TradeOffer<BTC, EUR>> {
		throw new Error("Method not implemented.");
	}
	getHighestOfferToSell(volume?: BTC): Promise<TradeOffer<BTC, EUR>> {
		throw new Error("Method not implemented.");
	}
	setMarketBuyOrder(amount: BTC, amount_min?: BTC): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	setMarketSellOrder(amount: BTC, amount_min?: BTC): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	executePendingTradeOffer(offer: TradeOffer<BTC, EUR>): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
}
