import React from 'react';
import './Footer.css'; // Make sure you have the Footer CSS file

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Learn More</h3>
          <ul>
            <li><a href="solutions">Our Solutions</a></li>
            <li><a href="industries">Industries</a></li>
            <li><a href="vizx-ai">Vizx AI</a></li>
            <li><a href="why-kenya">Why Kenya</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Vizx Community</h3>
          <ul>
            <li><a href="employee-welfare">Employee Welfare</a></li>
            <li><a href="our-impact">Our Impact</a></li>
            <li><a href="community-fund">Vizx Community Fund</a></li>
            <li><a href="https://vizxglobal.bamboohr.com/careers">Careers</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="about">About us</a></li>
            <li><a href="contact">Contact us</a></li>
            <li><a href="resources">Resources</a></li>
            <li><a href="privacy-and-security">Privacy and Security</a></li>

          </ul>
        </div>
        <div className="footer-section footer-buttons">
          <button className="contact-button">Contact Us</button>
          <button className="login-button">Login</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 VIZX Global. All rights reserved.</p>
        <div className="social-media">
          <span>Follow us:</span>
          <a href="https://www.facebook.com/VIZXInternational/"><i className="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com/VIZXKe/"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/vizxinternational/?hl=en"><i className="fab fa-instagram"></i></a>
          <a href="https://ke.linkedin.com/company/vizx-international"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
