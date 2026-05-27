async function GetNewjoke() {
  const API_URL =
    " https://v2.jokeapi.dev/joke/Programming?blacklistFlags=religious,political";

  const response = await fetch(API_URL);

  const data = await response.json();

  // console.log(data);

  document.getElementById("setup").innerText = data.joke || data.setup;

  document.getElementById("punchline").innerText = data.punchline || "";
}
