import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Dog2 from "../../../assets/images/dog2.jpg"; // Replace later with a video

const MechanicalDiv = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 flex flex-col md:flex-row items-center w-full">
      {/* Swiper Container - Adjusted for Proper Responsiveness */}
      <div className="w-full md:w-1/2 md:pr-6 mt-6 md:mt-0 order-2 md:order-1 flex flex-col">
        {/* Division Title */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center md:text-left">
          Mechanical Division
        </h2>
        <p className="text-gray-700 mb-4">
        The Mechanical Division is responsible for the design, development, and assembly of all mechanical systems of the wind turbine. This includes creating structural components, selecting materials, and ensuring the functionality and safety of the final product. The division focuses on bringing innovative and practical solutions to meet the project's technical requirements while collaborating closely with other teams to ensure integration and performance.
        </p>
        <h3 className="text-2xl mt-3 font-semibold text-gray-900 mb-4 text-center md:text-left">Subdivisions</h3>

        {/* Swiper Wrapper with Fixed Height for Visibility */}
        <Swiper
          modules={[Pagination, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          speed={500}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          className="w-full min-h-[120px] custom-swiper" // Ensures text stays visible even on smaller screens
        >
          <SwiperSlide>
            <div className="w-full text-center md:text-left">
              <h3 className="text-lg md:text-xl font-medium">Rotor Mechanics & Data Analysis</h3>
              <p className="text-gray-700">
              The Rotor Mechanics & Data Analysis subdivision focuses on studying the aerodynamic performance of the wind turbine blades. Through the use of CFD simulations and structural analysis, we optimize the blade design to ensure maximum efficiency and durability. Our responsibilities also include analyzing experimental data and continuously improving the blades based on test results, aiming to enhance the overall performance of the wind turbine.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full text-center md:text-left">
              <h3 className="text-lg md:text-xl font-medium">Manufacturing & Design</h3>
              <p className="text-gray-700">
              The Manufacturing & Design subdivision brings our ideas to life by developing and refining the components of the turbine. Using CAD modeling and simulations, we ensure that every design is both efficient and functional. Precision and optimization are essential to our work, allowing us to create components that meet the highest performance standards.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full text-center md:text-left">
              <h3 className="text-lg md:text-xl font-medium">Base Design</h3>
              <p className="text-gray-700">
              The base design subdivision specializes in the structural integrity of the whole turbine base.  
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Static Image (Replace with video later) */}
      <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
        <img src={Dog2} alt="Mechanical Division" className="w-48 h-auto rounded-lg" />
      </div>
    </div>
  );
};

export default MechanicalDiv;
