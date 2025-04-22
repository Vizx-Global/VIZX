import React, { useState, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header'; // Updated header with Tailwind dropdowns
import Sidebar from './Sidebar';
import Footer from './Footer'; // Import the Footer component
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for sidebar toggle
import '../../App.css'; // Ensure you have this CSS file

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="main-layout">
      {/* Use the updated Header component with dropdowns */}
      <Header />
      <div className="layout-body relative">
        <button className="toggle-button" onClick={toggleSidebar}>
          {sidebarVisible ? <FaTimes size={24} /> : <FaBars size={24} />} {/* Sidebar toggle icons */}
        </button>
        <div className={`sidebar ${sidebarVisible ? 'show' : ''}`}>
          <Sidebar />
        </div>
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
