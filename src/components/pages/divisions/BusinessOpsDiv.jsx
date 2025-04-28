import React from 'react';
import Dog2 from "../../../assets/images/dog2.jpg"; // Replace later with a video

const BusinessOpsDiv = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 flex flex-col md:flex-row items-center w-full dark:bg-gray-800">
      {/* Text Section (Left on large screens, Bottom on small screens) */}
      <div className="w-full md:w-1/2 md:pr-6 order-2 md:order-1">
        {/* Division Title */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center md:text-left dark:text-white">
          Business & Operations Division
        </h2>
            {/* Leadership */}
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1 text-center md:text-left">
          Leader: Samarys Bocachica Alvarado
        </h3>
      

        {/* Description */}
        <p className="text-gray-700 dark:text-white leading-relaxed">
          The Business & Operations division is responsible for the logistics, planning, and execution of activities, whether for fundraising or raising awareness about renewable energy. Likewise, we manage social media, communication with sponsors, and the Content Creation Contest within the CWC Competition. In this contest, we are tasked with making an impact on different communities by raising awareness about renewable energy among them.
        </p>

        {/* List of Responsibilities */}
        <div className="mt-4 ">
          <h3 className="text-xl font-medium">What we do</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-white">
            <li>Organize and run the Content Creation Contest as part of the CWC Competition.</li>
            <li>Engage and educate communities by raising awareness about renewable energy through the contest and other initiatives.</li>
            <li>Conduct financial analysis and plan and execute events to fund the team.</li>
            <li>Manage social media and communication. </li>
          </ul>
        </div>
      </div>

      {/* Image Section (Right on large screens, Top on small screens) */}
      <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2 mt-6 md:mt-0">
        <img
          src={Dog2}
          alt="Business and Operations Division"
          className="w-48 h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default BusinessOpsDiv;
