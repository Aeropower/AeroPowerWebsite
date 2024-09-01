import React from 'react'

import Dog1 from "./assets/images/dog.jpg";
import Dog2 from "./assets/images/dog2.jpg";
import Header from "./components/layout/header";
import TeamPhoto from './assets/images/IMG_0254.jpg';
import './styles/general.css';
import './styles/home.css';
const App = () => {
return (
    <>
        <Header />
        <div className="impression-block">
            <div className="team-photo-block">
                <img className="team-photo" src={TeamPhoto} alt="Team Photo" />
            </div>
            <div>
                <p className="what-is-aeropower">
                    Aeropower is a project team of the IEEE which competes in the DoE Collegiate Wind Competition
                </p>
            </div>
        </div>

        <div className="this-is-what-we-do-block">
            <div className="this-is-what-we-do">
                <p className="this-is-what-we-do-description">
                    ¡Involúcrate en el primer y único equipo del Colegio que diseñará, manufactura y probará una turbina eólica (de viento)!
                    Aeropower es un proyecto de la IEEE Power & Energy Society (PES) con el fin de proveer oportunidades a
                    colegiales para que se desarrollen dentro del campo de la energía renovable. Estamos buscando
                    estudiantes talentosos de TODOS los departamentos para formar parte del equipo. Tenemos como meta
                    competir y representar a Puerto Rico en la Collegiate Wind Competition (CWC), competencia auspiciada por
                    el Depto. de Energía de E.E.U.U.
                    Aeropower competirá contra otras 31 universidades de todo Norteamérica por la duración de todo el año
                    académico. La final de la CWC tendrá como sede en la ciudad de Minneapolis, Minnesota en mayo del 2024.
                </p>
            </div>
            <div className="this-is-what-we-do-grid">
                <div>
                    <img src={Dog1} alt="Dog 1" />
                </div>
                <div>
                    <img src={Dog2} alt="Dog 2" />
                </div>
                <div>
                    <img src={Dog1} alt="Dog 1" />
                </div>
                <div>
                    <img src={Dog2} alt="Dog 2" />
                </div>
            </div>
        </div>

        <div className="mission-vision-block">
            <div className="mission">
                <div>
                    <img className="vision-mission-image" src="images/dog.jpg" alt="Dog" />
                </div>
                <div>mision</div>
            </div>

            <div className="mission">
                <div>
                    <img className="vision-mission-image" src={Dog2} alt="Dog 2" />
                </div>
                <div>vision</div>
            </div>
        </div>
        <div className="competition-block">
            <div className="competitions-grid">
                <div className="child1">Competition</div>
                <div className="child2">
                    <div className="competitions">Wind Turbine</div>
                    <div className="competitions">Wind Farm</div>
                    <div className="competitions">Project Outreach</div>
                </div>
            </div>
            <div className="competition-video">video de la competencia y detalles de competencia</div>
        </div>

        <div className="footer-block">footer</div>
    </>
);
}

export default App
