import contact from "../assets/contactPage.jpg";

function ContactUs() {
  return (
    <>
      <main>
        <div className="position-relative login w-100 h-100">
          <div className="login-bg">
            <img src={contact} alt="FoodTable" className="object-fit-cover" />
          </div>
          <div className="login-div card d-grid position-absolute">
            <h2 className="text-center fw-bolder">Contact Us</h2>
            <p className="text-center">
              Have a question? We'd love to hear from you.
            </p>
            <div className="login-input d-grid gap-2 mb-3 mt-2">
              <input
                type="text"
                className="input-field form-control shadow-none"
                placeholder="Enter your full  Name"
              />
            </div>
            <div className="login-input d-grid gap-2 mb-3">
              <div className="d-flex align-items-center pe-3 input-field pb">
                <input
                  type="email"
                  className="form-control bg-transparent border-0"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="login-input d-grid gap-2 mb-3">
              <div className="d-flex align-items-center pe-3 input-field pb">
                <input
                  type="number"
                  className="form-control shadow-none bg-transparent border-0"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="login-input d-grid gap-2 mb-3">
              <div className="d-flex align-items-center pe-3 input-field pb">
                <input
                  type="text"
                  className="form-control shadow-none bg-transparent border-0"
                  placeholder="What is this about?"
                />
              </div>
            </div>

            <div className="place d-grid gap-2 mb-3">
              <textarea
                name="message"
                id=""
                className="form-control"
                placeholder="Enter your message here..."
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
export default ContactUs;
