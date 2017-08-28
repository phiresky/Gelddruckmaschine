import * as fs from "mz/fs";
import config from "./config";
import { CheckedPromise, CheckedPromiseReturn } from "./definitions/promises";

// Cranck shit for currencies: number.EUR or 1.28.BTC
// TODO find better place to move this to
Object.defineProperty(Number.prototype, "EUR", {
	get() {
		return this.valueOf();
	},
});
Object.defineProperty(Number.prototype, "BTC", {
	get() {
		return this.valueOf();
	},
});
Object.defineProperty(Number.prototype, "n", {
	get() {
		return this.valueOf();
	},
});

export function literal<T extends string | number>(t: T): T {
	return t;
}

export async function sleep(delay_ms: number) {
	return new Promise(resolve => setTimeout(resolve, delay_ms));
}

export async function readFileToObjectAsync<T>(path: string) {
	return fs.readFile(path, "utf8").then((result: any) => JSON.parse(result!) as T);
}

export async function writeObjectToFileAsync(path: string, object: {}) {
	return fs.writeFile(path, JSON.stringify(object, null, "\t"));
}

export type Simplify<T> = { [k in keyof T]: T[k] };
export class As<S extends string> {
	public __as: S;
}

export function minBy<T>(f: (x: T) => number): (a: T, b: T) => T {
	return (a: T, b: T) => {
		return f(a) < f(b) ? a : b;
	};
}
export function normalTemplate(template: TemplateStringsArray, ...substitutions: any[]) {
	return template
		.map((chunk, i) => {
			if (template.length <= i) {
				return chunk;
			}
			return substitutions[i - 1] ? substitutions[i - 1] + chunk : chunk;
		})
		.join("");
}

if (!(Symbol as any).asyncIterator) (Symbol as any).asyncIterator = Symbol("asyncIterator");

/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export function isObject(item: any) {
	return item && typeof item === "object" && !Array.isArray(item);
}

/**
   * Deep merge two objects.
   * @param target
   * @param ...sources
   */
export function mergeDeep(target: any, ...sources: any[]): any {
	if (!sources.length) return target;
	const source = sources.shift();

	if (isObject(target) && isObject(source)) {
		for (const key in source) {
			if (isObject(source[key])) {
				if (!target[key]) Object.assign(target, { [key]: {} });
				mergeDeep(target[key], source[key]);
			} else {
				Object.assign(target, { [key]: source[key] });
			}
		}
	}

	return mergeDeep(target, ...sources);
}

export function significantDigits(inp: number, digits: number) {
	return inp.toLocaleString(undefined, { minimumSignificantDigits: digits, maximumSignificantDigits: digits });
}

