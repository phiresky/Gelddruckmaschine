import * as fs from "mz/fs";

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
	private __as: S;
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

export function currency(inp: number) {
	return inp.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
