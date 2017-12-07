import { BitcoindeClient } from "./markets/btcde-client";
import { KrakenClient } from "./markets/kraken-client";
import { MarketClient } from "./markets/market-client";
import { BTC, EUR } from "./definitions/currency";
import { BitstampClient } from "./markets/bitstamp-client";

export const clients = {
	bde: new BitcoindeClient(),
	kraken: new KrakenClient(),
	bitstamp: new BitstampClient(),
};

export function* clientCombinations(): IterableIterator<[MarketClient<BTC, EUR, any>, MarketClient<BTC, EUR, any>]> {
	for (const client1 of Object.values(clients)) {
		for (const client2 of Object.values(clients)) {
			if (
				client1 === client2 ||
				client1.tradingCurrency !== client2.tradingCurrency ||
				client1.baseCurrency !== client2.baseCurrency
			)
				continue; // Exclude same clients
			yield [client1, client2];
		}
	}
}
