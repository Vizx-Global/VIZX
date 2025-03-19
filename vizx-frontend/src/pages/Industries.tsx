import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Industry {
  name: string;
  image: string;
  description: string;
}

const Industries: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Industry data inspired by your content
  const industries: Industry[] = [
    {
      name: 'Healthcare',
      image: '/images/healthcare.png',
      description:
        'Innovative solutions to enhance patient care and streamline healthcare operations.',
    },
    {
      name: 'Real Estate',
      image: '/images/real-estate.png',
      description:
        'Expertise in property management, investment strategies, and market analysis.',
    },
    {
      name: 'Technology',
      image: '/images/technology.png',
      description:
        'Driving digital transformation with cutting-edge tech and tailored IT solutions.',
    },
    {
      name: 'Manufacturing',
      image: '/images/manufacturing.png',
      description:
        'Optimizing production and quality control through smart automation.',
    },
    {
      name: 'Finance',
      image: '/images/finance.png',
      description:
        'Empowering financial institutions with robust technology and outsourcing services.',
    },
    {
      name: 'Travel',
      image: '/images/travel.png',
      description:
        'Revolutionizing travel experiences with innovative digital solutions.',
    },
    {
      name: 'Supply Chain',
      image: '/images/supply-chain.png',
      description:
        'Enhancing logistics and operations with integrated, efficient solutions.',
    },
    {
      name: 'Creative',
      image: '/images/creative.png',
      description:
        'Fostering creativity in media and design with innovative strategies.',
    },
    {
      name: 'Human Resource',
      image: '/images/human-resource.png',
      description:
        'Transforming HR processes with strategic outsourcing and talent management.',
    },
  ];

  // Utility function to create a slug from industry name
  const createSlug = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="bg-black text-white w-full min-h-screen font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/industries-hero.jpg')" }}
        data-aos="fade-in"
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-7xl md:text-8xl font-bold text-orange-500 leading-tight mb-4">
            Industries
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200">
            Tailored Solutions Across Diverse Sectors
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-8" data-aos="fade-up">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-orange-500 mb-6">Our Expertise</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            At VIZX Global, we leverage years of industry experience to deliver tailored solutions across multiple sectors.
            From healthcare and finance to technology and creative industries, our team ensures that each solution is 
            as unique as the challenges you face.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 px-8" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-orange-500 mb-12 text-center">Our Industries</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Link
                key={index}
                to={`/industry/${createSlug(industry.name)}`}
                className="block"
                data-aos="zoom-in"
              >
                <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
                  <div className="flex items-center justify-center mb-4">
                    <img src={industry.image} alt={industry.name} className="w-16 h-16" />
                  </div>
                  <h3 className="text-2xl font-bold text-orange-500 mb-2 text-center">
                    {industry.name}
                  </h3>
                  <p className="text-lg text-gray-300 text-center">
                    {industry.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-800" data-aos="fade-up">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-orange-500 mb-6">Partner with Us</h2>
          <p className="text-xl text-gray-300 mb-8">
            Discover how our industry expertise can help drive your business forward.
          </p>
          <a
            href="/contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Industries;
