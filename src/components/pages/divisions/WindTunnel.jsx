import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  A11y,
  Autoplay,
  Keyboard,
  Navigation,
} from "swiper/modules";
import { TbUserScreen } from "react-icons/tb";
import { FaChartColumn } from "react-icons/fa6";
import { MdOutlineWindPower } from "react-icons/md";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { useMedia } from "@/hooks/useMedia";
import WindTunnel1 from "@/assets/images/WindTunnel1.png";
import WindTunnel2 from "@/assets/images/WindTunnel2.png";

const WindTunnelTasks = [
  {
    title: "Automated Wind Speed Control",
    icon: MdOutlineWindPower,
    description:
      "Developing a PLC-based control system to integrate sensor feedback with the existing variable frequency drive (VFD), enabling precise, automated wind-speed regulation.",
  },
  {
    title: "Instrumentation & Data Acquisition",
    icon: FaChartColumn,
    description:
      "Integrating wind-speed, pressure, temperature, and humidity measurements into a centralized system for real-time monitoring, data collection, and analysis.",
  },
  {
    title: "Human-Machine Interface (HMI)",
    icon: TbUserScreen,
    description:
      "Designing an intuitive touchscreen interface that allows researchers to control tunnel operation, adjust airflow settings, and monitor experimental measurements.",
  },
];

