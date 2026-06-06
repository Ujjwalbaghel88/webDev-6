import { Link } from "react-router-dom";

import { useState } from "react";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("userName:", userName);

    console.log("password:", password);
  };
  return (
    <>
      <div className=" d-flex justify-content-center">
        <div className="border bg-light shadow rounded w-50 mt-5 p-3">
          <h1 className="text-center text-primary pb-2">Login Page</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="userName">UserName:</label>
            <input
              type="text"
              name="userName"
              className="form-control"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <br />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-primary w-100">
                login
              </button>
            </div>
          </form>
          <hr />
          <p>
            Don't have an account? <Link to="/register">Register Here</Link>
          </p>
        </div>
      </div>
    </>
  );
}
export default Login;
