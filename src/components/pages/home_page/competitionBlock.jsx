import React from 'react'

const competitionBlock = () => {
    return (
        <div className="competition-block">
            <div className="competitions-grid">
                <p className="competition-title">Collegiate Wind Competition (CWC)</p>
                <div className="child2">
                    <div className="competitions">Wind Turbine</div>
                    <div className="competitions">Wind Farm</div>
                    <div className="competitions">Project Outreach</div>
                </div>
                <div className="video-row">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/FtkoJrZdJhY"
                        title="Prepare for Tomorrow's Wind Energy Career Today with the Collegiate Wind Competition (CWC)"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/C_iIaec6Dtg?si=PubxdslwRm2mTBym"
                        title="BLADES OF GLORY: An Energy.gov Mini-Doc"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

            </div>

        </div>
    )
}

export default competitionBlock