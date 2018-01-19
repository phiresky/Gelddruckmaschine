import { MarketClient, TradeOffer } from "./market-client";
import { BTC, EUR } from "../definitions/currency";
import { As, Simplify, minBy, modifyPromise, checkPromise, dryRunExclude, unwrap, notImplemented } from "../util";
import config from "../config";
import { BitcoindeClient as APIClient } from "./btcde-client/bitcoin-de";
import * as API from "./btcde-client/generated";
import { CheckedPromise, CheckedPromiseReturn } from "../definitions/promises";
import { UnifiedTrade } from "../bilance";

export type BitcoindeOffer = Simplify<
	TradeOffer<BTC, EUR> & {
		bitcoindeId: string; // optional identifier to know with which order you are dealing
	} & As<"bitcoindeoffer">
>;

function btcdeDate(d: Date): string {
	// bitcoin.de apparently handles timezones incorrectly, so the js date format
	// 2017-08-16T20:56:15Z (Z = UTC) doesn't work, this converts that to 2017-08-16T20:56:15+02:00
	const d2 = new Date(d.getTime());
	const ofs = -d2.getTimezoneOffset();
	const hrs = (ofs / 60) | 0;
	const mins = (ofs % 60) | 0;
	d2.setMinutes(d2.getMinutes() + ofs);
	return d2.toISOString().slice(0, -5) + ("+" + String(hrs).padStart(2, "0") + ":" + String(mins).padStart(2, "0"));
}

function parseBitcoinDeTrade(trade: API.Trades.showMyTradeDetails.Response.Trade_Details): UnifiedTrade {
	if (trade.type === "buy") {
		return {
			// fee_btc is subtracted from amount we get
			btc: Number(trade.amount) - Number(trade.fee_btc),
			eur: -(trade.volume - trade.fee_eur),
			feesEur: trade.fee_eur,
		};
	} else if (trade.type === "sell") {
		console.log(trade.amount, trade.fee_btc);
		return {
			// fee_btc is *not* subtracted from amount we give
			btc: -Number(trade.amount),
			eur: trade.volume - trade.fee_eur,
			feesEur: trade.fee_eur,
		};
	} else throw Error("unknown trade type " + trade.type);
}

export class BitcoindeClient extends MarketClient<BTC, EUR, BitcoindeOffer> {
	readonly risk = 5;
	readonly name = "Bitcoin.de";
	readonly tradingCurrency = "BTC";
	readonly baseCurrency = "EUR";

	client: APIClient;

	/**
	 *
	 */
	constructor() {
		super();
		this.client = new APIClient(config.secrets.bitcoinde.key, config.secrets.bitcoinde.secret);
	}

	async getCurrentSellPrice(): CheckedPromise<EUR> {
		return await checkPromise(this.getHighestOfferToSell(), offer => offer.price);
	}
	async getCurrentBuyPrice(): CheckedPromise<EUR> {
		return await checkPromise(this.getCheapestOfferToBuy(), offer => offer.price);
	}

	getEffectiveSellPrice(price: EUR): EUR {
		return (price * (1 - config.bitcoinde.feeLessPrice)) as EUR;
	}
	getEffectiveBuyPrice(price: EUR): EUR {
		// buy a * (prize - 0.4%) EUR for a * (1 - 0.8%) BTC =!= 1 BTC
		// => a = 1 / (1 - 0.8%)
		return (price * (1 - config.bitcoinde.feeLessPrice) / (1 - config.bitcoinde.feeLessBTC)) as EUR;
	}

