import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import { FaMicrochip } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import 'swiper/css';
import 'swiper/css/pagination';
import Software1 from "../../../assets/images/software1.png";
import Software2 from "../../../assets/images/software2.png";
import Software3 from "../../../assets/images/software4.png";
import Software4 from "../../../assets/images/software3.png";
import SoftwareBannerImage from "../../../assets/images/software-banner.png";

const softwareSubdivisions = [
  {
    title: "Web Development",
    icon: SiJavascript,
    description:
      "Responsible for designing and building the team’s website using React.js (frontend) and Flask with Python (backend). This team brings to life the very platform you're viewing right now.",
  },
  {
    title: "Embedded Software",
    icon: FaMicrochip,
    description:
      "Develops and maintains the embedded real-time operating system using FreeRTOS for ESP32 or AVR microcontrollers. This system powers the turbine’s pitch control and emergency brake systems.",
  },
];

const SoftwareDiv = () => {
  const images = [Software1, Software2, Software3, Software4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="dark:bg-gray-800 transition-colors duration-300">

      {/* Banner */}
      <section className="relative w-full h-[300px] md:h-[450px] overflow-hidden shadow-lg mb-6">
        <img src={SoftwareBannerImage} alt="Software Division Banner" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="relative text-4xl sm:text-6xl md:text-6xl font-extrabold text-center leading-tight whitespace-pre-line md:whitespace-nowrap tracking-wider">
            {/* Bottom Shadow Layer */}
            <span className="absolute top-[2px] left-[2px] md:top-[4px] md:left-[4px] text-black z-0 select-none block w-full">
              Software Division
            </span>

            {/* Mid Highlight Layer */}
            <span className="absolute top-[1px] left-[1px] md:top-[2px] md:left-[2px] text-gray-700 z-10 select-none block w-full">
              Software Division
            </span>

            {/* Top Main Gradient Text Layer */}
            <span className="relative z-20 bg-gradient-to-r from-[#e8f8f5] to-[#aed6f1] text-transparent bg-clip-text drop-shadow-lg block w-full">
              Software Division
            </span>
          </h1>
        </div>
      </section>

      {/* Info Block */}
      <div className="px-6 md:px-10 flex flex-col md:flex-row items-center bg-white dark:bg-gray-900 shadow-lg">
        {/* Visual */}
        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <div className="relative w-full max-w-[400px] h-[250px] md:h-[400px] md:max-w-[525px] overflow-hidden flex items-center justify-center rounded-lg">
            <img
              key={currentImageIndex}
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              loading="lazy"
              className=" absolute inset-0 m-auto animate-imageFade max-w-full max-h-full object-contain rounded-lg transition-opacity duration-700 shadow-lg"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 md:pl-6 flex flex-col">
          {/* Leadership */}
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 mt-4 text-center md:text-left">
            Leader: Hiram R. Rodríguez Hernández
          </h3>
          <p className="text-gray-700 dark:text-white mb-4 leading-relaxed">
            The Software Division designs, develops, and maintains the team’s website and the embedded systems responsible for turbine control and safety. Their work ensures seamless user interaction and real-time system responsiveness.
          </p>

          <blockquote className="italic text-gray-600 dark:text-gray-400 mb-4">
            "We build reliable, efficient, and intelligent systems — from user interfaces to real-time embedded controllers."
          </blockquote>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center md:text-left">
            Subdivisions
          </h3>

          <Swiper
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={20}
            pagination={{ clickable: true }}
            loop
            speed={600}
            autoplay={{
              delay: 15000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="w-full min-h-[140px] custom-swiper"
          >
            {softwareSubdivisions.map(({ title, description, icon: Icon }, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full px-4 py-2 text-center md:text-left mx-auto border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-2 justify-center md:justify-start flex-wrap md:flex-nowrap">
                    {title}
                    <Icon className="text-xl text-green-600 dark:text-green-400" title={`${title} icon`} aria-hidden="true" />
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 break-normal leading-relaxed">
                    {description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div />
        </div>
      </div>
    </div>
  );
};

export default SoftwareDiv;
