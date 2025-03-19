import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// A simple accordion component for FAQs
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

const ManufacturingIndustry: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/manufacturing-hero.jpg')" }}
        data-aos="fade-in"
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-orange-500 mb-4">
            Manufacturing Industry
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            We offer Manufacturing BPO services to cut costs and improve your business’s overall operational efficiency.
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

      {/* We Outsource Manufacturing Back Office Services */}
      <section className="py-16 px-8 bg-gray-800" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-500 mb-6 text-center">
            We Outsource Manufacturing Back Office Services
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-10 text-center">
            The manufacturing sector forms a large part of the global economy and hence revenue.
            With increasing competition, manufacturers invest in serving their market better through
            dynamic infrastructure, a streamlined supply chain, and innovative technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Accounting Services</li>
              <li>Data Management</li>
              <li>Sales Analysis</li>
              <li>Logistics and Shipping</li>
            </ul>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Analytics Solutions</li>
              <li>Technical Services</li>
              <li>Legal Support</li>
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

      {/* What You Stand to Gain with VIZX */}
      <section className="py-16 px-8" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-500 mb-6 text-center">
            What You Stand to Gain with VIZX
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8 text-center">
            From accounting to data management, we’ll adeptly manage your back-office activities and help you with 
            insight-led business decisions that will increase your operational efficiency and profits.
          </p>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-gray-300 space-y-3">
              <ul className="list-none">
                <li className="flex items-center mb-2">
                  <span className="text-orange-500 mr-2">➤</span> Reduced overall costs
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-orange-500 mr-2">➤</span> Increased efficiency and accuracy
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-orange-500 mr-2">➤</span> Quick turnaround
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-orange-500 mr-2">➤</span> Access to global talent
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-orange-500 mr-2">➤</span> Improved production quality
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-orange-500 mr-2">➤</span> Improved supply chain management
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-orange-500 mr-2">➤</span> Better inventory control
                </li>
              </ul>
              <a
                href="/contact"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors mt-4"
              >
                Learn More
              </a>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8 flex justify-center">
              <img
                src="/images/manufacturing-plant.jpg"
                alt="Manufacturing Plant"
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Common Back-Office Operations Outsourced */}
      <section className="py-16 px-8 bg-gray-800" data-aos="fade-up">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-orange-500 mb-6">
            Common Back-Office Operations Outsourced
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            You need it, we will deliver it.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-black p-4 rounded-lg border border-gray-700">
              <h3 className="text-lg text-orange-500 font-bold mb-2">Accounting and Finance</h3>
              <p className="text-gray-300 text-sm">
                Bookkeeping, payroll, financial analysis, reporting, and planning
              </p>
            </div>
            <div className="bg-black p-4 rounded-lg border border-gray-700">
              <h3 className="text-lg text-orange-500 font-bold mb-2">Human Resources</h3>
              <p className="text-gray-300 text-sm">
                Benefits administration, employee training, talent acquisition
              </p>
            </div>
            <div className="bg-black p-4 rounded-lg border border-gray-700">
              <h3 className="text-lg text-orange-500 font-bold mb-2">IT Support</h3>
              <p className="text-gray-300 text-sm">
                Network management, helpdesk, cybersecurity, data backup & recovery
              </p>
            </div>
            <div className="bg-black p-4 rounded-lg border border-gray-700">
              <h3 className="text-lg text-orange-500 font-bold mb-2">Supply Chain Management</h3>
              <p className="text-gray-300 text-sm">
                Procurement support, vendor management, inventory tracking
              </p>
            </div>
            <div className="bg-black p-4 rounded-lg border border-gray-700">
              <h3 className="text-lg text-orange-500 font-bold mb-2">Software Development</h3>
              <p className="text-gray-300 text-sm">
                Web, mobile app dev, custom software solutions
              </p>
            </div>
            <div className="bg-black p-4 rounded-lg border border-gray-700">
              <h3 className="text-lg text-orange-500 font-bold mb-2">Data Entry and Management</h3>
              <p className="text-gray-300 text-sm">
                Production data entry, quality control, data processing
              </p>
            </div>
            <div className="bg-black p-4 rounded-lg border border-gray-700">
              <h3 className="text-lg text-orange-500 font-bold mb-2">Research and Analysis</h3>
              <p className="text-gray-300 text-sm">
                Market research, competitor analysis
              </p>
            </div>
            <div className="bg-black p-4 rounded-lg border border-gray-700">
              <h3 className="text-lg text-orange-500 font-bold mb-2">IT Consulting</h3>
              <p className="text-gray-300 text-sm">
                Technology roadmap, digital transformation consulting
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
              <p className="text-gray-300 mt-2">Years in the Healthcare Industry</p>
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
            We understand you may have questions about back-office operations in manufacturing. We’re here to help.
          </p>
          <FAQItem
            question="What are the main benefits of outsourcing back-office operations in manufacturing?"
            answer="Cost savings, enhanced efficiency, and access to specialized talent are just a few benefits of outsourcing."
          />
          <FAQItem
            question="How can outsourcing back-office operations improve accuracy?"
            answer="By leveraging experienced teams and robust quality checks, we minimize errors and streamline workflows."
          />
          <FAQItem
            question="Which back-office functions are commonly outsourced for manufacturing businesses?"
            answer="Accounting, HR, IT support, supply chain management, data processing, and more."
          />
          <FAQItem
            question="How do we maintain control over our operations when outsourcing back-office functions?"
            answer="We establish clear SLAs, regular reporting, and transparent communication to ensure alignment with your business goals."
          />
          <FAQItem
            question="How do we measure the success of outsourced back-office operations?"
            answer="We track metrics such as cost savings, process efficiency, error rates, and turnaround times to evaluate performance."
          />
        </div>
      </section>
    </div>
  );
};

export default ManufacturingIndustry;
