import LogoUPRM from "../../assets/images/logo-rum.png";
import { MdContactSupport, MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-5 bg-gray-95 dark:bg-gray-800">
      <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
        <div className="mb-2">
          <a className="inline-block text-white text-lg font-semibold px-6 py-3 rounded-full shadow-md transform hover:scale-110 bg-darkgreen transition-all duration-300"
            href="https://docs.google.com/forms/d/e/1FAIpQLSc4grUMZI5u7GpCMq8ye5cmEg3D0vC2XQqo3OEMMopO99eIww/viewform" target="_blank" rel="noopener noreferrer">
            JOIN US!</a>
        </div>
        <div className="text-center md:text-left dark:text-white">
          <p>
            Wind Energy Research Team<br />
            University of Puerto Rico, Mayagüez Campus<br />
            Copyright ©2025
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center md:items-end">
        <div className="mb-4">
          <a href="https://uprm.edu" target="_blank" rel="noopener noreferrer">
            <img
              src={LogoUPRM}
              alt="UPRM Logo"
              className="w-24"
              loading="lazy"
              decoding="async"
            />
          </a>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-2 dark:text-white">
            <MdEmail className="text-green-500 mr-2" />
            <MdContactSupport className="text-green-500 mr-2" />
            <p>Contact us!</p>
          </div>
          <div className="flex gap-3">
            <a href="https://www.linkedin.com/company/aeropower-uprm/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
              <CiLinkedin className="text-gray-700 text-4xl hover:text-green-700 dark:text-green-500" />
            </a>
            <a href="https://www.instagram.com/aeropoweruprm/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-gray-700 text-4xl hover:text-green-700 dark:text-green-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
