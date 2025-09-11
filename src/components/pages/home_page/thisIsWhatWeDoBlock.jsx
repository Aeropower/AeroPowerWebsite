import React, { useState, useEffect } from 'react';
import TeamWork1 from '@/assets/images/team-work1.jpg';
import ElectricalWork from '@/assets/images/electrical4.png';
import SoftwareWork from '@/assets/images/software3.png';
import MechanicalWork from '@/assets/images/mech3.png';
import WindFarmWork from '@/assets/images/windFarm3.png';
import BusinessWork from '@/assets/images/businessDiv4.png';

const slides = [
  { src: ElectricalWork, alt: 'Electrical division: power electronics and conversion' },
  { src: SoftwareWork, alt: 'Software division: control and embedded development' },
  { src: MechanicalWork, alt: 'Mechanical division: turbine structure and blades' },
  { src: TeamWork1, alt: 'AeroPower team collaborating on campus' },
  { src: WindFarmWork, alt: 'Wind farm development: layout and analysis' },
  { src: BusinessWork, alt: 'Business & operations: outreach and planning' },
];

const ThisIsWhatWeDoBlock = () => {
  const [idx, setIdx] = useState(0);

  // Respect prefers-reduced-motion: no auto-rotate
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (prefersReduced) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, [prefersReduced]);

  return (
    <section
      id="thisiswhatwedoblock"
      className="scroll-mt-24" /* prevents sticky header overlap when anchored */
    >
      <div className="flex flex-col md:flex-row items-center p-4 bg-white dark:bg-gray-800 mt-6 shadow-md transition-colors">
        {/* Text */}
        <div className="w-full md:w-1/2 order-2 md:order-1 md:pr-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Who are we?</h2>
          <p className="text-left md:text-left text-lg">
            We’re a student-led engineering team passionate about advancing renewable energy and creating real-world impact. At AeroPower, we design, build, and test functional wind turbines, develop offshore wind farm proposals, and lead outreach initiatives that promote wind energy within our community.
            <br /><br />
            As competitors in the U.S. Department of Energy Collegiate Wind Competition (CWC), we combine technical precision with innovation across three core tracks: turbine engineering, wind farm development, and community engagement.
            <br /><br />
            Our team is organized into specialized divisions — mechanical, electrical, software, wind farm development, business and operations, and project management; each with dedicated subteams focusing on areas such as blade design, control systems, power conversion, logistics, and sustainability.
            <br /><br />
            Through hands-on experience in simulation, prototyping, optimization, and outreach, we build expertise in CAD, coding, embedded systems, system modeling, and project coordination; preparing the next generation of engineers to lead the transition toward a sustainable future.
          </p>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2 mb-8 md:mb-0">
          <img
            key={idx}                                     /* retrigger fade */
            src={slides[idx].src}
            alt={slides[idx].alt}
            loading={idx === 0 ? 'eager' : 'lazy'}
            decoding="async"
            className={`w-64 h-64 md:w-80 md:h-80 rounded-lg shadow-lg object-cover ${prefersReduced ? '' : 'animate-imageFade'
              }`}
          />
        </div>
      </div>
    </section>
  );
};

export default ThisIsWhatWeDoBlock;
