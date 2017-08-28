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
import * as clients from "./clients";
import { sumTrades } from "./bilance";
import * as parseDuration from "parse-duration";
import { getProfitMarginBasic } from "./printerUtil";

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
export type Priority = "debug" | "info" | "warning" | "error" | "fatal";
const priorities: Priority[] = ["debug", "info", "warning", "error", "fatal"];

let logLevel = priorities.indexOf("debug");

const commands: { [cmd: string]: (arg: string, msg: TelegramMessage) => Promise<Message> | Message } = {
	"/help": () => {
		return "Available commands: " + Object.keys(commands).join(", ");
	},
	"/gap": () => {
		const apis = [clients.bde, clients.kraken];
		const [api1, api2] = apis.map(api => ({
			buy: api
				.getCurrentBuyPrice()
				.then(unwrap)
				.then(currency),
			sell: api
				.getCurrentSellPrice()
				.then(unwrap)
				.then(currency),
		}));
		return Procedural`
		bitcoin.de -> kraken: buy @ ${api1.buy} € -> sell @ ${api2.sell} €
		bitcoin.de -> kraken: ${getProfitMarginBasic(apis[0], apis[1]).then(
			x => `${significantDigits(x * 100, 2)}% profit ${rateProfitMargin(x)}`,
		)}

		kraken -> bitcoin.de: buy @ ${api2.buy} € -> sell @ ${api1.sell} €
		kraken -> bitcoin.de: ${getProfitMarginBasic(apis[1], apis[0]).then(
			x => `${significantDigits(x * 100, 2)}% profit ${rateProfitMargin(x)}`,
		)}

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
			Buy: ${api
				.getCurrentBuyPrice()
				.then(unwrap)
				.then(currency)} €
			Sell: ${api
				.getCurrentSellPrice()
				.then(unwrap)
				.then(currency)} €
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
				.then(currency)} EUR
			bitcoin.de:
			${clients.bde
				.getAvailableTradingCurrency()
				.then(unwrap)
				.then(formatBTC)} BTC
			${clients.bde
				.getAvailableBaseCurrency()
				.then(unwrap)
				.then(currency)} EUR
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
		logLevel = inx;
		return "Log level set to " + arg;
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

export abstract class InteractiveLogger {
	get logLevel() {
		// todo move this here
		return logLevel;
	}
	set logLevel(value: number) {
		logLevel = value;
	}
	async log(priority: Priority, message: string) {
		console.log(priority, message);
		if (this.logLevel <= priorities.indexOf(priority)) this.send(`${priority}: ${message}`);
	}
	setLogLevel(level: Priority) {
		this.logLevel = priorities.indexOf(level);
	}
	debug(message: string) {
		return this.log("debug", message);
	}
	info(message: string) {
		return this.log("info", message);
	}
	warning(message: string) {
		return this.log("warning", message);
	}
	error(message: string) {
		return this.log("error", message);
	}
	fatal(message: string) {
		return this.log("fatal", message);
	}
	abstract send(message: string): Promise<void>;
	abstract input(): Promise<string>;
	async decide(question: string) {
		await this.log("info", question);
		while (true) {
			const response = (await this.input()).toLowerCase();
			if (response === "yes") return true;
			if (response === "no") return false;
			await this.log("warning", "please respond with yes or no");
		}
	}
}

var xyz;
export class TelegramInteractiveLogger extends InteractiveLogger {
	bot = new AdvancedTelegramBot();

	get logChat() {
		return config.telegram.admin;
	}
	async send(message: string) {
		if (!config.telegram.logChatId) {
			console.warn("cannot log to telegram without set logChatId", message);
			return;
		}
		this.bot.bot.sendMessage(config.telegram.logChatId, message);
	}
	async input() {
		return new Promise<string>((res, rej) => {
			this.bot.bot.on("message", (msg: TelegramMessage) => {
				msg.handled = true;
				res(msg.text);
			});
			this.bot.readdMessageListener();
		});
	}
}

class AdvancedTelegramBot {
	public bot = new TelegramBot(config.telegram.token, { polling: true });
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
			this.bot.sendMessage(msg.chat.id, `Unknown command '${msg.text}', call /help for a list of commands.`);
		} else {
			arg = arg.trim();
			const cmd = commands[cmdName];
			this.sendMessage(msg.chat.id, await cmd(arg, msg));
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
			if (message_id) this.bot.editMessageText(text, { message_id, chat_id, parse_mode: "markdown" });
			else ({ message_id } = await this.bot.sendMessage(chat_id, text, { parse_mode: "markdown" }));
		}
	}
}
if (require.main === module) {
	(async () => {
		//const bot = new AdvancedTelegramBot();
		const test = new TelegramInteractiveLogger();
	})();
}
