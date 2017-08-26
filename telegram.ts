import TelegramBot = require("node-telegram-bot-api");
import config from "./config";
import { BitcoindeClient } from "./markets/btcde-client";
import {
	sleep,
	normalTemplate,
	significantDigits,
	currency,
	rateProfitMargin,
	lineTrim,
	asyncIteratorDebounce,
	testAsyncIteratorDebounce,
	unwrap,
	formatBTC,
	setConfigVariable,
} from "./util";
import { KrakenClient } from "./markets/kraken-client";
import { clients } from "./printer";
import * as printer from "./printer";
import { sumTrades } from "./bilance";
import * as parseDuration from "parse-duration";

const unresolved = Symbol("unresolved");

type TelegramUser = { id: number };
type TelegramChat = any;
type TelegramMessage = {
	message_id: number;
	from: TelegramUser;
	chat: TelegramChat;
	text: string;
};
let allowUserAdd = false;
const commands: { [cmd: string]: (arg?: string, msg: TelegramMessage) => string | WaitingMessage } = {
	"/help": () => {
		return "Available commands: " + Object.keys(commands).join(", ");
	},
	"/gap": () => {
		const apis = [clients.bde, clients.kraken];
		const [api1, api2] = apis.map(api => ({
			buy: api.getCurrentBuyPrice().then(unwrap).then(currency),
			sell: api.getCurrentSellPrice().then(unwrap).then(currency),
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
	"/bilance": (durationString = "") => {
		durationString = durationString.trim();
		let duration = parseDuration(durationString);
		if (duration === 0) return "Could not parse duration. Try `/bilance 24h` or `/bilance 60 minutes`";
		const since = new Date(Date.now() - duration);
		return () => asyncIteratorDebounce(sumTrades(clients.bde.client, clients.kraken.api, since)());
	},
	"/price": (apiname = "") => {
		apiname = apiname.trim().toLowerCase();
		const apis = { "kraken.com": "kraken", "bitcoin.de": "bde" } as {
			[name: string]: "kraken" | "bde" | undefined;
		};
		const apiname2 = apis[apiname];
		if (!apiname2) return `Invalid backend ${apiname}. Available backends: ${Object.keys(apis).join(", ")}`;
		const api = clients[apiname2];
		return Procedural`
			Buy: ${api.getCurrentBuyPrice().then(unwrap).then(currency)} €
			Sell: ${api.getCurrentSellPrice().then(unwrap).then(currency)} €
		`;
	},
	"/balance": () => {
		return Procedural`
			kraken:
			${clients.kraken.getAvailableTradingCurrency().then(unwrap).then(formatBTC)} BTC
			${clients.kraken.getAvailableBaseCurrency().then(unwrap).then(currency)} EUR
			bitcoin.de:
			${clients.bde.getAvailableTradingCurrency().then(unwrap).then(formatBTC)} BTC
			${clients.bde.getAvailableBaseCurrency().then(unwrap).then(currency)} EUR
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
	"/setadmin": (_, msg: TelegramMessage) => {
		if (config.telegram.admin) return "Error: Admin already set.";
		return Procedural`
			${setConfigVariable(config => (config.telegram.admin = msg.from.id)).then(
				() => `Success. You (${msg.from.id}) are now the admin.`,
			)}`;
	},
	"/allowUserAdd": (_, msg: TelegramMessage) => {
		if (msg.from.id === config.telegram.admin) {
			allowUserAdd = true;
			return "Ok. One user can add themselves by writing /access";
		} else return "Access denied.";
	},
	"/access": async (_, msg: TelegramMessage) => {
		if (allowUserAdd) {
			await setConfigVariable(c => (c.telegram.users = [...config.telegram.users, msg.from.id]));
			allowUserAdd = false;
			return "User added.";
		} else return "Access denied.";
	},
};

export type WaitingMessage = () => AsyncIterableIterator<string>;

export function Procedural(
	strs: TemplateStringsArray,
	...args: (Promise<string | number> | string | number)[]
): WaitingMessage {
	return async function* listener() {
		const resolved: (string | number | symbol)[] = args.map(p => unresolved);
		const withIndices = args.map((arg, index) =>
			Promise.resolve(arg).then(value => ({ value, index }), value => Promise.reject({ value, index })),
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
async function init() {
	const bot = new TelegramBot(config.telegram.token, { polling: true });
	bot.on("message", async (msg: TelegramMessage) => {
		if (
			!config.telegram.users.includes(msg.from.id) &&
			msg.from.id !== config.telegram.admin &&
			msg.text !== "/setadmin"
		) {
			await bot.sendMessage(msg.chat.id, "I don't know you ಠ_ಠ.");
			return;
		}
		let cmdName;
		let arg;
		for (const command in commands) {
			if (msg.text.startsWith(command)) {
				cmdName = command;
				arg = msg.text.substr(command.length);
			}
		}
		if (!cmdName) {
			console.log("Unknown command", msg.text);
			bot.sendMessage(msg.chat.id, `Unknown command '${msg.text}', call /help for a list of commands.`);
		} else {
			arg = arg.trim();
			const cmd = commands[cmdName];
			let result = await cmd(arg, msg);
			if (typeof result === "string") {
				if (result.length > 0) await bot.sendMessage(msg.chat.id, result);
			} else if (typeof result === "function") {
				sendDelayed(bot, msg.chat.id, result);
			} else {
				console.error("result", result);
				throw "Unknown result type";
			}
		}
	});
}

if (require.main === module) {
	init();
}
