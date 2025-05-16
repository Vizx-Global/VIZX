import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// --- Counter Component ---
const AnimatedCounter: React.FC<{ target: number; suffix?: string; duration?: number }> = ({
  target,
  suffix = '',
  duration = 2000,
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = React.useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          let start = 0;
          const increment = target / (duration / 16); // ~60fps
          const handle = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(handle);
            } else {
              setCount(Math.ceil(start));
            }
          }, 16);
          setHasAnimated(true);
        }
      },
      { threshold: 0.6 } // start animation when 60% of the element is in view
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [target, duration, hasAnimated]);

  return <span ref={ref}>{count.toLocaleString() + suffix}</span>;
};

// Simple accordion component for FAQs
const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-700 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex justify-between items-center focus:outline-none"
      >
        <span className="text-xl font-semibold text-white">{question}</span>
        <span className="text-orange-500 text-xl">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <p className="mt-2 text-gray-300 leading-relaxed">{answer}</p>}
    </div>
  );
};

const CreativeAndMarketingIndustry: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/creative-marketing-hero.jpg')" }}
        data-aos="fade-in"
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-orange-500 mb-4">
            Creative & Marketing
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            With a passion for creativity and a dedication to driving business growth, we empower organizations to achieve their marketing objectives efficiently and effectively.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Start Now
            </a>
            <a
              href="/contact"
              className="bg-transparent border border-orange-500 hover:bg-orange-600 hover:text-black text-orange-500 font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Core Creative & Marketing Solutions */}
      <section className="py-16 px-8 bg-gray-800" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-500 mb-6 text-center">
            Core Creative & Marketing Solutions We Outsource
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-10 text-center">
            With the dynamics in the business landscape, companies are always on the lookout for ways to remain competitive. By outsourcing creative and marketing services, you gain access to skilled professionals, cutting-edge strategies, and a wealth of resources to boost your brand's visibility.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong>Graphic Design:</strong> Eye-catching designs for logos, marketing materials, websites, and more.</li>
              <li><strong>Content Creation:</strong> Compelling copywriting, blog posts, articles, and social media content tailored to your audience.</li>
              <li><strong>Video Production:</strong> High-quality video content development for product demos, explainer videos, and more.</li>
            </ul>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong>Digital Marketing:</strong> Comprehensive digital strategies including SEO, PPC, email marketing, and social media management.</li>
              <li><strong>Brand Development:</strong> Strategic brand positioning, identity design, and brand management.</li>
              <li><strong>Campaign Management:</strong> End-to-end campaign planning, execution, and performance tracking across multiple channels.</li>
            </ul>
          </div>
          <div className="text-center mt-8">
            <a
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* What You Stand to Benefit */}
      <section className="py-16 px-8" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-500 mb-6 text-center">
            What You Stand to Benefit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl text-orange-500 font-bold mb-2">Reduced Labor Costs</h3>
              <p className="text-gray-300 leading-relaxed">
                Outsourcing creative and marketing tasks can significantly cut overhead costs associated with hiring and training in-house teams.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl text-orange-500 font-bold mb-2">Access to Expertise</h3>
              <p className="text-gray-300 leading-relaxed">
                We connect you with talented professionals who bring a wealth of knowledge and creativity to every project.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl text-orange-500 font-bold mb-2">Focus on Core Business</h3>
              <p className="text-gray-300 leading-relaxed">
                Free up your internal teams to concentrate on strategic growth initiatives while we handle the creative heavy-lifting.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl text-orange-500 font-bold mb-2">Innovation</h3>
              <p className="text-gray-300 leading-relaxed">
                VIZX stays ahead of industry trends and leverages cutting-edge technologies to deliver innovative solutions that keep your brand ahead of the competition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Creative & Marketing Solutions Outsourced */}
      <section className="py-16 px-8 bg-gray-800" data-aos="fade-up">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-orange-500 mb-6">
            Creative and Marketing Solutions Outsourced
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Request it. We will deliver.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-black p-4 rounded-lg border border-gray-700">
              <h3 className="text-lg text-orange-500 font-bold mb-2">Content Creation</h3>
              <p className="text-gray-300 text-sm">
                Blog writing, ebooks, whitepapers, video script writing
              </p>
            </div>
            <div className="bg-black p-4 rounded-lg border border-gray-700">
              <h3 className="text-lg text-orange-500 font-bold mb-2">Social Media</h3>
              <p className="text-gray-300 text-sm">
                Content planning & creation, campaign management, social media advertising
              </p>
            </div>
            <div className="bg-black p-4 rounded-lg border border-gray-700">
              <h3 className="text-lg text-orange-500 font-bold mb-2">Digital Marketing</h3>
              <p className="text-gray-300 text-sm">
                Search engine optimization (SEO), pay-per-click (PPC), email marketing, influencer marketing
              </p>
            </div>
            <div className="bg-black p-4 rounded-lg border border-gray-700">
              <h3 className="text-lg text-orange-500 font-bold mb-2">Graphic Design</h3>
              <p className="text-gray-300 text-sm">
                Branding, marketing collateral (brochures/flyers), web design assets
              </p>
            </div>
            <div className="bg-black p-4 rounded-lg border border-gray-700">
              <h3 className="text-lg text-orange-500 font-bold mb-2">Marketing Strategy</h3>
              <p className="text-gray-300 text-sm">
                Market research, campaign planning, brand positioning
              </p>
            </div>
            <div className="bg-black p-4 rounded-lg border border-gray-700">
              <h3 className="text-lg text-orange-500 font-bold mb-2">Marketing Analytics</h3>
              <p className="text-gray-300 text-sm">
                Performance tracking, ROI measurement, data analysis & reporting
              </p>
            </div>
            <div className="bg-black p-4 rounded-lg border border-gray-700">
              <h3 className="text-lg text-orange-500 font-bold mb-2">Web Design & Development</h3>
              <p className="text-gray-300 text-sm">
                Website creation/redesign, UX/UI design, e-commerce platform development
              </p>
            </div>
            <div className="bg-black p-4 rounded-lg border border-gray-700">
              <h3 className="text-lg text-orange-500 font-bold mb-2">Video Production</h3>
              <p className="text-gray-300 text-sm">
                Product demos, explainer videos, animated clips
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Start Today
            </a>
          </div>
        </div>
      </section>

      {/* Our Numbers */}
      <section className="py-16 px-8" data-aos="fade-up">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-orange-500 mb-6">
            Our Numbers Set Us Apart
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-8">
            <div>
              <p className="text-4xl font-bold text-orange-500">
                <AnimatedCounter target={23} />
              </p>
              <p className="text-gray-300 mt-2">Years in BPO & RPO</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-orange-500">
                <AnimatedCounter target={7} />
              </p>
              <p className="text-gray-300 mt-2">Years in Healthcare Industry</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-orange-500">
                <AnimatedCounter target={5000} suffix="+" />
              </p>
              <p className="text-gray-300 mt-2">Hires Placed Yearly</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-orange-500">
                <AnimatedCounter target={55} suffix="+" />
              </p>
              <p className="text-gray-300 mt-2">Clients Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-8 bg-gray-800" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-500 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8 text-center">
            We understand that you might have questions about outsourcing creative and marketing services. We’re here to help.
          </p>
          <FAQItem
            question="What are the main benefits of outsourcing creative and marketing services?"
            answer="Cost savings, specialized expertise, and the ability to scale quickly are key benefits of outsourcing."
          />
          <FAQItem
            question="How does outsourcing marketing services improve our brand consistency?"
            answer="By working with seasoned professionals who follow established guidelines, your brand messaging and visuals remain cohesive across channels."
          />
          <FAQItem
            question="What creative and marketing functions are commonly outsourced?"
            answer="Graphic design, content creation, digital marketing, video production, social media management, and more."
          />
          <FAQItem
            question="How do we choose the right creative or marketing service provider?"
            answer="Evaluate their portfolio, expertise in your industry, and client testimonials to ensure a strong fit for your goals."
          />
          <FAQItem
            question="Can outsourcing marketing services handle revisions and edits?"
            answer="Yes. We offer revision cycles to refine deliverables until they meet your satisfaction and brand standards."
          />
        </div>
      </section>
    </div>
  );
};

export default CreativeAndMarketingIndustry;
