function submit() {
  //  console.log("Submit Button Clicked");

//   const fn = document.getElementById("fullName").value="";
//   console.log(fn);

//   document.getElementById("fullName").value = "";

//   const pn = document.getElementById("email").value;
//   console.log(pn);

//   document.getElementById("email").value = "";

//   const gn = document.getElementById("password").value;
//   console.log(gn);

//   document.getElementById("password").value = "";

//   const hn = document.getElementById("number").value;
//   console.log(hn);

//   document.getElementById("number").value = "";
  const fn = document.getElementById("fullName").value;
  const em = document.getElementById("email").value;
  const ph = document.getElementById("number").value;
 const gn = document.getElementById("password").value;

  document.querySelectorAll(".error").forEach((element) => {
    element.innerText = "";
  });


  if(!/^[A-Za-z\s]+$/.test(fn))
  {
    document.getElementById("nameError").innerText="Invalid name";
  }
   if (!/^[A-Za-z\.\_\d]+@gmail.com$/.test(em)) {
    document.getElementById("emailError").innerText = "Invalid Email";
  }

  if (!/^[6-9]\d{9}$/.test(ph)) {
    document.getElementById("phoneError").innerText = "Invalid Phone";
  }

//   if(fn != "type")
//   {
//     console.log("Alert");
//     // alert("Invalid full name")
    
//   }
//   else{
//     console.log(fn);
    
//   }

}
