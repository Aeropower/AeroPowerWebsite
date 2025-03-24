import React from 'react';
import LogoAeropower from "../../assets/images/aeropower-word-logo.png";
import LogoUPRM from "../../assets/images/logo-rum.png";
import { MdContactSupport, MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-5 bg-gray-95">
      <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
        <div className="mb-2">
          <img src={LogoAeropower} alt="Aeropower Logo" className="w-32" />
        </div>
        <div className="text-center md:text-left">
          <p>
            Wind Energy Research Team<br />
            University of Puerto Rico, Mayagüez Campus<br />
            Copyright ©2025
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center md:items-end">
        <div className="mb-4">
          <a className="text-gray-700 hover:text-green-700 transition-colors duration-300" href="https://uprm.edu" target="_blank" rel="noopener noreferrer">
            <img src={LogoUPRM} alt="UPRM Logo" className="w-24" />
          </a>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-2">
            <MdContactSupport className="text-green-500 mr-2" />
            <p>Contact us!</p>
          </div>
          <div className="flex gap-3">
            <a href="https://www.linkedin.com/company/aeropower-uprm/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
              <CiLinkedin className="text-gray-700 text-4xl hover:text-green-700" />
            </a>
            <a href="https://www.instagram.com/aeropoweruprm/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-gray-700 text-4xl hover:text-green-700" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
