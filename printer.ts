import { Websocket_API } from "./generated";
import * as api from "./generated";

import * as _debug from "debug";
import keyconfig from "./config";
import { BitcoindeClient } from "./bitcoin-de";
import { KrakenClient } from "./kraken";
import { literal } from "./util";

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
	 * Bitcoin.de fee (eur <-> btc)
	 */
	btcdeFee: 0.004
};
async function sleep(delay_ms: number) {
	return new Promise(resolve => setTimeout(resolve, delay_ms));
}
let krakenPrice = NaN;
async function updateKrakenPrice() {
	krakenPrice = 123;
}

function getProfitMargin(krakenPrice: number, btcdePrice: number) {
	const krakenPriceWithFees = krakenPrice * (1 - config.krakenFee); // sell --> get less €
	const btcdePriceWithFees = btcdePrice * (1 - config.btcdeFee); // buy --> have to pay more €
	return krakenPriceWithFees - btcdePriceWithFees;
}

async function krakenLoop() {
	while (true) {
		await updateKrakenPrice();
		await sleep(30000);
	}
}
async function doTrade(order: Websocket_API.add_order, amount: number) {
	await api.Trades.executeTrade(bitcoinde, {
		order_id: order.order_id,
		type: { sell: literal("buy"), buy: literal("sell") }[order.order_type as "buy" | "sell"] as "buy" | "sell",
		amount
    });
    const actualAmount_BTC = amount * config.TODO;

    await kraken.addOrder({
        pair: "XXBTZEUR",
        type: "sell",
        ordertype: "market",
        volume: 
    });
}
function getMaxBTCTradeAmount(direction: "bitcoin.de to kraken") {
	return 0.1;
}
export async function printMoney() {
	onBitcoindeOrderCreated(async (order: Websocket_API.add_order) => {
		const profitMargin = getProfitMargin(currentKrakenPrice, order.price);
		debug("found new trade");
		if (profitMargin >= config.minProfit) {
			debug(`new trade has profit margin of ${(profitMargin * 100).toFixed(2)}%`);
			await updateKrakenPrice();
			const accurateProfitMargin = getProfitMargin(currentKrakenPrice, order.price);
			if (accurateProfitMargin >= config.minProfit) {
				debug(`trade has accurate profit margin of ${(profitMargin * 100).toFixed(2)}%`);
				doTrade(order);
				let amount = await getMaxBTCTradeAmount("bitcoin.de to kraken");
				if (amount < order.min_amount) {
					debug(`trade needs minimum of ${order.min_amount}, but only have ${amount} available`);
					return;
				} else if (amount > order.amount) {
					debug(`reduced trade amount from max of ${amount} to ${order.amount}`);
					amount = order.amount;
					doTrade(order);
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
