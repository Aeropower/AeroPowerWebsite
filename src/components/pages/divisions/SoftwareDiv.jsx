import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Dog2 from "../../../assets/images/dog2.jpg"; // Replace later with a video

const SoftwareDiv = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 flex flex-col md:flex-row items-center w-full">
      {/* Swiper Container - Adjusted for Proper Responsiveness */}
      <div className="w-full md:w-1/2 md:pr-6 mt-6 md:mt-0 order-2 md:order-1 flex flex-col">
        {/* Division Title */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center md:text-left">
          División de Software
        </h2>
        <p className="text-gray-700 mb-4">
          La División de Software se enfoca en el desarrollo de aplicaciones web, software embebido y interfaces de usuario para sistemas de control y monitoreo de turbinas eólicas. Utilizamos tecnologías modernas para garantizar la eficiencia y usabilidad de nuestros sistemas.
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
              <h3 className="text-lg md:text-xl font-medium">Desarrollo Web</h3>
              <p className="text-gray-700">
                Creación y mantenimiento del sitio web del equipo con tecnologías modernas.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full text-center md:text-left">
              <h3 className="text-lg md:text-xl font-medium">Código Embebido</h3>
              <p className="text-gray-700">
                Desarrollo de software para microcontroladores como Arduino para control de turbinas.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full text-center md:text-left">
              <h3 className="text-lg md:text-xl font-medium">Interfaces de Usuario</h3>
              <p className="text-gray-700">
                Diseño de interfaces para el monitoreo en tiempo real de sistemas embebidos.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Static Image (Replace with video later) */}
      <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2 mt-6 md:mt-0">
        <img
          src={Dog2}
          alt="Software Division"
          className="w-48 h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default SoftwareDiv;
