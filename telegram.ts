import TelegramBot = require("node-telegram-bot-api");
import config from "./config";
import { BitcoindeClient } from "./markets/btcde-client";
import {
	sleep,
	normalTemplate,
	significantDigits,
	formatCurrency,
	rateProfitMargin,
	lineTrim,
	asyncIteratorDebounce,
	testAsyncIteratorDebounce,
	unwrap,
	formatBTC,
	setConfigVariable,
	accessorFromDotted,
} from "./util";
import { KrakenClient } from "./markets/kraken-client";
import { clientCombinations, clients } from "./clients";
import { sumTrades } from "./bilance";
import * as parseDuration from "parse-duration";
import { getProfitMargin } from "./printerUtil";
import { priorities, InteractiveLogger } from "./InteractiveLogger";
import { MarketClient } from "./markets/market-client";
import { CheckedPromise } from "./definitions/promises";

const unresolved = Symbol("unresolved");

type TelegramUser = { id: number };
type TelegramChat = { id: number };
type TelegramMessage = {
	handled?: boolean;
	message_id: number;
	from: TelegramUser;
	chat: TelegramChat;
	text: string;
};
let allowUserAdd = false;
type Message = string | WaitingMessage;

function joinWaitingMessages(separator: string, msg1: WaitingMessage, msg2: WaitingMessage): WaitingMessage {
	const it1 = msg1();
	return () => it1;
	// TODO...
	// const it2 = msg2();
	// return Procedural()
}
const commands: { [cmd: string]: (arg: string, msg: TelegramMessage) => Promise<Message> | Message } = {
	"/help": () => {
		return "Available commands: " + Object.keys(commands).join(", ");
	},
	"/gap": () => {
		const combinations = [...clientCombinations()];
		const getPrice = (api: MarketClient<any, any, any>) => ({
			buy: api
				.getCurrentBuyPrice()
				.then(unwrap)
				.then(formatCurrency),
			sell: api
				.getCurrentSellPrice()
				.then(unwrap)
				.then(formatCurrency),
		});
		const fmt = (p: CheckedPromise<any>) => p.then(unwrap).then(formatCurrency);
		const makeStr = (api1: MarketClient<any, any, any>, api2: MarketClient<any, any, any>) => Procedural`
		${api1.name} -> ${api2.name}: buy @ ${fmt(api1.getCurrentBuyPrice())} € -> sell @ ${fmt(api2.getCurrentSellPrice())} €
		${api1.name} -> ${api2.name}: ${getProfitMargin(api1, api2)
			.then(unwrap)
			.then(x => `${significantDigits(x * 100, 2)}% profit ${rateProfitMargin(x)}`)}
		`;
		// TODO: better with loop
		const stuff = combinations.map(([a, b]) => makeStr(a, b)).reduce((a, b) => joinWaitingMessages("", a, b));
		return stuff;
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
			Buy: ${api
				.getCurrentBuyPrice()
				.then(unwrap)
				.then(formatCurrency)} €
			Sell: ${api
				.getCurrentSellPrice()
				.then(unwrap)
				.then(formatCurrency)} €
		`;
	},
	"/balance": () => {
		return Procedural`
			kraken:
			${clients.kraken
				.getAvailableTradingCurrency()
				.then(unwrap)
				.then(formatBTC)} BTC
			${clients.kraken
				.getAvailableBaseCurrency()
				.then(unwrap)
				.then(formatCurrency)} EUR
			bitcoin.de:
			${clients.bde
				.getAvailableTradingCurrency()
				.then(unwrap)
				.then(formatBTC)} BTC
			${clients.bde
				.getAvailableBaseCurrency()
				.then(unwrap)
				.then(formatCurrency)} EUR
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
	"/setLogChat": async (_, msg: TelegramMessage) => {
		await setConfigVariable(c => (c.telegram.logChatId = msg.chat.id));
		return `Set log chat to ${msg.chat.id}`;
	},
	"/setLogLevel": async (arg: string) => {
		const inx = priorities.indexOf(arg as any);
		if (inx < 0) return "Invalid log level. Must be one of " + priorities.join(", ");
		await setConfigVariable(c => (c.general.logLevel = arg as any));
		return "Log level set to " + arg;
	},
	"/config": async (arg: string, msg: TelegramMessage) => {
		if (msg.from.id !== config.telegram.admin) return "Access denied";
		const x = arg.trim().split(" ");
		if ((x.length !== 1 && x.length !== 2) || !x[0]) return "Syntax: /config key [value]";
		const [key, val] = x;
		if (key.startsWith("secrets")) return "Cannot access secrets via io";
		const { getter, setter } = accessorFromDotted(key);
		const current = getter(config);
		if (typeof val !== "undefined") {
			let parsedValue: any;
			if (typeof current === "number") parsedValue = +val;
			else if (typeof current === "string") parsedValue = val;
			else return "Could not set config variable: unsupported type " + typeof current;
			await setConfigVariable(c => setter(c, parsedValue));
			return `${key}: ${JSON.stringify(current)} → ${JSON.stringify(parsedValue)}`;
		} else {
			return `${key}: ${JSON.stringify(current)}`;
		}
	},
};

export type WaitingMessage = () => AsyncIterableIterator<string>;

type ProceduralArg = Promise<Message> | Message;
type AwaitedProceduralArg = Message;
export function Procedural(strs: TemplateStringsArray, ...args: (ProceduralArg)[]): WaitingMessage {
	return async function* listener() {
		const resolved: (Message | symbol)[] = args.map(p => unresolved);
		const withIndices = args.map((arg, index) =>
			Promise.resolve(arg).then(value => ({ value, index }), value => Promise.reject({ value, index })),
		);
		while (true) {
			yield lineTrim(normalTemplate(strs, ...resolved.map(r => (r === unresolved ? "_[pending...]_" : r))));
			const pending = withIndices.filter((p, i) => resolved[i] === unresolved);
			if (pending.length === 0) return;
			let index: number, value: string | WaitingMessage;
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

export class TelegramInteractiveLogger extends InteractiveLogger {
	bot = new AdvancedTelegramBot();
	async send(message: string) {
		if (!config.telegram.logChatId) {
			console.warn("cannot log to telegram without set logChatId", message);
			return;
		}
		await this.bot.bot.sendMessage(config.telegram.logChatId, message);
	}
	async input(query: string) {
		if (!config.telegram.logChatId) {
			console.warn("cannot log to telegram without set logChatId", query);
			throw "cannot connect";
		}
		await this.bot.bot.sendMessage(config.telegram.logChatId, query, {
			parse_mode: "markdown",
			reply_markup: {
				keyboard: [[{ text: "/yes" }, { text: "/no" }]],
				resize_keyboard: true,
				one_time_keyboard: true,
			},
		});
		const res = await new Promise<string>((res, rej) => {
			this.bot.bot.once("message", (msg: TelegramMessage) => {
				msg.handled = true;
				res(msg.text);
			});
			this.bot.readdMessageListener();
		});
		/*await this.bot.bot.sendMessage(config.telegram.logChatId, `got ${res}`, {
			reply_markup: {
				remove_keyboard: true,
			},
		});*/
		return res;
	}
}

class AdvancedTelegramBot {
	public bot = new TelegramBot(config.secrets.telegram.token, { polling: true });
	constructor() {
		this.bot.on("message", this.handleIncomingMessage);
	}
	/** use this to prepend events because eventemitter3 doesn't have the prependEvent function -.- */
	readdMessageListener() {
		this.bot.removeListener("message", this.handleIncomingMessage);
		this.bot.on("message", this.handleIncomingMessage);
	}
	handleIncomingMessage = async (msg: TelegramMessage) => {
		if (msg.handled) return;
		if (
			!config.telegram.users.includes(msg.from.id) &&
			msg.from.id !== config.telegram.admin &&
			!["/setadmin", "/access"].includes(msg.text)
		) {
			await this.bot.sendMessage(msg.chat.id, "I don't know you ಠ_ಠ.");
			return;
		}
		let cmdName;
		let arg = "";
		for (const command in commands) {
			if (msg.text.startsWith(command)) {
				cmdName = command;
				arg = msg.text.substr(command.length);
			}
		}
		if (!cmdName) {
			console.log("Unknown command", msg.text);
			await this.bot.sendMessage(
				msg.chat.id,
				`Unknown command '${msg.text}', call /help for a list of commands.`,
			);
		} else {
			arg = arg.trim();
			const cmd = commands[cmdName];
			await this.sendMessage(msg.chat.id, await cmd(arg, msg));
		}
	};

	async sendMessage(to: number, result: Message) {
		if (typeof result === "string") {
			if (result.length > 0) await this.bot.sendMessage(to, result);
		} else if (typeof result === "function") {
			await this.sendDelayed(to, result);
		} else {
			console.error("result", result);
			throw "Unknown result type";
		}
	}

	async sendDelayed(chat_id: number, msg: WaitingMessage) {
		let message_id: string | null = null;
		for await (const text of msg()) {
			if (message_id) await this.bot.editMessageText(text, { message_id, chat_id, parse_mode: "markdown" });
			else ({ message_id } = await this.bot.sendMessage(chat_id, text, { parse_mode: "markdown" }));
		}
	}
}
if (require.main === module) {
	const _ = (async () => {
		//const bot = new AdvancedTelegramBot();
		const test = new TelegramInteractiveLogger();
	})();
}
