import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Dog2 from "../../../assets/images/dog2.jpg"; // Replace later with a video

const WindFarmDevDiv = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 flex flex-col md:flex-row items-center w-full">
      {/* Static Image (Replace with video later) */}
      <div className="md:w-1/2 flex justify-center">
        <img src={Dog2} alt="Wind Farm Development" className="w-48 h-auto rounded-lg" />
      </div>

      {/* Swiper Container - Adjusted for Proper Responsiveness */}
      <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0 flex flex-col w-full">
        {/* Division Title */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center md:text-left">
          División de Wind Farm
        </h2>
        <p className="text-gray-700 mb-4">
          La División de Desarrollo de Parques Eólicos se centra en la creación de planes para proyectos de parques eólicos marinos. Realizamos análisis de datos, evaluaciones ambientales, evaluaciones económicas y estudios de ingeniería para garantizar la viabilidad y la sostenibilidad de los proyectos de energía eólica. Nuestro trabajo incluye la investigación de los recursos eólicos, la optimización de la ubicación de las turbinas y la garantía del cumplimiento de las normas ambientales.
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
              <h3 className="text-lg md:text-xl font-medium">Mechanical</h3>
              <p className="text-gray-700">
                Estudio de la velocidad del viento y su impacto en la eficiencia de las turbinas.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full text-center md:text-left">
              <h3 className="text-lg md:text-xl font-medium">Programming & Optimization</h3>
              <p className="text-gray-700">
                Desarrollo de algoritmos para mejorar la eficiencia de conversión de energía.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full text-center md:text-left">
              <h3 className="text-lg md:text-xl font-medium">Cumplimiento Ambiental</h3>
              <p className="text-gray-700">
                Análisis de impacto ambiental y regulaciones en parques eólicos.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>


      </div>
    </div>
  );
};

export default WindFarmDevDiv;
