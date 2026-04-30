let n = 5;
if (n > 0) {
  console.log("positive number");
} else {
  console.log("negative number");
}

let a = 17;
if (a > 18) {
  console.log("eligible for vote");
} else {
  console.log("not eligible for vote");
}

let b = 10;

if (b % 2 == 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

let p = 100;
if (p > 90) {
  console.log("A");
}

if (p > 75) {
  console.log("B");
}
if (p > 50) {
  console.log("C");
} else {
  console.log("Fail");
}

let usr = "abcd";
let pass = "12345";

if (usr === "abcd" && pass === "12345") {
  console.log("Login success");
} else {
  console.log("Login not success");
}

// Turnary Operators

usr === "abcd" && pass === "12345"
  ? console.log("Login success")
  : console.log("login failed");

let data;
let name = "Ujjwal";


data = name || "N/A" //THis is short term of javascript//

//this is a old to check//

// if (name) {
//   data = name;
// } else {
//   data = "N/A";
// }

console.log(data);


// Break And Contionue 
let choice=1;
switch(choice){
    case 1:{
        console.log("tea");
        break;
        
    }
      case 2:{
        console.log("tea");
        break;
        
    }
      case 3:{
        console.log("tea");
        break;
        
    }
    default:{
        console.log("pani");
        
    }
}
