import React, { ReactNode } from 'react';

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
      <main>
        {children} {/* This is where child components will be rendered */}
      </main>
      <footer>
        {/* Add your footer content here */}
        <p>© 2023 VIZX. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;