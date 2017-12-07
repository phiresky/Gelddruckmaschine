import { MarketClient, TradeOffer } from "./market-client";
import { BTC, EUR } from "../definitions/currency";
import * as Bitstamp from "bitstamp";
import config from "../config";
import { promisify } from "util";
import { As } from "../util";
import { TypedError } from "../definitions/promises";
import { UnifiedTrade } from "../bilance";

type BitstampOffer = TradeOffer<BTC, EUR> & {
	bitcoindeId: string; // optional identifier to know with which order you are dealing
} & As<"bitstampoffer">;

type BitstampTrade = {
	fee: string; // in EUR: "10.94000000";
	order_id: number;
	datetime: string; //'2017-12-07 01:26:19',
	usd: 0;
	btc: string; // '-0.38237620',
	btc_eur: number; // 11918,
	type: "2"; // 	Transaction type: 0 - deposit; 1 - withdrawal; 2 - market trade; 14 - sub account transfer.,
	id: number; // 29829374;
	eur: string; //"4557.16";
};

function parseBitstampTrade(trade: BitstampTrade): UnifiedTrade {
	return {
		btc: Number(trade.btc),
		eur: Number(trade.eur) - Number(trade.fee),
		feesEur: Number(trade.fee),
	};
}
function filterByDate(from: Date, to: Date) {
	return (trade: BitstampTrade) => {
		const d = new Date(trade.datetime);
		return d >= from && d <= to;
	};
}
export class BitstampClient extends MarketClient<BTC, EUR, BitstampOffer> {
	readonly tradingCurrency = "BTC";
	readonly baseCurrency = "EUR";
	readonly risk = 2;
	readonly name = "bitstamp.net";

	bitstamp = new Bitstamp(
		config.secrets.bitstampnet.key,
		config.secrets.bitstampnet.secret,
		config.secrets.bitstampnet.client_id,
		10000,
	);
	getTradesHistory() {
		console.log(this.bitstamp);
		//bs.transactions('btceur', (err, trades) => )
	}
	getCurrentSellPrice(): Promise<{ success: true; value: EUR } | { success: false; error: TypedError }> {
		throw new Error("Method not implemented.");
	}
	getCurrentBuyPrice(): Promise<{ success: true; value: EUR } | { success: false; error: TypedError }> {
		throw new Error("Method not implemented.");
	}
	getEffectiveSellPrice(price: EUR): EUR {
		throw new Error("Method not implemented.");
	}
	getEffectiveBuyPrice(price: EUR): EUR {
		throw new Error("Method not implemented.");
	}
	getTradeAmountsForBuyVolume(
		buyVolume: BTC,
	): Promise<{ success: true; value: { costs: EUR; receivedVolume: BTC } } | { success: false; error: TypedError }> {
		throw new Error("Method not implemented.");
	}
	getRefundForSellVolume(
		sellVolume: BTC,
	): Promise<{ success: true; value: EUR } | { success: false; error: TypedError }> {
		throw new Error("Method not implemented.");
	}
	getCheapestOfferToBuy(
		volume?: EUR | undefined,
	): Promise<{ success: true; value: BitstampOffer } | { success: false; error: TypedError }> {
		throw new Error("Method not implemented.");
	}
	getHighestOfferToSell(
		volume?: BTC | undefined,
	): Promise<{ success: true; value: BitstampOffer } | { success: false; error: TypedError }> {
		throw new Error("Method not implemented.");
	}
	setMarketBuyOrder(
		amount: BTC,
		amount_min?: BTC | undefined,
	): Promise<{ success: true; value: null } | { success: false; error: TypedError }> {
		throw new Error("Method not implemented.");
	}
	setMarketSellOrder(
		amount: BTC,
		amount_min?: BTC | undefined,
	): Promise<{ success: true; value: null } | { success: false; error: TypedError }> {
		throw new Error("Method not implemented.");
	}
	executePendingTradeOffer(
		offer: BitstampOffer,
		amount: BTC,
	): Promise<{ success: true; value: null } | { success: false; error: TypedError }> {
		throw new Error("Method not implemented.");
	}
	getAvailableTradingCurrency(): Promise<{ success: true; value: BTC } | { success: false; error: TypedError }> {
		throw new Error("Method not implemented.");
	}
	getAvailableBaseCurrency(): Promise<{ success: true; value: EUR } | { success: false; error: TypedError }> {
		throw new Error("Method not implemented.");
	}

	async getTradeHistory(from: Date, to: Date): Promise<{ btc: number; eur: number; feesEur: number }[]> {
		const get: (pair: string) => Promise<BitstampTrade[]> = promisify(
			this.bitstamp.user_transactions.bind(this.bitstamp),
		);
		const trans = await get("btceur");
		return trans.filter(filterByDate(from, to)).map(parseBitstampTrade);
	}
}
