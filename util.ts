export function literal<T extends string | number>(t: T): T {
	return t;
}

export async function sleep(delay_ms: number) {
	return new Promise(resolve => setTimeout(resolve, delay_ms));
}