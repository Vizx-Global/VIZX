import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AI: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const features = [
    { title: 'State of AI in BPO', stats: [
        { value: '164.8', label: 'BPO market (2023, $B)' },
        { value: '8.35%', label: 'CAGR (2023–2032)' },
        { value: '34%+', label: 'AI segment CAGR' },
    ]},
    { title: 'Conversational AI', stats: [
        { value: '70%', label: 'Automated interactions' },
        { value: '40%', label: 'Avg. handle time ↓' },
        { value: '25%', label: 'FCR ↑' },
    ]},
    { title: 'Generative AI in Recruitment', stats: [
        { value: '40%', label: 'Time-to-fill ↓' },
        { value: '30%', label: 'Candidate engagement ↑' },
        { value: '71%', label: 'Cost-per-hire ↓' },
    ]},
    { title: 'Workflow Automation & RPA', stats: [
        { value: '60%', label: 'Manual tasks eliminated' },
        { value: '35%', label: 'SLA compliance ↑' },
        { value: 'Real-time', label: 'Actionable reports' },
    ]},
  ];

  return (
    <div className="bg-black text-white w-full min-h-screen font-sans">
      <main className="px-8 py-12 space-y-16">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center bg-cover bg-center rounded-lg overflow-hidden" style={{ backgroundImage: "url('/images/ai-hero.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <h1 className="relative text-5xl md:text-6xl font-bold text-orange-500 text-center">AI in BPO: Driving the Future of Outsourcing</h1>
        </section>

        {/* Features Grid */}
        <section data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map(f => (
              <div key={f.title} className="bg-[#0d0d0d] p-6 rounded-xl shadow-lg flex flex-col items-center">
                <h3 className="text-2xl font-semibold text-orange-500 mb-4 text-center">{f.title}</h3>
                <ul className="space-y-2">
                  {f.stats.map(({ value, label }) => (
                    <li key={label} className="flex flex-col items-center">
                      <span className="text-4xl font-bold text-white">{value}</span>
                      <span className="text-sm text-gray-400">{label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Impact & Future CTA */}
        <section data-aos="fade-up" className="text-center space-y-6">
          <h2 className="text-4xl font-bold text-orange-500">The Impact & Future</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
            <div className="bg-[#0d0d0d] p-6 rounded-lg w-full md:w-1/3">
              <span className="text-3xl font-bold text-white">30%</span>
              <p className="mt-2 text-gray-200">Cost savings</p>
            </div>
            <div className="bg-[#0d0d0d] p-6 rounded-lg w-full md:w-1/3">
              <span className="text-3xl font-bold text-white">25%</span>
              <p className="mt-2 text-gray-200">Workforce productivity ↑</p>
            </div>
            <div className="bg-[#0d0d0d] p-6 rounded-lg w-full md:w-1/3">
              <span className="text-3xl font-bold text-white">90%+</span>
              <p className="mt-2 text-gray-200">Growth in AI investment</p>
            </div>
          </div>
          <a href="/contact" className="inline-block mt-6 px-8 py-3 bg-orange-500 text-black font-semibold rounded-full transition-colors hover:bg-orange-600">Talk to our AI Experts</a>
        </section>

        {/* Vizx Implementation */}
        <section data-aos="fade-up">
          <h2 className="text-4xl font-bold text-orange-500 mb-4">Vizx's AI & Automation in Action</h2>
          <p className="text-xl text-gray-200 leading-relaxed">
            We have integrated AI chatbots that autonomously handle Tier‑1 customer inquiries 24/7, reducing live agent ticket volume by 50%. Our RPA bots execute payroll, invoicing, and compliance reporting workflows, cutting manual errors by 60% and accelerating cycle times. Meanwhile, our AI‑driven recruitment engine automates candidate sourcing, resume screening, and interview scheduling—boosting recruiter efficiency by 45%. Finally, our predictive analytics dashboards provide real‑time insights into performance metrics, enabling proactive SLA management and strategic capacity planning.
          </p>
        </section>

        {/* Leadership Vision */}
        <section data-aos="fade-up">
          <h2 className="text-4xl font-bold text-orange-500 mb-4">Leading the AI-Powered BPO Revolution</h2>
          <p className="text-xl text-gray-200 leading-relaxed">
            We envision a future where hyperautomation orchestrates processes end‑to‑end, delivering zero‑touch operations at scale. Our adaptive learning models continuously retrain on live interactions for ever‑improving accuracy and personalization. By unifying AI insights across voice, chat, email, and social channels, we enable seamless omnichannel customer experiences. With proprietary integrations and early partnerships, Vizx offers exclusive AI capabilities that keep us steps ahead of the competition.
          </p>
        </section>

        {/* FAQ Section */}
        <section data-aos="fade-up">
          <h2 className="text-4xl font-bold text-orange-500 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">How soon can we integrate AI into our BPO workflows?</h3>
              <p className="text-gray-200 leading-relaxed">
                Depending on the complexity, Vizx can deploy core AI chatbots and RPA automations within 4–6 weeks, with continuous enhancement thereafter.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">What kinds of ROI can we expect?</h3>
              <p className="text-gray-200 leading-relaxed">
                Clients typically see 20–30% cost savings and a 15–25% increase in agent productivity within the first year of AI adoption.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Is Vizx’s AI customizable?</h3>
              <p className="text-gray-200 leading-relaxed">
                Absolutely. We tailor models to your industry, language requirements, and existing systems for seamless integration.
              </p>
            </div>
          </div>
        </section>

        {/* Get Started CTA */}
        <section data-aos="fade-up" className="text-center py-12">
          <h2 className="text-4xl font-bold text-orange-500 mb-4">Ready to Elevate Your BPO with AI?</h2>
          <p className="text-xl text-gray-200 leading-relaxed mb-6">
            Connect with our AI experts today to schedule a demo and discover how Vizx can transform your outsourcing operations.
          </p>
          <a href="/contact" className="inline-block px-10 py-4 bg-orange-500 text-black font-semibold rounded-full transition-colors hover:bg-orange-600">Get Started Now</a>
        </section>
      </main>
    </div>
  );
};

export default AI;
