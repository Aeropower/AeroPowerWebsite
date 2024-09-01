import React from 'react'


import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import CompetitionBlock from "./components/pages/home_page/competitionBlock";
import MissionVisionBlock from "./components/pages/home_page/missionVisionBlock";
import ImpressionBlock from "./components/pages/home_page/impressionBlock"
import ThisIsWhatWeDo from "./components/pages/home_page/thisIsWhatWeDoBlock";
import './styles/general.css';
import './styles/home.css';
const App = () => {
    return (
        <>
            <Header />
            <ImpressionBlock />
            <ThisIsWhatWeDo />
            <MissionVisionBlock />
            <CompetitionBlock />
            <Footer />

        </>
    );
}

export default App
