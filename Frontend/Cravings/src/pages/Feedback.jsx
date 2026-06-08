import feedback from "../assets/FeedbackPage.jpeg";

function Feedback() {
  return (
    <>
      <main>
        <div className="position-relative login w-100 h-100">
          <div className="login-bg">
            <img src={feedback} alt="Feedback" className="object-fit-cover" />
          </div>
          <div className="feedback-div card d-grid position-absolute">
            <h2 className="text-center fw-bolder">Share Feedback</h2>
            <p className="text-center">
              Help us improve your Cravings experience.
            </p>
            <div className="login-input d-grid gap-2 mb-3 mt-2">
              <span className="fw-semibold">Full Name</span>
              <input
                type="email"
                className="input-field form-control shadow-none"
                placeholder="Enter Your Full Name"
              />
            </div>
            <div className="login-input d-grid gap-2 mb-3 mt-2">
              <span className="fw-semibold">Email</span>
              <input
                type="email"
                className="input-field form-control shadow-none"
                placeholder="Enter your Email"
              />
            </div>
            <div className="feedback-input d-grid gap-2 mb-3">
              <span className="fw-semibold">feedback Category</span>
              <select
                name="category"
                className="border-danger rounded-2 p-2"
                id="select"
              >
                <option value="">Select Your Category</option>
                <option value="">Food Quality</option>
                <option value="">Delivered Experience</option>
                <option value="">app and Website</option>
                <option value="">Customer Support</option>
              </select>
              {/* <!-- <div className="d-flex align-items-center pe-3 input-field pb">
              
            </div> --> */}
            </div>

            <div className="feedback-input gap-2 mb-2 mt-2 d-flex">
              <span className="fw-semibold">Overall Rating </span>
              <span className="fs-5 rating-star">
                <i className="bi bi-star-fill opacity-75 ms-3 me-1"></i>
                <i className="bi bi-star-fill opacity-75 me-1"></i>
                <i className="bi bi-star-fill opacity-75 me-1"></i>
                <i className="bi bi-star-fill opacity-75 me-1"></i>
                <i className="bi bi-star-fill opacity-75"></i>
              </span>
            </div>

            <div className="feedback-input d-grid gap-2 mb-2">
              <span className="fw-semibold rating-star mt-2">
                Your Feedback{" "}
              </span>
              <textarea
                className="w-100 pb-4 form-control shadow-none rounded textarea"
                placeholder="Tell us about your experience..."
              ></textarea>
            </div>

            <button
              className="w-100 mt-4 mb-3 py-2 border-0 rounded-2"
              type="submit"
            >
              <a href="" className="text-white" id="login-button">
                Login
              </a>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
export default Feedback;
