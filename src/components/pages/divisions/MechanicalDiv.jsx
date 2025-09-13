import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import {
  MdEngineering,
  MdQueryStats,
  MdConstruction,
  MdMemory
} from "react-icons/md";
import 'swiper/css';
import 'swiper/css/pagination';
import Mech1 from "../../../assets/images/mech1.png";
import Mech2 from "../../../assets/images/mech2.png";
import Mech3 from "../../../assets/images/mech3.png";
import Mech4 from "../../../assets/images/mech4.png";
import MechanicalBanner from "../../../assets/images/Mecanica Group.jpeg";

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
  const imgPaginationRef = useRef(null);
  const subPaginationRef = useRef(null);


  return (
    <div className="dark:bg-gray-800 transition-colors duration-300">

      {/* Banner */}
      <section className="relative w-full h-[400px] md:h-[600px] overflow-hidden shadow-lg mb-6">
        <img
          src={MechanicalBanner}
          srcSet={`${MechanicalBanner} 1920w, ${MechanicalBanner} 1280w, ${MechanicalBanner} 768w`}
          sizes="100vw"
          alt="Mechanical Division Banner"
          loading="eager"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="relative grid place-items-center text-center font-extrabold
                     leading-[1.1] px-2 sm:px-6 max-w-screen-xl mx-auto
                     -translate-y-20 text-4xl sm:text-6xl md:text-6xl">
            {/* Bottom shadow (scales with font size) */}
            <span className="col-start-1 row-start-1 translate-x-[0.08em] translate-y-[0.08em] text-gray-900/90 select-none pointer-events-none">
              Mechanical Division
            </span>
            {/* Mid highlight */}
            <span className="col-start-1 row-start-1 translate-x-[0.04em] translate-y-[0.04em] text-gray-700/90 select-none pointer-events-none">
              Mechanical Division
            </span>
            {/* Top gradient */}
            <span className="col-start-1 row-start-1 relative bg-gradient-to-r from-white to-slate-300 text-transparent bg-clip-text drop-shadow-lg">
              Mechanical Division
            </span>
          </h1>
        </div>
      </section>


      {/* Main Info */}
      <div className="px-6 md:px-10 flex flex-col md:flex-row items-center bg-white dark:bg-gray-900 shadow-lg">
        {/* Image Carousel */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center mt-6 md:mt-0">
          <div className="relative w-full max-w-[640px] md:max-w-full aspect-[16/10] overflow-hidden rounded-lg">
            <Swiper
              onBeforeInit={(s) => {
                swiperRef.current = s;
                s.params.pagination = { ...s.params.pagination, el: imgPaginationRef.current, clickable: true };
              }}
              onSwiper={(s) => {
                if (imgPaginationRef.current) {
                  s.params.pagination.el = imgPaginationRef.current;
                  s.pagination.render();
                  s.pagination.update();
                }
              }}
              modules={[Autoplay, Pagination, A11y]}
              spaceBetween={24}
              slidesPerView={1}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop={true}
              allowTouchMove={true}
              className="w-full h-full"
            >
              {images.map((src, idx) => (
                <SwiperSlide key={idx} className="flex items-center justify-center p-2 sm:p-3 md:p-4">
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
          {/* External pagination (below image) */}
          <div
            ref={imgPaginationRef}
            className="mt-2 mb-1 flex justify-center
                       [&_.swiper-pagination-bullet]:!w-3.5 [&_.swiper-pagination-bullet]:!h-3.5
                       [&_.swiper-pagination-bullet]:!bg-green-600
                       [&_.swiper-pagination-bullet-active]:!bg-green-600"
            aria-hidden="true"
          />
        </div>

        {/* Info Section */}
        <div className="w-full md:w-1/2 md:pl-6 flex flex-col">
          {/* Leadership */}
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 mt-4 text-center md:text-left">
            Captain: Diego J. Muñoz Rivera
          </h3>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 text-center md:text-left">
            Co-Leader: Paola N. Sierra
          </h4>
          <p className="text-gray-700 dark:text-white mb-4 leading-relaxed">
            The Mechanical Division is responsible for the design, development, and assembly of all mechanical systems of the wind turbine. This includes structural components, material selection, and ensuring overall functionality and safety. The team brings innovative and practical solutions to meet technical requirements while collaborating with other divisions for seamless integration and performance.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center md:text-left">
            Subdivisions
          </h3>

          <Swiper
            onBeforeInit={(s) => {
              s.params.pagination = { ...s.params.pagination, el: subPaginationRef.current, clickable: true };
            }}
            onSwiper={(s) => {
              if (subPaginationRef.current) {
                s.params.pagination.el = subPaginationRef.current;
                s.pagination.render();
                s.pagination.update();
              }
            }}
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={20}
            pagination={{ clickable: true }}
            loop
            allowTouchMove={true}
            speed={600}
            autoplay={{
              delay: 15000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="w-full min-h-[140px]"
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
          {/* External pagination (below subdivision slider) */}
          <div
            ref={subPaginationRef}
            className="mt-2 mb-1 flex justify-center
                       [&_.swiper-pagination-bullet]:!w-2.5 [&_.swiper-pagination-bullet]:!h-2.5
                       [&_.swiper-pagination-bullet]:!bg-green-600
                       [&_.swiper-pagination-bullet-active]:!bg-green-600"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
};

export default MechanicalDiv;
