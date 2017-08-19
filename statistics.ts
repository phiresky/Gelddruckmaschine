import { Websocket_API } from "./generated";
import * as api from "./generated";
import * as fs from "./files";
import * as mzfs from "mz/fs";

import * as _debug from "debug";
import keyconfig from "./config";
import { BitcoindeClient } from "./bitcoin-de";
import { KrakenClient } from "./kraken";
import { literal, sleep } from "./util";

const bitcoinde = new BitcoindeClient(keyconfig.bitcoinde.key, keyconfig.bitcoinde.secret);
const kraken = new KrakenClient(keyconfig.krakencom.key, keyconfig.krakencom.secret);
const debug = _debug("statistics");

const krakenTradesFile = "./data/krakenTrades.json";

type KrakenTradeResult = [string, string, number, string, string, string]; // <price>, <volume>, <time>, <buy/sell>, <market/limit>, <miscellaneous>)
interface KrakenResult<T> {
    XXBTZEUR: T[];
	last?: string;
}

interface krakenTradesFile {
	last: string;
	tradeList: Trade[];
}

interface Trade {
	time_s: number;
	price_EURperBTC: number;
}

async function getBtcdeTrades() {
	const result = (await api.Sonstiges.showPublicTradeHistory(bitcoinde, {})).trades;
	return result.map(({ date, price }) => ({ time_s: date, price_EURperBTC: price } as Trade));
}
async function queryKrakenTrades(last_ns: string) {
	let date_ns = last_ns;
	const tradeList = [] as Trade[];
	do {
		//const startTime = Date.now();
		debug(`Fetch trades since: ${new Date(parseInt(date_ns)/1e6)}`);
		const queryResult: KrakenResult<KrakenTradeResult> = await loopUntilSuccess(kraken.getTrades({
				pair: "XXBTZEUR",
				since: date_ns
			})
		);
		if (queryResult === null) {
			debug(`Could not fetch more trades. Abort.`)
			break;
		}
		
		var newTrades = queryResult.XXBTZEUR.map(
			([price, vol, time, type, ordertype, misc]) =>
				({ time_s: time, price_EURperBTC: parseFloat(price) } as Trade)
		);
		tradeList.push(...newTrades);
        debug(`Fetched ${newTrades.length} trades.`);
        date_ns = queryResult.last!;
		//await sleep(2000 - (Date.now() - startTime));
	} while (newTrades.length > 0);
	return { tradeList: tradeList, last: date_ns };
}
async function getKrakenTrades() {
	let date = new Date();
    date.setDate(date.getDate() - 1);
    let last_ns = String(date.getTime() * 1e6);
	
	const krakenTradeList: Trade[] = [];

	// Check if there is already a cached version
	if (await mzfs.exists(krakenTradesFile)) {
		const krakenTradesFileObject = await fs.readFileToObjectAsync<krakenTradesFile>(krakenTradesFile);
		last_ns = krakenTradesFileObject.last; // only fetch new trades
		krakenTradeList.push(...krakenTradesFileObject.tradeList);
		debug(`Found existing kraken file and imported ${krakenTradeList.length} trades.`)
	}

	const { tradeList: newKrakenTradeList, last: lastTimeFetched } = await queryKrakenTrades(last_ns);
	krakenTradeList.push(...newKrakenTradeList);

	debug(`Have in total ${krakenTradeList.length} trades including ${newKrakenTradeList.length} new ones.`);
	debug("Last trade: " + krakenTradeList[krakenTradeList.length - 1]);

	// write trades to file so we only need to get them once.
	fs.writeObjectToFileAsync(krakenTradesFile, {
		last: lastTimeFetched,
		tradeList: krakenTradeList
	});

	return krakenTradeList;
}

async function main() {
	//const btcdeTradeList = getBtcdeTrades();
	const krakenTradeList = await getKrakenTrades();
}

main();

async function loopUntilSuccess<T>(promise: Promise<T>) {
	let retry = false;
	let retryCounter = 0;
	let result: T | null = null;
	do {
		retry = false;
		try {
			result = await promise;
			retryCounter = 0;
		} catch (error) {
			// TODO distinguish different errors
			if (error && typeof error === 'object') {
				if (error.hasOwnProperty('statusCode') && error.hasOwnProperty('message')) {
					// Error of the API request directly
					// Has keys: name,statusCode,message,error,options,response
					if (error.message.includes('Cloudflare')) {
						debug(`Only got an answer from Cloudflare (status code ${error.statusCode}). Retry in 4s.`);
						await sleep(2000); // Extra delay to give Kraken some time
					} else {
						debug(`Request error! Status code ${error.statusCode} and error response: ${error.response!}`);
					}
				} else {
					debug(`Keys: ${error.keys()}`);
					for (const key in error) {
						debug(`${key} --> ${error[key]}`);
					}
				}
			} else {
				debug(`There occured an error.`);
				debug(`Type: ${typeof error}`);

				debug(error);
			}
			debug(`Retry (${retryCounter}/10)...`);
			retryCounter++;

			await sleep(2000);
			retry = true;
		}
	} while (retry && retryCounter <= 10); // Limit number of retrys
	return result;
}