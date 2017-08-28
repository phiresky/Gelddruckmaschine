import localConfig from "./config.local";
import { mergeDeep, accessorFromDotted } from "./util";
import * as fs from "fs";
const defaultConfig = {
	secrets: {
		bitcoinde: {
			key: "",
			secret: "",
		},
		krakencom: {
			key: "",
			secret: "",
		},
		telegram: {
			token: "",
		},
	},
	bitcoinde: {
		/**
		 * Bitcoin.de fee (eur -> btc)
		 * you pay 0,4% less in euros for your bitcoins
		 */
		feeLessPrice: 0.004,
		/**
		 * Bitcoin.de fee (eur -> btc)
		 * you receive 0,8% less bitcoins than ordered
		 */
		feeLessBTC: 0.008,
	},
	krakencom: {
		/**
		 * Kraken fee (btc -> eur)
		 */
		krakenFee: 0.002,
		/**
		 * Maximum allowed age of Kraken prices in seconds
		 */
		maxPriceAge_SECS: 60,
	},
	general: {
		/**
		 * target amount of BTC to hold. Will try to keep the amount of BTC owned at this value.
		 */
		hodlTarget_BTC: 9,
		/**
		 * maxStray
		 * only create new moneyprinting trades as long as the amount of BTC owned is within [a, b] * hodlTarget 
		 */
		maxStray: [0.8, 1.2],
		/**
		 * Create trades that have a minimum of this profit relative to the transaction amount
		 * 
		 * Example: if minProfit is 0.01, then you make 10€ profit for a trade with 1000€ value
		 */
		minProfit: -0.01, // TODO change back to 0.01

		emoji: [["😡", -Infinity], ["💩", -2], ["😢", -1], ["😔", -0.5], ["😋", 0.2], ["😁", 0.4], ["🔥", 0.8]] as [
			string,
			number
		][],
		/**
		 * How much the printer will invest to print money
		 */
		maxStake: (2000).EUR, // baseCurrency (EUR)
		ioInterface: "telegram" as "telegram" | "terminal",
		logLevel: 0,

		confirmBeforeRiskyOrder: true,
		confirmBeforeSafeOrder: true,
		printerLoopDelay_ms: 20000,
	},
	telegram: {
		admin: null as null | number,
		users: [] as number[],
		logChatId: null as null | number,
	},
};

try {
	var autoConfigString = fs.readFileSync("./config.auto.json", "utf8");
} catch (e) {
	autoConfigString = "{}";
}
var autoConfig = JSON.parse(autoConfigString);
let mergedConfig: typeof defaultConfig = mergeDeep({}, defaultConfig, autoConfig, localConfig);
for (const arg of process.argv.slice(2)) {
	const [key, value] = arg.split("=");
	if (!key || !value) throw `Invalid argument: ${arg}`;
	let parsedValue;
	const { getter, setter } = accessorFromDotted(key);
	const current = getter(mergedConfig);
	if (typeof current === "undefined") throw `Config key ${key} does not exist.`;
	if (typeof current === "number") parsedValue = +value;
	else if (typeof current === "string") parsedValue = value;
	else throw "Could not set config variable: unsupported type " + typeof current;
	console.log(`set ${key}: ${JSON.stringify(current)} → ${JSON.stringify(parsedValue)}`);
	setter(mergedConfig, parsedValue);
}

export default mergedConfig;
