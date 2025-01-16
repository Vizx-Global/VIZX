import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar-content">
      <ul>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/industries">Industries</a></li>
        <li><a href="/solutions">Solutions</a></li>
        <li><a href="/resources">Resources</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/our-impact">Our Impact</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
