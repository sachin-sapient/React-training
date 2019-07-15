const prices = [1.1, 2.32, 3.68, 4.9];

function calculatePricesWithTax (prices) {
    return function (tax = 0.07) {
        return prices.map((price) =>  (price + (price * tax)).toFixed(2));
    };
}

calculatePricesWithTax(prices)();