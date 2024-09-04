import React from 'react'
import TeamWork1 from '../../../assets/images/team-work1.jpg';
const thisIsWhatWeDoBlock = () => {

    return (
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
            <div style={{ margin: '20px' }}>
            <div className="this-is-what-we-do-grid">
                <div>
                    <img src={TeamWork1} alt="Dog 1" />
                </div>
                <div>
                    <img src={TeamWork1} alt="Dog 2" />
                </div>
                <div>
                    <img src={TeamWork1} alt="Dog 1" />
                </div>
                <div>
                    <img src={TeamWork1} alt="Dog 2" />
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default thisIsWhatWeDoBlock
