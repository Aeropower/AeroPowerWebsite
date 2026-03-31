import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";

import LogoAeropower from "../../assets/images/logo-aeropower.webp";
import LogoAeropowerWhite from "../../assets/images/logo-aeropower-white.png";

import LogoPes from "../../assets/images/logo-pes.png";
import LogoPesWhite from "../../assets/images/logo-pes-white.png";

import DarkModeToggle from "./DarkModeToggle";

function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [divisionDropdownOpen, setDivisionDropdownOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const divisionLinks = [
    { name: "Wind Farm Dev", path: "/divisions/windfarm" },
    { name: "Electrical", path: "/divisions/electrical" },
    { name: "Mechanical", path: "/divisions/mechanical" },
    { name: "Software", path: "/divisions/software" },
    { name: "Business Operations", path: "/divisions/business" },
    { name: "Project Management", path: "/divisions/project_management" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setMenuOpen(false);
      setDropdownOpen(false);
      setDivisionDropdownOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="flex items-center justify-between px-1 py-[10px] h-[76px] w-full sticky top-0 z-[1000] bg-white dark:bg-gray-800 shadow-custom-shadow-md transition-colors duration-300">
      {/* Desktop Navigation */}
      <div className="desktop-nav">
        <div className="aeropower-logo">
          <Link
            to="/"
            aria-label="Go to AeroPower home"
            className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 p-1"
          >
            {/* Light mode */}
            <img
              src={LogoAeropower}
              alt="Aeropower Logo"
              className="h-12 block dark:hidden"
              loading="lazy"
              decoding="async"
            />

            {/* Dark mode */}
            <img
              src={LogoAeropowerWhite}
              alt="Aeropower Logo"
              className="h-12 hidden dark:block"
              loading="lazy"
              decoding="async"
            />

            <span className="sr-only">AeroPower</span>
          </Link>
        </div>

        <nav className="middle-section">
          <Link
            to="/"
            className={`nav-link text-gray-800 dark:text-white hover:underline ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            Home
          </Link>

          {/* Desktop Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDivisionDropdownOpen(!divisionDropdownOpen)}
              aria-haspopup="menu"
              aria-expanded={divisionDropdownOpen}
              aria-controls="divisions-menu"
              className="nav-link text-gray-800 dark:text-white hover:underline flex items-center gap-1"
            >
              Divisions
              <MdExpandMore
                className={`transition-transform ${
                  divisionDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {divisionDropdownOpen && (
              <div
                id="divisions-menu"
                role="menu"
                className="absolute left-0 mt-2 w-44 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-md ring-1 ring-black/5 dark:ring-white/10 py-2"
              >
                {divisionLinks.map(({ name, path }) => (
                  <Link
                    key={name}
                    to={path}
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-[--primary-green] dark:hover:bg-gray-800 text-lg text-gray-800 dark:text-white hover:font-bold transform transition-all duration-150 ease-in-out"
                    onClick={() => setDivisionDropdownOpen(false)}
                  >
                    {name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <a
          href="https://www.ieee.org/"
          aria-label="Go to IEEE site"
          className="pes-logo"
        >
          {/* Light mode */}
          <img
            src={LogoPes}
            alt="PES logo"
            className="h-12 block dark:hidden"
            loading="lazy"
            decoding="async"
          />

          {/* Dark mode */}
          <img
            src={LogoPesWhite}
            alt="PES logo"
            className="h-12 hidden dark:block"
            loading="lazy"
            decoding="async"
          />
        </a>
      </div>

      {/* Mobile Navigation */}
      <div className="mobile-nav">
        <div className="aeropower-logo">
          <Link
            to="/"
            aria-label="Go to AeroPower home"
            className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 p-1"
          >
            {/* Light mode */}
            <img
              src={LogoAeropower}
              alt="AeroPower logo"
              className="h-12 block dark:hidden"
              loading="lazy"
              decoding="async"
            />

            {/* Dark mode */}
            <img
              src={LogoAeropowerWhite}
              alt="AeroPower logo"
              className="h-12 hidden dark:block"
              loading="lazy"
              decoding="async"
            />

            <span className="sr-only">AeroPower</span>
          </Link>
        </div>

        <div className="mobile-header dark:text-white">
          <button
            className="menu-toggle"
            aria-label="Toggle navigation"
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            aria-controls="divisions-menu-mobile"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          <DarkModeToggle inHeader={true} />
        </div>

        {/* Mobile Slide-in Menu */}
        <nav
          id="mobile-menu"
          className={`mobile-menu ${
            menuOpen ? "open" : ""
          } dark:bg-gray-700 transition-colors`}
        >
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="dark:text-white"
          >
            Home
          </Link>

          <div>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-haspopup="menu"
              aria-expanded={dropdownOpen}
              aria-controls="divisions-menu-mobile"
              className="w-full py-2 flex justify-center items-center gap-1"
            >
              <span className="dark:text-white">Divisions </span>
              <MdExpandMore
                className={`text-lg transition-transform ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {dropdownOpen && (
              <div id="divisions-menu-mobile" role="menu">
                {divisionLinks.map(({ name, path }) => (
                  <Link
                    key={name}
                    to={path}
                    onClick={() => {
                      setMenuOpen(false);
                      setDropdownOpen(false);
                    }}
                    className="block w-full px-4 py-2 text-sm dark:text-white border border-gray-200 dark:border-gray-700 shadow-md"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="pes-logo">
          <a href="https://www.ieee.org/">
            {/* Light mode */}
            <img
              src={LogoPes}
              alt="PES logo"
              className="h-12 block dark:hidden"
              loading="lazy"
              decoding="async"
            />

            {/* Dark mode */}
            <img
              src={LogoPesWhite}
              alt="PES logo"
              className="h-12 hidden dark:block"
              loading="lazy"
              decoding="async"
            />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;