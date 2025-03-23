import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger and close icons
import LogoAeropower from "../../assets/images/logo-aeropower.png";
import LogoPes from "../../assets/images/logo-pes.png";

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
    <header className="header">
      {/* Desktop Navigation */}
      <div className="desktop-nav">
        <div className="aeropower-logo">
          <img src={LogoAeropower} alt="Aeropower Logo" className="h-12" loading="lazy" />
        </div>

        <nav className="middle-section">
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/divisions"
            className={`nav-link ${location.pathname === "/divisions" ? "active" : ""}`}
          >
            Divisions & Subdivisions
          </Link>
          <Link
            to="/sponsors"
            className={`nav-link ${location.pathname === "/sponsors" ? "active" : ""}`}
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
        <div className="mobile-header">
          <button className="menu-toggle" aria-label="Toggle navigation menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Slide-in Menu */}
        <nav className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/divisions" onClick={() => setMenuOpen(false)}>Divisions & Subdivisions</Link>
          <Link to="/sponsors" onClick={() => setMenuOpen(false)}>Sponsors</Link>
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
