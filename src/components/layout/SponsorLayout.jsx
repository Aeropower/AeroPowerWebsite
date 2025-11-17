import Header from "./header";
import SponsorFooter from "../pages/sponsors/SponsorFooter";
import { Outlet } from "react-router-dom";

const SponsorLayout = () => {
  return (
    <>
      <Header />
      <main className="dark:bg-gray-900 dark:text-white transition-colors duration-500 ease-in-out font-sans">
        <Outlet />
      </main>
      <SponsorFooter />
    </>
  );
};

export default SponsorLayout;
