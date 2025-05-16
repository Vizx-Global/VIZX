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
      { threshold: 0.6 } // start animation when 60% of the element is in view
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [target, duration, hasAnimated]);

  return <span ref={ref}>{count.toLocaleString() + suffix}</span>;
};

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

const FinanceIndustry: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/finance-hero.jpg')" }}
        data-aos="fade-in"
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-orange-500 mb-4">
            Finance Industry
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Outsourcing financial services shifts responsibilities to expert workers at affordable rates—reducing costs and boosting efficiency.
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

      {/* Core Solutions We Outsource */}
      <section className="py-16 px-8 bg-gray-800" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-500 mb-6 text-center">
            Core Solutions We Outsource
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-10 text-center">
            Integrating technology into your business lowers operational costs and enhances overall efficiency.
            As such, many businesses opt to outsource financial services for greater benefits—and we’re ready to collaborate with you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black p-6 rounded-lg border border-gray-700">
              <h3 className="text-2xl text-orange-500 font-bold mb-2">Bookkeeping</h3>
              <p className="text-gray-300 leading-relaxed">
                We offer expert bookkeeping services for accurate recording and management of all your financial transactions.
              </p>
            </div>
            <div className="bg-black p-6 rounded-lg border border-gray-700">
              <h3 className="text-2xl text-orange-500 font-bold mb-2">Accounts Payable/Receivable</h3>
              <p className="text-gray-300 leading-relaxed">
                For a healthy cash flow, we handle your invoices and process payments to ensure timely transactions.
              </p>
            </div>
            <div className="bg-black p-6 rounded-lg border border-gray-700">
              <h3 className="text-2xl text-orange-500 font-bold mb-2">Payroll Services</h3>
              <p className="text-gray-300 leading-relaxed">
                We provide timely and accurate payroll calculations, deductions, and tax filings so you can focus on your core operations.
              </p>
            </div>
            <div className="bg-black p-6 rounded-lg border border-gray-700">
              <h3 className="text-2xl text-orange-500 font-bold mb-2">Accounting</h3>
              <p className="text-gray-300 leading-relaxed">
                Ensuring compliance with tax laws while maximizing deductions and reducing liabilities.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose VIZX */}
      <section className="py-16 px-8" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-500 mb-6 text-center">
            Why Choose VIZX
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl text-orange-500 font-bold mb-2">Access to Expertise</h3>
              <p className="text-gray-300 leading-relaxed">
                Our team comprises skilled finance professionals with years of experience in accounting, bookkeeping, and payroll.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl text-orange-500 font-bold mb-2">Focus on Core Business</h3>
              <p className="text-gray-300 leading-relaxed">
                Outsourcing finance frees your internal team to concentrate on strategic initiatives, growing revenue, and serving customers.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl text-orange-500 font-bold mb-2">Risk Management</h3>
              <p className="text-gray-300 leading-relaxed">
                We implement risk management practices including compliance with regulatory requirements, saving your business from financial pitfalls.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl text-orange-500 font-bold mb-2">Cost Saving</h3>
              <p className="text-gray-300 leading-relaxed">
                Our efficient processes and economies of scale help you reduce overhead while maintaining high-quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* More Finance Solutions We Outsource */}
      <section className="py-16 px-8 bg-gray-800" data-aos="fade-up">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-orange-500 mb-6">
            More Finance Solutions We Outsource
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            We Deliver.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-black p-4 rounded-lg border border-gray-700">
              <h3 className="text-lg text-orange-500 font-bold mb-2">Bookkeeping</h3>
              <p className="text-gray-300 text-sm">
                Recording transactions, bank reconciliations
              </p>
            </div>
            <div className="bg-black p-4 rounded-lg border border-gray-700">
              <h3 className="text-lg text-orange-500 font-bold mb-2">Accounts Payable/Receivable</h3>
              <p className="text-gray-300 text-sm">
                Invoice processing, payment management, collections
              </p>
            </div>
            <div className="bg-black p-4 rounded-lg border border-gray-700">
              <h3 className="text-lg text-orange-500 font-bold mb-2">Payroll Processing</h3>
              <p className="text-gray-300 text-sm">
                Salary calculations, direct deposits, W2s
              </p>
            </div>
            <div className="bg-black p-4 rounded-lg border border-gray-700">
              <h3 className="text-lg text-orange-500 font-bold mb-2">Financial Reporting</h3>
              <p className="text-gray-300 text-sm">
                Management reports, budgeting, forecasting
              </p>
            </div>
            <div className="bg-black p-4 rounded-lg border border-gray-700">
              <h3 className="text-lg text-orange-500 font-bold mb-2">Tax Preparation & Planning</h3>
              <p className="text-gray-300 text-sm">
                Corporate tax returns, compliance, strategic tax planning
              </p>
            </div>
            <div className="bg-black p-4 rounded-lg border border-gray-700">
              <h3 className="text-lg text-orange-500 font-bold mb-2">Financial Analysis</h3>
              <p className="text-gray-300 text-sm">
                Profitability analysis, cash flow management
              </p>
            </div>
            <div className="bg-black p-4 rounded-lg border border-gray-700">
              <h3 className="text-lg text-orange-500 font-bold mb-2">Treasury Management</h3>
              <p className="text-gray-300 text-sm">
                Cash management, risk management, investments
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>

      {/* The Process of Outsourcing Finance Solutions */}
      <section className="py-16 px-8" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-500 mb-6 text-center">
            The Process of Outsourcing Finance Solutions
          </h2>
          <div className="flex flex-col md:flex-row items-center mt-8">
            <div className="md:w-1/2 text-gray-300 space-y-4">
              <p className="flex items-center">
                <span className="text-orange-500 mr-2">➜</span> Assessing your current finance needs
              </p>
              <p className="flex items-center">
                <span className="text-orange-500 mr-2">➜</span> Identifying which functions to outsource
              </p>
              <p className="flex items-center">
                <span className="text-orange-500 mr-2">➜</span> Selecting a service provider, defining scope & SLAs
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
                className="w-full h-auto rounded-lg"
              />
            </div>
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
              <p className="text-4xl font-bold text-orange-500">
                <AnimatedCounter target={23} />
              </p>
              <p className="text-gray-300 mt-2">Years in BPO & RPO</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-orange-500">
                <AnimatedCounter target={7} />
              </p>
              <p className="text-gray-300 mt-2">Years in Healthcare Industry</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-orange-500">
                <AnimatedCounter target={5000} suffix="+" />
              </p>
              <p className="text-gray-300 mt-2">Hires Placed Yearly</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-orange-500">
                <AnimatedCounter target={55} suffix="+" />
              </p>
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
