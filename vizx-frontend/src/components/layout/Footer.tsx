import React from 'react';
import './Footer.css'; // Make sure you have the Footer CSS file

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Learn More</h3>
          <ul>
            <li><a href="#">Our Solutions</a></li>
            <li><a href="#">Industries</a></li>
            <li><a href="#">Vizx HI</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Vizx Community</h3>
          <ul>
            <li><a href="#">Why Kenya</a></li>
            <li><a href="#">The Portal</a></li>
            <li><a href="#">Live events</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">The Team</a></li>
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
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
