import { Link } from "react-router-dom";
import image1 from "../assets/hero.png"

function Header() {
  return (
    <>
    <div className="flex bg-green-200 justify-between items-center">

      <Link to={"/"}>Home</Link>
     </div>


      <div
        id="header"
        className="flex justify-between items-center shadow-md  bg-[#C2410C]  w-full"
      >
        <Link to={"/home"}>
          <img src={image1} className=" w-15 shrink-0" alt="" />

        </Link>
      
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
            className=" px-3 w-100 text-light w-sm-auto"
          >
            Login
          </Link>
          <Link
            to={"/register"}
            id="register"
            className="btn btn-light px-3 w-100 w-sm-auto"
          >
            Register
          </Link>
        </div>
      </div>
   
    
    </>
  )
}
export default Header;
