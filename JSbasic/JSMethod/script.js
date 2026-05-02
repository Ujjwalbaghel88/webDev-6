let x = 20,
  y = 30;

function sum(x, y) {
  let t = x + y;
  console.log(t);
}
sum(x, y);

// Function Expression
const abc = function () {
  console.log("Hello world");
};

console.log(abc); //abc that a callBackFunction

abc();

    const addarrow = (a, b) => {
      return a + b;
    };
    console.log(addarrow(5, 6));

    // ArrowFunction this here 
const addarrow = (a, b) => a + b;

console.log(addarrow(5, 6));
