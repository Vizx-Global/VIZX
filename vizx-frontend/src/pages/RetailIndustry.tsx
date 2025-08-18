import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const RetailIndustry: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/retail-hero.jpg')" }}
        data-aos="fade-in"
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-orange-500 mb-4">
            Retail & E-Commerce
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Accelerate Growth and Customer Loyalty with Scalable BPO Solutions
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-8 bg-gray-900" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-500 mb-6 text-center">
            Our Retail & E-Commerce BPO Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceItem title="Omnichannel Customer Support" description="24/7 service across email, chat, phone, and social platforms to boost customer engagement and satisfaction." />
            <ServiceItem title="Order Management & Fulfillment Support" description="Ensure fast, accurate order processing, tracking, returns, and exchange handling for smooth experiences." />
            <ServiceItem title="Product Information Management" description="Optimize listings across marketplaces with consistent, high-quality SEO content and image tagging." />
            <ServiceItem title="Inventory & Supply Chain Coordination" description="Real-time inventory updates, vendor communications, and logistics support reduce fulfillment delays." />
          
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-8" data-aos="fade-up">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-orange-500 mb-6">
            Why Choose VizX Global for Retail & E-Commerce?
          </h2>
          <ul className="list-disc list-inside text-left text-gray-300 max-w-3xl mx-auto space-y-4 text-lg">
            <li><strong className="text-white">Cost Optimization:</strong> Lower costs through offshore support and automation without compromising quality.</li>
            <li><strong className="text-white">Rapid Scalability:</strong> Scale resources easily for holiday seasons, flash sales, and high-traffic events.</li>
            <li><strong className="text-white">Digital Commerce Expertise:</strong> We specialize in platforms like Shopify, Magento, Amazon, and WooCommerce.</li>
            <li><strong className="text-white">Tech-Enabled Operations:</strong> We integrate CRMs, AI bots, and analytics to streamline performance and support decisions.</li>
            <li><strong className="text-white">Secure & Compliant:</strong> End-to-end encryption and compliance with GDPR, PCI-DSS, and local data laws protect your reputation.</li>
          </ul>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Elevate Your Retail Strategy
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

export default RetailIndustry;
