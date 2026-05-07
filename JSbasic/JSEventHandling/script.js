function Bulb1ON() {
  document.getElementById("bulb1").style.backgroundColor = "yellow";
}

function Bulb1OFF() {
  document.getElementById("bulb1").style.backgroundColor = "black";
}

function Bulb2ON() {
  document.getElementById("bulb1").style.backgroundColor = "red";
}

function Bulb2OFF() {
  document.getElementById("bulb1").style.backgroundColor = "blue";
}

document.getElementById("bulbgreen").addEventListener("click", BulbGreen);

function BulbGreen() {
  document.getElementById("bulb1").style.backgroundColor = "green";
}

document.getElementById("bulb1Color").addEventListener("change", ChangeBulbColor);
function ChangeBulbColor(){
  const color=document.getElementById("bulb1Color").value;
  document.getElementById("bulb1").style.backgroundColor=color;
}
// document.getElementById("bulb1Color").addEventListener("change", ChangeBulbColor);

// function ChangeBulbColor(){
//     const color = document.getElementById("bulb1Color").value;
//     document.getElementById("bulb1Color").style.backgroundColor= color;
// }

document.getElementById("BgColor").addEventListener("change", BackgroundColor);
function BackgroundColor() {
  const color = document.getElementById("BgColor").value;
  document.getElementById("box1").style.backgroundColor = color;
}

document.getElementById("headColor").addEventListener("change", HeadingColor);
function HeadingColor() {
  const color = document.getElementById("headColor").value;
  document.getElementById("head1").style.color = color;
}

document.getElementById("paraColor").addEventListener("change", ParagraphColor);
function ParagraphColor() {
  const color = document.getElementById("paraColor").value;
  document.getElementById("para").style.color = color;
}

function resetAll() {
  window.location.reload();
}
