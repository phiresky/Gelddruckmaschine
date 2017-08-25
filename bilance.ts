import * as api from "./markets/btcde-client/generated";
import { BitcoindeClient } from "./markets/btcde-client/bitcoin-de";
import config from "./config";
import { KrakenClient } from "./markets/kraken-client/kraken";
import { Procedural, WaitingMessage } from "./telegram";
import { currency, significantDigits, formatBTC, unwrap } from "./util";

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
		feesEur: trade.fee_eur,
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
		feesEur: Number(trade.fee),
	};
}
function sumAll<K extends string>(ele1: { [k in K]: number }, ele2: { [k in K]: number }): { [k in K]: number } {
	const ret = {} as { [k in K]: number };
	for (const k in ele1) {
		ret[k] = ele1[k] + ele2[k];
	}
	return ret;
}

function formatTrade(t: UnifiedTrade) {
	return `${formatBTC(t.btc)} BTC, ${currency(t.eur)} €`;
}
export function sumTrades(bitcoinde: BitcoindeClient, kraken: KrakenClient): WaitingMessage {
	const from = new Date();
	from.setHours(0, 0, 0, 0);
	from.setDate(from.getDate());
	const to = new Date();
	to.setDate(to.getDate() + 1);
	const bitcoinres = api.Trades.showMyTrades(bitcoinde, {
		state: 1,
		date_start: btcdeDate(from),
		date_end: btcdeDate(to),
	});
	const allbc = bitcoinres.then(unwrap).then(res => res.trades.map(parseBitcoinDeTrade));
	const totalbc = allbc.then(trades => trades.reduce(sumAll, emptyTrade));

	const krakenres = kraken.getTradesHistory({
		pair: "XXBTZEUR",
		start: krakenDate(from),
		end: krakenDate(to),
	});
	const allkraken = krakenres.then(res => Object.values(res.trades).map(parseKrakenTrade));
	const totalkraken = allkraken.then(trades => trades.reduce(sumAll, emptyTrade));
	const allTrades = Promise.all([allbc, allkraken]).then(([allbc, allkraken]) => [...allbc, ...allkraken]);
	const total = allTrades.then(trades => ({
		all: trades.reduce(sumAll, emptyTrade),
		bought: trades.filter(t => t.btc > 0).reduce(sumAll, emptyTrade),
		sold: trades.filter(t => t.btc < 0).reduce(sumAll, emptyTrade),
	}));
	const totalbtcineur = total.then(x => x.all.btc * (x.sold.eur - x.bought.eur) / (x.bought.btc - x.sold.btc));
	return Procedural`
	today's delta bitcoin.de: ${totalbc.then(formatTrade)}
	today's delta kraken.com: ${totalkraken.then(formatTrade)}
	today's delta bitcoin.de + kraken.com: ${total.then(({ all }) => formatTrade(all))}
	average: bought at ${total.then(x => currency(x.bought.eur / x.bought.btc))}€/BTC, sold at ${total.then(x =>
		currency(x.sold.eur / x.sold.btc),
	)}€/BTC.

	today's profit: ${total.then(async x => currency((await totalbtcineur) + x.all.eur))}€ (${total.then(x =>
		currency(x.all.eur),
	)}€ + ${total.then(x => formatBTC(x.all.btc))}BTC≈${totalbtcineur.then(currency)}€)
	`;
}
if (require.main === module) {
	const msg = sumTrades(bitcoinde, kraken);
	(async () => {
		for await (const res of msg()) {
			console.log(res);
		}
	})();
}
