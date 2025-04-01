import React from 'react';
import Header from '../../layout/header';
import Footer from "../../layout/footer";
import CompetitionBlock from "./competitionBlock";
import MissionVisionBlock from "./missionVisionBlock";
import ImpressionBlock from "./impressionBlock";
import ThisIsWhatWeDo from "./thisIsWhatWeDoBlock";

const HomePage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <Header />
      <ImpressionBlock />
      <ThisIsWhatWeDo />
      <MissionVisionBlock />
      <CompetitionBlock />
      <Footer />
    </div>
  );
};

export default HomePage;
