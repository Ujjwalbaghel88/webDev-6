import rajhans from "../assets/rajhans.jpg";
import background from "../assets/BACKGROUND1.webp";
import greenhouse from "../assets/GreenHose.jpg";
import restaurant2 from "../assets/restaurant2.webp";
import restaurant3 from "../assets/restaurant3.avif";
import windnWave from "../assets/windsRes.jpg";

function Order() {
  return (
    <>
      <main>
        <div
          className="card py-4 px-5 mt-2 ms-2 me-2 shadow-sm rounded-4 border-0"
          id="order-now-card"
        >
          <div className="d-flex order-now-search-div align-items-center ps-3 py-1 rounded-3">
            <i className="bi bi-search text-black"></i>
            <input
              type="search"
              className="menuSearch form-control bg-transparent border-0 shadow-none ps-3 opacity-50 my-1"
              placeholder="Search restaurants or cuisines.."
            />
          </div>
        </div>

        {/* <!-- Restaurants --> */}
        <section
          className="restaurant-card py-5 d-flex justify-content-center"
          id="order-now-bg"
        >
          <div className=" px-4" id="restaurant-div">
            <h3 className="card-heading fw-bolder text-black">
              All Restaurants
            </h3>
            <p className="restaurant-available text-black">
              6 restaurants available
            </p>
            <div className="card-outer d-grid mt-4 ">
              {/* <!-- Card 1 --> */}
              <div className="card border-0 rounded-3" id="order-now-all-card">
                <div className="position-relative">
                  <img
                    src={restaurant3}
                    alt="image"
                    className="w-100 border-0 rounded-top-3"
                  />
                  <span className="star position-absolute rounded-pill px-2">
                    <i className="bi bi-star-fill"></i>
                    3.6
                  </span>
                </div>
                <div className=" p-3 border-0">
                  <h6 className="fw-bolder">Under The Mango Tree</h6>
                  <p>
                    Enjoy the thrill of grill and barbecue at Under The Mango
                    Tree restaurant at Jehan Numa Palace, Bhopal. Head here now!
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
              {/* <!-- Card 2 --> */}
              <div className="card border-0 rounded-3" id="order-now-all-card">
                <div className=" position-relative">
                  <img
                    src={background}
                    alt="image"
                    className="w-100 border-0 rounded-top-3"
                  />
                  <span className="star position-absolute rounded-pill px-2">
                    <i className="bi bi-star-fill"></i>
                    4.8
                  </span>
                </div>
                <div className=" p-3 border-0">
                  <h6 className="fw-bolder">Raj darbar</h6>
                  <p className="">
                    Raj Darbar is a one-of-a-kind Indian restaurant that offers
                    a unique dining experience for families and friends with a
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
              {/* <!-- Card 3 --> */}
              <div className="card border-0 rounded-3" id="order-now-all-card">
                <div className=" position-relative">
                  <img
                    src={restaurant2}
                    alt="image"
                    className="w-100 border-0 rounded-top-3"
                  />
                  <span className="star position-absolute rounded-pill px-2">
                    <i className="bi bi-star-fill"></i>
                    4.1
                  </span>
                </div>
                <div className=" p-3 border-0">
                  <h6 className="fw-bolder">Countryside Culture</h6>
                  <p className="">
                    A hidden gem away from the city, offering lush green meadows
                    and peaceful walking paths for relaxation.
                  </p>
                  <div className="dishes">
                    <span className="rounded py-1 px-2 m-1">Indian</span>
                    <span className="rounded py-1 px-2 m-1">Chinese</span>
                  </div>
                  <hr className="bg-opacity-10 my-4" />
                  <a href="" className="btn w-100 py-2" id="explore">
                    Explore more
                  </a>
                </div>
              </div>
              {/* <!-- Card 4 --> */}
              <div className="card border-0 rounded-3" id="order-now-all-card">
                <div className=" position-relative">
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
                <div className=" p-3 border-0">
                  <h6 className="fw-bolder">Raj Hans</h6>
                  <p className="">
                    Bhopal’s legendary food chain, famous for its boofe original
                    cycle soup, cheesy sandwiches, and affordable vegetarian
                    treats.
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
              {/* <!-- Card 5 --> */}
              <div className="card border-0 rounded-3" id="order-now-all-card">
                <div className="position-relative">
                  <img
                    src={greenhouse}
                    alt="image"
                    className="w-100 border-0 rounded-top-3"
                  />
                  <span className="star position-absolute rounded-pill px-2">
                    <i className="bi bi-star-fill"></i>
                    3.9
                  </span>
                </div>
                <div className=" p-3 border-0">
                  <h6 className="fw-bolder">Green House Bisto</h6>
                  <p className="">
                    Bhopal’s popular vegetarian spot, famous for its affordable
                    North Indian thalis, Dal Bafla, and family-friendly dining.
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
              {/* <!-- Card 6 --> */}
              <div className="card border-0 rounded-3" id="order-now-all-card">
                <div className="position-relative">
                  <img
                    src={windnWave}
                    alt="image"
                    className="w-100 border-0 rounded-top-3"
                  />
                  <span className="star position-absolute rounded-pill px-2">
                    <i className="bi bi-star-fill"></i>
                    4.5
                  </span>
                </div>
                <div className=" p-3 border-0">
                  <h6 className="fw-bolder">Winds n Waves</h6>
                  <p className="">
                    Winds n Wave is a popular Bhopal restaurant, famous for its
                    iconic ramfuq dish and various affordable vegetarian meals.
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
      </main>
    </>
  );
}
export default Order;
