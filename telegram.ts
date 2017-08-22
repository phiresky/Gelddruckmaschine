import TelegramBot = require("node-telegram-bot-api");
import config from "./config";
import { BitcoindeClient } from "./markets/btcde-client";
import { sleep, normalTemplate, significantDigits, currency } from "./util";
import { KrakenClient } from "./markets/kraken-client";
import * as printer from "./printer";

const bot = new TelegramBot(config.telegram.token, { polling: true });

const unresolved = Symbol("unresolved");

const commands: { [cmd: string]: () => string | WaitingMessage } = {
	"/getgap": () => {
		const [api1, api2] = [printer.clients.bde, printer.clients.kraken];
		return Procedural`
		bde -> kraken: buy @ ${api1.getCurrentBuyPrice().then(currency)} € -> ${api2.getCurrentSellPrice().then(currency)} €
		bde -> kraken: ${printer.getProfitMarginBasic(api1, api2).then(x => significantDigits(x * 100, 2))}% profit

		kraken -> bde: buy @ ${api2.getCurrentBuyPrice().then(currency)} € -> ${api1.getCurrentSellPrice().then(currency)} €
		kraken -> bde: ${printer.getProfitMarginBasic(api2, api1).then(x => significantDigits(x * 100, 2))}% profit

		`;
	},
	"/status": () => {
		return "Not doing anything";
	},
	"/bdePrice": () => {
		return Procedural`
			Buy: ${printer.clients.bde.getCurrentBuyPrice()}
			Sell: ${printer.clients.bde.getCurrentSellPrice()}
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
	}
};

type WaitingMessage = () => AsyncIterableIterator<string>;

function Procedural(strs: TemplateStringsArray, ...args: Promise<string | number>[]): WaitingMessage {
	return async function* listener() {
		const resolved: (string | number | symbol)[] = args.map(p => unresolved);
		const withIndices = args.map((arg, index) => arg.then(value => ({ value, index })));
		while (true) {
			yield normalTemplate(strs, ...resolved.map(r => (r === unresolved ? "[pending...]" : r)));
			const pending = withIndices.filter((p, i) => resolved[i] === unresolved);
			if (pending.length === 0) return;
			const { index, value } = await Promise.race(pending);
			console.log("got", value);
			resolved[index] = value;
		}
	};
}

async function sendDelayed(bot: TelegramBot, chat_id: string, msg: WaitingMessage) {
	let message_id: string | null = null;
	for await (const text of msg()) {
		console.log("sending", text);
		if (message_id) bot.editMessageText(text, { message_id, chat_id });
		else ({ message_id } = await bot.sendMessage(chat_id, text));
	}
}

bot.on("message", async msg => {
	const cmd = commands[msg.text];
	if (!cmd) bot.sendMessage(msg.chat.id, "Unknown command " + msg.text);
	else {
		let result = await cmd();
		if (typeof result === "string") await bot.sendMessage(msg.chat.id, result);
		else {
			sendDelayed(bot, msg.chat.id, result);
		}
	}
});
