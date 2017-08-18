import { Websocket_API } from "./generated";
import * as _debug from "debug";

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
	minProfit: 0.01
};
async function sleep(delay_ms: number) {
    return new Promise(resolve => setTimeout(resolve, delay_ms));
}
let krakenPrice = NaN;
async function updateKrakenPrice() {
	krakenPrice = 123;
}
async function krakenLoop() {
	while (true) {
		await updateKrakenPrice();
		await sleep(30000);
	}
}
async function doTrade(order: Websocket_API.add_order) {

}
export async function printMoney() {
	onBitcoindeOrderCreated(async (order: Websocket_API.add_order) => {
		const profitMargin = getProfitMargin(currentKrakenPrice, order.price);
		debug("found new trade");
		if (profitMargin >= config.minProfit) {
			debug(`new trade has profit margin of ${(profitMargin * 100).toFixed(2)}%`);
			await updateKrakenPrice();
            const accurateProfitMargin = getProfitMargin(currentKrakenPrice, order.price);
            if(accurateProfitMargin >= config.minProfit) {
                debug(`trade has accurate profit margin of ${(profitMargin * 100).toFixed(2)}%`);
                doTrade(order);
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
