import React from 'react';
import Dog2 from "../../../assets/images/dog2.jpg"; // Replace later with a video
import BusinessBannerImage from "../../../assets/images/polygons_dark.png"; // Usa tu banner preferido

const ProjectManagementDiv = () => {
  return (
    <div className="dark:bg-gray-800 transition-colors duration-300">
      
    {/* Banner */}
    <section className="relative w-full h-[300px] md:h-[450px] overflow-hidden shadow-md mb-6">
      <img src={BusinessBannerImage} alt="Business Banner" className="object-cover w-full h-full" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
          Project Management Division
        </h1>
      </div>
    </section>

    <div className="bg-white p-6 rounded-lg shadow-md mb-6 flex flex-col md:flex-row items-center w-full dark:bg-gray-800">
      {/* Image Section (Left on larger screens, Top on small screens) */}
      <div className="w-full md:w-1/2 flex justify-center order-1 md:order-1">
        <img
          src={Dog2}
          alt="Project Management Division"
          className="w-48 h-auto rounded-lg"
        />
      </div>

      {/* Text Section (Right on large screens, Bottom on small screens) */}
      <div className="w-full md:w-1/2 md:pl-6 mt-6 md:mt-0 order-2 md:order-2">
       
            {/* Leadership */}
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1 text-center md:text-left">
          Captain: Iván O. Morales Martorell
        </h3>
        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 text-center md:text-left">
          Leader: Carlos M. Marrero
        </h4>

        <p className="text-gray-700 dark:text-white leading-relaxed">
        The Project Management Division oversees the planning, coordination, and execution of all team projects. Its main role is to ensure an efficient workflow by managing deadlines, budgets, and work plans, keeping all divisions aligned and moving toward the competition’s goals. This division is responsible for ensuring that projects are completed on time, within budget, and meet the highest quality standards. Its responsibilities include allocating and validating resources to ensure proper use; verifying that established deadlines are being met; monitoring overall progress; and facilitating the achievement of team objectives. Additionally, it supports inter-division communication, keeps updated counts of team members, tracks attendance, and ensures compliance with internal rules.
        </p>


        {/* List of Responsibilities */}
        <div className="mt-4">
          <h3 className="text-xl font-medium">What we do</h3>
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
