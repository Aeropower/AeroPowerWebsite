import React from 'react'

const competitionBlock = () => {
    return (
        <div className="competition-block">
            <div className="competitions-grid">
                <div className="child1"><p className="competition-title">Competitions</p></div>
                <div className="child2">
                    <div className="competitions">Wind Turbine</div>
                    <div className="competitions">Wind Farm</div>
                    <div className="competitions">Project Outreach</div>
                </div>
            </div>
            <div className="competition-video">video de la competencia y detalles de competencia</div>
        </div>
    )
}

export default competitionBlock
