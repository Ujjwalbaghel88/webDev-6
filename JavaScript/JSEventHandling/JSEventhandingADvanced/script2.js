document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("form Submitted");
  const fn = document.getElementById("FullName").value;
  const em = document.getElementById("email").value;
  const ps = document.getElementById("password").value;

  const dataPacket = {
    FullName: fn,
    Email: em,
    Password: ps,
  };

  console.log(dataPacket);

  document.getElementById("FullName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
});

document.querySelector("form").addEventListener("reset", (event) => {
  event.preventDefault(); // prevetDefault jo bhi data hai usee submit ke bad url me nahi  bhejta hai that point to use preventDefault

  confirm("Are Your Sure") && window.location.reload();

  // if ka use karke
  // if(confirm("Are You Sure")){
  //     window.location.reload();
  // }
});

document.addEventListener("keydown", (event) => {
  let keyPress = event.key;
  console.log(keyPress);
});
