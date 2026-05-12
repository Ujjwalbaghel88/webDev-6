function calculateTravelBill() {
  var distance = Number(document.getElementById("distance").value);

  var mileage = Number(document.getElementById("mileage").value);

  var fuelPrice = Number(document.getElementById("fuelPrice").value);

  if (distance <= 0 || mileage <= 0 || fuelPrice <= 0) {
    alert("Please fill all fields properly");

    return;
  }

  var fuelUsed = distance / mileage;

  var totalExpense = fuelUsed * fuelPrice;

  document.getElementById("result").classList.remove("d-none");

  document.getElementById("result").innerHTML = `
         Fuel Used : ${fuelUsed.toFixed(2)} L <br><br>

         Total Travel Expense : ₹ ${totalExpense.toFixed(2)}
    `;
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    calculateTravelBill();
  }
});
