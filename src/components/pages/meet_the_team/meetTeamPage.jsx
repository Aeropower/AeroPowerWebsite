import React from 'react'
import Header from '../../layout/header';
import Footer from "../../layout/footer";
import WindFarmDevDiv from './WindFarmDevDiv';
import ElectricalDiv from './ElectricalDiv';
import BusinessOpsDiv from './BusinessOpsDiv';
import MechanicalDiv from './MechanicalDiv';
import SoftwareDiv from './SoftwareDiv';
import ProjectManagementDiv from './ProjectManagementDiv';

const meetTeamPage = () => {
  return (
    <div>
      <Header/>
      <WindFarmDevDiv/>
      <ElectricalDiv/>
      <BusinessOpsDiv />
      <MechanicalDiv/>
      <SoftwareDiv/>
      <ProjectManagementDiv/>
     <Footer />
    </div>
  )
}

export default meetTeamPage;
