import React from 'react';
import Header from '../../layout/header';
import Info from './Info';
import Sponsors from './Sponsors';
import SponsorshipTiers from './SponsorshipTiers';
import SponsorFooter from './SponsorFooter';

const SponsorPage = () => {
    return (
        <div className="dark:bg-gray-900 dark:text-white transition-colors duration-300">
            <Header />
            <Info />
            <Sponsors />
            <SponsorshipTiers />
            <SponsorFooter />
        </div>

    )
}

export default SponsorPage;
