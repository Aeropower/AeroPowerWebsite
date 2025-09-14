import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay, Keyboard, Navigation } from 'swiper/modules';
import {
  MdElectricBolt,
  MdPrecisionManufacturing,
  MdLocalShipping,
  MdCode,
  MdEco,
  MdAttachMoney,
} from "react-icons/md";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import { useMedia } from '../../../hooks/useMedia';
import WindFarm1 from "@/assets/images/windFarm1.png";
import WindFarm2 from "@/assets/images/windFarm2.png";
import WindFarm3 from "@/assets/images/windFarm3.png";
import WindFarmBanner from "@/assets/images/WindFarm Team.jpg";

const windfarmSubdivisions = [
  {
    title: "Electrical",
    icon: MdElectricBolt,
    description:
      "Investigate the electrical infrastructure required to transmit energy from turbines to the grid. Includes power generation, loss calculations, and grid integration.",
  },
  {
    title: "Mechanical",
    icon: MdPrecisionManufacturing,
    description:
      "Select turbine type based on site-specific requirements. Determine blade size, material, and aerodynamics to optimize energy conversion.",
  },
  {
    title: "Logistics",
    icon: MdLocalShipping,
    description:
      "Plan port selection for transport, assembly, and maintenance. Coordinate layout of components, estimate costs, and assess available incentives.",
  },
  {
    title: "Programming & Optimization",
    icon: MdCode,
    description:
      "Enhance farm efficiency using computational models and optimization algorithms tailored to energy output and site conditions.",
  },
  {
    title: "Sustainability",
    icon: MdEco,
    description:
      "Design low-emission solutions. Evaluate biodiversity impact, visual footprint, noise concerns, and ecosystem protection compliance.",
  },
  {
    title: "Financial Analysis",
    icon: MdAttachMoney,
    description:
      "Assess economic viability using metrics like NPV, IRR, and payback period, while factoring in production forecasts and market trends.",
  },
];

