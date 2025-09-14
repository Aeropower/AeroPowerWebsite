import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay, Keyboard, Navigation } from 'swiper/modules';
import {
  MdEngineering,
  MdQueryStats,
  MdConstruction,
  MdMemory
} from "react-icons/md";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import { useMedia } from '../../../hooks/useMedia';
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
  const prefersReduced = usePrefersReducedMotion();
  const bulletLabel = (i, total) => `Go to slide ${i + 1} of ${total}`;
  const swiperRef = useRef(null);
  const subSwiperRef = useRef(null);
  const isDesktop = useMedia('(min-width:1024px) and (pointer: fine)');

  return (
    <div className="dark:bg-gray-800 transition-colors duration-300">

      {/* Banner */}
      <section
        className="relative w-full h-[400px] md:h-[600px] overflow-hidden shadow-lg mb-6"
        aria-labelledby="mechanical-banner"
      >
        <img
          src={MechanicalBanner}
          srcSet={`${MechanicalBanner} 1920w, ${MechanicalBanner} 1280w, ${MechanicalBanner} 768w`}
          sizes="100vw"
          alt="Mechanical Division Banner"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 md:bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 id='mechanical-banner'
            className="relative grid place-items-center text-center font-extrabold
                     leading-[1.1] px-2 sm:px-6 max-w-screen-xl mx-auto
                     -translate-y-20 text-4xl sm:text-6xl md:text-6xl"
          >
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
      <div className="px-6 py-6 md:px-10 flex flex-col md:flex-row items-center bg-white dark:bg-gray-900 shadow-lg"
        role='main' aria-labelledby='about-mechanical'>
        {/* Image Carousel */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center mt-6 md:mt-0">
          <div className="relative w-full max-w-[640px] md:max-w-full aspect-[16/10] overflow-hidden rounded-lg">
            <Swiper
              tabIndex={0}
              key={isDesktop ? 'nav-on' : 'nav-off'}
              modules={[Autoplay, Pagination, A11y, Keyboard, ...(isDesktop ? [Navigation] : [])]}
              spaceBetween={24}
              slidesPerView={1}
              autoplay={prefersReduced ? false : {
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              navigation={isDesktop ? { enabled: true } : false}
              keyboard={{ enabled: true, onlyInViewport: true, pageUpDown: true }}
              loop
              allowTouchMove
              role="region"
              aria-roledescription="carousel"
              aria-label="Mechanical concept images"
              aria-live="polite"
              onFocus={() => swiperRef.current?.autoplay?.stop?.()}
              onBlur={() => !prefersReduced && swiperRef.current?.autoplay?.start?.()}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              pagination={{
                clickable: true,
                renderBullet: (index, className) =>
                  `<button class="${className} a11y-bullet" type="button" aria-label="${bulletLabel(index, images.length)}"></button>`
              }}
              className="w-full h-full pb-10
                        [&_.swiper-pagination]:relative [&_.swiper-pagination]:mt-6
                        [&_.swiper-pagination-bullet]:!w-4 [&_.swiper-pagination-bullet]:!h-4
                        [&_.swiper-pagination-bullet]:!bg-green-600
                        [&_.swiper-pagination-bullet]:!rounded-full
                        [&_.swiper-pagination-bullet]:focus-visible:!outline [&_.swiper-pagination-bullet]:focus-visible:!outline-2
                        [&_.swiper-pagination-bullet-active]:!bg-green-600

                /* placement */
                [&_.swiper-button-next]:!top-1/2 [&_.swiper-button-next]:!-translate-y-1/2
                [&_.swiper-button-prev]:!top-1/2 [&_.swiper-button-prev]:!-translate-y-1/2
                [&_.swiper-button-next]:!right-2 sm:[&_.swiper-button-next]:!right-3 md:[&_.swiper-button-next]:!right-4
                [&_.swiper-button-prev]:!left-2 sm:[&_.swiper-button-prev]:!left-3 md:[&_.swiper-button-prev]:!left-4

                /* size + shape*/
                [&_.swiper-button-next]:!w-11 [&_.swiper-button-next]:!h-11
                [&_.swiper-button-prev]:!w-11 [&_.swiper-button-prev]:!h-11

                /* interactions */
                [&_.swiper-button-next:hover]:!bg-black/55 [&_.swiper-button-prev:hover]:!bg-black/55
                [&_.swiper-button-next:active]:scale-95 [&_.swiper-button-prev:active]:scale-95"
            >
              {images.map((src, idx) => (
                <SwiperSlide key={idx} className="flex items-center justify-center">
                  <img
                    src={src}
                    alt={
                      idx === 0
                        ? "CAD rendering of turbine components"
                        : idx === 1
                          ? "CFD visualization of rotor aerodynamics"
                          : idx === 2
                            ? "Base design stress analysis diagram"
                            : "Mechatronics pitch actuator assembly"
                    }
                    loading="lazy"
                    decoding="async"
                    className="inset-0 m-auto max-w-full max-h-full object-contain rounded-lg transition-opacity duration-700 shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Info Section */}
        <div className="w-full md:w-1/2 md:pl-6 flex flex-col" aria-labelledby="about-mechanical">
          <h2 id="about-mechanical" className="text-xl font-semibold text-gray-900 dark:text-white mt-6 md:mt-4">
            About Mechanical
          </h2>
          {/* Leadership */}
          <dl className="mt-2 mb-4">
            <div className="flex flex-col md:flex-row md:items-baseline gap-1">
              <dt className="text-lg font-semibold text-gray-800 dark:text-white">Captain:</dt>
              <dd className="text-lg text-gray-900 dark:text-white font-bold">Diego J. Muñoz Rivera</dd>
            </div>
            <div className="flex flex-col md:flex-row md:items-baseline gap-1">
              <dt className="text-lg font-semibold text-gray-800 dark:text-white">Co-Leader:</dt>
              <dd className="text-lg text-gray-900 dark:text-white font-bold">Paola N. Sierra</dd>
            </div>
          </dl>
          <p className="text-gray-700 dark:text-white mb-4 leading-relaxed">
            The Mechanical Division is responsible for the design, development, and assembly of all mechanical systems of the wind turbine. This includes structural components, material selection, and ensuring overall functionality and safety. The team brings innovative and practical solutions to meet technical requirements while collaborating with other divisions for seamless integration and performance.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center md:text-left">
            Subdivisions
          </h3>

          <Swiper
            tabIndex={0}
            modules={[Pagination, A11y, Autoplay, Keyboard]}
            spaceBetween={20}
            loop
            allowTouchMove
            speed={600}
            autoplay={
              prefersReduced
                ? false
                : { delay: 12000, disableOnInteraction: true, pauseOnMouseEnter: true }
            }
            a11y={{ containerMessage: 'Subdivision details carousel' }}
            aria-label="Subdivision details carousel"
            aria-live="polite"
            onSwiper={(swiper) => { subSwiperRef.current = swiper; }}
            onFocus={() => subSwiperRef.current?.autoplay?.stop?.()}
            onBlur={() => !prefersReduced && subSwiperRef.current?.autoplay?.start?.()}
            keyboard={{ enabled: true, onlyInViewport: true, pageUpDown: true }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) =>
                `<button class="${className} a11y-bullet" type="button" aria-label="${bulletLabel(index, images.length)}"></button>`
            }}
            className="w-full min-h-[140px]
                      [&_.swiper-pagination]:static [&_.swiper-pagination]:mt-6
                      [&_.swiper-pagination-bullet]:!w-4 [&_.swiper-pagination-bullet]:!h-4
                      [&_.swiper-pagination-bullet]:!bg-green-600
                      [&_.swiper-pagination-bullet]:!rounded-full
                      [&_.swiper-pagination-bullet]:focus-visible:!outline [&_.swiper-pagination-bullet]:focus-visible:!outline-2
                      [&_.swiper-pagination-bullet-active]:!bg-green-600"
          >
            {mechanicalSubdivisions.map(({ title, description, icon: Icon }, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full px-4 py-2 text-center md:text-left mx-auto border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-2 justify-center md:justify-start flex-wrap md:flex-nowrap">
                    {title}
                    <Icon className="text-xl text-green-600 dark:text-green-400" title={`${title} icon`} aria-hidden="true" />
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 break-normal leading-relaxed">
                    {description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MechanicalDiv;
