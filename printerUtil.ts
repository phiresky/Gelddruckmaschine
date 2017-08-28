import { currency } from "./definitions/currency";
import { TradeOffer, MarketClient } from "./markets/market-client";
import { unwrap } from "./util";
import { CheckedPromise } from "./definitions/promises";

export async function getProfitMargin<tradingCurrency extends currency, baseCurrency extends currency>(
	startClient: MarketClient<tradingCurrency, baseCurrency, TradeOffer<tradingCurrency, baseCurrency>>,
	endClient: MarketClient<tradingCurrency, baseCurrency, TradeOffer<tradingCurrency, baseCurrency>>,
): CheckedPromise<number> {
	const buyPrice = await startClient.getEffCurrBuyPrice();
	if (!buyPrice.success) return buyPrice;
	const sellPrice = await endClient.getEffCurrSellPrice();
	if (!sellPrice.success) return sellPrice;
	return {
		success: true,
		value: (sellPrice.value.n - buyPrice.value.n) / buyPrice.value.n,
	};
}

export function formatRequest(client: string, tradeAmount: string, price: string, question: string) {
	return `🌐${client} 💰${tradeAmount}  🛒${price} ❓${question}`;
}