	async getCheapestOfferToBuy(volume?: EUR): CheckedPromise<BitcoindeOffer> {
		return await modifyPromise(
			API.Orders.showOrderbook(this.client, { type: "buy", only_express_orders: 1 }),
			result => {
				if (result.orders.length === 0)
					return {
						success: false,
						error: {
							canRetry: true,
							message: "No buy offers were found. API returned empty list.",
							origin: `BitcoindeClient/getCheapestOfferToBuy (volume: ${volume})`,
							raw: result,
						},
					};
				const orders = result.orders.filter(order => volume === undefined || order.min_volume <= volume);
				if (orders.length === 0)
					return {
						success: false,
						error: {
							canRetry: true,
							message: `No buy offers matching requested volume limit of ${volume} EUR found.`,
							origin: `BitcoindeClient/getCheapestOfferToBuy (volume: ${volume})`,
							raw: result,
						},
					};

				const order = orders.reduce(minBy(order => order.price));
				return {
					success: true,
					value: {
						amount_max: order.max_amount.BTC,
						amount_min: order.min_amount.BTC,
						bitcoindeId: order.order_id,
						price: order.price.EUR,
						time: new Date(),
						type: "sell", // Person offering sells bitcoin -> we can buy them
					} as BitcoindeOffer,
				};
			},
		);
	}
	async getHighestOfferToSell(volume?: BTC | undefined): CheckedPromise<BitcoindeOffer> {
		return await modifyPromise(
			API.Orders.showOrderbook(this.client, { type: "sell", only_express_orders: 1, amount: volume }),
			result => {
				if (result.orders.length === 0)
					return {
						success: false,
						error: {
							canRetry: true,
							message: "No sell offers were found. API returned empty list.",
							origin: `BitcoindeClient/getHighestOfferToSell (volume: ${volume})`,
							raw: result,
						},
					};
				const order = result.orders.reduce(minBy(order => -order.price));
				return {
					success: true,
					value: {
						amount_max: order.max_amount.BTC,
						amount_min: order.min_amount.BTC,
						bitcoindeId: order.order_id,
						price: order.price.EUR,
						time: new Date(),
						type: "buy",
					} as BitcoindeOffer,
				};
			},
		);
	}

	async getTradeAmountsForBuyVolume(buyVolume: BTC): CheckedPromise<{ costs: EUR; receivedVolume: BTC }> {
		return notImplemented;
	}
	async getRefundForSellVolume(sellVolume: BTC): CheckedPromise<EUR> {
		return notImplemented;
	}

	@dryRunExclude({ success: true, value: null } as CheckedPromiseReturn<null>)
	async setMarketBuyOrder(amount: BTC, amount_min?: BTC | undefined): CheckedPromise<null> {
		return notImplemented;
	}
	@dryRunExclude({ success: true, value: null } as CheckedPromiseReturn<null>)
	async setMarketSellOrder(amount: BTC, amount_min?: BTC | undefined): CheckedPromise<null> {
		throw new Error("Dont do market orders on Bitcoin.de, you fool!");
		/*
		const response = await API.Orders.createOrder(this.client, {
			type: "sell",
			max_amount: amount,
			min_amount: amount_min === undefined ? amount : amount_min,
			price: await this.getCurrentSellPrice(),
		});
		*/
	}

	@dryRunExclude({ success: true, value: null } as CheckedPromiseReturn<null>)
	async executePendingTradeOffer(offer: BitcoindeOffer, amount: BTC): CheckedPromise<null> {
		/*
		return await checkPromise(API.Trades.executeTrade(this.client, {
			order_id: offer.bitcoindeId,
			type: offer.type, //{ sell: literal("buy"), buy: literal("sell") }[order.order_type as "buy" | "sell"] as "buy" | "sell",
			amount,
		}), result => null);
		*/
		// TODO Use above checkPromise here when execution should actually happen
		console.warn(`WOULD ACCEPT OFFER: ${offer.type} (_offer_ type), ${amount} BTC, id ${offer.bitcoindeId}`);
		return { success: true, value: null };
	}
	async getAccountInfo(): CheckedPromise<API.Sonstiges.showAccountInfo.Response.Data> {
		return await checkPromise(API.Sonstiges.showAccountInfo(this.client), res => res.data);
	}
	async getAvailableTradingCurrency(): CheckedPromise<BTC> {
		return await checkPromise(this.getAccountInfo(), info => (+info.btc_balance.available_amount).BTC);
	}
	async getAvailableBaseCurrency(): CheckedPromise<EUR> {
		return await checkPromise(this.getAccountInfo(), info => {
			if (!info.fidor_reservation) return (0).EUR;
			const { valid_until, available_amount } = info.fidor_reservation;
			if (new Date(valid_until).getTime() < Date.now() + 5 * 60 * 1000) return (0).EUR;
			return (+available_amount).EUR;
		});
	}

	async getTradeHistory(from: Date, to: Date): Promise<UnifiedTrade[]> {
		//const to = new Date();
		//to.setDate(to.getDate());
		const bitcoinres = API.Trades.showMyTrades(this.client, {
			state: 1,
			date_start: btcdeDate(from),
			date_end: btcdeDate(to),
		});
		const allbc = bitcoinres.then(unwrap).then(res => res.trades.map(parseBitcoinDeTrade));
		return allbc;
	}
}
