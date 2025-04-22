import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const RPO: React.FC = () => {
  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  // Optional: Simple FAQ toggle
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="bg-black text-white w-full min-h-screen font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-start bg-cover bg-center px-8"
        style={{ backgroundImage: "url('/images/rpo-hero.jpg')" }} // Update with your hero image path
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-left max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-orange-500 leading-tight mb-4"
          >
            RPO SOLUTIONS
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-200 mt-2"
          >
            Connecting Talent with Opportunity
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl text-gray-300 mt-6 max-w-3xl leading-relaxed"
          >
            We specialize in connecting top talent with the right opportunities.
            Our expert team is dedicated to finding the perfect match for both
            employers and job seekers, ensuring success and growth for all.
            Discover your next career move or find your ideal candidate with us.
          </motion.p>
        </div>
      </section>

      {/* Areas Where We Specialize */}
      <section className="px-8 py-16" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
            Areas Where We Specialize
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg flex items-center justify-center">
              <span className="text-xl font-semibold">Recruitment</span>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg flex items-center justify-center">
              <span className="text-xl font-semibold">Quality Control</span>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg flex items-center justify-center">
              <span className="text-xl font-semibold">Payroll</span>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg flex items-center justify-center">
              <span className="text-xl font-semibold">Staffing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Is VizX Ideal */}
      <section className="px-8 py-16 bg-gray-900" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
            Why Is VizX Ideal as Your RPO Partner
          </h3>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            We understand the know-hows of the business
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Experience */}
            <div className="bg-black p-6 rounded-lg">
              <h4 className="text-xl font-bold text-orange-500 mb-2">
                Experience
              </h4>
              <p className="text-gray-200 leading-relaxed">
                With over 20 years in the RPO industry, our comprehensive
                Recruitment, Quality Compliance and Payroll service ensure that
                your organization has access to the best talent while
                maintaining streamlined and efficient processes.
              </p>
            </div>
            {/* Keen to Details */}
            <div className="bg-black p-6 rounded-lg">
              <h4 className="text-xl font-bold text-orange-500 mb-2">
                Keen to Details
              </h4>
              <p className="text-gray-200 leading-relaxed">
                Our rigorous Quality Compliance process ensures that you
                experience peace of mind in knowing your staff are well in line
                with International Industry Standards of their respective
                disciplines.
              </p>
            </div>
            {/* Updated Seamless Services */}
            <div className="bg-black p-6 rounded-lg">
              <h4 className="text-xl font-bold text-orange-500 mb-2">
                Updated Seamless Services
              </h4>
              <p className="text-gray-200 leading-relaxed">
                Our experienced Payroll Team will ensure your staff receives
                seamless Payroll services ensuring hours are well compensated as
                per State and Federal Laws, benefits remittances and
                compensations are performed. Also ensuring Tax returns and any
                documents are handled electronically and timely.
              </p>
            </div>
            {/* Tailored Approach */}
            <div className="bg-black p-6 rounded-lg">
              <h4 className="text-xl font-bold text-orange-500 mb-2">
                Tailored Approach
              </h4>
              <p className="text-gray-200 leading-relaxed">
                With years of experience, we can present a tailored approach
                that meets your specific recruitment needs, resulting in higher
                productivity and a more productive and successful workforce.
              </p>
            </div>
          </div>
          {/* "Get Started Today" button */}
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

      {/* Benefits You Gain */}
      <section className="px-8 py-16" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
            Benefits You Gain From VizX
          </h3>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Our RPO expertise in the healthcare industry extends your hiring
            capacity and capabilities based on your business needs and cultures,
            ensuring attainable business goals and sustainable growth.
          </p>

          {/* Benefits List with images */}
          <div className="space-y-12">
            {/* 1. VIZX RPO improves quality of hires */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-800 p-6 rounded-lg">
              <div>
                {/* Replace with your actual image path */}
                <img
                  src="/images/rpo-quality.jpg"
                  alt="Quality of hires"
                  className="rounded-md"
                />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-orange-500 mb-2">
                  VIZX RPO improves quality of hires
                </h4>
                <p className="text-gray-200 leading-relaxed">
                  Our RPO expertise in the healthcare industry extends your
                  hiring capacity and capabilities based on your business needs
                  and cultures, ensuring attainable business goals and
                  sustainable growth.
                </p>
                <p className="text-gray-200 leading-relaxed mt-2">
                  RPO provides also deeper pipelines, more effective screening
                  assessment and selection methods that yield qualified
                  candidates, build more diverse talent pools and connect
                  employers with stronger candidates.
                </p>
              </div>
            </div>

            {/* 2. Cost-per-hire & time-to-fill go down */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-800 p-6 rounded-lg">
              <div className="order-1 md:order-none">
                <h4 className="text-2xl font-bold text-orange-500 mb-2">
                  Cost-per-hire & time-to-fill go down
                </h4>
                <p className="text-gray-200 leading-relaxed">
                  VIZX improves your company’s efficiencies by bringing in top
                  rigor and expertise to your recruitment needs ensuring growth
                  in your business metrics and cultural alignment, with less
                  room for improvement. In many cases, a recruitment and
                  effective hiring team can cut cost-per-hire up to 20%,
                  significantly reducing turnaround time by up to 70% for many
                  clients. Plus it cuts the invisible cost of unfilled jobs.
                </p>
              </div>
              <div className="order-2 md:order-none">
                <img
                  src="/images/rpo-cost.jpg"
                  alt="Cost reduction"
                  className="rounded-md"
                />
              </div>
            </div>

            {/* 3. VIZX Global offers greater flexibility & scalability */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-800 p-6 rounded-lg">
              <div>
                <img
                  src="/images/rpo-flexibility.jpg"
                  alt="Flexibility & scalability"
                  className="rounded-md"
                />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-orange-500 mb-2">
                  VIZX Global offers greater flexibility & scalability
                </h4>
                <p className="text-gray-200 leading-relaxed">
                  VIZX offers recruiting services to scale your organization’s
                  hiring needs. That flexibility is what typically makes RPO
                  more cost effective as it offers leaders peace of mind in
                  scaling up or down based on market trends, cushioning more
                  businesses from shocks. For this reason, RPO services are
                  preferred more compared to an in-house recruiting team.
                </p>
              </div>
            </div>

            {/* 4. Stronger hiring manager & recruiter relationships */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-800 p-6 rounded-lg">
              <div className="order-1 md:order-none">
                <h4 className="text-2xl font-bold text-orange-500 mb-2">
                  Stronger hiring manager & recruiter relationships
                </h4>
                <p className="text-gray-200 leading-relaxed">
                  Recent research shows that the dynamic between hiring managers
                  and recruiters is a top performance driver for high-impact
                  talent functions. VIZX Global supports this synergy by not
                  only maintaining alignment between hiring managers and
                  recruiters but also providing real-time analytics on
                  recruitment operations—spanning from candidate sourcing to
                  final placement.
                </p>
                <p className="text-gray-200 leading-relaxed mt-2">
                  That means all parties are on the same page not only about
                  what candidates they’re looking for, but how to screen them,
                  provide feedback to each other and when / how to make a final
                  hire.
                </p>
              </div>
              <div className="order-2 md:order-none">
                <img
                  src="/images/rpo-relationships.jpg"
                  alt="Hiring manager & recruiter"
                  className="rounded-md"
                />
              </div>
            </div>

            {/* 5. RPO leads to process improvement */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-800 p-6 rounded-lg">
              <div>
                <img
                  src="/images/rpo-improvement.jpg"
                  alt="Process improvement"
                  className="rounded-md"
                />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-orange-500 mb-2">
                  RPO leads to process improvement
                </h4>
                <p className="text-gray-200 leading-relaxed">
                  At VIZX Global we have extensive experience in the latest
                  recruiting technology and the right tools for your company.
                  Leveraging ATS software for seamless candidate tracking, to
                  familiarity with popular Vendor Management Systems. We also
                  use social media platforms to ensure we get the job done.
                </p>
                <p className="text-gray-200 leading-relaxed mt-2">
                  VIZX Global Solutions enhances the overall efficiency and
                  effectiveness of your interhiring processes. Process
                  improvement not only makes your candidate experience better,
                  among other advantages of RPO, it makes your business run more
                  effectively too!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIZX Pricing Advantage */}
      <section className="px-8 py-16 bg-gray-900" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
            VIZX Pricing Advantage
          </h3>
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            Choosing VIZX Global Recruiters offers substantial financial
            benefits. You can save up to 73% on recruitment costs for senior
            recruiters and 84% for junior recruiters annually. These savings are
            achievable by eliminating benefits and operational costs, and by
            offering a recruiting service that fits all types of recruiters.
          </p>

          {/* Recruiter Table  */}
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto text-left bg-black">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="px-4 py-2 text-gray-200">
                    USA Staffing Agencies
                  </th>
                  <th className="px-4 py-2 text-gray-200">Senior Recruiters</th>
                  <th className="px-4 py-2 text-gray-200">Junior Recruiters</th>
                  <th className="px-4 py-2 text-gray-200">
                    VIZX Global Recruiters
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="px-4 py-2 text-gray-300">Recruiter Salary</td>
                  <td className="px-4 py-2 text-gray-300">$90,000</td>
                  <td className="px-4 py-2 text-gray-300">$52,000</td>
                  <td className="px-4 py-2 text-gray-300">$24,000</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="px-4 py-2 text-gray-300">Benefits</td>
                  <td className="px-4 py-2 text-gray-300">$15,000</td>
                  <td className="px-4 py-2 text-gray-300">$9,000</td>
                  <td className="px-4 py-2 text-gray-300">See note</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="px-4 py-2 text-gray-300">
                    Operational Costs
                  </td>
                  <td className="px-4 py-2 text-gray-300">$50,000</td>
                  <td className="px-4 py-2 text-gray-300">$67,000</td>
                  <td className="px-4 py-2 text-gray-300">$0</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xl text-gray-300 mt-6 leading-relaxed">
            The US staffing industry is projected to be worth $207.2 billion in
            2024, with a significant portion of this expenditure going towards
            recruitment costs. Our solutions offering will not only reduce your
            recruitment costs when you start using the process, but you will
            also gain access to a team of seasoned professionals who can
            streamline your hiring. This allows your internal team to focus on
            core business activities, driving overall growth and success.
          </p>
          <p className="text-xl text-gray-300 mt-4 leading-relaxed">
            Make the smart choice and switch to VIZX Global as your RPO partner,
            to optimize your recruitment process and achieve substantial savings
            for your staffing business.
          </p>

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

      {/* Frequently Asked Questions */}
      <section className="px-8 py-16" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
            Frequently Asked Questions
          </h3>
          <p className="text-xl text-gray-200 mb-6">
            We understand that you might have some questions that you would like
            clarifications especially in the RPO industry. We are here to help.
          </p>

          {/* Simple FAQ list (click to toggle if you wish) */}
          <ul className="space-y-4">
            {[
              {
                question: "What is RPO in recruitment?",
                answer:
                  "RPO (Recruitment Process Outsourcing) is when an organization transfers all or part of its recruitment processes to an external provider.",
              },
              {
                question: "How does recruitment process outsourcing work?",
                answer:
                  "In RPO, an external provider manages the recruitment lifecycle, from job profiling to onboarding, using their expertise to optimize results.",
              },
              {
                question:
                  "What's the difference between RPO, in-house teams and staffing?",
                answer:
                  "RPO partners act as an extension of your business, while staffing agencies typically provide temporary or contract workers. In-house teams are fully internal.",
              },
              {
                question: "What is Healthcare RPO?",
                answer:
                  "Healthcare RPO focuses specifically on recruitment for healthcare roles, ensuring compliance with industry regulations and quality standards.",
              },
              {
                question: "What are healthcare RPO services?",
                answer:
                  "They include sourcing, screening, compliance checks, onboarding, and managing healthcare professionals for hospitals, clinics, and other medical facilities.",
              },
              {
                question: "WE RECRUIT FOR YOU, AS YOU!",
                answer:
                  "As your Healthcare RPO partner, our experienced recruiters only work for you. We learn your culture and values and package that knowledge with proven best practices and the latest recruitment technology to quickly hire top talent while ensuring a seamless candidate experience.",
              },
              {
                question: "Vibrant Culture and Hospitality",
                answer:
                  "We pride ourselves on building a positive, supportive environment for both clients and candidates—ensuring smooth collaboration and a warm, welcoming approach.",
              },
            ].map((item, idx) => (
              <li key={idx}>
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left bg-gray-800 p-4 rounded-md focus:outline-none"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-orange-500">
                      {item.question}
                    </span>
                    <span className="text-xl">
                      {openFAQ === idx ? "-" : "+"}
                    </span>
                  </div>
                </button>
                {openFAQ === idx && (
                  <div className="bg-gray-900 px-4 py-3 rounded-b-md text-gray-200">
                    {item.answer}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black px-8 py-6 border-t border-gray-800">
        <p className="text-sm text-gray-400 text-center">
          &copy; {new Date().getFullYear()} VizX Global Solutions. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default RPO;
