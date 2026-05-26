import logo from "../assets/images/Iamonit-best.png";
import { NavLink, Link } from "react-router-dom";
import { FaPhoneAlt, FaClock, FaUserShield } from "react-icons/fa";

function Navbar() {
  const navStyle = ({ isActive }) =>
    isActive
      ? "text-[#62c92a] border-b border-[#62c92a] pb-2"
      : "hover:text-[#62c92a] transition-colors";

  return (
    <header className="bg-[#061f38] text-white border-b border-white/10 sticky top-0 z-50">
      <div className="bg-[#031421] px-6 md:px-16 py-2 flex justify-end gap-6 text-xs md:text-sm">
        <span className="flex items-center gap-2 text-[#62c92a]">
          <FaPhoneAlt /> (202) 555-0192
        </span>

        <span className="hidden md:flex items-center gap-2 text-white/70">
          <FaClock /> 24/7 DISPATCH AVAILABLE
        </span>

        <Link
          to="/client-portal"
          className="hidden md:flex items-center gap-2 text-[#62c92a] border border-[#62c92a] px-3 py-1 hover:bg-[#62c92a] hover:text-white transition-all"
        >
          <FaUserShield /> CLIENT PORTAL
        </Link>
      </div>

      <nav className="px-6 md:px-16 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4">
          <img
            src={logo}
            alt="I Am On It Security Logo"
            className="w-16 h-16 md:w-20 md:h-20 object-contain"
          />
          <div>
            <h1 className="heading-font tracking-[0.2em] font-bold text-lg md:text-xl">
              I AM ON IT SECURITY
            </h1>
            <p className="text-[#62c92a] tracking-[0.18em] text-xs md:text-sm font-semibold">
              SERVICES & PROTECTION, LLC
            </p>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8 text-xs tracking-[0.22em] font-bold">
          <NavLink to="/" className={navStyle}>HOME</NavLink>
          <NavLink to="/services" className={navStyle}>SERVICES</NavLink>
          <NavLink to="/industries" className={navStyle}>INDUSTRIES</NavLink>
          <NavLink to="/about" className={navStyle}>ABOUT</NavLink>
          <NavLink to="/contact" className={navStyle}>CONTACT</NavLink>

          <Link
            to="/contact"
            className="bg-[#62c92a] text-white px-7 py-4 hover:bg-white hover:text-[#061f38] transition-all"
          >
            GET A QUOTE
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;