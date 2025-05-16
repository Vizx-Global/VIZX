import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Industries from './pages/Industries';
import Login from './pages/Login';
import OurImpact from './pages/OurImpact';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Resources from './pages/Resources';
import ResourceDetail from './pages/ResourceDetail';
import Solutions from './pages/Solutions';
import VizxHI from './pages/VizxHI';
import RPO from './pages/RPO';
import CCaaS from './pages/CCaaS';
import WhyKenya from './pages/WhyKenya';
import EmployeeWelfare from './pages/EmployeeWelfare';
import CommunityFund from './pages/CommunityFund';
import VizxAI from './pages/VizxAI';
import PrivacyandSecurity from './pages/PrivacyAndSecurity';
import MerchantServices from './pages/MerchantServices';
import IndustryRouter from './pages/IndustryRouter'; // Import the dynamic router


import MainLayout from './components/layout/MainLayout';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/login" element={<Login />} />
          <Route path="/our-impact" element={<OurImpact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:id" element={<ResourceDetail />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/vizx-hi" element={<VizxHI />} />
          <Route path="/contact-center" element={<CCaaS />} />
          <Route path="/why-kenya" element={<WhyKenya />} />
          <Route path="/community-fund" element={<CommunityFund />} />
          <Route path="/rpo" element={<RPO />} />
          <Route path="/employee-welfare" element={<EmployeeWelfare />} />
          <Route path="/vizx-ai" element={<VizxAI />} />
          <Route path="/merchant-services" element={<MerchantServices />} />
          <Route path="/privacy-and-security" element={<PrivacyandSecurity />} />
          {/* Dynamic route for industry pages */}
          <Route path="/industry/:slug" element={<IndustryRouter />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
