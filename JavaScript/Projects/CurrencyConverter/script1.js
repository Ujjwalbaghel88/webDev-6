const country1 = document.getElementById("country1");
const country2 = document.getElementById("country2");

const flag1 = document.getElementById("flag1");
const flag2 = document.getElementById("flag2");

const errorMessage = document.getElementById("errorMessage");

const convertBtn = document.getElementById("convertBtn");

let countryData = [];

// LOAD COUNTRIES

async function loadCountries() {
  const response = await fetch("codes.json");

  const data = await response.json();

  countryData = data;

  const uniqueCountries = new Set();

  data.forEach((country) => {
    // SKIP EMPTY OR DUPLICATE

    if (!country.Currency_Code || uniqueCountries.has(country.Country)) {
      return;
    }

    uniqueCountries.add(country.Country);

    // COUNTRY 1 OPTION

    const option1 = document.createElement("option");

    option1.value = `${country.Currency_Code.toLowerCase()},${country.Country_Code}`;

    option1.innerText = `${country.Country} (${country.Currency_Code})`;

    country1.appendChild(option1);

    // COUNTRY 2 OPTION

    const option2 = document.createElement("option");

    option2.value = `${country.Currency_Code.toLowerCase()},${country.Country_Code}`;

    option2.innerText = `${country.Country} (${country.Currency_Code})`;

    country2.appendChild(option2);
  });

  // DEFAULT VALUES

  country1.value = "usd,US";

  country2.value = "inr,IN";

  // DEFAULT FLAGS

  updateFlag(country1, flag1);

  updateFlag(country2, flag2);
}

loadCountries();

// UPDATE FLAGS

function updateFlag(select, flag) {
  const countryCode = select.value.split(",")[1];

  flag.src = `https://flagsapi.com/${countryCode}/flat/64.png`;

  // IF FLAG NOT FOUND

  flag.onerror = () => {
    flag.src = "https://via.placeholder.com/64";
  };
}

// FLAG CHANGE EVENTS

country1.addEventListener("change", () => {
  updateFlag(country1, flag1);
});

country2.addEventListener("change", () => {
  updateFlag(country2, flag2);
});

// CONVERT CURRENCY

async function convertCurrency() {
  errorMessage.innerText = "";

  document.getElementById("newAmount").innerText = "";

  document.getElementById("exchangeRate").innerText = "";

  const amount = document.getElementById("orgAmount").value;

  // VALIDATIONS

  if (!country1.value) {
    errorMessage.innerText = "Please select a From country";

    return;
  }

  if (!country2.value) {
    errorMessage.innerText = "Please select a To country";

    return;
  }

  if (!amount) {
    errorMessage.innerText = "Please enter an amount";

    return;
  }

  if (amount <= 0) {
    errorMessage.innerText = "Amount must be greater than zero";

    return;
  }

  // LOADING BUTTON

  convertBtn.innerHTML = `
    <span class="spinner-border spinner-border-sm"></span>
    Loading...
  `;

  // GET CURRENCIES

  const fromCurrency = country1.value.split(",")[0];

  const toCurrency = country2.value.split(",")[0];

  try {
    // API CALL

    const response = await fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`,
    );

    const data = await response.json();

    // GET RATE

    const rate = data[fromCurrency][toCurrency];

    // FINAL AMOUNT

    const convertedAmount = amount * rate;

    // SHOW RESULT

    document.getElementById("newAmount").innerText =
      `${convertedAmount.toFixed(2)} ${toCurrency.toUpperCase()}`;

    // SHOW EXCHANGE RATE

    document.getElementById("exchangeRate").innerText =
      `1 ${fromCurrency.toUpperCase()} = ${rate} ${toCurrency.toUpperCase()}`;
  } catch (error) {
    errorMessage.innerText = "Something went wrong. Please try again.";
  } finally {
    convertBtn.innerText = "Convert Currency";
  }
}

// SWAP CURRENCY

function swapCurrency() {
  const temp = country1.value;

  country1.value = country2.value;

  country2.value = temp;

  // UPDATE FLAGS

  updateFlag(country1, flag1);

  updateFlag(country2, flag2);

  // AUTO CONVERT

  const amount = document.getElementById("orgAmount").value;

  if (amount) {
    convertCurrency();
  }
}
