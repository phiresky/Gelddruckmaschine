import TelegramBot = require("node-telegram-bot-api");
import config from "./config";
import { BitcoindeClient } from "./markets/btcde-client";

const bot = new TelegramBot(config.telegram.token, { polling: true });

const bdeClient = new BitcoindeClient();

const commands: { [cmd: string]: () => Promise<string> } = {
	"/getgap": async () => {
		return "12%";
	},
	"/status": async () => {
		return "Not doing anything";
	},
	"/bdePrice": async () => {
		return `
			Buy: ${await bdeClient.getCurrentBuyPrice()}
			Sell: ${await bdeClient.getCurrentSellPrice()}
		`.trim();
	}
};
bot.on("message", async msg => {
	const cmd = commands[msg.text];
	if (!cmd) bot.sendMessage(msg.chat.id, "Unknown command " + msg.text);
	else {
		const result = await cmd();
		bot.sendMessage(msg.chat.id, result);
	}
});
