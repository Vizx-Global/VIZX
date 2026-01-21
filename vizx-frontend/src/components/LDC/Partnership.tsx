import React from 'react';
import { motion } from 'framer-motion';
import { FiZap, FiShield, FiHeart } from 'react-icons/fi';

const Partnership: React.FC = () => {
  return (
    <section className="w-full bg-black py-16 px-4 sm:px-6 lg:py-24 lg:px-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Headline & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-[10px] font-bold text-orange-500 tracking-widest uppercase">Corporate Partnership</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 sm:mb-8 tracking-tight uppercase leading-tight">
              A Partnership <br />
              <span className="text-orange-500">For Impact</span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-light mb-8 sm:mb-10">
              <span className="text-white font-medium italic">VizX LDC</span> brings together VizX Global's operational scale and Langues des Champions' linguistic expertise to support organisations working in complex, multilingual environments.
            </p>

            {/* Updated Features Section - Horizontal on mobile */}
            <div className="flex flex-row justify-between items-start gap-4 sm:gap-6">
              {[
                { icon: FiZap, text: "Amplify Voices" },
                { icon: FiShield, text: "Access Info" },
                { icon: FiHeart, text: "Engage Communities" }
              ].map((item, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2 sm:gap-3 group min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-orange-500/50 transition-smooth">
                    <item.icon className="text-orange-500 text-lg sm:text-xl" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider text-center leading-tight px-1">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Mission Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card border-orange-500/20 p-6 sm:p-8 lg:p-12 relative overflow-hidden group hover:border-orange-500/40 transition-smooth">
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-orange-500/10 blur-[40px] sm:blur-[60px] rounded-full" />
              
              <img 
                src="/images/VIZX LDC.png" 
                alt="Vizx Global & Langues des Champions" 
                className="h-12 sm:h-16 w-auto mb-6 sm:mb-8 object-contain"
              />
              
              <h3 className="text-xs sm:text-sm font-bold text-orange-500 tracking-widest uppercase mb-3 sm:mb-4">Our Simple Mission</h3>
              
              <p className="text-xl sm:text-2xl lg:text-3xl font-light text-white leading-snug sm:leading-tight">
                To help organisations <span className="text-orange-500 font-bold italic">make a difference</span> by facilitating better communication across languages and cultures.
              </p>

              <div className="mt-8 sm:mt-12 h-[1px] w-full bg-gradient-to-r from-orange-500/50 to-transparent" />
              
              <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
                <div className="flex flex-col">
                  <span className="text-[8px] sm:text-[10px] text-gray-500 uppercase tracking-[0.2em]">Operational</span>
                  <span className="text-white font-bold text-xs sm:text-sm">VIZX GLOBAL</span>
                </div>
                <div className="hidden sm:block w-4 h-[1px] bg-zinc-800" />
                <div className="flex flex-col">
                  <span className="text-[8px] sm:text-[10px] text-gray-500 uppercase tracking-[0.2em]">Langues Des</span>
                  <span className="text-white font-bold text-xs sm:text-sm">CHAMPIONS</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Partnership;