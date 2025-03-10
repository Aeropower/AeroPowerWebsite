import React from 'react';
import TeamWork1 from '../../../assets/images/team-work1.jpg';
import Dog2 from '../../../assets/images/dog2.jpg';

const ThisIsWhatWeDoBlock = () => {
  const missionImage = TeamWork1;
  const visionImage = Dog2;

  return (
    <div className="flex flex-col md:flex-row p-4 gap-8">
      <div className="w-full md:w-1/2 order-1">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">Mission</h2>
          <div className="w-full flex justify-center mb-4">
            <img
              src={missionImage}
              alt="Mission Image"
              className="w-64 h-64 md:w-80 md:h-80 rounded-lg shadow-lg object-cover"
            />
          </div>
          <p className="text-center md:text-left text-lg">
            Our mission is to design, manufacture, and test wind turbines, providing students with hands-on experience in renewable energy and representing Puerto Rico in the Collegiate Wind Competition.
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 order-2">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">Vision</h2>
          <div className="w-full flex justify-center mb-4">
            <img
              src={visionImage}
              alt="Vision Image"
              className="w-64 h-64 md:w-80 md:h-80 rounded-lg shadow-lg object-cover"
            />
          </div>
          <p className="text-center md:text-left text-lg">
            Our vision is to lead the way in renewable energy innovation, empowering communities with sustainable solutions and fostering a greener future for all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThisIsWhatWeDoBlock;
