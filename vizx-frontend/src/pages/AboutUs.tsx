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

// Timeline data
const timelineEvents: TimelineEvent[] = [
  {
    year: '2000',
    title: 'VIZX and eGames Group',
    description:
      'Vision Execution or Vizx, incorporated with a vision of incubating world changing ideas—from idea to execution to mature and thriving enterprises. The founders, experienced entrepreneurs, desired to utilize the emerging internet space to create solutions in all areas of business and life. eGames Group was founded as an online game software creator with original games in multi-player tournaments.',
  },
  {
    year: '2001',
    title: 'eGames and eUniverse',
    description:
      'eGames group acquired by eUniverse (which later became MySpace) and eventually became Skilljam.',
  },
  {
    year: '2004',
    title: 'Global Nurses Online',
    description:
      'Acquired Global Nurses Online, a small international Registered Nurse recruitment firm.',
  },
  {
    year: '2004',
    title: 'American Idol',
    description:
      'Online media company founded and partnered with American Idol.',
  },
  {
    year: '2005',
    title: 'ATC Healthcare Services',
    description:
      'Global Nurses Online pivoted to USA-based temporary healthcare staffing and became a franchise of ATC Healthcare Services.',
  },
  {
    year: '2007',
    title: 'Liberty Media Group',
    description:
      'Sold media company to a group that later sold the entity to Liberty Media Group.',
  },
  {
    year: '2008',
    title: 'Healthcare Staffing Growth',
    description:
      'Built a healthcare staffing business, achieving over $20 million in annual revenue—becoming the fastest-growing and largest franchisee of ATC Healthcare Services.',
  },
  {
    year: '2008',
    title: 'Livewell Home Care',
    description:
      'Livewell Home Care was founded to focus on offering in-home care for elderly clients.',
  },
  {
    year: '2009',
    title: 'Livewell Assisted Living',
    description:
      'Livewell Assisted Living was founded in North Carolina, focusing on highly personalized memory care in a home environment for six or fewer residents.',
  },
  {
    year: '2010',
    title: 'BlackTV247.com',
    description:
      'BlackTV247.com was founded as an online media company aggregating African American–focused content on a streaming platform.',
  },
  {
    year: '2010',
    title: 'WellTech Partners',
    description:
      'WellTech Partners was founded to focus on providing human capital consulting.',
  },
  {
    year: '2017',
    title: 'VIZX Global',
    description:
      'Created VIZX Global to focus on business process outsourcing (BPO) with offices in California and Nairobi, Kenya.',
  },
  {
    year: '2017',
    title: 'C2C Pro Group',
    description:
      'Created a real estate investment company focused on opportunistic investments in real estate on the African continent and the USA, later renamed C2C Pro Group.',
  },
  {
    year: '2017',
    title: 'Livewell Ventures (LV)',
    description:
      'Livewell Ventures (LV) was created to invest in creators and innovators, with investments in a Hurricane Katrina–focused film production, Mandela The Musical, and Carbon Counts (a climate-change innovator).',
  },
  {
    year: '2021',
    title: 'AI Startup',
    description:
      'Strategically invested in an AI-enabled startup focused on relationship therapy for adults.',
  },
  {
    year: '2022',
    title: 'NewBlazr',
    description:
      'Strategically invested in NewBlazr, a Los Angeles–based machine-learning-driven career management startup.',
  },
  {
    year: '2023 & Beyond',
    title: 'Beyond...',
    description:
      'Vision Execution moves forward, building a global company to serve our clients and partners in healthcare, technology, real estate, and media. Let’s partner together—today!',
  },
];

const teamMembers: TeamMember[] = [
  {
    name: 'John Mamboleo',
    role: 'CEO',
    description: 'Drives our strategic vision with over 20 years of industry experience.',
    image: '/images/john-mamboleo.jpg',
  },
  {
    name: 'Dorika Beckett',
    role: 'Group CEO',
    description: 'Leads our global expansion and ensures sustainable growth.',
    image: '/images/dorika-beckett.jpg',
  },
  {
    name: 'John Ngatia',
    role: 'Head of HR',
    description: 'Cultivates our diverse and engaging workplace culture.',
    image: '/images/john-ngatia.jpg',
  },
  // Add additional team members as needed
];

