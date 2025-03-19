import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Simple accordion component for FAQs
const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-700 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex justify-between items-center focus:outline-none"
      >
        <span className="text-xl font-semibold text-white">{question}</span>
        <span className="text-orange-500 text-xl">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <p className="mt-2 text-gray-300 leading-relaxed">{answer}</p>}
    </div>
  );
};

const LogisticsSupplyChainIndustry: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/logistics-hero.jpg')" }}
        data-aos="fade-in"
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-orange-500 mb-4">
            Logistics & Supply Chain
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            WellTech Partners boosts top-notch technology, expert team and global network to revolutionize your logistics processes—ensuring efficiency and cost savings.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Start Now
            </a>
            <a
              href="/contact"
              className="bg-transparent border border-orange-500 hover:bg-orange-600 hover:text-black text-orange-500 font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Core Logistics & Supply Chain Solutions */}
      <section className="py-16 px-8 bg-gray-800" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-500 mb-6 text-center">
            Core Logistics & Supply Chain Solutions We Outsource
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-10 text-center">
            Logistics and supply chain outsourcing is increasingly popular among businesses aiming to streamline their operations. We’ve successfully collaborated with companies of all sizes, delivering customized solutions that enhance visibility, reduce costs, and improve supply chain performance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong>Supply Chain Management:</strong> End-to-end management of supply chain activities, including planning, inventory management, and distribution.</li>
              <li><strong>Transportation Management:</strong> Streamlined logistics, route optimization, and freight management solutions to improve delivery efficiency and reduce transit times.</li>
              <li><strong>Warehousing and Distribution:</strong> Efficient management of warehousing operations and distribution strategies to enhance responsiveness and reduce costs.</li>
            </ul>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong>Inventory Optimization:</strong> Advanced analytics and forecasting techniques to optimize inventory levels, reduce carrying costs, and minimize shortages.</li>
              <li><strong>Technology Integration:</strong> Implementation of cutting-edge technologies like AI to enhance supply chain visibility, traceability, and efficiency.</li>
            </ul>
          </div>
          <div className="text-center mt-8">
            <a
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* What You Stand to Benefit */}
      <section className="py-16 px-8" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-500 mb-6 text-center">
            What You Stand to Benefit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl text-orange-500 font-bold mb-2">Proven Track Record</h3>
              <p className="text-gray-300 leading-relaxed">
                We have a solid reputation for delivering tangible results and operational excellence in logistics and supply chain management.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl text-orange-500 font-bold mb-2">Global Reach</h3>
              <p className="text-gray-300 leading-relaxed">
                Through our network of strategic partners, we provide scalable solutions for businesses of all sizes, across diverse geographic locations.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl text-orange-500 font-bold mb-2">Industry Expertise</h3>
              <p className="text-gray-300 leading-relaxed">
                Our team comprises experienced logisticians and supply chain experts who excel in implementing best practices.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl text-orange-500 font-bold mb-2">Innovation</h3>
              <p className="text-gray-300 leading-relaxed">
                We stay at the forefront of industry trends, leveraging innovative solutions to drive continuous improvement and create competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics & Supply Chain Solutions Outsourced */}
      <section className="py-16 px-8 bg-gray-800" data-aos="fade-up">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-orange-500 mb-6">
            Logistics & Supply Chain Solutions Outsourced
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Request it. We’ll deliver it.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-black p-4 rounded-lg border border-gray-700">
              <h3 className="text-lg text-orange-500 font-bold mb-2">Transportation Management</h3>
              <p className="text-gray-300 text-sm">
                Carrier selection & management, route optimization, freight auditing, tracking shipments
              </p>
            </div>
            <div className="bg-black p-4 rounded-lg border border-gray-700">
              <h3 className="text-lg text-orange-500 font-bold mb-2">Warehousing & Distribution</h3>
              <p className="text-gray-300 text-sm">
                Inventory storage, order fulfillment, pick and pack services, returns management
              </p>
            </div>
            <div className="bg-black p-4 rounded-lg border border-gray-700">
              <h3 className="text-lg text-orange-500 font-bold mb-2">Freight Forwarding</h3>
              <p className="text-gray-300 text-sm">
                Customs clearance, documentation management, global coordination
              </p>
            </div>
            <div className="bg-black p-4 rounded-lg border border-gray-700">
              <h3 className="text-lg text-orange-500 font-bold mb-2">Supply Chain Consulting</h3>
              <p className="text-gray-300 text-sm">
                Network design & optimization, process improvement, technology integration
              </p>
            </div>
            <div className="bg-black p-4 rounded-lg border border-gray-700">
              <h3 className="text-lg text-orange-500 font-bold mb-2">Reverse Logistics</h3>
              <p className="text-gray-300 text-sm">
                Product returns processing, refurbishment & repackaging, disposal or recycling management
              </p>
            </div>
            <div className="bg-black p-4 rounded-lg border border-gray-700">
              <h3 className="text-lg text-orange-500 font-bold mb-2">Inventory Management</h3>
              <p className="text-gray-300 text-sm">
                Stock level optimization, cycle counting, reconciliation
              </p>
            </div>
            <div className="bg-black p-4 rounded-lg border border-gray-700">
              <h3 className="text-lg text-orange-500 font-bold mb-2">Procurement Services</h3>
              <p className="text-gray-300 text-sm">
                Supplier selection & negotiation, strategic sourcing
              </p>
            </div>
            <div className="bg-black p-4 rounded-lg border border-gray-700">
              <h3 className="text-lg text-orange-500 font-bold mb-2">Supply Chain Analytics</h3>
              <p className="text-gray-300 text-sm">
                Performance metrics tracking, data analysis & reporting, predictive analytics
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Start Today
            </a>
          </div>
        </div>
      </section>

      {/* Our Numbers */}
      <section className="py-16 px-8" data-aos="fade-up">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-orange-500 mb-6">
            Our Numbers Set Us Apart
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-8">
            <div>
              <p className="text-4xl font-bold text-orange-500">23</p>
              <p className="text-gray-300 mt-2">Years in BPO & RPO</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-orange-500">7</p>
              <p className="text-gray-300 mt-2">Years in Healthcare</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-orange-500">5,000+</p>
              <p className="text-gray-300 mt-2">Hires Placed Yearly</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-orange-500">55+</p>
              <p className="text-gray-300 mt-2">Clients Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-8 bg-gray-800" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-500 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8 text-center">
            We understand you may have questions about logistics & supply chain outsourcing. We’re here to help.
          </p>
          <FAQItem
            question="What are the main benefits of outsourcing logistics and supply chain services?"
            answer="Reduced costs, improved efficiency, global reach, and access to specialized expertise are key benefits."
          />
          <FAQItem
            question="How can outsourcing logistics services improve our company's efficiency?"
            answer="By streamlining processes, leveraging advanced technologies, and optimizing resource allocation, outsourcing can significantly reduce turnaround times."
          />
          <FAQItem
            question="What types of logistics and supply chain functions are commonly outsourced?"
            answer="Transportation management, warehousing, freight forwarding, inventory management, reverse logistics, and more."
          />
          <FAQItem
            question="What is the typical process for transitioning to outsourced logistics services?"
            answer="It includes assessing current needs, defining scope & SLAs, implementing secure data exchange, and ongoing communication and monitoring."
          />
          <FAQItem
            question="How do we measure the success of outsourced logistics services?"
            answer="Through KPIs like delivery times, cost savings, inventory turnover, and overall service-level performance."
          />
        </div>
      </section>
    </div>
  );
};

export default LogisticsSupplyChainIndustry;
