import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import BandO1 from "../../../assets/images/businessDiv1.png";
import BandO2 from "../../../assets/images/businessDiv3.png";
import BandO3 from "../../../assets/images/businessDiv5.png";
import BusinessBanner from "../../../assets/images/Business&Ops Group.jpeg"; // Usa tu banner preferido

const BusinessOpsDiv = () => {
  const images = [BandO1, BandO2, BandO3];
  const swiperRef = useRef(null);
  const imgPaginationRef = useRef(null);

  return (
    <div className="dark:bg-gray-800 transition-colors duration-300">

      {/* Banner */}
      <section className="relative w-full h-[300px] md:h-[450px] overflow-hidden shadow-lg mb-6">
        <img
          src={BusinessBanner}
          srcSet={`${BusinessBanner} 1920w, ${BusinessBanner} 1280w, ${BusinessBanner} 768w`}
          sizes="100vw"
          alt="Business Banner"
          loading="eager"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="relative grid place-items-center text-center font-extrabold
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
      <div className="px-6 md:px-10 flex flex-col md:flex-row items-center bg-white dark:bg-gray-900 shadow-lg">
        {/* Visual */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center mt-6 md:mt-0">
          <div className="relative w-full max-w-[600px] min-h-[300px] md:min-h-[400px] flex items-center justify-center overflow-hidden rounded-lg">
            <Swiper
              onInit={(s) => {
                SwiperRef.current = s;
                if (imgPaginationRef.current) {
                  s.params.pagination = {
                    ...(s.params.pagination || {}),
                    el: imgPaginationRef.current,
                    clickable: true,
                  };
                  // ensure pagination actually mounts in prod builds
                  s.pagination.init();
                  s.pagination.render();
                  s.pagination.update();
                }
              }}
              modules={[Autoplay, Pagination, A11y]}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop
              allowTouchMove
              keyboard={{ enabled: true, onlyInViewport: true }}
              role="region"
              aria-roledescription="carousel"
              aria-label="Business & Operations images"
              className="w-full h-full"
            >
              {images.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={src}
                    alt={`Business Ops Slide ${idx + 1}`}
                    loading="lazy"
                    className="object-contain m-auto rounded-lg transition-opacity duration-700 shadow-[0_4px_20px_rgba(0,0,0,0.6)] 
                    max-h-[300px] w-auto 
                    md:max-h-[350px] md:max-w-[500px]"
                  />

                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* External pagination (below image) */}
          <div
            ref={imgPaginationRef}
            className="mt-2 md:mb-3 md:mt-0 flex items-center justify-center
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
            Captain: Raúl A. Sánchez Velázquez
          </h3>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 text-center md:text-left">
            Co-Leader: Neythan A. Sierra Orengo
          </h4>
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
