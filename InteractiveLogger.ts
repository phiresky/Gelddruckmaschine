import config from "./config";
import * as readline from "readline";

export type Priority = "debug" | "info" | "warning" | "error" | "fatal";
export const priorities: Priority[] = ["debug", "info", "warning", "error", "fatal"];

export abstract class InteractiveLogger {
	get logLevel() {
		return priorities.indexOf(config.general.logLevel as any);
	}
	async log(priority: Priority, message: string) {
		console.log(priority, message);
		if (this.logLevel <= priorities.indexOf(priority)) this.send(`${priority}: ${message}`);
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
		await this.info(question);
		while (true) {
			const response = (await this.input()).toLowerCase();
			if (response === "/yes") return true;
			if (response === "/no") return false;
			await this.log("warning", "please respond with /yes or /no");
		}
	}
}

export class TerminalLogger extends InteractiveLogger {
	rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});
	async send(message: string): Promise<void> {
		console.log(message);
	}
	async input(): Promise<string> {
		return new Promise<string>(resolve => this.rl.question("", answer => resolve(answer)));
	}
}
