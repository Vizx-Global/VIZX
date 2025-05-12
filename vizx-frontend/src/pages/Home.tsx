import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { FaPlay } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';

const Home: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Slider settings for clients/partners
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
      { breakpoint: 768,  settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480,  settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  // Handlers for hero video
  const handlePlayVideo = () => setIsVideoPlaying(true);
  const handleCloseVideo = () => setIsVideoPlaying(false);

  return (
    <div className="home-page overflow-x-hidden">
      {/* ------------------------ HERO SECTION  ------------------------ */}
      <section className="relative w-full h-[130vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
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
          <h1 className="text-4xl font-bold mt-6">
          Africa’s leading BPO Powerhouse 
          </h1>
          <Link to="/solutions">
            <button className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-md shadow-lg">
              Get Started
            </button>
          </Link>
        </div>

        {/* Click-to-Play Video Overlay */}
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
                <source src="/images/aivid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </section>
      {/* ------------------------ END HERO SECTION ------------------------ */}

      {/* ============= ABOUT & WHY VIZX SECTION ============= */}
<section className="bg-black text-white py-16">
<div className="container mx-auto px-4">
<div className="grid md:grid-cols-2 gap-12 items-start">
<div className="space-y-6 text-left w-full">
<h2 className="text-3xl font-bold">
<span className="text-white">About</span>{' '}
<span className="text-orange-500">Us</span>
</h2>
<p className="text-lg text-gray-300 leading-relaxed">
We are a leading provider of innovative outsourcing solutions across industries, empowering businesses to achieve their goals efficiently. Headquartered in Nairobi, Kenya, our global team is dedicated to delivering world-class results and strategic partnerships that foster long-term success.
</p>
<p className="text-lg text-gray-300 leading-relaxed">
With decades of combined experience, our leadership has built a culture of excellence and integrity, providing services that span customer management, data processing, and more.
</p>
</div>
<div className="space-y-6 text-left w-full">
<h2 className="text-3xl font-bold">
<span className="text-white">Why</span>{' '}
<span className="text-orange-500">VIZX?</span>
</h2>
<p className="text-lg text-gray-300 leading-relaxed">
We strive to deliver personalized solutions that drive measurable results for our clients. Our approach is grounded in a deep understanding of each client’s unique challenges and a commitment to innovation, efficiency, and collaboration.
</p>
<p className="text-lg text-gray-300 leading-relaxed">
From our strategic presence in Kenya and the US to our investment in cutting-edge technology, every aspect of our operations is designed to help you stay ahead in a dynamic market.
</p>
</div>
</div>
</div>
</section>


      {/* ============= LOCATIONS SECTION (Black Background) ============= */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Locations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Nairobi */}
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

            {/* Los Angeles */}
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

       {/* ============= CLIENTS SECTION (After Locations) ============= */}
       <section className="clients bg-black py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Our Clients</h2>
          <Slider {...sliderSettings}>
            {[...Array(4)].map((_, index) => (
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

      {/* ============= OUR SOLUTIONS SECTION (VizX-Specific) ============= */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Solutions</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {/* Strategic Outsourcing */}
            <div className="p-6 border border-gray-700 rounded-md">
              <h3 className="text-xl font-semibold mb-2">Strategic Outsourcing</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Leveraging global expertise to deliver cost-effective outsourcing solutions that drive growth.
              </p>
            </div>
            {/* Digital Transformation */}
            <div className="p-6 border border-gray-700 rounded-md">
              <h3 className="text-xl font-semibold mb-2">Digital Transformation</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Empowering businesses with cutting-edge digital solutions for seamless process automation.
              </p>
            </div>
            {/* Global Talent Acquisition */}
            <div className="p-6 border border-gray-700 rounded-md">
              <h3 className="text-xl font-semibold mb-2">Global Talent Acquisition</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Connecting companies with top-tier talent from diverse markets to fuel innovation.
              </p>
            </div>
            {/* Operational Efficiency */}
            <div className="p-6 border border-gray-700 rounded-md">
              <h3 className="text-xl font-semibold mb-2">Operational Efficiency</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Optimizing your operations through streamlined processes and advanced technology.
              </p>
            </div>
          </div>
        </div>
      </section>

 {/* ============= PARTNERS SECTION (After Why Africa) ============= */}
 <section className="partners bg-black py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Partners We Work With
          </h2>
          <Slider {...sliderSettings}>
            {[...Array(5)].map((_, index) => (
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

    </div>
  );
};

export default Home;
