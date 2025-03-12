import React, { useState } from 'react';

const CompetitionBlock = () => {
    const [selectedCompetition, setSelectedCompetition] = useState(null);

    const handleCompetitionClick = (competition) => {
        setSelectedCompetition(current => current === competition ? null : competition);
    };

    const competitionContent = {
        'Wind Turbine': 'Detailed text about the Wind Turbine competition...',
        'Wind Farm': 'Detailed text about the Wind Farm competition...',
        'Project Outreach': 'Detailed text about the Project Outreach competition...'
    };

    return (
        <div className="competition-block">
            <div className="competitions-grid">
                <h2 className="text-2xl font-bold mb-4 mt-4">Collegiate Wind Competition</h2>
                <div className="child2">
                    {['Wind Turbine', 'Wind Farm', 'Project Outreach'].map((competition) => (
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
                        <div className="content-container">
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
