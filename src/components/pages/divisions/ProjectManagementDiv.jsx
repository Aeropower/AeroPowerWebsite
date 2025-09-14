import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay, Keyboard, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import { useMedia } from '../../../hooks/useMedia';
import PrjManage1 from "@/assets/images/businessDiv1.png";
import PrjManage2 from "@/assets/images/businessDiv4.png";
import PrjManage3 from "@/assets/images/businessDiv5.png";
import ProjectManageBanner from "@/assets/images/businessDiv4.png"; // Mientras tanto

const ProjectManagementDiv = () => {
  const images = [PrjManage1, PrjManage2, PrjManage3];
  const prefersReduced = usePrefersReducedMotion();
  const bulletLabel = (i, total) => `Go to slide ${i + 1} of ${total}`;
  const swiperRef = useRef(null);
  const isDesktop = useMedia('(min-width:1024px) and (pointer: fine)');

  return (
    <div className="dark:bg-gray-800 transition-colors duration-300">

      {/* Banner (original layout + layering, with perf-only upgrades) */}
      <section className="relative w-full h-[300px] md:h-[450px] overflow-hidden shadow-lg mb-6"
        aria-labelledby='pm-banner'
      >
        <img
          src={ProjectManageBanner}
          srcSet={`${ProjectManageBanner} 1920w, ${ProjectManageBanner} 1280w, ${ProjectManageBanner} 768w`}
          sizes="100vw"
          alt="Project Management Banner"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="object-cover w-full h-full"
        />

        <div className="absolute inset-0 bg-black/60 md:bg-black/50 flex items-center justify-center">
          <h1 id="pm-banner"
            className="relative text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-center md:text-left whitespace-pre-line md:whitespace-nowrap">
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
      <div className="px-6 py-6 md:px-10 flex flex-col md:flex-row items-center bg-white dark:bg-gray-900 shadow-lg"
        role='main' aria-labelledby='about-pm'>
       {/* Visual */}
<div className="w-full md:w-1/2 flex flex-col justify-center items-center mt-6 md:mt-0">
  {/* 🔁 Cambiamos aspect-[16/10] por min-h en mobile (y más alto en desktop) */}
  <div className="relative w-full max-w-[600px] min-h-[300px] md:min-h-[400px] flex items-center justify-center overflow-hidden rounded-lg">
    <Swiper
      tabIndex={0}
      key={isDesktop ? 'nav-on' : 'nav-off'}
      modules={[Autoplay, Pagination, A11y, Keyboard, ...(isDesktop ? [Navigation] : [])]}
      spaceBetween={24}
      slidesPerView={1}
      navigation={isDesktop ? { enabled: true } : false}
      keyboard={{ enabled: true, onlyInViewport: true, pageUpDown: true }}
      autoplay={
        prefersReduced ? false : {
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }
      }
      loop
      allowTouchMove
      role="region"
      aria-roledescription="carousel"
      aria-label="Project management visuals"
      aria-live="polite"
      onFocus={() => swiperRef.current?.autoplay?.stop?.()}
      onBlur={() => !prefersReduced && swiperRef.current?.autoplay?.start?.()}
      onSwiper={(swiper) => { swiperRef.current = swiper; }}
      pagination={{
        clickable: true,
        renderBullet: (index, className) =>
          `<button class="${className}" type="button" aria-label="${bulletLabel(index, images.length)}"></button>`
      }}
      className="w-full h-full pb-10
                 [&_.swiper-pagination]:relative [&_.swiper-pagination]:mt-6
                 [&_.swiper-pagination-bullet]:!w-4 [&_.swiper-pagination-bullet]:!h-4
                 [&_.swiper-pagination-bullet]:!bg-green-600
                 [&_.swiper-pagination-bullet]:!rounded-full
                 [&_.swiper-pagination-bullet]:focus-visible:!outline [&_.swiper-pagination-bullet]:focus-visible:!outline-2
                 [&_.swiper-pagination-bullet-active]:!bg-green-600

                 [&_.swiper-button-next]:!top-1/2 [&_.swiper-button-next]:!-translate-y-1/2
                 [&_.swiper-button-prev]:!top-1/2 [&_.swiper-button-prev]:!-translate-y-1/2
                 [&_.swiper-button-next]:!right-2 sm:[&_.swiper-button-next]:!right-3 md:[&_.swiper-button-next]:!right-4
                 [&_.swiper-button-prev]:!left-2 sm:[&_.swiper-button-prev]:!left-3 md:[&_.swiper-button-prev]:!left-4

                 [&_.swiper-button-next]:!w-11 [&_.swiper-button-next]:!h-11
                 [&_.swiper-button-prev]:!w-11 [&_.swiper-button-prev]:!h-11

                 [&_.swiper-button-next:hover]:!bg-black/55 [&_.swiper-button-prev:hover]:!bg-black/55
                 [&_.swiper-button-next:active]:scale-95 [&_.swiper-button-prev:active]:scale-95"
    >
      {images.map((src, idx) => (
        <SwiperSlide key={idx} className="flex items-center justify-center">
          {/* 🔁 Nuevo sizing: grande en mobile sin recortar; límites suaves en desktop */}
          <img
            src={src}
            alt={
              idx === 0
                ? "Project planning and roadmap visualization"
                : idx === 1
                  ? "Schedule tracking and milestone dashboard"
                  : "Budgeting, risk, and resource management overview"
            }
            loading="lazy"
            decoding="async"
            className="object-contain m-auto rounded-lg transition-opacity duration-700 shadow-[0_4px_20px_rgba(0,0,0,0.4)]
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
          <h2 id="about-pm" className="text-xl font-semibold text-gray-900 dark:text-white mt-6 md:mt-4">
            About the Division
          </h2>
          {/* Leadership */}
          <dl className="mt-2 mb-4">
            <div className="flex flex-col md:flex-row md:items-baseline gap-1">
              <dt className="text-lg font-semibold text-gray-800 dark:text-white">Project Manager:</dt>
              <dd className="text-lg text-gray-900 dark:text-white font-bold">Iván O. Morales Martorell</dd>
            </div>
            <div className="flex flex-col md:flex-row md:items-baseline gap-1">
              <dt className="text-lg font-semibold text-gray-800 dark:text-white">Co-Leader:</dt>
              <dd className="text-lg text-gray-900 dark:text-white font-bold">Carlos M. Marrero</dd>
            </div>
          </dl>

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
