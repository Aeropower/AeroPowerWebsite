import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay, Keyboard, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import { useMedia } from '../../../hooks/useMedia';
import BandO1 from "../../../assets/images/businessDiv1.png";
import BandO2 from "../../../assets/images/businessDiv3.png";
import BandO3 from "../../../assets/images/businessDiv5.png";
import BusinessBanner from "../../../assets/images/Business&Ops Group.jpg"; // Usa tu banner preferido

const BusinessOpsDiv = () => {
  const images = [BandO1, BandO2, BandO3];
  const prefersReduced = usePrefersReducedMotion();
  const bulletLabel = (i, total) => `Go to slide ${i + 1} of ${total}`;
  const swiperRef = useRef(null);
  const isDesktop = useMedia('(min-width:1024px) and (pointer: fine)');

  return (
    <div className="dark:bg-gray-800 transition-colors duration-300">

      {/* Banner */}
      <section className="relative w-full h-[300px] md:h-[450px] overflow-hidden shadow-lg mb-6"
        aria-labelledby="businessOps-banner"
      >
        <img
          src={BusinessBanner}
          srcSet={`${BusinessBanner} 1920w, ${BusinessBanner} 1280w, ${BusinessBanner} 768w`}
          sizes="100vw"
          alt="Business Banner"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 md:bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 id='businessOps-banner'
            className="relative grid place-items-center text-center font-extrabold
                         leading-[1.1] px-2 sm:px-6 max-w-screen-xl mx-auto
                         -translate-y-12 text-3xl sm:text-4xl md:text-6xl md:whitespace-nowrap">
            {/* Bottom shadow (scales with font size) */}
            <span className="col-start-1 row-start-1 translate-x-[0.08em] translate-y-[0.08em] text-black/80 select-none pointer-events-none">
              Business & Operations Division
            </span>
            {/* Mid highlight */}
            <span className="col-start-1 row-start-1 translate-x-[0.04em] translate-y-[0.04em] text-[#2c3e50]/90 select-none pointer-events-none">
              Business & Operations Division
            </span>
            {/* Top gradient */}
            <span className="col-start-1 row-start-1 relative bg-gradient-to-r from-[#e8f8f5] to-[#aed6f1] text-transparent bg-clip-text drop-shadow-lg">
              Business & Operations Division
            </span>
          </h1>
        </div>
      </section>

      {/* Main Info Block */}
      <div className="px-6 md:px-10 flex flex-col md:flex-row items-center bg-white dark:bg-gray-900 shadow-lg"
        role='main' aria-labelledby='about-businessOps'>
        {/* Visual */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center mt-6 md:mt-0">
          <div className="relative w-full max-w-[600px] min-h-[300px] md:min-h-[400px] flex items-center justify-center overflow-hidden rounded-lg">
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
              aria-label="Business Ops concept images"
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
              className="w-full h-full
                         [&_.swiper-pagination]:static [&_.swiper-pagination]:mt-2
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
                <SwiperSlide key={idx}>
                  <img
                    src={src}
                    alt={
                      idx === 0
                        ? "Business operations planning illustration"
                        : idx === 1
                          ? "Sponsorship and outreach concept graphic"
                          : "Event logistics and budgeting concept graphic"
                    }
                    loading="lazy"
                    decoding="async"
                    className="object-contain m-auto rounded-lg transition-opacity duration-700 shadow-[0_4px_20px_rgba(0,0,0,0.6)] 
                    max-h-[300px] w-auto 
                    md:max-h-[350px] md:max-w-[500px]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Info Section */}
        <div className="w-full md:w-1/2 md:pl-6 flex flex-col">
          <h2 id="about-businessOps" className="text-xl font-semibold text-gray-900 dark:text-white mt-6 md:mt-4">
            About Business & Operations
          </h2>
          {/* Leadership */}
          <dl className="mt-2 mb-4">
            <div className="flex flex-col md:flex-row md:items-baseline gap-1">
              <dt className="text-lg font-semibold text-gray-800 dark:text-white">Captain:</dt>
              <dd className="text-lg text-gray-900 dark:text-white font-bold">Raúl A. Sánchez Velázquez</dd>
            </div>
            <div className="flex flex-col md:flex-row md:items-baseline gap-1">
              <dt className="text-lg font-semibold text-gray-800 dark:text-white">Co-Leader:</dt>
              <dd className="text-lg text-gray-900 dark:text-white font-bold">Neythan A. Sierra Orengo</dd>
            </div>
          </dl>
          <p className="text-gray-700 dark:text-white mb-4 leading-relaxed">
            The Business & Operations division is responsible for the logistics, planning, and execution of activities, whether for fundraising or raising awareness about renewable energy. Likewise, we manage social media, communication with sponsors, and the Content Creation Contest within the CWC Competition. In this contest, we are tasked with making an impact on different communities by raising awareness about renewable energy among them.
          </p>

          {/* List of Responsibilities */}
          <div className="mb-6">
            <h2 className="text-xl font-medium">What we do</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-white">
              <li>Organize and run the Content Creation Contest as part of the CWC Competition.</li>
              <li>Engage and educate communities by raising awareness about renewable energy through the contest and other initiatives.</li>
              <li>Conduct financial analysis and plan and execute events to fund the team.</li>
              <li>Manage social media and communication.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessOpsDiv;
