import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Dog2 from "../../../assets/images/dog2.jpg"; // Replace later with a video

const ElectricalDiv = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 flex flex-col md:flex-row items-center w-full">
      {/* Image Section (Left on larger screens, Top on small screens) */}
      <div className="w-full md:w-1/2 flex justify-center order-1 md:order-1">
        <img
          src={Dog2}
          alt="Electrical Division"
          className="w-48 h-auto rounded-lg"
        />
      </div>

      {/* Swiper Container - Adjusted for Proper Responsiveness */}
      <div className="w-full md:w-1/2 md:pl-6 mt-6 md:mt-0 order-2 md:order-2 flex flex-col">
        {/* Division Title */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center md:text-left">
          División Eléctrica
        </h2>

        {/* Swiper - Text Only */}
        <Swiper
          modules={[Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="w-full min-h-[120px]"
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
