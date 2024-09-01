import React from 'react'
import LogoAeropower from "../../assets/images/logo-aeropower.png";
import LogoPes from "../../assets/images/logo-pes.png";

function header() {
  return (
    
      <div className="header">
        <div className="aeropower-logo"><img src={LogoAeropower} alt="Aeropower Logo"/></div>
        <div className="middle-section">
            <div>Home</div>
            <div>Meet the Team</div>
            <div>Divisions & Subdivisions</div>
            <div>Blog</div>
        </div>
        <div className="pes-logo"><img src={LogoPes} alt="PES logo"/></div>

    </div>

    
  )
}

export default header
