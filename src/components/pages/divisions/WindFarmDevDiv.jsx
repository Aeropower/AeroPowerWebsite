import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
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
import Dog2 from "../../../assets/images/dog2.jpg"; // TODO: Replace with a video in the future
import WindFarmBanner from "../../../assets/images/polygons_dark.png";  //Add your banner image

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
  return (
    <div className="dark:bg-gray-800 transition-colors duration-300">

      {/* Banner */}
      <section className="relative w-full h-[300px] md:h-[450px] overflow-hidden shadow-md mb-6">
        <img src={WindFarmBanner} alt="Wind Farm Banner" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
            Wind Farm Development Division
          </h1>
        </div>
      </section>

      {/* Main Info Block */}
      <div className="px-6 md:px-10 flex flex-col md:flex-row items-center bg-white dark:bg-gray-900 shadow-md">
        {/* Visual */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Dog2}
            alt="Offshore wind farm visual"
            className="w-48 h-auto rounded-lg"
            loading="lazy"
          />
        </div>

        {/* Info Section */}
        <div className="w-full md:w-1/2 md:pl-6 flex flex-col">
          {/* Leadership */}
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 mt-4 text-center md:text-left">
            Leader: Paola N. Gordils Acosta
          </h3>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 text-center md:text-left">
            Co-Leader: Luis A. Negrón Torres
          </h4>

          <p className="text-gray-700 dark:text-white mb-4 leading-relaxed">
            As part of the Wind Farm Development division, members of this multidisciplinary team will be responsible for developing a plan concept for a marine wind farm project. This will be done through data analysis, environmental and economic assessments, and engineering evaluations.
            Some of the topics that this division will investigate include understanding wind resource data and yield estimation, project economics, bathymetry (study of seabed depth), environmental issues, transport restrictions, logistics, permits, turbine technology and others.
          </p>

          <blockquote className="italic text-gray-600 dark:text-gray-400 mb-4">
            "Our mission is to design wind energy solutions that are both efficient and sustainable for real-world application." – Paola N. Gordils Acosta
          </blockquote>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center md:text-left">
            Subdivisions
          </h3>

          <Swiper
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={20}
            pagination={{ clickable: true }}
            loop
            speed={600}
            autoplay={{
              delay: 15000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="w-full min-h-[140px] custom-swiper"
          >
            {windfarmSubdivisions.map(({ title, description, icon: Icon }, index) => (
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
          <div />
        </div>
      </div>
    </div>
  );
};

export default WindFarmDevDiv;