const WindFarmDevDiv = () => {
  const images = [WindFarm1, WindFarm2, WindFarm3];
  const prefersReduced = usePrefersReducedMotion();
  const bulletLabel = (i, total) => `Go to slide ${i + 1} of ${total}`;
  const swiperRef = useRef(null);
  const subSwiperRef = useRef(null);
  const isDesktop = useMedia('(min-width:1024px) and (pointer: fine)');

  return (
    <div className="dark:bg-gray-800 transition-colors duration-300">

      {/* Banner */}
      <section className="relative w-full h-[420px] md:h-[590px] overflow-hidden shadow-lg mb-6"
        aria-labelledby='windfarm-banner'
      >
        <img
          src={WindFarmBanner}
          srcSet={`${WindFarmBanner} 1920w, ${WindFarmBanner} 1280w, ${WindFarmBanner} 768w`}
          sizes="100vw"
          alt="Wind Farm Development Division Banner"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* keep the black overlay from the first snippet */}
        <div className="absolute inset-0 bg-black/60 md:bg-black/50" />

        {/* keep the *positioning* (vertical lift) from the first snippet */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 id='windfarm-banner'
            className="
              relative grid place-items-center text-center font-extrabold tracking-wider
              leading-[1.1] px-2 sm:px-6 max-w-screen-xl mx-auto
              -translate-y-24 sm:-translate-y-16 md:-translate-y-40
              text-[clamp(1.75rem,6vw,4rem)]
              md:text-[clamp(2.5rem,5vw,5rem)]
              lg:text-[clamp(2.25rem,3.8vw,4.25rem)]
              md:whitespace-nowrap
              "
          >
            {/* Bottom shadow layer (scales with font size) */}
            <span
              className="
              col-start-1 row-start-1 translate-x-[0.08em] translate-y-[0.08em]
              text-black/80 select-none pointer-events-none [will-change:transform]
              "
            >
              Wind Farm Development Division
            </span>

            {/* Mid highlight layer */}
            <span
              className="
              col-start-1 row-start-1 translate-x-[0.04em] translate-y-[0.04em]
              text-[#2c3e50]/90 select-none pointer-events-none [will-change:transform]
              "
            >
              Wind Farm Development Division
            </span>

            {/* Top main gradient text */}
            <span
              className="
              col-start-1 row-start-1 relative
              bg-gradient-to-r from-[#e8f8f5] to-[#aed6f1]
              text-transparent bg-clip-text drop-shadow-lg
              "
            >
              Wind Farm Development Division
            </span>
          </h1>
        </div>
      </section>

      {/* Main Info Block */}
      <div className="px-6 py-6 md:px-10 flex flex-col md:flex-row items-center bg-white dark:bg-gray-900 shadow-lg"
        role='main' aria-labelledby='about-division'>
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
              loop={true}
              allowTouchMove
              role="region"
              aria-roledescription="carousel"
              aria-label="Wind farm concept images"
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
                    alt={idx === 0
                      ? "Hexagonal turbine-anchor-mooring layout concept"
                      : idx === 1
                        ? "Bathymetry and spacing visualization for turbines"
                        : "Transmission and export cable routing concept"}
                    loading="lazy"
                    decoding="async"
                    className="inset-0 m-auto max-w-full max-h-full object-contain rounded-lg transition-opacity duration-700 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Info Section */}
        <div className="w-full md:w-1/2 md:pl-6 flex flex-col" aria-labelledby='about-division'>
          <h2 id="about-windfarm" className="text-xl font-semibold text-gray-900 dark:text-white mt-6 md:mt-4">
            About Wind Farm Development
          </h2>
          {/* Leadership */}
          <dl className="mt-2 mb-4">
            <div className="flex flex-col md:flex-row md:items-baseline gap-1">
              <dt className="text-lg font-semibold text-gray-900 dark:text-white">Captain:</dt>
              <dd className="text-lg text-gray-900 dark:text-white font-bold">Luis A. Negrón Torres</dd>
            </div>
            <div className="flex flex-col md:flex-row md:items-baseline gap-1">
              <dt className="text-lg font-semibold text-gray-900 dark:text-white">Co-Leader:</dt>
              <dd className="text-lg text-gray-900 dark:text-white font-bold">Maeson A. Franceschi Durán</dd>
            </div>
          </dl>

          <p className="text-gray-700 dark:text-white mb-4 leading-relaxed">
            As part of the Wind Farm Development division, members of this multidisciplinary team will be responsible for developing a plan concept for a marine wind farm project. This will be done through data analysis, environmental and economic assessments, and engineering evaluations.
            Key areas of investigation include wind resource data analysis, yield estimation, project economics, bathymetry, environmental impact studies, and turbine technology evaluation.
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
            speed={550}
            autoplay={prefersReduced ? false : {
              delay: 12000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true
            }
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
                `<button class="${className}" type="button" aria-label="${bulletLabel(index, windfarmSubdivisions.length)}"></button>`
            }}
            className="w-full min-h-[160px]
              [&_.swiper-pagination]:static [&_.swiper-pagination]:mt-6
              [&_.swiper-pagination-bullet]:!w-4 [&_.swiper-pagination-bullet]:!h-4
              [&_.swiper-pagination-bullet]:!bg-green-600
              [&_.swiper-pagination-bullet]:!rounded-full
              [&_.swiper-pagination-bullet]:focus-visible:!outline [&_.swiper-pagination-bullet]:focus-visible:!outline-2
              [&_.swiper-pagination-bullet-active]:!bg-green-600"
          >
            {windfarmSubdivisions.map(({ title, description, icon: Icon }, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full px-4 py-2 text-center md:text-left mx-auto border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-2 justify-center md:justify-start flex-wrap md:flex-nowrap">
                    {title}
                    <Icon className="text-xl text-green-600 dark:text-green-400" aria-hidden="true" />
                  </h3>
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

export default WindFarmDevDiv;
