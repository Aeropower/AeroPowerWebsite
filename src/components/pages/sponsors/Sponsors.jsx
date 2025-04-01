import React from 'react';
import { sponsors } from './data/sponsors';

const tierColors = {
  platinum: '#807F7A',     // Platinum E5E4E2 D9D9D9 A9A8A2
  gold: '#FFD700',         // Gold
  silver: '#C0C0C0',       // Silver
  bronze: '#CD7F32',       // Bronze
};

const Sponsors = () => (
  <section className="py-20 container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">Our Valued Partners</h2>
    {Object.entries(sponsors).map(([tier, tierSponsors]) => (
      <div key={tier} className="mb-16">
        <h3 className="text-2xl font-semibold mb-8 text-center capitalize" style={{ color: tierColors[tier], textShadow: '1px 1px 0 black' }}>
          {tier} Sponsors
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {tierSponsors.map((sponsor) => (
            <div key={sponsor.name} className="bg-white rounded-xl shadow-lg p-6 justify-center hover:shadow-hard transition-shadow">
              <img src={sponsor.logo} alt={`${sponsor.name} logo`} className="w-full h-48 object-contain mb-4" />
              <h4 className="text-xl font-semibold mb-2">{sponsor.name}</h4>
              <p className="text-gray-600 mb-4">{sponsor.description}</p>
              {sponsor.testimonial && (
                <blockquote className="italic text-gray-700 border-l-4 border-sky-500 pl-4 mt-4">
                  "{sponsor.testimonial}"
                </blockquote>
              )}
            </div>
          ))}
        </div>
      </div>
    ))}
  </section>
);

export default Sponsors;
