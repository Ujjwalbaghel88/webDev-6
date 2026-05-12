function Calculate(data) {
  const equation = document.getElementById("text");
  if (data === "AC") {
    equation.innerText = "0";
    return;
  }

  if (data === "C") {
    equation.innerText = equation.innerText.slice(0,1);
    return;
  }
  if (data === "=") {
    const EQ = equation.innerText;
    const solution = eval(EQ);
    equation.innerText = solution;
    return;
  }

  if (equation.innerText === "0") {
  
    equation.innerText = data;
  } else {
    equation.innerText = equation.innerText + data;
  }
}

document.addEventListener("keydown", (abc) => {
  console.log("Pressed Key", abc.key);
  if (abc.key === "Enter")
 {
    Input("=");
  }
   else if (
    abc.key === "1" ||
    abc.key === "2" ||
    abc.key === "3" ||
    abc.key === "4" ||
    abc.key === "5" ||
    abc.key === "6" ||
    abc.key === "7" ||
    abc.key === "8" ||
    abc.key === "9" ||
    abc.key === "0" ||
    abc.key === "+" ||
    abc.key === "-" ||
    abc.key === "*" ||
    abc.key === "/" ||
    abc.key === "."
  )
   {
    Input(abc.key);
  } else if (abc.key === "Backspace") {
    Input("C");
  }
});