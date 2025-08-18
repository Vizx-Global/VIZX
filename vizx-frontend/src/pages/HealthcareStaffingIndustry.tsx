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

const HealthcareStaffingIndustry: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/healthcare-hero.jpg')" }}
        data-aos="fade-in"
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-orange-500 mb-4">
            Healthcare Staffing Industry
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Get the service you need, when you need it.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-8" data-aos="fade-up">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            With over two decades of industry expertise, VIZX Global stands out as a premier specialist in outsourced recruitment services.
            Our extensive experience ensures we source top talent for healthcare facilities worldwide.
          </p>
        </div>
      </section>

      {/* Specialization Section */}
      <section className="py-16 px-8 bg-gray-800" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-500 mb-6 text-center">
            Our Specialization in Healthcare Staffing
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-10 text-center">
            We provide flexible staffing solutions including permanent, temporary, contract, and per diem placements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black p-6 rounded-lg border border-gray-700">
              <h3 className="text-2xl text-orange-500 font-bold mb-2">Travel Nurse Staffing</h3>
              <p className="text-gray-300 leading-relaxed">
                Temporary nurses for short-term assignments across the nation.
              </p>
            </div>
            <div className="bg-black p-6 rounded-lg border border-gray-700">
              <h3 className="text-2xl text-orange-500 font-bold mb-2">Locum Tenens Staffing</h3>
              <p className="text-gray-300 leading-relaxed">
                Interim placements for physicians and healthcare professionals.
              </p>
            </div>
            <div className="bg-black p-6 rounded-lg border border-gray-700">
              <h3 className="text-2xl text-orange-500 font-bold mb-2">Per Diem Nurse Staffing</h3>
              <p className="text-gray-300 leading-relaxed">
                Hourly-based staffing to cover unexpected shortfalls.
              </p>
            </div>
            <div className="bg-black p-6 rounded-lg border border-gray-700">
              <h3 className="text-2xl text-orange-500 font-bold mb-2">Allied Healthcare Staffing</h3>
              <p className="text-gray-300 leading-relaxed">
                Recruitment for allied health professionals including therapists and radiographers.
              </p>
            </div>
            <div className="bg-black p-6 rounded-lg border border-gray-700">
              <h3 className="text-2xl text-orange-500 font-bold mb-2">Direct Hire</h3>
              <p className="text-gray-300 leading-relaxed">
                Permanent placements with competitive benefits and career growth.
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

      {/* What Sets VIZX Apart */}
      <section className="py-16 px-8" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-500 mb-6 text-center">
            What Sets VIZX Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl text-orange-500 font-bold mb-2">Proven Expertise</h3>
              <p className="text-gray-300 leading-relaxed">
                Years of refined recruitment processes ensuring top-tier talent.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl text-orange-500 font-bold mb-2">Tailored Solutions</h3>
              <p className="text-gray-300 leading-relaxed">
                Customized staffing strategies to meet your unique requirements.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl text-orange-500 font-bold mb-2">Global Reach, Local Expertise</h3>
              <p className="text-gray-300 leading-relaxed">
                A broad network of professionals with localized knowledge.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl text-orange-500 font-bold mb-2">Cost Savings</h3>
              <p className="text-gray-300 leading-relaxed">
                Reduce overheads while ensuring quality placements.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl text-orange-500 font-bold mb-2">Cutting-Edge Tech</h3>
              <p className="text-gray-300 leading-relaxed">
                Leveraging the latest AI-driven tools for streamlined recruitment.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl text-orange-500 font-bold mb-2">Quality Assurance</h3>
              <p className="text-gray-300 leading-relaxed">
                Strict screening processes ensuring high-quality candidate placement.
              </p>
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
      <section className="py-16 px-8" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-500 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8 text-center">
            We’re here to help answer any questions you may have about our healthcare staffing services.
          </p>
          <FAQItem
            question="How do you ensure compliance with healthcare regulations?"
            answer="We adhere to rigorous screening and verification processes to ensure all candidates meet industry standards and regulations."
          />
          <FAQItem
            question="What strategies do you use to attract top healthcare talent?"
            answer="Our combination of advanced recruitment technology, personalized outreach, and a robust professional network helps us secure the best professionals."
          />
          <FAQItem
            question="How does VIZX Global support healthcare facilities during staffing shortages?"
            answer="We offer flexible staffing solutions—ranging from temporary to direct hire—to meet urgent needs without compromising on quality."
          />
          <FAQItem
            question="Can you provide support for both permanent and temporary positions?"
            answer="Absolutely. Our comprehensive approach covers permanent placements, temporary assignments, and contract staffing to fit your specific needs."
          />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-800 px-8" data-aos="fade-up">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-orange-500 mb-6">Need More Information?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Leave your details, and we’ll get back to you within 24 hours.
          </p>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <input
                type="text"
                placeholder="Your Name"
                className="flex-1 p-3 rounded mb-4 md:mb-0 text-black"
              />
              <input
                type="text"
                placeholder="Your Phone Number"
                className="flex-1 p-3 rounded text-black"
              />
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 p-3 rounded mb-4 md:mb-0 text-black"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="flex-1 p-3 rounded text-black"
              />
            </div>
            <textarea
              placeholder="How can we help?"
              className="w-full p-3 rounded text-black"
              rows={4}
            />
            <div className="flex items-center text-gray-300 text-sm">
              <input type="checkbox" className="mr-2" />
              <span>
                By providing your phone number, you consent to receive SMS communications from VIZX Global Solutions Inc.
              </span>
            </div>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors w-full md:w-auto"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HealthcareStaffingIndustry;
