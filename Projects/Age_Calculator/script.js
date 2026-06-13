// document.querySelector("form").addEventListener("submit",(event) =>{
//     event.defaultPrevented();
//     const dob= document.getElementById("DOB").value; 
//      const CurDate= document.getElementById("CurrentDate").value; 

//      const Age= Number( CurDate.split("-")[0]) - Number (dob.split("-")[0]);
//      document.getElementById("DOB").value=""; 
//      document.getElementById("CurrentDate").value="";
//     //  console.log(dob);
//     //  console.log(CurDate);
//      document.getElementById("Age").innerText=`Your Age is : $ {age} Years`;
     
// })



document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const dob = document.getElementById("DOB").value;
  const curDate = document.getElementById("CurrentDate").value;

  //   let curYear = Number(curDate.split("-")[0]);
  //   let dobYear = Number(dob.split("-")[0]);
  //   const Age = curYear - dobYear;

  const Age = Number(curDate.split("-")[0]) - Number(dob.split("-")[0]);

  document.getElementById("DOB").value = "";
  document.getElementById("CurrentDate").value = "";

  document.getElementById("MyAge").innerText = Age;
});
