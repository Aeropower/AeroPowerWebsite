import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import {
  MdSettings,
  MdAutorenew
} from "react-icons/md";
import { GiPowerGenerator } from "react-icons/gi";
import 'swiper/css';
import 'swiper/css/pagination';
import Electrical1 from "../../../assets/images/electrical1.png";
import Electrical2 from "../../../assets/images/electrical2.png";
import Electrical3 from "../../../assets/images/electrical3.png";
import Electrical4 from "../../../assets/images/electrical4.png";
import ElectricalBannerImage from "../../../assets/images/Electrical-team.webp";

const electricalSubdivisions = [
  {
    title: "Power Generation",
    icon: GiPowerGenerator,
    description:
      "Converts mechanical turbine energy into electricity. Oversees generator selection (based on power and voltage), load system design, and emergency breaker integration.",
  },
  {
    title: "Control Systems",
    icon: MdSettings,
    description:
      "Analyzes mathematical models of wind turbines to design controllers such as PID and FLC for applications like blade pitch control. These controllers are modeled, tested, and validated using Simulink to optimize turbine performance, ensure operational stability, and adapt to varying wind conditions.",
  },
  {
    title: "Converters",
    icon: MdAutorenew,
    description:
      "Transforms electrical energy using converters (AC/DC rectifiers, DC/DC converters, and DC/AC inverters) to ensure compatibility with storage systems or grid-connected loads. Emphasizes proper sizing, optimized switching strategies, and thermal management to maximize efficiency and reduce power loss.",
  },
];

const ElectricalDiv = () => {
  const images = [Electrical1, Electrical2, Electrical3, Electrical4];
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
      <section className="relative w-full h-[400px] md:h-[550px] overflow-hidden shadow-lg mb-6">
        <img src={ElectricalBannerImage} alt="Electrical Division Banner" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="relative text-4xl sm:text-6xl md:text-6xl font-extrabold text-center leading-tight whitespace-pre-line md:whitespace-nowrap">
            {/* Bottom Shadow Layer */}
            <span className="absolute top-[2px] left-[2px] md:top-[4px] md:left-[4px] text-black z-0 select-none block w-full">
              Electrical Division
            </span>

            {/* Mid Highlight Layer */}
            <span className="absolute top-[1px] left-[1px] md:top-[2px] md:left-[2px] text-gray-700 z-10 select-none block w-full">
              Electrical Division
            </span>

            {/* Top Main Gradient Text Layer */}
            <span className="relative z-20 bg-gradient-to-r from-white to-slate-300 text-transparent bg-clip-text drop-shadow-lg block w-full">
              Electrical Division
            </span>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="px-6 md:px-10 flex flex-col md:flex-row items-center bg-white dark:bg-gray-900 shadow-lg">
        {/* Image Section */}
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

        {/* Info Section */}
        <div className="w-full md:w-1/2 md:pl-6 flex flex-col">
          {/* Leadership */}
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 mt-4 text-center md:text-left">
            Leader: Josue Colón López
          </h3>
          <p className="text-gray-700 dark:text-white mb-4 leading-relaxed">
            The electrical division is responsible for the design, implementation, and management of electrical and electronic systems associated with the wind turbine. Its main goal is to ensure reliable, efficient, and safe operation of all components involved in power generation, control, and energy conversion.
          </p>

          <blockquote className="italic text-gray-600 dark:text-gray-400 mb-4">
            "Building the brains of clean energy: real-time optimization, resilient control, and intelligent turbine dynamics."
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
            {electricalSubdivisions.map(({ title, description, icon: Icon }, index) => (
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

export default ElectricalDiv;
