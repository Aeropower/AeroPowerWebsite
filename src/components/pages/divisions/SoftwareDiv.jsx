import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay, Keyboard, Navigation } from 'swiper/modules';
import { FaMicrochip } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import { useMedia } from '../../../hooks/useMedia';
import Software1 from "@/assets/images/software1.png";
import Software2 from "@/assets/images/software4.png";
import Software3 from "@/assets/images/software3.png";
import SoftwareBanner from "@/assets/images/Software Group.jpeg";

const softwareSubdivisions = [
  {
    title: "Web Development",
    icon: SiJavascript,
    description:
      "Responsible for designing and building the team’s website using React.js. This team brings to life the very platform you're viewing right now.",
  },
  {
    title: "Embedded Software",
    icon: FaMicrochip,
    description:
      "Develops and maintains the embedded finite-state machine and real-time operating system using FreeRTOS for the turbine microcontroller. This system powers the turbine’s control systems and emergency systems.",
  },
];

const SoftwareDiv = () => {
  const images = [Software1, Software2, Software3];
  const prefersReduced = usePrefersReducedMotion();
  const swiperRef = useRef(null);
  const subSwiperRef = useRef(null);
  const bulletLabel = (i, total) => `Go to slide ${i + 1} of ${total}`;
  const isDesktop = useMedia('(min-width:1024px) and (pointer: fine)');

  return (
    <div className="dark:bg-gray-800 transition-colors duration-300">

      {/* Banner */}
      <section className="relative w-full h-[300px] md:h-[450px] overflow-hidden shadow-lg mb-6"
        aria-labelledby="software-banner"
      >
        <img
          src={SoftwareBanner}
          srcSet={`${SoftwareBanner} 1920w, ${SoftwareBanner} 1280w, ${SoftwareBanner} 768w`}
          sizes="100vw"
          alt="Software Division Banner"
          loading="eager"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 id="software-banner"
            className="relative grid place-items-center text-center font-extrabold
                         leading-[1.1] px-2 sm:px-6 max-w-screen-xl mx-auto
                         -translate-y-12 text-4xl sm:text-6xl md:text-6xl"
          >
            {/* Bottom shadow (scales with font size) */}
            <span className="col-start-1 row-start-1 translate-x-[0.08em] translate-y-[0.08em] text-black/80 select-none pointer-events-none">
              Software Division
            </span>
            {/* Mid highlight */}
            <span className="col-start-1 row-start-1 translate-x-[0.04em] translate-y-[0.04em] text-gray-700/90 select-none pointer-events-none">
              Software Division
            </span>
            {/* Top gradient */}
            <span className="col-start-1 row-start-1 relative bg-gradient-to-r from-[#e8f8f5] to-[#aed6f1] text-transparent bg-clip-text drop-shadow-lg">
              Software Division
            </span>
          </h1>
        </div>
      </section>

      {/* Info Block */}
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
              navigation={isDesktop ? { enabled: true } : false}
              keyboard={{ enabled: false, onlyInViewport: true, pageUpDown: true }}
              autoplay={
                prefersReduced ? false : {
                  delay: 5000,
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true
                }
              }
              loop
              allowTouchMove
              role="region"
              aria-roledescription="carousel"
              aria-label="Software division image carousel"
              aria-live="polite"
              onFocus={() => swiperRef.current?.autoplay?.stop?.()}
              onBlur={() => !prefersReduced && swiperRef.current?.autoplay?.start?.()}
              onSwiper={(swiper) => { swiperRef.current = swiper; }}
              pagination={{
                clickable: false,
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

                         /* nav placement */
                         [&_.swiper-button-next]:!top-1/2 [&_.swiper-button-next]:!-translate-y-1/2
                         [&_.swiper-button-prev]:!top-1/2 [&_.swiper-button-prev]:!-translate-y-1/2
                         [&_.swiper-button-next]:!right-2 sm:[&_.swiper-button-next]:!right-3 md:[&_.swiper-button-next]:!right-4
                         [&_.swiper-button-prev]:!left-2 sm:[&_.swiper-button-prev]:!left-3 md:[&_.swiper-button-prev]:!left-4

                         /* nav size + focus */
                         [&_.swiper-button-next]:!w-11 [&_.swiper-button-next]:!h-11
                         [&_.swiper-button-prev]:!w-11 [&_.swiper-button-prev]:!h-11
                         
                          /* interactions */
                          [&_.swiper-button-next:hover]:!bg-black/55 [&_.swiper-button-prev:hover]:!bg-black/55
                          [&_.swiper-button-next:active]:scale-95 [&_.swiper-button-prev:active]:scale-95"
            >
              {images.map((src, idx) => (
                <SwiperSlide key={idx} className="flex items-center justify-center h-full w-full">
                  <img
                    src={src}
                    alt={idx === 0
                      ? "Website UI mockups for the team platform"
                      : idx === 1
                        ? "Embedded firmware and RTOS diagram"
                        : "Code architecture and testing overview"
                    }
                    loading="lazy"
                    decoding="async"
                    className={`object-contain max-h-full rounded-lg transition-opacity duration-700 shadow-[0_4px_20px_rgba(0,0,0,0.4)] ${
                      // Custom width cap for just the super-wide images
                      idx === 0 || idx === 1 ? 'md:max-w-[85%]' : 'max-w-full'
                      }`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Info Section */}
        <div className="w-full md:w-1/2 md:pl-6 flex flex-col" aria-labelledby="about-software">
          <h2 id="about-software" className="text-xl font-semibold text-gray-900 dark:text-white mt-6 md:mt-4">
            About Software
          </h2>
          {/* Leadership */}
          <dl className="mt-2 mb-4">
            <div className="flex flex-col md:flex-row md:items-baseline gap-1">
              <dt className="text-lg font-semibold text-gray-800 dark:text-white">Captain:</dt>
              <dd className="text-lg text-gray-900 dark:text-white font-bold">Hiram R. Rodríguez Hernández</dd>
            </div>
            <div className="flex flex-col md:flex-row md:items-baseline gap-1">
              <dt className="text-lg font-semibold text-gray-800 dark:text-white">Co-Leader:</dt>
              <dd className="text-lg text-gray-900 dark:text-white font-bold">Ulises L. Medina Hurtado</dd>
            </div>
          </dl>
          <p className="text-gray-700 dark:text-white mb-4 leading-relaxed">
            The Software Division designs, develops, and maintains the team’s website and the embedded systems responsible for turbine control and safety. Their work ensures seamless user interaction and real-time system responsiveness.
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
              prefersReduced ? false : {
                delay: 12000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true
              }
            }
            aria-label="Software subdivisions carousel"
            aria-live="polite"
            a11y={{ containerMessage: 'Subdivision details carousel' }}
            onSwiper={(swiper) => { subSwiperRef.current = swiper; }}

            onFocus={() => subSwiperRef.current?.autoplay?.stop?.()}
            onBlur={() => !prefersReduced && subSwiperRef.current?.autoplay?.start?.()}
            keyboard={{ enabled: true, onlyInViewport: true, pageUpDown: true }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) =>
                `<button class="${className}" type="button" aria-label="${bulletLabel(index, softwareSubdivisions.length)}"></button>`
            }}
            className="w-full min-h-[140px]
                      [&_.swiper-pagination]:static [&_.swiper-pagination]:mt-6
                      [&_.swiper-pagination-bullet]:!w-4 [&_.swiper-pagination-bullet]:!h-4
                      [&_.swiper-pagination-bullet]:!bg-green-600
                      [&_.swiper-pagination-bullet]:!rounded-full
                       [&_.swiper-pagination-bullet]:focus-visible:!outline [&_.swiper-pagination-bullet]:focus-visible:!outline-2
                      [&_.swiper-pagination-bullet-active]:!bg-green-600"
          >
            {softwareSubdivisions.map(({ title, description, icon: Icon }, index) => (
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

export default SoftwareDiv;
