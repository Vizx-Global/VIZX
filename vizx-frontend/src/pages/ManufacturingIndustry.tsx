import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// --- Counter Component ---
const AnimatedCounter: React.FC<{ target: number; suffix?: string; duration?: number }> = ({
  target,
  suffix = '',
  duration = 2000,
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = React.useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          let start = 0;
          const increment = target / (duration / 16); // ~60fps
          const handle = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(handle);
            } else {
              setCount(Math.ceil(start));
            }
          }, 16);
          setHasAnimated(true);
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [target, duration, hasAnimated]);

  return <span ref={ref}>{count.toLocaleString() + suffix}</span>;
};

// --- FAQ Item ---
const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-700 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex justify-between items-center focus:outline-none"
      >
        <span className="text-base sm:text-lg font-semibold text-white">{question}</span>
        <span className="text-orange-500 text-base sm:text-lg">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <p className="mt-2 text-base text-gray-300 leading-relaxed">{answer}</p>}
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
        className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/manufacturing-hero.jpg')" }}
        data-aos="fade-in"
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-500 mb-3 leading-tight">
            Manufacturing Industry
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            We offer Manufacturing BPO services to cut costs and improve your business’s overall operational efficiency.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors text-sm sm:text-base"
            >
              Start Now
            </a>
            <a
              href="/contact"
              className="bg-transparent border border-orange-500 hover:bg-orange-600 hover:text-black text-orange-500 font-semibold py-3 px-6 rounded-md transition-colors text-sm sm:text-base"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* We Outsource Manufacturing Back Office Services */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 bg-gray-800" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-6 text-center">
            We Outsource Manufacturing Back Office Services
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8 text-center">
            The manufacturing sector forms a large part of the global economy and hence revenue. With increasing
            competition, manufacturers invest in serving their market better through dynamic infrastructure, a
            streamlined supply chain, and innovative technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-base sm:text-lg">
              <li>Accounting Services</li>
              <li>Data Management</li>
              <li>Sales Analysis</li>
              <li>Logistics and Shipping</li>
            </ul>
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-base sm:text-lg">
              <li>Analytics Solutions</li>
              <li>Technical Services</li>
              <li>Legal Support</li>
            </ul>
          </div>
          <div className="text-center mt-8">
            <a
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors text-sm sm:text-base"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* What You Stand to Gain with VIZX */}
      <section className="py-12 sm:py-16 px-4 sm:px-8" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-6 text-center">
            What You Stand to Gain with VIZX
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8 text-center">
            From accounting to data management, we’ll adeptly manage your back-office activities and help you with
            insight-led business decisions that will increase your operational efficiency and profits.
          </p>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-gray-300 space-y-3 text-base sm:text-lg">
              <ul className="list-none">
                {[
                  'Reduced overall costs',
                  'Increased efficiency and accuracy',
                  'Quick turnaround',
                  'Access to global talent',
                  'Improved production quality',
                  'Improved supply chain management',
                  'Better inventory control',
                ].map((item, i) => (
                  <li key={i} className="flex items-center mb-1.5">
                    <span className="text-orange-500 mr-2">➤</span> {item}
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors mt-4 text-sm sm:text-base"
              >
                Learn More
              </a>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8 flex justify-center">
              <img
                src="/images/manufacturing-plant.jpg"
                alt="Manufacturing Plant"
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Common Back-Office Operations Outsourced */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 bg-gray-800" data-aos="fade-up">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-6">
            Common Back-Office Operations Outsourced
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8">
            You need it, we will deliver it.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: 'Accounting and Finance', text: 'Bookkeeping, payroll, financial analysis, reporting, and planning' },
              { title: 'Human Resources', text: 'Benefits administration, employee training, talent acquisition' },
              { title: 'IT Support', text: 'Network management, helpdesk, cybersecurity, data backup & recovery' },
              { title: 'Supply Chain Management', text: 'Procurement support, vendor management, inventory tracking' },
              { title: 'Software Development', text: 'Web, mobile app dev, custom software solutions' },
              { title: 'Data Entry and Management', text: 'Production data entry, quality control, data processing' },
              { title: 'Research and Analysis', text: 'Market research, competitor analysis' },
              { title: 'IT Consulting', text: 'Technology roadmap, digital transformation consulting' },
            ].map((card, i) => (
              <div key={i} className="bg-black p-5 sm:p-6 rounded-lg border border-gray-700 text-left">
                <h3 className="text-lg sm:text-xl text-orange-500 font-bold mb-2">{card.title}</h3>
                <p className="text-base text-gray-300 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors text-sm sm:text-base"
            >
              Start Today
            </a>
          </div>
        </div>
      </section>

      {/* Our Numbers */}
      <section className="py-12 sm:py-16 px-4 sm:px-8" data-aos="fade-up">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-6">
            Our Numbers Set Us Apart
          </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-6">
            {[
              { value: <AnimatedCounter target={23} />, label: 'Years in BPO & RPO' },
              { value: <AnimatedCounter target={7} />, label: 'Years in Healthcare Industry' },
              { value: <AnimatedCounter target={5000} suffix="+" />, label: 'Hires Placed Yearly' },
              { value: <AnimatedCounter target={55} suffix="+" />, label: 'Clients Served' },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-3xl sm:text-4xl font-bold text-orange-500">{item.value}</p>
                <p className="text-base sm:text-lg text-gray-300 mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 bg-gray-800" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8 text-center">
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
