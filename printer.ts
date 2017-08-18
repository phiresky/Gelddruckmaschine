import { Websocket_API } from "./generated";
import * as api from "./generated";

import * as _debug from "debug";
import keyconfig from "./config";
import { BitcoindeClient } from "./bitcoin-de";
import { KrakenClient } from "./kraken";
import { literal } from "./util";
import { onBitcoindeOrderCreated } from "./bitcoin-de-ws";

const bitcoinde = new BitcoindeClient(keyconfig.bitcoinde.key, keyconfig.bitcoinde.secret);
const kraken = new KrakenClient(keyconfig.krakencom.key, keyconfig.krakencom.secret);
const debug = _debug("printer");

const config = {
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
	minProfit: 0.01,
	/**
	 * Kraken fee (btc -> eur)
	 */
	krakenFee: 0.002,
	/**
	 * Bitcoin.de fee (eur -> btc)
	 * you pay 0,4% less in euros for your bitcoins
	 */
	btcdeBuyFee: 0.004,
	/**
	 * Bitcoin.de fee (eur -> btc)
	 * you receive 0,8% less bitcoins than ordered
	 */
	btcdeSellFee: 0.008
};
async function sleep(delay_ms: number) {
	return new Promise(resolve => setTimeout(resolve, delay_ms));
}
let krakenPrice = NaN;
async function updateKrakenPrice() {
	krakenPrice = 123;
}

function getProfitMargin(krakenPrice_EURperBTC: number, btcdePrice_EURperBTC: number) {
	// 1BTC * (Price/BTC - 0,4% * Price) / (1 - 0.08 %) BTC
	const krakenPriceWithFees_EURperBTC = krakenPrice_EURperBTC * (1 - config.krakenFee); // sell --> get less €
	const btcdePriceWithFees_EURperBTC = btcdePrice_EURperBTC * (1 - config.btcdeBuyFee) / (1 - config.btcdeSellFee); // buy --> have to pay more €
	return (krakenPriceWithFees_EURperBTC - btcdePriceWithFees_EURperBTC) / btcdePriceWithFees_EURperBTC;
}

async function krakenLoop() {
	while (true) {
		await updateKrakenPrice();
		await sleep(30000);
	}
}
async function doTrade(order: Websocket_API.add_order, amount: number) {
    debug(`executing bitcoin.de trade ${order.order_id} (buying ${amount} BTC for ${order.price} EUR / BTC`);
	await api.Trades.executeTrade(bitcoinde, {
		order_id: order.order_id,
		type: "buy", //{ sell: literal("buy"), buy: literal("sell") }[order.order_type as "buy" | "sell"] as "buy" | "sell",
		amount
	});
	const actualAmount_BTC = amount * (1 - config.btcdeSellFee);
    debug(`assuming we got ${actualAmount_BTC} BTC from bitcoin.de trade. executing kraken sale.`);
	await kraken.addOrder({
		pair: "XXBTZEUR",
		type: "sell",
		ordertype: "market",
		volume: actualAmount_BTC,
		oflags: "viqc"
    });
    debug(`success`);
}
function getMaxBTCTradeAmount(direction: "bitcoin.de to kraken") {
	return 0.1;
}
export async function printMoney() {
	onBitcoindeOrderCreated(async (order: Websocket_API.add_order) => {
		const profitMargin = getProfitMargin(krakenPrice, order.price);
		debug("found new trade");
		if (profitMargin >= config.minProfit) {
			debug(`new trade has profit margin of ${(profitMargin * 100).toFixed(2)}%`);
			await updateKrakenPrice();
			const accurateProfitMargin = getProfitMargin(krakenPrice, order.price);
			if (accurateProfitMargin >= config.minProfit) {
				debug(`trade has accurate profit margin of ${(profitMargin * 100).toFixed(2)}%`);
				let amount = await getMaxBTCTradeAmount("bitcoin.de to kraken");
				if (amount < order.min_amount) {
					debug(`trade needs minimum of ${order.min_amount}, but only have ${amount} available`);
					return;
				} else if (amount > order.amount) {
					debug(`reduced trade amount from max of ${amount} to ${order.amount}`);
					amount = order.amount;
					doTrade(order, amount);
				}
				return;
			} else {
				debug(`opportunity disappeared`);
				return;
			}
		} else {
			debug("new trade not worthy");
		}
	});
}

async function run() {
	try {
		krakenLoop();
		await printMoney();
	} catch (error) {
		console.error("could not print money", error);
	}
}

run();
