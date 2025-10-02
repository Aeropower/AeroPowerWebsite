import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay, Keyboard, Navigation } from 'swiper/modules';
import {
  MdSettings,
  MdAutorenew
} from "react-icons/md";
import { GiPowerGenerator } from "react-icons/gi";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import { useMedia } from '../../../hooks/useMedia';
import Electrical1 from "../../../assets/images/electrical3.png";
import Electrical2 from "../../../assets/images/electrical4.png";
import Electrical3 from "../../../assets/images/electrical5.png";
import ElectricalBanner from "../../../assets/images/Electrical Team.jpg";

const electricalSubdivisions = [
  {
    title: "Power Generation",
    icon: GiPowerGenerator,
    description:
      "Converts mechanical turbine energy into electricity. Oversees generator selection (based on power and voltage), load system design, and emergency breaker integration.",
  },
  {
    title: "Control Systems",
    icon: MdSettings,
    description:
      "Analyzes mathematical models of wind turbines to design controllers such as PID and FLC for applications like blade pitch control. These controllers are modeled, tested, and validated using Simulink to optimize turbine performance, ensure operational stability, and adapt to varying wind conditions.",
  },
  {
    title: "Converters",
    icon: MdAutorenew,
    description:
      "Transforms electrical energy using converters (AC/DC rectifiers, DC/DC converters, and DC/AC inverters) to ensure compatibility with storage systems or grid-connected loads. Emphasizes proper sizing, optimized switching strategies, and thermal management to maximize efficiency and reduce power loss.",
  },
];

