import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import {
  MdEngineering,
  MdQueryStats,
  MdConstruction,
  MdMemory
} from "react-icons/md";
import 'swiper/css';
import 'swiper/css/pagination';
import Dog2 from "../../../assets/images/dog2.jpg"; // Replace with video later
import MechanicalBannerImage from "../../../assets/images/polygons_dark.png"; // Shared or specific banner

const mechanicalSubdivisions = [
  {
    title: "Rotor Mechanics & Data Analysis",
    icon: MdQueryStats,
    description:
      "Optimizes wind turbine blade performance through CFD simulations, structural analysis, and experimental data evaluation. We refine blade designs for maximum efficiency and durability, continuously improving overall turbine performance based on test results.",
  },
  {
    title: "Manufacturing & Design",
    icon: MdEngineering,
    description:
      "Transforms concepts into reality by developing and refining turbine components. We utilize CAD modeling and simulations to ensure designs that balance efficiency with functionality. Our commitment to precision and optimization delivers components that consistently meet the highest performance standards.",
  },
  {
    title: "Base Design",
    icon: MdConstruction,
    description:
      "Ensures the structural integrity of the turbine base, supporting mechanical loads and withstanding environmental forces.",
  },
  {
    title: "Mechatronics",
    icon: MdMemory,
    description:
      "Designs the blade pitch actuator and integrates sensors with microcontrollers to enable real-time blade control. Ensures coordination between motion, feedback, and electronic control—enhancing turbine efficiency and safety."
  },
];

const MechanicalDiv = () => {
  return (
    <div className="dark:bg-gray-800 transition-colors duration-300">

      {/* Banner */}
      <section className="relative w-full h-[300px] md:h-[450px] overflow-hidden shadow-md mb-6">
        <img src={MechanicalBannerImage} alt="Mechanical Division Banner" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
            Mechanical Division
          </h1>
        </div>
      </section>

      {/* Main Info */}
      <div className="px-6 md:px-10 flex flex-col md:flex-row items-center bg-white dark:bg-gray-900 shadow-md">
        {/* Visual */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Dog2}
            alt="Mechanical Division Visual"
            className="w-48 h-auto rounded-lg"
            loading="lazy"
          />
        </div>

        {/* Info Section */}
        <div className="w-full md:w-1/2 md:pl-6 flex flex-col">
          <p className="text-gray-700 dark:text-white mb-4 leading-relaxed mt-4">
            The Mechanical Division is responsible for the design, development, and assembly of all mechanical systems of the wind turbine. This includes structural components, material selection, and ensuring overall functionality and safety. The team brings innovative and practical solutions to meet technical requirements while collaborating with other divisions for seamless integration and performance.
          </p>

          <blockquote className="italic text-gray-600 dark:text-gray-400 mb-4">
            "Where engineering meets wind: transforming simulations into reliable turbine mechanics."
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
            {mechanicalSubdivisions.map(({ title, description, icon: Icon }, index) => (
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

export default MechanicalDiv;
