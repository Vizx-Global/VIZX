import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white w-full flex items-center justify-between px-4 py-2">
      {/* Left: Logo */}
      <Link to="/" className="flex items-center">
        <img
          src="/vizx.png"
          alt="VIZX Logo"
          className="h-10 w-auto"
        />
      </Link>

      {/* Right: Main Nav (with dropdowns) */}
      <nav>
        <ul className="flex items-center space-x-6">
          {/* SOLUTIONS DROPDOWN */}
          <li className="relative group">
            <Link to="/solutions" className="hover:text-orange-500 transition">
              Solutions
              <svg
                className="w-4 h-4 ml-1 inline-block text-gray-400 group-hover:text-orange-500 transition"
                viewBox="0 0 20 20"
              >
                <path d="M5.516 7.548a.75.75 0 0 1 1.06 0L10 10.97l3.425-3.424a.75.75 0 1 1 1.06 1.06l-3.954 3.954a.75.75 0 0 1-1.06 0L5.516 8.609a.75.75 0 0 1 0-1.06z" />
              </svg>
            </Link>
            {/* Dropdown Menu */}
            <ul
              className="
                absolute 
                left-0 
                top-full 
                mt-2 
                w-44 
                bg-black 
                rounded 
                shadow-lg 
                hidden 
                group-hover:flex 
                flex-col 
                z-50
              "
            >
              <li>
                <Link
                  to="/rpo"
                  className="px-4 py-2 hover:bg-gray-800 hover:text-orange-500 transition"
                >
                  RPO
                </Link>
              </li>
              <li>
                <Link
                  to="/data-entry"
                  className="px-4 py-2 hover:bg-gray-800 hover:text-orange-500 transition"
                >
                  Data Entry
                </Link>
              </li>
              <li>
                <Link
                  to="/digital-marketing"
                  className="px-4 py-2 hover:bg-gray-800 hover:text-orange-500 transition"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  to="/customer-support"
                  className="px-4 py-2 hover:bg-gray-800 hover:text-orange-500 transition"
                >
                  Customer Support
                </Link>
              </li>
              <li>
                <Link
                  to="/back-office"
                  className="px-4 py-2 hover:bg-gray-800 hover:text-orange-500 transition"
                >
                  Back Office
                </Link>
              </li>
            </ul>
          </li>

          {/* INDUSTRIES DROPDOWN */}
          <li className="relative group">
            <Link to="/industries" className="hover:text-orange-500 transition">
              Industries
              <svg
                className="w-4 h-4 ml-1 inline-block text-gray-400 group-hover:text-orange-500 transition"
                viewBox="0 0 20 20"
              >
                <path d="M5.516 7.548a.75.75 0 0 1 1.06 0L10 10.97l3.425-3.424a.75.75 0 1 1 1.06 1.06l-3.954 3.954a.75.75 0 0 1-1.06 0L5.516 8.609a.75.75 0 0 1 0-1.06z" />
              </svg>
            </Link>
            {/* Dropdown Menu */}
            <ul
              className="
                absolute 
                left-0 
                top-full 
                mt-2 
                w-44 
                bg-black 
                rounded 
                shadow-lg 
                hidden 
                group-hover:flex 
                flex-col 
                z-50
              "
            >
              <li>
                <Link
                  to="/industry/healthcare"
                  className="px-4 py-2 hover:bg-gray-800 hover:text-orange-500 transition"
                >
                  Healthcare
                </Link>
              </li>
              <li>
                <Link
                  to="/industry/technology"
                  className="px-4 py-2 hover:bg-gray-800 hover:text-orange-500 transition"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  to="/industry/finance"
                  className="px-4 py-2 hover:bg-gray-800 hover:text-orange-500 transition"
                >
                  Finance
                </Link>
              </li>
              <li>
                <Link
                  to="/industry/travel"
                  className="px-4 py-2 hover:bg-gray-800 hover:text-orange-500 transition"
                >
                  Travel
                </Link>
              </li>
              <li>
                <Link
                  to="/industry/real-estate"
                  className="px-4 py-2 hover:bg-gray-800 hover:text-orange-500 transition"
                >
                  Real Estate
                </Link>
              </li>
            </ul>
          </li>

          {/* Normal links */}
          <li>
            <Link to="/about" className="hover:text-orange-500 transition">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/why-kenya" className="hover:text-orange-500 transition">
              Why Kenya
            </Link>
          </li>
          <li>
            <Link to="/our-impact" className="hover:text-orange-500 transition">
              Our Impact
            </Link>
          </li>
          <li>
            <Link to="/vizx-hi" className="hover:text-orange-500 transition">
              Vizx HI
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="bg-orange-500 text-black hover:bg-orange-600 px-4 py-2 rounded-md transition"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
