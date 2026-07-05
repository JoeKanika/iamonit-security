import { useState } from "react";
import logo from "../assets/images/Iamonit-best.png";
import { NavLink, Link } from "react-router-dom";
import { FaPhoneAlt, FaClock, FaUserShield, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navStyle = ({ isActive }) =>
    isActive
      ? "text-[#62c92a] border-b border-[#62c92a] pb-1"
      : "hover:text-[#62c92a] transition-colors";

  const closeMenu = () => setOpen(false);

  return (
    <header className="bg-[#061f38] text-white border-b border-white/10 sticky top-0 z-50">
      <div className="bg-[#031421] px-4 md:px-16 py-2 flex flex-wrap justify-center md:justify-end gap-4 text-[11px] md:text-sm">
        <span className="flex items-center gap-2 text-[#62c92a]">
          <FaPhoneAlt /> 2534203126,2067309793
        </span>

        <span className="hidden sm:flex items-center gap-2 text-white/70">
          <FaClock /> 24/7 DISPATCH AVAILABLE
        </span>

        <Link
          to="/client-portal"
          className="hidden md:flex items-center gap-2 text-[#62c92a] border border-[#62c92a] px-3 py-1 hover:bg-[#62c92a] hover:text-white transition-all"
        >
          <FaUserShield /> CLIENT PORTAL
        </Link>
      </div>

      <nav className="px-4 md:px-16 py-4 flex items-center justify-between">
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
          <img
            src={logo}
            alt="I Am On It Security Logo"
            className="w-14 h-14 md:w-20 md:h-20 object-contain"
          />
          <div>
            <h1 className="heading-font tracking-[0.16em] font-bold text-base md:text-xl">
              I AM ON IT SECURITY
            </h1>
            <p className="text-[#62c92a] tracking-[0.14em] text-[10px] md:text-sm font-semibold">
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
            to="/contact#quote-form"
            className="bg-[#62c92a] text-white px-7 py-4 hover:bg-white hover:text-[#061f38] transition-all"
          >
            GET A QUOTE
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-2xl text-white"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-[#031421] px-6 py-6 border-t border-white/10">
          <div className="flex flex-col gap-5 text-sm tracking-[0.18em] font-bold">
            <NavLink onClick={closeMenu} to="/" className={navStyle}>HOME</NavLink>
            <NavLink onClick={closeMenu} to="/services" className={navStyle}>SERVICES</NavLink>
            <NavLink onClick={closeMenu} to="/industries" className={navStyle}>INDUSTRIES</NavLink>
            <NavLink onClick={closeMenu} to="/about" className={navStyle}>ABOUT</NavLink>
            <NavLink onClick={closeMenu} to="/contact" className={navStyle}>CONTACT</NavLink>

            <Link
              onClick={closeMenu}
              to="/contact#quote-form"
              className="bg-[#62c92a] text-white text-center px-6 py-4 mt-2"
            >
              GET A QUOTE
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;