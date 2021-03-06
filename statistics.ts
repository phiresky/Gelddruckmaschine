import { Websocket_API } from "./markets/btcde-client/generated";
import * as api from "./markets/btcde-client/generated";
import * as fs from "mz/fs";

import * as _debug from "debug";
import keyconfig from "./config";
import { BitcoindeClient } from "./markets/btcde-client/bitcoin-de";
import { KrakenClient } from "./markets/kraken-client/kraken";
import { literal, sleep, readFileToObjectAsync, writeObjectToFileAsync, unwrap } from "./util";
import { RequestError } from "request-promise-native/errors";

const bitcoinde = new BitcoindeClient(keyconfig.secrets.bitcoinde.key, keyconfig.secrets.bitcoinde.secret);
const kraken = new KrakenClient(keyconfig.secrets.krakencom.key, keyconfig.secrets.krakencom.secret);
const debug = _debug("statistics");

const krakenTradesFile = "./data/krakenTrades.json";

type KrakenTradeResult = [string, string, number, string, string, string]; // <price>, <volume>, <time>, <buy/sell>, <market/limit>, <miscellaneous>)
export interface KrakenResult<T> {
	XXBTZEUR: T;
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

type TradeBins = {
	[time_min: number]: {
		mean_EURperBTC: number;
		min_EURperBTC: number;
		max_EURperBTC: number;
		count: number;
	};
};

async function getBtcdeTrades() {
	const result = (await api.Sonstiges.showPublicTradeHistory(bitcoinde, {}).then(unwrap)).trades;
	return result.map(({ date, price }) => ({ time_s: date, price_EURperBTC: price } as Trade));
}
async function queryKrakenTrades(last_ns: string) {
	let date_ns = last_ns;
	const tradeList = [] as Trade[];
	do {
		//const startTime = Date.now();
		debug(`Fetch trades since: ${new Date(parseInt(date_ns) / 1e6)}`);
		const queryResult: KrakenResult<KrakenTradeResult[]> = await loopUntilSuccess(
			kraken.getTrades({
				pair: "XXBTZEUR",
				since: date_ns,
			}),
		);
		if (queryResult === null) {
			debug(`Could not fetch more trades. Abort.`);
			break;
		}

		var newTrades = queryResult.XXBTZEUR.map(
			([price, vol, time, type, ordertype, misc]) =>
				({ time_s: time, price_EURperBTC: parseFloat(price) } as Trade),
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
	if (await fs.exists(krakenTradesFile)) {
		const krakenTradesFileObject = await readFileToObjectAsync<krakenTradesFile>(krakenTradesFile);
		last_ns = krakenTradesFileObject.last; // only fetch new trades
		krakenTradeList.push(...krakenTradesFileObject.tradeList);
		debug(`Found existing kraken file and imported ${krakenTradeList.length} trades.`);
	}

	const { tradeList: newKrakenTradeList, last: lastTimeFetched } = await queryKrakenTrades(last_ns);
	krakenTradeList.push(...newKrakenTradeList);

	debug(`Have in total ${krakenTradeList.length} trades including ${newKrakenTradeList.length} new ones.`);

	// write trades to file so we only need to get them once.
	await writeObjectToFileAsync(krakenTradesFile, {
		last: lastTimeFetched,
		tradeList: krakenTradeList,
	});

	return krakenTradeList;
}

function getTradesBinned(tradeList: Trade[]) {
	const result: TradeBins = {};
	tradeList.forEach(({ time_s, price_EURperBTC }) => {
		const time_min = Math.floor(time_s / 60);
		if (!result[time_min]) {
			result[time_min] = {
				count: 0,
				max_EURperBTC: price_EURperBTC,
				min_EURperBTC: price_EURperBTC,
				mean_EURperBTC: 0,
			};
		}
		const bin = result[time_min];
		bin.count++;
		bin.mean_EURperBTC += price_EURperBTC;
		bin.max_EURperBTC = Math.max(bin.max_EURperBTC, price_EURperBTC);
		bin.min_EURperBTC = Math.min(bin.min_EURperBTC, price_EURperBTC);
	});
	for (const key in result) {
		const bin = result[key];
		bin.mean_EURperBTC /= 1 * bin.count;
	}
	return result;
}

async function main() {
	//const btcdeTradeList = getBtcdeTrades();
	const krakenTradeList = await getKrakenTrades();

	const krakenTradesBinned = getTradesBinned(krakenTradeList);
	debug(krakenTradesBinned);
}

const _ = main();

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
			if (error && typeof error === "object") {
				if (error.hasOwnProperty("statusCode") && error.hasOwnProperty("message")) {
					// Error of the API request directly
					// Has keys: name,statusCode,message,error,options,response
					if (error.message.includes("Cloudflare")) {
						debug(`Only got an answer from Cloudflare (status code ${error.statusCode}).`);
					} else {
						debug(`Request error! Status code ${error.statusCode} and error response: ${error.response!}`);
					}
				} else if (error instanceof RequestError) {
					debug(`Got an request error with message: ${error.message}`);
					debug(`Stack: ${error.stack}`);
					// Konkret kam an --> name: RequestError, message/cause/error: Error: ESOCKETTIMEDOUT;
					for (const key in error) {
						debug(`${key} --> ${(error as any)[key]}`);
					}
				} else {
					debug("Error: " + error);
					debug(`Keys: ${Object.keys(error)}`);
					for (const key in error) {
						debug(`${key} --> ${error[key]}`);
					}
				}
			} else {
				debug(`There occured an error.`);
				debug(`Type: ${typeof error}`);

				debug(error);
			}
			const retryDelay = 2 ** (retryCounter % 5);
			debug(`Retry (already tried ${retryCounter} / 10) in ${retryDelay} seconds...`);
			retryCounter++;

			await sleep(retryDelay * 1000);
			retry = true;
		}
	} while (retry && retryCounter <= 10); // Limit number of retrys
	return result;
}
