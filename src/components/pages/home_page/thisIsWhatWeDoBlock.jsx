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
        <h2 className="text-2xl font-bold mb-4 text-center">Who are we?</h2>
        <p className="text-center md:text-left text-lg">
          We’re a student-led engineering team passionate about advancing renewable energy and creating real-world impact. At AeroPower, we design, build, and test functional wind turbines, develop offshore wind farm proposals, and lead outreach initiatives that promote wind energy within our community.
          <br /><br />
          As competitors in the U.S. Department of Energy Collegiate Wind Competition (CWC), we combine technical precision with innovation across three core tracks: turbine engineering, wind farm development, and community engagement.
          <br /><br />
          Our team is organized into specialized divisions — mechanical, electrical, software, wind farm development, business and operations, and project management — each with dedicated subteams focusing on areas such as blade design, control systems, power conversion, logistics, and sustainability.
          <br /><br />
          Through hands-on experience in simulation, prototyping, optimization, and outreach, we build expertise in CAD, coding, embedded systems, system modeling, and project coordination — preparing the next generation of engineers to lead the transition toward a sustainable future.
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
