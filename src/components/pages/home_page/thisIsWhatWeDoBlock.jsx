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
    <div className="flex flex-col md:flex-row items-center p-4 bg-white mt-6 shadow-md">
      <div className="w-full md:w-1/2 order-2 md:order-1 md:pr-8">
        <h2 className="text-2xl font-bold mb-4 text-center">This is what we do!</h2>
        <p className="text-center md:text-left text-lg">
          What we do info...
        </p>
      </div>

      <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2 mb-8 md:mb-0">
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="w-64 h-64 md:w-80 md:h-80 rounded-lg shadow-lg object-cover"
        />
      </div>
    </div>
  );
};

export default ThisIsWhatWeDoBlock;
