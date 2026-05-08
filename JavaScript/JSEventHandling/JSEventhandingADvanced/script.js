document.getElementById("redbox").addEventListener("mouseover", fillRedColor);
document.getElementById("redbox").addEventListener("mouseout", resetBulbColor);

document
  .getElementById("greenbox")
  .addEventListener("mouseover", fillGreenColor);

document
  .getElementById("greenbox")
  .addEventListener("mouseout", resetBulbColor);
document.getElementById("bluebox").addEventListener("mouseover", fillBlueColor);
document.getElementById("bluebox").addEventListener("mouseout", resetBulbColor);

function fillRedColor() {
  document.getElementById("bulb1").style.background = "red";
}
function fillGreenColor() {
  document.getElementById("bulb1").style.background = "green";
}
function fillBlueColor() {
  document.getElementById("bulb1").style.background = "blue";
}

function resetBulbColor() {
  document.getElementById("bulb1").style.background = "white";
}

