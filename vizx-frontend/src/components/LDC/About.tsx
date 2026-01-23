import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { FiGlobe, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const About: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/AboutPartnership1.webp",
    "/images/AboutPartnership2.webp",
    "/images/AboutPartnership3.jpg",
    "/images/AboutPartnership4.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="w-full bg-black py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 transition-smooth overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          
          {/* Content - First on mobile, Right on desktop */}
          <div className="w-full lg:w-1/2 order-2 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6">
                <div className="w-6 sm:w-8 md:w-10 h-[2px] bg-orange-500 shadow-glow" />
                <h2 className="text-[10px] sm:text-xs md:text-sm font-bold text-orange-500 tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase">
                  Pioneering Translation
                </h2>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-4 sm:mb-6 md:mb-8 tracking-tight uppercase leading-[1.1]">
                ABOUT <span className="text-orange-500">VIZX LDC</span>
              </h1>

              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed sm:leading-relaxed md:leading-relaxed font-light">
                  <span className="text-white font-medium">VizX LDC</span> is a purpose-driven language and translation solution created through a strategic partnership between <span className="text-orange-500 font-bold">VizX Global</span> and <span className="text-orange-500 font-bold">Langues des Champions</span>.
                </p>
                
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed sm:leading-relaxed md:leading-relaxed font-light border-l-2 border-zinc-800 pl-3 sm:pl-4 md:pl-6 lg:pl-8 italic">
                   Designed for companies and corporations operating across diverse markets, as well as non-profits, NGOs, and mission-led organizations
                </p>
              </div>

              <motion.div 
                className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 flex items-center gap-3 sm:gap-4 text-orange-500 font-bold tracking-widest text-xs sm:text-sm md:text-base cursor-pointer group"
                whileHover={{ x: 10 }}
              >
                <span className="whitespace-nowrap">DISCOVER OUR MISSION</span>
                <HiOutlineArrowNarrowRight className="text-lg sm:text-xl md:text-2xl group-hover:translate-x-2 transition-transform" />
              </motion.div>
            </motion.div>
          </div>

          {/* Image Carousel - Second on mobile, Left on desktop */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 order-1 lg:order-1"
          >
            <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-strong hover:border-orange-500/30 transition-smooth">
              {/* Carousel Container */}
              <div className="relative h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] overflow-hidden">
                {images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0 w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: index === currentImageIndex ? 1 : 0,
                      scale: index === currentImageIndex ? 1 : 1.05
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                  >
                    <img 
                      src={image} 
                      alt={`Vizx Global & Langues des Champions Partnership ${index + 1}`}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-smooth duration-700"
                    />
                  </motion.div>
                ))}
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                
                {/* Global Impact Badge */}
                <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 lg:bottom-6 left-3 sm:left-4 md:left-5 lg:left-6 z-20">
                  <div className="flex items-center gap-1 sm:gap-2 bg-black/40 backdrop-blur-md border border-white/10 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full">
                    <FiGlobe className="text-orange-500 text-xs sm:text-sm md:text-base" />
                    <span className="text-[9px] sm:text-[10px] md:text-xs font-semibold text-white tracking-widest uppercase">Global Impact</span>
                  </div>
                </div>
                
                {/* Carousel Navigation Buttons */}
                <div className="absolute inset-x-0 top-1/2 z-20 flex justify-between px-2 sm:px-3 md:px-4 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={prevImage}
                    className="p-1 sm:p-1.5 md:p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:bg-black/60 hover:border-orange-500/50 transition-all group"
                    aria-label="Previous image"
                  >
                    <FiChevronLeft className="text-white text-lg sm:text-xl md:text-2xl group-hover:text-orange-500 transition-colors" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="p-1 sm:p-1.5 md:p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:bg-black/60 hover:border-orange-500/50 transition-all group"
                    aria-label="Next image"
                  >
                    <FiChevronRight className="text-white text-lg sm:text-xl md:text-2xl group-hover:text-orange-500 transition-colors" />
                  </button>
                </div>
                
                {/* Carousel Indicators */}
                <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 lg:bottom-6 right-3 sm:right-4 md:right-5 lg:right-6 z-20 flex gap-1 sm:gap-1.5 md:gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full transition-all ${
                        index === currentImageIndex 
                          ? 'bg-orange-500 w-4 sm:w-5 md:w-6' 
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;