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
          Electrical Division
        </h2>
        <p className="text-gray-700 mb-4">
        The electrical division is responsible for the design, implementation, and management of the electrical and electronic systems associated with the wind turbine. Its main objective is to ensure reliable, efficient, and safe operation of all components involved in power generation, control, and energy conversion.

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
              <h3 className="text-lg md:text-xl font-medium">Power Generation</h3>
              <p className="text-gray-700">
              This subdivision focuses on the conversion of mechanical energy from the turbine shaft into electrical energy. Tasks include the specification and selection of the generator based on parameters such as rated power, output voltage, and operational efficiency.

In addition, the generation subdivision is also responsible for the load management system and the integration of the emergency breaker. 

              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full text-center md:text-left">
              <h3 className="text-lg md:text-xl font-medium">Control Systems</h3>
              <p className="text-gray-700">
              The control subdivision is in charge of developing and implementing the systems required to monitor and regulate turbine behavior. This includes acquiring real-time data such as voltage, current, rotational speed, and temperature, as well as executing control algorithms to optimize performance and maintain system stability under varying wind conditions.

              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full text-center md:text-left">
              <h3 className="text-lg md:text-xl font-medium">Converters</h3>
              <p className="text-gray-700">
              This subdivision handles the conditioning and transformation of the generated electrical energy to meet system requirements. It involves the design and deployment of converters such as AC/DC rectifiers, DC/DC converters, and DC/AC inverters ensuring compatibility with storage systems or grid connected loads. Proper sizing, switching strategies, and thermal management are key focus areas to guarantee high efficiency and minimal power loss.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ElectricalDiv;
