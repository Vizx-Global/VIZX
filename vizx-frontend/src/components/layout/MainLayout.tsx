import React, { useState, ReactNode } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer'; // Import the Footer component
import './Header.css';
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
      <header className="header">
        <Link to="/" className="logo">
          <img src="/vizx.png" alt="VIZX Logo" className="logo" /> {/* Use direct path */}
        </Link>
        <nav className="nav">
          <ul>
            <li><Link to="/solutions">Solutions</Link></li>
            <li><Link to="/industries">Industries</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact" className="contact-button">Contact Us</Link></li>
          </ul>
        </nav>
      </header>
      <div className="layout-body">
        <button className="toggle-button" onClick={toggleSidebar}>
          {sidebarVisible ? '←' : '→'}
        </button>
        <div className={`sidebar ${sidebarVisible ? 'show' : ''}`}>
          <Sidebar />
        </div>
        <main>
          <Outlet /> {/* This renders the current route */}
          {children}
        </main>
      </div>
      <Footer /> {/* Add Footer component */}
    </div>
  );
};

export default MainLayout;
