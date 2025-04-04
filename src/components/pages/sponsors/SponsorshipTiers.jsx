import React from 'react';
import { tiers } from './data/tiers';
import { IoChevronForward } from 'react-icons/io5';

const tierColors = {
  platinum: '#807F7A',     // Platinum E5E4E2 D9D9D9 A9A8A2
  gold: '#FFD700',         // Gold
  silver: '#C0C0C0',       // Silver
  bronze: '#CD7F32',       // Bronze
};


const SponsorshipTiers = () => (
  <section className="py-20 bg-gray-50 shadow-md mb-6 dark:bg-gray-800">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">Sponsorship Opportunities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(tiers).map(([key, tier]) => (
          <div key={key} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-hard transition-shadow dark:bg-gray-700">
            <h3 className="text-2xl font-semibold mb-4" style={{ color: tierColors[key], textShadow: '1px 1px black' }}>{tier.name}</h3>
            <ul className="space-y-3">
              {tier.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <IoChevronForward className="h-5 w-5 text-sky-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-white">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SponsorshipTiers;
