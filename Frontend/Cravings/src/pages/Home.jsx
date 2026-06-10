import rajhans from "../assets/rajhans.jpg";
import background from "../assets/BACKGROUND1.webp";
import greenhouse from "../assets/GreenHose.jpg";
import restaurant2 from "../assets/restaurant2.webp";
import restaurant3 from "../assets/restaurant3.avif";
import taj from "../assets/taj.jpg";
import home1 from "../assets/home1.png";
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpg";
import home4 from "../assets/home4.jpg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative border w-full">
        {/* <!-- Carousel --> */}
        <div
          id="carouselExample"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="2500"
        >
          {/* <!-- Indicators --> */}
          <div className="carousel-indicators">
            <button
              data-bs-target="#carouselExample"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              data-bs-target="#carouselExample"
              data-bs-slide-to="1"
            ></button>
            <button
              data-bs-target="#carouselExample"
              data-bs-slide-to="2"
            ></button>
            <button
              data-bs-target="#carouselExample"
              data-bs-slide-to="3"
            ></button>
          </div>

          {/* <!-- Images --> */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={home1} className=" h-156  w-full object-cover " />
            </div>

            {/* <div className="carousel-item">
              <img src={home2} className="block h-155  w-full object-cover" />
            </div>

            <div className="carousel-item">
              <img src={home3} className="block h-155  w-full object-cover" />
            </div>

            <div className="carousel-item">
              <img src={home4} className="block h-155  w-full object-cover" />
            </div> */}
          </div>

          {/* <!-- Controls --> */}
          <button
            className="carousel-control-prev"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>

        {/* <!-- Overlay Content (FIXED) --> */}
        {/* <!-- Your Favourite Food Section Header niche --> */}
        <section>
          <div className="absolute flex items-center justify-center text-center  text-white top-0 left-0 w-full pt-35">
            
            <div className="container  ">
            
              <h1 className="text-4xl ">
                Your Favorite Food,
                <br />
                Delivered Fast
              </h1>

              <p className="text-lg md:text-2xl mt-3">
                Order from thousands of restaurants and get it delivered to your
                doorstep
              </p>

              {/* <!-- Buttons --> */}
              <div
                id="buttonHome"
                className="mt-5 no-underline flex justify-center items-center gap-3 my-4 flex-wrap"
              >
                <button
                 
                  className="bg-(--color-primary) text-(--color-primary-content)  p-4 py-2 rounded-3"
                  onClick={() => navigate("/register")}
                >
                  Sign Up
                </button>

                <button
                  
                  className="  bg-(--color-primary-content) text-(--color-base-content) fw-bold p-4 py-2 rounded-3"
                  onClick={() => navigate("/order")}
                >
                  Order Now
                </button>
              </div>
              {/* <!-- Search --> */}
              <div
              
                className="bg-white pt-2 pb-2 rounded-3 flex items-center px-3 py-1 mx-auto w-[50%] max-w-full"
              >
                <i className="bi bi-search text-muted me-2"></i>
                <input
                  id="text"
                  className="border-0 placeholder:text-(--color-primary) w-full shadow-none fw-medium"
                  placeholder="Search restaurants or dishes...."
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <!-- card Section --> */}

      <section className="py-5 justify-center bg-linear-to-b from-(--color-primary) to-(--color-primary-content)   ">
        <div className="mx-auto px-3.75 justify-center">
          <div className="ml-0 p-2.5">
            <h2 className="text-(--color-primary-content) fw-bolder">Featured Restaurants</h2>
            <p className="text-(--color-base-200) text-4xl ">4 restaurants available</p>
          </div>
          <div className="flex items-center justify-center mt-4">
            {/* <!-- Card 1 --> */}
            <div
              className="bg-(--color-base-100) transition-transform duration-100 ease-linear border-0 shadow-sm rounded-3 col-12 col-md-6 col-lg-3"
              id="all-cards"
            >
              <div className="image relative">
                <img
                  src={taj}
                  alt="image" 
                  className="w-full border-0 h-45 object-cover rounded-top-3"
                />
                <span className="top-[5%] right-[3%] bg-(--color-primary) text-(--color-primary-content) position-absolute rounded-pill px-2">
                  <i className="bi bi-star-fill"></i>
                  5.0
                </span>
              </div>
              <div className="description p-3 border-0">
                <h6 className="fw-bolder">The Taj</h6>
                <p className="">
                  A hidden gem away from the city, offering lush green meadows
                  and peaceful walking paths for relaxation.
                </p>
                <div className="dishes">
                  <span className="rounded py-1 px-2 mx-1">Indian</span>
                  <span className="rounded py-1 px-2 mx-1">Chinese</span>
                </div>
                <hr className="bg-opacity-10" />
                <a href="" className="btn w-100 py-2" id="explore">
                  Explore more
                </a>
              </div>
            </div>
            {/* <!-- Card 2 --> */}
            <div
              className="card border-0 shadow-sm rounded-3 col-12 col-md-6 col-lg-3"
              id="all-cards"
            >
              <div className="image position-relative">
                <img
                  src={background}
                  alt="image"
                  className="w-100 border-0 rounded-top-3"
                />
                <span className="star position-absolute rounded-pill px-2">
                  <i className="bi bi-star-fill"></i>
                  3.6
                </span>
              </div>
              <div className="description p-3 border-0">
                <h6 className="fw-bolder">Raj Darbar</h6>
                <p className="">
                  Enjoy the thrill of grill and barbecue at Under The Mango Tree
                  restaurant at Jehan Numa Palace, Bhopal. Head here now!
                </p>
                <div className="dishes">
                  <span className="rounded py-1 px-2 mx-1">Indian</span>
                  <span className="rounded py-1 px-2 mx-1">Chinese</span>
                  <span className="rounded py-1 px-2 mx-1">Italian</span>
                </div>
                <hr className="bg-opacity-10" />
                <a href="" className="btn w-100 py-2" id="explore">
                  Explore more
                </a>
              </div>
            </div>
            {/* <!-- Card 3 --> */}
            <div
              className="card border-0 shadow-sm rounded-3 col-12 col-md-6 col-lg-3"
              id="all-cards"
            >
              <div className="image position-relative">
                <img
                  src={restaurant2}
                  alt="image"
                  className="w-100 border-0 rounded-top-3"
                />
                <span className="star position-absolute rounded-pill px-2">
                  <i className="bi bi-star-fill"></i>
                  4.8
                </span>
              </div>
              <div className="description p-3 border-0">
                <h6 className="fw-bolder">CountySide Culture</h6>
                <p className="">
                  Raj Darbar is a one-of-a-kind Indian restaurant that offers a
                  unique dining experience for families and friends with a
                  dhaba-style theme.
                </p>
                <div className="dishes">
                  <span className="rounded py-1 px-2 mx-1">Indian</span>
                  <span className="rounded py-1 px-2 mx-1">Chinese</span>
                  <span className="rounded py-1 px-2 mx-1">Italian</span>
                </div>
                <hr className="bg-opacity-10" />
                <a href="" className="btn w-100 py-2" id="explore">
                  Explore more
                </a>
              </div>
            </div>
            {/* <!-- Card 4 --> */}
            <div
              className="card border-0 shadow-sm rounded-3 col-12 col-md-6 col-lg-3"
              id="all-cards"
            >
              <div className="image position-relative">
                <img
                  src={restaurant3}
                  alt="image"
                  className="w-100 border-0 rounded-top-3"
                />
                <span className="star position-absolute rounded-pill px-2">
                  <i className="bi bi-star-fill"></i>
                  4.2
                </span>
              </div>
              <div className="description p-3 border-0">
                <h6 className="fw-bolder">Under The Mango Tree</h6>
                <p className="">
                  mago tree is a popular Bhopal restaurant, famous for its
                  iconic Chur Chur Naan and various affordable vegetarian meals.
                </p>
                <div className="dishes">
                  <span className="rounded py-1 px-2 mx-1">Indian</span>
                  <span className="rounded py-1 px-2 mx-1">Chinese</span>
                  <span className="rounded py-1 px-2 mx-1">Italian</span>
                </div>
                <hr className="bg-opacity-10" />
                <a href="" className="btn w-100 py-2" id="explore">
                  Explore more
                </a>
              </div>
            </div>

            {/* <!-- card5  --> */}
            <div
              className="card border-0 shadow-sm rounded-3 col-12 col-md-6 col-lg-3"
              id="all-cards"
            >
              <div className="image position-relative">
                <img
                  src={greenhouse}
                  alt="image"
                  className="w-100 border-0 rounded-top-3"
                />
                <span className="star position-absolute rounded-pill px-2">
                  <i className="bi bi-star-fill"></i>
                  4.2
                </span>
              </div>
              <div className="description p-3 border-0">
                <h6 className="fw-bolder">Green House</h6>
                <p className="">
                  Green House Resto is a popular Bhopal restaurant, famous for
                  its iconic roofi and qurr and various affordable meals.
                </p>
                <div className="dishes">
                  <span className="rounded py-1 px-2 mx-1">Indian</span>
                  <span className="rounded py-1 px-2 mx-1">Chinese</span>
                  <span className="rounded py-1 px-2 mx-1">Italian</span>
                </div>
                <hr className="bg-opacity-10" />
                <a href="" className="btn w-100 py-2" id="explore">
                  Explore more
                </a>
              </div>
            </div>

            {/* <!-- card6 --> */}
            <div
              className="card border-0 shadow-sm rounded-3 col-12 col-md-6 col-lg-3"
              id="all-cards"
            >
              <div className="image position-relative">
                <img
                  src={rajhans}
                  alt="image"
                  className="w-100 border-0 rounded-top-3"
                />
                <span className="star position-absolute rounded-pill px-2">
                  <i className="bi bi-star-fill"></i>
                  4.2
                </span>
              </div>
              <div className="description p-3 border-0">
                <h6 className="fw-bolder">Raj Hans</h6>
                <p className="">
                  Hotel Rajhans in Bhopal is primarily famous for its unlimited,
                  affordable vegetarian Punjabi and South Indian thalis
                </p>
                <div className="dishes">
                  <span className="rounded py-1 px-2 mx-1">Indian</span>
                  <span className="rounded py-1 px-2 mx-1">Chinese</span>
                  <span className="rounded py-1 px-2 mx-1">Italian</span>
                </div>
                <hr className="bg-opacity-10" />
                <a href="" className="btn w-100 py-2" id="explore">
                  Explore more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Craving by the Numbers --> */}

      <section id="CravingNumber" className="py-5 text-center">
        <h4 className="fw-bolder display-5">Cravings by the Numbers</h4>
        <p className="fs-5">
          See why millions trust us for their daily food delivery needs
        </p>

        <div className=" box mt-5">
          {/* <!-- <div className="box-outer align mt-5"> --> */}
          <div className="row">
            <div className="col-12 col-sm-6 col-md-3">
              <div className="p-4 bg-white shadow rounded">
                <h4 className="display-3">2.5M+</h4>

                <p>Successful Deliveries</p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-3">
              <div className="p-4 bg-white shadow rounded">
                <h4 className="display-3">500K+</h4>
                <p>Happy Customers</p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-3">
              <div className="p-4 bg-white shadow rounded">
                <h4 className="display-3">5K+</h4>
                <p>Partner Restaurants</p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-3">
              <div className="p-4 bg-white shadow rounded">
                <h4 className="display-3">1K+</h4>
                <p>Active Riders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Customer review --> */}
      <section className="py-5">
        <h2 className="text-center fw-bold text-black">
          What Our Customers Say
        </h2>
        <p className="feedback text-center">
          Real feedback from real food lovers
        </p>
        <div className=" px-5">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 p-3">
              <div className="rating-card d-grid gap-2 rounded-2 p-4 shadow">
                <div className="d-flex gap-2 mb-2">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                </div>
                <h3 className="fs-5">Amazing Service!</h3>
                <p>
                  "The food arrived hot and fresh. The delivery was incredibly
                  fast. Highly impressed with Cravings' service!"
                </p>
                <div className="review-detail d-flex gap-3">
                  <div className="review-name-logo rounded-circle p-3">
                    <b>AJ</b>
                  </div>
                  <div className="review-name d-grid">
                    <span className="fw-bold">Arjun J.</span>
                    <span>Verified Buyer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 p-3">
              <div className="rating-card d-grid gap-2 rounded-2 p-4 shadow">
                <div className="d-flex gap-2 mb-2">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                </div>
                <h3 className="fs-5">Best App Ever!</h3>
                <p>
                  "Easy to use interface, wide variety of restaurants, and quick
                  delivery. I order from Cravings every week!"
                </p>
                <div className="review-detail d-flex gap-3">
                  <div className="review-name-logo1 rounded-circle p-3">
                    <b>SP</b>
                  </div>
                  <div className="review-name d-grid">
                    <span className="fw-bold">Sneha P.</span>
                    <span>Verified Buyer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 p-3">
              <div className="rating-card d-grid gap-2 rounded-2 p-4 shadow">
                <div className="d-flex gap-2 mb-2">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                </div>
                <h3 className="fs-5">Excellent Choices</h3>
                <p>
                  "Love the variety of restaurants available. Found my new
                  favorite spot through Cravings. Definitely worth it!"
                </p>
                <div className="review-detail d-flex gap-3">
                  <div className="review-name-logo rounded-circle p-3">
                    <b>RK</b>
                  </div>
                  <div className="review-name d-grid">
                    <span className="fw-bold">Raj Kumar</span>
                    <span>Verified Buyer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Become a Restaurant Partner --> */}
      <section id="outerdiv" className="text-center text-white py-5">
        <h4>
          <b>Become a Restaurant Partner</b>
        </h4>
        <p className="text-center mb-5">
          Grow your business with Cravings. Join thousands of restaurants
          already delivering with us.
        </p>

        <a
          href="./partner.html"
          id=""
          className="btn text-danger btn-light mt-2"
        >
          Partner with Us
        </a>
        {/* <!-- <button id="partner" className=" btn btn-light mt-2">Partner With Us</button> --> */}
      </section>
    </>
  );
}
export default Home;
