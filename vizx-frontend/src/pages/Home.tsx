import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { FaPlay } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Home: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnHover: false,
    cssEase: 'linear',
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const handlePlayVideo = () => setIsVideoPlaying(true);
  const handleCloseVideo = () => setIsVideoPlaying(false);

  return (
    <div className="home-page overflow-x-hidden">
      {/* ------------------------ HERO SECTION ------------------------ */}
      <section className="relative w-full h-screen overflow-hidden absolute inset-0 bg-black bg-opacity-50">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-110 object-cover z-0"
        >
          <source src="/images/globe.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center text-white">
          <button
            className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center"
            onClick={handlePlayVideo}
          >
            <FaPlay className="text-white text-2xl font-bold" />
          </button>
          <h1 className="text-5xl font-bold mt-6">
            Africa’s leading BPO Powerhouse
          </h1>
          <Link to="/solutions">
            <button className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-md shadow-lg">
              Get Started
            </button>
          </Link>
        </div>

        {isVideoPlaying && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="relative w-11/12 max-w-4xl">
              <button
                className="absolute top-2 right-2 bg-red-500 text-white text-lg font-bold rounded-full px-3 py-1"
                onClick={handleCloseVideo}
                style={{ zIndex: 1000 }}
              >
                ✖
              </button>
              <video controls autoPlay className="w-full h-auto rounded-md">
                <source src="/images/intro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </section>

      {/* ============= OUR SOLUTIONS SECTION ============= */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Solutions</h2>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              'CX Solutions',
              'Merchant Services',
              'Recruitment Process Outsourcing',
              'Back Office Solutions',
              'Real Estate Solutions',
            ].map((title, i) => (
              <div
                key={i}
                className="p-6 border border-gray-700 rounded-md hover:border-orange-500 hover:animate-glow transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-2 text-orange-400">{title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {/* Add content based on title */}
                  {title === 'CX Solutions' &&
                    'Leverage global expertise to deliver cost-effective outsourcing solutions that drive growth and enhance customer satisfaction.'}
                  {title === 'Merchant Services' &&
                    'Empower your business with cutting-edge digital solutions for seamless payment processing and operational automation.'}
                  {title === 'Recruitment Process Outsourcing' &&
                    'Connect your company with top-tier talent from diverse markets to fuel innovation and achieve your strategic hiring goals.'}
                  {title === 'Back Office Solutions' &&
                    'Optimize your core operations through streamlined processes and advanced technology, allowing you to focus on your primary business objectives.'}
                  {title === 'Real Estate Solutions' &&
                    'Optimize your real estate operations through streamlined processes and advanced technology for greater efficiency and success.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= LOCATIONS SECTION ============= */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Locations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border p-6 rounded-md shadow-md">
              <img
                src="/images/nairobi-office1.jpg"
                alt="Nairobi"
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2">Nairobi, Kenya</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Our flagship office in East Africa, harnessing a talented workforce of young, educated, English-speaking professionals. This hub supports clients worldwide with agile BPO solutions.
              </p>
            </div>
            <div className="border p-6 rounded-md shadow-md">
              <img
                src="/images/us-office.jpg"
                alt="Los Angeles"
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2">Los Angeles, USA</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Strategically located for easy access to North American clients. Our LA team provides seamless communication, ensuring your operations run smoothly around the clock.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============= CLIENTS SECTION ============= */}
      <section className="clients bg-black py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Our Clients</h2>
          <Slider {...sliderSettings}>
            {[...Array(8)].map((_, index) => (
              <div key={index} className="p-4">
                <div className="bg-black w-full h-24 flex items-center justify-center rounded-md">
                  <img
                    src={`/images/client${index + 1}.png`}
                    alt={`Client ${index + 1}`}
                    className="max-h-full w-auto rounded-md"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* ============= ABOUT & WHY VIZX SECTION ============= */}op
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-left w-full">
              <h2 className="text-3xl font-bold">
                <span className="text-white">About</span>{' '}
                <span className="text-orange-500">Us</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed inline">
                We are a leading provider of innovative outsourcing solutions across industries, empowering businesses to achieve their goals efficiently. Headquartered in Nairobi, Kenya, our global team is dedicated to delivering world-class results and strategic partnerships that foster long-term success.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed inline">
                 With decades of experience, our leadership has built a culture of excellence, providing services that span customer management, data processing & more.
              </p>
            </div>
            <div className="space-y-6 text-left w-full">
              <h2 className="text-3xl font-bold">
                <span className="text-white">Why</span>{' '}
                <span className="text-orange-500">VIZX?</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed inline">
                We strive to deliver customized solutions that drive measurable results for our clients. Our approach is grounded in a deep understanding of each client’s unique challenges and a commitment to innovation, efficiency, and collaboration.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed inline">
                 From our strategic presence in Kenya and the US to our investment in cutting-edge technology, every aspect of our operations is designed to help you stay ahead in a dynamic market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============= PARTNERS SECTION ============= */}
      <section className="partners bg-black py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Partners We Work With
          </h2>
          <Slider {...sliderSettings}>
            {[...Array(7)].map((_, index) => (
              <div key={index} className="p-4">
                <div className="bg-black w-full h-24 flex items-center justify-center rounded-md">
                  <img
                    src={`/images/Partner${index + 1}.png`}
                    alt={`Partner ${index + 1}`}
                    className="max-h-full w-auto rounded-md"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      
      {/* ============= TESTIMONIALS SECTION ============= */}
<section className="bg-black text-white py-16">
  <div className="container mx-auto px-4 text-center ">
    <h2 className="text-3xl font-bold mb-12">Hear From Our Clients</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
      {[
        {
          name: 'Nicole Mclure',
          role: 'CEO, Livewell Private Care',
          image: 'images/nicole-mcclure.jpg',
          quote:
            'I have had the pleasure of witnessing your teams outstanding contributions and dedication to providing top-notch services. I want to express my gratitude for the exceptional services provided by VIZX ISS. Your teams efforts have contributed significantly to Livewell’s success.',
        },
        {
          name: 'Sam Zahoor',
          role: 'Payroll, Operations & Logistics Manager at ATC West Healthcare, LosAngeles - CA',
          image: '/images/sam-zahoor.jpg',
          quote:
            'VIZX RPO and BPO services has been a game changer for our business operations. They have streamlined our processes, improved efficiency, and significantly reduced overhead costs. Their services have allowed us to focus on our core business while they handle the rest.',
        },
        {
          name: 'Joanne Foy',
          role: 'Director of Business Development - WellTech Partners',
          image: '/images/joanne-foy.jpg',
          quote:
            'Prospects often turn to customer service reviews when looking for an agency for direct hires. VIZX has been a consistent partner to WellTech Partners from the beginning of our relationship, helping us meet client expectiations which has increased our candidate placements.',
        },
        {
          name: 'Amanda Bryant',
          role: 'COO - Bryant Staffing Solutions',
          image: '/images/amanda-bryant.jpg',
          quote:
            'The team members at VIZX have consistently demonstrated their expertise and commitment to our company’s success. They are proactive and always ready to go the extra mile. Their deep understanding of our business needs has been instrumental in achieving our goals.',
        },
      ].map((testimonial, index) => (
        <div
          key={index}
          className="bg-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
          />
          <p className="inline text-sm text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
          <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
          <p className="text-sm text-orange-400">{testimonial.role}</p>
        </div>
      ))}
    </div>
  </div>
</section>
 </div>
  );
};

export default Home;
