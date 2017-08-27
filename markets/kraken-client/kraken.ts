// adapted from from https://github.com/TimoHanisch/KrakenTypeScriptClient

import request = require("request-promise-native");
import crypto = require("crypto");
import querystring = require("querystring");
import * as _debug from "debug";
import { synchronized } from "../../util";
import { CheckedPromise } from "../../definitions/promises";
const debug = _debug("kraken.com");
/**
 * The KrakenClient offers methods for calling the Kraken API as
 * described here: https://www.kraken.com/help/api
 *
 * @version 0.0.1
 * @author Timo Hanisch <timohanisch@gmail.com>
 */
export class KrakenClient {
	private config: {
		url: string;
		version: string;
		timeout: number;
		key: string;
		secret: string;
	};

	/**
     * Initializes the object with default settings.
     * url: https://api.kraken.com - API url
     * version: 0 - API version
     * timeout: 5000 - Milliseconds before the request is interrupted
     **/
	public constructor(key: string, secret: string) {
		this.config = {
			url: "https://api.kraken.com",
			version: "0",
			timeout: 20000,
			key,
			secret,
		};
	}

	/**
     * Returns the current Kraken server time as stated in https://www.kraken.com/help/api#get-server-time
     *
     * The given callback function is called with the received data or error if one occured.
     *
     * @returns The current request object
     **/
	public getTime() {
		return this.publicMethod("Time");
	}

	/**
     * Returns the current Kraken asset infos as stated in https://www.kraken.com/help/api#get-asset-info
     *
     * The given callback function is called with the received data or error if one occured.
     *
     * @param {any} params An object containing the input data as stated in the API description
     * @returns The current request object
     **/
	public getAssets(params: object) {
		return this.publicMethod("Assets", params);
	}

	/**
     * Returns the current Kraken asset pair infos as stated in https://www.kraken.com/help/api#get-tradable-pairs
     *
     * The given callback function is called with the received data or error if one occured.
     *
     * @returns The current request object
     **/
	public getAssetPairs(params: object) {
		return this.publicMethod("AssetPairs", params);
	}

	/**
     * Returns the current Kraken ticker infos as stated in https://www.kraken.com/help/api#get-ticker-info
     *
     * The given callback function is called with the received data or error if one occured.
     *
     * @returns The current request object
     **/
	public getTicker(params: object) {
		return this.publicMethod("Ticker", params);
	}

	/**
     * Returns the current Kraken OHLC data infos as stated in https://www.kraken.com/help/api#get-ohlc-data
     *
     * The given callback function is called with the received data or error if one occured.
     *
     * @returns The current request object
     **/
	public getOHLC(params: object) {
		return this.publicMethod("OHLC", params);
	}

	/**
     * Returns the current Kraken asset pair depth as stated in https://www.kraken.com/help/api#get-order-book
     *
     * The given callback function is called with the received data or error if one occured.
     *
     * @returns The current request object
     **/
	public getDepth(params: object) {
		return this.publicMethod("Depth", params);
	}

	/**
     * Returns the most recent listed trades on Kraken as stated in https://www.kraken.com/help/api#get-recent-trades
     *
     * The given callback function is called with the received data or error if one occured.
     *
     * @returns The current request object
     **/
	public getTrades(params: object) {
		return this.publicMethod("Trades", params);
	}

	/**
     * Returns the most recent spread data available on Kraken as stated in https://www.kraken.com/help/api#get-recent-spread-data
     *
     * The given callback function is called with the received data or error if one occured.
     *
     * @returns The current request object
     **/
	public getSpread(params: object) {
		return this.publicMethod("Spread", params);
	}

	/**
     * Returns the current balance on Kraken for the user as stated in https://www.kraken.com/help/api#get-account-balance
     *
     * This function requires the API key and secret to be set, otherwise an error will be thrown.
     *
     * The given callback function is called with the received data or error if one occured.
     *
     * @returns The current request object
     **/
	public getBalance() {
		return this.privateMethod("Balance");
	}

	/**
     * Returns the current trade balance on Kraken for the user as stated in https://www.kraken.com/help/api#get-trade-balance
     *
     * This function requires the API key and secret to be set, otherwise an error will be thrown.
     *
     * The given callback function is called with the received data or error if one occured.
     *
     * @returns The current request object
     **/
	public getTradeBalance(params: object) {
		return this.privateMethod("TradeBalanc", params);
	}

	/**
     * Returns the current list of open orders on Kraken for the user as stated in https://www.kraken.com/help/api#get-open-orders
     *
     * This function requires the API key and secret to be set, otherwise an error will be thrown.
     *
     * The given callback function is called with the received data or error if one occured.
     *
     * @returns The current request object
     **/
	public getOpenOrders(params: object) {
		return this.privateMethod("OpenOrders", params);
	}

