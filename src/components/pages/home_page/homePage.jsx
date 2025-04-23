import React from 'react';
import CompetitionBlock from "./competitionBlock";
import MissionVisionBlock from "./missionVisionBlock";
import ImpressionBlock from "./impressionBlock";
import ThisIsWhatWeDo from "./thisIsWhatWeDoBlock";

const HomePage = () => {
  return (
    <>
      <ImpressionBlock />
      <ThisIsWhatWeDo />
      <MissionVisionBlock />
      <CompetitionBlock />
    </>
  );
};

export default HomePage;
