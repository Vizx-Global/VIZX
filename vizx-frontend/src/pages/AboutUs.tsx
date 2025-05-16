import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

interface Highlight {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '2017',
    title: 'VIZX Global',
    description:
      'Created VIZX Global to focus on business process outsourcing (BPO) with offices in California and Nairobi, Kenya.',
  },
  {
    year: '2020',
    title: 'Covid-19 Pandemic',
    description:
      'Despite the Covid-19 pandemic, VIZX thrived and grew in the healthcare staffing industry. The company diversifies in offering full scale BPO solutions, servicing different needs in different industries. Industries such as finance, real estate, tech, manufacturing, etc, were added to the portfolio.',
  },
  {
    year: '2022',
    title: 'Our Upscale',
    description:
      'Located in one of Nairobis most iconic and secure office buildings, VIZX moved operations to Britam Towers. Not only a new workspace, but the company increased its seats to 400 with an ability to scale up to 600+ seats.',
  },
  {
    year: '2025',
    title: 'Look into the future',
    description:
      'With our diverse business portfolio, we currently service companies with combined annual revenues exceeding $1 Billion.',
  },
];

const teamMembers: TeamMember[] = [
  {
    name: 'Dorika Beckett',
    role: 'Group CEO',
    description: 'She is a dynamic Group CEO, entrepreneur, and investor who has built and led companies valued at over $2 billion for the past 25 years',
    image: '/images/dorika-beckett.jpg',
  },
  {
    name: 'John Mamboleo',
    role: 'VIZX CEO',
    description: 'As CEO of Vizx Global, he drives innovation and efficiency in business process outsourcing on a global scale.',
    image: '/images/john-mamboleo.jpg',
  },
  {
    name: 'Nicole McClure',
    role: 'Head of Operations',
    description: 'She leverages her deep healthcare experience and business acumen to drive growth and excellence.',
    image: '/images/nicole-mcclure.jpg',
  },
  {
    name: 'Dana Feustel',
    role: 'Global CPO',
    description: 'She has leveraged her expertise to help our employees navigate U.S. markets, enhancing cross-cultural communication and business success',
    image: '/images/dana-feustel.jpg',
  },
];

const highlights: Highlight[] = [
  {
    title: 'Innovative Technology',
    description:
      'We leverage cutting-edge technology to deliver solutions that drive efficiency, innovation, and measurable business outcomes. Our tech stack includes AI-driven analytics, automation platforms, cloud-based infrastructure, and custom software solutions tailored to each client’s needs. ',
    image: '/images/IMG_0002.jpg',
    reverse: false,
  },
  {
    title: 'Global Expertise',
    description: 'With operations in the U.S. and Africa, and a leadership team that spans multiple continents, our perspective is truly global. We’ve worked with Fortune 500 companies, scaling startups, and public institutions to solve complex cross-border challenges. This global insight enables us to deliver culturally relevant, scalable, and adaptive solutions that resonate across markets.',
    image: '/images/IMG_6079.jpg',
    reverse: true,
  },
  {
    title: 'Customer Centric',
    description: 'At the heart of our operations is a relentless focus on customer success. We don’t just deliver services — we build partnerships. By aligning with your strategic goals, we become an extension of your team. Our customer success framework ensures transparency, proactive communication, and continuous performance optimization — because your growth is our mission.',
    image: '/images/IMG_6310.jpg',
    reverse: false,
  },
];

