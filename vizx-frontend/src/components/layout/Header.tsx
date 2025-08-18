import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobile = () => setMobileOpen((prev) => !prev);
  const closeMobile = () => setMobileOpen(false);

  // shared styles
  const linkBase =
    "px-2 py-2 text-gray-300 hover:text-orange-500 transition whitespace-nowrap text-sm";
  const dropParent = "relative group";
  const dropMenu =
    "absolute left-0 top-full mt-0 w-44 bg-black rounded shadow-lg hidden group-hover:flex flex-col z-50";
  const dropItem =
    "block w-full px-4 py-2 text-left text-sm hover:bg-gray-800 hover:text-orange-500 transition";

  return (
    <header
      className="
        fixed inset-x-0 top-0
        bg-black text-white opacity-90
        flex items-center justify-between
        px-4 py-1 z-50
      "
    >
      {/* Logo */}
      <Link to="/" className="flex-shrink-0">
        <img
          src="/images/vizx.png"
          alt="Vizx Global"
          className="h-8 w-auto"
        />
      </Link>

      {/* Desktop Nav + CTA */}
      <div className="hidden lg:flex items-center space-x-6 ml-auto">
        <nav>
          <ul className="flex items-center space-x-6">
            {/* Solutions */}
            <li className={dropParent}>
              <Link to="/solutions" className={linkBase}>
                Solutions{" "}
                <span className="ml-1 inline-block transform group-hover:rotate-180 transition">
                  ▼
                </span>
              </Link>
              <ul className={dropMenu}>
                <li>
                  <Link to="/rpo" className={dropItem}>
                    Recruitment Process Outsourcing
                  </Link>
                </li>
                <li>
                  <Link to="/contact-center" className={dropItem}>
                    CX Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/industry/real-estate" className={dropItem}>
                    Real Estate Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/merchant-services" className={dropItem}>
                    Merchant Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/back-office" className={dropItem}>
                    Back Office Solutions
                  </Link>
                </li>
              </ul>
            </li>

            {/* Industries */}
            <li className={dropParent}>
              <Link to="/industries" className={linkBase}>
                Industries{" "}
                <span className="ml-1 inline-block transform group-hover:rotate-180 transition">
                  ▼
                </span>
              </Link>
              <ul className={dropMenu}>
                <li>
                  <Link to="/industry/healthcare" className={dropItem}>
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link to="/industry/technology" className={dropItem}>
                    Technology
                  </Link>
                </li>
                <li>
                  <Link to="/industry/finance" className={dropItem}>
                    Finance
                  </Link>
                </li>
                <li>
                  <Link to="/industry/travel" className={dropItem}>
                    Travel
                  </Link>
                </li>
                <li>
                  <Link to="/industry/real-estate" className={dropItem}>
                    Real Estate
                  </Link>
                </li>
                <li>
                  <Link to="/industry/manufacturing" className={dropItem}>
                    Manufacturing
                  </Link>
                </li>
                <li>
                  <Link to="/industry/supply-chain" className={dropItem}>
                    Logistics & Supply Chain
                  </Link>
                </li>
                <li>
                  <Link to="/industry/retail" className={dropItem}>
                    Retail & E-Commerce
                  </Link>
                </li>
              </ul>
            </li>

            {/* Single links */}
            <li>
              <Link to="/vizx-hi" className={linkBase}>
                Vizx HI + AI
              </Link>
            </li>
            <li>
              <Link to="/why-kenya" className={linkBase}>
                Why Kenya
              </Link>
            </li>
            <li>
              <Link to="/our-impact" className={linkBase}>
                Our Impact
              </Link>
            </li>

            {/* About Us */}
            <li className={dropParent}>
              <Link to="/about" className={linkBase}>
                About Us{" "}
                <span className="ml-1 inline-block transform group-hover:rotate-180 transition">
                  ▼
                </span>
              </Link>
              <ul className={dropMenu}>
                <li>
                  <Link to="/employee-welfare" className={dropItem}>
                    Employee Welfare
                  </Link>
                </li>
                <li>
                  <Link to="/community-fund" className={dropItem}>
                    Vizx Community Fund
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        {/* Contact CTA */}
        <Link
          to="/contact"
          className="bg-orange-500 text-black px-4 py-2 rounded-md hover:bg-orange-600 transition whitespace-nowrap text-sm"
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={toggleMobile}
        className="lg:hidden ml-4 text-gray-300 focus:outline-none"
        aria-label="Toggle navigation"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
          />
        </svg>
      </button>

      {/* Mobile slide-in panel */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex">
          {/* overlay */}
          <div className="flex-1 bg-black bg-opacity-50" onClick={closeMobile} />

          {/* side panel */}
          <div className="w-64 bg-black p-4 overflow-y-auto">
            <button
              onClick={closeMobile}
              className="text-gray-300 mb-4 text-sm focus:outline-none"
            >
              ✕ Close
            </button>

            {/* Mobile nav items */}
            <nav className="space-y-2">
              <details className="group">
                <summary className="flex items-center justify-between text-white px-2 py-2 cursor-pointer">
                  Solutions
                  <span className="transform group-open:rotate-180 transition">▼</span>
                </summary>
                <ul className="pl-4 mt-1 space-y-1">
                  <li>
                    <Link to="/rpo" onClick={closeMobile} className="block text-gray-300 hover:text-orange-500">
                      Recruitment Process Outsourcing
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact-center" onClick={closeMobile} className="block text-gray-300 hover:text-orange-500">
                      CX Solutions
                    </Link>
                  </li>
                  <li>
                    <Link to="/industry/real-estate" onClick={closeMobile} className="block text-gray-300 hover:text-orange-500">
                      Real Estate Solutions
                    </Link>
                  </li>
                  <li>
                    <Link to="/merchant-services" onClick={closeMobile} className="block text-gray-300 hover:text-orange-500">
                      Merchant Solutions
                    </Link>
                  </li>
                  <li>
                    <Link to="/back-office" onClick={closeMobile} className="block text-gray-300 hover:text-orange-500">
                      Back Office Solutions
                    </Link>
                  </li>
                </ul>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between text-white px-2 py-2 cursor-pointer">
                  Industries
                  <span className="transform group-open:rotate-180 transition">▼</span>
                </summary>
                <ul className="pl-4 mt-1 space-y-1">
                  <li>
                    <Link to="/industry/healthcare" onClick={closeMobile} className="block text-gray-300 hover:text-orange-500">
                      Healthcare
                    </Link>
                  </li>
                  <li>
                    <Link to="/industry/technology" onClick={closeMobile} className="block text-gray-300 hover:text-orange-500">
                      Technology
                    </Link>
                  </li>
                  <li>
                    <Link to="/industry/finance" onClick={closeMobile} className="block text-gray-300 hover:text-orange-500">
                      Finance
                    </Link>
                  </li>
                  <li>
                    <Link to="/industry/travel" onClick={closeMobile} className="block text-gray-300 hover:text-orange-500">
                      Travel
                    </Link>
                  </li>
                  <li>
                    <Link to="/industry/real-estate" onClick={closeMobile} className="block text-gray-300 hover:text-orange-500">
                      Real Estate
                    </Link>
                  </li>
                  <li>
                    <Link to="/industry/manufacturing" onClick={closeMobile} className="block text-gray-300 hover:text-orange-500">
                      Manufacturing
                    </Link>
                  </li>
                  <li>
                    <Link to="/industry/supply-chain" onClick={closeMobile} className="block text-gray-300 hover:text-orange-500">
                      Logistics & Supply Chain
                    </Link>
                  </li>
                  <li>
                    <Link to="/industry/retail" onClick={closeMobile} className="block text-gray-300 hover:text-orange-500">
                      Retail & E-Commerce
                    </Link>
                  </li>
                </ul>
              </details>

              <Link to="/vizx-hi" onClick={closeMobile} className="block px-2 py-2 text-gray-300 hover:text-orange-500">
                Vizx HI + AI
              </Link>
              <Link to="/why-kenya" onClick={closeMobile} className="block px-2 py-2 text-gray-300 hover:text-orange-500">
                Why Kenya
              </Link>
              <Link to="/our-impact" onClick={closeMobile} className="block px-2 py-2 text-gray-300 hover:text-orange-500">
                Our Impact
              </Link>

              <details className="group">
                <summary className="flex items-center justify-between text-white px-2 py-2 cursor-pointer">
                  About Us
                  <span className="transform group-open:rotate-180 transition">▼</span>
                </summary>
                <ul className="pl-4 mt-1 space-y-1">
                  <li>
                    <Link to="/employee-welfare" onClick={closeMobile} className="block text-gray-300 hover:text-orange-500">
                      Employee Welfare
                    </Link>
                  </li>
                  <li>
                    <Link to="/community-fund" onClick={closeMobile} className="block text-gray-300 hover:text-orange-500">
                      Vizx Community Fund
                    </Link>
                  </li>
                </ul>
              </details>

              <Link
                to="/contact"
                onClick={closeMobile}
                className="block mt-4 bg-orange-500 text-black px-4 py-2 rounded-md text-center"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
