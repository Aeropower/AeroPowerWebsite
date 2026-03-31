import LogoUPRM from "../../assets/images/logo-rum.png";
import { MdContactSupport, MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-gray-95 dark:bg-gray-800 px-5 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
        
        {/* Left: UPRM Logo */}
        <div className="flex justify-center md:justify-start">
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

        {/* Center: Join button + info */}
        <div className="flex flex-col items-center text-center">
          <a
            className="inline-block mb-4 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-md transform hover:scale-110 bg-darkgreen transition-all duration-300"
            href="https://docs.google.com/forms/d/e/1FAIpQLSc4grUMZI5u7GpCMq8ye5cmEg3D0vC2XQqo3OEMMopO99eIww/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            JOIN US!
          </a>

          <div className="dark:text-white">
            <p>Wind Energy Research Team</p>
            <p>University of Puerto Rico, Mayagüez Campus</p>
            <p>Copyright ©2025</p>
          </div>
        </div>

        {/* Right: Contact us */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <div className="flex items-center gap-2 mb-3 dark:text-white">
            <MdEmail className="text-green-500" />
            <MdContactSupport className="text-green-500" />
            <p>Contact us!</p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/aeropower-uprm/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <CiLinkedin className="text-gray-700 text-4xl hover:text-green-700 dark:text-green-500" />
            </a>

            <a
              href="https://www.instagram.com/aeropoweruprm/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-gray-700 text-4xl hover:text-green-700 dark:text-green-500" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;