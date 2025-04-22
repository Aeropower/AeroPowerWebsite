import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import { FaMicrochip } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import 'swiper/css';
import 'swiper/css/pagination';
import Dog2 from "../../../assets/images/dog2.jpg"; // Replace with a video later

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
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6 flex flex-col md:flex-row items-center w-full transition-colors duration-300">

      {/* Media Section */}
      <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
        <img
          src={Dog2}
          alt="Software Division"
          className="w-48 h-auto rounded-lg"
          loading="lazy"
        />
      </div>
      {/* Info Section*/}
      <div className="w-full md:w-1/2 md:pr-6 mt-6 md:mt-0 order-2 md:order-1 flex flex-col">

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
          Software Division
        </h2>

        {/* Description */}
        <p className="text-gray-700 dark:text-white mb-4 leading-relaxed">
          The Software Division designs, develops, and maintains the team’s website and the embedded systems responsible for turbine control and safety. Their work ensures seamless user interaction and real-time system responsiveness.
        </p>

        {/* Subdivisions Title */}
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center md:text-left">
          Subdivisions
        </h3>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, A11y, Autoplay]}
          spaceBetween={20}
          pagination={{ el: ".swiper-pagination-software", clickable: true }}
          loop={true}
          speed={600}
          autoplay={{
            delay: 15000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="w-full min-h-[140px]"
        >
          {softwareSubdivisions.map(({ title, description, icon: Icon }, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full px-4 py-2 text-center md:text-left mx-auto border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 flex items-center justify-center md:justify-start gap-2 whitespace-nowrap">
                  {title}
                  <Icon className="text-xl text-green-600 dark:text-green-400" />
                </h4>
                <p className="text-gray-700 dark:text-gray-300 break-normal hyphens-auto leading-relaxed">
                  {description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots */}
        <div className="swiper-pagination-software mt-4 flex justify-center" />
      </div>
    </div>
  );
};

export default SoftwareDiv;
