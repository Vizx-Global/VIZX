import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { FaPlay } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFilePdf } from 'react-icons/fa';

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
    cssEase: "linear",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const solutions = [
    {
      title: "CX Solutions",
      desc:
        "Leverage global expertise to deliver cost-effective outsourcing solutions that drive growth and enhance customer satisfaction.",
    },
    {
      title: "Merchant Services",
      desc:
        "Empower your business with cutting-edge digital solutions for seamless payment processing and operational automation.",
    },
    {
      title: "RPO Solutions",
      desc:
        "Connect your company with top-tier talent from diverse markets to fuel innovation and achieve your strategic hiring goals.",
    },
    {
      title: "Back Office ",
      desc:
        "Optimize your core operations through streamlined processes and advanced technology, allowing you to focus on your primary business objectives.",
    },
    {
      title: "Real Estate Solutions",
      desc:
        "Optimize your real estate operations through streamlined processes and advanced technology for greater efficiency and success.",
    },
  ];

  const locations = [
    {
      title: "Nairobi, Kenya",
      image: "/images/nairobi-office1.jpg",
      description:
        "Our flagship office in East Africa, harnessing a talented workforce of young, educated, English-speaking professionals. This hub supports clients worldwide with agile BPO solutions.",
    },
    {
      title: "Los Angeles, USA",
      image: "/images/us-office.jpg",
      description:
        "Strategically located for easy access to North American clients. Our LA team provides seamless communication, ensuring your operations run smoothly around the clock.",
    },
  ];

  const clients = [
    "Bryant Staffing Solutions",
    "VAME",
    "Spring Delta",
    "Kenbright",
    "Outsource Consultants",
    "RingCentral",
  ];

  const partnersCount = 7; // assuming images Partner1.png … Partner7.png

  return (
    <div className="home-page overflow-x-hidden">
      {/* HERO */}
      <section className="relative w-full h-screen bg-black overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/Globe1.mp4"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
          <button
            onClick={() => setIsVideoPlaying(true)}
            className="bg-orange-500 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center"
          >
            <FaPlay className="text-white text-xl sm:text-2xl" />
          </button>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mt-6 leading-snug max-w-2xl">
            Africa’s leading BPO Powerhouse
          </h1>
          <Link to="/solutions">
            <button className="mt-6 px-6 py-2 sm:px-8 sm:py-3 bg-orange-500 text-white rounded-md shadow-lg text-sm sm:text-base">
              Get Started
            </button>
          </Link>
        </div>
        {isVideoPlaying && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 px-4">
            <div className="relative w-full max-w-4xl">
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-3 py-1"
              >
                ✖
              </button>
              <video controls autoPlay className="w-full h-auto rounded-md">
                <source src="/images/intro.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        )}
      </section>

      {/* SOLUTIONS */}
      <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Solutions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {solutions.map((s, i) => (
              <div
                key={i}
                className="
                  bg-black border border-gray-700 rounded-md p-6
                  hover:border-orange-500 hover:animate-glow
                  transition
                "
              >
                <h3 className="text-orange-400 text-xl font-semibold mb-3">
                  {s.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Locations</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((loc, i) => (
            <div
              key={i}
              className="mx-auto w-full max-w-xs sm:max-w-md md:max-w-none"
            >
              <div className="border p-6 rounded-md shadow-md bg-black">
                <img
                  src={loc.image}
                  alt={loc.title}
                  className="w-full h-48 sm:h-64 object-cover mb-4 rounded-md"
                />
                <h3 className="text-xl font-semibold mb-2">{loc.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {loc.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENTS */}
      <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            Our Clients
          </h2>

          {/* mobile grid */}
          <div className="grid grid-cols-2 gap-4 sm:hidden">
            {clients.map((_, i) => (
              <div
                key={i}
                className="bg-black border border-black rounded-md flex items-center justify-center p-4"
              >
                <img
                  src={`/images/Client${i + 1}.png`}
                  alt={`Client ${i + 1}`}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* carousel on sm+ */}
          <div className="hidden sm:block px-2 sm:px-0">
            <Slider {...sliderSettings}>
              {clients.map((_, i) => (
                <div key={i} className="px-1 sm:px-3">
                  <div className="bg-black border border-black rounded-md flex items-center justify-center h-16 sm:h-24">
                    <img
                      src={`/images/Client${i + 1}.png`}
                      alt={`Client ${i + 1}`}
                      className="max-h-full w-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

{/* ============= ABOUT & VIDEO SECTION ============= */}
<section className="bg-black text-white py-8 md:py-16">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
      
      {/* Left column: About Us + Why VIZX */}
      <div className="space-y-10">
        {/* About Us */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-white">About</span>{' '}
            <span className="text-orange-500">Us</span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            We are a leading provider of innovative outsourcing solutions with a proven track record of delivering measurable results and strategic partnerships that foster long-term success.
          </p>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            With decades of experience, our leadership team brings deep industry knowledge across customer management, data processing & more.
          </p>
        </div>

        {/* Why VIZX? */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-white">Why</span>{' '}
            <span className="text-orange-500">VIZX?</span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            We strive to deliver customized solutions that align tightly with your objectives, backed by a commitment to innovation, efficiency, and collaboration.
          </p>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            From our strategic presence in Kenya and the US to our global delivery capabilities, every aspect of our operations is designed to help you stay ahead in a dynamic market.
          </p>
        </div>
      </div>

      {/* Right column: video */}
      <div className="w-full self-start mt-0 md:mt-12">
        <video
          loop
          muted
          playsInline
          autoPlay
          className="w-full rounded-md shadow-lg object-cover"
        >
          <source src="/images/fistbump.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

    </div>
  </div>
</section>




      {/* ============= PARTNERS SECTION ============= */}
<section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-12">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
      Our Partners
    </h2>

    {/* mobile grid */}
    <div className="grid grid-cols-2 gap-4 sm:hidden">
      {Array.from({ length: partnersCount }).map((_, i) => (
        <div
          key={i}
          className="bg-black border border-gray-700 rounded-md flex items-center justify-center p-4"
        >
          <img
            src={`/images/Partner${i + 1}.png`}
            alt={`Partner ${i + 1}`}
            className="max-h-12 w-auto object-contain"
          />
        </div>
      ))}
    </div>

    {/* carousel on sm+ */}
    <div className="hidden sm:block px-2 sm:px-0">
      <Slider {...sliderSettings}>
        {Array.from({ length: partnersCount }).map((_, i) => (
          <div key={i} className="px-1 sm:px-3">
            <div className="bg-black border border-black rounded-md flex items-center justify-center h-16 sm:h-24">
              <img
                src={`/images/Partner${i + 1}.png`}
                alt={`Partner ${i + 1}`}
                className="max-h-full w-auto object-contain"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
</section>


      {/* ============= CERTIFICATIONS SECTION ============= */}
<section className="border-t border-gray-700 py-12 px-4 sm:px-8 lg:px-12 bg-black text-gray-400">
  <div className="max-w-7xl mx-auto text-center">
    {/* Section Title */}
    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
      Certifications
    </h2>

    {/* Logos Row */}
    <div className="flex justify-center items-center space-x-16">
      {/* SOC 2 */}
      <div className="flex flex-col items-center">
        <img
          src="/images/SOC2.png"
          alt="SOC 2 Certification"
          className="h-24 w-auto mb-2 opacity-70 hover:opacity-100 transition-opacity duration-300"
        />
        <span className="text-sm text-gray-300">SOC 2</span>
      </div>

      {/* ODPC (clickable PDF via PNG) */}
      <div className="flex flex-col items-center">
        <a
          href="/docs/ODPC.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-70 hover:opacity-100 transition-opacity duration-300"
        >
          <img
            src="/images/ODPC.png"
            alt="ODPC Certification"
            className="h-24 w-auto mb-2"
          />
        </a>
        <span className="text-sm text-gray-300">ODPC</span>
      </div>
    </div>
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
