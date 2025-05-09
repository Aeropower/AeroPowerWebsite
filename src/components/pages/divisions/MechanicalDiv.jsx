import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay, Navigation } from 'swiper/modules';
import {
  MdEngineering,
  MdQueryStats,
  MdConstruction,
  MdMemory
} from "react-icons/md";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Mech1 from "../../../assets/images/mech1.png";
import Mech2 from "../../../assets/images/mech2.png";
import Mech3 from "../../../assets/images/mech3.png";
import Mech4 from "../../../assets/images/mech4.png";
import MechanicalBanner from "../../../assets/images/mechDivision.jpeg";

const mechanicalSubdivisions = [
  {
    title: "Rotor Mechanics & Data Analysis",
    icon: MdQueryStats,
    description:
      "Optimizes wind turbine blade performance through CFD simulations, structural analysis, and experimental data evaluation. We refine blade designs for maximum efficiency and durability, continuously improving overall turbine performance based on test results.",
  },
  {
    title: "Manufacturing & Design",
    icon: MdEngineering,
    description:
      "Transforms concepts into reality by developing and refining turbine components. We utilize CAD modeling and simulations to ensure designs that balance efficiency with functionality. Our commitment to precision and optimization delivers components that consistently meet the highest performance standards.",
  },
  {
    title: "Base Design",
    icon: MdConstruction,
    description:
      "Ensures the structural integrity of the turbine base, supporting mechanical loads and withstanding environmental forces.",
  },
  {
    title: "Mechatronics",
    icon: MdMemory,
    description:
      "Designs the blade pitch actuator and integrates sensors with microcontrollers to enable real-time blade control. Ensures coordination between motion, feedback, and electronic control—enhancing turbine efficiency and safety."
  },
];

const MechanicalDiv = () => {
  const images = [Mech1, Mech2, Mech3, Mech4];
  const swiperRef = useRef(null);

  const pauseAutoplayTemporarily = () => {
    const swiper = swiperRef.current;
    if (swiper && swiper.autoplay.running) {
      swiper.autoplay.stop();
      setTimeout(() => {
        swiper?.autoplay.start();
      }, 10000); // Pause for 10 seconds
    }
  };

  useEffect(() => {
    const nextBtn = document.querySelector('.swiper-button-next');
    const prevBtn = document.querySelector('.swiper-button-prev');

    const handleClick = () => pauseAutoplayTemporarily();

    nextBtn?.addEventListener('click', handleClick);
    prevBtn?.addEventListener('click', handleClick);

    return () => {
      nextBtn?.removeEventListener('click', handleClick);
      prevBtn?.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = MechanicalBanner;
  }, []);

  return (
    <div className="dark:bg-gray-800 transition-colors duration-300">

      {/* Banner */}
      <section className="relative w-full h-[400px] md:h-[600px] overflow-hidden shadow-lg mb-6">
        <img src={MechanicalBanner} alt="Mechanical Division Banner" loading="eager" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="relative text-4xl sm:text-6xl md:text-6xl font-extrabold text-center leading-tight whitespace-pre-line md:whitespace-nowrap">
            {/* Bottom Shadow Layer */}
            <span className="absolute top-[2px] left-[2px] md:top-[4px] md:left-[4px] text-gray-900 z-0 select-none block w-full">
              Mechanical Division
            </span>

            {/* Mid Highlight Layer */}
            <span className="absolute top-[1px] left-[1px] md:top-[2px] md:left-[2px] text-gray-700 z-10 select-none block w-full">
              Mechanical Division
            </span>

            {/* Top Main Gradient Text Layer */}
            <span className="relative z-20 bg-gradient-to-r from-white to-slate-300 text-transparent bg-clip-text drop-shadow-lg block w-full">
              Mechanical Division
            </span>
          </h1>
        </div>
      </section>

      {/* Main Info */}
      <div className="px-6 md:px-10 flex flex-col md:flex-row items-center bg-white dark:bg-gray-900 shadow-lg">
        {/* Image Carousel */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center mt-6 md:mt-0">
          <div className="relative w-full max-w-[400px] h-[250px] md:h-[400px] md:max-w-full overflow-hidden">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={100}
              slidesPerView={1}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ el: '.custom-swiper-pagination', clickable: true }}
              navigation={true}
              loop={true}
              allowTouchMove={false}
              className="w-full h-full"
            >
              {images.map((src, idx) => (
                <SwiperSlide key={idx} className="flex items-center justify-center">
                  <img
                    src={src}
                    alt={`Wind Farm Slide ${idx + 1}`}
                    loading="lazy"
                    className="inset-0 m-auto max-w-full max-h-full object-contain rounded-lg transition-opacity duration-700 shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Pagination */}
          <div className="custom-swiper-pagination mt-3 flex items-center justify-center" />
        </div>

        {/* Info Section */}
        <div className="w-full md:w-1/2 md:pl-6 flex flex-col">
          {/* Leadership */}
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 mt-4 text-center md:text-left">
            Leader: Diego J. Muñoz Rivera
          </h3>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 text-center md:text-left">
            Co-Leader: Paola N. Sierra
          </h4>
          <p className="text-gray-700 dark:text-white mb-4 leading-relaxed">
            The Mechanical Division is responsible for the design, development, and assembly of all mechanical systems of the wind turbine. This includes structural components, material selection, and ensuring overall functionality and safety. The team brings innovative and practical solutions to meet technical requirements while collaborating with other divisions for seamless integration and performance.
          </p>

          <blockquote className="italic text-gray-600 dark:text-gray-400 mb-4">
            "Harnessing the power of the wind through precision, innovation, and purpose-driven engineering."
          </blockquote>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center md:text-left">
            Subdivisions
          </h3>

          <Swiper
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={20}
            pagination={{ clickable: true }}
            loop
            speed={600}
            autoplay={{
              delay: 15000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="w-full min-h-[140px] custom-swiper"
          >
            {mechanicalSubdivisions.map(({ title, description, icon: Icon }, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full px-4 py-2 text-center md:text-left mx-auto border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-2 justify-center md:justify-start flex-wrap md:flex-nowrap">
                    {title}
                    <Icon className="text-xl text-green-600 dark:text-green-400" title={`${title} icon`} aria-hidden="true" />
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 break-normal leading-relaxed">
                    {description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div />
        </div>
      </div>
    </div>
  );
};

export default MechanicalDiv;
