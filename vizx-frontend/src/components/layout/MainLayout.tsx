import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header'; // Updated header with Tailwind dropdowns
import Footer from './Footer'; // Import the Footer component
import '../../App.css'; // Ensure you have this CSS file

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  

  return (
    <div className="main-layout">
      {/* Use the updated Header component with dropdowns */}
      <Header />
      <div className="layout-body relative">    
       
        <main className="center-content">
          <Outlet /> {/* This renders the current route */}
          {children}
        </main>
      </div>
      <Footer /> {/* Add Footer component */}
    </div>
  );
};

export default MainLayout;
