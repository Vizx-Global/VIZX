import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const RPO: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const toggleFAQ = (index: number) => setOpenFAQ(openFAQ === index ? null : index);

  return (
    <div className="bg-black text-white w-full font-sans">
      {/* ================= HERO ================= */}
      <section
        className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/images/hi-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-4 text-center lg:text-left max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-orange-500 mb-4 leading-tight"
          >
            RPO SOLUTIONS
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6"
          >
            Connecting Talent with Opportunity
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mx-auto lg:mx-0"
          >
            We specialize in connecting top talent with the right opportunities. Our expert team is
            dedicated to finding the perfect match for both employers and job seekers, ensuring success
            and growth for all. Discover your next career move or find your ideal candidate with us.
          </motion.p>
        </div>
      </section>

      {/* ======= GLOBAL MOBILE TYPOGRAPHY BASE (applies to all below) ======= */}
      {/* On mobile: paragraph/body text = text-base, small caps/buttons ≈ text-sm.
          Scales up gradually at sm:/md: to keep hierarchy even. */}

      {/* ================= SPECIALIZATIONS ================= */}
      <section className="px-4 md:px-8 py-12 md:py-16" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500 text-center mb-8">
            Areas Where We Specialize
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {["Recruitment", "Quality Control", "Payroll", "Staffing"].map((item) => (
              <div
                key={item}
                className="bg-gray-800 px-4 py-3 sm:px-6 sm:py-4 rounded-lg flex items-center justify-center"
              >
                <span className="text-base sm:text-lg font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY VIZX ================= */}
      <section className="px-4 md:px-8 py-12 md:py-16 bg-gray-900" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500 text-center mb-6">
            Why Is VizX Ideal as Your RPO Partner
          </h3>
          <p className="text-base sm:text-lg text-gray-300 text-center mb-8 leading-relaxed">
            We understand the know-hows of the business
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: "Experience",
                text:
                  "With over 20 years in the RPO industry, our comprehensive Recruitment, Quality Compliance and Payroll service ensure that your organization has access to the best talent while maintaining streamlined and efficient processes.",
              },
              {
                title: "Excellence",
                text:
                  "Our rigorous Quality Compliance process ensures that you experience peace of mind in knowing your staff are well in line with International Industry Standards of their respective disciplines.",
              },
              {
                title: "Updated Seamless Services",
                text:
                  "We ensure your staff receives seamless Payroll services ensuring hours are well compensated as per State and Federal Laws, benefits remittances and compensations are performed. Also ensuring returns and documents are handled electronically and timely.",
              },
              {
                title: "Tailored Approach",
                text:
                  "We present a tailored approach that meets your specific recruitment needs, resulting in higher productivity and a successful workforce.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-black p-5 sm:p-6 md:p-8 rounded-lg">
                <h4 className="text-xl sm:text-2xl font-bold text-orange-500 mb-2">{item.title}</h4>
                <p className="text-base text-gray-200 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition text-sm sm:text-base"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="px-4 md:px-8 py-12 md:py-16" data-aos="fade-up">
        <div className="max-w-5xl mx-auto space-y-10 md:space-y-12">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500 text-center">
            Benefits You Gain From VizX
          </h3>

          {[
            {
              title: "VIZX RPO improves quality of hires",
              img: "/images/rpo-quality.jpg",
              reverse: false,
              points: [
                "Our RPO expertise extends your hiring capacity and capabilities based on your business needs and cultures, ensuring attainable business goals and sustainable growth.",
                "RPO provides also deeper pipelines, more effective screening assessment and selection methods that yield qualified candidates, build more diverse talent pools and connect employers with stronger candidates.",
              ],
            },
            {
              title: "Cost-per-hire & time-to-fill go down",
              img: "/images/rpo-cost.jpg",
              reverse: true,
              points: [
                "VIZX improves your company’s efficiencies by bringing in top rigor and expertise to your recruitment needs ensuring growth in your business metrics and cultural alignment, with less room for improvement.",
                "In many cases, a recruitment and effective hiring team can cut cost-per-hire up to 20%, significantly reducing turnaround time by up to 70% for many clients. Plus it cuts the invisible cost of unfilled jobs.",
              ],
            },
            {
              title: "VIZX Global offers greater flexibility & scalability",
              img: "/images/rpo-flexibility.jpg",
              reverse: false,
              points: [
                "VIZX offers recruiting services to scale your organization’s hiring needs. That flexibility is what typically makes RPO more cost effective as it offers leaders peace of mind in scaling up or down based on market trends, cushioning more businesses from shocks. For this reason, RPO services are preferred more compared to an in-house recruiting team.",
              ],
            },
            {
              title: "Stronger hiring manager & recruiter relationships",
              img: "/images/rpo-relationships.jpg",
              reverse: true,
              points: [
                "Recent research shows that the dynamic between hiring managers and recruiters is a top performance driver for high-impact talent functions. VIZX Global supports this synergy by not only maintaining alignment between hiring managers and recruiters but also providing real-time analytics on recruitment operations—spanning from candidate sourcing to final placement.",
                "That means all parties are on the same page not only about what candidates they’re looking for, but how to screen them, provide feedback to each other and when / how to make a final hire.",
              ],
            },
            {
              title: "RPO leads to process improvement",
              img: "/images/rpo-improvement.jpg",
              reverse: false,
              points: [
                "At VIZX Global we have extensive experience in the latest recruiting technology and the right tools for your company. Leveraging ATS software for seamless candidate tracking, to familiarity with popular Vendor Management Systems. We also use social media platforms to ensure we get the job done.",
                "VIZX Global Solutions enhances the overall efficiency and effectiveness of your interhiring processes. Process improvement not only makes your candidate experience better, among other advantages of RPO, it makes your business run more effectively too!",
              ],
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 bg-gray-800 p-5 sm:p-6 rounded-lg items-center ${
                item.reverse ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="w-full">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-auto rounded-md object-cover"
                />
              </div>
              <div className="w-full space-y-2">
                <h4 className="text-xl sm:text-2xl font-bold text-orange-500">{item.title}</h4>
                {item.points.map((pt, i2) => (
                  <p key={i2} className="text-base text-gray-200 leading-relaxed">
                    {pt}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PRICING ADVANTAGE ================= */}
      <section className="relative overflow-hidden py-14 px-4 md:px-8 text-white" data-aos="fade-up">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/images/pricing-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80 z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-6xl mx-auto text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500">
            VIZX Pricing Advantage
          </h2>

          {/* Unified paragraph size on mobile */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Choosing VIZX Global Recruiters offers substantial financial benefits. You can save up to
            73% on recruitment costs for senior recruiters and 84% for junior recruiters annually.
            These savings are achievable by eliminating benefits and operational costs, and by
            offering a recruiting service that fits all types of recruiters.
          </p>

          {/* Table: keep text uniform on mobile (text-base) to avoid mismatched sizes */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-base sm:text-sm md:text-base text-left border-collapse">
              <thead className="bg-black text-white">
                <tr>
                  <th className="border px-3 sm:px-4 py-2">USA Staffing Agencies</th>
                  <th className="border px-3 sm:px-4 py-2">Senior Recruiters</th>
                  <th className="border px-3 sm:px-4 py-2">Junior Recruiters</th>
                  <th className="border px-3 sm:px-4 py-2">VIZX Global Recruiters</th>
                </tr>
              </thead>
              <tbody className="bg-gray-900 text-gray-200">
                <tr>
                  <td className="border px-3 sm:px-4 py-2">Recruiter Salary</td>
                  <td className="border px-3 sm:px-4 py-2">$90,000</td>
                  <td className="border px-3 sm:px-4 py-2">$52,000</td>
                  <td className="border px-3 sm:px-4 py-2">$24,000</td>
                </tr>
                <tr>
                  <td className="border px-3 sm:px-4 py-2">Benefits</td>
                  <td className="border px-3 sm:px-4 py-2">$15,000</td>
                  <td className="border px-3 sm:px-4 py-2">$9,000</td>
                  <td className="border px-3 sm:px-4 py-2">T &amp; C Apply</td>
                </tr>
                <tr>
                  <td className="border px-3 sm:px-4 py-2">Operational Costs</td>
                  <td className="border px-3 sm:px-4 py-2">$50,000</td>
                  <td className="border px-3 sm:px-4 py-2">$67,000</td>
                  <td className="border px-3 sm:px-4 py-2">$0</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Paragraphs below table — same baseline as above */}
          <div className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            <p className="mb-4">
              The US staffing industry is projected to be worth $207.2 billion in 2024, with a
              significant portion of this expenditure going towards recruitment costs. Our solutions
              offering will not only reduce your recruitment costs when you start using the process,
              but you will also gain access to a team of seasoned professionals who can streamline
              your hiring. This allows your internal team to focus on core business activities,
              driving overall growth and success.
            </p>
            <p>
              Make the smart choice and switch to VIZX Global as your RPO partner, to optimize your
              recruitment process and achieve substantial savings for your staffing business.
            </p>
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-md transition text-sm sm:text-base">
            Get Started Today
          </button>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="px-4 md:px-8 py-12 md:py-16" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500 text-center mb-6">
            Frequently Asked Questions
          </h3>
          <p className="text-base text-gray-200 text-center mb-6 leading-relaxed">
            We understand that you might have some questions that you would like clarifications especially
            in the RPO industry. We are here to help.
          </p>
          <ul className="space-y-3 sm:space-y-4">
            {[
              { question: "What is RPO in recruitment?", answer: "RPO (Recruitment Process Outsourcing) is when an organization transfers all or part of its recruitment processes to an external provider." },
              { question: "How does recruitment process outsourcing work?", answer: "In RPO, an external provider manages the recruitment lifecycle, from job profiling to onboarding, using their expertise to optimize results." },
              { question: "What's the difference between RPO, in-house teams and staffing?", answer: "RPO partners act as an extension of your business, while staffing agencies typically provide temporary or contract workers. In-house teams are fully internal." },
              { question: "What is Healthcare RPO?", answer: "Healthcare RPO focuses specifically on recruitment for healthcare roles, ensuring compliance with industry regulations and quality standards." },
              { question: "What are healthcare RPO services?", answer: "They include sourcing, screening, compliance checks, onboarding, and managing healthcare professionals for hospitals, clinics, and other medical facilities." },
              { question: "WE RECRUIT FOR YOU, AS YOU!", answer: "As your Healthcare RPO partner, our experienced recruiters only work for you. We learn your culture and values and package that knowledge with proven best practices and the latest recruitment technology to quickly hire top talent while ensuring a seamless candidate experience." },
              { question: "Vibrant Culture and Hospitality", answer: "We pride ourselves on building a positive, supportive environment for both clients and candidates—ensuring smooth collaboration and a warm, welcoming approach." },
            ].map((item, idx) => (
              <li key={idx} className="rounded-md overflow-hidden">
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left bg-gray-800 p-4 focus:outline-none flex justify-between items-center"
                >
                  <span className="font-bold text-orange-500 text-base">{item.question}</span>
                  <span className="text-lg">{openFAQ === idx ? "−" : "+"}</span>
                </button>
                {openFAQ === idx && (
                  <div className="bg-gray-900 px-4 py-3 text-base text-gray-200 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black px-4 md:px-8 py-6 border-t border-gray-800 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} VizX Global Solutions. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default RPO;
