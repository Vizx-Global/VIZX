import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BackOffice: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-black text-white w-full min-h-screen font-sans">
      {/* HERO SECTION */}
      <section
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/backoffice-hero.jpg')" }}
        data-aos="fade-in"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-orange-500">BACK-OFFICE SOLUTIONS</h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-black">
            Empowering Your Business with Operational Precision
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-white">
            VizX Global’s back-office BPO services are designed to support scalability, compliance, and efficiency—freeing your internal teams to focus on growth and innovation.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block bg-black text-white hover:text-white hover:bg-gray-800 font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Talk to Our Specialists
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="px-8 py-16 bg-gray-900" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">Comprehensive Back-Office Services</h3>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Our portfolio of services is crafted to enhance your non-customer-facing functions, reduce overhead, and deliver measurable results across operations.
          </p>
          <ul className="list-disc text-gray-300 space-y-6 text-lg">
            <li>
              <strong className="text-white">Data Entry & Data Management:</strong> Clean, accurate, and structured data is the backbone of informed decisions. We handle everything from CRM inputs to legacy data digitization.
            </li>
            <li>
              <strong className="text-white">Invoice & Billing Processing:</strong> Minimize payment delays and maximize cash flow accuracy with automated invoice matching, validation, and reconciliation.
            </li>
            <li>
              <strong className="text-white">Document Management & Digitization:</strong> We help companies reduce physical storage, retrieve documents swiftly, and maintain regulatory standards through secure digital archives.
            </li>
            <li>
              <strong className="text-white">HR & Payroll Support:</strong> From new hire processing to benefits and compliance, we streamline complex HR tasks for accuracy, transparency, and confidentiality.
            </li>
            <li>
              <strong className="text-white">Procurement & Vendor Management:</strong> Our teams oversee supplier communications, PO processing, and spend analysis to keep your supply chain agile and efficient.
            </li>
            <li>
              <strong className="text-white">Reporting & Analytics:</strong> Custom dashboards and scheduled reports provide operational clarity and guide smarter strategy at every level.
            </li>
          </ul>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Discover Our Service Suite
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE VIZX */}
      <section className="px-8 py-16" data-aos="fade-up">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
              Why Companies Choose VizX for Back-Office BPO
            </h3>
            <ul className="list-disc list-inside text-gray-200 space-y-3 text-lg">
              <li>
                <strong className="text-white">Expertise at Scale:</strong> We manage high-volume tasks for global clients, ensuring consistency and speed regardless of complexity.
              </li>
              <li>
                <strong className="text-white">Process Optimization:</strong> Every process we take on is analyzed, documented, and refined to ensure maximum efficiency.
              </li>
              <li>
                <strong className="text-white">Technology Integration:</strong> Whether you use SAP, Oracle, Salesforce, or QuickBooks—we integrate smoothly with your stack.
              </li>
              <li>
                <strong className="text-white">Data Security & Compliance:</strong> We meet ISO, GDPR, and HIPAA standards, keeping sensitive data protected through layered security and staff training.
              </li>
              <li>
                <strong className="text-white">Round-the-Clock Support:</strong> With teams in multiple time zones, we offer continuous service, even during peak loads or holidays.
              </li>
            </ul>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors"
              >
                Experience the VizX Advantage
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/images/backoffice-collaboration.jpg"
              alt="Team collaborating on operations"
              className="rounded-md shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* INDUSTRY APPLICATIONS */}
      <section className="px-8 py-16 bg-gray-900" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
            Industry Applications
          </h3>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Our back-office solutions span multiple industries—each with its own regulatory environment and process challenges. Here's how we deliver value across sectors:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-4 text-lg">
            <li>
              <strong className="text-white">Healthcare:</strong> HIPAA-compliant patient data management and insurance billing.
            </li>
            <li>
              <strong className="text-white">E-commerce & Retail:</strong> Inventory data updates, returns processing, and invoice management.
            </li>
            <li>
              <strong className="text-white">Finance:</strong> Transactional processing, compliance support, and financial reporting.
            </li>
            <li>
              <strong className="text-white">Telecom:</strong> Customer data updates, contract digitization, and payment validation.
            </li>
            <li>
              <strong className="text-white">Logistics:</strong> Vendor onboarding, delivery records management, and customs documentation.
            </li>
          </ul>
          <div className="mt-8 text-center">
            <a
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors"
            >
              See How We Can Help Your Industry
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-8 py-16" data-aos="fade-up">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
            Unlock Operational Excellence with VizX Global
          </h3>
          <p className="text-xl text-gray-200 leading-relaxed mb-6">
            With decades of experience, cutting-edge technology, and a global team, VizX is your partner for building efficient, resilient operations. Let us transform your back office into a powerhouse of productivity.
          </p>
          <a
            href="/contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors"
          >
            Let's Optimize Your Workflow
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black px-8 py-6 border-t border-gray-800">
        <p className="text-sm text-gray-400 text-center">
          &copy; {new Date().getFullYear()} VizX Global Solutions. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default BackOffice;
