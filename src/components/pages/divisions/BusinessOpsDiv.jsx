import React from 'react';
import Dog2 from "../../../assets/images/dog2.jpg";
import BusinessBannerImage from "../../../assets/images/polygons_dark.png"; // Usa tu banner preferido

const BusinessOpsDiv = () => {
  return (
    <div className="dark:bg-gray-800 transition-colors duration-300">
      
      {/* Banner */}
      <section className="relative w-full h-[300px] md:h-[450px] overflow-hidden shadow-md mb-6">
        <img src={BusinessBannerImage} alt="Business Banner" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
            Business & Operations Division
          </h1>
        </div>
      </section>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6 flex flex-col md:flex-row items-center w-full dark:bg-gray-800">
      {/* Image Section (Left on large screens, Top on small screens) */}
      <div className="w-full md:w-1/2 flex justify-center order-1 md:order-1 mb-6 md:mb-0">
        <img
          src={Dog2}
          alt="Business and Operations Division"
          className="w-48 h-auto rounded-lg"
        />
      </div>

      {/* Text Section (Right on large screens, Bottom on small screens) */}
      <div className="w-full md:w-1/2 md:pl-6 order-2 md:order-2">
        
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1 text-center md:text-left">
          Leader: Samarys Bocachica Alvarado
        </h3>
        <p className="text-gray-700 dark:text-white leading-relaxed">
          The Business & Operations division is responsible for the logistics, planning, and execution of activities, whether for fundraising or raising awareness about renewable energy. Likewise, we manage social media, communication with sponsors, and the Content Creation Contest within the CWC Competition. In this contest, we are tasked with making an impact on different communities by raising awareness about renewable energy among them.
        </p>
        <div className="mt-4">
          <h3 className="text-xl font-medium">What we do</h3>
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
