import React, { useState } from 'react';

const CompetitionBlock = () => {
    const [selectedCompetition, setSelectedCompetition] = useState(null);

    const handleCompetitionClick = (competition) => {
        setSelectedCompetition(current => current === competition ? null : competition);
    };

    const competitionContent = {
        'Wind Turbine': 'Design, build, and present a unique, wind-driven power system.',
        'Project Development': 'Research wind resource data, transmission infrastructure,and environmental factors to create a site plan and financial analysis for a hypothetical wind farm.',
        'Connection Creation': 'Partner with wind industry professionals, raise awareness of wind energy in your local community, and work with local media to promote your team’s accomplishments.'
    };

    return (
        <div className="competition-block">
            <div className="competitions-grid">
                <h2 className="text-2xl font-bold mb-4 mt-4">Collegiate Wind Competition</h2>
                <div className="child2">
                    {['Wind Turbine', 'Project Development', 'Connection Creation'].map((competition) => (
                        <div
                            key={competition}
                            className={`competitions ${selectedCompetition === competition ? 'selected' : ''}`}
                            onClick={() => handleCompetitionClick(competition)}
                        >
                            {competition}
                        </div>
                    ))}
                </div>
                <div className={`video-row ${selectedCompetition ? 'has-content' : ''}`}>
                    {selectedCompetition && (
                        <div className="content-container text-2xl"> {/* Added text-lg class */}
                            {competitionContent[selectedCompetition]}
                        </div>
                    )}
                    <div className="video-container">
                        <iframe
                            src="https://www.youtube.com/embed/FtkoJrZdJhY"
                            title="Prepare for Tomorrow's Wind Energy Career Today with the Collegiate Wind Competition (CWC)"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompetitionBlock;
