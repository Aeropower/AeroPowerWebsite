import React from 'react'
import Header from '../../layout/header';
import Footer from "../../layout/footer";
import WindFarmDevDiv from './WindFarmDevDiv';
import ElectricalDiv from './ElectricalDiv';
import BusinessOpsDiv from './BusinessOpsDiv';
import MechanicalDiv from './MechanicalDiv';
import SoftwareDiv from './SoftwareDiv';
import ProjectManagementDiv from './ProjectManagementDiv';

const DivisionsPage = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Header />
      <WindFarmDevDiv />
      <BusinessOpsDiv />
      <ElectricalDiv />
      <MechanicalDiv />
      <ProjectManagementDiv />
      <SoftwareDiv />
      <Footer />
    </div>
  )
}

export default DivisionsPage;
