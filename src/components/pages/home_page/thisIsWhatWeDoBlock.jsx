import React, { useState, useEffect } from 'react';
import TeamWork1 from '../../../assets/images/team-work1.jpg';
import Dog1 from '../../../assets/images/dog.jpg';
import Dog2 from '../../../assets/images/dog2.jpg';

const ThisIsWhatWeDoBlock = () => {
  const images = [TeamWork1, Dog1, Dog2, TeamWork1, Dog1, Dog2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-col md:flex-row items-center p-4 bg-white dark:bg-gray-800 mt-6 shadow-md transition-colors">
      <div className="w-full md:w-1/2 order-2 md:order-1 md:pr-8">
        <h2 className="text-2xl font-bold mb-4 text-center">This is what we do!</h2>
        <p className="text-center md:text-left text-lg">
        We’re a student engineering team driven by a passion for renewable energy and real-world impact. At AeroPower, we design, build, and test functional wind turbines, develop full offshore wind farm proposals, and lead outreach initiatives to promote wind energy in our community.

As competitors in the U.S. Department of Energy Collegiate Wind Competition (CWC), we combine innovation with technical precision across three core tracks: turbine engineering, wind farm development, and connection creation with local communities and industry professionals.

Our team is divided into specialized divisions - mechanical, electrical, software, wind farm development, business and operations, and project management, each with focused subteams working on everything from control systems and blade design to power conversion, logistics, and sustainability.

Through hands-on experience in simulation, prototyping, optimization, and outreach, we gain valuable skills in CAD, coding, embedded systems, system modeling, project coordination, and much more all while preparing the next generation of engineers to lead in a sustainable future.
        </p>
      </div>

      <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2 mb-8 md:mb-0">
        <img
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="animate-imageFade w-64 h-64 md:w-80 md:h-80 rounded-lg shadow-lg object-cover"
        />
      </div>
    </div>
  );
};

export default ThisIsWhatWeDoBlock;
