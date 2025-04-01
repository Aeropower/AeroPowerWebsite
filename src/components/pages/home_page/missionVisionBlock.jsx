import React from 'react';
import { TbTargetArrow } from "react-icons/tb";
import { FaEye } from "react-icons/fa";

const MissionVisionBlock = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 gap-8 bg-white dark:bg-gray-800 mt-6 box-shadow mb-6 shadow-md">
      {/* Mission Section */}
      <div className="w-full md:w-1/2 order-1">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">Mission</h2>
          <div className="w-full flex flex-col items-center text-center mb-4">
            <TbTargetArrow size={80} className="mb-2 dark:text-white" />
            <p className="text-lg">
              Our mission is to design, manufacture, and test wind turbines, providing students with hands-on experience in renewable energy and representing Puerto Rico in the Collegiate Wind Competition.
            </p>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="w-full md:w-1/2 order-2">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">Vision</h2>
          <div className="w-full flex flex-col items-center text-center mb-4">
            <FaEye size={80} className="mb-2 dark:text-white" />
            <p className="text-lg">
              Our vision is to lead the way in renewable energy innovation, empowering communities with sustainable solutions and fostering a greener future for all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionBlock;
