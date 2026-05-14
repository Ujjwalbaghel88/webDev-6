function submit() {
  const fn = document.getElementById("fullName").value;
  const em = document.getElementById("email").value;
  const ph = document.getElementById("number").value;
  const gn = document.getElementById("password").value;

  document.querySelectorAll(".error").forEach((element) => {
    element.innerText = "";
  });

  if (!/^[A-Za-z\s]+$/.test(fn)) {
    document.getElementById("nameError").innerText = "Invalid name";
  }
  if (!/^[A-Za-z\.\_\d]+@gmail.com$/.test(em)) {
    document.getElementById("emailError").innerText = "Invalid Email";
  }

  if (!/^[6-9]\d{9}$/.test(ph)) {
    document.getElementById("numberError").innerText = "Invalid Phone";
  }
}
