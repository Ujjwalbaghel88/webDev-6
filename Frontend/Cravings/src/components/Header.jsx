import { Link, NavLink } from "react-router-dom";
import image1 from "../assets/image1.png";

const navClass = ({ isActive }) =>
  `rounded-full px-3 py-2 text-sm font-semibold transition ${
    isActive
      ? "bg-white/15 text-white"
      : "text-white/80 hover:bg-white/10 hover:text-white"
  }`;

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-(--color-primary) text-white shadow-lg shadow-black/10">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/home" aria-label="Cravings home" className="flex h-12 shrink-0 items-center">
          <img src={image1} className="h-full w-auto object-contain" alt="Cravings" />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
          <NavLink to="/home" className={navClass}>Home</NavLink>
          <NavLink to="/about" className={navClass}>About</NavLink>
          <NavLink to="/order" className={navClass}>Order</NavLink>
          <NavLink to="/contact-us" className={navClass}>Contact</NavLink>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link to="/login" className="rounded-full px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/10 sm:px-4">
            Login
          </Link>
          <Link to="/register" className="rounded-full bg-white px-4 py-2 text-sm font-bold text-(--color-primary) shadow-sm transition hover:bg-orange-50">
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
