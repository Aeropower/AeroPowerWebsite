import React from 'react'
import LogoAeropower from "../../assets/images/logo-aeropower.png";
import LogoPes from "../../assets/images/logo-pes.png";
import { Link } from 'react-router-dom';
function header() {
  return (
    <div className="header">
      <div className="aeropower-logo"><img src={LogoAeropower} alt="Aeropower Logo" /></div>
      <div className="middle-section">
        <Link to="/">Home</Link>
        <Link to="/divisions">Divisions & Subdivisions</Link>
      </div>
      <a href="https://www.ieee.org/" className="pes-logo"><img src={LogoPes} alt="PES logo" /></a>
    </div>
  )
}

export default header
