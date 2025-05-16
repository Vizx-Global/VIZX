import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PrivacyAndSecurity: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-black text-white w-full min-h-screen font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] flex items-center justify-start bg-cover bg-center px-8"
        style={{ backgroundImage: "url('/images/security-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-6xl md:text-7xl font-bold text-orange-500 leading-tight mb-4"
          >
           Data Privacy & Security
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-200 mt-6 max-w-4xl leading-relaxed"
          >
            Committed to safeguarding your data and upholding top-tier security standards.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="px-8 py-24 space-y-32">
        <section data-aos="fade-up" className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-orange-500 mb-6">Data Privacy Commitment</h2>
          <ul className="list-disc pl-6 space-y-4 text-xl text-gray-200">
            <li>Full compliance with U.S. regulations including the CCPA and other state-specific mandates.</li>
            <li>User data is collected only with consent and used strictly for agreed-upon purposes.</li>
            <li>Users may request access to, correction of, or deletion of their personal information.</li>
            <li>We do not sell or lease user information to any third-party entities.</li>
          </ul>
        </section>

        <section data-aos="fade-up" className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-orange-500 mb-6">Security Protocols</h2>
          <ul className="list-disc pl-6 space-y-4 text-xl text-gray-200">
            <li>End-to-end encryption to safeguard data in transit and at rest.</li>
            <li>Multi-factor authentication (MFA) enforced for all sensitive platform access.</li>
            <li>Quarterly penetration testing and ongoing threat detection monitoring.</li>
            <li>Data hosted in secure, U.S.-based facilities meeting SOC 2 Type II standards.</li>
          </ul>
        </section>

        <section data-aos="fade-up" className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-orange-500 mb-6">Third-Party Integrations</h2>
          <p className="text-xl text-gray-200 leading-relaxed">
            We thoroughly vet all third-party services to ensure compliance with our privacy and security policies.
            Data sharing is minimal and monitored through robust contractual and technical safeguards.
          </p>
        </section>

        <section data-aos="fade-up" className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-orange-500 mb-6">Contact & Requests</h2>
          <p className="text-xl text-gray-200 leading-relaxed mb-6">
            For privacy-related inquiries, opt-out requests, or to report any issues:
          </p>
          <a
            href="mailto:derrick@vizxglobal.com"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors"
          >
            Contact Our Data Protection Officer
          </a>
        </section>

        <section data-aos="fade-up" className="max-w-5xl mx-auto">
  <h2 className="text-2xl font-bold text-orange-500 mb-6">View Our Data Processor Certification</h2>
  <a
    href="/docs/privacy-policy.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors"
  >
    View PDF
  </a>
</section>

      </div>

 
    </div>
  );
};

export default PrivacyAndSecurity;
