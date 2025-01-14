import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';

interface MainLayoutProps {
  children: ReactNode; // This allows you to pass child components
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layout">
      <header>
        {/* Add your header content here */}
        <h1>VIZX Header</h1>
      </header>
      <div className="layout-body">
        <Sidebar />
        <main>
          {children} {/* This is where child components will be rendered */}
        </main>
      </div>
      <footer>
        {/* Add your footer content here */}
        <p>© 2025 VIZX. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;
