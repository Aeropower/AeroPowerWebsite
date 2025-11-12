import React, { useState } from 'react';

// This block now highlights our research-first purpose so
// prospective members don't assume we are competing.
const CompetitionBlock = () => {
    const [selectedTopic, setSelectedTopic] = useState(null);

    const handleClick = (topic) => {
        setSelectedTopic((current) => (current === topic ? null : topic));
    };

    const researchContent = {
        'Wind Farm Dev': {
            description:
                'Analyze resources and site constraints, design layouts and interconnection, model energy and wakes, plan logistics, and evaluate cost, risk, and sustainability.',
            href: '/divisions/windfarm',
        },
        'Electrical': {
            description:
                'Select generators and protection, design rectifiers, DC-DC, and inverters, instrument systems, and validate closed-loop control and efficiency in models and hardware.',
            href: '/divisions/electrical',
        },
        'Mechanical': {
            description:
                'Design blades and structures, run CFD and FEA, build hub and base, integrate a pitch actuator and sensors, and verify strength, safety, and performance.',
            href: '/divisions/mechanical',
        },
        'Software': {
            description:
                'Build FreeRTOS-based control firmware, sensor and actuator drivers, telemetry and data logging, plus web tools and dashboards to visualize experiments.',
            href: '/divisions/software',
        },
    };

    const topics = Object.keys(researchContent);

    return (
        <div className="competition-block">
            <div className="competitions-grid dark:bg-gray-900 dark:text-white">
                <h2 className="text-2xl font-bold mb-2 mt-4 text-center">Our Research Focus</h2>
                {/* <p className="text-center mb-4 px-4 text-gray-700 dark:text-gray-300">
          We are a research-driven student team. We are not competing in external competitions this cycle. If you join, expect to do experiments, build prototypes, analyze data, and publish or document results.
        </p> */}

                <div className="competition-tabs" role="tablist" aria-label="Research areas">
                    {topics.map((topic) => (
                        <button
                            key={topic}
                            className={`competitions ${selectedTopic === topic ? 'selected' : ''}`}
                            onClick={() => handleClick(topic)}
                            role="tab"
                            aria-selected={selectedTopic === topic}
                            aria-controls={`panel-${topic}`}
                        >
                            {topic}
                        </button>
                    ))}
                </div>

                {/* <div className="video-row"> */}
                <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mx-auto gap-8">
                    {selectedTopic ? (
                        <div
                            id={`panel-${selectedTopic}`}
                            role="tabpanel"
                            className="w-full text-center md:text-left max-w-2xl"
                        >
                            <div className="content-container text-xl md:text-2xl">
                                {researchContent[selectedTopic]?.description}
                            </div>
                            {researchContent[selectedTopic]?.href && (
                                <div className="mt-1 flex justify-center">
                                    <a
                                        href={researchContent[selectedTopic].href}
                                        className="inline-block text-lg mb-4 md:text-xl text-emerald-700 dark:text-emerald-400 font-semibold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded"
                                        aria-label={`Learn more about ${selectedTopic}`}
                                    >
                                        Learn more
                                    </a>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="w-full text-center max-w-2xl">
                            <div className="content-container justify-center text-lg md:text-xl">
                                Select a research area to learn what you can work on.
                            </div>
                        </div>
                    )}
                </div>
                {/* </div> */}
            </div>
        </div>
    );
};

export default CompetitionBlock;
