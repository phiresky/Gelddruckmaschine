import * as api from "./generated";
import { BitcoindeClient } from "./bitcoin-de";
import config from "./config";
import { KrakenClient } from "./kraken";

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
function krakenDate(d: Date): number {
	return d.getTime() / 1000;
}
const bitcoinde = new BitcoindeClient(config.bitcoinde.key, config.bitcoinde.secret);
const kraken = new KrakenClient(config.krakencom.key, config.krakencom.secret);

type UnifiedTrade = {
	// how many btc we actually paid / received
	btc: number;
	// how many eur we actually paid / received
	eur: number;
	// how many eur we lost via the trading fees
	feesEur: number;
};
const emptyTrade = { btc: 0, eur: 0, feesEur: 0 } as UnifiedTrade;
function parseBitcoinDeTrade(trade: api.Trades.showMyTradeDetails.Response.Trade_Details): UnifiedTrade {
	const mult = trade.type === "buy" ? 1 : -1;
	return {
		btc: mult * (Number(trade.amount) - Number(trade.fee_btc)),
		eur: -mult * (trade.volume - trade.fee_eur),
		feesEur: trade.fee_eur
	};
}

interface KrakenTrade {
	ordertxid: string;
	fee: string;
	cost: string;
	margin: string;
	misc: string;
	pair: string;
	time: number;
	ordertype: string;
	price: string;
	type: string;
	vol: string;
}
function parseKrakenTrade(trade: KrakenTrade): UnifiedTrade {
	const mult = trade.type === "buy" ? 1 : -1;
	return {
		btc: mult * Number(trade.vol),
		eur: -mult * Number(trade.cost) - Number(trade.fee),
		feesEur: Number(trade.fee)
	};
}
function sumAll<K extends string>(ele1: { [k in K]: number }, ele2: { [k in K]: number }): { [k in K]: number } {
	const ret = {} as { [k in K]: number };
	for (const k in ele1) {
		ret[k] = ele1[k] + ele2[k];
	}
	return ret;
}

async function sumTrades(bitcoinde: BitcoindeClient, kraken: KrakenClient): Promise<UnifiedTrade> {
	const from = new Date();
	from.setHours(0, 0, 0, 0);
	from.setDate(from.getDate() - 10);
	const to = new Date();
	to.setDate(to.getDate() + 1);
	const res = await api.Trades.showMyTrades(bitcoinde, {
		type: "buy",
		state: 1,
		date_start: btcdeDate(from),
		date_end: btcdeDate(to)
	});
	const totalbc = res.trades.map(parseBitcoinDeTrade).reduce(sumAll, emptyTrade);
	console.log("today's delta bitcoin.de", totalbc);

	const re2 = await kraken.getTradesHistory({
		pair: "XXBTZEUR",
		start: krakenDate(from),
		end: krakenDate(to)
	});
	const trades = Object.values(re2.trades);
	const totalkraken = trades.map(parseKrakenTrade).reduce(sumAll, emptyTrade);
	console.log("today's delta kraken.com", totalkraken);

	const total = sumAll(totalkraken, totalbc);
	console.log("today's delta bitcoinde + kraken", total);
	console.log(
		`average: bought at ${-(totalbc.eur / totalbc.btc).toFixed(2)}€/BTC, sold at ${-(totalkraken.eur /
			totalkraken.btc).toFixed(2)}€/BTC`
	);
	const avg = -totalkraken.eur / totalkraken.btc;
	console.log(
		`today's profit: ${(total.btc * avg + total.eur).toFixed(2)}€ (${total.eur.toFixed(
			2
		)}€, ${total.btc}BTC ≈ ${(total.btc * avg).toFixed(2)}€`
	);
	return total;
}

async function getBalance(bitcoinde: BitcoindeClient, kraken: KrakenClient) {
	//const r = await api.Sonstiges.showAccountInfo(bitcoinde);
	console.log(await api.Orders.showOrderbook(bitcoinde, {
		only_express_orders: 1,
		type: "buy" // gibt angebote zurück wo ich buyen kann (order mit type = 'sell')
	}));
	//console.log(r);
}

// sumTrades(bitcoinde, kraken);
getBalance(bitcoinde, kraken);
