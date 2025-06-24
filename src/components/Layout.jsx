import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className={`flex-grow${!isHome ? ' -mt-16' : ''}`}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout; 