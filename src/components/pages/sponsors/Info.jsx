import React from 'react';
import { FaWind } from 'react-icons/fa';
import { IoChevronForward } from 'react-icons/io5';

const Info = () => (
  <section className="bg-darkgreen py-24 text-white shadow-xl mb-10 relative overflow-hidden">
    <div className="absolute inset-0 opacity-10 flex items-center justify-center">
      <FaWind className="w-5/6 h-5/6" />
    </div>
    <div className="container mx-auto px-6 relative z-10">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 max-w-3xl leading-tight text-white drop-shadow-md">
        Power the Future of Wind Energy Innovation
      </h1>
      <p className="text-lg md:text-2xl mb-10 max-w-2xl text-sky-100 leading-relaxed">
        Join our mission to advance sustainable energy through collegiate innovation and engineering excellence.
      </p>
      <a
        href="#contact"
        className="inline-flex items-center bg-sky-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
      >
        Become a Sponsor
        <IoChevronForward className="ml-2 h-5 w-5" />
      </a>
    </div>
  </section>
);

export default Info;
