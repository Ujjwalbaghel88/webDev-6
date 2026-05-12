const basicSalaryInput = document.getElementById("basicSalary");
const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");

const errorMessage = document.getElementById("errorMessage");
const successMessage = document.getElementById("successMessage");

const spinner = document.getElementById("spinner");
const btnText = document.getElementById("btnText");

const resultCard = document.getElementById("resultCard");

const resultBasic = document.getElementById("resultBasic");
const resultHra = document.getElementById("resultHra");
const resultDa = document.getElementById("resultDa");
const resultGross = document.getElementById("resultGross");

/*
  Salary Rules:
  HRA = 20% of Basic
  DA  = 10% of Basic
  Gross Salary = Basic + HRA + DA
*/

// Standalone Function
function calculateGrossSalary(basic) {
  const hra = basic * 0.2;

  const da = basic * 0.1;

  const gross = basic + hra + da;

  return {
    basic,
    hra,
    da,
    gross,
  };
}

// Format Currency in Indian Rupees
function formatCurrency(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(amount);
}

// Validate Input
function validateInput(value) {
  if (value === "") {
    return "Basic salary is required.";
  }

  if (isNaN(value)) {
    return "Please enter a valid number.";
  }

  if (Number(value) < 0) {
    return "Salary cannot be negative.";
  }

  return "";
}

// Calculate Button
calculateBtn.addEventListener("click", () => {
  const basic = basicSalaryInput.value.trim();

  errorMessage.textContent = "";

  successMessage.classList.add("d-none");

  const validationError = validateInput(basic);

  if (validationError) {
    resultCard.classList.add("d-none");

    errorMessage.textContent = validationError;

    return;
  }

  // Disable Button
  calculateBtn.disabled = true;

  spinner.classList.remove("d-none");

  // Simulate Processing
  setTimeout(() => {
    const salaryData = calculateGrossSalary(Number(basic));

    // Show Results
    resultBasic.textContent = formatCurrency(salaryData.basic);

    resultHra.textContent = formatCurrency(salaryData.hra);

    resultDa.textContent = formatCurrency(salaryData.da);

    resultGross.textContent = formatCurrency(salaryData.gross);

    resultCard.classList.remove("d-none");

    successMessage.classList.remove("d-none");

    // Enable Button
    calculateBtn.disabled = false;

    spinner.classList.add("d-none");
  }, 500);
});

// Reset Button
resetBtn.addEventListener("click", () => {
  basicSalaryInput.value = "";

  errorMessage.textContent = "";

  successMessage.classList.add("d-none");

  resultCard.classList.add("d-none");
});
