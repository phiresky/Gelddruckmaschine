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
