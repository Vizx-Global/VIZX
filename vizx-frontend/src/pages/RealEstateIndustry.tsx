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

const RealEstateIndustry: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/real-estate-hero.jpg')" }}
        data-aos="fade-in"
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-orange-500 mb-4">
            Real Estate Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Your Dream Home Awaits
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-8" data-aos="fade-up">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            VIZX Global is a world leader in commercial real estate support services. 
            Whether you're buying, selling, or facing pre-foreclosure, our team of experts is dedicated to 
            delivering exceptional results that meet your unique needs.
          </p>
        </div>
      </section>

      {/* Tailored Property Management Services */}
      <section className="py-16 px-8 bg-gray-800" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-500 mb-6 text-center">
            Our Property Management Services Are Tailored To:
          </h2>
          <ul className="list-disc list-inside text-xl text-gray-300 space-y-4 mt-8 px-4 md:px-0">
            <li>Ensure your properties are well-maintained with reliable support.</li>
            <li>Promptly procure fixtures and repairs for seamless upkeep.</li>
            <li>Expertly manage legal documentation with our dedicated legal team.</li>
            <li>Provide seamless rent collection and accurate reconciliation.</li>
          </ul>
          <div className="text-center mt-8">
            <a
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Need more information?
            </a>
          </div>
        </div>
      </section>

      {/* Why VIZX is Ideal */}
      <section className="py-16 px-8" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-500 mb-6 text-center">
            Why Is VIZX Ideal For Your Real Estate Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl text-orange-500 font-bold mb-2">Market Trends</h3>
              <p className="text-gray-300 leading-relaxed">
                Leverage our deep understanding of market trends to maximize your returns.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl text-orange-500 font-bold mb-2">Personalized Approach</h3>
              <p className="text-gray-300 leading-relaxed">
                From residential to commercial properties, we tailor solutions to meet your unique needs.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl text-orange-500 font-bold mb-2">Excellence</h3>
              <p className="text-gray-300 leading-relaxed">
                Our commitment to excellence helps you achieve your real estate goals, whether you're a first-time buyer or a seasoned investor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Specialization in Real Estate */}
      <section className="py-16 px-8 bg-gray-800" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-500 mb-6 text-center">
            Our Specialization in Real Estate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-2xl text-orange-500 font-bold mb-2">Property Management</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Comprehensive management ensuring efficient operations and maximum returns.
              </p>
              <h3 className="text-2xl text-orange-500 font-bold mb-2">Foreclosure Services</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Expertise in foreclosure assistance helps homeowners navigate financial challenges.
              </p>
              
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/real-estate-aerial.jpg"
                alt="Real Estate Aerial View"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Stand Out */}
      <section className="py-16 px-8" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-500 mb-6 text-center">
            What Makes Us Stand Out in Property Management
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl text-orange-500 font-bold mb-2">Proven Track Record</h3>
              <p className="text-gray-300 leading-relaxed">
                Years of exceptional results have earned us the trust of global clients.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl text-orange-500 font-bold mb-2">Advanced Analysis</h3>
              <p className="text-gray-300 leading-relaxed">
                We use advanced research and analysis tools to provide insightful, data-driven solutions.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl text-orange-500 font-bold mb-2">Experienced Team</h3>
              <p className="text-gray-300 leading-relaxed">
                Our seasoned professionals understand your needs and deliver tailored strategies.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Work with Us
            </a>
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
            We’re here to help answer your questions about our real estate solutions.
          </p>
          <FAQItem
            question="How can outsourcing benefit my real estate business?"
            answer="Outsourcing with VIZX Global helps you tap into specialized expertise while reducing overhead costs, letting you focus on strategic growth."
          />
          <FAQItem
            question="Are your services customizable?"
            answer="Yes. We tailor every solution—from property management to foreclosure services—to meet your specific needs."
          />
          <FAQItem
            question="What sets you apart from other real estate service providers?"
            answer="Our deep market insights, personalized approach, and proven track record of success make us stand out in the industry."
          />
          <FAQItem
            question="How do you ensure compliance with industry standards?"
            answer="We adhere to strict guidelines and employ advanced technology to ensure all operations are compliant with the latest regulations."
          />
        </div>
      </section>

      {/* Request a Callback Section */}
      <section className="py-16 bg-gray-800 px-8" data-aos="fade-up">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-orange-500 mb-6">Request a Callback</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team is dedicated to maximizing your real estate assets and providing top-tier management. 
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
                placeholder="Your Email"
                className="flex-1 p-3 rounded mb-4 md:mb-0 text-black"
              />
              <input
                type="text"
                placeholder="Your Location"
                className="flex-1 p-3 rounded text-black"
              />
            </div>
            <textarea
              placeholder="Tell us more"
              className="w-full p-3 rounded text-black"
              rows={4}
            />
            <div className="flex items-center text-gray-300 text-sm">
              <input type="checkbox" className="mr-2" />
              <span>
                By providing your phone number, you consent to receive SMS communications from VIZX Global regarding updates, promotions, and important notifications. Standard messaging rates may apply.
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

export default RealEstateIndustry;
