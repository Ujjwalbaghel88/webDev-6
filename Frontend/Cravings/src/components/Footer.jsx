import { Link } from "react-router-dom";
import cravings from "../assets/cravings.png";

const footerLink = "text-sm text-white/70 transition hover:text-white";

function Footer() {
  return (
    <footer className="border-t-4 border-orange-700 bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-4 pb-6 pt-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-x-8 lg:grid-cols-6">
          <div className="col-span-2 flex flex-col items-start gap-4">
            <Link to="/home" aria-label="Cravings home">
              <img src={cravings} alt="Cravings" className="h-14 w-auto object-contain" />
            </Link>
            <p className="max-w-sm text-sm leading-6 text-white/60">
              Your favorite food delivery platform, bringing great local restaurants to your table.
            </p>
          </div>

          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h2 className="text-sm font-bold text-orange-300">Explore</h2>
            <div className="grid gap-3">
              <Link to="/home" className={footerLink}>Home</Link>
              <Link to="/about" className={footerLink}>About us</Link>
              <Link to="/order" className={footerLink}>Order now</Link>
            </div>
          </div>

          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h2 className="text-sm font-bold text-orange-300">For Restaurants</h2>
            <div className="grid gap-3">
              <Link to="/contact-us" className={footerLink}>Become a partner</Link>
              <Link to="/login" className={footerLink}>Restaurant login</Link>
            </div>
          </div>

          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h2 className="text-sm font-bold text-orange-300">For Riders</h2>
            <div className="grid gap-3">
              <Link to="/register" className={footerLink}>Become a rider</Link>
              <Link to="/login" className={footerLink}>Rider login</Link>
            </div>
          </div>

          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h2 className="text-sm font-bold text-orange-300">Help & Support</h2>
            <div className="grid gap-3">
              <Link to="/feedback" className={footerLink}>Share feedback</Link>
              <Link to="/contact-us" className={footerLink}>Contact us</Link>
              <Link to="/help-center" className={footerLink}>Help center</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Cravings. All rights reserved.</p>
          <p>Made for food lovers.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
