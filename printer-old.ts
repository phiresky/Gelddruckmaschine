import * as _debug from "debug";
const debug = _debug("printer");
// COllection of old printer stuff

async function doTrade(order: BitcoindeOrder, amount: number) {
	debug(`executing bitcoin.de trade ${order.order_id} (buying ${amount} BTC for ${order.price} EUR / BTC`);
	await api.Trades.executeTrade(bitcoinde, {
		order_id: order.order_id,
		type: "buy", //{ sell: literal("buy"), buy: literal("sell") }[order.order_type as "buy" | "sell"] as "buy" | "sell",
		amount,
	});
	debug(`bitcoin buy success!`);
	const actualAmount_BTC = amount * (1 - config.btcdeSellFee);
	debug(`assuming we got ${actualAmount_BTC} BTC from bitcoin.de trade. executing kraken sale.`);
	const res: KrakenAddOrderResponse = await kraken.addOrder({
		pair: "XXBTZEUR",
		type: "sell",
		ordertype: "market",
		volume: actualAmount_BTC,
		oflags: "viqc",
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
				amount: order.max_amount,
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