const AboutUs: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-black text-white w-full min-h-screen font-sans">
      <section className="relative h-[60vh] flex items-center justify-start bg-cover bg-center px-8" style={{ backgroundImage: "url('/images/about-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-left">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="text-7xl md:text-8xl font-bold text-orange-500 leading-tight mb-4">
            We help fulfill your <br className="hidden md:block" /> business purpose.
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }} className="text-2xl md:text-3xl text-gray-200 mt-8 max-w-4xl leading-relaxed">
            With VIZX Global as your partner, you can rest assured that your business will benefit from our comprehensive suite of solutions.
          </motion.p>
        </div>
      </section>

      <div className="px-8">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_30rem] gap-8 relative">
          <div className="space-y-32">
            <section data-aos="fade-up">
              <div className="max-w-5xl">
                <h3 className="text-6xl font-bold text-orange-500 mb-6 leading-tight">Our Story</h3>
                <p className="text-xl text-gray-200 leading-relaxed">
                  VIZX Global Solutions was founded with a bold ambition—to redefine how businesses connect with the best talent across the world. We began our journey with a focus on Business Process Outsourcing (BPO) and have since evolved into a strategic growth partner across industries like healthcare, technology, real estate, and media. With a foundation in integrity, innovation, and customer-centricity, VIZX thrives on delivering outcomes that matter.
                </p>
              </div>
            </section>

           
            <section data-aos="fade-up">
  <div className="max-w-5xl space-y-6">
    <h3 className="text-5xl font-bold text-orange-500 mb-6 leading-tight">What We Do</h3>
    <p className="text-xl text-gray-200 leading-relaxed">
      VIZX Global Solutions is a full-service Business Process Outsourcing (BPO) firm offering customized, scalable, and efficient solutions across key business verticals. We support organizations by managing complex operations, enabling them to focus on their core business goals while we drive productivity, cost savings, and customer satisfaction.
    </p>
    <p className="text-xl text-gray-200 leading-relaxed">
      Our services are delivered by highly skilled professionals and supported by advanced technology infrastructure, making us a reliable partner in today's fast-evolving digital economy. With a proven track record in high-performance outcomes and global partnerships, we deliver real results, real fast.
    </p>
    <ul className="list-disc pl-6 text-xl text-gray-200 space-y-2">
      <li><strong>Customer Experience (CX) & Contact Center Services:</strong> We provide multilingual, omnichannel support that enhances customer engagement and retention through personalized and responsive care.</li>
      <li><strong>Back Office Support:</strong> From data entry and document management to compliance and quality assurance, we streamline your internal operations to reduce workload and improve performance.</li>
      <li><strong>Technical Outsourcing:</strong> Our 24/7 tech support ensures your digital operations run smoothly. From helpdesk services to IT infrastructure support, we’re always connected so you can be too.</li>
      <li><strong>Recruitment Process Outsourcing (RPO):</strong> We enable faster hiring, better candidate quality, and lower cost-per-hire with strategic, end-to-end recruitment solutions tailored to your growth.</li>
    </ul>
  </div>
</section>


           <section data-aos="fade-up">
  <div className="max-w-5xl space-y-6">
    <h3 className="text-5xl font-bold text-orange-500 mb-6 leading-tight">Our Core Values</h3>
    <p className="text-xl text-gray-200 leading-relaxed">
      At VIZX Global Solutions, our values aren't just statements — they’re the foundation of how we operate, deliver, and grow. Every interaction, process, and service is guided by principles that ensure excellence, inclusion, and innovation.
    </p>
    <ul className="list-disc pl-6 text-xl text-gray-200 space-y-2">
      <li><strong>Integrity:</strong> We are accountable, transparent, and honest in every partnership. We keep our promises and stand by our commitments.</li>
      <li><strong>Innovation:</strong> We push boundaries, adopt emerging technologies, and find smarter ways to solve real-world business challenges.</li>
      <li><strong>Excellence:</strong> We don’t just meet expectations — we exceed them. Our teams aim for operational brilliance and sustained quality in every task.</li>
      <li><strong>Collaboration:</strong> Success is a shared journey. We work hand-in-hand with clients, leveraging collective intelligence to achieve outstanding results.</li>
      <li><strong>Inclusivity:</strong> Rooted in Africa, we believe in the power of diverse teams. We foster equity and opportunity for all, building communities and uplifting people through impactful work.</li>
    </ul>
  </div>
