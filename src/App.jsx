import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import MainLayout from './components/layout/MainLayout';
import SponsorLayout from './components/layout/SponsorLayout';
import HomePage from './components/pages/home_page/homePage';
import ElectricalDiv from './components/pages/divisions/ElectricalDiv';
import MechanicalDiv from './components/pages/divisions/MechanicalDiv';
import SoftwareDiv from './components/pages/divisions/SoftwareDiv';
import WindFarmDevDiv from './components/pages/divisions/WindFarmDevDiv';
import BusinessOpsDiv from './components/pages/divisions/BusinessOpsDiv';
import ProjectManagementDiv from './components/pages/divisions/ProjectManagementDiv';
import SponsorPage from './components/pages/sponsors/sponsorpage';
import './styles/general.css';
import './styles/home.css';
import DarkModeToggle from './components/layout/DarkModeToggle';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/divisions/electrical" element={<ElectricalDiv />} />
        <Route path="/divisions/mechanical" element={<MechanicalDiv />} />
        <Route path="/divisions/software" element={<SoftwareDiv />} />
        <Route path="/divisions/windfarm" element={<WindFarmDevDiv />} />
        <Route path="/divisions/business" element={<BusinessOpsDiv />} />
        <Route path="/divisions/project_management" element={<ProjectManagementDiv />} />
      </Route>

      <Route element={<SponsorLayout />}>
        <Route path="/sponsors" element={<SponsorPage />} />
      </Route>
    </>
  )
);

const App = () => {

  return (
    <>
      <DarkModeToggle />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
