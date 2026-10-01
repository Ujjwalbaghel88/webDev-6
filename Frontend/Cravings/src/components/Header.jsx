import { Link } from "react-router-dom";
import image1 from "../assets/image1.png";

function Header() {
  return (
    <>
      <div
        id="header"
        // className="flex justify-between items-center shadow-md  bg-[#C2410C]  w-full"
        className="sticky top-0 z-99 flex items-center justify-between px-12 py-1 bg-(--color-primary) text-white w-full h-16 shadow-md">





        <div className="h-full">
          <Link to="/home">
            <img src={image1} className="  shrink-0 w-fit h-full" alt="" />
          </Link>
        </div>

        {/* <div className="d-flex gap-4  fs-5 fw-bold">
          <Link to={"/home"} className="text-white text-decoration-none">
            Home
          </Link>
          <Link to={"/about"} className="text-white text-decoration-none">
            About
          </Link>
          <Link to={"/contact-us"} className="text-white text-decoration-none">
            Contact Us
          </Link>
          <Link to={"/order"} className="text-white text-decoration-none">
            Order
          </Link>
        </div> */}

        <div className="d-flex align-items-center gap-2 mt-2 mt-sm-0">
          <Link
            to={"/login"}
            id="login"
            // className=" px-3 w-100 text-light w-sm-auto"
            className="text-(--color-primary-content) border border-transparent hover:border-(--color-primary-content) px-3 py-1 rounded"
          >
            Login
          </Link>
          <Link
            to={"/register"}
            id="register"
            className="text-(--color-primary-content) border border-transparent hover:border-(--color-primary-content) px-3 py-1 rounded"
          >
            Register
          </Link>
        </div>
      </div>
      {/* <div className="bg-primary-subtle p-2 d-flex justify-content-between align-items-center">
        <div className="text-primary fs-4 fw-bold">My Company</div>

        <div className="d-flex gap-4">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/product"}>Product</Link>
          <Link to={"/contact-us"}>Contact Us</Link>
        </div>

        <div className="d-flex gap-3">
          <Link to={"/login"}>
            <button className="btn btn-outline-primary">Login</button>
          </Link>
          <Link to={"/register"}>
            <button className="btn btn-primary">Register</button>
          </Link>
        </div>
      </div> */}
    </>
  );
}

export default Header;
