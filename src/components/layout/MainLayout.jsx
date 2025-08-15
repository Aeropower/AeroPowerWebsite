import React from 'react';
import Header from './header';
import Footer from './footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
