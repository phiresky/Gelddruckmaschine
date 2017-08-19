declare class As<S extends string> {
	private as: S;
}

type EUR = number & As<"EUR">;
type BTC = number & As<"BTC">;
type BCH = number & As<"BCH">;
type currency = EUR | BTC | BCH;

interface Number { EUR: EUR; BTC: BTC }