</section>


 <section data-aos="fade-up">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
    {/* Text content */}
    <div className="md:w-2/3 space-y-6">
      <h3 className="text-5xl font-bold text-orange-500 mb-6 leading-tight">Our Global Presence</h3>
      <p className="text-xl text-gray-200 leading-relaxed">
        VIZX Global Solutions operates at the intersection of innovation and international reach. With headquarters in California and a major operations hub in Nairobi, Kenya, we are strategically positioned to serve businesses around the world with exceptional efficiency and cultural fluency.
      </p>
      <p className="text-xl text-gray-200 leading-relaxed">
        Our presence in the United States enables us to stay closely connected with our clients and industry trends in North America, ensuring every solution is aligned with the expectations of Western markets. Meanwhile, our Nairobi office — located in the iconic Britam Tower — provides access to a highly educated, multilingual workforce and a rapidly growing innovation ecosystem. With over 400 seats and the ability to scale up to 600+, this facility is a powerhouse for global delivery excellence.
      </p>
     
      
    </div>

    {/* Image */}
    <div className="md:w-3/5 h-full" data-aos="zoom-in">
      <img
        src="/images/global-presence.png" // Update this path to your actual image file
        alt="VIZX Global Offices"
        className="w-full h-full rounded-lg shadow-lg"
      />
    </div>
  </div>
</section>




            <section data-aos="fade-up">
              <div className="max-w-5xl space-y-16">
                {highlights.map((item, index) => (
                  <div key={index} className={`flex flex-col md:flex-row items-center ${item.reverse ? 'md:flex-row-reverse' : ''} gap-8`}>
                    <div className="md:w-1/2" data-aos="zoom-in">
                      <img src={item.image} alt={item.title} className="w-full rounded-lg" />
                    </div>
                    <div className="md:w-1/2">
                      <h3 className="text-5xl font-bold text-orange-500 mb-4 leading-tight">{item.title}</h3>
                      <p className="text-xl text-gray-200 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section data-aos="fade-up">
              <div className="max-w-5xl">
                <h3 className="text-5xl font-bold text-orange-500 mb-6 leading-tight">Meet Our Team</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
                  {teamMembers.map((member) => (
                    <div key={member.name} className="flex flex-col items-center space-y-2">
                      <div className="w-21 h-21 mx-auto mb-4 rounded-full overflow-hidden border-2 border-orange-500 flex items-center justify-center">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                      </div>
                      <h4 className="text-2xl font-semibold text-white">
                        {member.name}{' '}
                        <span className="text-orange-500 font-normal">, {member.role}</span>
                      </h4>
                      <p className="text-xl text-gray-200 text-center">{member.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section data-aos="fade-up" className="pb-24">
              <div className="max-w-5xl">
                <h3 className="text-5xl font-bold text-orange-500 mb-6 leading-tight">Get in Touch</h3>
                <p className="text-xl text-gray-200 leading-relaxed mb-6">
                  Ready to learn more about how we can help you fulfill your business purpose?
                </p>
                <a href="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors">
                  Contact Us
                </a>
              </div>
            </section>
          </div>

          <aside className="hidden md:block sticky top-0 h-screen overflow-y-auto border-l border-gray-700 pl-0 w-[30rem]">
            <h3 className="text-4xl font-bold text-orange-500 mb-4 mt-24">Timeline</h3>
            <ul className="border-l border-gray-600 ml-4">
              {timelineEvents.map((event, index) => (
                <li key={index} className="mb-8 ml-4 relative">
                  <span className="absolute -left-3 flex items-center justify-center w-3 h-3 rounded-full bg-orange-500 ring-2 ring-black" />
                  <time className="block mb-1 text-sm font-normal leading-none text-gray-400">{event.year}</time>
                  <h4 className="text-lg font-semibold text-white">{event.title}</h4>
                  <p className="text-base font-normal text-gray-300">{event.description}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>

      <footer className="bg-black px-8 py-6 border-t border-gray-800">
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} VizX Global Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;