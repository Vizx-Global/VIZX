import React, { useState } from "react";
import { Link } from "react-router-dom";

/* --------------------------------- Data --------------------------------- */
type MenuItem = { label: string; to: string; blurb: string; external?: boolean };

const SOLUTIONS: MenuItem[] = [
  {
    label: "Recruitment Process Outsourcing",
    to: "/rpo",
    blurb:
      "End-to-end talent acquisition—from sourcing to onboarding—delivered at speed and scale.",
  },
  {
    label: "CX Solutions",
    to: "/contact-center",
    blurb:
      "Omnichannel customer support that improves CSAT, reduces AHT, and protects your brand.",
  },
  {
    label: "Real Estate Solutions",
    to: "/industry/real-estate",
    blurb:
      "Leasing support, lead qualifying, appointment setting, and back-office help for property teams.",
  },
  {
    label: "Merchant Solutions",
    to: "/merchant-services",
    blurb:
      "Payments support across onboarding, KYC, chargeback handling, and merchant care.",
  },
  {
    label: "Back Office Solutions",
    to: "/back-office",
    blurb:
      "Data processing, finance ops, content moderation, and admin tasks—accurate and reliable.",
  },
];

const INDUSTRIES: MenuItem[] = [
  {
    label: "Healthcare",
    to: "/industry/healthcare",
    blurb:
      "Member support, claims processing, and care coordination with compliance top of mind.",
  },
  {
    label: "Technology",
    to: "/industry/technology",
    blurb:
      "Product support, trust & safety, and scalable ops for SaaS, fintech, and marketplaces.",
  },
  {
    label: "Finance",
    to: "/industry/finance",
    blurb:
      "Customer care, KYC/KYB, collections, and risk ops for banks and fintechs.",
  },
  {
    label: "Travel",
    to: "/industry/travel",
    blurb:
      "24/7 bookings, changes, and itinerary support that keeps travelers moving.",
  },
  {
    label: "Real Estate",
    to: "/industry/real-estate",
    blurb:
      "Inside sales, leasing coordination, listings, and property management support.",
  },
  {
    label: "Manufacturing",
    to: "/industry/manufacturing",
    blurb:
      "Order management, production support, supplier coordination, and quality ops.",
  },
  {
    label: "Logistics & Supply Chain",
    to: "/industry/supply-chain",
    blurb:
      "Shipment tracking, exception handling, and back-office ops for smooth deliveries.",
  },
  {
    label: "Retail & E-Commerce",
    to: "/industry/retail",
    blurb:
      "Pre/​post-purchase support, returns processing, and marketplace operations.",
  },
];

const ABOUT: MenuItem[] = [
  {
    label: "Employee Welfare",
    to: "/employee-welfare",
    blurb: "How we support, upskill, and grow our people.",
  },
  {
    label: "Vizx Community Fund",
    to: "/community-fund",
    blurb: "Investing in education, access, and opportunity in our communities.",
  },
  {
    label: "Blogs",
    to: "https://blogs.vizxglobal.com/",
    blurb: "Insights, stories, and case studies from the Vizx team.",
    external: true,
  },
];

