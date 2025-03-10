import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import HomePage from './components/pages/home_page/homePage';
import DivisionsPage from './components/pages/divisions/divisionsPage';
import './styles/general.css';
import './styles/home.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<HomePage />} />
      <Route path='/divisions' element={<DivisionsPage />} />
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
