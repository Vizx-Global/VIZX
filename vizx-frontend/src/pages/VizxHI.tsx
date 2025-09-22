import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HI: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const framework = [
    { icon: '/images/empathy-icon.jpg', title: 'Empathy-Driven Service', desc: 'Our human teams listen, understand, and respond with genuine care—building trust and loyalty.' },
    { icon: '/images/context-icon.jpg', title: 'Contextual Intelligence', desc: 'We combine customer history and real-time AI insights to deliver highly personalized interactions.' },
    { icon: '/images/adaptability-icon.jpeg', title: 'Adaptive Expertise', desc: 'Continuous training empowers our agents to adapt to evolving customer needs and complex queries.' },
    { icon: '/images/trust-icon.jpg', title: 'Ethical & Transparent', desc: 'We uphold the highest standards of data privacy and human oversight in every engagement.' },
  ];

  const testimonials = [
    { quote: '“Vizx’s human-first approach transformed our support experience—combining AI speed with genuine care.”', author: 'Sarah L., VP Customer Success' },
    { quote: '“Our satisfaction scores jumped 35% when Vizx integrated human agents empowered by AI insights.”', author: 'Mark T., Operations Director' },
    { quote: '“The balance of cutting-edge AI and human empathy is what sets Vizx apart from any BPO we’ve tried.”', author: 'Priya K., Global Program Manager' },
  ];

  const faqs = [
    { q: 'Why does human intelligence matter if AI can automate so much?', a: 'While AI excels at routine tasks and data analysis, human agents bring empathy, critical thinking, and emotional intelligence—qualities essential for high-value interactions.' },
    { q: 'How do you ensure consistency across AI and human interactions?', a: 'Our proprietary AI tools provide real-time guidance to agents, ensuring consistent messaging, accurate information, and adherence to brand voice.' },
    { q: 'Can the HI model scale for peak seasons?', a: 'Absolutely—our blended AI-human staffing model dynamically scales, with AI handling high-volume basics and humans managing complex or sensitive cases.' },
    { q: 'What industries benefit most from Vizx HI?', a: 'Industries with complex customer journeys—like healthcare, finance, and technology—see the greatest impact from our HI approach.' },
    { q: 'How long does implementation take?', a: 'Typical deployment of our HI framework takes 6–8 weeks, including training, integration, and testing phases.' },
    { q: 'Is my data secure when using human agents?', a: 'Yes—our agents follow strict data privacy protocols and we employ secure, compliant systems for all customer data handling.' },
    { q: 'How do you measure performance?', a: 'We track KPIs like CSAT, first-contact resolution, and average handle time, correlating them to both AI-driven metrics and human interaction quality.' },
    { q: 'Can I customize the level of AI assistance?', a: 'Vizx offers flexible AI configurations, allowing you to adjust the balance between automation and human touch based on your objectives.' },
    { q: 'What kind of training do agents receive?', a: 'Agents undergo continuous training in emotional intelligence, AI tool usage, and brand-specific guidelines to deliver high-quality service.' },
    { q: 'How is success measured in HI engagements?', a: 'Success is measured by combined metrics: cost savings, productivity gains, customer satisfaction, and repeat business rates.' },
  ];

  return (
    <div className="bg-black text-white w-full min-h-screen font-sans">
      <main className="px-4 sm:px-8 py-12 sm:py-16 space-y-12 sm:space-y-20">
        {/* Hero */}
        <section
          className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center bg-cover bg-center rounded-lg overflow-hidden"
          style={{ backgroundImage: "url('/images/vizx-hi.png')" }}
        >
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative text-center px-4" data-aos="zoom-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-500 mb-3 leading-tight">
              VIZX HI: Unleashing Human Intelligence
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Empowered by AI and rooted in empathy, our human experts deliver experiences that machines alone cannot match.
            </p>
          </div>
        </section>

        {/* Why HI Matters */}
        <section data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-6 text-center">
            Why Human Intelligence Matters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {[
              { t: 'Authentic Connections', d: '82% of customers still prefer talking to a human when their issue is complex or emotionally charged.' },
              { t: 'Trust & Satisfaction', d: 'Businesses that blend AI efficiency with human empathy see a 35% higher CSAT score on average.' },
              { t: 'Flexibility & Judgment', d: 'Humans excel at nuanced decisions, creative problem-solving, and handling exceptions that AI cannot predict.' },
            ].map((card) => (
              <div key={card.t} className="p-6 bg-[#0d0d0d] rounded-lg shadow-lg">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">{card.t}</h3>
                <p className="text-base sm:text-lg text-gray-200 leading-relaxed">{card.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AI vs HI: Comparison Table */}
        <section data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-6 text-center">
            AI &amp; HI: The Best of Both Worlds
          </h2>
          <div className="overflow-x-auto px-1 sm:px-4">
            <table className="min-w-full bg-[#0d0d0d] rounded-lg shadow-lg text-left">
              <thead className="text-base sm:text-lg">
                <tr className="border-b border-orange-500">
                  <th className="px-4 sm:px-6 py-3 text-white">Aspect</th>
                  <th className="px-4 sm:px-6 py-3 text-white">Artificial Intelligence</th>
                  <th className="px-4 sm:px-6 py-3 text-white">Human Intelligence</th>
                  <th className="px-4 sm:px-6 py-3 text-white">VIZX HI</th>
                </tr>
              </thead>
              <tbody className="text-sm sm:text-base text-gray-200">
                {[
                  ['Availability', '24/7 automated support', 'Scheduled human shifts', 'Hybrid coverage models'],
                  ['Data Handling', 'Processes large datasets instantly', 'Interprets nuanced context', 'Insight-driven guidance'],
                  ['Empathy', 'Lacks emotional understanding', 'Genuine human empathy', 'Emotion-informed automation'],
                  ['Adaptability', 'Updates via retraining', 'Real-time judgment calls', 'Continuous improvement loops'],
                ].map((row, i) => (
                  <tr key={row[0]} className={i !== 3 ? 'border-b border-orange-500' : ''}>
                    {row.map((cell, idx) => (
                      <td key={idx} className="px-4 sm:px-6 py-3">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Framework */}
        <section data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-6 text-center">
            Our HI Framework
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {framework.map((item) => (
              <div
                key={item.title}
                className="bg-[#0d0d0d] p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
                data-aos="fade-up"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl mb-4"
                />
                <h3 className="text-lg sm:text-xl font-semibold text-orange-500 mb-2">{item.title}</h3>
                <p className="text-base text-gray-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Pyramid with Images */}
        <section data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-6 text-center">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-start max-w-4xl mx-auto">
            <div className="hidden md:block">
              <img src="/images/hi-testimonial1.jpg" alt="Client 1" className="w-48 h-48 object-cover rounded-2xl mx-auto" />
            </div>

            <blockquote className="bg-[#0d0d0d] p-6 rounded-lg shadow-lg">
              <p className="italic text-base sm:text-lg text-gray-200">
                “Vizx’s human-first approach transformed our support experience—combining AI speed with genuine care.”
              </p>
              <cite className="block mt-4 text-orange-500 font-semibold text-sm sm:text-base">
                Sarah L., VP Customer Success
              </cite>
            </blockquote>

            <div className="hidden md:block">
              <img src="/images/hi-testimonial3.jpg" alt="Client 2" className="w-48 h-48 object-cover rounded-2xl mx-auto" />
            </div>

            <blockquote className="bg-[#0d0d0d] p-6 rounded-lg shadow-lg md:col-start-1">
              <p className="italic text-base sm:text-lg text-gray-200">
                “Our satisfaction scores jumped 35% when Vizx integrated human agents empowered by AI insights.”
              </p>
              <cite className="block mt-4 text-orange-500 font-semibold text-sm sm:text-base">
                Mark T., Operations Director
              </cite>
            </blockquote>

            <div className="hidden md:block md:col-start-2">
              <img src="/images/hi-testimonial2.jpg" alt="Client 3" className="w-48 h-48 object-cover rounded-2xl mx-auto" />
            </div>

            <blockquote className="bg-[#0d0d0d] p-6 rounded-lg shadow-lg md:col-start-3">
              <p className="italic text-base sm:text-lg text-gray-200">
                “The balance of cutting-edge AI and human empathy is what sets Vizx apart from any BPO we’ve tried.”
              </p>
              <cite className="block mt-4 text-orange-500 font-semibold text-sm sm:text-base">
                Priya K., Global Program Manager
              </cite>
            </blockquote>
          </div>
        </section>

        {/* FAQs as Accordion */}
        <section data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-6 text-center">FAQs</h2>
          <div className="w-full max-w-3xl mx-auto space-y-4 px-1 sm:px-4">
            {faqs.map((f, idx) => (
              <details
                key={idx}
                className="group bg-[#0d0d0d] rounded-md transition-all duration-300 border border-[#1a1a1a] open:bg-[#151515] open:border-orange-500"
              >
                <summary className="cursor-pointer flex justify-between items-center p-5 text-white text-base sm:text-lg font-medium marker:content-none">
                  {f.q}
                  <svg
                    className="ml-4 h-5 w-5 sm:h-6 sm:w-6 text-gray-400 transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-base text-gray-300 leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section data-aos="fade-up" className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-3">
            Ready for the HI + AI Advantage?
          </h2>
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-6">
            Discover how Vizx HI can elevate your customer experiences—combining AI intelligence with the irreplaceable human touch.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-black font-semibold rounded-full transition-colors hover:bg-gray-300 text-sm sm:text-base"
          >
            Connect with Our HI Team
          </a>
        </section>
      </main>
    </div>
  );
};

export default HI;
