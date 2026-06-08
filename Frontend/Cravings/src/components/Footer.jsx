import { Link } from "react-router-dom";
import cravings from "../assets/cravings.png";

function Footer() {
  return (
    <>
      <footer>
        <section className="footer-section pt-4 pb-3">
          <div className="footer-div w-100 mt-2 pb-5">
            <p className="text-center">
              --- Your favorite food delivery platform connecting customers with
              restaurants and riders. ---
            </p>
            <div className="footer-outer d-grid pt-4">
              <div className="footer-logo me-5 d-flex">
                <img src={cravings} alt="footerLogo" />
              </div>
              <div className="quick-links d-grid">
                <h4 className="mb-1 fw-bold">Quick Links</h4>
              <div className="d-grid">
                  <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/order">Order Now</Link>
              </div>
              </div>

              <div className="quick-links d-grid">
                <h4 className="mb-1 fw-bold">For Restaurants</h4>
                <Link to={"/partner"}>Partner With US</Link>
                <Link to={"/home"}>Restaurant Dashboard</Link>
                
              </div>

              <div className="quick-links d-grid">
                <h4 className="mb-1 fw-bold">For Riders</h4>
              <Link to={"/register"}>Become a Rider</Link>
                <Link to={"/register"}>Rider Dashboard</Link>
              </div>

              <div className="quick-links d-grid">
                <h4 className="mb-1 fw-bold">Feedback & Support</h4>
                  <Link to={"/feedback"}>Share Feedback</Link>
                <Link to={"/contact-us"}>Contact Us</Link>
                <Link  to ={"/help-center"}>Help Center</Link>
              </div>
            </div>
          </div>
          <div className="border-bottom footer-division"></div>
          <div className="copy-right pt-4 d-flex justify-content-between">
            <div className="d-flex gap-2">
              <i className="bi bi-c-circle"></i>
              <p>2026 Cravings. All rights reserved.</p>
            </div>
            <div className="d-flex gap-4">
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
