import React from 'react';
import Header from '../../layout/header';
import Info from './Info';
import Sponsors from './Sponsors';
import SponsorshipTiers from './SponsorshipTiers';
import SponsorFooter from './SponsorFooter';

const SponsorPage = () => {
  return (
    <div>
      <Header />
      <div className="dark:bg-gray-900 dark:text-white transition-colors duration-500 ease-in-out font-sans">
        <main>
          <Info />
          <Sponsors />
          <SponsorshipTiers />
        </main>
        <SponsorFooter />
      </div>
    </div>
  );
};

export default SponsorPage;