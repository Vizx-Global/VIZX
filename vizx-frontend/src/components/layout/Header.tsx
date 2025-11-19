import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/* ---------- Types ---------- */
type MenuItem = { label: string; to: string; blurb: string; external?: boolean };

/* ---------- Data ---------- */
const SOLUTIONS: MenuItem[] = [
  { label: "Recruitment Process Outsourcing", to: "/rpo", blurb: "End-to-end talent acquisition—from sourcing to onboarding—delivered at speed and scale." },
  { label: "CX Solutions", to: "/contact-center", blurb: "Omnichannel customer support that improves CSAT, reduces AHT, and protects your brand." },
  { label: "Real Estate Solutions", to: "/industry/real-estate", blurb: "Leasing support, lead qualifying, appointment setting, and back-office help for property teams." },
  { label: "Merchant Solutions", to: "/merchant-services", blurb: "Payments support across onboarding, KYC, chargeback handling, and merchant care." },
  { label: "Back Office Solutions", to: "/back-office", blurb: "Data processing, finance ops, content moderation, and admin tasks—accurate and reliable." },
];

const INDUSTRIES: MenuItem[] = [
  { label: "Healthcare", to: "/industry/healthcare", blurb: "Member support, claims processing, and care coordination with compliance top of mind." },
  { label: "Technology", to: "/industry/technology", blurb: "Product support, trust & safety, and scalable ops for SaaS, fintech, and marketplaces." },
  { label: "Finance", to: "/industry/finance", blurb: "Customer care, KYC/KYB, collections, and risk ops for banks and fintechs." },
  { label: "Travel", to: "/industry/travel", blurb: "24/7 bookings, changes, and itinerary support that keeps travelers moving." },
  { label: "Real Estate", to: "/industry/real-estate", blurb: "Inside sales, leasing coordination, listings, and property management support." },
  { label: "Manufacturing", to: "/industry/manufacturing", blurb: "Order management, production support, supplier coordination, and quality ops." },
  { label: "Logistics & Supply Chain", to: "/industry/supply-chain", blurb: "Shipment tracking, exception handling, and back-office ops for smooth deliveries." },
  { label: "Retail & E-Commerce", to: "/industry/retail", blurb: "Pre/post-purchase support, returns processing, and marketplace operations." },
];

const ABOUT: MenuItem[] = [
  { label: "Employee Welfare", to: "/employee-welfare", blurb: "How we support, upskill, and grow our people." },
  { label: "Vizx Community Fund", to: "/community-fund", blurb: "Investing in education, access, and opportunity in our communities." },
  { label: "Blogs", to: "https://blogs.vizxglobal.com/", blurb: "Insights, stories, and case studies from the Vizx team.", external: true },
];

