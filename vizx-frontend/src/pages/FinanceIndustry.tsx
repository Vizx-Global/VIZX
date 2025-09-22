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

// --- FAQ Component ---
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

const FinanceIndustry: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/finance-hero.jpg')" }}
        data-aos="fade-in"
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-500 mb-3 leading-tight">
            Finance Industry
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Outsourcing financial services shifts responsibilities to expert workers at affordable
            rates—reducing costs and boosting efficiency.
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

      {/* Finance Solutions We Outsource */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 bg-gray-800" data-aos="fade-up">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-4">
            Core Finance Solutions We Outsource
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8">We Deliver.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
            {[
              { title: 'Bookkeeping', text: 'Recording transactions, bank reconciliations' },
              { title: 'Accounts Payable/Receivable', text: 'Invoice processing, payment management, collections' },
              { title: 'Payroll Processing', text: 'Salary calculations, direct deposits, W2s' },
              { title: 'Financial Reporting', text: 'Management reports, budgeting, forecasting' },
            ].map((item, i) => (
              <div key={i} className="bg-black p-5 sm:p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg sm:text-xl text-orange-500 font-bold mb-2">{item.title}</h3>
                <p className="text-base text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors text-sm sm:text-base"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose VIZX */}
      <section className="py-12 sm:py-16 px-4 sm:px-8" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-6 text-center">
            Why Choose VIZX
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 mt-8">
            {[
              {
                title: 'Access to Expertise',
                text:
                  'Our team comprises skilled finance professionals with years of experience in accounting, bookkeeping, and payroll.',
              },
              {
                title: 'Focus on Core Business',
                text:
                  'Outsourcing finance frees your internal team to concentrate on strategic initiatives, growing revenue, and serving customers.',
              },
              {
                title: 'Risk Management',
                text:
                  'We implement risk management practices including compliance with regulatory requirements, saving your business from financial pitfalls.',
              },
              {
                title: 'Cost Saving',
                text:
                  'Our efficient processes and economies of scale help you reduce overhead while maintaining high-quality standards.',
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

      {/* The Process of Outsourcing Finance Solutions */}
      <section className="py-12 sm:py-16 px-4 sm:px-8" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-6 text-center">
            The Process of Outsourcing Finance Solutions
          </h2>
          <div className="flex flex-col md:flex-row items-center mt-6 sm:mt-8">
            <div className="md:w-1/2 text-base sm:text-lg text-gray-300 space-y-3 sm:space-y-4">
              <p className="flex items-center">
                <span className="text-orange-500 mr-2">➜</span> Assessing your current finance needs
              </p>
              <p className="flex items-center">
                <span className="text-orange-500 mr-2">➜</span> Identifying which functions to outsource
              </p>
              <p className="flex items-center">
                <span className="text-orange-500 mr-2">➜</span> Selecting a service provider, defining scope &amp; SLAs
              </p>
              <p className="flex items-center">
                <span className="text-orange-500 mr-2">➜</span> Implementing secure data transfer protocols
              </p>
              <p className="flex items-center">
                <span className="text-orange-500 mr-2">➜</span> Transitioning responsibilities
              </p>
              <p className="flex items-center">
                <span className="text-orange-500 mr-2">➜</span> Ongoing monitoring and communication
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
              <img
                src="/images/finance-process.jpg"
                alt="Outsourcing Finance Process"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
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
            We understand that you might have some questions about outsourcing finance services. We’re here to help.
          </p>
          <FAQItem
            question="What are the main benefits of outsourcing finance services?"
            answer="Reduced overhead costs, specialized expertise, and the ability to focus on core business activities."
          />
          <FAQItem
            question="How does financial outsourcing reduce costs?"
            answer="By eliminating the need for in-house staffing and infrastructure, you pay only for the services you need."
          />
          <FAQItem
            question="What finance functions are commonly outsourced?"
            answer="Bookkeeping, payroll, accounts payable/receivable, tax accounting, financial analysis, and more."
          />
          <FAQItem
            question="How can we ensure the security of our financial data when outsourcing?"
            answer="We use secure data transfer protocols, robust encryption, and strict access controls to protect your sensitive information."
          />
          <FAQItem
            question="How long does it typically take to transition to an outsourced finance service?"
            answer="Transition time varies based on the scope and complexity of your current processes, but we strive for minimal disruption."
          />
        </div>
      </section>
    </div>
  );
};

export default FinanceIndustry;
