import { MarketClient, TradeOffer } from "./market-client";
import { BTC, EUR } from "../definitions/currency";
import * as Bitstamp from "bitstamp";
import config from "../config";
import { promisify } from "util";
import { As, notImplemented } from "../util";
import { TypedError, CheckedPromise } from "../definitions/promises";
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
	async getCurrentSellPrice(): CheckedPromise<EUR> {
		return notImplemented;
	}
	async getCurrentBuyPrice(): Promise<{ success: true; value: EUR } | { success: false; error: TypedError }> {
		return notImplemented;
	}
	getEffectiveSellPrice(price: EUR): EUR {
		throw Error("Methdo not implemented");
	}
	getEffectiveBuyPrice(price: EUR): EUR {
		throw Error("Methdo not implemented");
	}
	async getTradeAmountsForBuyVolume(
		buyVolume: BTC,
	): Promise<{ success: true; value: { costs: EUR; receivedVolume: BTC } } | { success: false; error: TypedError }> {
		return notImplemented;
	}
	async getRefundForSellVolume(
		sellVolume: BTC,
	): Promise<{ success: true; value: EUR } | { success: false; error: TypedError }> {
		return notImplemented;
	}
	async getCheapestOfferToBuy(
		volume?: EUR | undefined,
	): Promise<{ success: true; value: BitstampOffer } | { success: false; error: TypedError }> {
		return notImplemented;
	}
	async getHighestOfferToSell(
		volume?: BTC | undefined,
	): Promise<{ success: true; value: BitstampOffer } | { success: false; error: TypedError }> {
		return notImplemented;
	}
	async setMarketBuyOrder(
		amount: BTC,
		amount_min?: BTC | undefined,
	): Promise<{ success: true; value: null } | { success: false; error: TypedError }> {
		return notImplemented;
	}
	async setMarketSellOrder(
		amount: BTC,
		amount_min?: BTC | undefined,
	): Promise<{ success: true; value: null } | { success: false; error: TypedError }> {
		return notImplemented;
	}
	async executePendingTradeOffer(
		offer: BitstampOffer,
		amount: BTC,
	): Promise<{ success: true; value: null } | { success: false; error: TypedError }> {
		return notImplemented;
	}
	async getAvailableTradingCurrency(): Promise<
		{ success: true; value: BTC } | { success: false; error: TypedError }
	> {
		return notImplemented;
	}
	async getAvailableBaseCurrency(): Promise<{ success: true; value: EUR } | { success: false; error: TypedError }> {
		return notImplemented;
	}

	async getTradeHistory(from: Date, to: Date): Promise<{ btc: number; eur: number; feesEur: number }[]> {
		const get: (pair: string) => Promise<BitstampTrade[]> = promisify(
			this.bitstamp.user_transactions.bind(this.bitstamp),
		);
		const trans = await get("btceur");
		return trans.filter(filterByDate(from, to)).map(parseBitstampTrade);
	}
}
