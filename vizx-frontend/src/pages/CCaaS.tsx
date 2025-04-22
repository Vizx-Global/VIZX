import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CCaaS: React.FC = () => {
  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-black text-white w-full min-h-screen font-sans">
      {/* HERO SECTION */}
      <section className="bg-orange-500 text-black px-8 py-16" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            CONTACT CENTER AS A SERVICE
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6">
            Revolutionize Your Customer Experience with CCaaS
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            In the digital era, the power of Contact Center as a Service through our expert BPO
            solutions empowers you to thrive in the new age, delivering exceptional customer
            experiences while ensuring operational efficiency and profitability.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block bg-black text-orange-500 hover:text-white hover:bg-gray-800 font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Transform your Customer Service
            </a>
          </div>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className="px-8 py-16 bg-gray-900" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
            Our Key Benefits
          </h3>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            With a focus on seamless integration, scalability, and BPO-specific functionalities,
            our platform sets a new standard for contact center excellence in the outsourcing
            industry.
          </p>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-300">
            <li>
              <strong className="text-white">Cost Efficiency:</strong> Pay-as-you-grow model reduces capital expenditure.
            </li>
            <li>
              <strong className="text-white">Scalability:</strong> Easily adjust capacity based on demand fluctuations.
            </li>
            <li>
              <strong className="text-white">Omnichannel Support:</strong> Provide consistent service across all communication channels.
            </li>
            <li>
              <strong className="text-white">Advanced Analytics:</strong> Gain insights that help optimize agent performance.
            </li>
            <li>
              <strong className="text-white">Integration Capabilities:</strong> Seamlessly connect with industry-specific tools and databases.
            </li>
            <li>
              <strong className="text-white">Compliance & Security:</strong> Meet industry-specific regulatory requirements.
            </li>
          </ul>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Let’s Connect
            </a>
          </div>
        </div>
      </section>

      {/* WHAT IS CCaaS */}
      <section className="px-8 py-16" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
            What is CCaaS (Contact Center as a Service)?
          </h3>
          <p className="text-xl text-gray-200 leading-relaxed">
            CCaaS is a cloud-based customer engagement solution that revolutionizes how
            businesses interact with their customers. By leveraging our BPO expertise, we
            offer a flexible, scalable, and cost-effective way to manage customer
            interactions across all channels.
          </p>
        </div>
      </section>

      {/* WHICH INDUSTRIES */}
      <section className="px-8 py-16 bg-gray-900" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
            Which industries are best suited for CCaaS?
          </h3>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            CCaaS (Contact Center as a Service) can benefit a wide range of industries, but
            some sectors find it particularly valuable due to their specific customer service
            needs and challenges. Different industries have different issues—this is how CCaaS
            addresses their challenges.
          </p>

          {/* 3-Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Retail & E-commerce */}
            <div className="bg-black p-6 rounded-md">
              <h4 className="text-xl font-bold text-orange-500 mb-4">
                Retail and E-commerce
              </h4>
              <div className="mb-2">
                <p className="font-semibold text-white">Challenge</p>
                <ul className="list-disc list-inside text-gray-300 ml-2">
                  <li>High volume of customer inquiries</li>
                  <li>Seasonal fluctuations in demand</li>
                  <li>Need for omnichannel support</li>
                  <li>Managing returns and order issues</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-white">Why CCaaS</p>
                <ul className="list-disc list-inside text-gray-300 ml-2">
                  <li>Scalability to handle peak seasons</li>
                  <li>Real-time inventory & order tracking</li>
                  <li>Personalized customer interactions</li>
                  <li>Access to purchase history</li>
                </ul>
              </div>
            </div>

            {/* Healthcare & Telemedicine */}
            <div className="bg-black p-6 rounded-md">
              <h4 className="text-xl font-bold text-orange-500 mb-4">
                Healthcare & Telemedicine
              </h4>
              <div className="mb-2">
                <p className="font-semibold text-white">Challenge</p>
                <ul className="list-disc list-inside text-gray-300 ml-2">
                  <li>Patient privacy and data security</li>
                  <li>Need for 24/7 availability</li>
                  <li>Managing telemedicine scheduling</li>
                  <li>Providing accurate medical information</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-white">Why CCaaS</p>
                <ul className="list-disc list-inside text-gray-300 ml-2">
                  <li>HIPAA-compliant communication channels</li>
                  <li>Round-the-clock availability through a flexible agent pool</li>
                  <li>Integration with Electronic Health Record (EHR) systems</li>
                  <li>Better patient engagement & satisfaction</li>
                </ul>
              </div>
            </div>

            {/* Telecommunications */}
            <div className="bg-black p-6 rounded-md">
              <h4 className="text-xl font-bold text-orange-500 mb-4">
                Telecommunications
              </h4>
              <div className="mb-2">
                <p className="font-semibold text-white">Challenge</p>
                <ul className="list-disc list-inside text-gray-300 ml-2">
                  <li>High call volume for technical support</li>
                  <li>Need for quick plan upgrades</li>
                  <li>Handling billing inquiries</li>
                  <li>Managing large customer bases</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-white">Why CCaaS</p>
                <ul className="list-disc list-inside text-gray-300 ml-2">
                  <li>IVR systems for common troubleshooting queries</li>
                  <li>Personalized plan recommendations</li>
                  <li>Proactive outage notifications</li>
                  <li>Real-time metrics for basic account management</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Request a Demo
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE OUR CCaaS SOLUTION */}
      <section className="px-8 py-16" data-aos="fade-up">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Text */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
              Why Choose Our CCaaS Solution?
            </h3>
            <p className="text-lg text-gray-200 leading-relaxed mb-4">
              By combining CCaaS technology with our BPO expertise, we offer unique
              advantages as listed below:
            </p>
            <ul className="list-disc list-inside text-gray-200 space-y-2">
              <li>
                <strong className="text-white">Seamless Integration of Technology and Human Expertise</strong>
              </li>
              <li>
                <strong className="text-white">Flexible Staffing</strong> to meet demand fluctuations
              </li>
              <li>
                <strong className="text-white">Multi-Industry Experience</strong> for tailored solutions
              </li>
              <li>
                <strong className="text-white">Continuous Improvement</strong> through data-driven insights
              </li>
            </ul>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors"
              >
                Leverage Our BPO Expertise
              </a>
            </div>
          </div>

          {/* Right Image (Optional) */}
          <div className="flex items-center justify-center">
            <img
              src="/images/ccaas-office.jpg"
              alt="CCaaS office environment"
              className="rounded-md shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* COMMON PAIN POINTS */}
      <section className="px-8 py-16 bg-gray-900" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
            Our CCaaS solution addresses your common pain points
          </h3>
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            We understand the challenges you face in delivering exceptional customer service.
            These are the challenges that we can help with:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Inconsistent Customer Experience</li>
            <li>High Operational Costs</li>
            <li>Difficulty in Scaling Operations</li>
            <li>Lack of Insights into Customer Interactions</li>
            <li>Complex Technology Integration</li>
          </ul>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Let’s Solve Your Customer Service Challenges
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black px-8 py-6 border-t border-gray-800">
        <p className="text-sm text-gray-400 text-center">
          &copy; {new Date().getFullYear()} VizX Global Solutions. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default CCaaS;
