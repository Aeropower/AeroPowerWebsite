import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import LogoAeropower from "../../assets/images/logo-aeropower.png";
import LogoPes from "../../assets/images/logo-pes.png";

function Header() {
  const location = useLocation(); // Get the current URL path

  return (
    <div className="header flex justify-between items-center px-8 py-4 border-b border-gray-200">
      {/* Left Logo */}
      <div className="aeropower-logo">
        <img src={LogoAeropower} alt="Aeropower Logo" className="h-12" />
      </div>

      {/* Navigation Links */}
      <div className="middle-section flex space-x-8">
        <Link 
          to="/" 
          className={`relative mt-4 text-md font-normal text-gray-500 hover:text-green-800
            ${location.pathname === "/" ? "text-green-800 font-medium after:absolute after:-bottom-2 after:left-0 after:w-full after:h-1 after:bg-green-800 after:rounded-lg" : ""}`}
        >
          Home
        </Link>

        <Link 
          to="/divisions" 
          className={`relative mt-4 text-md font-normal text-gray-500 hover:text-green-800
            ${location.pathname === "/divisions" ? "text-green-800 font-medium after:absolute after:-bottom-2 after:left-0 after:w-full after:h-1 after:bg-green-800 after:rounded-lg" : ""}`}
        >
          Divisions & Subdivisions
        </Link>
      </div>

      {/* Right Logo */}
      <a href="https://www.ieee.org/" className="pes-logo">
        <img src={LogoPes} alt="PES logo" className="h-12" />
      </a>
    </div>
  );
}

export default Header;
