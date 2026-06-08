import HelpPage from "../assets/HelpPage.jpg";
function HelpCenter() {
  return (
    <>
      <main>
        <div className="position-relative login w-100 h-100">
          <div className="login-bg">
            <img
              src={HelpPage}
              alt="FoodTable"
              className="object-fit-cover"
            />
          </div>

          <div className="help-center  position-absolute bg-transparent rounded-2 border border-2 translate-middle">
            <h2 className="text-center display-5 ">
              {" "}
              <i className="bi bi-question-circle-fill"></i> Help Center
            </h2>
            <p className="text-center text-light">
              Browse FAQs or submit a support ticket below
            </p>

            <div className=" align-items-center " id="mainouterdiv">
              <div className="w-100 pb-5">
                <p className="text-light fs-5 ms-5 fw-bold">
                  Frequently asked questions
                </p>

                <div className="pt-2  gap-2" id="divclassName">
                  <div id="accordion">
                    <div className="rounded-1 overflow-hidden border">
                      <h2
                        className="accordion-header d-flex justify-content-between align-items-center px-2 fw-bolder fs-2"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                      >
                        <button className="border-0 btn text-white fw-semibold fs-6 bg-transparent shadow-none d-flex align-items-center">
                          <div>
                            <i className="bi  bi-bag"></i>
                            <span className="fs-6">
                              How do I track my order?
                            </span>
                          </div>
                        </button>
                        <span className="text-white fw-bold h5">+</span>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        data-bs-parent="#privacyAccordion"
                      >
                        <div className="accordion-header">
                          Go to your dashboard --- Order abd click on the active
                          order to see live tracking
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex w-100 justify-content-between align-items-center">
                    <div className="w-100">
                      <div id="accordion">
                        <div className=" rounded-1 overflow-hidden border ">
                          <h2
                            className="accordion-header d-flex justify-content-between align-items-center px-2"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                          >
                            <button className="border-0 btn text-white fw-semibold fs-6 bg-transparent shadow-none d-flex align-items-center w-100">
                              <div>
                                <i className="bi bi-wallet"></i>
                                <span className="fs-6">
                                  How do I get a refund?
                                </span>
                              </div>
                            </button>
                            <span className="text-white fw-bold h5">+</span>
                          </h2>
                          <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            data-bs-parent="#privacyAccordion"
                          >
                            <div className="accordion-header">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Facere voluptates sequi
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="w-100">
                      <div id="accordion">
                        <div className="rounded-1 overflow-hidden border">
                          <h2
                            className="accordion-header d-flex justify-content-between align-items-center px-2"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                          >
                            <button className="border-0 btn text-white fw-semibold fs-6 bg-transparent shadow-none d-flex align-items-center w-100">
                              <div>
                                <i className="bi bi-bicycle"></i>
                                <span className="fs-6">
                                  My rider is late. What do I do?
                                </span>
                              </div>
                            </button>
                            <span className="text-white fw-bold h5">+</span>
                          </h2>
                          <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            data-bs-parent="#privacyAccordion"
                          >
                            <div className="accordion-header ">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Facere voluptates sequi
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="w-100">
                      <div id="accordion">
                        <div className="rounded-1 overflow-hidden border">
                          <h2
                            className="accordion-header d-flex justify-content-between align-items-center px-2"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                          >
                            <button className="border-0 btn text-white fw-semibold fs-6 bg-transparent shadow-none d-flex align-items-center w-100">
                              <div>
                                <i className="bi bi-person"></i>
                                <span className="fs-6">
                                  How do I update my account info?
                                </span>
                              </div>
                            </button>
                            <span className="text-white fw-bold h5">+</span>
                          </h2>
                          <div
                            id="collapseFour"
                            className="accordion-collapse collapse"
                            data-bs-parent="#privacyAccordion"
                          >
                            <div className="accordion-header">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Facere voluptates sequi
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- VERTICAL LINE --> */}
              <div className="vr custom-line mx-4"></div>

              {/* <!-- Second Div  --> */}

              <div id="SupportTicket">
                <div className="support w-100">
                  <h2>Submit a Support Ticekt </h2>

                  <input type="text" placeholder="Enter your full name" />
                  <input type="text" placeholder="Enter your Email" />

                  <select name="" id="">
                    <option value="">Select issue type</option>
                    <option value="">Account & Profile</option>
                    <option value="">Order Issue</option>
                    <option value="">payment & Billing</option>
                    <option value="">Delivery Problem</option>
                    <option value="">Restaurant & Menu</option>
                    <option value="">Other</option>
                  </select>

                  <input type="text" placeholder="eg. ORD-00123" />
                  <textarea name="" id="">
                    Please describe your problem in details
                  </textarea>

                  <div id="btn" className="">
                    <button>Submit TIcket</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default HelpCenter;
