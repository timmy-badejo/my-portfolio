// Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';  // This allows rendering of child routes

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="main-content">
        <Outlet />  {/* The content of the active page will be displayed here */}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
