import localConfig from "./config.local";
import { mergeDeep } from "./util";
const defaultConfig = {
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
		key: "",
		secret: ""
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
		key: "",
		secret: ""
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
		minProfit: 0.01
	},
	telegram: {
		token: ""
	}
};
const res: typeof defaultConfig = mergeDeep({}, defaultConfig, localConfig);

export default res;
