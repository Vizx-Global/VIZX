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

const InformationTechnologyIndustry: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden"
        data-aos="fade-in"
      >
        {/* mobile fallback image */}
        <div
          className="absolute inset-0 bg-cover bg-center sm:hidden"
          style={{ backgroundImage: "url('/images/technology-hero.jpg')" }}
        />
        {/* video only on sm+ */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/technology-hero.jpg"
          className="absolute inset-0 w-full h-full object-cover hidden sm:block z-0"
        >
          <source src="/images/technology-hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* overlay */}
        <div className="absolute inset-0 bg-black/70 z-10" />
        {/* content */}
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-500 mb-3 leading-tight">
            Information Technology
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Driving Growth &amp; Efficiency Across the IT Industry
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
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

      {/* Intro Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-8" data-aos="fade-up">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8">
            With a robust foundation built on years of industry experience, we have consistently driven
            growth and efficiency for our clients across the Information Technology sector. At VIZX
            Global, we leverage our insights and technological prowess to empower businesses with
            21<sup>st</sup>-century IT solutions.
          </p>
        </div>
      </section>

      {/* IT Solutions That We Outsource */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 bg-gray-800" data-aos="fade-up">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-4">
            IT Solutions That We Outsource
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8">
            You need it, we will deliver it.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: 'Software Development', text: 'Web, mobile apps, custom software solutions' },
              { title: 'IT Support & Help Desk', text: '24/7 technical support, remote desktop' },
              { title: 'Data Management', text: 'Data entry, processing, analytics, database management' },
              { title: 'IT Consulting', text: 'Strategy, planning, digital transformation' },
              { title: 'Cloud Services', text: 'Cloud management, infrastructure as a service' },
              { title: 'Cybersecurity', text: 'Data protection, security audits, compliance' },
              { title: 'Quality Assurance & Testing', text: 'Software testing, performance testing, user acceptance' },
              { title: 'Business Process Outsourcing', text: 'Customer service, back-office operations' },
            ].map((item, i) => (
              <div key={i} className="bg-black p-5 sm:p-6 rounded-lg border border-gray-700 text-left">
                <h3 className="text-lg sm:text-xl text-orange-500 font-bold mb-2">{item.title}</h3>
                <p className="text-base text-gray-300 leading-relaxed">{item.text}</p>
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

      {/* Why Choose VIZX IT Outsourcing */}
      <section className="py-12 sm:py-16 px-4 sm:px-8" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-6 text-center">
            Why Choose VIZX Information Technology Outsourcing
          </h2>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8 text-center">
            We have successfully navigated the complexities of the IT landscape, ensuring seamless
            integration and unparalleled service delivery.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8">
            {[
              { title: 'Expertise & Reliability', text: 'Our team comprises seasoned IT professionals with proven track records in delivering high-quality BPO services.' },
              { title: 'Customized Solutions', text: 'We understand that every business is unique. We tailor our IT solutions to align with your specific requirements and objectives.' },
              { title: 'Global Reach', text: 'With a global presence and diverse client portfolio, we possess the capability to support businesses of all sizes across different geographies.' },
              { title: 'Scalability', text: "Whether you're a startup or an enterprise, our scalable solutions adapt to your evolving needs." },
              { title: 'Proven Track Record', text: 'Our reputation in the industry brands us as your trusted and reliable IT outsourcing partner.' },
            ].map((card, i) => (
              <div key={i} className="bg-gray-900 p-5 sm:p-6 rounded-lg">
                <h3 className="text-xl sm:text-2xl text-orange-500 font-bold mb-2">{card.title}</h3>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">{card.text}</p>
              </div>
            ))}
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
            We understand that you might have questions about outsourcing IT services. We are here to help.
          </p>
          <FAQItem
            question="What are the main benefits of outsourcing IT services?"
            answer="Outsourcing IT can lower operational costs, offer access to expert talent, and free up resources for strategic initiatives."
          />
          <FAQItem
            question="How does IT outsourcing help reduce costs?"
            answer="By leveraging external expertise, you minimize overhead for training, recruitment, and infrastructure, paying only for the services you need."
          />
          <FAQItem
            question="What is the typical process for engaging an IT service provider?"
            answer="We begin with a needs assessment, followed by solution design, onboarding, and ongoing support to ensure continuous improvement."
          />
          <FAQItem
            question="How can we ensure the quality of outsourced IT services?"
            answer="We employ strict SLAs, regular performance reviews, and real-time monitoring to maintain service quality and alignment with your objectives."
          />
          <FAQItem
            question="Can outsourced IT services scale with our business needs?"
            answer="Yes. Our scalable solutions adapt to your evolving demands, whether you're a startup or an established enterprise."
          />
        </div>
      </section>
    </div>
  );
};

export default InformationTechnologyIndustry;
