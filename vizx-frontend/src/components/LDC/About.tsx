import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { FiGlobe } from 'react-icons/fi';

const About: React.FC = () => {
  return (
    <section className="w-full bg-black py-12 px-6 lg:py-20 lg:px-12 transition-smooth">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Image/Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="group relative rounded-3xl overflow-hidden border border-white/10 shadow-strong hover:border-orange-500/30 transition-smooth">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              <img 
                src="/images/LDCPartnership.jpg" 
                alt="Vizx Global & Langues des Champions Partnership"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-smooth duration-700"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
                  <FiGlobe className="text-orange-500" />
                  <span className="text-xs font-semibold text-white tracking-widest uppercase">Global Impact</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-10 h-[2px] bg-orange-500 shadow-glow" />
                <h2 className="text-sm font-bold text-orange-500 tracking-[0.3em] uppercase">
                  Pioneering Translation
                </h2>
              </div>

              <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-8 tracking-tight uppercase leading-none">
                ABOUT <span className="text-orange-500">VIZX LDC</span>
              </h1>

              <div className="space-y-6">
                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed font-light">
                  <span className="text-white font-medium">VizX LDC</span> is a purpose-driven language and translation solution created through a strategic partnership between <span className="text-orange-500 font-bold">VizX Global</span> and <span className="text-orange-500 font-bold">Langues des Champions</span>.
                </p>
                
                <p className="text-lg lg:text-xl text-gray-400 leading-relaxed font-light border-l-2 border-zinc-800 pl-6 lg:pl-8 italic">
                  Designed specifically for non-profits, NGOs, and mission-led organizations, VizX LDC helps organizations communicate clearly, respectfully, and effectively with the communities they serve.
                </p>
              </div>

              <motion.div 
                className="mt-12 flex items-center gap-4 text-orange-500 font-bold tracking-widest text-sm cursor-pointer group"
                whileHover={{ x: 10 }}
              >
                <span>DISCOVER OUR MISSION</span>
                <HiOutlineArrowNarrowRight className="text-xl group-hover:translate-x-2 transition-transform" />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;