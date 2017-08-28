import { BitcoindeClient } from "./markets/btcde-client";
import { KrakenClient } from "./markets/kraken-client";

export const bde = new BitcoindeClient();
export const kraken = new KrakenClient();
