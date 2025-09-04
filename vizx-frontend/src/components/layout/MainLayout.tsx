import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../../App.css';

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <div className="layout-body relative">
        <main className="center-content">
          <Outlet />
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