/* ------------------------------- Component ------------------------------ */
const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobile = () => setMobileOpen((prev) => !prev);
  const closeMobile = () => setMobileOpen(false);

  // shared styles
  const linkBase =
    "px-2 py-2 text-gray-300 hover:text-orange-500 transition whitespace-nowrap text-sm";

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
        <img src="/images/vizx.png" alt="Vizx Global" className="h-8 w-auto" />
      </Link>

      {/* Desktop Nav + CTA */}
      <div className="hidden lg:flex items-center space-x-6 ml-auto">
        <nav>
          <ul className="flex items-center space-x-6">
            {/* Solutions (MEGA MENU) */}
            <li className="relative">
              <MegaMenu
                label="Solutions"
                items={SOLUTIONS}
                viewAll={{ label: "View all Solutions", to: "/solutions" }}
              />
            </li>

            {/* Industries (MEGA MENU) */}
            <li className="relative">
              <MegaMenu
                label="Industries"
                items={INDUSTRIES}
                viewAll={{ label: "View all Industries", to: "/industries" }}
              />
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

            {/* About Us (MEGA MENU) */}
            <li className="relative">
              <MegaMenu
                label="About Us"
                items={ABOUT}
                viewAll={{ label: "Learn more about VizX", to: "/about" }}
                align="right"
              />
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

      {/* Mobile slide-in panel (unchanged) */}
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
                  {SOLUTIONS.map((s) => (
                    <li key={s.to}>
                      <Link
                        to={s.to}
                        onClick={closeMobile}
                        className="block text-gray-300 hover:text-orange-500"
                      >
                        <div className="font-medium">{s.label}</div>
                        <div className="text-xs text-gray-400 mt-0.5">
                          {s.blurb}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between text-white px-2 py-2 cursor-pointer">
                  Industries
                  <span className="transform group-open:rotate-180 transition">▼</span>
                </summary>
                <ul className="pl-4 mt-1 space-y-1">
                  {INDUSTRIES.map((i) => (
                    <li key={i.to}>
                      <Link
                        to={i.to}
                        onClick={closeMobile}
                        className="block text-gray-300 hover:text-orange-500"
                      >
                        <div className="font-medium">{i.label}</div>
                        <div className="text-xs text-gray-400 mt-0.5">
                          {i.blurb}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>

              <Link
                to="/vizx-hi"
                onClick={closeMobile}
                className="block px-2 py-2 text-gray-300 hover:text-orange-500"
              >
                Vizx HI + AI
              </Link>
              <Link
                to="/why-kenya"
                onClick={closeMobile}
                className="block px-2 py-2 text-gray-300 hover:text-orange-500"
              >
                Why Kenya
              </Link>
              <Link
                to="/our-impact"
                onClick={closeMobile}
                className="block px-2 py-2 text-gray-300 hover:text-orange-500"
              >
                Our Impact
              </Link>

              <details className="group">
                <summary className="flex items-center justify-between text-white px-2 py-2 cursor-pointer">
                  About Us
                  <span className="transform group-open:rotate-180 transition">▼</span>
                </summary>
                <ul className="pl-4 mt-1 space-y-1">
                  <li>
                    <Link
                      to="/employee-welfare"
                      onClick={closeMobile}
                      className="block text-gray-300 hover:text-orange-500"
                    >
                      Employee Welfare
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/community-fund"
                      onClick={closeMobile}
                      className="block text-gray-300 hover:text-orange-500"
                    >
                      Vizx Community Fund
                    </Link>
                  </li>
                  {/* Optional: show Blogs in mobile too */}
                  <li>
                    <a
                      href="https://blogs.vizxglobal.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-gray-300 hover:text-orange-500"
                      onClick={closeMobile}
                    >
                      Blogs
                    </a>
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

/* ---------------------------- MegaMenu UI ---------------------------- */
function MegaMenu({
  label,
  items,
  viewAll,
  align = "left",
}: {
  label: string;
  items: MenuItem[];
  viewAll?: { label: string; to: string };
  align?: "left" | "right";
}) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(0);
  const isRight = align === "right";

  return (
    <div
      className="group relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger acts as a button; prevent nav so menu can open */}
      <Link
        to="/"
        onClick={(e) => e.preventDefault()}
        className="px-2 py-2 text-gray-300 hover:text-orange-500 transition whitespace-nowrap text-sm inline-flex items-center"
        aria-haspopup="true"
        aria-expanded={open}
      >
        {label}
        <span className="ml-1 inline-block transform group-hover:rotate-180 transition">
          ▼
        </span>
      </Link>

      {/* Panel (right-aligned when align='right') */}
      <div
        className={`absolute ${isRight ? "right-0 origin-top-right" : "left-0 origin-top-left"} top-full pt-2
                    opacity-0 translate-y-1 pointer-events-none
                    group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition`}
      >
        <div className="w-[720px] max-w-[90vw] overflow-hidden rounded-2xl ring-1 ring-white/10 bg-neutral-900/95 shadow-2xl backdrop-blur-sm">
          <div className={isRight ? "flex flex-row-reverse" : "flex"}>
            {/* Items grid */}
            <ul className="grid grid-cols-2 gap-1 p-2 flex-1 min-w-0">
              {items.map((it, i) => {
                const Inner = (it as any).external ? "a" : Link;
                const innerProps = (it as any).external
                  ? { href: it.to, target: "_blank", rel: "noopener noreferrer" }
                  : { to: it.to };

                return (
                  <li key={it.to}>
                    <Inner
                      {...(innerProps as any)}
                      className="group/item block rounded-xl px-4 py-3 text-sm text-gray-200 hover:bg-white/5 focus:bg-white/5 focus:outline-none"
                      onMouseEnter={() => setHovered(i)}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <span className="font-medium leading-5">{it.label}</span>
                        <span className="opacity-0 group-hover/item:opacity-100 transition" aria-hidden="true">
                          →
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-gray-400 hidden md:block">
                        {it.blurb}
                      </p>
                    </Inner>
                  </li>
                );
              })}
              {viewAll && (
                <li className="col-span-2">
                  <Link
                    to={viewAll.to}
                    className="mt-1 block rounded-xl border border-white/10 px-4 py-2.5 text-center text-sm text-gray-200 hover:bg-white/5"
                  >
                    {viewAll.label}
                  </Link>
                </li>
              )}
            </ul>

            {/* Hover preview (on the inside edge) */}
            <div
              className={
                "hidden md:block w-64 p-4 " +
                (isRight ? "border-r border-white/10" : "border-l border-white/10")
              }
            >
              <div className="text-xs uppercase tracking-wide text-gray-400">{label}</div>
              <div className="mt-2 text-sm text-gray-200 font-medium leading-5">
                {items[hovered]?.blurb}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
