import { useState, useEffect } from 'react';
import TeamWork1 from '@/assets/images/team-work1.webp';
import ElectricalWork from '@/assets/images/electrical4.webp';
import SoftwareWork from '@/assets/images/software3.webp';
import MechanicalWork from '@/assets/images/mech3.webp';
import WindFarmWork from '@/assets/images/windFarm3.webp';
import BusinessWork from '@/assets/images/businessDiv4.webp';

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
            We&apos;re a student-led research team advancing wind energy through open, hands-on engineering.
            We design, build, and test turbine prototypes; analyze wind resources and farm layouts; and share results through documentation and outreach.
            <br /><br />
            Our focus is research and learning. Joining means running experiments, validating models, building hardware and software, and contributing to publications.
            <br /><br />
            We organize into six divisions: mechanical, electrical, software, wind farm development, operations, and project management.
            Each division has its own focus, letting you specialize in areas like blade design, control systems, or power electronics.
            <br /><br />
            Through this work, you&apos;ll develop expertise in CAD, coding, embedded systems, power electronics, and system modeling.
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
