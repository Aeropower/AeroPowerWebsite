import React from "react";
import TeamPhoto from "../../../assets/images/team-photo.jpeg";
import TypewriterText from "../../../styles/TypewriterText";

const ImpressionBlock = () => (
  <div className="impression-block dark:bg-gray-800 text-black dark:text-white transition-colors duration-300">
    <div className="team-photo-block animate-fadeIn">
      <img className="team-photo" src={TeamPhoto} alt="Team Photo" loading="lazy" />
    </div>
    <div className="text-container max-w-4xl mx-auto text-lg">
      <TypewriterText
        text="Aeropower is a project team of the IEEE which competes in the DoE Collegiate Wind Competition. Our goal is to represent Puerto Rico in the competition and to empower communities with renewable energy solutions."
        speed={50} // Adjust speed if needed
      />
    </div>
  </div>
);

export default ImpressionBlock;
