import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import SponsorLayout from "./components/layout/SponsorLayout";
import HomePage from "./components/pages/home_page/homePage";
import ElectricalDiv from "./components/pages/divisions/ElectricalDiv";
import MechanicalDiv from "./components/pages/divisions/MechanicalDiv";
import SoftwareDiv from "./components/pages/divisions/SoftwareDiv";
import BusinessOpsDiv from "./components/pages/divisions/BusinessOpsDiv";
import ProjectManagementDiv from "./components/pages/divisions/ProjectManagementDiv";
import ElectricalMembers from "./components/pages/members/ElectricalMembers";
import MechanicalMembers from "./components/pages/members/MechanicalMembers";
import SoftwareMembers from "./components/pages/members/SoftwareMembers";
import BusinessMembers from "./components/pages/members/BusinessMembers";
import SponsorPage from "./components/pages/sponsors/sponsorpage";
import "./styles/general.css";
import "./styles/home.css";
import DarkModeToggle from "./components/layout/DarkModeToggle";
//import WindFarmDevDiv from "./components/pages/divisions/WindFarmDevDiv";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/divisions/electrical" element={<ElectricalDiv />} />
        <Route path="/divisions/mechanical" element={<MechanicalDiv />} />
        <Route path="/divisions/software" element={<SoftwareDiv />} />
        <Route path="/divisions/business" element={<BusinessOpsDiv />} />
        <Route
          path="/divisions/project_management"
          element={<ProjectManagementDiv />}
        />
        <Route path="/members/electrical" element={<ElectricalMembers />} />
        <Route path="/members/mechanical" element={<MechanicalMembers />} />
        <Route path="/members/software" element={<SoftwareMembers />} />
        <Route path="/members/business" element={<BusinessMembers />} />
        {/* <Route path="/divisions/windfarm" element={<WindFarmDevDiv />} /> */}
      </Route>

      <Route element={<SponsorLayout />}>
        <Route path="/sponsors" element={<SponsorPage />} />
      </Route>
    </>,
  ),
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
