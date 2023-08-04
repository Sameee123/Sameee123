var promptSync = require('prompt-sync')();
var currencies = [
    { name: 'US-dollar', code: 'USD', rate: 1.0 },
    { name: 'EUR', code: 'EUR', rate: 0.85 },
    { name: 'Pond', code: 'GBP', rate: 0.73 },
];
function convertCurrency(amount, fromCurrency, toCurrency) {
    var amountUSD = amount / fromCurrency.rate;
    return amountUSD * toCurrency.rate;
}
function showCurrency() {
    currencies.forEach(function (currency, index) {
        console.log("".concat(index + 1, ". ").concat(currency.name, " (").concat(currency.code, ") "));
    });
}
function main() {
    console.log("welcome to currency converter");
    while (true) {
        console.log('\nOptions:');
        console.log('1. Convert Currency');
        console.log('2. Display Available Currencies');
        console.log('3. Exit');
        var choice = parseInt(promptSync("enter your option 1-3"), 10);
        switch (choice) {
            case 1:
                var amount = parseFloat(promptSync('Enter the amount in USD: '));
                console.log('Available Currencies:');
                showCurrency();
                var fromCurrencyIndex = parseInt(promptSync('currency you want to convert from: '), 10);
                var toCurrencyIndex = parseInt(promptSync('currency you want to convert to: '), 10);
                if (fromCurrencyIndex >= 1 && fromCurrencyIndex <= currencies.length &&
                    toCurrencyIndex >= 1 && toCurrencyIndex <= currencies.length) {
                    var fromCurrency = currencies[fromCurrencyIndex - 1];
                    var toCurrency = currencies[toCurrencyIndex - 1];
                    var result = convertCurrency(amount, fromCurrency, toCurrency);
                    console.log("".concat(amount, " USD is equal to ").concat(result.toFixed(2), " ").concat(toCurrency.code));
                }
                else {
                    console.log('Invalid currency selection.');
                }
                break;
            case 2:
                console.log('Available Currencies:');
                showCurrency();
                break;
            case 3:
                console.log('Thank you for using Currency Converter. Have a nice day!');
                process.exit(0);
            default:
                console.log('Invalid choice. Please enter valid options (1-3).');
        }
    }
}
main();
