import foodtable from "../assets/foodTable.png";
function Register() {
  return (
    <>
      <main>
        <div className="d-flex align-items-center login position-relative bg-light-subtle">
          <div className="login-bg">
            <img src={foodtable} alt="FoodTable" className="object-fit-cover" />
          </div>
          <div className="d-flex register-div card position-absolute flex-column gap-2 px-5 py- rounded-3 mx-2 bg-light ms-auto me-4">
            <h1 className="text-center text-danger mt-1 fw-bold">
              Create Account
            </h1>
            <p className="text-center">
              Join us a Customer,Restaurant,or Rider
            </p>

            <label className="form-label fw-medium">Register as:</label>
            <div className="d-flex gap-3 mb-2">
              <div>
                <input type="radio" name="role" checked /> Customer
              </div>
              <div>
                <input type="radio" name="role" /> Restaurant
              </div>
              <div>
                <input type="radio" name="role" /> Rider
              </div>
            </div>

            {/* <!-- Full Name --> */}
            <input
              type="text"
              className="form-control mb-1 py-2"
              placeholder="Enter Your full name"
            />
            {/* <!-- Enter Email --> */}
            <input
              type=" email"
              className="form-control mb-2 py-2"
              placeholder="Enter Your email"
            />
            {/* <!-- Phone Number --> */}
            <input
              type="number"
              className="form-control mb-2 py-2"
              placeholder="Enter your phone number"
            />
            {/* <!-- Password --> */}
            <input
              type="password"
              className="form-control mb-2 py-2"
              placeholder="Enter your password"
            />
            {/* <!-- Confirm your password --> */}
            <input
              type="password"
              className="form-control mb-2 py-2"
              placeholder="Confirm your password"
            />

            <div className="p-2 d-flex justify-content-between align-items-center mb-3 w-100">
              <div className="d-flex gap-2">
                <input type="checkbox" />
                <span>
                  I agree to the
                  <a
                    className="text-danger text-decoration-none fw-bold"
                    href="#"
                  >
                    terms and conditions
                  </a>
                </span>
              </div>
            </div>

            <div>
              <button className="btn btn-danger w-100">Register</button>
            </div>

            <div className="d-flex align-items-center fs-6 mb-2">
              <span className="opacity-75">Already registerd?</span>
              <a
                href="#"
                className="ms-3 text-decoration-none text-danger fw-bold"
              >
                Login here
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default Register;
