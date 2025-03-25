import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
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
          División Mecánica
        </h2>
        <p className="text-gray-700">
          La División Mecánica se enfoca en el diseño, análisis y optimización de componentes mecánicos para turbinas eólicas. Trabajamos en la creación de modelos CAD, análisis estructural, y pruebas de fabricación para garantizar la eficiencia y durabilidad de los componentes.
        </p>
        <h3 className="text-2xl mt-3 font-semibold text-gray-900 mb-4 text-center md:text-left">Subdivisions</h3>

        {/* Swiper Wrapper with Fixed Height for Visibility */}
        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="w-full min-h-[120px]" // Ensures text stays visible even on smaller screens
        >
          <SwiperSlide>
            <div className="w-full text-center md:text-left">
              <h3 className="text-lg md:text-xl font-medium">Diseño y Análisis de Componentes</h3>
              <p className="text-gray-700">
                Creación de modelos CAD finales y análisis estructural para optimizar la resistencia y eficiencia.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full text-center md:text-left">
              <h3 className="text-lg md:text-xl font-medium">Optimización Aerodinámica</h3>
              <p className="text-gray-700">
                Aplicación de principios aerodinámicos en el diseño de las palas para mejorar el rendimiento.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full text-center md:text-left">
              <h3 className="text-lg md:text-xl font-medium">Fabricación y Pruebas</h3>
              <p className="text-gray-700">
                Supervisión del proceso de manufactura y pruebas de componentes mecánicos.
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
