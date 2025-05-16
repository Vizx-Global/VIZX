import React, { useEffect, ReactNode } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaHandshake, FaGraduationCap, FaUsers, FaGlobe } from 'react-icons/fa';

interface Story {
  id: number;
  title: string;
  quote: string;
  description: string;
  image: string;
}

const exEmployeeBenefits: string[] = [
  'Quarterly alumni newsletter with exclusive insights',
  'Invitations to virtual and in-person networking events',
  'Priority consideration for all open positions and referral bonuses',
  'Access to our LinkedIn alumni group for peer support',
  'Discounted registration for Vizx-sponsored conferences and webinars',
  'Mentorship programs pairing you with senior leaders',
  'Career development resources including workshops and certifications',
  'Global alumni directory to stay connected',
];

const mentorshipPrograms: { title: string; icon: ReactNode }[] = [
  { title: 'Leadership Coaching', icon: <FaHandshake className="text-orange-500 w-6 h-6" /> },
  { title: 'Skill Building Workshops', icon: <FaGraduationCap className="text-orange-500 w-6 h-6" /> },
  { title: 'Peer Mentoring Circles', icon: <FaUsers className="text-orange-500 w-6 h-6" /> },
  { title: 'Global Roundtables', icon: <FaGlobe className="text-orange-500 w-6 h-6" /> },
];

const vizxStories: Story[] = [
  {
    id: 1,
    title: 'Emma’s Comeback Story',
    quote: '“Vizx welcomed me back with open arms and provided the training I needed to excel in my new role.”',
    description:
      'Emma took a sabbatical to raise her children and returned through our alumni rehire program. Today she leads a cross-functional team driving operational excellence.',
    image: '/images/stories/emma.jpg',
  },
  {
    id: 2,
    title: 'Michael’s Data Transformation',
    quote: '“From support rep to data analyst—Vizx invested in my growth every step of the way.”',
    description:
      'Michael shifted careers internally via structured upskilling workshops. His insights now save clients thousands of dollars annually.',
    image: '/images/stories/michael.jpg',
  },
  {
    id: 3,
    title: 'Aisha’s Startup Success',
    quote: '“The mentorship I received gave me the confidence to launch my own venture.”',
    description:
      'After leaving Vizx to start her company, Aisha continues to collaborate with our innovation lab on strategic projects.',
    image: '/images/stories/aisha.jpg',
  },
  {
    id: 4,
    title: 'David’s Global Career',
    quote: '“Connecting with peers worldwide expanded my network beyond imagine.”',
    description:
      'Through our global events, David relocated from Nairobi to San Francisco and leads a multi-national support center.',
    image: '/images/stories/david.jpg',
  },
  {
    id: 5,
    title: 'Sophia’s Certification Path',
    quote: '“The Vizx workshops helped me earn my PMP certification and accelerate my career.”',
    description:
      'Sophia leveraged our career resources to achieve project management certification within six months of departure.',
    image: '/images/stories/sophia.jpg',
  },
  {
    id: 6,
    title: 'Carlos’s Community Impact',
    quote: '“I gave back through mentorship and helped new grads land their first role.”',
    description:
      'As a mentor, Carlos trains recent alumni, fostering both professional growth and community connection.',
    image: '/images/stories/carlos.jpg',
  },
];

const EmployeeWelfare: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-black text-white w-full min-h-screen font-sans">
      <main className="flex flex-col space-y-32">
        {/* Hero Section */}
        <section
          className="relative h-96 flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/images/welfare-hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="relative z-10 text-center px-6">
            <h1 className="text-6xl font-bold text-orange-500 mb-4">Alumni & Employee Welfare</h1>
            <p className="text-2xl text-gray-200 max-w-2xl mx-auto">
              Our commitment extends beyond tenure. Discover programs, resources, and community designed for our alumni network.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="px-8" data-aos="fade-up">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-semibold text-orange-500 mb-6 text-center">Exclusive Alumni Benefits</h2>
            <p className="text-lg text-gray-300 mb-6">
              Join thousands of Vizx alumni who continue to enjoy lifelong perks and support:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {exEmployeeBenefits.map((benefit, idx) => (
                <li
                  key={idx}
                  className="flex items-start space-x-3 text-xl text-gray-200"
                >
                  <FaUsers className="w-5 h-5 text-orange-500 mt-1" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Mentorship Programs */}
        <section className="bg-gray-900 py-20" data-aos="fade-up">
          <div className="max-w-6xl mx-auto px-8">
            <h2 className="text-4xl font-semibold text-orange-500 mb-8">Mentorship & Development</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {mentorshipPrograms.map((program, idx) => (
                <div
                  key={idx}
                  className="bg-black rounded-lg p-6 flex flex-col items-center text-center space-y-4"
                >
                  {program.icon}
                  <h3 className="text-2xl font-medium text-white">{program.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vizx Stories */}
        <section className="px-8" data-aos="fade-up">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-semibold text-orange-500 mb-8">Alumni Spotlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {vizxStories.map((story) => (
                <div
                  key={story.id}
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-semibold text-orange-500">{story.title}</h3>
                    <blockquote className="italic text-gray-300">{story.quote}</blockquote>
                    <p className="text-lg text-gray-200">{story.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </section>
      </main>

      
    </div>
  );
};

export default EmployeeWelfare;
