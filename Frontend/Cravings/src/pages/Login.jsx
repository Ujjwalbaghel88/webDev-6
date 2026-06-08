import foodtable from "../assets/foodtable.png";
import { useNavigate } from "react-router-dom";
// import aboutPage from "../assets/aboutPage.png";

function Login() {
   const navigate = useNavigate();
  return (
    <>
      <main>
        <div className="position-relative login w-100 h-100">
          <div className="login-bg">
            <img src={foodtable} alt="FoodTable" className="object-fit-cover" />
          </div>
          <div className="login-div card d-grid position-absolute">
            <h2 className="text-center fw-bolder">Welcome Back</h2>
            <p className="text-center">Login to your Cravings account</p>
            <div className="login-input d-grid gap-2 mb-3 mt-2">
              <span className="fw-semibold">Email</span>
              <input
                type="email"
                className="input-field form-control shadow-none"
                placeholder="Enter your Email"
              />
            </div>
            <div className="login-input d-grid gap-2 mb-3">
              <span className="fw-semibold">Password</span>
              <div className="d-flex align-items-center pe-3 input-field pb">
                <input
                  type="password"
                  className="form-control shadow-none bg-transparent border-0"
                  placeholder="Enter your password"
                />
                <i className="bi bi-eye-fill"></i>
              </div>
            </div>
            <div className="remember d-flex justify-content-between align-items-center">
              <div className="d-flex gap-2 align-items-center">
                <input type="checkbox" id="remember" />
                <label for="remember" className="terms">
                  Remember me
                </label>
              </div>
              <div>
                <a href="" id="anchor-underline" className="terms">
                  Forgot Password?
                </a>
              </div>
            </div>
            <button
              className="w-100 mt-4 mb-3 py-2 border-0 rounded-2"
              type="submit"
            >
              <a href="" className="text-white" id="login-button">
                Login
              </a>
            </button>
            <div className="d-flex align-items-center mb-3 line terms">
              <hr />
              Don't have account?
              <hr />
            </div>
            <a
              href="./register.html"
              className="text-center"
              id="anchor-underline"
            >
              <b>Create an account</b>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;
