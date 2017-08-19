declare class As<S extends string> {
	private __as: S;
}

export type EUR = number & As<"EUR">;
export type BTC = number & As<"BTC">;
export type BCH = number & As<"BCH">;
export type currency = EUR | BTC | BCH;

declare global {
	interface Number {
		EUR: EUR;
		BTC: BTC;
	}
}
