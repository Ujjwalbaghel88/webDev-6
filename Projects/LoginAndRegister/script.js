function Login() {
  const em = document.getElementById("loginEmail").value;
  console.log(em);

  const ps = document.getElementById("loginPassword").value;
  console.log(ps);

  document.getElementById("loginEmail").value = "";
  document.getElementById("loginPassword").value = "";

  document.querySelectorAll(".error").forEach((element) => {
    element.innerText = "";
  });

  //   if (!/^[A-Za-z\s]+$/.test(fn)) {
  //     document.getElementById("nameError").innerText = "Invalid name";
  //   }
  if (!/^[A-Za-z\.\_\d]+@gmail.com$/.test(em)) {
    document.getElementById("emailError").innerText = "Invalid Email";
  }
  if (/^.{6,}$/.test(ps)) {
    document.getElementById("passwordError").innerText = "Invalid password";
  }

  //   if (!/^[6-9]\d{9}$/.test(ph)) {
  //     document.getElementById("numberError").innerText = "Invalid Phone";
  //   }
}

function Register() {
  const ns = document.getElementById("registerName").value;
  console.log(ns);

  const em = document.getElementById("registerEmail").value;
  console.log(em);

  const ps = document.getElementById("registerPassword").value;
  console.log(ps);

  const ps1 = document.getElementById("registerConfirmPassword").value;
  console.log(ps1);

  document.getElementById("registerName").value = "";
  document.getElementById("registerEmail").value = "";
  document.getElementById("registerPassword").value = "";
  document.getElementById("registerConfirmPassword").value = "";
}
