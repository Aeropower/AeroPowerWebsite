import React, { useState, useEffect } from 'react';
import BandO1 from "../../../assets/images/businessDiv1.png";
import BandO2 from "../../../assets/images/businessDiv2.png";
import BandO3 from "../../../assets/images/businessDiv3.png";
import BandO4 from "../../../assets/images/businessDiv5.png";
import BusinessBannerImage from "../../../assets/images/businessDiv4.png"; // Usa tu banner preferido

const BusinessOpsDiv = () => {
  const images = [BandO1, BandO2, BandO3, BandO4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="dark:bg-gray-800 transition-colors duration-300">

      {/* Banner */}
      <section className="relative w-full h-[300px] md:h-[450px] overflow-hidden shadow-lg mb-6">
        <img src={BusinessBannerImage} alt="Business Banner" className="object-cover w-full h-full" />
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
        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <div className="relative w-full max-w-[400px] h-[250px] md:h-[350px] md:max-w-[500px] overflow-hidden flex items-center justify-center rounded-lg">
            <img
              key={currentImageIndex}
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              loading="lazy"
              className=" absolute inset-0 m-auto animate-imageFade max-w-full max-h-full object-contain rounded-lg transition-opacity duration-700 shadow-lg"
            />
          </div>
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
          <div className="mb-6">
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