export function currency(inp: number | null) {
	if (inp === null) return "null";
	return inp.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function formatBTC(inp: number) {
	if (Math.abs(inp) < 0.000001) inp = 0;
	return inp.toLocaleString(undefined, {
		minimumSignificantDigits: 3,
		maximumSignificantDigits: 3,
		maximumFractionDigits: 6,
	});
}

export function rateProfitMargin(margin: number) {
	if (isNaN(margin)) return "(?)";
	return config.general.emoji.reverse().find(p => margin * 100 >= p[1])![0];
}

export function lineTrim(string: string) {
	return string.trim().split("\n").map(l => l.trim()).join("\n");
}

export function cache(...stuff: any[]) {}

export async function asyncSwap<T>(swap: boolean, { a, b }: { a: () => Promise<T>; b: () => Promise<T> }) {
	return swap ? { b: await b(), a: await a() } : { a: await a(), b: await b() };
}

export function unwrap<T>(res: CheckedPromiseReturn<T>, fallback?: T): T {
	if (res.success) return res.value;
	else {
		console.error(res.error);
		if (fallback === undefined) throw Error("CheckedPromise fail: " + res.error.message);
		else return fallback;
	}
}

export async function* asyncIteratorDebounce<T>(it: AsyncIterator<T>, delay_ms = 100): AsyncIterableIterator<T> {
	let timeout = 0;
	let last: IteratorResult<T> | null = null;
	const wrapped = (next: Promise<IteratorResult<T>>) => next.then(x => ({ next: x, timeout: false }));
	const timeingout = (next: Promise<IteratorResult<T>>) =>
		Promise.race<{ next?: IteratorResult<T>; timeout: boolean }>([
			wrapped(next),
			sleep(delay_ms).then(x => ({ timeout: true })),
		]);
	let rawnext = it.next();
	let next = timeingout(rawnext);
	while (true) {
		const did = await next;
		if (did.timeout) {
			// console.log("timeout");
			if (last) {
				yield last.value;
				last = null;
			}
			next = wrapped(rawnext);
		} else {
			// console.log("got", did.next);
			if (did.next!.done) {
				if (last) yield last.value;

				return;
			}
			last = did.next!;
			rawnext = it.next();
			next = timeingout(rawnext);
		}
	}
}

export async function testAsyncIteratorDebounce() {
	const it = async function*() {
		yield 1;
		await sleep(50);
		yield 2;
		await sleep(50);
		yield 3;
		await sleep(200);
		yield 4;
		yield 5;
		await sleep(50);
		yield 6;
		await sleep(50);
		yield 7;
		await sleep(200);
		yield 8;
		// await sleep(1000);
	};
	for await (const msg of asyncIteratorDebounce(it())) {
		console.log(msg);
	}
	return;
}
process.on("unhandledRejection", (...e: any[]) => {
	console.log("unhandledRejection", ...e);
});

class AsyncLock {
	private unlockPromise: Promise<void> | null = null;
	/**
	 * wait and lock this lock. run the returned function to unlock
	 */
	async lock() {
		if (this.unlockPromise) await this.unlockPromise;
		let resolveFn: () => void;
		this.unlockPromise = new Promise(resolve => (resolveFn = resolve));
		return resolveFn!;
	}
}
/**
 * use this as a decorator for functions for which only a single instance should run at the same time
 */
export function synchronized() {
	return (target: any, key: string, descriptor: PropertyDescriptor) => {
		const original = descriptor.value;
		descriptor.value = async function(this: any, ...args: any[]) {
			if (!this[key + "Lock"]) this[key + "Lock"] = new AsyncLock();
			const methodLock = this[key + "Lock"] as AsyncLock;
			const unlock = await methodLock.lock();
			try {
				return await original.call(this, ...args);
			} finally {
				unlock();
			}
		};
	};
}

export async function checkPromise<T, NewT>(promise: CheckedPromise<T>, modifyFct: (x: T) => NewT) {
	return modifyPromise(
		promise,
		value =>
			({
				success: true,
				value: modifyFct(value),
			} as CheckedPromiseReturn<NewT>),
	);
}
export async function modifyPromise<T, NewT>(
	promise: CheckedPromise<T>,
	modifyFct: (x: T) => CheckedPromiseReturn<NewT>,
) {
	const res = await promise;
	if (!res.success) return res;
	return modifyFct(res.value);
}

const AutoProxy = <T>(ele: T | any): T =>
	new Proxy(ele, {
		get(ele, k) {
			if (typeof ele[k] === "undefined") ele[k] = {};
			if (typeof ele[k] === "object" && ele[k] !== null) return AutoProxy(ele[k]);
			return ele[k];
		},
	});
/** set a config variable, and persist the change to config.auto.json */
export async function setConfigVariable(setter: (c: typeof config) => void) {
	let autoConfig = {};
	try {
		autoConfig = JSON.parse(await fs.readFile("./config.auto.json", "utf8"));
	} catch (e) {}
	setter(AutoProxy(autoConfig));
	await fs.writeFile("./config.auto.json", JSON.stringify(autoConfig, null, "\t"));
	setter(config);
}

export function swapOrderType(type: "sell" | "buy") {
	return type === "sell" ? "buy" : "sell";
}