const highlights: Highlight[] = [
  {
    title: 'Innovative Technology',
    description:
      'We leverage cutting-edge technology to deliver solutions that drive efficiency and growth.',
    image: '/images/IMG_0002.jpg',
    reverse: false,
  },
  {
    title: 'Global Expertise',
    description: 'Our team brings a wealth of global experience to solve complex challenges.',
    image: '/images/IMG_6079.jpg',
    reverse: true,
  },
  {
    title: 'Customer Centric',
    description: 'At the heart of our operations is a relentless focus on customer success.',
    image: '/images/IMG_6310.jpg',
    reverse: false,
  },
];

const AboutUs: React.FC = () => {
  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="bg-black text-white w-full min-h-screen font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-start bg-cover bg-center px-8"
        style={{ backgroundImage: "url('/images/about-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-7xl md:text-8xl font-bold text-orange-500 leading-tight mb-4"
          >
            We help fulfill your <br className="hidden md:block" />
            business purpose.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-200 mt-8 max-w-4xl leading-relaxed"
          >
            With VIZX Global as your partner, you can rest assured that your
            business will benefit from our comprehensive suite of solutions.
          </motion.p>
        </div>
      </section>

      {/* 
        MAIN CONTENT & TIMELINE:
        We use a grid layout with two columns on medium screens:
        Left Column => main content from Our Story onward
        Right Column => sticky timeline
      */}
      <div className="px-8">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_30rem] gap-8 relative">
          {/* LEFT COLUMN: All the about content below the hero */}
          <div className="space-y-32">
            {/* Our Story */}
            <section data-aos="fade-up">
              <div className="max-w-5xl">
                <h3 className="text-6xl font-bold text-orange-500 mb-6 leading-tight">
                  Our Story
                </h3>
                <p className="text-xl text-gray-200 leading-relaxed">
                  Our journey began with a simple yet powerful idea: to connect
                  businesses worldwide with top-tier talent and innovative solutions.
                  Starting as a small team with a passion for driving efficiency, we’ve
                  evolved into a global force, empowering companies to meet their
                  objectives and grow sustainably.
                </p>
              </div>
            </section>

            {/* Our Journey */}
            <section data-aos="fade-up">
              <div className="max-w-5xl">
                <h3 className="text-5xl font-bold text-orange-500 mb-6 leading-tight">
                  Our Journey
                </h3>
                <ul className="list-none space-y-4 text-xl text-gray-200">
                  <li>
                    <span className="text-orange-500 font-semibold">25+ years</span> in
                    business — with 7 of them in the BPO industry.
                  </li>
                  <li>
                    <span className="text-orange-500 font-semibold">5 years</span> of
                    software outsourcing experience.
                  </li>
                  <li>Deep specialization in migrating Finance, DevOps, and more.</li>
                  <li>
                    A focus on <span className="font-semibold">long-term contracts</span>{' '}
                    and building enduring client relationships.
                  </li>
                </ul>
              </div>
            </section>

            {/* Mission, Vision & Objective */}
            <section data-aos="fade-up">
              <div className="max-w-5xl space-y-16">
                <div>
                  <h3 className="text-5xl font-bold text-orange-500 mb-6 leading-tight">
                    Our Mission
                  </h3>
                  <p className="text-xl text-gray-200 leading-relaxed">
                    To deliver innovative workforce solutions by connecting local and
                    global enterprises with mission-critical talent—fostering economic
                    growth and operational efficiency.
                  </p>
                </div>
                <div>
                  <h3 className="text-5xl font-bold text-orange-500 mb-6 leading-tight">
                    Our Vision
                  </h3>
                  <p className="text-xl text-gray-200 leading-relaxed">
                    To support the growth and efficiency of local and global enterprises
                    by harnessing African human capital, creating a bridge between
                    opportunity and talent.
                  </p>
                </div>
                <div>
                  <h3 className="text-5xl font-bold text-orange-500 mb-6 leading-tight">
                    Our Objective
                  </h3>
                  <p className="text-xl text-gray-200 leading-relaxed">
                    We aim to become an extension of your team—the company you call upon
                    whenever you need it, knowing we’ll respond swiftly and effectively.
                  </p>
                </div>
              </div>
            </section>

            {/* Highlights */}
            <section data-aos="fade-up">
              <div className="max-w-5xl space-y-16">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row items-center ${
                      item.reverse ? 'md:flex-row-reverse' : ''
                    } gap-8`}
                  >
                    {/* Image */}
                    <div className="md:w-1/2" data-aos="zoom-in">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full rounded-lg"
                      />
                    </div>
                    {/* Text */}
                    <div className="md:w-1/2">
                      <h3 className="text-5xl font-bold text-orange-500 mb-4 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-xl text-gray-200 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CSR */}
            <section data-aos="fade-up">
              <div className="max-w-5xl">
                <h3 className="text-5xl font-bold text-orange-500 mb-6 leading-tight">
                  Corporate Social Responsibility
                </h3>
                <p className="text-xl text-gray-200 leading-relaxed mb-6">
                  At VizX Global Solutions, CSR is woven into our organization’s fabric.
                  We believe our success goes hand-in-hand with the well-being of the
                  communities we serve.
                </p>
                <ul className="list-none space-y-4 text-xl text-gray-200 leading-relaxed">
                  <li>
                    <span className="text-orange-500 font-semibold">
                      Empowering Youth Through Education:
                    </span>{' '}
                    Partnering with local schools for technology workshops and career
                    development sessions.
                  </li>
                  <li>
                    <span className="text-orange-500 font-semibold">
                      Supporting Local Businesses & Entrepreneurs:
                    </span>{' '}
                    Providing mentorship and training to help small businesses thrive.
                  </li>
                  <li>
                    <span className="text-orange-500 font-semibold">
                      Volunteer Outreach & Community Engagement:
                    </span>{' '}
                    Actively participating in charitable events and community services.
                  </li>
                  <li>
                    <span className="text-orange-500 font-semibold">
                      Sustainability Initiatives:
                    </span>{' '}
                    Promoting eco-friendly practices and resource conservation.
                  </li>
                  <li>
                    <span className="text-orange-500 font-semibold">
                      Employee-Led Projects:
                    </span>{' '}
                    Empowering our staff to drive initiatives that create a positive
                    social impact.
                  </li>
                </ul>
              </div>
            </section>

            {/* Meet Our Team */}
            <section data-aos="fade-up">
              <div className="max-w-5xl">
                <h3 className="text-5xl font-bold text-orange-500 mb-6 leading-tight">
                  Meet Our Team
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {teamMembers.map((member) => (
                    <div
                      key={member.name}
                      className="flex flex-col items-center space-y-2"
                    >
                      {/* Circular Image Frame */}
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden border-2 border-orange-500 flex items-center justify-center">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-2xl font-semibold text-white">
                        {member.name}{' '}
                        <span className="text-orange-500 font-normal">
                          , {member.role}
                        </span>
                      </h4>
                      <p className="text-xl text-gray-200 text-center">
                        {member.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact / CTA */}
            <section data-aos="fade-up" className="pb-24">
              <div className="max-w-5xl">
                <h3 className="text-5xl font-bold text-orange-500 mb-6 leading-tight">
                  Get in Touch
                </h3>
                <p className="text-xl text-gray-200 leading-relaxed mb-6">
                  Ready to learn more about how we can help you fulfill your business
                  purpose?
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN: Sticky Timeline (wider: 30rem) */}
          <aside className="hidden md:block sticky top-0 h-screen overflow-y-auto border-l border-gray-700 pl-0 w-[30rem]">
            <h3 className="text-4xl font-bold text-orange-500 mb-4 mt-24">Timeline</h3>
            <ul className="border-l border-gray-600 ml-4">
              {timelineEvents.map((event, index) => (
                <li key={index} className="mb-8 ml-4 relative">
                  {/* Circle */}
                  <span className="absolute -left-3 flex items-center justify-center w-3 h-3 rounded-full bg-orange-500 ring-2 ring-black" />
                  {/* Year */}
                  <time className="block mb-1 text-sm font-normal leading-none text-gray-400">
                    {event.year}
                  </time>
                  {/* Title */}
                  <h4 className="text-lg font-semibold text-white">{event.title}</h4>
                  {/* Description */}
                  <p className="text-base font-normal text-gray-300">
                    {event.description}
                  </p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black px-8 py-6 border-t border-gray-800">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} VizX Global Solutions. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default AboutUs;
