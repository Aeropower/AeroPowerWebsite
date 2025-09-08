import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BandO1 from "../../../assets/images/businessDiv1.png";
import BandO2 from "../../../assets/images/businessDiv3.png";
import BandO3 from "../../../assets/images/businessDiv5.png";
import BusinessBanner from "../../../assets/images/Business&Ops Group.jpeg"; // Usa tu banner preferido

const BusinessOpsDiv = () => {
  const images = [BandO1, BandO2, BandO3];
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
    img.src = BusinessBanner;
  }, []);

  return (
    <div className="dark:bg-gray-800 transition-colors duration-300">

      {/* Banner */}
      <section className="relative w-full h-[300px] md:h-[450px] overflow-hidden shadow-lg mb-6">
        <img src={BusinessBanner} alt="Business Banner" loading="eager" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="relative text-3xl sm:text-4xl md:text-6xl font-extrabold text-center leading-tight whitespace-normal md:whitespace-nowrap">
            {/* Bottom Shadow Layer */}
            <span className="absolute top-[4px] left-[4px] text-black z-0 select-none">
              Business & Operations Division
            </span>

            {/* Mid Highlight Layer */}
            <span className="absolute top-[2px] left-[2px] text-[#2c3e50] z-10 select-none">
              Business & Operations Division
            </span>

            {/* Top Main Gradient Text Layer */}
            <span className="relative z-20 bg-gradient-to-r from-[#e8f8f5] to-[#aed6f1] text-transparent bg-clip-text drop-shadow-lg">
              Business & Operations Division
            </span>
          </h1>
        </div>
      </section>

      {/* Main Info Block */}
      <div className="px-6 md:px-10 flex flex-col md:flex-row items-center bg-white dark:bg-gray-900 shadow-lg">
        {/* Visual */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center mt-6 md:mt-0">
          <div className="relative w-full max-w-[600px] min-h-[300px] md:min-h-[400px] flex items-center justify-center overflow-hidden">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Autoplay, Pagination, Navigation]}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ el: '.custom-swiper-pagination', clickable: true }}
              navigation={true}
              loop={true}
              allowTouchMove={true}
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
          {/* Pagination */}
          <div className="custom-swiper-pagination mt-3 md:mb-3 md:mt-0 flex items-center justify-center" />
        </div>

        {/* Info Section */}
        <div className="w-full md:w-1/2 md:pl-6 flex flex-col">
          {/* Leadership */}
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 mt-4 text-center md:text-left">
            Leader: Samarys Bocachica Alvarado
          </h3>
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
