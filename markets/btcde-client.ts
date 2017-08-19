import { MarketClient, TradeOffer } from "./market-client";

export class BitcoindeClient implements MarketClient<BTC, EUR> {
	getCurrentSellPrice(): EUR {
		throw new Error("Method not implemented.");
	}
	getCurrentBuyPrice(): EUR {
		throw new Error("Method not implemented.");
	}
	getTradeAmountsForBuyVolume(buyVolume: BTC): { price: EUR; receivedVolume: BTC } {
		throw new Error("Method not implemented.");
	}
	getRefundForSellVolume(sellVolume: BTC): EUR {
		throw new Error("Method not implemented.");
	}
	getCheapestOfferToBuy(volume?: EUR | undefined): TradeOffer<BTC, EUR> {
		throw new Error("Method not implemented.");
	}
	getHighestOfferToSell(volume?: BTC): TradeOffer<BTC, EUR> {
		throw new Error("Method not implemented.");
	}
	setMarketBuyOrderAsync(amount: BTC, amount_min?: BTC | undefined): boolean {
		throw new Error("Method not implemented.");
	}
	setMarketSellOrderAsync(amount: BTC, amount_min?: BTC | undefined): boolean {
		throw new Error("Method not implemented.");
	}
	executePendingTradeOffer(offer: TradeOffer<BTC, EUR>): boolean {
		throw new Error("Method not implemented.");
	}
}
