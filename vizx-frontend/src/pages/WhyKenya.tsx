import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyKenya: React.FC = () => {
  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  // Slideshow images for the "Silicon Savanna" section
  const siliconSavannaImages = [
    '/images/IMG_0006.jpg', 
    '/images/IMG_0008.jpg',
    '/images/IMG_0010.jpg',
  ];

  // State and effect for rotating background images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % siliconSavannaImages.length);
    }, 8000); // Change images every 5 seconds
    return () => clearInterval(interval);
  }, [siliconSavannaImages.length]);

  return (
    <div className="bg-black text-white w-full min-h-screen font-sans">
      <main className="flex flex-col space-y-20">
        {/* HERO SECTION */}
        <section
          className="relative h-[60vh] flex items-center justify-center bg-cover bg-center px-8"
          style={{ backgroundImage: "url('/images/IMG_0011.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-7xl md:text-8xl font-bold text-orange-500 leading-tight mb-4"
            >
              WHY KENYA?
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-3xl md:text-4xl text-gray-200 font-light"
            >
              Kenya <span className="italic">"The Silicon Savanna"</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 mt-4 max-w-3xl mx-auto"
            >
              “And as I’ve told many, when President Biden mentioned the Silicon Savannah
              and Kenya’s economic growth potential, I did not need convincing…”
              <br />
              <span className="italic">
                — Meg Whitman, Former US Ambassador to Kenya and Former CEO of eBay
              </span>
            </motion.p>
          </div>
        </section>

        {/* AMBASSADOR WHITMAN SECTION */}
        <section className="px-8" data-aos="fade-up">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold text-orange-500 mb-4">
            Former Ambassador Meg Whitman’s Take on <span className="italic">Why Kenya</span>
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed">
              Remarks made by the former US Ambassador to Kenya Meg Whitman and former CEO of eBay
              during the Kenya Business Roadshow by the US Embassy highlight why Kenya should be on your radar.
              As she put it, “Why did you not want to move to Ambassador to Kenya?”
              And as I’ve told many, when President Biden mentioned the Silicon Savannah and Kenya’s
              economic growth potential, I did not need convincing.
            </p>
          </div>
        </section>

        {/* REASONS SECTION */}
        <section className="px-8" data-aos="fade-up">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-4xl font-bold text-orange-500 mb-6">
              Here Are Some Reasons:
            </h3>
            <ul className="list-disc list-inside space-y-4 text-xl text-gray-200">
              <li>It is the most stable democracy in East Africa</li>
              <li>It is the gateway to the East African market of almost 500 million consumers</li>
              <li>Kenya has a young, educated, English-speaking workforce</li>
              <li>Its largest export market is the United States</li>
              <li>Kenya is the regional logistics hub and leading regional financial hub</li>
              <li>It is the leading destination for foreign direct investment and venture capital</li>
              <li>Kenya generates over 90% of its energy from renewable sources</li>
            </ul>
            <div className="mt-6">
              <a
                href="#kenya-fact-files"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* KENYA FACT FILES */}
        <section id="kenya-fact-files" className="px-8" data-aos="fade-up">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold text-orange-500 mb-6">Kenya Fact Files</h2>
            <div className="grid md:grid-cols-5 gap-6 text-center text-xl text-gray-200">
              <div>
                <h4 className="font-semibold text-orange-400">Flights</h4>
                <p className="mt-2">Direct Flights from New York (JFK) to Nairobi (JKIA)</p>
              </div>
              <div>
                <h4 className="font-semibold text-orange-400">Infrastructure</h4>
                <p className="mt-2">High broadband speed & reliable internet – 5G and Starlink Satellite</p>
              </div>
              <div>
                <h4 className="font-semibold text-orange-400">Language</h4>
                <p className="mt-2">2nd Best English-Speaking Country in Africa</p>
              </div>
              <div>
                <h4 className="font-semibold text-orange-400">Workforce</h4>
                <p className="mt-2">70% of population of youth are college graduates</p>
              </div>
              <div>
                <h4 className="font-semibold text-orange-400">Timezone</h4>
                <p className="mt-2">Our timezone adapts easily to the US timezone</p>
              </div>
            </div>
          </div>
        </section>

        {/* MORE REASONS SECTION */}
        <section className="px-8" data-aos="fade-up">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold text-orange-500 mb-6">
              More Reasons Why Kenya Stands Out
            </h2>
            <ul className="list-none space-y-4 text-xl text-gray-200">
              <li>
                <span className="text-orange-400 font-semibold">Skilled Workforce:</span> 
                &nbsp;Robust talent pool across multiple sectors.
              </li>
              <li>
                <span className="text-orange-400 font-semibold">English Proficiency:</span> 
                &nbsp;High standard of English usage fosters global collaboration.
              </li>
              <li>
                <span className="text-orange-400 font-semibold">Cost-effectiveness:</span> 
                &nbsp;Competitive labor costs relative to other emerging markets.
              </li>
              <li>
                <span className="text-orange-400 font-semibold">Data Protection:</span> 
                &nbsp;Evolving regulatory frameworks ensuring secure transactions.
              </li>
              <li>
                <span className="text-orange-400 font-semibold">Infrastructure:</span> 
                &nbsp;Growing tech ecosystem with reliable power, fiber, and transport.
              </li>
              <li>
                <span className="text-orange-400 font-semibold">Strategic Location:</span> 
                &nbsp;Ideal gateway to the African continent and beyond.
              </li>
              <li>
                <span className="text-orange-400 font-semibold">Innovation & Entrepreneurship:</span> 
                &nbsp;Thriving startup culture and tech-savvy youth driving new solutions.
              </li>
              <li>
                <span className="text-orange-400 font-semibold">International Travel:</span> 
                &nbsp;Major airlines connect Kenya to global destinations.
              </li>
            </ul>
          </div>
        </section>

        {/* DYNAMIC SILICON SAVANNA SECTION (SLIDESHOW BACKGROUND) */}
        <section
          className="relative h-[80vh] flex items-center justify-center text-white"
          data-aos="fade-up"
          style={{
            backgroundImage: `url(${siliconSavannaImages[currentImageIndex]})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          {/* Content Overlay */}
          <div className="relative z-10 max-w-5xl px-8">
            <h2 className="text-5xl font-bold text-orange-500 mb-6">
              Kenya <span className="italic">"The Silicon Savanna"</span>
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed mb-4">
              Kenya’s emergence as the “Silicon Savanna” stems from its conducive environment 
              for tech innovation, fueled by robust internet connectivity, a growing pool of 
              local developers, and progressive government policies. Several major American 
              companies have recognized this potential and established offices in Kenya, 
              including IBM, Microsoft, Google, Oracle, and Cisco, drawn by the country’s 
              strategic location, burgeoning tech scene, and opportunities for market 
              expansion in Africa. Standard Chartered, one of the leading global financial 
              institutions, has been here since setting up in 1911.
            </p>
            <blockquote className="border-l-4 border-orange-500 pl-4 text-gray-300 italic mb-6">
              “The future of Africa is the young entrepreneurs, like those in the Nairobi tech scene, 
              who are developing solutions for the continent’s challenges and opportunities.”
              <br />
              <span className="font-semibold">— Bill Gates, Co-founder of Microsoft</span>
            </blockquote>
            <p className="text-xl text-gray-200 leading-relaxed">
              With infrastructure such as Tatu City opening its doors in 2014, its ultra-modern 
              setup and amenities offer a diverse platform for companies of different sectors to 
              invest in: Tech, Manufacturing, Finance & Logistics. With infrastructure spanning 
              an independent power supply & high-speed fiber, dedicated access roads for heavy 
              haulers & assorted warehousing options, it offers incentives such as corporate 
              taxes of up to 18% against standard 30%, zero-rated VAT against standard 16%, 
              and many more. This is a testament to why we are one step above the rest.
            </p>
          </div>
        </section>

        {/* OBAMA QUOTE SECTION */}
        <section className="px-8" data-aos="fade-up">
          <div className="max-w-5xl mx-auto">
            <blockquote className="border-l-4 border-orange-500 pl-4 text-gray-300 italic">
              “Today, Kenya is the largest economy in East Africa. High-speed broadband and 
              mobile connectivity are on the rise, unleashing the entrepreneurial spirit 
              I’ve always known from Kenya’s.”
              <br />
              <span className="font-semibold">
                — Barack Obama, 44th President of the United States (2009–2017)
              </span>
            </blockquote>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="px-8" data-aos="fade-up">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-orange-500 mb-6">Contact Us</h2>
            <p className="text-xl text-gray-200 leading-relaxed mb-6">
              Ready to explore how Kenya can be your next big move? We’re here to help you navigate
              every opportunity. Let’s discuss your goals and how we can support your vision.
            </p>
            <a
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </section>

       
      </main>

      {/* BASIC FOOTER (Remove if using a shared/global Footer) */}
      <footer className="bg-black px-8 py-6 border-t border-gray-800 mt-8">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} VIZX Global Solutions. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default WhyKenya;
