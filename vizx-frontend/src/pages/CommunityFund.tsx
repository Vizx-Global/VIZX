import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/common/ContactForm";

const CommunityFund: React.FC = () => {
  // Optional slideshow images for hero background
  const heroImages = [
    "/images/rpo-improvement.jpg",//Rememeber to add pictures to the slideshow
  ];
  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="community-fund-page font-sans bg-black text-white w-full overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center bg-center bg-cover"
        style={{ backgroundImage: `url(${heroImages[currentHero]})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold text-orange-500 mb-6"
          >
            Vizx Community Fund
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200"
          >
            Providing financial support and hope to Vizx employees & the wider
            community during times of need—because we believe prosperity is
            shared.
          </motion.p>
        </div>
      </section>

      {/* Overview */}
      <section className="px-8 py-24 max-w-5xl mx-auto" id="overview">
        <h2 className="text-5xl font-bold text-orange-500 mb-6 leading-tight">
          About the Fund
        </h2>
        <p className="text-xl text-gray-200 leading-relaxed">
          The <span className="text-orange-500 font-semibold">Vizx Community
          Fund</span> channels a portion of our profits into impactful grants
          that cover bereavement expenses, schooling fees, medical emergencies,
          and other unforeseen hardships—both for our employees and for
          under‑resourced communities where we operate. Managed by an
          independent steering committee, the fund is built on transparency,
          empathy, and the conviction that business success should uplift
          everyone connected to it.
        </p>
      </section>

      {/* How It Works */}
      <section className="bg-orange-500 text-black py-20" id="how-it-works">
        <div className="px-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-4xl font-bold mb-4">How It Works</h3>
            <ul className="space-y-4 text-lg leading-relaxed list-disc list-inside">
              <li>
                <span className="font-semibold">Funding:</span> Vizx dedicates
                2% of annual net profits plus voluntary employee donations.
              </li>
              <li>
                <span className="font-semibold">Governance:</span> A
                cross‑functional committee reviews applications monthly.
              </li>
              <li>
                <span className="font-semibold">Disbursement:</span> Grants are
                paid directly to service providers (schools, hospitals, etc.)
                or beneficiaries within 7 business days of approval.
              </li>
              <li>
                <span className="font-semibold">Reporting:</span> Quarterly
                impact reports are published on this page.
              </li>
            </ul>
          </div>
          <img
            src="/images/how-it-works.jpg"
            alt="Community support illustration"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Impact Stories */}
      <section className="px-8 py-24 max-w-5xl mx-auto" id="impact">
        <h3 className="text-5xl font-bold text-orange-500 mb-6 leading-tight">
          Impact in Action
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Bereavement Assistance",
              img: "/images/impact-bereavement.jpg",
              text: "When Jane, a customer‑support agent, lost her father, the fund covered funeral costs so she could focus on healing with her family."
            },
            {
              title: "School Fees Scholarship",
              img: "/images/impact-school.jpg",
              text: "Over 120 students in Nairobi have received tuition support—ensuring bright minds stay in class, not at home."
            },
            {
              title: "Medical Emergency",
              img: "/images/impact-medical.jpg",
              text: "A lifesaving surgery for Paul, the son of our security guard, was fully financed by the fund within 48 hours of request."
            }
          ].map((story, i) => (
            <div
              key={i}
              className="bg-black border border-gray-800 rounded-lg p-6 flex flex-col"
            >
              <img
                src={story.img}
                alt={story.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h4 className="text-2xl font-semibold text-orange-500 mb-2">
                {story.title}
              </h4>
              <p className="text-lg text-gray-200 flex-1 leading-relaxed">
                {story.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Eligibility & Application */}
      <section className="bg-gray-900 py-20" id="apply">
        <div className="px-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl font-bold text-orange-500 mb-6">
              Who Can Apply?
            </h3>
            <ul className="space-y-4 text-lg text-gray-200 leading-relaxed list-disc list-inside">
              <li>Current Vizx employees & immediate family members.</li>
              <li>Community‑based organizations partnered with Vizx.</li>
              <li>Students residing within 50 km of Vizx offices.</li>
            </ul>

            <h3 className="text-4xl font-bold text-orange-500 mt-10 mb-6">
              Application Process
            </h3>
            <ol className="space-y-4 text-lg text-gray-200 leading-relaxed list-decimal list-inside">
              <li>Download and complete the <a href="/docs/community-fund-form.pdf" className="underline">application form</a>.</li>
              <li>Attach supporting documents (e.g., invoices, admission letters).</li>
              <li>Submit via <a href="mailto:communityfund@vizxglobal.com" className="underline">communityfund@vizxglobal.com</a> or HR office.</li>
            </ol>
          </div>
          <img
            src="/images/eligibility.jpg"
            alt="Eligibility and application"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Get Involved */}
      <section className="px-8 py-24 max-w-5xl mx-auto" id="get-involved">
        <h3 className="text-5xl font-bold text-orange-500 mb-6 leading-tight">
          Get Involved
        </h3>
        <p className="text-xl text-gray-200 mb-8 leading-relaxed">
          You can strengthen the fund’s reach by donating, volunteering, or
          partnering with us. Every contribution—big or small—translates into a
          life changed for the better.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="/donate"
            className="bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-8 rounded-md text-center"
          >
            Make a Donation
          </a>
          <a
            href="#overview"
            className="border border-orange-500 hover:bg-orange-500 hover:text-black text-orange-500 font-semibold py-3 px-8 rounded-md text-center"
          >
            Volunteer Opportunities
          </a>
        </div>
      </section>

      {/* Contact Form CTA */}
      <section className="px-8 pb-24" id="contact">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-5xl font-bold text-orange-500 mb-6 leading-tight">
            Have Questions?
          </h3>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Our CSR team is ready to assist you. Reach out and we’ll get back as
            soon as possible.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-6 border-t border-gray-800 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Vizx Global Solutions. Community
          Fund. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default CommunityFund;
