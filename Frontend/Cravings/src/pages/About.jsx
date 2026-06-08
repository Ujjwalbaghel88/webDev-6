import aboutPage from "../assets/aboutPage.png";

function About() {
  return (
    <>
      <main>
        {/* <!-- Hero section --> */}
        <section>
          <div className="about-hersection">
            <div className="about-login-bg">
              {/* <img src={aboutPage} alt="" /> */}
              <img
                src={aboutPage}
                alt="FoodTable"
                className="object-fit-cover  about-dull-img"
              />
            </div>
            <div className="about-herocontent position-absolute d-grid w-50 justify-content-center text-center gap-2">
              {/* <div className="about-herocontent position-absolute d-grid w-100 px-3"> */}
              <div>{/* <img src="" alt="Logo" className="" /> */}</div>
              <div>
                <h1 className="display-5 text-white fw-bold">
                  About <span>Cravings</span>
                </h1>
                <p className="text-light opacity-75">
                  Connecting hungry hearts with amazing food — one delivery at a
                  time.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- rating section --> */}
        <section className="about-rating px-3 pt-3 pb-2">
          {/* <!-- Cards --> */}
          <div className="about-records my-1">
            <div className="row mx-5 d-flex justify-content-center">
              {/* <!-- Card 1 --> */}
              <div className="col-12 col-sm-6 mx-4 col-md-4 col-lg-2">
                <div className="d-grid py-2 px-2 text-center justify-items-center">
                  <p className="fs-3 fw-bolder core-values m-0">50K+</p>
                  <p className="text-light rating-des">Happy Customer</p>
                </div>
              </div>
              {/* <!-- Card 2 --> */}
              <div className="col-12 col-sm-6 mx-4 col-md-4 col-lg-2">
                <div className="d-grid px-2 py-2 text-center justify-items-center">
                  <p className="fs-3 fw-bolder core-values m-0">1,200+</p>
                  <p className="text-light rating-des">Partner Restaurants</p>
                </div>
              </div>
              {/* <!-- Card 3 --> */}
              <div className="col-12 col-sm-6 mx-4 col-md-4 col-lg-2">
                <div className="d-grid px-2 py-2 text-center justify-items-center">
                  <p className="fs-3 fw-bolder core-values m-0">3,500+</p>
                  <p className="text-light rating-des">Active Riders</p>
                </div>
              </div>
              {/* <!-- Card 4 --> */}
              <div className="col-12 col-sm-6 mx-4 col-md-4 col-lg-2">
                <div className="d-grid px-2 py-2 text-center justify-items-center">
                  <div className="d-flex justify-content-center gap-2">
                    <i className="bi bi-star-fill text-warning fs-3"></i>
                    <p className="fs-3 fw-bolder core-values m-0">4.8</p>
                  </div>
                  <p className="text-light rating-des">Average Rating</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Our Story --> */}
        <section className="our-story d-flex justify-content-center">
          <div className=" px-lg-5 px-md-1 m-lg-5 m-0 m-md-0">
            <div className="row mx-lg-5 mx-0 mx-md-0 px-lg-5 px-md-0 d-flex justify-content-center">
              <div className="col-12 col-lg-6">
                <p className="core-values px-3 mb-3 mt-3 text-uppercase">
                  Our story
                </p>
                <div className="px-3">
                  <h2>Born from a love of great food</h2>
                  <p className="text-secondary">
                    Cravings started in 2022 when three food lovers realized
                    that finding and ordering from local restaurants was harder
                    than it needed to be. We set out to build a platform that
                    puts restaurants, riders, and customers first — all in one
                    seamless experience.
                  </p>
                  <p className="text-secondary">
                    Today, we operate across dozens of cities, empowering small
                    businesses to reach new customers and enabling riders to
                    build a flexible livelihood — all while bringing delicious
                    meals straight to your door.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-6 px-1 mt-4">
                <div className="px-3">
                  <div className="row px-lg-4 px-md-1">
                    {/* <!-- Card 1 --> */}
                    <div className="col-12 col-lg-6 py-2 px-2">
                      <div className="px-3 py-2 our-facility rounded-3">
                        <i className="bi bi-fork-knife fs-3"></i>
                        <p className="fw-bold">Restaurants</p>
                        <p className="text-secondary our-story-description">
                          Diverse cuisines from local gems
                        </p>
                      </div>
                    </div>
                    {/* <!-- Card 2 --> */}
                    <div className="col-12 col-lg-6 py-2 px-2">
                      <div className="px-3 py-1 our-facility rounded-3">
                        <i className="bi bi-bicycle fs-3"></i>
                        <p className="fw-bold">Riders</p>
                        <p className="text-secondary our-story-description">
                          Fast, reliable delivery partners
                        </p>
                      </div>
                    </div>
                    {/* <!-- Card 3 --> */}
                    <div className="col-12 col-lg-6 py-2 px-2">
                      <div className="px-3 py-1 our-facility rounded-3">
                        <i className="bi bi-shop-window fs-3"></i>
                        <p className="fw-bold">Partners</p>
                        <p className="text-secondary our-story-description">
                          Businesses that grow with us
                        </p>
                      </div>
                    </div>
                    {/* <!-- Card 4 --> */}
                    <div className="col-12 col-lg-6 py-2 px-2">
                      <div className="px-3 py-1 our-facility rounded-3">
                        <i className="bi bi-suit-heart-fill fs-3"></i>
                        <p className="fw-bold">Community</p>
                        <p className="text-secondary our-story-description">
                          People at the heart of everything
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Our Core Values --> */}
        <section className="details pt-5 pb-2" id="about-details">
          {/* <!-- Heading --> */}
          <div className="trust text-center">
            <p className="core-values fw-semibold">WHAT WE STAND FOR</p>
            <h2 className="about-trust-content fw-bolder">Our Core Values</h2>
          </div>

          {/* <!-- Cards --> */}
          <div className="records">
            <div className="row mb-5 mt-2 g-4 mx-sm-0 mx-lg-5 mx-md-0 d-flex justify-content-center">
              {/* <!-- Card 1 --> */}
              <div className="col-12 col-sm-5 col-md-6 col-lg-3">
                <div className="about-record-cards d-grid place-items-center text-center gap-1 p-4 shadow rounded-3 h-100">
                  <i className="bi bi-suit-heart-fill fs-3 core-values"></i>
                  <h3 className="fs-5 fw-semibold text-black">
                    Passion for Food
                  </h3>
                  <p className="about-trust-description text-secondary">
                    We believe great food brings people together. Every order is
                    crafted with care.
                  </p>
                </div>
              </div>

              {/* <!-- Card 2 --> */}
              <div className="col-12 col-sm-5 col-md-6 col-lg-3">
                <div className="about-record-cards d-grid place-items-center text-center gap-1 p-4 shadow rounded-3 h-100">
                  <i className="bi bi-leaf-fill fs-3 core-values"></i>
                  <h3 className="fs-5 fw-semibold text-black">Fresh & Local</h3>
                  <p className="about-trust-description text-secondary">
                    We partner with local restaurants to bring you the freshest
                    meals from your neighborhood.
                  </p>
                </div>
              </div>

              {/* <!-- Card 3 --> */}
              <div className="col-12 col-sm-5 col-md-6 col-lg-3">
                <div className="about-record-cards d-grid place-items-center text-center gap-1 p-4 shadow rounded-3 h-100">
                  <i className="bi bi-shield-shaded fs-3 core-values"></i>
                  <h3 className="fs-5 fw-semibold text-black">
                    Safe & Reliable
                  </h3>
                  <p className="about-trust-description text-secondary">
                    Secure payments, real-time tracking, and verified riders —
                    every single delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Meet the team --> */}
        <section className="details pt-5 pb-1">
          {/* <!-- Heading --> */}
          <div className="trust text-center">
            <p className="core-values fw-semibold">
              The People Behind Cravings
            </p>
            <h2 className="about-trust-content fw-bolder">Meet the Team</h2>
          </div>

          {/* <!-- Cards --> */}
          <div className="about-records1 ">
            <div className="row mt-5 mb-3 g-4 mx-5 d-flex justify-content-center">
              {/* <!-- Card 1 --> */}
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="d-grid px-3 py-2 text-center justify-items-center">
                  <div className="d-flex justify-content-center">
                    <h3 className="team-profile rounded-circle justify-content-center text-light d-flex align-items-center">
                      SR
                    </h3>
                  </div>
                  <div>
                    <p className="fw-bold">Sofia Reyes</p>
                    <p className="text-secondary">CEO & Co-Founder</p>
                  </div>
                </div>
              </div>

              {/* <!-- Card 2 --> */}
              <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                <div className="d-grid px-3 py-2 text-center justify-items-center">
                  <div className="d-flex justify-content-center">
                    <h3 className="team-profile rounded-circle justify-content-center text-light d-flex align-items-center">
                      ML
                    </h3>
                  </div>
                  <div>
                    <p className="fw-bold">Marcus Lim</p>
                    <p className="text-secondary">CEO & Co-Founder</p>
                  </div>
                </div>
              </div>

              {/* <!-- Card 3 --> */}
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="d-grid px-3 py-2 text-center justify-items-center">
                  <div className="d-flex justify-content-center">
                    <h3 className="team-profile rounded-circle justify-content-center text-light d-flex align-items-center">
                      AP
                    </h3>
                  </div>
                  <div>
                    <p className="fw-bold">Aisha Patel</p>
                    <p className="text-secondary">Head of Operations</p>
                  </div>
                </div>
              </div>

              {/* <!-- Card 4 --> */}
              <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                <div className="d-grid px-3 mx-1 py-2 text-center justify-items-center">
                  <div className="d-flex justify-content-center">
                    <h3 className="team-profile rounded-circle justify-content-center text-light d-flex align-items-center">
                      JO
                    </h3>
                  </div>
                  <div>
                    <p className="fw-bold texs">James Owusu</p>
                    <p className="text-secondary">Head of Design</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Become a partner --> */}
        <section id="partner">
          <div className="partner-div d-grid gap-3 justify-content-center">
            <h2 className="text-center fw-bolder fs-1">
              Ready to satisfy your cravings?
            </h2>
            <p className="text-center text-dark">
              Join thousands of happy customers ordering their favourite <br />
              meals every day.
            </p>
            <div className="d-flex justify-content-center gap-3 mb-4">
              <a href="./about.html" className="btn btn-light px-4 py-2">
                Get Started
              </a>
              <a
                href="./contact.html"
                className="btn px-4 py-2 text-white"
                id="about-contact"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
export default About;
