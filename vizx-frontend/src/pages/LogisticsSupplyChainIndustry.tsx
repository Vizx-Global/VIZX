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

const LogisticsSupplyChainIndustry: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/logistics-hero.jpg')" }}
        data-aos="fade-in"
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-500 mb-3 leading-tight">
            Logistics &amp; Supply Chain
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            VIZX boosts top-notch technology, expert team and global network to revolutionize your logistics
            processes—ensuring efficiency and cost savings.
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

      {/* Core Logistics & Supply Chain Solutions */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 bg-gray-800" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-6 text-center">
            Core Logistics &amp; Supply Chain Solutions We Outsource
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8 text-center">
            Logistics and supply chain outsourcing is increasingly popular among businesses aiming to streamline
            their operations. We’ve successfully collaborated with companies of all sizes, delivering customized
            solutions that enhance visibility, reduce costs, and improve supply chain performance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-base sm:text-lg">
              <li>
                <strong>Supply Chain Management:</strong> End-to-end management of supply chain activities,
                including planning, inventory management, and distribution.
              </li>
              <li>
                <strong>Transportation Management:</strong> Streamlined logistics, route optimization, and freight
                management solutions to improve delivery efficiency and reduce transit times.
              </li>
              <li>
                <strong>Warehousing and Distribution:</strong> Efficient management of warehousing operations and
                distribution strategies to enhance responsiveness and reduce costs.
              </li>
            </ul>
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-base sm:text-lg">
              <li>
                <strong>Inventory Optimization:</strong> Advanced analytics and forecasting techniques to optimize
                inventory levels, reduce carrying costs, and minimize shortages.
              </li>
              <li>
                <strong>Technology Integration:</strong> Implementation of cutting-edge technologies like AI to enhance
                supply chain visibility, traceability, and efficiency.
              </li>
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

      {/* What You Stand to Benefit */}
      <section className="py-12 sm:py-16 px-4 sm:px-8" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-6 text-center">
            What You Stand to Benefit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 mt-8">
            {[
              {
                title: 'Proven Track Record',
                text:
                  'We have a solid reputation for delivering tangible results and operational excellence in logistics and supply chain management.',
              },
              {
                title: 'Global Reach',
                text:
                  'Through our network of strategic partners, we provide scalable solutions for businesses of all sizes, across diverse geographic locations.',
              },
              {
                title: 'Industry Expertise',
                text:
                  'Our team comprises experienced logisticians and supply chain experts who excel in implementing best practices.',
              },
              {
                title: 'Innovation',
                text:
                  'We stay at the forefront of industry trends, leveraging innovative solutions to drive continuous improvement and create competitive advantage.',
              },
            ].map((card, i) => (
              <div key={i} className="bg-gray-900 p-5 sm:p-6 rounded-lg">
                <h3 className="text-xl sm:text-2xl text-orange-500 font-bold mb-2">{card.title}</h3>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics & Supply Chain Solutions Outsourced */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 bg-gray-800" data-aos="fade-up">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-6">
            Logistics &amp; Supply Chain Solutions Outsourced
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8">Request it. We’ll deliver it.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                title: 'Transportation Management',
                text: 'Carrier selection & management, route optimization, freight auditing, tracking shipments',
              },
              {
                title: 'Warehousing & Distribution',
                text: 'Inventory storage, order fulfillment, pick and pack services, returns management',
              },
              {
                title: 'Freight Forwarding',
                text: 'Customs clearance, documentation management, global coordination',
              },
              {
                title: 'Supply Chain Consulting',
                text: 'Network design & optimization, process improvement, technology integration',
              },
              {
                title: 'Reverse Logistics',
                text: 'Product returns processing, refurbishment & repackaging, disposal or recycling management',
              },
              { title: 'Inventory Management', text: 'Stock level optimization, cycle counting, reconciliation' },
              { title: 'Procurement Services', text: 'Supplier selection & negotiation, strategic sourcing' },
              {
                title: 'Supply Chain Analytics',
                text: 'Performance metrics tracking, data analysis & reporting, predictive analytics',
              },
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
            We understand you may have questions about logistics &amp; supply chain outsourcing. We’re here to help.
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
