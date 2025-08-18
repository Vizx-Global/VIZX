import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TravelIndustry: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/travel-hero.jpg')" }}
        data-aos="fade-in"
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-orange-500 mb-4">
            Travel Industry
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Navigating the Future of Travel with Strategic BPO Solutions
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-8 bg-gray-900" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-500 mb-6 text-center">
            Our Travel BPO Services
          </h2>
          <p className="text-xl text-gray-300 mb-10 text-center">
            VizX Global supports travel companies—airlines, travel agencies, online travel platforms, and hospitality brands—by managing the critical yet time-intensive processes that drive the customer journey. Our services ensure seamless front-line interactions and back-end operational efficiency, tailored to the demands of the modern travel economy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceItem title="24/7 Multilingual Customer Support" description="Deliver exceptional customer service across multiple channels with multilingual support teams, improving traveler satisfaction and retention." />
            <ServiceItem title="Reservation and Booking Management" description="We manage end-to-end bookings for flights, hotels, rentals, and more with real-time confirmations and updates." />
            <ServiceItem title="Personalized Itinerary Planning" description="Our planners design personalized experiences that align with client preferences, destinations, and budgets." />
            <ServiceItem title="Back-Office Operations" description="Outsource back-end tasks such as invoicing, document management, and data entry to improve internal efficiency." />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-8" data-aos="fade-up">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-orange-500 mb-6">
            Why Choose VizX Global for Travel BPO Services?
          </h2>
          <ul className="list-disc list-inside text-left text-gray-300 max-w-4xl mx-auto space-y-4 text-lg">
            <li><strong className="text-white">Cost Efficiency:</strong> Reduce operational costs by outsourcing non-core functions, allowing you to allocate resources strategically.</li>
            <li><strong className="text-white">Scalability:</strong> Adapt to seasonal demand fluctuations with our flexible staffing solutions, ensuring consistent service quality year-round.</li>
            <li><strong className="text-white">Technological Advancement:</strong> Stay ahead with our integration of cutting-edge technologies like AI, machine learning, and automation to enhance service delivery.</li>
            <li><strong className="text-white">Global Reach:</strong> Expand your market presence with our multilingual support and understanding of diverse cultural nuances, facilitating seamless international operations.</li>
            <li><strong className="text-white">Industry Experience:</strong> With years of experience in the travel and hospitality sectors, we bring a deep understanding of service standards and regulatory requirements, ensuring smooth operations across time zones and travel cycles.</li>
            <li><strong className="text-white">Real-Time Insights & Reporting:</strong> Our data analytics capabilities help clients monitor trends, forecast demand, and make data-driven decisions to improve service outcomes and sales performance.</li>
            <li><strong className="text-white">Disruption Readiness:</strong> From pandemics to natural disasters, our business continuity planning ensures operational reliability during unexpected global events.</li>
            <li><strong className="text-white">Customer Loyalty Enablement:</strong> With seamless support and consistent engagement, we help travel brands increase repeat business, referrals, and long-term value from each customer.</li>
          </ul>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Transform Your Travel Operations
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceItem: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="bg-black p-6 rounded-lg border border-gray-700">
    <h3 className="text-2xl text-orange-500 font-bold mb-2">{title}</h3>
    <p className="text-gray-300 leading-relaxed">{description}</p>
  </div>
);

export default TravelIndustry;
