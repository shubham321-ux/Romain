import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import "./css/Layout.css"

const Layout = () => {
  return (
    <div className='main-layout-div'>
      <Header />
      <main className='main-container-outlet'>
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
