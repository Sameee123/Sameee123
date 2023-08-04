 promptSync = require ('prompt-sync')();
interface Currency 
{
    name:string;
    code:string;
    rate:number;
}

const currencies:Currency [] =[
    {name:'US-dollar', code:'USD', rate:1.0},
    {name:'EUR', code:'EUR', rate:0.85},
    {name:'Pond', code:'GBP', rate:0.73},

];
function convertCurrency(amount:number, fromCurrency:Currency, toCurrency:Currency):number
{
    const amountUSD= amount/ fromCurrency.rate;
    return amountUSD* toCurrency.rate;
}
function showCurrency()
{
    currencies.forEach((currency,index)=>
    {
        console.log(`${index + 1}. ${currency.name} (${currency.code}) `);
    });
}

function main()
{
    console.log("welcome to currency converter");
    while (true)
    {
        console.log('\nOptions:');
    console.log('1. Convert Currency');
    console.log('2. Display Available Currencies');
    console.log('3. Exit');

    const choice= parseInt(promptSync("enter your option 1-3"),10)
    switch(choice)

    {
        case 1:
            const amount = parseFloat(promptSync('Enter the amount in USD: '));
            console.log('Available Currencies:');
            showCurrency();

        const fromCurrencyIndex = parseInt(promptSync('currency you want to convert from: '), 10);
        const toCurrencyIndex = parseInt(promptSync('currency you want to convert to: '), 10);

        if (fromCurrencyIndex >= 1 && fromCurrencyIndex <= currencies.length &&
            toCurrencyIndex >= 1 && toCurrencyIndex <= currencies.length) {
          const fromCurrency = currencies[fromCurrencyIndex - 1];
          const toCurrency = currencies[toCurrencyIndex - 1];

          const result = convertCurrency(amount, fromCurrency, toCurrency);
          console.log(`${amount} USD is equal to ${result.toFixed(2)} ${toCurrency.code}`);
        } else {
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
