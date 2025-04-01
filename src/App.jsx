import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import HomePage from './components/pages/home_page/homePage';
import DivisionsPage from './components/pages/divisions/divisionsPage';
import SponsorPage from './components/pages/sponsors/sponsorpage';
import './styles/general.css';
import './styles/home.css';
import DarkModeToggle from './components/layout/DarkModeToggle';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<HomePage />} />
      <Route path='/divisions' element={<DivisionsPage />} />
      <Route path='/sponsors' element={<SponsorPage />} />
    </>
  )
);

const App = () => {

  return (
    <>
      <DarkModeToggle /> {/* ✅ Actually rendered now */}
      <RouterProvider router={router} />
    </>
  );
};

export default App;
