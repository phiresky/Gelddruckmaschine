export abstract class MarketClient<tradingCurrency, baseCurrency> {
	/**
     * Initializes a market client.
     *
     * Args:
     *   baseCurrency: The currency in which all amounts are given (e.g. EUR)
     *   tradingCurrency: The currency that will be traded with.
     */
	constructor() {
		return;
	}

	/**
     * Returns the current price one entity of *tradingCurrency*
     * can be sold at on this market, measured in *baseCurrency*.
     *
     * Remark: This price does not include any fees.
     */
	abstract getCurrentSellPrice(): baseCurrency;
	/**
     * Returns the current price in *baseCurrency* for which
     * you can buy one entity of *tradingCurrency*.
     *
     * Remark: This price does not include any fees.
     */
	abstract getCurrentBuyPrice(): baseCurrency;

	/**
     * Returns the *price* for a certain *buyVolume* you have to pay
     * and how much the *receivedVolume* in *tradingCurrency* really is.
     * This function simulates a trade and thus takes all fees into account.
     */
	abstract getTradeAmountsForBuyVolume(
		buyVolume: tradingCurrency
	): { price: baseCurrency; receivedVolume: tradingCurrency };

	// TODO Think if it makes sense that you could later on have sold a different volume than you wanted to sell
	/**
     * Returns the refund in *baseCurrency* you get when selling a certain *sellVolume*.
     * This function simulates a trade and thus takes all fees into account.
     */
	abstract getRefundForSellVolume(sellVolume: tradingCurrency): baseCurrency;

	/**
     * Returns the cheapest offer currently open where you can buy
     * *tradingCurrency* for *baseCurrency*.
     */
	abstract getCheapestOfferToBuy(): TradeOffer<tradingCurrency, baseCurrency>;
	/**
     * Returns the cheapest offer currently open where you can buy
     * *tradingCurrency* for *baseCurrency* that you can fulfil
     * with able to spend *volume* in the *baseCurrency*. 
     */
	abstract getCheapestOfferToBuy(volume: baseCurrency): TradeOffer<tradingCurrency, baseCurrency>;
	/**
     * Returns the highest open offer where you can sell
     * *tradingCurrency* and get *baseCurrency* instead.
     */
	abstract getHighestOfferToSell(): TradeOffer<tradingCurrency, baseCurrency>;
	/**
     * Returns the highest open offer where you can sell
     * up to *volume* of *tradingCurrency* and get
     * *baseCurrency* back instead.
     */
	abstract getHighestOfferToSell(volume: tradingCurrency): TradeOffer<tradingCurrency, baseCurrency>;
}

export interface TradeOffer<tradingCurrency, baseCurrency> {
	amount_min: tradingCurrency;
	amount_max: tradingCurrency;
	price: baseCurrency; // per entity of tradingCurrency
	time: Date;
}

// Cranck shit for currencies: number.EUR or 1.28.BTC
// TODO find better place to move this to
Object.defineProperty(Number.prototype, "EUR", {
	get() {
		return this;
	}
});
Object.defineProperty(Number.prototype, "BTC", {
	get() {
		return this;
	}
});
