import React from 'react';
import { MdEmail } from 'react-icons/md';
import LogoUPRM from "../../../assets/images/logo-rum.png";

const Contact = () => (
  <section id="contact" className="flex flex-col md:flex-row justify-between items-center p-5 bg-gray-95 dark:bg-gray-800">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-16">Connect With Us</h2>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xl mb-8">
          ...        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white">
          <a href="mailto:sponsors@aeropower.org"
            className="inline-flex items-center shadow-md transform hover:scale-110 bg-darkgreen px-6 py-3 rounded-lg transition-all duration-300">
            <MdEmail className="mr-2 h-5 w-5" />
            Contact Sponsorship Team
          </a>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
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
      </div>
    </div>
  </section>
);

export default Contact;
