import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CCaaS: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [openIndustry, setOpenIndustry] = useState<string | null>(null);

  const toggleIndustry = (industry: string) => {
    setOpenIndustry(openIndustry === industry ? null : industry);
  };

  const industryData = [
    {
      title: "Retail and E-commerce",
      challenges: [
        "High volume of customer inquiries",
        "Seasonal fluctuations in demand",
        "Need for omnichannel support",
        "Managing returns and order issues"
      ],
      solutions: [
        "Scalability to handle peak seasons",
        "Real-time inventory & order tracking",
        "Personalized customer interactions",
        "Access to purchase history"
      ]
    },
    {
      title: "Healthcare & Telemedicine",
      challenges: [
        "Patient privacy and data security",
        "Need for 24/7 availability",
        "Managing telemedicine scheduling",
        "Providing accurate medical information"
      ],
      solutions: [
        "HIPAA-compliant communication channels",
        "Round-the-clock availability through a flexible agent pool",
        "Integration with Electronic Health Record (EHR) systems",
        "Better patient engagement & satisfaction"
      ]
    },
    {
      title: "Telecommunications",
      challenges: [
        "High call volume for technical support",
        "Need for quick plan upgrades",
        "Handling billing inquiries",
        "Managing large customer bases"
      ],
      solutions: [
        "IVR systems for common troubleshooting queries",
        "Personalized plan recommendations",
        "Proactive outage notifications",
        "Real-time metrics for basic account management"
      ]
    }
  ];

  return (
    <div className="bg-black text-white w-full min-h-screen font-sans">
      {/* HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/ccas-hero.jpg')" }} data-aos="fade-in">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-orange-500">CX SOLUTIONS</h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6">Revolutionize Your Customer Experience with VIZX</h2>
          <p className="text-lg md:text-xl leading-relaxed text-black">
            In the digital era, the power of CX through our expert BPO solutions empowers you to thrive in the new age, delivering exceptional customer experiences while ensuring operational efficiency and profitability.
          </p>
          <div className="mt-8">
            <a href="/contact" className="inline-block bg-black text-white hover:text-white hover:bg-gray-800 font-semibold py-3 px-6 rounded-md transition-colors">
              Transform your Customer Experience
            </a>
          </div>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className="px-8 py-16 bg-gray-900" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">Our Key Benefits</h3>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            With a focus on seamless integration, scalability, and BPO-specific functionalities, our platform sets a new standard for contact center excellence in the outsourcing industry.
          </p>
          <ul className="list-disc space-y-3 text-lg text-gray-300 text-left">
            <li><strong className="text-white">Cost Efficiency:</strong> Pay-as-you-grow model reduces capital expenditure.</li>
            <li><strong className="text-white">Scalability:</strong> Easily adjust capacity based on demand fluctuations.</li>
            <li><strong className="text-white">Omnichannel Support:</strong> Provide consistent service across all communication channels.</li>
            <li><strong className="text-white">Advanced Analytics:</strong> Gain insights that help optimize agent performance.</li>
            <li><strong className="text-white">Integration Capabilities:</strong> Seamlessly connect with industry-specific tools and databases.</li>
            <li><strong className="text-white">Compliance & Security:</strong> Meet industry-specific regulatory requirements.</li>
          </ul>
          <div className="mt-8">
            <a href="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors">
              Let’s Connect
            </a>
          </div>
        </div>
      </section>

      {/* WHAT IS CX */}
      <section className="px-8 py-16" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">What is VIZ-CX?</h3>
          <p className="text-xl text-gray-200 leading-relaxed">
            CCaaS is a cloud-based customer engagement solution that revolutionizes how businesses interact with their customers. By leveraging our BPO expertise, we offer a flexible, scalable, and cost-effective way to manage customer interactions across all channels.
          </p>
        </div>
      </section>

      {/* WHICH INDUSTRIES */}
      <section className="px-8 py-16 bg-gray-900" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">Which industries are best suited for CX?</h3>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            CCaaS (Contact Center as a Service) can benefit a wide range of industries, but some sectors find it particularly valuable due to their specific customer service needs and challenges. Different industries have different issues—this is how CCaaS addresses their challenges.
          </p>

          <div className="space-y-4">
            {industryData.map((industry, idx) => (
              <div key={idx} className="bg-black border border-gray-700 rounded-md">
                <button className="w-full text-left p-4 text-lg font-semibold text-orange-500 focus:outline-none" onClick={() => toggleIndustry(industry.title)}>
                  {industry.title}
                </button>
                {openIndustry === industry.title && (
                  <div className="px-4 pb-4 text-gray-300">
                    <p className="font-semibold text-white mt-2">Challenge</p>
                    <ul className="list-disc list-inside ml-4 mb-2">
                      {industry.challenges.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <p className="font-semibold text-white mt-4">Why CCaaS</p>
                    <ul className="list-disc list-inside ml-4">
                      {industry.solutions.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a href="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors">
              Request a Demo
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE OUR CCaaS SOLUTION */}
      <section className="px-8 py-16" data-aos="fade-up">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">Why Choose Our CX Solution?</h3>
            <p className="text-lg text-gray-200 leading-relaxed mb-4">
              By combining CX technology with our BPO expertise, we offer unique advantages as listed below:
            </p>
            <ul className="list-disc list-inside text-gray-200 space-y-2">
              <li><strong className="text-white">Seamless Integration of Technology and Human Expertise</strong></li>
              <li><strong className="text-white">Flexible Staffing</strong> to meet demand fluctuations</li>
              <li><strong className="text-white">Multi-Industry Experience</strong> for tailored solutions</li>
              <li><strong className="text-white">Continuous Improvement</strong> through data-driven insights</li>
            </ul>
            <div className="mt-8">
              <a href="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors">
                Leverage Our BPO Expertise
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src="/images/ccaas-office.jpg" alt="CCaaS office environment" className="rounded-md shadow-lg" />
          </div>
        </div>
      </section>

      {/* COMMON PAIN POINTS */}
      <section className="px-8 py-16 bg-gray-900" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">Our CX solution addresses your common pain points</h3>
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            We understand the challenges you face in delivering exceptional customer service. These are the challenges that we can help with:
          </p>
          <ul className="list-disc list-inside text-gray-300 ml-4">
            <li>Inconsistent Customer Experience</li>
            <li>High Operational Costs</li>
            <li>Difficulty in Scaling Operations</li>
            <li>Lack of Insights into Customer Interactions</li>
            <li>Complex Technology Integration</li>
          </ul>
          <div className="mt-8">
            <a href="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors">
              Let’s Solve Your Customer Service Challenges
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black px-8 py-6 border-t border-gray-800">
        <p className="text-sm text-gray-400 text-center">
          &copy; {new Date().getFullYear()} VizX Global Solutions. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default CCaaS;
