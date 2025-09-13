import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import { FaMicrochip } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
  const swiperRef = useRef(null);
  const imgPaginationRef = useRef(null);
  const subPaginationRef = useRef(null);

  return (
    <div className="dark:bg-gray-800 transition-colors duration-300">

      {/* Banner */}
      <section className="relative w-full h-[300px] md:h-[450px] overflow-hidden shadow-lg mb-6">
        <img
          src={SoftwareBanner}
          srcSet={`${SoftwareBanner} 1920w, ${SoftwareBanner} 1280w, ${SoftwareBanner} 768w`}
          sizes="100vw"
          alt="Software Division Banner"
          loading="eager"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="relative grid place-items-center text-center font-extrabold
                         leading-[1.1] px-2 sm:px-6 max-w-screen-xl mx-auto
                         -translate-y-12 text-4xl sm:text-6xl md:text-6xl">
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
      <div className="px-6 py-6 md:px-10 flex flex-col md:flex-row items-center bg-white dark:bg-gray-900 shadow-lg">
        {/* Image Carousel */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center mt-6 md:mt-0">
          <div className="relative w-full max-w-[640px] md:max-w-full aspect-[16/10] overflow-hidden rounded-lg">
            <Swiper
              onBeforeInit={(s) => {
                swiperRef.current = s;
                s.params.pagination = { ...s.params.pagination, el: imgPaginationRef.current, clickable: true };
              }}
              onSwiper={(s) => {
                if (imgPaginationRef.current) {
                  s.params.pagination.el = imgPaginationRef.current;
                  s.pagination.render();
                  s.pagination.update();
                }
              }}
              modules={[Autoplay, Pagination, A11y]}
              spaceBetween={24}
              slidesPerView={1}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop={true}
              allowTouchMove={true}
              className="w-full h-full"
            >
              {images.map((src, idx) => (
                <SwiperSlide key={idx} className="flex items-center justify-center h-full w-full">
                  <img
                    src={src}
                    alt={`Software Division Slide ${idx + 1}`}
                    loading="lazy"
                    className={`object-contain max-h-full rounded-lg transition-opacity duration-700 shadow-[0_4px_20px_rgba(0,0,0,0.6)] ${
                      // Custom width cap for just the super-wide images
                      idx === 0 || idx === 1 ? 'md:max-w-[85%]' : 'max-w-full'
                      }`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* External pagination (below image) */}
          <div
            ref={imgPaginationRef}
            className="mt-2 mb-1 flex justify-center
                       [&_.swiper-pagination-bullet]:!w-3.5 [&_.swiper-pagination-bullet]:!h-3.5
                       [&_.swiper-pagination-bullet]:!bg-gray-400
                       [&_.swiper-pagination-bullet-active]:!bg-green-600"
            aria-hidden="true"
          />
        </div>

        {/* Info Section */}
        <div className="w-full md:w-1/2 md:pl-6 flex flex-col">
          {/* Leadership */}
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 mt-4 text-center md:text-left">
            Captain: Hiram R. Rodríguez Hernández
          </h3>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 text-center md:text-left">
            Co-Leader: Ulises L. Medina Hurtado
          </h4>
          <p className="text-gray-700 dark:text-white mb-4 leading-relaxed">
            The Software Division designs, develops, and maintains the team’s website and the embedded systems responsible for turbine control and safety. Their work ensures seamless user interaction and real-time system responsiveness.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center md:text-left">
            Subdivisions
          </h3>

          <Swiper
            onBeforeInit={(s) => {
              s.params.pagination = { ...s.params.pagination, el: subPaginationRef.current, clickable: true };
            }}
            onSwiper={(s) => {
              if (subPaginationRef.current) {
                s.params.pagination.el = subPaginationRef.current;
                s.pagination.render();
                s.pagination.update();
              }
            }}
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={20}
            loop
            allowTouchMove={true}
            speed={600}
            autoplay={{
              delay: 15000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="w-full min-h-[140px]"
          >
            {softwareSubdivisions.map(({ title, description, icon: Icon }, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full px-4 py-2 text-center md:text-left mx-auto border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-2 justify-center md:justify-start flex-wrap md:flex-nowrap">
                    {title}
                    <Icon className="text-xl text-green-600 dark:text-green-400" title={`${title} icon`} aria-hidden="true" />
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 break-normal leading-relaxed">
                    {description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* External pagination (below subdivision slider) */}
          <div
            ref={subPaginationRef}
            className="mt-2 mb-1 flex justify-center
                       [&_.swiper-pagination-bullet]:!w-2.5 [&_.swiper-pagination-bullet]:!h-2.5
                       [&_.swiper-pagination-bullet]:!bg-green-600
                       [&_.swiper-pagination-bullet-active]:!bg-green-600"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
};

export default SoftwareDiv;
