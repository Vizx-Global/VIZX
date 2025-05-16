import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Define the structure for industry-specific data
interface IndustrySolution {
  title: string;
  challenges: string[];
  solutions: string[];
}

const MerchantServices: React.FC = () => {
  useEffect(() => {
    // Initialize AOS (Animate On Scroll) library
    AOS.init({ duration: 800, once: true });
  }, []);

  // State to manage which industry accordion is open
  const [openIndustry, setOpenIndustry] = useState<string | null>(null);

  // Function to toggle the accordion for an industry
  const toggleIndustry = (industry: string) => {
    setOpenIndustry(openIndustry === industry ? null : industry);
  };

  // Data for different industries and how merchant services help them
  const industryData: IndustrySolution[] = [
    {
      title: "Retail and E-commerce",
      challenges: [
        "Managing high transaction volumes",
        "Ensuring secure online payments & PCI compliance",
        "Synchronizing inventory across channels",
        "Offering diverse payment options (online, in-store, mobile)",
        "Handling returns and refunds efficiently"
      ],
      solutions: [
        "Robust Point-of-Sale (POS) systems for seamless checkouts",
        "Secure payment gateways with advanced fraud protection",
        "Integration with e-commerce platforms and inventory management",
        "Support for various payment methods: cards, digital wallets, payment links",
        "Streamlined processes for managing refunds and exchanges"
      ]
    },
    {
      title: "Restaurants & Hospitality",
      challenges: [
        "Ensuring quick and efficient customer turnover",
        "Managing split bills and tips accurately",
        "Integrating online ordering and delivery payments",
        "Accepting contactless payments for hygiene and convenience",
        "Reliable payment processing during peak hours"
      ],
      solutions: [
        "Efficient POS systems tailored for restaurant workflows (e.g., table management, order taking)",
        "Mobile POS and pay-at-table solutions for faster service",
        "Integration with online ordering platforms and loyalty programs",
        "Contactless payment options (NFC, QR codes)",
        "Durable hardware and reliable connectivity"
      ]
    },
    {
      title: "Service-Based Businesses (e.g., Salons, Repair, Consultancies)",
      challenges: [
        "Scheduling appointments with upfront payments or deposits",
        "Managing recurring billing for subscriptions or retainers",
        "Accepting payments on-the-go or at client locations",
        "Sending professional invoices with easy payment options",
        "Tracking billable hours and project expenses"
      ],
      solutions: [
        "Online booking tools with integrated payment processing",
        "Automated recurring billing and subscription management",
        "Mobile card readers and virtual terminals for remote payments",
        "Customizable payment links and digital invoicing",
        "Integration with accounting and CRM software"
      ]
    }
  ];

  return (
    <div className="bg-black text-white w-full min-h-screen font-sans">
      {/* HERO SECTION */}
      <section
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        // Using a placeholder image for the hero section
        style={{ backgroundImage: "url('/images/merchant.jpg')" }} 
        data-aos="fade-in"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text readability */}
        <div className="relative max-w-5xl mx-auto text-center z-10 p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-orange-500">MERCHANT SOLUTIONS</h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6">Streamline Your Payments with OurPlatform Solutions</h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-200">
            Empower your business with our cutting-edge merchant services. We provide secure, reliable, and efficient payment processing solutions designed to enhance customer experience and boost your bottom line.
          </p>
          <div className="mt-8">
            <a
              href="#contact" // Assuming a contact section or page
              className="inline-block bg-orange-500 text-black hover:bg-orange-600 font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Explore Our Payment Solutions
            </a>
          </div>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className="px-8 py-16 bg-gray-900" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6 text-center md:text-left">Unlock Key Benefits for Your Business</h3>
          <p className="text-xl text-gray-300 leading-relaxed mb-8 text-center md:text-left">
            Our comprehensive merchant services are built to provide seamless payment integration, robust security, and the scalability your business needs to thrive in a competitive market.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none p-0">
            {[
              { title: "Increased Sales", description: "Accept a wide variety of payment methods, including credit/debit cards, online payments, and mobile wallets, making it easier for customers to pay." },
              { title: "Improved Cash Flow", description: "Benefit from faster payment processing and quick settlement times, ensuring timely access to your funds." },
              { title: "Enhanced Security", description: "Protect your business and customer data with PCI-compliant solutions and advanced fraud prevention tools." },
              { title: "Customer Convenience", description: "Offer multiple payment options like card-present, card-not-present, online payments, and payment links for a frictionless checkout experience." },
              { title: "Operational Efficiency", description: "Streamline your payment processes, reduce manual errors, and integrate with your existing business systems like accounting and POS." },
              { title: "Scalability & Flexibility", description: "Our solutions grow with your business, easily adjusting to seasonal demands and expansion." },
              { title: "Dedicated Support", description: "Receive expert assistance with merchant onboarding, comprehensive training, personalized account management, and continuous aftersales service." }
            ].map((benefit, index) => (
              <li key={index} className="bg-black p-6 rounded-lg shadow-md">
                <strong className="text-xl text-orange-500 block mb-2">{benefit.title}</strong>
                <p className="text-gray-300">{benefit.description}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center md:text-left">
            <a
              href="#contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Discover Our Solutions
            </a>
          </div>
        </div>
      </section>

      {/* WHAT ARE MERCHANT SERVICES */}
      <section className="px-8 py-16" data-aos="fade-up">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">What are Merchant Services?</h3>
          <p className="text-xl text-gray-200 leading-relaxed">
            Merchant services encompass a range of solutions that enable businesses to accept and process electronic payments, such as credit cards, debit cards, and digital payments. OurPlatform provides a comprehensive suite of tools including payment processing, payment gateways, point-of-sale (POS) systems, and robust security features to ensure every transaction is smooth, secure, and efficient. We help you manage payments effectively, reduce risk, and enhance your customers' purchasing experience.
          </p>
        </div>
      </section>

      {/* WHICH INDUSTRIES (Tailored Solutions for Your Industry) */}
      <section className="px-8 py-16 bg-gray-900" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6 text-center">Tailored Solutions for Your Industry</h3>
          <p className="text-xl text-gray-300 leading-relaxed mb-8 text-center">
            Merchant services are vital across diverse sectors. Whether you're in retail, hospitality, or provide specialized services, our platform offers solutions designed to meet your unique payment processing needs and overcome industry-specific challenges.
          </p>

          <div className="space-y-4">
            {industryData.map((industry, idx) => (
              <div key={idx} className="bg-black border border-gray-700 rounded-md overflow-hidden">
                <button
                  className="w-full text-left p-4 text-lg font-semibold text-orange-500 focus:outline-none flex justify-between items-center"
                  onClick={() => toggleIndustry(industry.title)}
                >
                  {industry.title}
                  <span>{openIndustry === industry.title ? '-' : '+'}</span>
                </button>
                {openIndustry === industry.title && (
                  <div className="px-4 pb-4 text-gray-300">
                    <p className="font-semibold text-white mt-2">Key Challenges:</p>
                    <ul className="list-disc list-inside ml-4 mb-3 space-y-1">
                      {industry.challenges.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <p className="font-semibold text-white mt-4">How OurPlatform Helps:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      {industry.solutions.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="#contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Request a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE OUR MERCHANT SOLUTION */}
      <section className="px-8 py-16" data-aos="fade-up">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">Why Choose Our Merchant Solutions?</h3>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              We combine state-of-the-art technology with unparalleled customer support to offer merchant solutions that truly make a difference to your business operations and growth.
            </p>
            <ul className="list-disc list-inside text-gray-200 space-y-3">
              <li><strong className="text-white">Comprehensive Payment Options:</strong> Accept all major payment types—card present, card not present, online, mobile, and payment links.</li>
              <li><strong className="text-white">Streamlined Onboarding & Integration:</strong> Get started quickly with our guided setup, data migration assistance, and easy integration with your existing tools.</li>
              <li><strong className="text-white">Dedicated Customer Success:</strong> Benefit from comprehensive training, personalized account management, and proactive aftersales support. We act as your advocate.</li>
              <li><strong className="text-white">Advanced Reporting & Analytics:</strong> Gain valuable insights into your sales trends, customer behavior, and transaction data to make informed business decisions.</li>
              <li><strong className="text-white">Proactive Issue Resolution:</strong> Our team can liaise with third-party providers on your behalf, ensuring swift resolution of any concerns.</li>
            </ul>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors"
              >
                Partner With Us
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            {/* Using a placeholder image */}
            <img src="https://placehold.co/600x450/475569/FFFFFF?text=Merchant+Solutions+Dashboard" alt="Merchant Services Dashboard" className="rounded-md shadow-lg max-w-full h-auto" />
          </div>
        </div>
      </section>

      {/* COMMON PAIN POINTS ADDRESSED */}
      <section className="px-8 py-16 bg-gray-900" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6 text-center md:text-left">Our Solutions Address Your Payment Challenges</h3>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed text-center md:text-left">
            We understand the common frustrations businesses face with payment processing. Our merchant services are designed to alleviate these pain points effectively:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0">
            {[
                "High or Unpredictable Transaction Fees",
                "Complex PCI DSS Compliance Requirements",
                "Increasing Fraud and Security Risks",
                "Limited Payment Options for Customers",
                "Slow Funding and Cash Flow Delays",
                "Difficulty Integrating with Existing Systems",
                "Poor Customer Support from Providers",
                "Outdated or Unreliable POS Hardware",
                "Managing Chargebacks and Disputes"
            ].map((painPoint, index) => (
                 <li key={index} className="bg-black p-4 rounded-lg shadow-md text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500 inline-block mr-2 mb-1"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    {painPoint}
                </li>
            ))}
          </ul>
          <div className="mt-10 text-center md:text-left">
            <a
              href="#contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Solve Your Payment Hurdles
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black px-8 py-6 border-t border-gray-800">
        <p className="text-sm text-gray-400 text-center">
          {/* Using a placeholder company name */}
          &copy; {new Date().getFullYear()} SecurePay Solutions Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default MerchantServices;
