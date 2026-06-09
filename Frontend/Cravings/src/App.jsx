import image1 from "./assets/image1.png";
import { Link } from "react-router-dom";
import home1 from "./assets/home1.png";
import home2 from "./assets/home2.jpg";
import home3 from "./assets/home3.jpg";
import home4 from "./assets/home4.jpg";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* header Part  */}
      {/* <div className="bg-[url('/vlcsnap-2025-10-21-19h23m08s878.png')] bg-cover flex justify-center w-full h-screen"> */}
      <header className=" bg-[#C2410C] h-15 w-100 d-flex justify-content-between shadow-md ">
        <div className="">
          <img src={image1} className="w-25  flex-shrink-0" />
        </div>

        <div className="d-flex justify-between  gap-2 ">
          <button className="  p-2 rounded-2 text-white hover:bg-amber-300 active:bg-green-300">
            Login
          </button>
          <button className="bg-white p-2 rounded-2 text-amber-600">
            Register
          </button>
        </div>
      </header>
      {/* </div> */}

      <div className="position-relative">
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
              <img src={home1} className="d-block w-100 hero-img" />
            </div>

            <div className="carousel-item">
              <img src={home2} className="d-block w-100 hero-img" />
            </div>

            <div className="carousel-item">
              <img src={home3} className="d-block w-100 hero-img" />
            </div>

            <div className="carousel-item">
              <img src={home4} className="d-block w-100 hero-img" />
            </div>
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
          <div className=" flex align-items-center  text-center  position-absolute text-black">
            <div className="container px-3">
              <h1 className="  ">
                Your Favorite Food,
                <br />
                Delivered Fast
              </h1>

              <p className="fs-5 fs-md-4 mt-3">
                Order from thousands of restaurants and get it delivered to your
                doorstep
              </p>

              {/* <!-- Buttons --> */}
              <div
                id="buttonHome"
                className="mt-5 text-decoration-none d-flex justify-content-center align-items-center gap-3 my-4 flex-wrap"
              >
                <button
                  id="signup"
                  className="btn text-light p-4 py-2 rounded-3"
                  onClick={() => navigate("/register")}
                >
                  Sign Up
                </button>

                <button
                  id="orderNow"
                  className="text-dark fw-bold p-4 py-2 rounded-3"
                  onClick={() => navigate("/order")}
                >
                  Order Now
                </button>
              </div>
              {/* <!-- Search --> */}
              <div
                id="search-box"
                className="bg-white pt-2 pb-2 rounded-3 d-flex align-items-center px-3 py-1 mx-auto"
              >
                <i className="bi bi-search text-muted me-2"></i>
                <input
                  id="text"
                  className="border-0 shadow-none fs-6 fw-medium"
                  placeholder="Search restaurants or dishes...."
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter> */}
    </>
  );
};
export default App;

// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Order from "./pages/Order";
// import ContactUs from "./pages/ContactUs";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// // import Partner from "./pages/PartnerWithUs";
// import Feedback from "./pages/Feedback";
// import HelpCenter from "./pages/HelpCenter";

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Header />

//         <Routes>
//           <Route path="/home" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact-us" element={<ContactUs />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/order" element={<Order />} />
//           {/* <Route path="/partner" element={<Partner />} /> */}
//           <Route path="/feedback" element={<Feedback />} />
//           <Route path="/help-center" element={<HelpCenter />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
