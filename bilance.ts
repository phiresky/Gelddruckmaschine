import * as api from "./markets/btcde-client/generated";
import { BitcoindeClient } from "./markets/btcde-client";
import config from "./config";
import { KrakenClient } from "./markets/kraken-client";
import { Procedural, WaitingMessage } from "./telegram";
import { formatCurrency, significantDigits, formatBTC, unwrap } from "./util";
import { MarketClient } from "./markets/market-client";
import { BTC, EUR } from "./definitions/currency";

export type UnifiedTrade = {
	// how many btc we actually paid / received
	btc: number;
	// how many eur we actually paid / received
	eur: number;
	// how many eur we lost via the trading fees
	feesEur: number;
};
const emptyTrade = { btc: 0, eur: 0, feesEur: 0 } as UnifiedTrade;

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

type tradeGetter = (from: Date) => Promise<UnifiedTrade[]>;

export function sumTrades(clients: MarketClient<BTC, EUR, any>[], from: Date): WaitingMessage {
	const to = new Date();
	to.setDate(to.getDate());
	const alls: Map<MarketClient<BTC, EUR, any>, Promise<UnifiedTrade[]>> = new Map();
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
	const totalbtcineur = total.then(x => x.all.btc * (x.sold.eur - x.bought.eur) / (x.bought.btc - x.sold.btc));
	const ind = Promise.all(
		Array.from(alls).map(
			async ([client, trades]) => [client, await trades.then(sum)] as [MarketClient<BTC, EUR, any>, UnifiedTrade],
		),
	).then(x => x.map(([client, sum]) => `delta ${client.name}: ${formatTrade(sum)}`).join("\n"));
	return Procedural`
	Since ${from.toString()}:

	${ind}
	
	delta all (${clients.map(x => x.name).join(" + ")}): ${total.then(({ all }) => formatTrade(all))}
	average: bought at ${total.then(x => formatCurrency(x.bought.eur / x.bought.btc))}€/BTC, sold at ${total.then(x =>
		formatCurrency(x.sold.eur / x.sold.btc),
	)}€/BTC.

	profit: ${total.then(async x => formatCurrency((await totalbtcineur) + x.all.eur))}€ (${total.then(x =>
		formatCurrency(x.all.eur),
	)}€ + ${total.then(x => formatBTC(x.all.btc))}BTC≈${totalbtcineur.then(formatCurrency)}€)
	`;
}
