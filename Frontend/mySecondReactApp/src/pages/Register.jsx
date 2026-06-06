import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("userName:", userName);

    console.log("email:", email);
    console.log("password:", password);

    console.log("phone", phone);
  };
  return (
    <>
      <div className=" d-flex justify-content-center">
        <div className="border bg-light shadow rounded w-50 mt-5 p-3">
          <h1 className="text-center text-primary">Create Account</h1> <br />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="userName"
              placeholder="Enter Your Name:"
              className="form-control"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <br />

            <input
              type="email"
              name="email"
              placeholder="Enter Your email:"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />

            <input
              type="number"
              name="password"
              placeholder="Enter Your Password:"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <input
              type="number"
              name="password"
              placeholder="Enter Your Number:"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-primary w-100">
                Register
              </button>
            </div>
          </form>
          <hr />
          <p>
            Already have an account? <Link to="/login">login here</Link>
          </p>
        </div>
      </div>
    </>
  );
}
export default Register;
