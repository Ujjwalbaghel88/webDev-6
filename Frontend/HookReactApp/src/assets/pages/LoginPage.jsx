import { useState } from "react";

function LoginPage() {
  const [userName, setUserName] = useState("");
  const [city, setCity] = useState("");
  return (
    <>
      <input
        type="text"
        name="userName"
        onChange={(e) => setUserName(e.target.value)}
      />
      <hr /> <br /> <br /> <br />
      <div>my user Name us {userName}</div>
      <div>My city Name is {city}</div>
      <hr />
      <br />
      <br />
      <br />
      <input
        type="text"
        name="city"
        onChange={(e) => setCity(e.target.value)}
      />
    </>
  );
}

export default LoginPage;