/* ---------- Header Component ---------- */
const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleMobile = () => setMobileOpen((p) => !p);
  const closeMobile = () => setMobileOpen(false);
  const toggleSubmenu = (menu: string) =>
    setOpenSubmenu((prev) => (prev === menu ? null : menu));

  // Close menu on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeMobile();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-[80] bg-transparent">
      {/* Desktop Nav */}
      <div className="pointer-events-none w-full px-3 sm:px-4">
        <div className="pointer-events-auto w-full">
          <div
            className="ember-bar w-full grid grid-cols-[auto_1fr_auto] items-center rounded-full px-4 md:px-6 py-2
                       bg-white/5 backdrop-blur-xl ring-1 ring-white/10 shadow-lg"
            style={{
              ["--ember-alpha" as any]: 0.5,
              ["--ember-height" as any]: "2.5%",
              ["--ember-edge" as any]: 0.7,
            }}
          >
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img src="/images/vizx.png" alt="Vizx Global" className="h-7 w-auto" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:block justify-self-end">
              <nav>
                <ul className="flex items-center justify-end gap-8 xl:gap-10 pr-0 md:pr-2">
                  <li><MegaMenu label="Solutions" items={SOLUTIONS} viewAll={{ label: "View all Solutions", to: "/solutions" }} align="left" /></li>
                  <li><MegaMenu label="Industries" items={INDUSTRIES} viewAll={{ label: "View all Industries", to: "/industries" }} align="right" /></li>
                  <li><Link to="/vizx-hi" className="py-2 text-gray-200 hover:text-orange-600 text-sm">Vizx HI + AI</Link></li>
                  <li><Link to="/why-kenya" className="py-2 text-gray-200 hover:text-orange-600 text-sm">Why Kenya</Link></li>
                  <li><MegaMenu label="About Us" items={ABOUT} viewAll={{ label: "Learn more about VizX", to: "/about" }} align="right" /></li>
                </ul>
              </nav>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center justify-end ml-4 md:ml-6">
              <Link to="/contact" className="inline-flex items-center rounded-full bg-white text-black text-sm font-medium px-5 py-2 hover:bg-white/90 transition">
                CONTACT US
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={toggleMobile}
              className="lg:hidden col-start-3 justify-self-end text-gray-200 hover:text-white/90"
              aria-label="Toggle navigation"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ---------------- Mobile Drawer ---------------- */}
      {mobileOpen && (
        <>
          <button
            aria-label="Close menu"
            onClick={closeMobile}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] md:hidden"
          />
          <nav
            className={`fixed top-0 right-0 h-full w-80 max-w-[85%] bg-neutral-900 text-white z-[100] md:hidden shadow-2xl transition-transform duration-300 ${
              mobileOpen ? "translate-x-0" : "translate-x-full"
            }`}
            aria-label="Mobile navigation"
          >
            {/* Header */}
            <div className="p-4 flex items-center justify-between border-b border-white/10">
              <Link to="/" onClick={closeMobile}>
                <img src="/images/vizx.png" alt="Vizx Global" className="h-6 w-auto" />
              </Link>
              <button onClick={closeMobile} aria-label="Close" className="p-2 rounded hover:bg-white/10">✕</button>
            </div>

            {/* Menu Items */}
            <ul className="px-4 pb-6 space-y-1 overflow-y-auto">
              {/* Solutions Submenu */}
              <li>
                <button
                  onClick={() => toggleSubmenu("solutions")}
                  className="w-full flex justify-between items-center px-3 py-2 rounded hover:bg-white/10"
                >
                  <span>Solutions</span>
                  <span>{openSubmenu === "solutions" ? "−" : "+"}</span>
                </button>
                {openSubmenu === "solutions" && (
                  <ul className="ml-3 mt-1 space-y-1 border-l border-white/10 pl-3 text-sm">
                    {SOLUTIONS.map((it) => (
                      <li key={it.to}>
                        <Link
                          to={it.to}
                          onClick={closeMobile}
                          className="block py-1.5 hover:text-orange-400"
                        >
                          {it.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Industries Submenu */}
              <li>
                <button
                  onClick={() => toggleSubmenu("industries")}
                  className="w-full flex justify-between items-center px-3 py-2 rounded hover:bg-white/10"
                >
                  <span>Industries</span>
                  <span>{openSubmenu === "industries" ? "−" : "+"}</span>
                </button>
                {openSubmenu === "industries" && (
                  <ul className="ml-3 mt-1 space-y-1 border-l border-white/10 pl-3 text-sm">
                    {INDUSTRIES.map((it) => (
                      <li key={it.to}>
                        <Link
                          to={it.to}
                          onClick={closeMobile}
                          className="block py-1.5 hover:text-orange-400"
                        >
                          {it.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li>
                <Link to="/vizx-hi" onClick={closeMobile} className="block px-3 py-2 rounded hover:bg-white/10">
                  Vizx HI + AI
                </Link>
              </li>
              <li>
                <Link to="/why-kenya" onClick={closeMobile} className="block px-3 py-2 rounded hover:bg-white/10">
                  Why Kenya
                </Link>
              </li>

              {/* About Us Submenu */}
              <li>
                <button
                  onClick={() => toggleSubmenu("about")}
                  className="w-full flex justify-between items-center px-3 py-2 rounded hover:bg-white/10"
                >
                  <span>About Us</span>
                  <span>{openSubmenu === "about" ? "−" : "+"}</span>
                </button>
                {openSubmenu === "about" && (
                  <ul className="ml-3 mt-1 space-y-1 border-l border-white/10 pl-3 text-sm">
                    {ABOUT.map((it) => (
                      <li key={it.to}>
                        {it.external ? (
                          <a
                            href={it.to}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block py-1.5 hover:text-orange-400"
                          >
                            {it.label}
                          </a>
                        ) : (
                          <Link
                            to={it.to}
                            onClick={closeMobile}
                            className="block py-1.5 hover:text-orange-400"
                          >
                            {it.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li>
                <Link
                  to="/contact"
                  onClick={closeMobile}
                  className="block px-3 py-2 rounded bg-white text-black font-medium mt-2"
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;

/* ---------- MegaMenu (Desktop only) ---------- */
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
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        className="py-2 text-gray-200 hover:text-white/90 transition text-sm inline-flex items-center"
      >
        {label}
        <span className="ml-1 inline-block transform group-hover:rotate-180 transition">▼</span>
      </a>

      <div
        className={`absolute ${isRight ? "right-0 origin-top-right" : "left-0 origin-top-left"} top-full pt-2
                    opacity-0 translate-y-1 pointer-events-none
                    group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition`}
      >
        <div className="w-[720px] max-w-[90vw] overflow-hidden rounded-2xl ring-1 ring-white/10 bg-neutral-900/95 shadow-2xl backdrop-blur-sm">
          <div className={isRight ? "flex flex-row-reverse" : "flex"}>
            <ul className="grid grid-cols-2 gap-1 p-2 flex-1 min-w-0">
              {items.map((it, i) => {
                const Inner = it.external ? "a" : Link;
                const props = it.external
                  ? { href: it.to, target: "_blank", rel: "noopener noreferrer" }
                  : { to: it.to };

                return (
                  <li key={it.to}>
                    <Inner
                      {...(props as any)}
                      className="group/item block rounded-xl px-4 py-3 text-sm text-gray-200 hover:bg-white/5"
                      onMouseEnter={() => setHovered(i)}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <span className="font-medium leading-5">{it.label}</span>
                        <span className="opacity-0 group-hover/item:opacity-100 transition">→</span>
                      </div>
                      <p className="mt-1 text-xs text-gray-400 hidden md:block">{it.blurb}</p>
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

            <div className={"hidden md:block w-64 p-4 " + (isRight ? "border-r border-white/10" : "border-l border-white/10")}>
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
