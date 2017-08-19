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
    abstract getTradeAmountsForBuyVolume(buyVolume: tradingCurrency): { price: baseCurrency, receivedVolume: tradingCurrency };
    /**
     * Returns the *price* for a certain *buyVolume* you have to pay
     * and how much the *receivedVolume* in *tradingCurrency* really is.
     * This function simulates a trade and thus takes all fees into account.
     */
    abstract getTradeAmountsForSellVolume(sellVolume: tradingCurrency): { refund: baseCurrency, soldVolume: tradingCurrency };
}


// Cranck shit for currencies: number.EUR or 1.28.BTC
// TODO find better place to move this to
Object.defineProperty(Number.prototype, 'EUR', { get() { return this } });
Object.defineProperty(Number.prototype, 'BTC', { get() { return this } });