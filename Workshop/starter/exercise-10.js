// Solution 1

// const currencyRates = {
//   USD: 1,
//   EUR: 0.85,
//   GBP: 0.75,
//   // Add more if needed
// };

// // DOM elements
// const amountInput = document.getElementById("amount");
// const fromCurrency = document.getElementById("fromCurrency");
// const toCurrency = document.getElementById("toCurrency");
// const convertButton = document.getElementById("convertButton");
// const resultDiv = document.getElementById("result");

// // Conversion function
// function convertCurrency(amount, from, to) {
//   if (!currencyRates[from] || !currencyRates[to]) {
//     return "Invalid currency selected";
//   }

//   // Convert from source currency → USD → target currency
//   const amountInUSD = amount / currencyRates[from];
//   const convertedAmount = amountInUSD * currencyRates[to];

//   return convertedAmount.toFixed(2); // round to 2 decimal places
// }

// // Event listener for conversion
// convertButton.addEventListener("click", () => {
//   const amount = parseFloat(amountInput.value);
//   const from = fromCurrency.value;
//   const to = toCurrency.value;

//   if (isNaN(amount) || amount <= 0) {
//     resultDiv.textContent = "Please enter a valid amount.";
//     return;
//   }

//   const converted = convertCurrency(amount, from, to);
//   resultDiv.textContent = `${amount} ${from} = ${converted} ${to}`;
// });

//
//

// Solution 2

const currencyRates = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.75,
  MKD: 52.62,
};

const containerForm = document.querySelector("#containerForm");
const amount = document.querySelector("#amount");
const fromCurrency = document.querySelector("#fromCurrency");
const toCurrency = document.querySelector("#toCurrency");
const result = document.querySelector("#result");

containerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const fromRate = currencyRates[fromCurrency.value];
  const toRate = currencyRates[toCurrency.value];
  const amountValue = parseFloat(amount.value);

  if (isNaN(amountValue) || amountValue <= 0) {
    result.innerHTML = "⚠️ Please enter a valid amount";
    return;
  }

  result.innerHTML = "";

  const resultAmount = (amountValue * toRate) / fromRate;
  result.innerHTML = `${resultAmount.toFixed(2)} ${toCurrency.value}`;
  containerForm.reset();
});
