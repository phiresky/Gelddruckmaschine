import TelegramBot = require("node-telegram-bot-api");
import config from "./config";

const bot = new TelegramBot(config.telegram.token, { polling: true });

const commands: { [cmd: string]: () => Promise<string> } = {
	"/getgap": async () => {
		return "12%";
	},
	"/status": async () => {
		return "Not doing anything";
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
