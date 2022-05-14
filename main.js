const input = require("sync-input");
let amount = 0;
let result = 0;
const currencies = { USD: 1, JPY: 113.5, EUR: 0.89, RUB: 74.36, GBP: 0.75 };
console.log(`Welcome to Currency Converter!
1 USD equals  1 USD
1 USD equals  113.5 JPY
1 USD equals  0.89 EUR
1 USD equals  74.36 RUB
1 USD equals  0.75 GBP`);
let userInput = 1;
do {
  console.log("What do you want to do?");
  console.log("1-Convert currencies 2-Exit program");
  userInput = input();
  if (userInput == 2) {
    console.log("Have a nice day!");
    process.exit(0);
  }
  if (userInput == 1) {
    currencyConverter();
  }
  if (isNaN(userInput) || userInput > 2 || userInput < 1) {
    console.log("Unknown input");
    userInput = 1;
  }
} while (userInput);

function currencyConverter() {
  let toCurrency = 0;
  console.log("What do you want to convert?");
  let fromCurrency = input("From: ").toUpperCase();
  if (fromCurrency in currencies) {
    toCurrency = input("To: ").toUpperCase();
  } else {
    console.log("Unknown currency");
  }
  if (toCurrency in currencies) {
    amount = input("Amount: ");
    //alphabet test
    if (/[a-zA-Z]/.test(amount)) {
      console.log("The amount has to be a number");
    }
    //negative value test
    if (amount < 0) {
      console.log("The amount can not be less than 1");
    }
    switch (toCurrency) {
      case "USD":
        result = toUSD(fromCurrency, amount) * currencies.USD;
        break;
      case "JPY":
        result = toUSD(fromCurrency, amount) * currencies.JPY;
        break;
      case "EUR":
        result = toUSD(fromCurrency, amount) * currencies.EUR;
        break;
      case "RUB":
        result = toUSD(fromCurrency, amount) * currencies.RUB;
        break;
      case "GBP":
        result = toUSD(fromCurrency, amount) * currencies.GBP;
        break;
    }
    console.log(
      "Result: " +
        amount +
        " " +
        fromCurrency +
        " equals " +
        result.toFixed(4) +
        " " +
        toCurrency
    );
  } else {
    console.log("Unknown currency");
  }

  //function to convert any currency value into usd equivalent
  function toUSD(fromCurrency, amount) {
    let usdValue = 0;
    switch (fromCurrency) {
      case "USD":
        usdValue = amount / 1;
        break;
      case "JPY":
        usdValue = amount / 113.5;
        break;
      case "EUR":
        usdValue = amount / 0.89;
        break;
      case "RUB":
        usdValue = amount / 74.36;
        break;
      case "GBP":
        usdValue = amount / 0.75;
        break;
      default:
        break;
    }
    return usdValue;
  }
}
