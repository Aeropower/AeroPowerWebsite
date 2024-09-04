import React from 'react';
import LogoAeropower from "../../assets/images/aeropower-word-logo.png";
import LogoUPRM from "../../assets/images/logo-rum.png";
import { MdContactSupport, MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-block">
      <div className="footer-left">
        <div className="aeropower-logo-word">
          <img src={LogoAeropower} alt="Aeropower Logo" />
        </div>
        <div>
          <p>
            Wind Energy Research Team<br />
            University of Puerto Rico, Mayagüez Campus<br />
            Copyright ©2024
          </p>
        </div>
      </div>
      <div className="footer-right">
        <div className="uprm-logo">
          <a href="https://uprm.edu" target="_blank" rel="noopener noreferrer">
            <img src={LogoUPRM} alt="UPRM Logo" />
          </a>
        </div>
        <div>
          <div className="contact-us">
            <div><MdContactSupport style={{ color: 'green' }} /></div>
            <div><p>Contact us!</p></div>
          </div>
          <div className="logo-contact">
            <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
              <MdEmail className="contact-icon" />
            </a>
            <a href="https://www.instagram.com/aeropoweruprm/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="contact-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
