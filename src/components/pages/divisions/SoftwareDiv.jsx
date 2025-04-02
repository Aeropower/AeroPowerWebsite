import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Dog2 from "../../../assets/images/dog2.jpg"; // Replace later with a video

const SoftwareDiv = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 flex flex-col md:flex-row items-center w-full dark:bg-gray-800">
      {/* Swiper Container - Adjusted for Proper Responsiveness */}
      <div className="w-full md:w-1/2 md:pr-6 mt-6 md:mt-0 order-2 md:order-1 flex flex-col">
        {/* Division Title */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center md:text-left dark:text-white">
          Software Division
        </h2>
        <p className="text-gray-700 mb-4 dark:text-white">
          The Software Division is in charge of designing, developing, and maintaining the team's website, both front-end and back-end, as well as the embedded system that operates the turbine's control system and the emergency brake, ensuring smooth and safe performance.
        </p>
        <h3 className="text-2xl mt-3 font-semibold text-gray-900 mb-4 text-center md:text-left dark:text-white">Subdivisions</h3>

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
              <h3 className="text-lg md:text-xl font-medium">Web Development</h3>
              <p className="text-gray-700 dark:text-white">
                The Web Development Division is responsible for designing the team's website UI and bringing it to life by developing the front-end using React.js with JavaScript and the back-end using Python and Flask. They are the ones who make real the very website you are reading this on.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full text-center md:text-left">
              <h3 className="text-lg md:text-xl font-medium">Embedded Software</h3>
              <p className="text-gray-700 dark:text-white">
                The Embedded Software Subdivision is responsible for designing and maintaining the real-time operating system using FreeRTOS, running on ESP32 or AVR microcontrollers. This system makes possible the implementation of the turbine's pitch control system and the emergency brake control.
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
