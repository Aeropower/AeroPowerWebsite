import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import HomePage from './components/pages/home_page/homePage';
import MeetTeamPage from './components/pages/meet_the_team/meetTeamPage';
import './styles/general.css';
import './styles/home.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<HomePage />} />
      <Route path='/meetTeam' element={<MeetTeamPage />} />
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
