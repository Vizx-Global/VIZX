import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'; // Carousel library
import { FaPlay, FaArrowRight } from 'react-icons/fa'; // Import icons for video and industry cards
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';

const Home: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  const handlePlayVideo = () => setIsVideoPlaying(true);
  const handleCloseVideo = () => setIsVideoPlaying(false);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero bg-gray-100 text-center relative">
        {/* Background Video */}
        <div className="video-container">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
          >
            <source src="/images/globe.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          <div className="container mx-auto flex flex-col items-center relative z-10">
            <button
              className="play-button bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center"
              onClick={handlePlayVideo}
            >
              <FaPlay className="text-white text-2xl font-bold" /> {/* Play icon */}
            </button>
            <h1 className="text-4xl font-bold mt-6">Explore Our Top-Tier Solutions</h1>
            <Link to="/solutions">
              <button className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-md shadow-lg">
                Get Started
              </button>
            </Link>
          </div>
        </div>

        {/* Click-to-Play Video */}
        {isVideoPlaying && (
          <div className="video-overlay fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="video-container relative w-11/12 max-w-4xl">
              <button
                className="close-button absolute top-2 right-2 bg-red-500 text-white text-lg font-bold rounded-full px-3 py-1"
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
      <section className="industries bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">You're in good company</h2>
          <p className="text-lg mt-2">Here are the industries our solutions thrive in</p>
          <div className="industry-cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[...Array(9)].map((_, index) => (
              <a
                key={index}
                href={`/industry/${index + 1}`}
                className="industry-card mx-2 px-4 py-2 bg-black rounded-md flex items-center justify-between 
                hover:bg-gray-800 hover:shadow-lg transition-all"
              >
                <img
                  src={`/images/industy${index + 1}.png`}
                  alt={`Industry ${index + 1}`}
                  className="w-16 h-16 mr-4"
                />
                <span className="text-white text-lg">Industry {index + 1}</span>
                <FaArrowRight className="text-white text-lg" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Vizx Section */}
      <section className="why-vizx bg-gray-50 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Why Vizx</h2>
          <p className="mt-4 text-lg text-gray-700">
            At Vizx, we offer unparalleled solutions tailored to meet industry needs. Our focus is on delivering quality, efficiency, and customer satisfaction across diverse domains.
          </p>
          <div className="flex justify-center mt-8">
            <div className="bg-gray-200 w-3/4 h-64 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients bg-black py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Our Clients</h2>
          <Slider {...sliderSettings}>
            {[...Array(8)].map((_, index) => (
              <div key={index} className="p-4">
                <div className="client-logo-container bg-gray-300 w-full h-40 flex items-center justify-center rounded-md">
                  <img
                    src={`/images/client${index + 1}.jpg`}
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
      <section className="partners bg-gray-50 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Partners we work with</h2>
          <Slider {...sliderSettings}>
            {[...Array(6)].map((_, index) => (
              <div key={index} className="p-4">
                <div className="bg-gray-300 w-full h-40 flex items-center justify-center rounded-md">
                  <span>Partner {index + 1}</span>
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
