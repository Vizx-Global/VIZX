// src/components/layout/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const linkBase =
    "inline-block text-neutral-300 hover:text-orange-400 transition-colors leading-8";

  const middleLinks: Array<{ label: string; to?: string; href?: string }> = [
    { to: "/solutions", label: "Our Solutions" },
    { to: "/industries", label: "Industries" },
    { to: "/vizx-ai", label: "Vizx AI" },
    { to: "/why-kenya", label: "Why Kenya" },
    { href: "https://blogs.vizxglobal.com/", label: "Resources" },
    { to: "/vizx-hi", label: "Vizx HI+AI" },
    { to: "/community-fund", label: "Vizx Community Fund" },
    { href: "https://vizxglobal.bamboohr.com/careers", label: "Careers" },
    { to: "/our-impact", label: "Our Impact" },
    { to: "/privacy-and-security", label: "Privacy & Security" },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0b1b2b]" />
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="relative mx-auto max-w-screen-2xl px-6 lg:px-10 py-14 md:py-3 text-white">
        {/* Top: 3-column layout */}
        <div className="grid items-start gap-16 xl:gap-24 md:grid-cols-12">
          {/* LEFT: Certifications / badges */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold tracking-wider text-orange-400 mb-5 md:text-center xl:text-left">
              Certified &amp; Compliant
            </h3>

            <div className="space-y-5">
              <div className="rounded-xl border border-white/10 bg-white/5 p-5 flex items-center justify-center">
                <img
                  src="/images/SOC2.png"
                  alt="SOC 2 Certification"
                  className="h-20 w-auto filter grayscale opacity-80 transition hover:grayscale-0 hover:opacity-100"
                  loading="lazy"
                />
              </div>

              <a
                href="/docs/ODPC.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-white/10 bg-white/5 p-5 text-center group"
                title="ODPC Certificate (PDF)"
                aria-label="Open ODPC certificate PDF in a new tab"
              >
                <img
                  src="/images/ODPC.png"
                  alt="ODPC Certification"
                  className="mx-auto h-16 w-auto filter grayscale opacity-80 transition group-hover:grayscale-0 group-hover:opacity-100"
                  loading="lazy"
                />
              </a>
            </div>
          </div>

          {/* MIDDLE: Inline, evenly spaced links */}
          <div className="md:col-span-6">
            <h3 className="text-sm font-semibold tracking-wider text-orange-400 mb-5 text-center md:text-left">
              Have A Look Around
            </h3>

            <ul className="grid grid-cols-2 xl:grid-cols-2 gap-x-16 gap-y-0 justify-items-start">
              {middleLinks.map((item) => (
                <li key={item.label}>
                  {item.to ? (
                    <Link to={item.to} className={linkBase}>
                      {item.label}
                    </Link>
                  ) : (
                    <a href={item.href!} className={linkBase}>
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>


          </div>

          {/* RIGHT: CTA card */}
          <div className="md:col-span-3">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-7 md:p-8 shadow-xl">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20">
                <i className="fas fa-headset text-orange-400" aria-hidden="true" />
              </div>
              <h4 className="text-lg font-semibold text-center">
                Get a tailored plan for your team
              </h4>
              <p className="mt-2 text-sm text-center text-neutral-300">
                Tell us what you need. We’ll get back within 24 hours.
              </p>

              <Link
                to="/contact"
                className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-orange-500 px-5 py-2.5 font-semibold text-white transition hover:-translate-y-[1px]"
              >
                Request a Callback
              </Link>

              <p className="mt-3 text-center text-xs text-neutral-400">
               Quick discovery call.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10" />

        {/* Bottom row: level across (left/center/right) */}
        <div className="pt-5">
          <div className="flex flex-col md:grid md:grid-cols-3 md:items-center gap-3">
            {/* Left */}
            <p className="text-[13px] text-neutral-300 text-center md:text-left">
              © 2025 VIZX Global. All rights reserved.
            </p>

            {/* Center (Follow us) */}
            <div className="flex items-center justify-center gap-4 text-[14px]">
              <span className="text-neutral-300">Follow us:</span>
              <a
                href="https://www.facebook.com/VIZXInternational/"
                className="hover:text-orange-400 transition-colors"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                href="https://twitter.com/VIZXKe/"
                className="hover:text-orange-400 transition-colors"
                aria-label="Twitter / X"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                href="https://www.instagram.com/vizxinternational/?hl=en"
                className="hover:text-orange-400 transition-colors"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                href="https://ke.linkedin.com/company/vizx-international"
                className="hover:text-orange-400 transition-colors"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in" />
              </a>
            </div>

            {/* Right */}
            <div className="flex items-center justify-center md:justify-end gap-6 text-[13px] text-neutral-400">
              <Link to="/privacy-and-security" className="hover:text-orange-400">
                Privacy &amp; Security
              </Link>
              <Link to="/about" className="hover:text-orange-400">
                About
              </Link>
              <Link to="/contact" className="hover:text-orange-400">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
