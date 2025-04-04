import React from 'react';
import { FaWind } from 'react-icons/fa';
import { IoChevronForward } from 'react-icons/io5';

const Info = () => (
  <section className="bg-darkgreen py-20 text-white shadow-md mb-6 relative">
    <div className="absolute inset-0 opacity-10 ">
      <FaWind className="w-full h-full" />
    </div>
    <div className="container mx-auto px-4 relative">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-2xl text-gray-900">
        Power the Future of Wind Energy Innovation
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-xl text-sky-100">
        Join our mission to advance sustainable energy through collegiate innovation and engineering excellence.
      </p>
      <a href="#contact" className="inline-flex items-center bg-sky-500 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
        Become a Sponsor
        <IoChevronForward className="ml-2 h-5 w-5" />
      </a>
    </div>
  </section>
);

export default Info;
