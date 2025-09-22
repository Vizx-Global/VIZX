import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const CCaaS: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [openIndustry, setOpenIndustry] = useState<string | null>(null);
  const toggleIndustry = (industry: string) =>
    setOpenIndustry(openIndustry === industry ? null : industry);

  const industryData = [
    {
      title: "Retail and E-commerce",
      challenges: [
        "High volume of customer inquiries",
        "Seasonal fluctuations in demand",
        "Need for omnichannel support",
        "Managing returns and order issues",
      ],
      solutions: [
        "Scalability to handle peak seasons",
        "Real-time inventory & order tracking",
        "Personalized customer interactions",
        "Access to purchase history",
      ],
    },
    {
      title: "Healthcare & Telemedicine",
      challenges: [
        "Patient privacy and data security",
        "Need for 24/7 availability",
        "Managing telemedicine scheduling",
        "Providing accurate medical information",
      ],
      solutions: [
        "HIPAA-compliant communication channels",
        "Round-the-clock availability through a flexible agent pool",
        "Integration with Electronic Health Record (EHR) systems",
        "Better patient engagement & satisfaction",
      ],
    },
    {
      title: "Telecommunications",
      challenges: [
        "High call volume for technical support",
        "Need for quick plan upgrades",
        "Handling billing inquiries",
        "Managing large customer bases",
      ],
      solutions: [
        "IVR systems for common troubleshooting queries",
        "Personalized plan recommendations",
        "Proactive outage notifications",
        "Real-time metrics for basic account management",
      ],
    },
  ];

  return (
    <div className="bg-black text-white w-full min-h-screen font-sans">
      {/* HERO */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] w-full overflow-hidden text-white">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/images/contact-center-hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/70 z-10" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 flex flex-col items-center justify-center min-h-[60vh] md:min-h-[70vh] px-4 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight"
          >
            <span className="text-orange-500">CX</span> Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-6"
          >
            Delivering exceptional customer experiences with scalable, efficient, and human-driven
            contact center services.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("vizx-cx")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md text-sm sm:text-base transition"
          >
            Learn More
          </motion.button>
        </motion.div>
      </section>

      {/* KEY BENEFITS */}
      <section className="px-4 sm:px-8 py-12 sm:py-16 bg-gray-900" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-6">
            Our Key Benefits
          </h3>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
            With a focus on seamless integration, scalability, and BPO-specific functionalities, our
            platform sets a new standard for contact center excellence in the outsourcing industry.
          </p>
          <ul className="list-disc space-y-3 text-base sm:text-lg text-gray-300 text-left ml-5">
            <li>
              <strong className="text-white">Cost Efficiency:</strong> Pay-as-you-grow model reduces
              capital expenditure.
            </li>
            <li>
              <strong className="text-white">Scalability:</strong> Easily adjust capacity based on
              demand fluctuations.
            </li>
            <li>
              <strong className="text-white">Omnichannel Support:</strong> Provide consistent service
              across all communication channels.
            </li>
            <li>
              <strong className="text-white">Advanced Analytics:</strong> Gain insights that help
              optimize agent performance.
            </li>
            <li>
              <strong className="text-white">Integration Capabilities:</strong> Seamlessly connect
              with industry-specific tools and databases.
            </li>
            <li>
              <strong className="text-white">Compliance & Security:</strong> Meet industry-specific
              regulatory requirements.
            </li>
          </ul>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors text-sm sm:text-base"
            >
              Let’s Connect
            </a>
          </div>
        </div>
      </section>

      {/* WHAT IS CX */}
      <section className="px-4 sm:px-8 py-12 sm:py-16" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h3
            id="vizx-cx"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-6"
          >
            What is VIZ-CX?
          </h3>
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
            VIZ-CX is a customer engagement solution that revolutionizes how businesses interact with
            their customers. By leveraging our BPO expertise, we offer a flexible, scalable, and
            cost-effective way to manage customer interactions across all channels.
          </p>
        </div>
      </section>

      {/* WHICH INDUSTRIES */}
      <section className="px-4 sm:px-8 py-12 sm:py-16 bg-gray-900" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-6">
            Which industries are best suited for CX?
          </h3>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8">
            CX can benefit a wide range of industries, but some sectors find it particularly valuable
            due to their specific customer service needs and challenges. Different industries have
            different issues—this is how CX addresses their challenges.
          </p>

          <div className="space-y-4">
            {industryData.map((industry, idx) => (
              <div key={idx} className="bg-black border border-gray-700 rounded-md">
                <button
                  className="w-full text-left p-4 text-base sm:text-lg font-semibold text-orange-500 focus:outline-none"
                  onClick={() => toggleIndustry(industry.title)}
                >
                  {industry.title}
                </button>
                {openIndustry === industry.title && (
                  <div className="px-4 pb-4 text-gray-300">
                    <p className="font-semibold text-white mt-2 text-base">Challenge</p>
                    <ul className="list-disc list-inside ml-4 mb-2 text-base">
                      {industry.challenges.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <p className="font-semibold text-white mt-4 text-base">Why CCaaS</p>
                    <ul className="list-disc list-inside ml-4 text-base">
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
            <a
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors text-sm sm:text-base"
            >
              Request a Demo
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE OUR SOLUTION */}
      <section className="px-4 sm:px-8 py-12 sm:py-16" data-aos="fade-up">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-6">
              Why Choose Our CX Solution?
            </h3>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-4">
              By combining CX technology with our BPO expertise, we offer unique advantages as listed
              below:
            </p>
            <ul className="list-disc list-inside text-gray-200 space-y-2 text-base">
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
                className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors text-sm sm:text-base"
              >
                Leverage Our BPO Expertise
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/images/ccaas-office.jpg"
              alt="CCaaS office environment"
              className="rounded-md shadow-lg max-w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* COMMON PAIN POINTS */}
      <section className="px-4 sm:px-8 py-12 sm:py-16 bg-gray-900" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-6">
            Our CX solution addresses your common pain points
          </h3>
          <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
            We understand the challenges you face in delivering exceptional customer service. These
            are the challenges that we can help with:
          </p>
          <ul className="list-disc list-inside text-gray-300 ml-5 text-base">
            <li>Inconsistent Customer Experience</li>
            <li>High Operational Costs</li>
            <li>Difficulty in Scaling Operations</li>
            <li>Lack of Insights into Customer Interactions</li>
            <li>Complex Technology Integration</li>
          </ul>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors text-sm sm:text-base"
            >
              Let’s Solve Your Customer Service Challenges
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black px-4 sm:px-8 py-6 border-t border-gray-800">
        <p className="text-sm text-gray-400 text-center">
          &copy; {new Date().getFullYear()} VizX Global Solutions. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default CCaaS;
