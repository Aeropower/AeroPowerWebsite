import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger and close icons
import LogoAeropower from "../../assets/images/logo-aeropower.png";
import LogoPes from "../../assets/images/logo-pes.png";
import DarkModeToggle from "./DarkModeToggle";

function Header() {
  const location = useLocation(); // Get current URL
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  return (
    <header className="flex items-center justify-between px-1 py-[10px] h-[76px] w-full sticky top-0 z-[1000] 
                       bg-white dark:bg-gray-800 shadow-custom-shadow-md transition-colors duration-300 ">
      {/* Desktop Navigation */}
      <div className="desktop-nav">
        <div className="aeropower-logo">
          <img src={LogoAeropower} alt="Aeropower Logo" className="h-12" loading="lazy" />
        </div>

        <nav className="middle-section">
          <Link
            to="/"
            className={`nav-link text-gray-800 dark:text-white hover:underline ${location.pathname === "/" ? "active" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/divisions"
            className={`nav-link text-gray-800 dark:text-white hover:underline ${location.pathname === "/divisions" ? "active" : ""}`}
          >
            Divisions & Subdivisions
          </Link>
          <Link
            to="/sponsors"
            className={`nav-link text-gray-800 dark:text-white hover:underline ${location.pathname === "/sponsors" ? "active" : ""}`}
          >
            Sponsors
          </Link>
        </nav>

        <a href="https://www.ieee.org/" className="pes-logo">
          <img src={LogoPes} alt="PES logo" className="h-12" loading="lazy" />
        </a>
      </div>

      {/* Mobile Navigation */}
      <div className="mobile-nav">
        <div className="aeropower-logo">
          <img src={LogoAeropower} alt="Aeropower Logo" className="h-12" />
        </div>
        <div className="mobile-header dark:text-white">
          <button className="menu-toggle" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          {/* Dark mode toggle only for mobile in header */}
          <DarkModeToggle inHeader={true} />
        </div>

        {/* Slide-in Menu */}
        <nav className={`mobile-menu ${menuOpen ? "open" : ""} dark:bg-gray-700 transition-colors`}>
          <Link to="/" onClick={() => setMenuOpen(false)} className="dark:text-white dark:hover:text-green-500">Home</Link>
          <Link to="/divisions" onClick={() => setMenuOpen(false)} className="dark:text-white dark:hover:text-green-500">Divisions & Subdivisions</Link>
          <Link to="/sponsors" onClick={() => setMenuOpen(false)} className="dark:text-white dark:hover:text-green-500">Sponsors</Link>
        </nav>

        <div className="pes-logo">
          <a href="https://www.ieee.org/">
            <img src={LogoPes} alt="PES logo" className="h-12" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