	/**
     * Returns the current list of closed orders on Kraken for the user as stated in https://www.kraken.com/help/api#get-closed-orders
     *
     * This function requires the API key and secret to be set, otherwise an error will be thrown.
     *
     * The given callback function is called with the received data or error if one occured.
     *
     * @returns The current request object
     **/
	public getClosedOrders(params: object) {
		return this.privateMethod("ClosedOrders", params);
	}

	public queryOrders(params: object) {
		return this.privateMethod("QueryOrders", params);
	}

	public getTradesHistory(params: object) {
		return this.privateMethod("TradesHistory", params);
	}

	public queryTrades(params: object) {
		return this.privateMethod("QueryTrades", params);
	}

	public getOpenPositions(params: object) {
		return this.privateMethod("OpenPositions", params);
	}

	public getLedgers(params: object) {
		return this.privateMethod("Ledgers", params);
	}

	public queryLedgers(params: object) {
		return this.privateMethod("QueryLedgers", params);
	}

	public getTradeVolume(params: object) {
		return this.privateMethod("TradeVolume", params);
	}

	public addOrder(params: object) {
		return this.privateMethod("AddOrder", params);
	}

	public cancelOrder(params: object) {
		return this.privateMethod("CancelOrder", params);
	}

	public getDepositMethods(params: object) {
		return this.privateMethod("DepositMethods", params);
	}

	public getDepositAddresses(params: object) {
		return this.privateMethod("DepositAddresses", params);
	}

	public getDepositStatus(params: object) {
		return this.privateMethod("DepositStatus", params);
	}

	public getWithdrawInfo(params: object) {
		return this.privateMethod("WithdrawInfo", params);
	}

	public withdraw(params: object) {
		return this.privateMethod("Withdraw", params);
	}

	public getWithdrawStatus(params: object) {
		return this.privateMethod("WithdrawStatus", params);
	}

	public cancelWithdraw(params: object) {
		return this.privateMethod("WithdrawCancel", params);
	}

	private publicMethod(method: string, params?: object) {
		params = params || {};
		var url = `${this.config.url}/${this.config.version}/public/${method}`;

		return this.rawRequest("POST", url, {}, params);
	}

	private privateMethod(method: string, params: object = {}) {
		var path = `/${this.config.version}/private/${method}`;
		var url = this.config.url + path;
		const nonce = Date.now() * 1000;
		(params as any).nonce = nonce;

		var signature = this.getMessageSignature(path, params, nonce);

		var headers = {
			"API-Key": this.config.key,
			"API-Sign": signature,
		};

		return this.rawRequest("POST", url, headers, params);
	}

	private getMessageSignature(path: string, request: object, nonce: number) {
		var message = querystring.stringify(request);
		var secret = new Buffer(this.config.secret, "base64");
		var hash = crypto.createHash("sha256");
		var hmac = crypto.createHmac("sha512", secret);

		var hashDigest = hash.update(nonce + message).digest("binary" as any);
		var hmacDigest = hmac.update(path + hashDigest, "binary" as any).digest("base64");

		return hmacDigest;
	}

	@synchronized()
	private async rawRequest(
		method: "POST" | "GET",
		url: string,
		headers: object,
		params: object,
	): CheckedPromise<any> {
		const errorOrigin = `[${method}] ${url} with headers: ${JSON.stringify(headers)} and params: ${JSON.stringify(
			params,
		)}`;
		// Set custom User-Agent string
		(headers as any)["User-Agent"] = "Kraken Typescript API Client";

		var options = {
			url: url,
			method,
			headers,
			form: params,
			timeout: this.config.timeout,
		};
		debug(method, options);
		try {
			var body = await request(options);
		} catch (e) {
			return {
				success: false,
				error: {
					canRetry: true,
					message: "Kraken.com client failed sending the request.",
					origin: errorOrigin,
					raw: {
						error: e,
						options: options,
					},
				},
			};
		}

		try {
			var data = JSON.parse(body);
			debug("RESPONSE", data);
		} catch (e) {
			return {
				success: false,
				error: {
					canRetry: true,
					message: "Kraken.com client could not understand response from server.",
					origin: errorOrigin,
					raw: {
						error: e,
						responseBody: body,
					},
				},
			};
		}
		//If any errors occured, Kraken will give back an array with error strings under
		//the key "error". We should then propagate back the error message as a proper error.
		if (data.error && data.error.length > 0) {
			return {
				success: false,
				error: {
					canRetry: true,
					message: `Kraken API returned an error: ${data.error.join(", ")}`,
					origin: errorOrigin,
					raw: data.error,
				},
			};
		} else {
			return {
				success: true,
				value: data.result,
			};
		}
	}
}
