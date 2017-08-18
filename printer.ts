const config = {
    /**
     * target amount of BTC to hold. Will try to keep the amount of BTC owned at this value.
     */
    hodlTarget_BTC: 9,
    /**
     * maxStray
     * only create new moneyprinting trades as long as the amount of BTC owned is within [a, b] * hodlTarget 
     */
    maxStray: [0.8, 1.2],
    /**
     * Create trades that have a minimum of this profit relative to the transaction amount
     * 
     * Example: if minProfit is 0.01, then you make 10€ profit for a trade with 1000€ value
     */
    minProfit: 0.01
}