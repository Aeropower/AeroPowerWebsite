import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Dog2 from "../../../assets/images/dog2.jpg"; // Replace later with video

const mechanicalSubdivisions = [
  {
    title: "Rotor Mechanics & Data Analysis",
    description:
      "Optimizes wind turbine blade performance through CFD simulations, structural analysis, and experimental data evaluation. We refine blade designs for maximum efficiency and durability, continuously improving overall turbine performance based on test results.",
  },
  {
    title: "Manufacturing & Design",
    description:
      "Transforms concepts into reality by developing and refining turbine components. We utilize CAD modeling and simulations to ensure designs that balance efficiency with functionality. Our commitment to precision and optimization delivers components that consistently meet the highest performance standards.",
  },
  {
    title: "Base Design",
    description:
      "Ensures the structural integrity of the turbine base, supporting mechanical loads and withstanding environmental forces",
  },
];

const MechanicalDiv = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6 flex flex-col md:flex-row items-center w-full transition-colors duration-300">

      {/* Media Section */}
      <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
        <img
          src={Dog2}
          alt="Mechanical Division"
          className="w-48 h-auto rounded-lg"
          loading="lazy"
        />
      </div>
      {/* Info Section */}
      <div className="w-full md:w-1/2 md:pr-6 mt-6 md:mt-0 order-2 md:order-1 flex flex-col">

        {/* Division Title */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
          Mechanical Division
        </h2>

        {/* Description */}
        <p className="text-gray-700 dark:text-white mb-4 leading-relaxed">
          The Mechanical Division is responsible for the design, development, and assembly of all mechanical systems of the wind turbine. This includes structural components, material selection, and ensuring overall functionality and safety. The team brings innovative and practical solutions to meet technical requirements while collaborating with other divisions for seamless integration and performance.
        </p>

        {/* Subdivisions Header */}
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center md:text-left">
          Subdivisions
        </h3>

        {/* Swiper Section */}
        <Swiper
          modules={[Pagination, A11y, Autoplay]}
          spaceBetween={20}
          pagination={{ el: ".swiper-pagination-mechanical", clickable: true }}
          loop={true}
          speed={600}
          autoplay={{
            delay: 15000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="w-full min-h-[140px]"
        >
          {mechanicalSubdivisions.map(({ title, description }, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full px-4 py-2 text-center md:text-left mx-auto border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {title}
                </h4>
                <p className="text-base text-gray-700 dark:text-gray-300 break-normal hyphens-auto leading-relaxed">
                  {description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="swiper-pagination-mechanical mt-4 flex justify-center" />
      </div>
    </div>
  );
};

export default MechanicalDiv;
