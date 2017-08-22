import TelegramBot = require("node-telegram-bot-api");
import config from "./config";
import { BitcoindeClient } from "./markets/btcde-client";
import { sleep, normalTemplate, significantDigits, currency, rateProfitMargin, lineTrim } from "./util";
import { KrakenClient } from "./markets/kraken-client";
import { clients } from "./printer";
import * as printer from "./printer";

const bot = new TelegramBot(config.telegram.token, { polling: true });

const unresolved = Symbol("unresolved");

const commands: { [cmd: string]: () => string | WaitingMessage } = {
	"/help": () => {
		return "Available commands: " + Object.keys(commands).join(", ");
	},
	"/gap": () => {
		const apis = [clients.bde, clients.kraken];
		const [api1, api2] = apis.map(api => ({
			buy: api.getCurrentBuyPrice().then(currency),
			sell: api.getCurrentSellPrice().then(currency),
		}));
		return Procedural`
		bitcoin.de -> kraken: buy @ ${api1.buy} € -> sell @ ${api2.sell} €
		bitcoin.de -> kraken: ${printer
			.getProfitMarginBasic(apis[0], apis[1])
			.then(x => `${significantDigits(x * 100, 2)}% profit ${rateProfitMargin(x)}`)}

		kraken -> bitcoin.de: buy @ ${api2.buy} € -> sell @ ${api1.sell} €
		kraken -> bitcoin.de: ${printer
			.getProfitMarginBasic(apis[1], apis[0])
			.then(x => `${significantDigits(x * 100, 2)}% profit ${rateProfitMargin(x)}`)}

		`;
	},
	"/status": () => {
		return "Not doing anything";
	},
	"/bdePrice": () => {
		return Procedural`
			Buy: ${clients.bde.getCurrentBuyPrice()}
			Sell: ${clients.bde.getCurrentSellPrice()}
		`;
	},
	"/balance": () => {
		return Procedural`
			kraken:
			${clients.kraken.getAvailableTradingCurrency().then(x => significantDigits(x, 3))} BTC
			${clients.kraken.getAvailableBaseCurrency().then(currency)} EUR
			bitcoin.de:
			${clients.bde.getAvailableTradingCurrency().then(x => significantDigits(x, 3))} BTC
			${clients.bde.getAvailableBaseCurrency().then(currency)} EUR
		`;
	},
	/*"/getMargin": () => {
		return Procedural`
			Current margin: ${printer.getProfitMargin(printer.clients.bde, printer.clients.kraken, 10)}
			`;
	},*/
	"/asyncTest": () => {
		return Procedural`
		resolving after:
			5s: ${sleep(5000).then(x => "yep")}
			10s: ${sleep(10000).then(x => "yep")}
			5s: ${sleep(5000).then(x => "yep")}
			15s: ${sleep(15000).then(x => "yep")}
		`;
	},
};

type WaitingMessage = () => AsyncIterableIterator<string>;

function Procedural(strs: TemplateStringsArray, ...args: Promise<string | number>[]): WaitingMessage {
	return async function* listener() {
		const resolved: (string | number | symbol)[] = args.map(p => unresolved);
		const withIndices = args.map((arg, index) =>
			arg.then(value => ({ value, index }), value => Promise.reject({ value, index })),
		);
		while (true) {
			yield lineTrim(normalTemplate(strs, ...resolved.map(r => (r === unresolved ? "_[pending...]_" : r))));
			const pending = withIndices.filter((p, i) => resolved[i] === unresolved);
			if (pending.length === 0) return;
			let index: number, value: any;
			try {
				({ index, value } = await Promise.race(pending));
			} catch (e) {
				console.warn("Error", e.value);
				index = e.index;
				value = "_[Error:" + e.value + "]_";
			}
			resolved[index] = value;
		}
	};
}

async function sendDelayed(bot: TelegramBot, chat_id: string, msg: WaitingMessage) {
	let message_id: string | null = null;
	for await (const text of msg()) {
		if (message_id) bot.editMessageText(text, { message_id, chat_id, parse_mode: "markdown" });
		else ({ message_id } = await bot.sendMessage(chat_id, text, { parse_mode: "markdown" }));
	}
}

bot.on("message", async msg => {
	const cmd = commands[msg.text];
	if (!cmd) {
		console.log("Unknown command", msg.text);
		bot.sendMessage(msg.chat.id, `Unknown command '${msg.text}', call /help for a list of commands.`);
	} else {
		let result = await cmd();
		if (typeof result === "string") await bot.sendMessage(msg.chat.id, result);
		else {
			sendDelayed(bot, msg.chat.id, result);
		}
	}
});
