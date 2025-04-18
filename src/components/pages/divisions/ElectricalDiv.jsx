import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Dog2 from "../../../assets/images/dog2.jpg"; // Replace with a video later

const electrical_subdivisions = [
  {
    title: "Power Generation",
    description:
      "Converts mechanical turbine energy into electricity. Oversees generator selection (based on power and voltage), load system design, and emergency breaker integration.",
  },
  {
    title: "Control Systems",
    description:
      "Develops systems for monitoring and regulating turbine behavior, including real-time data acquisition (voltage, current, speed, temperature) and control algorithms to optimize performance and stability under changing wind conditions.",
  },
  {
    title: "Converters",
    description:
      "Conditions and transforms electrical energy using converters (AC/DC rectifiers, DC/DC converters, and DC/AC inverters) to ensure compatibility with storage systems or grid-connected loads. Emphasizes proper sizing, optimized switching strategies, and thermal management to maximize efficiency and reduce power loss.",
  },
];

const ElectricalDiv = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6 flex flex-col md:flex-row items-center w-full transition-colors duration-300">

      {/* Media Section */}
      <div className="md:w-1/2 flex justify-center">
        {/* Replace this <img> with a <video> when applicable */}
        <img
          src={Dog2}
          alt="Electrical Division visual"
          className="w-48 h-auto rounded-lg"
          loading="lazy"
        />
      </div>

      {/* Info Section */}
      <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0 flex flex-col w-full">

        {/* Division Title */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
          Electrical Division
        </h2>

        {/* Description */}
        <p className="text-gray-700 dark:text-white mb-4">
          The electrical division is responsible for the design, implementation, and management of electrical and electronic systems associated with the wind turbine. Its main goal is to ensure reliable, efficient, and safe operation of all components involved in power generation, control, and energy conversion.
        </p>

        {/* Subdivisions Header */}
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center md:text-left">
          Subdivisions
        </h3>

        {/* Swiper Section */}
        <Swiper
          modules={[Pagination, A11y, Autoplay]}
          spaceBetween={20}
          pagination={{ el: ".swiper-pagination-electrical", clickable: true }}
          loop={true}
          speed={600}
          autoplay={{
            delay: 15000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="w-full min-h-[140px]"
        >
          {electrical_subdivisions.map(({ title, description }, index) => (
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

        {/* Custom Pagination Below */}
        <div className="swiper-pagination-electrical mt-4 flex justify-center" />
      </div>
    </div>
  );
};

export default ElectricalDiv;
