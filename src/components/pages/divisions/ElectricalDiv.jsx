import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Dog2 from "../../../assets/images/dog2.jpg"; // Replace later with a video

const ElectricalDiv = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 flex flex-col md:flex-row items-center w-full">
      {/* Static Image (Replace with video later) */}
      <div className="md:w-1/2 flex justify-center">
        <img src={Dog2} alt="Electrical Division" className="w-48 h-auto rounded-lg" />
      </div>

      {/* Swiper Container - Adjusted for Proper Responsiveness */}
      <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0 flex flex-col w-full">
        {/* Division Title */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center md:text-left">
          División Eléctrica
        </h2>
        <p className="text-gray-700 mb-4">
          La División Eléctrica se enfoca en el diseño, simulación y optimización de circuitos eléctricos para mejorar el rendimiento de las turbinas eólicas. También trabajamos en la programación de microcontroladores y sistemas de monitoreo remoto para garantizar un funcionamiento eficiente y seguro.
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
          className="w-full min-h-[120px]" // Ensures text stays visible even on smaller screens
        >
          <SwiperSlide>
            <div className="w-full text-center md:text-left">
              <h3 className="text-lg md:text-xl font-medium">Diseño de Circuitos</h3>
              <p className="text-gray-700">
                Desarrollo y simulación de circuitos eléctricos para optimizar el rendimiento de la turbina.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full text-center md:text-left">
              <h3 className="text-lg md:text-xl font-medium">Programación de Microcontroladores</h3>
              <p className="text-gray-700">
                Implementación de software embebido para el control de los sistemas eléctricos.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full text-center md:text-left">
              <h3 className="text-lg md:text-xl font-medium">Monitoreo Remoto</h3>
              <p className="text-gray-700">
                Configuración de sensores y sistemas de monitoreo para evaluar el desempeño en tiempo real.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ElectricalDiv;
