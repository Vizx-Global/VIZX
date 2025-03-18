import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'; // Carousel library
import { FaPlay } from 'react-icons/fa'; // Import icons for video and industry cards
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';

const Home: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 2000, // Lower speed makes it smoother
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // No delay between slides
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1, autoplay: true, cssEase: "linear" },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1, autoplay: true, cssEase: "linear" },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1, autoplay: true, cssEase: "linear" },
      },
    ],
  };

  const handlePlayVideo = () => setIsVideoPlaying(true);
  const handleCloseVideo = () => setIsVideoPlaying(false);

  return (
    <div className="home-page">
      {/* Hero Section with Fullscreen Background Video */}
      <section className="relative w-screen h-[50vh] overflow-hidden">
        {/* Background Video */}
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

        {/* Hero Content (overlaid on video) */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center text-white">
          <button
            className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center"
            onClick={handlePlayVideo}
          >
            <FaPlay className="text-white text-2xl font-bold" />
          </button>
          <h1 className="text-4xl font-bold mt-6">Explore Our Top-Tier Solutions</h1>
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

      {/* Industries Section */}
      <section className="industries bg-black py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl text-white font-bold">You're in great company</h2>
          <p className="text-lg text-white mt-2">
            Select your industry, see our process in it.
          </p>
          <div className="industry-cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {/* Healthcare */}
            <a
              href="/industry/healthcare"
              className="industry-card mx-2 px-4 py-2 bg-black rounded-md flex items-center justify-between hover:bg-black hover:shadow-lg transition-all"
            >
              <img src="/images/healthcare.png" alt="Healthcare" className="w-16 h-16 mr-4" />
              <span className="text-white text-lg">Healthcare</span>
            </a>

            {/* Real Estate */}
            <a
              href="/industry/real-estate"
              className="industry-card mx-2 px-4 py-2 bg-black rounded-md flex items-center justify-between hover:bg-black hover:shadow-lg transition-all"
            >
              <img src="/images/real-estate.png" alt="Real Estate" className="w-16 h-16 mr-4" />
              <span className="text-white text-lg">Real Estate</span>
            </a>

            {/* Technology */}
            <a
              href="/industry/technology"
              className="industry-card mx-2 px-4 py-2 bg-black rounded-md flex items-center justify-between hover:bg-black hover:shadow-lg transition-all"
            >
              <img src="/images/technology.png" alt="Technology" className="w-16 h-16 mr-4" />
              <span className="text-white text-lg">Technology</span>
            </a>

            {/* Manufacturing */}
            <a
              href="/industry/manufacturing"
              className="industry-card mx-2 px-4 py-2 bg-black rounded-md flex items-center justify-between hover:bg-black hover:shadow-lg transition-all"
            >
              <img src="/images/manufacturing.png" alt="Manufacturing" className="w-16 h-16 mr-4" />
              <span className="text-white text-lg">Manufacturing</span>
            </a>

            {/* Finance */}
            <a
              href="/industry/finance"
              className="industry-card mx-2 px-4 py-2 bg-black rounded-md flex items-center justify-between hover:bg-black hover:shadow-lg transition-all"
            >
              <img src="/images/finance.png" alt="Finance" className="w-16 h-16 mr-4" />
              <span className="text-white text-lg">Finance</span>
            </a>

            {/* Travel */}
            <a
              href="/industry/travel"
              className="industry-card mx-2 px-4 py-2 bg-black rounded-md flex items-center justify-between hover:bg-black hover:shadow-lg transition-all"
            >
              <img src="/images/travel.png" alt="Travel" className="w-16 h-16 mr-4" />
              <span className="text-white text-lg">Travel</span>
            </a>

            {/* Supply Chain */}
            <a
              href="/industry/supply-chain"
              className="industry-card mx-2 px-4 py-2 bg-black rounded-md flex items-center justify-between hover:bg-black hover:shadow-lg transition-all"
            >
              <img src="/images/supply-chain.png" alt="Supply Chain" className="w-16 h-16 mr-4" />
              <span className="text-white text-lg">Supply Chain</span>
            </a>

            {/* Creative */}
            <a
              href="/industry/creative"
              className="industry-card mx-2 px-4 py-2 bg-black rounded-md flex items-center justify-between hover:bg-black hover:shadow-lg transition-all"
            >
              <img src="/images/creative.png" alt="Creative" className="w-16 h-16 mr-4" />
              <span className="text-white text-lg">Creative</span>
            </a>

            {/* Human Resource */}
            <a
              href="/industry/human-resource"
              className="industry-card mx-2 px-4 py-2 bg-black rounded-md flex items-center justify-between hover:bg-black hover:shadow-lg transition-all"
            >
              <img src="/images/human-resource.png" alt="Human Resource" className="w-16 h-16 mr-4" />
              <span className="text-white text-lg">Human Resource</span>
            </a>
          </div>
        </div>
      </section>

      {/* Why Vizx Section */}
      <section className="why-vizx bg-black relative py-20 flex items-center">
        {/* Left Image Section */}
        <div className="w-1/2">
          <img
            src="/images/whyvizx.jpg"
            alt="Why Vizx Background"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right Content Section */}
        <div className="w-1/2 text-white px-10">
          <h2 className="text-3xl font-bold">
            Why <span className="text-orange-500 italic">VIZX</span>
          </h2>
          <p className="mt-3 space-y-2 italic">
            We understand the critical importance of effective business processing outsourcing in today’s competitive market.
            Our range of specialized solutions is designed to empower your business and drive success in the Recruitment Processing Outsourcing sector and beyond.
            From our years of experience in providing BPO services, we believe that we are better equipped to serve your business needs.
          </p>
          <div className="mt-6">
            <h3 className="font-bold italic">HERE ARE SOME REASONS:</h3>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start">
                <span className="text-orange-500 pr-2">➔</span> <i>It is the most stable democracy in East Africa</i>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 pr-2">➔</span> <i>It is the gateway to the East African market of almost 500 million consumers</i>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 pr-2">➔</span> <i>Kenya has young, educated, English-speaking workforce</i>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 pr-2">➔</span> <i>Its largest export market is the United States</i>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 pr-2">➔</span> <i>Kenya is the regional logistics hub and leading regional financial hub</i>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 pr-2">➔</span> <i>It is the leading destination for foreign direct investment and venture capital</i>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 pr-2">➔</span> <i>Kenya generates over 90% of its energy from renewable sources</i>
              </li>
            </ul>
            <div className="mt-6">
              <button className="bg-black text-white px-6 py-3 rounded-lg border border-white flex items-center">
                Learn More <span className="ml-2 text-orange-500">➤</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients bg-black py-16">
        <div className="container bg-black mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Our Clients</h2>
          <Slider {...sliderSettings}>
            {[...Array(8)].map((_, index) => (
              <div key={index} className="p-4">
                <div className="client-logo-container bg-black w-full h-40 flex items-center justify-center rounded-md">
                  <img
                    src={`/images/client${index + 1}.png`}
                    alt={`Client ${index + 1}`}
                    className="w-full h-auto rounded-md"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners bg-black py-16">
        <div className="container mx-auto bg-black">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Partners we work with</h2>
          <Slider {...sliderSettings}>
            {[...Array(6)].map((_, index) => (
              <div key={index} className="p-4">
                <div className="bg-black w-full h-40 flex items-center justify-center rounded-md">
                  <img
                    src={`/images/Partner${index + 1}.png`}
                    alt={`Partner ${index + 1}`}
                    className="w-full h-auto rounded-md"
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
