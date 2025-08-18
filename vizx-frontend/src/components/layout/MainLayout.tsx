import React, { ReactNode, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../../App.css';

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js';
    script.async = true;
    document.body.appendChild(script);

    const zapierEmbed = document.createElement('zapier-interfaces-chatbot-embed');
    zapierEmbed.setAttribute('is-popup', 'true');
    zapierEmbed.setAttribute('chatbot-id', 'cmcv4u4ek000995ld03scey4d');
    document.body.appendChild(zapierEmbed);

    return () => {
      script.remove();
      zapierEmbed.remove();
    };
  }, []);

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
