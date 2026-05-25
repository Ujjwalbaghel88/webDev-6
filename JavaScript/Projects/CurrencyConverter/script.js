const API_KEY = "6fdb1cab971122173726f434";


const countryList = [
  {
    country: "UNITED STATES OF AMERICA",
    currency_code: "USD",
    country_code: "US",
  },

  {
    country: "INDIA",
    currency_code: "INR",
    country_code: "IN",
  },

  {
    country: "UNITED KINGDOM",
    currency_code: "GBP",
    country_code: "GB",
  },

  {
    country: "EUROPE",
    currency_code: "EUR",
    country_code: "FR",
  },

  {
    country: "JAPAN",
    currency_code: "JPY",
    country_code: "JP",
  },

  {
    country: "CANADA",
    currency_code: "CAD",
    country_code: "CA",
  },

  {
    country: "AUSTRALIA",
    currency_code: "AUD",
    country_code: "AU",
  },
];

const country1 = document.getElementById("country1");
const country2 = document.getElementById("country2");

const flag1 = document.getElementById("flag1");
const flag2 = document.getElementById("flag2");

const convertBtn = document.getElementById("convertBtn");

const swapBtn = document.getElementById("swapBtn");

const error = document.getElementById("error");

const result = document.getElementById("result");

const loading = document.getElementById("loading");

const amountInput = document.getElementById("orgAmount");

// ------------------------------------
// LOAD COUNTRIES
// ------------------------------------

function loadCountries() {

  countryList.forEach((data) => {

    let option1 = document.createElement("option");

    option1.value = `${data.currency_code},${data.country_code}`;

    option1.innerText = `${data.country} (${data.currency_code})`;

    let option2 = option1.cloneNode(true);

    country1.appendChild(option1);

    country2.appendChild(option2);

  });

  // DEFAULT VALUES

  country1.value = "USD,US";

  country2.value = "INR,IN";

}

loadCountries();

// ------------------------------------
// UPDATE FLAGS
// ------------------------------------

function updateFlag(selectBox, flagImage) {

  const value = selectBox.value;

  const countryCode = value.split(",")[1];

  flagImage.src = `https://flagsapi.com/${countryCode}/flat/64.png`;

}

country1.addEventListener("change", () => {
  updateFlag(country1, flag1);
});

country2.addEventListener("change", () => {
  updateFlag(country2, flag2);
});

// ------------------------------------
// CONVERT CURRENCY
// ------------------------------------

convertBtn.addEventListener("click", async () => {

  error.innerText = "";

  result.innerText = "Converted Amount :";

  const amount = amountInput.value;

  // VALIDATION

  if (!amount) {
    error.innerText = "Please enter an amount";
    return;
  }

  if (amount <= 0) {
    error.innerText = "Amount must be greater than zero";
    return;
  }

  // LOADING

  loading.innerHTML = `
    <div class="spinner-border text-dark"></div>
    <p>Converting...</p>
  `;

  convertBtn.innerText = "Loading...";

  convertBtn.disabled = true;

  // FROM CURRENCY

  const fromCurrency = country1.value.split(",")[0];

  // TO CURRENCY

  const toCurrency = country2.value.split(",")[0];

  // API URL

  const API = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`;

  try {

    const response = await fetch(API);

    const data = await response.json();

    // GET RATE

    const rate = data.conversion_rates[toCurrency];

    // FINAL AMOUNT

    const finalAmount = amount * rate;

    // SHOW RESULT

    result.innerText =
      `Converted Amount : ${finalAmount.toFixed(2)} ${toCurrency}`;

  } catch (err) {

    error.innerText = "Something went wrong. Please try again.";

  }

  // REMOVE LOADING

  loading.innerHTML = "";

  convertBtn.innerText = "Convert";

  convertBtn.disabled = false;

});

// ------------------------------------
// SWAP BUTTON
// ------------------------------------

swapBtn.addEventListener("click", () => {

  let temp = country1.value;

  country1.value = country2.value;

  country2.value = temp;

  // UPDATE FLAGS

  updateFlag(country1, flag1);

  updateFlag(country2, flag2);

  // AUTO CONVERT

  if (amountInput.value) {
    convertBtn.click();
  }

});
