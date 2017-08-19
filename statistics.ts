import { Websocket_API } from "./generated";
import * as api from "./generated";

import * as _debug from "debug";
import keyconfig from "./config";
import { BitcoindeClient } from "./bitcoin-de";
import { KrakenClient } from "./kraken";
import { literal, sleep } from "./util";

const bitcoinde = new BitcoindeClient(keyconfig.bitcoinde.key, keyconfig.bitcoinde.secret);
const kraken = new KrakenClient(keyconfig.krakencom.key, keyconfig.krakencom.secret);
const debug = _debug("statistics");

type KrakenTradeResult = [string, string, number, string, string, string]; // <price>, <volume>, <time>, <buy/sell>, <market/limit>, <miscellaneous>)
interface KrakenResult<T> {
    XXBTZEUR: T[];
    last?: string
}

interface Trade {
	time: Date;
	price_EURperBTC: number;
}

async function getBtcdeTrades() {
	const result = (await api.Sonstiges.showPublicTradeHistory(bitcoinde, {})).trades;
	return result.map(({ date, price }) => ({ time: new Date(date * 1000), price_EURperBTC: price } as Trade));
}
async function getKrakenTrades() {
	let date = new Date();
    date.setDate(date.getDate() - 0.1);
    let date_ns = String(date.getTime() * 1e6);
	const tradeList = [] as Trade[];
	do {
		//const startTime = Date.now();
		debug(`Fetch trades since: ${date}`);
		const { XXBTZEUR: result, last }: KrakenResult<KrakenTradeResult> = await loopUntilSuccess(kraken.getTrades({
				pair: "XXBTZEUR",
				since: date_ns
			})
		);
		var newTrades = result.map(
			([price, vol, time, type, ordertype, misc]) =>
				({ time: new Date(time * 1000), price_EURperBTC: parseFloat(price) } as Trade)
		);
		tradeList.push(...newTrades);
        debug(`Fetched ${newTrades.length} trades.`);
        date_ns = last!;
		//await sleep(2000 - (Date.now() - startTime));
	} while (newTrades.length > 0);
	return tradeList;
}

async function main() {
	//const btcdeTradeList = getBtcdeTrades();
	const krakenTradeList = await getKrakenTrades();
	debug(krakenTradeList);
	debug(krakenTradeList[krakenTradeList.length - 1]);
}

main();

async function loopUntilSuccess<T>(promise: Promise<T>) {
	let retry = false;
	let result: T | null = null;
	do {
		retry = false;
		try {
			result = await promise;
		} catch (error) {
			// TODO distinguish different errors
			if (typeof error === 'object' && error.hasOwnKey('statusCode') && error.hasOwnKey('response')) {
				// Error of the API request directly
				// Has keys: name,statusCode,message,error,options,response
				if (error.statusCode == 504 && error.response.includes('Cloudflare')) {
					debug("Kraken Request only reached Cloudflare. Retry in 4s.");
				} else {
					debug(`Request error! Status code ${error.statusCode} and error message: ${error.message!}`);
				}
			} else {
				debug(`There occured an error. Retry...`);
				debug(`Type: ${typeof error}`);
				debug(error);
			}
			await sleep(2*2000);
			retry = true;
		}
	} while (retry);
	return result;
}