const ElectricalDiv = () => {
  const images = [Electrical1, Electrical2, Electrical3];
  const prefersReduced = usePrefersReducedMotion();
  const bulletLabel = (i, total) => `Go to slide ${i + 1} of ${total}`;
  const swiperRef = useRef(null);
  const subSwiperRef = useRef(null);
  const isDesktopLike = useMedia('(pointer: fine) and (hover: hover)');
  const isTouch = useMedia('(hover: none), (pointer: coarse)');

  const disableBulletClicks = (swiper) => {
    if (!swiper?.pagination?.bullets) return;
    swiper.pagination.bullets.forEach((el) => {
      if (isTouch) {
        el.style.pointerEvents = 'none';
        el.setAttribute('tabindex', '-1');
        el.setAttribute('aria-disabled', 'true');
        el.setAttribute('disabled', 'true');
      } else {
        el.style.pointerEvents = '';
        el.removeAttribute('tabindex');
        el.removeAttribute('aria-disabled');
        el.removeAttribute('disabled');
      }
    });
  };

  return (
    <div className="dark:bg-gray-800 transition-colors duration-300">

      {/* Banner */}
      <section className="relative w-full h-[320px] md:h-[550px] overflow-hidden shadow-lg mb-6"
        aria-labelledby="electrical-banner"
      >
        <img
          src={ElectricalBanner}
          srcSet={`${ElectricalBanner} 1920w, ${ElectricalBanner} 1280w, ${ElectricalBanner} 768w`}
          sizes="100vw"
          alt="Electrical Division Banner"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 id="electrical-banner"
            className="relative grid place-items-center text-center font-extrabold leading-[1.1]
                    -translate-y-12 text-4xl sm:text-6xl md:text-6xl"
          >
            {/* Bottom shadow (scales with font size) */}
            <span className="col-start-1 row-start-1 translate-x-[0.08em] translate-y-[0.08em] text-black/80 select-none pointer-events-none">
              Electrical Division
            </span>

            {/* Mid highlight */}
            <span className="col-start-1 row-start-1 translate-x-[0.04em] translate-y-[0.04em] text-gray-700/90 select-none pointer-events-none">
              Electrical Division
            </span>

            {/* Top gradient text */}
            <span className="col-start-1 row-start-1 relative bg-gradient-to-r from-white to-slate-300 text-transparent bg-clip-text drop-shadow-lg">
              Electrical Division
            </span>
          </h1>
        </div>
      </section>

      {/* Main Info */}
      <div className="px-6 py-6 md:px-10 flex flex-col md:flex-row items-center bg-white dark:bg-gray-900 shadow-lg"
        role='main' aria-labelledby='about-division'>
        {/* Image Carousel */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center mt-6 md:mt-0">
          <div className="relative w-full max-w-[640px] md:max-w-full aspect-[16/10] overflow-hidden rounded-lg">
            <Swiper
              tabIndex={0}
              key={isDesktopLike ? 'nav-on' : 'nav-off'}
              modules={[Autoplay, Pagination, A11y, Keyboard, ...(isDesktopLike ? [Navigation] : [])]}
              spaceBetween={24}
              slidesPerView={1}
              autoplay={prefersReduced ? false : {
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              navigation={isDesktopLike ? { enabled: true } : false}
              keyboard={{ enabled: false, onlyInViewport: true, pageUpDown: true }}
              loop={true}
              allowTouchMove
              role="region"
              aria-roledescription="carousel"
              aria-label="Electrical concept images"
              aria-live="polite"
              onFocus={() => swiperRef.current?.autoplay?.stop?.()}
              onBlur={() => !prefersReduced && swiperRef.current?.autoplay?.start?.()}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                disableBulletClicks(swiper);
              }}
              onUpdate={(swiper) => disableBulletClicks(swiper)}
              onPaginationUpdate={(swiper) => disableBulletClicks(swiper)}
              pagination={{
                clickable: !isTouch,
                renderBullet: (index, className) =>
                  `<button class="${className} a11y-bullet" type="button" ${isTouch ? 'tabindex="-1" aria-disabled="true"' : ''}
                aria-label="${bulletLabel(index, images.length)}"></button>`
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
                      ? "Generator and rectifier concept"
                      : idx === 1
                        ? "Control systems modeling diagram"
                        : "Converter topology illustration"
                    }
                    loading="lazy"
                    decoding="async"
                    className={`object-contain max-h-full rounded-lg transition-opacity duration-700 shadow-[0_4px_20px_rgba(0,0,0,0.4)] ${
                      // Custom width cap for just the super-wide images
                      idx === 1 || idx === 2 ? 'md:max-w-[85%]' : 'max-w-full'
                      }`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Info Section */}
        <div className="w-full md:w-1/2 md:pl-6 flex flex-col" aria-labelledby='about-division'>
          <h2 id="about-electrical" className="text-xl font-semibold text-gray-900 dark:text-white mt-6 md:mt-4">
            About Electrical
          </h2>
          {/* Leadership */}
          <dl className="mt-2 mb-4">
            <div className="flex flex-col md:flex-row md:items-baseline gap-1">
              <dt className="text-lg font-semibold text-gray-800 dark:text-white">Captain:</dt>
              <dd className="text-lg text-gray-900 dark:text-white font-bold">Josue Colón López</dd>
            </div>
            <div className="flex flex-col md:flex-row md:items-baseline gap-1">
              <dt className="text-lg font-semibold text-gray-800 dark:text-white">Co-Leader:</dt>
              <dd className="text-lg text-gray-900 dark:text-white font-bold">Carlos M. Marrero</dd>
            </div>
          </dl>
          <p className="text-gray-700 dark:text-white mb-4 leading-relaxed">
            The electrical division is responsible for the design, implementation, and management of electrical and electronic systems associated with the wind turbine. Its main goal is to ensure reliable, efficient, and safe operation of all components involved in power generation, control, and energy conversion.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center md:text-left">
            Subdivisions
          </h3>

          <Swiper
            tabIndex={0}
            modules={[Pagination, A11y, Autoplay, Keyboard]}
            spaceBetween={50}
            loop
            allowTouchMove
            speed={550}
            autoplay={prefersReduced ? false : { delay: 12000, disableOnInteraction: true, pauseOnMouseEnter: true }}
            a11y={{ containerMessage: 'Subdivision details carousel' }}
            aria-label="Subdivision details carousel"
            aria-live="polite"
            onSwiper={(swiper) => {
              subSwiperRef.current = swiper;
              disableBulletClicks(swiper);
            }}
            onUpdate={(swiper) => disableBulletClicks(swiper)}
            onPaginationUpdate={(swiper) => disableBulletClicks(swiper)}
            onFocus={() => subSwiperRef.current?.autoplay?.stop?.()}
            onBlur={() => !prefersReduced && subSwiperRef.current?.autoplay?.start?.()}
            keyboard={{ enabled: true, onlyInViewport: true, pageUpDown: true }}
            pagination={{
              clickable: !isTouch,
              renderBullet: (index, className) =>
                `<button class="${className} a11y-bullet" type="button" 
              ${isTouch ? 'tabindex="-1" aria-disabled="true"' : ''} aria-label="${bulletLabel(index, images.length)}"></button>`
            }}
            className="w-full min-h-[140px]
              [&_.swiper-pagination]:static [&_.swiper-pagination]:mt-6
              [&_.swiper-pagination-bullet]:!w-4 [&_.swiper-pagination-bullet]:!h-4
              [&_.swiper-pagination-bullet]:!bg-green-600
              [&_.swiper-pagination-bullet]:!rounded-full
              [&_.swiper-pagination-bullet]:focus-visible:!outline [&_.swiper-pagination-bullet]:focus-visible:!outline-2
              [&_.swiper-pagination-bullet-active]:!bg-green-600"
          >
            {electricalSubdivisions.map(({ title, description, icon: Icon }, index) => (
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

export default ElectricalDiv;
