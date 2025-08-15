import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PrjManage1 from "../../../assets/images/businessDiv1.png";
import PrjManage2 from "../../../assets/images/businessDiv2.png";
import PrjManage3 from "../../../assets/images/businessDiv4.png";
import PrjManage4 from "../../../assets/images/businessDiv5.png";
import ProjectManageBanner from "../../../assets/images/polygons_dark.png"; // Usa tu banner preferido

const ProjectManagementDiv = () => {
  const images = [PrjManage1, PrjManage2, PrjManage3, PrjManage4];
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
    img.src = ProjectManageBanner;
  }, []);

  return (
    <div className="dark:bg-gray-800 transition-colors duration-300">

      {/* Banner */}
      <section className="relative w-full h-[300px] md:h-[450px] overflow-hidden shadow-lg mb-6">
        <img src={ProjectManageBanner} alt="Project Management Banner" loading="eager" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="relative text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-center md:text-left whitespace-pre-line md:whitespace-nowrap">
            {/* Bottom Shadow Layer */}
            <span className="absolute z-0 select-none text-black w-full md:w-auto left-1 top-1 md:left-[4px] md:top-[4px] text-center md:text-left">
              Project Management Division
            </span>

            {/* Mid Highlight Layer */}
            <span className="absolute z-10 select-none text-[#2c3e50] w-full md:w-auto left-[0.5px] top-[0.5px] md:left-[2px] md:top-[2px] text-center md:text-left">
              Project Management Division
            </span>

            {/* Top Gradient Text */}
            <span className="relative z-20 bg-gradient-to-r from-[#e8f8f5] to-[#aed6f1] text-transparent bg-clip-text drop-shadow-lg">
              Project Management Division
            </span>
          </h1>
        </div>
      </section>

      {/* Main Info Block */}
      <div className="px-6 md:px-10 flex flex-col md:flex-row items-center bg-white dark:bg-gray-900 shadow-lg">
        {/* Visual */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center mt-6 md:mt-0">
          <div className="relative w-full max-w-[400px] h-[250px] md:h-[400px] md:max-w-full overflow-hidden">
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
                    alt={`Project Management Slide ${idx + 1}`}
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
            Captain: Iván O. Morales Martorell
          </h3>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 text-center md:text-left">
            Leader: Carlos M. Marrero
          </h4>

          <p className="text-gray-700 dark:text-white mb-4 leading-relaxed">
            The Project Management Division oversees the planning, coordination, and execution of all team projects. Its main role is to ensure an efficient workflow by managing deadlines, budgets, and work plans, keeping all divisions aligned and moving toward the competition’s goals. This division is responsible for ensuring that projects are completed on time, within budget, and meet the highest quality standards. Its responsibilities include allocating and validating resources to ensure proper use; verifying that established deadlines are being met; monitoring overall progress; and facilitating the achievement of team objectives. Additionally, it supports inter-division communication, keeps updated counts of team members, tracks attendance, and ensures compliance with internal rules.
          </p>

          {/* List of Responsibilities */}
          <div className="mb-6">
            <h2 className="text-xl font-medium">What we do</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-white">
              <li>Plans, coordinates, and oversees execution of all team projects.</li>
              <li>Tracks deadlines, budgets, and deliverables to ensure timely and efficient workflow.</li>
              <li>Monitors project progress and enforces alignment with team objectives.</li>
              <li>Supports communication and collaboration across all divisions.</li>
              <li> Manages internal logistics such as member counts, attendance, and rule compliance.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectManagementDiv;
