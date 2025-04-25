import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import {
  MdSettings,
  MdAutorenew
} from "react-icons/md";
import { GiPowerGenerator } from "react-icons/gi";
import 'swiper/css';
import 'swiper/css/pagination';
import Dog2 from "../../../assets/images/dog2.jpg"; // Placeholder image
import ElectricalBannerImage from "../../../assets/images/polygons_dark.png"; // Shared banner

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
  return (
    <div className="dark:bg-gray-800 transition-colors duration-300">

      {/* Banner */}
      <section className="relative w-full h-[300px] md:h-[450px] overflow-hidden shadow-md mb-6">
        <img src={ElectricalBannerImage} alt="Electrical Division Banner" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
            Electrical Division
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="px-6 md:px-10 flex flex-col md:flex-row items-center bg-white dark:bg-gray-900 shadow-md">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Dog2}
            alt="Electrical Visual"
            className="w-48 h-auto rounded-lg"
            loading="lazy"
          />
        </div>

        {/* Info Section */}
        <div className="w-full md:w-1/2 md:pl-6 flex flex-col">
          <p className="text-gray-700 dark:text-white mb-4 leading-relaxed mt-4">
            The electrical division is responsible for the design, implementation, and management of electrical and electronic systems associated with the wind turbine. Its main goal is to ensure reliable, efficient, and safe operation of all components involved in power generation, control, and energy conversion.
          </p>

          <blockquote className="italic text-gray-600 dark:text-gray-400 mb-4">
            "We power the turbine’s intelligence and stability — from real-time control to efficient energy conversion."
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
