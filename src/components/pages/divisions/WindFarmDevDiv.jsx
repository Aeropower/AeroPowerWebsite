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
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6 flex flex-col md:flex-row items-center w-full transition-colors duration-300">

      {/* Media Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        {/* Replace this <img> with a <video> when applicable */}
        <img
          src={Dog2}
          alt="Offshore wind farm development visual"
          className="w-48 h-auto rounded-lg"
          loading="lazy"
        />
      </div>

      {/* Info Section */}
      <div className="w-full md:w-1/2 md:pl-6 mt-6 md:mt-0 flex flex-col">

        {/* Division Title */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
          Wind Farm Development Division
        </h2>

        {/* Leadership */}
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1 text-center md:text-left">
          Leader: Paola N. Gordils Acosta
        </h3>
        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 text-center md:text-left">
          Co-Leader: Luis A. Negrón Torres
        </h4>

        {/* Description */}
        <p className="text-gray-700 dark:text-white mb-4 leading-relaxed">
          As part of the Wind Farm Development division, members of this multidisciplinary team will be responsible for developing a plan concept for a marine wind farm project. This will be done through data analysis, environmental assessments, economic analysis and engineering analysis.
          Some of the topics that this division will investigate include understanding wind resource data and yield estimation, project economics, bathymetry (study of seabed depth), environmental issues, transport restrictions, logistics, permits, turbine technology and others.
        </p>

        {/* Subdivisions Header */}
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center md:text-left">
          Subdivisions
        </h3>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Pagination, A11y, Autoplay]}
          spaceBetween={20}
          pagination={{ el: ".swiper-pagination-windfarm", clickable: true }}
          loop={true}
          speed={600}
          autoplay={{
            delay: 15000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="w-full min-h-[140px]"
        >
          {windfarmSubdivisions.map(({ title, description, icon: Icon }, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full px-4 py-2 text-center md:text-left mx-auto border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-2 justify-center md:justify-start whitespace-nowrap">
                  {title}
                  <Icon className="text-xl text-green-600 dark:text-green-400" />
                </h4>
                <p className="text-gray-700 dark:text-gray-300 break-normal hyphens-auto leading-relaxed">
                  {description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom pagination for Swiper */}
        <div className="swiper-pagination-windfarm mt-4 flex justify-center" />
      </div>
    </div >
  );
};

export default WindFarmDevDiv;
