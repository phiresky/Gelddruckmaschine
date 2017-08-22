import { Websocket_API } from "./generated";
import * as api from "./generated";

import * as _debug from "debug";
import keyconfig from "./config";
import { BitcoindeClient } from "./bitcoin-de";
import { KrakenClient } from "./kraken";
import { literal } from "./util";
import { onBitcoindeOrderCreated } from "./bitcoin-de-ws";
import { sleep } from "./util";

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
	btcdeSellFee: 0.008,
	/**
	 * Maximum allowed age of Kraken prices in seconds
	 */
	maxPriceAge_SECS: 60
};
type SpreadResult = [number, string, string];
interface MarketPrice {
	time: Date;
	price_EUR: number;
}
interface GetSpreadResult {
	"XXBTZEUR": SpreadResult[];
}

let krakenPrice_EUR: number | "unknown" = "unknown";
async function updateKrakenPrice() {
	try {
		const result: GetSpreadResult = await kraken.getSpread({
			pair: "XXBTZEUR"
		});
		const formattedResult = result.XXBTZEUR.map(
			([timestamp, bid, ask]) =>
				({
					time: new Date(timestamp * 1000),
					price_EUR: parseFloat(bid) // TODO Should be ask?
				} as MarketPrice)
		);
		if (formattedResult.length === 0) throw Error("Empty GetSpreadResult!");

		const lastTime = formattedResult[formattedResult.length - 1].time;
		const timediff_SECS = (new Date().getTime() - lastTime.getTime()) / 1000;
		if (timediff_SECS > config.maxPriceAge_SECS) {
			throw Error(`Last Kraken price is more than ${config.maxPriceAge_SECS} seconds old.`);
		}
		krakenPrice_EUR = formattedResult[formattedResult.length - 1].price_EUR;
		debug(`Fetched new Kraken price: ${krakenPrice_EUR} EUR (from ${lastTime})`);
	} catch (error) {
		if (error.statusCode) {
			error = `Status Code: ${error.statusCode}`;
		}
		krakenPrice_EUR = "unknown";
		console.warn(`Could not fetch new Kraken prices - setting 'unknown'. Error: ${error}`);
	}
}

function getProfitMargin(krakenPrice_EURperBTC: number, btcdePrice_EURperBTC: number) {
	// 1BTC * (Price/BTC - 0,4% * Price) / (1 - 0,8 %) BTC
	const krakenPriceWithFees_EURperBTC = krakenPrice_EURperBTC * (1 - config.krakenFee); // sell --> get less €
	const btcdePriceWithFees_EURperBTC = btcdePrice_EURperBTC * (1 - config.btcdeBuyFee) / (1 - config.btcdeSellFee); // buy --> have to pay more €
	// debug({ krakenPrice_EURperBTC, btcdePrice_EURperBTC, btcdePriceWithFees_EURperBTC, krakenPriceWithFees_EURperBTC });
	return (krakenPriceWithFees_EURperBTC - btcdePriceWithFees_EURperBTC) / btcdePriceWithFees_EURperBTC;
}
type KrakenAddOrderResponse = {
	descr: {
		order: KrakenOrderDescription;
	};
	txid: string[];
};
async function doTrade(order: BitcoindeOrder, amount: number) {
	debug(`executing bitcoin.de trade ${order.order_id} (buying ${amount} BTC for ${order.price} EUR / BTC`);
	await api.Trades.executeTrade(bitcoinde, {
		order_id: order.order_id,
		type: "buy", //{ sell: literal("buy"), buy: literal("sell") }[order.order_type as "buy" | "sell"] as "buy" | "sell",
		amount
	});
	debug(`bitcoin buy success!`);
	const actualAmount_BTC = amount * (1 - config.btcdeSellFee);
	debug(`assuming we got ${actualAmount_BTC} BTC from bitcoin.de trade. executing kraken sale.`);
	const res: KrakenAddOrderResponse = await kraken.addOrder({
		pair: "XXBTZEUR",
		type: "sell",
		ordertype: "market",
		volume: actualAmount_BTC,
		oflags: "viqc"
	});
	debug(`kraken order create success!!`, res);
}

const x = (1.44).EUR;
function getMaxBTCTradeAmount(direction: "bitcoin.de to kraken") {
	return 0.1;
}
/**
 * a subset of Websocket_API.add_order.
 */
interface BitcoindeOrder {
	trading_pair: string;
	order_type: "buy" | "sell" | string;
	order_id: string;
	price: number;
	min_amount: number;
	amount: number;
}
async function bitcoinOrderCreated(order: BitcoindeOrder) {
	if (order.trading_pair !== "btceur") return;
	if (order.order_type === "buy") return;
	debug(`found ${order.order_type} for ${order.amount} BTC for ${order.price} EUR`);
	const orderPrice_EURperBTC = order.price;
	if (krakenPrice_EUR === "unknown") {
		debug("kraken price is unknown, ignoring bitcoin.de offer");
		return;
	}
	const profitMargin = getProfitMargin(krakenPrice_EUR, orderPrice_EURperBTC);
	debug(`found new trade with profit margin of ${(profitMargin * 100).toFixed(2)}%`);
	if (profitMargin >= config.minProfit) {
		debug(`this might work, updating kraken price`);
		await updateKrakenPrice();
		const accurateProfitMargin = getProfitMargin(krakenPrice_EUR, orderPrice_EURperBTC);
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
}
export async function printMoney() {
	debug(`loading currently available offers from bitcoin.de`);
	debug("waiting for new offers on bitcoin.de");
	onBitcoindeOrderCreated(bitcoinOrderCreated);
	while (true) {
		await updateKrakenPrice();

		const existingOrders = await api.Orders.showOrderbook(bitcoinde, { type: "buy", only_express_orders: 1 });
		for (const order of existingOrders.orders)
			await bitcoinOrderCreated({
				order_type: order.type,
				order_id: order.order_id,
				trading_pair: "btceur",
				price: order.price,
				min_amount: order.min_amount,
				amount: order.max_amount
			});
		await sleep(30000);
	}
}

async function run() {
	try {
		await printMoney();
	} catch (error) {
		console.error("could not print money", error);
	}
}

run();
