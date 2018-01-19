import * as api from "./markets/btcde-client/generated";
import { BitcoindeClient } from "./markets/btcde-client";
import config from "./config";
import { KrakenClient } from "./markets/kraken-client";
import { Procedural, WaitingMessage } from "./telegram";
import { formatCurrency, significantDigits, formatBTC, unwrap } from "./util";
import { MarketClient } from "./markets/market-client";
import { currency } from "./definitions/currency";

export type UnifiedTrade = {
	// how many btc we actually received (or paid if negative)
	btc: number;
	// how many eur we actually  received (or paid if negative)
	eur: number;
	// how many eur we lost via the trading fees (already subtracted from the amounts)
	feesEur: number;
};
const emptyTrade = { btc: 0, eur: 0, feesEur: 0 } as UnifiedTrade;

function halfAbsolutify(t: UnifiedTrade): UnifiedTrade {
	return { btc: Math.abs(t.btc / 2), eur: Math.abs(t.eur / 2), feesEur: t.feesEur };
}
function sumAll<K extends string>(ele1: { [k in K]: number }, ele2: { [k in K]: number }): { [k in K]: number } {
	const ret = {} as { [k in K]: number };
	for (const k in ele1) {
		ret[k] = ele1[k] + ele2[k];
	}
	return ret;
}

function formatTrade(t: UnifiedTrade) {
	return `${formatBTC(t.btc)} BTC, ${formatCurrency(t.eur)} €`;
}

function formatPercent(x: number) {
	return significantDigits(x * 100, 3) + "%";
}
type tradeGetter = (from: Date) => Promise<UnifiedTrade[]>;

export function sumTrades<C1 extends currency, C2 extends currency>(
	clients: MarketClient<C1, C2, any>[],
	from: Date,
): WaitingMessage {
	const to = new Date();
	to.setDate(to.getDate());
	const alls: Map<MarketClient<C1, C2, any>, Promise<UnifiedTrade[]>> = new Map();
	for (const client of clients) {
		const all = client.getTradeHistory(from, to);
		alls.set(client, all);
	}
	const sum = (x: UnifiedTrade[]): UnifiedTrade => x.reduce(sumAll, emptyTrade);

	const allTrades = Promise.all(alls.values()).then(trades => trades.reduce((arr, rest) => [...arr, ...rest], []));
	const total = allTrades.then(trades => ({
		all: trades.reduce(sumAll, emptyTrade),
		bought: trades.filter(t => t.btc > 0).reduce(sumAll, emptyTrade),
		sold: trades.filter(t => t.btc < 0).reduce(sumAll, emptyTrade),
	}));
	const totalAbsolute = allTrades.then(trades => trades.map(halfAbsolutify)).then(sum);
	const totalbtcineur = total.then(x => x.all.btc * (x.sold.eur - x.bought.eur) / (x.bought.btc - x.sold.btc));
	const ind = Promise.all(
		Array.from(alls).map(
			async ([client, trades]) => [client, await trades.then(sum)] as [MarketClient<C1, C2, any>, UnifiedTrade],
		),
	).then(x => x.map(([client, sum]) => `delta ${client.name}: ${formatTrade(sum)}`).join("\n"));
	return Procedural`
	Since ${from.toString()}:

	${ind}
	
	Delta all (${clients.map(x => x.name).join(" + ")}): ${total.then(({ all }) => formatTrade(all))}
	Average: bought at ${total.then(x => formatCurrency(-x.bought.eur / x.bought.btc))}€/BTC, sold at ${total.then(x =>
		formatCurrency(x.sold.eur / -x.sold.btc),
	)}€/BTC.

	Transaction volume: ${totalAbsolute.then(formatTrade)} (Total paid fees: ${totalAbsolute.then(x =>
		formatCurrency(x.feesEur),
	)}€)

	Profit/Volume: ${(async () => {
		const profit = formatPercent(((await totalbtcineur) + (await total).all.eur) / (await totalAbsolute).eur);
		return profit;
	})()}

	Profit (after fees): ${total.then(async x => formatCurrency((await totalbtcineur) + x.all.eur))}€ (${total.then(x =>
		formatCurrency(x.all.eur),
	)}€ + ${total.then(x => formatBTC(x.all.btc))}BTC≈${totalbtcineur.then(formatCurrency)}€)
	`;
}
