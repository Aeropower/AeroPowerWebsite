import React from "react";
import TeamPhoto from "../../../assets/images/team-photo.jpeg";
import TypewriterText from "../../../styles/TypewriterText"; // Import the typewriter effect component

const ImpressionBlock = () => (
  <div className="impression-block">
    <div className="team-photo-block">
      <img className="team-photo" src={TeamPhoto} alt="Team Photo" loading="lazy" />
    </div>
    <div className="text-container">
      <TypewriterText
        text="Aeropower is a project team of the IEEE which competes in the DoE Collegiate Wind Competition. Our goal is to represent Puerto Rico in the competition and to empower communities with renewable energy solutions."
        speed={50} // Adjust speed if needed
      />
    </div>
  </div>
);

export default ImpressionBlock;
