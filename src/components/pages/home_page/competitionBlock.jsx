import React, { useState } from 'react';

const CompetitionBlock = () => {
    const [selectedCompetition, setSelectedCompetition] = useState(null);

    const handleCompetitionClick = (competition) => {
        setSelectedCompetition(current => current === competition ? null : competition);
    };

    const competitionContent = {
        'Wind Turbine': 'Design, build, and present a unique, wind-driven power system.',
        'Project Development': 'Research wind resource data, transmission infrastructure, and environmental factors to create a site plan and financial analysis for a hypothetical wind farm.',
        'Connection Creation': 'Partner with wind industry professionals, raise awareness of wind energy in your local community, and work with local media to promote your team’s accomplishments.'
    };

    return (
        <div className="competition-block">
            <div className="competitions-grid dark:bg-gray-900 dark:text-white">
                <h2 className="text-2xl font-bold mb-4 mt-4 text-center">Collegiate Wind Competition</h2>
                <div className="competition-tabs">
                    {Object.keys(competitionContent).map((competition) => (
                        <div
                            key={competition}
                            className={`competitions ${selectedCompetition === competition ? 'selected' : ''}`}
                            onClick={() => handleCompetitionClick(competition)}
                            role="button"
                            aria-expanded={selectedCompetition === competition}
                        >
                            {competition}
                        </div>
                    ))}
                </div>
                <div className="video-row">
                    <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mx-auto gap-8">
                        <div className="order-1 md:order-2 w-full md:w-1/2 flex justify-center">
                            <div className="video-container w-full max-w-sm md:max-w-lg">
                                <iframe
                                    src="https://www.youtube.com/embed/FtkoJrZdJhY"
                                    title="Prepare for Tomorrow's Wind Energy Career Today with the Collegiate Wind Competition (CWC)"
                                    allowFullScreen
                                    className="w-full h-48 md:h-96 rounded-lg shadow-lg"
                                ></iframe>
                            </div>
                        </div>

                        {selectedCompetition && (
                            <div className="order-2 md:order-1 w-full md:w-1/2 text-center md:text-left max-w-sm md:max-w-none">
                                <div className="content-container text-2xl">
                                    {competitionContent[selectedCompetition]}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompetitionBlock;
