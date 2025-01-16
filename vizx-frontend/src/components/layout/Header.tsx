import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <Link to="/" className="logo">
                <img src="/vizx.png" alt="VIZX Logo" />
            </Link>
            <nav>
                <ul>
                    <li><Link to="/solutions">Solutions</Link></li>
                    <li><Link to="/industries">Industries</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact" className="contact-button">Contact Us</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
