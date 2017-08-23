import * as crypto from "crypto";
import * as request from "request-promise-native";
import * as querystring from "querystring";
import * as _debug from "debug";
const debug = _debug("bitcoin.de");

type Response<T> = {
	/** Liste mit Error-Meldungen und dazugehörigen Error-Codes. */
	errors: {
		/** Infotext */
		message: string;
		/** Fehlercode */
		code: number;
		/**Feld, auf den sich der Fehler bezieht. */
		field?: string;
	}[];
	/** Anzahl aktuell verbleibender Credits */
	credits: number;
	maintenance?: {
		/** Infotext */
		message: string;
		/** Start der Arbeiten (Format: 2015-04-07T12:23:04+02:00 gemäß RFC 3339) */
		start: string;
		/** Voraussichtliches Ende der Arbeiten (Format: 2015-04-07T12:23:04+02:00 gemäß RFC 3339) */
		end: string;
	}[];
} & T;
/**
 * BitcoindeClient connects to the bitcoin.de API
 * @param {String} key    API Key
 * @param {String} secret API Secret
 */
export class BitcoindeClient {
	noncer = new Noncer();
	config: {
		url: string;
		version: string;
		agent: string;
		key: string;
		secret: string;
		timeoutMS: number;
	};
	constructor(key: string, secret: string) {
		this.config = {
			url: "https://api.bitcoin.de/v1/",
			version: "v1",
			agent: "Money Printer",
			key,
			secret,
			timeoutMS: 20000,
		};
	}
	emptyHash = crypto.createHash("md5").digest("hex");
	/**
     * Send the actual HTTP request
     * @param    method   HTTP method
     * @param     url      URL to request
     * @param    params   POST body
     * @return {Object}            The request object
     */
	async rawRequest(method: "GET" | "POST" | "DELETE", url: string, params: any) {
		url = url.replace(/:([a-z_]+)/g, (_, k) => {
			if (!(k in params)) throw Error(`Parameter ${k} missing`);
			const v = params[k];
			delete params[k];
			return v;
		});
		url = this.config.url + url;
		var nonce = this.noncer.generate();
		let md5Query = this.emptyHash;
		const options = {
			// empty string hash
			url: url,
			timeout: this.config.timeoutMS,
			form: null as any,
			headers: {},
		};

		if (params) {
			switch (method) {
				case "POST":
					var queryParams: { [name: string]: any } = {};
					Object.keys(params).sort().forEach(function(idx) {
						queryParams[idx] = params[idx];
					});
					md5Query = crypto.createHash("md5").update(querystring.stringify(queryParams)).digest("hex");
					options.form = queryParams;
					break;
				case "GET":
				case "DELETE":
					const p = querystring.stringify(params);
					if (p) options.url += "?" + p;
					break;
				default:
					throw Error(method + " not defined");
			}
		}

		const signature = crypto
			.createHmac("sha256", this.config.secret)
			.update(method.toUpperCase() + "#" + options.url + "#" + this.config.key + "#" + nonce + "#" + md5Query)
			.digest("hex");

		debug(method, options);
		options.headers = {
			"User-Agent": this.config.agent,
			"X-API-KEY": this.config.key,
			"X-API-NONCE": nonce,
			"X-API-SIGNATURE": signature,
		};
		try {
			var response = await {
				GET: request.get,
				DELETE: request.delete,
				POST: request.post,
			}[method](options);
		} catch (e) {
			if (e.name === "StatusCodeError") {
				console.error(url, "returned", e.statusCode);
				console.log("body", e.response.body);
				throw e;
			} else {
				console.error(url + ": failed: ", e);
				throw e;
			}
		}
		try {
			var data = JSON.parse(response) as Response<any>;
		} catch (e) {
			console.error("response was:", response);
			throw new Error(url + ": Could not understand response from server: " + e);
		}

		if (data.errors && data.errors.length > 0) {
			throw new Error("Bitcoin.de API returned errors: " + data.errors);
		}
		debug("RESPONSE", data);
		return data;
	}
}

class Noncer {
	last = 0;
	counter = 0;
	// if you call Date.now() to fast it will generate
	// the same ms, helper to make sure the nonce is
	// truly unique (supports up to 999 calls per ms).
	generate() {
		var now = Date.now();

		this.counter = now === this.last ? this.counter + 1 : 0;
		this.last = now;

		// add padding to nonce
		var padding = this.counter < 10 ? "000" : this.counter < 100 ? "00" : this.counter < 1000 ? "0" : "";

		return now + padding + this.counter;
	}
}

export function rawRequest(btcde: BitcoindeClient, method: "GET" | "POST" | "DELETE", url: string, params: object) {
	return btcde.rawRequest(method, url, params);
}
