import React, { ReactNode } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../../App.css';

interface MainLayoutProps { children?: ReactNode }

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <div className={`main-layout ${isHome ? 'is-home' : ''}`}>
      {/* Make sure header (and its mobile menu) stays above page overlays */}
      <div className="fixed inset-x-0 top-0 z-50">
        <Header />
      </div>

      {/* Page content goes UNDER the header */}
      <div
        className={`layout-body relative z-0 ${isHome ? 'no-header-pad' : 'with-header-pad'}`}
      >
        <main className="center-content relative z-0">
          {children}
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
