import { Link } from "react-router-dom";
import cravings from "../assets/cravings.png";

function Footer() {
  return (
    <>
      <footer>
        <section className="bg-(--color-neutral) pt-2 pb-3">
          <div className="bg-(--color-neutral) w-full mt-2 pb-5">
            <p className="text-center text-white text-base">
              --- Your favorite food delivery platform connecting customers with
              restaurants and riders. ---
            </p>
            <div className="  grid mx-[9%] grid-cols-5 pt-4">
              <div className=" me-2 flex">
                <img src={cravings} alt="footerLogo" className=" w-31.25 h-31.25" />
              </div>
              <div className=" grid">
                <h4 className="mb-1 text-base text-white font-bold">Quick Links</h4>
              <div className="grid">
                  <Link to="/home" className="text-white text-sm  hover:text-(--color-primary)">Home</Link>
                <Link to="/about" className="text-white text-sm  hover:text-(--color-primary)">About</Link>
                <Link to="/order " className="text-white text-sm  hover:text-(--color-primary)">Order Now</Link>
              </div>
              </div>

              <div className=" grid">
                <h4 className="mb-1 text-base font-bold  text-white" >For Restaurants</h4>
                <Link to={"/partner"} className="text-white text-sm  hover:text-(--color-primary)">Partner With US</Link>
                <Link to={"/home"} className="text-white text-sm  hover:text-(--color-primary)">Restaurant Dashboard</Link>
                
              </div>

              <div className=" grid">
                <h4 className="mb-1 text-base font-bold  text-white">For Riders</h4>
              <Link to={"/register"} className="text-white text-sm  hover:text-(--color-primary)">Become a Rider</Link>
                <Link to={"/register"} className="text-white text-sm  hover:text-(--color-primary)">Rider Dashboard</Link>
              </div>

              <div className="grid">
                <h4 className="mb-1 text-base font-bold  text-white">Feedback & Support</h4>
                  <Link to={"/feedback"} className="text-white text-sm  hover:text-(--color-primary)">Share Feedback</Link>
                <Link to={"/contact-us"} className="text-white text-sm  hover:text-(--color-primary)">Contact Us</Link>
                <Link  to ={"/help-center"} className="text-white text-sm  hover:text-(--color-primary)">Help Center</Link>
              </div>
            </div>
          </div>
          <div className="border-b  mx-[9%]"></div>
          <div className="mx-[9%] pt-4 flex justify-between">
            <div className="flex gap-2">
              <i className="bi bi-c-circle"></i>
              <p>2026 Cravings. All rights reserved.</p>
            </div>
            <div className="flex gap-4">
              {/* <a href="./privacy.html">Privacy Policy</a>
              <a href="./terms.html">Terms of Service</a>
              <a href="./site.html">Site Map</a> */}
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
export default Footer;