const WindTunnel = () => {
  const images = [WindTunnel1, WindTunnel2];
  const prefersReduced = usePrefersReducedMotion();
  const swiperRef = useRef(null);
  const subSwiperRef = useRef(null);
  const bulletLabel = (i, total) => `Go to slide ${i + 1} of ${total}`;
  const isDesktopLike = useMedia("(pointer: fine) and (hover: hover)");
  const isTouch = useMedia("(hover: none), (pointer: coarse)");

  const disableBulletClicks = (swiper) => {
    if (!swiper?.pagination?.bullets) return;
    swiper.pagination.bullets.forEach((el) => {
      if (isTouch) {
        el.style.pointerEvents = "none";
        el.setAttribute("tabindex", "-1");
        el.setAttribute("aria-disabled", "true");
        el.setAttribute("disabled", "true");
      } else {
        el.style.pointerEvents = "";
        el.removeAttribute("tabindex");
        el.removeAttribute("aria-disabled");
        el.removeAttribute("disabled");
      }
    });
  };

  return (
    <div className="dark:bg-gray-800 transition-colors duration-300">
      {/* Banner */}
      <section
        className="relative w-full h-[300px] md:h-[450px] overflow-hidden shadow-lg mb-6"
        aria-labelledby="WindTunnel-banner"
      >
        <img
          src={WindTunnel1}
          srcSet={`${WindTunnel1} 1920w, ${WindTunnel1} 1280w, ${WindTunnel1} 768w`}
          sizes="100vw"
          alt="Wind Tunnel Banner"
          loading="eager"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            id="WindTunnel-banner"
            className="relative grid place-items-center text-center font-extrabold
                         leading-[1.1] px-2 sm:px-6 max-w-screen-xl mx-auto
                         -translate-y-12 text-4xl sm:text-6xl md:text-6xl"
          >
            {/* Bottom shadow (scales with font size) */}
            <span className="col-start-1 row-start-1 translate-x-[0.08em] translate-y-[0.08em] text-black/80 select-none pointer-events-none">
              Wind Tunnel
            </span>
            {/* Mid highlight */}
            <span className="col-start-1 row-start-1 translate-x-[0.04em] translate-y-[0.04em] text-gray-700/90 select-none pointer-events-none">
              Wind Tunnel
            </span>
            {/* Top gradient */}
            <span className="col-start-1 row-start-1 relative bg-gradient-to-r from-[#e8f8f5] to-[#aed6f1] text-transparent bg-clip-text drop-shadow-lg">
              Wind Tunnel
            </span>
          </h1>
        </div>
      </section>

      {/* Info Block */}
      <div
        className="px-6 py-6 md:px-10 flex flex-col md:flex-row items-center bg-white dark:bg-gray-900 shadow-lg"
        role="main"
        aria-labelledby="about-division"
      >
        {/* Image Carousel */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center mt-6 md:mt-0">
          <div className="relative w-full max-w-[640px] md:max-w-full aspect-[16/10] overflow-hidden rounded-lg">
            <Swiper
              tabIndex={0}
              key={isDesktopLike ? "nav-on" : "nav-off"}
              modules={[
                Autoplay,
                Pagination,
                A11y,
                Keyboard,
                ...(isDesktopLike ? [Navigation] : []),
              ]}
              spaceBetween={24}
              slidesPerView={1}
              navigation={isDesktopLike ? { enabled: true } : false}
              keyboard={{
                enabled: false,
                onlyInViewport: true,
                pageUpDown: true,
              }}
              autoplay={
                prefersReduced
                  ? false
                  : {
                      delay: 5000,
                      disableOnInteraction: true,
                      pauseOnMouseEnter: true,
                    }
              }
              loop
              allowTouchMove
              role="region"
              aria-roledescription="carousel"
              aria-label="Wind Tunnel image carousel"
              aria-live="polite"
              onFocus={() => swiperRef.current?.autoplay?.stop?.()}
              onBlur={() =>
                !prefersReduced && swiperRef.current?.autoplay?.start?.()
              }
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                disableBulletClicks(swiper);
              }}
              onUpdate={(swiper) => disableBulletClicks(swiper)}
              onPaginationUpdate={(swiper) => disableBulletClicks(swiper)}
              pagination={{
                clickable: !isTouch,
                renderBullet: (index, className) =>
                  `<button class="${className} a11y-bullet" type="button" 
                ${isTouch ? 'tabindex="-1" aria-disabled="true"' : ""} aria-label="${bulletLabel(index, images.length)}"></button>`,
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
                <SwiperSlide
                  key={idx}
                  className="flex items-center justify-center h-full w-full"
                >
                  <img
                    src={src}
                    alt={
                      idx === 0
                        ? "Website UI mockups for the team platform"
                        : idx === 1
                          ? "Embedded firmware and RTOS diagram"
                          : "Code architecture and testing overview"
                    }
                    loading="lazy"
                    decoding="async"
                    className={`object-contain max-h-full rounded-lg transition-opacity duration-700 shadow-[0_4px_20px_rgba(0,0,0,0.4)] ${
                      // Custom width cap for just the super-wide images
                      idx === 0 || idx === 1 ? "md:max-w-[85%]" : "max-w-full"
                    }`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Info Section */}
        <div
          className="w-full md:w-1/2 md:pl-6 flex flex-col"
          aria-labelledby="about-WindTunnel"
        >
          <h2
            id="about-WindTunnel"
            className="text-xl font-semibold text-gray-900 dark:text-white mt-6 md:mt-4"
          >
            Wind Tunnel&apos;s History
          </h2>
          <p className="text-gray-700 dark:text-white mb-4 leading-relaxed">
            The University of Puerto Rico at Mayagüez operates a wind tunnel
            within its Civil Engineering Department, featuring a 3 ft × 3 ft
            testing section capable of reaching wind speeds up to 50 mph. The
            facility supports aerodynamic testing, fluid mechanics education,
            and engineering research. AeroPower is currently working to
            modernize its instrumentation and control systems to improve
            experimental accuracy, accessibility, and reliability.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center md:text-left">
            What We Are Up To
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
                : {
                    delay: 12000,
                    disableOnInteraction: true,
                    pauseOnMouseEnter: true,
                  }
            }
            aria-label="Wind Tunnel Tasks carousel"
            aria-live="polite"
            a11y={{ containerMessage: "Subdivision details carousel" }}
            onSwiper={(swiper) => {
              subSwiperRef.current = swiper;
              disableBulletClicks(swiper);
            }}
            onUpdate={(swiper) => disableBulletClicks(swiper)}
            onPaginationUpdate={(swiper) => disableBulletClicks(swiper)}
            onFocus={() => subSwiperRef.current?.autoplay?.stop?.()}
            onBlur={() =>
              !prefersReduced && subSwiperRef.current?.autoplay?.start?.()
            }
            keyboard={{ enabled: true, onlyInViewport: true, pageUpDown: true }}
            pagination={{
              clickable: !isTouch,
              renderBullet: (index, className) =>
                `<button class="${className}" type="button" 
              ${isTouch ? 'tabindex="-1" aria-disabled="true"' : ""} aria-label="${bulletLabel(index, WindTunnelTasks.length)}"></button>`,
            }}
            className="w-full min-h-[140px]
                      [&_.swiper-pagination]:static [&_.swiper-pagination]:mt-6
                      [&_.swiper-pagination-bullet]:!w-4 [&_.swiper-pagination-bullet]:!h-4
                      [&_.swiper-pagination-bullet]:!bg-green-600
                      [&_.swiper-pagination-bullet]:!rounded-full
                       [&_.swiper-pagination-bullet]:focus-visible:!outline [&_.swiper-pagination-bullet]:focus-visible:!outline-2
                      [&_.swiper-pagination-bullet-active]:!bg-green-600"
          >
            {WindTunnelTasks.map(
              ({ title, description, icon: Icon }, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-full px-4 py-2 text-center md:text-left mx-auto border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-2 justify-center md:justify-start flex-wrap md:flex-nowrap">
                      {title}
                      <Icon
                        className="text-xl text-green-600 dark:text-green-400"
                        title={`${title} icon`}
                        aria-hidden="true"
                      />
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 break-normal leading-relaxed">
                      {description}
                    </p>
                  </div>
                </SwiperSlide>
              ),
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default WindTunnel;
