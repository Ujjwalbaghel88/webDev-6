function calculateSalary() {

    var basicSalary =
        Number(document.getElementById("basicSalary").value);

    if (basicSalary <= 0) {

        alert("Please enter valid salary");

        return;
    }

    /* ================= ALLOWANCES ================= */

    var hra =
        basicSalary * 0.20;

    var da =
        basicSalary * 0.10;

    var grossSalary =
        basicSalary + hra + da;

    /* ================= TAX ================= */

    var tax =
        grossSalary * 0.05;

    /* ================= NET SALARY ================= */

    var netSalary =
        grossSalary - tax;

    /* ================= SHOW RESULT ================= */

    document.getElementById("result")
        .classList.remove("d-none");

    document.getElementById("hra")
        .innerHTML =
        "🏠 HRA : ₹ " + hra.toFixed(2);

    document.getElementById("da")
        .innerHTML =
        "📈 DA : ₹ " + da.toFixed(2);

    document.getElementById("tax")
        .innerHTML =
        "🧾 Tax : ₹ " + tax.toFixed(2);

    document.getElementById("netSalary")
        .innerHTML =
        "💼 Net Salary : ₹ " + netSalary.toFixed(2);
}

/* ================= ENTER KEY SUPPORT ================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        calculateSalary();
    }
});