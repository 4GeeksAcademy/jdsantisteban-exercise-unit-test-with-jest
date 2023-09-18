let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (USD) => {
    return (USD * (oneEuroIs.JPY / oneEuroIs.USD)).toFixed(4);
}

const fromEuroToDollar = (EUR) => {
    return (EUR * oneEuroIs.USD);
}

const fromYenToPound = (JPY) => {
    return (JPY * (oneEuroIs.GBP/oneEuroIs.JPY)).toFixed(4);
}

const sum = (a, b) => {
    return a + b;
}

console.log(sum(7, 3));
console.log(fromDollarToYen(3.5));
console.log(fromEuroToDollar(1));
console.log(fromYenToPound(1));

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };