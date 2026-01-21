import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiArrowRight } from 'react-icons/fi';

const CTA: React.FC = () => {
  return (
    <section className="w-full bg-black py-20 px-4 sm:px-6 lg:py-32 lg:px-12 relative overflow-hidden">
      {/* Background Glow Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8 sm:mb-10">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold text-orange-500 tracking-widest uppercase">Get In Touch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 sm:mb-8 tracking-tight uppercase leading-[1.1]">
            Let's <span className="text-orange-500 italic">Work Together</span>
          </h2>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 leading-relaxed font-light px-2 sm:px-0">
            If your organisation is looking for reliable, high-quality translation services that understand the realities of non-profit and NGO work, we'd love to hear from you.
          </p>

          <div className="glass-card p-6 sm:p-10 md:p-14 border-orange-500/20 hover:border-orange-500/40 shadow-glow transition-bounce group overflow-hidden relative">
            {/* Subtle inner card glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 blur-3xl -z-10" />
            
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 sm:mb-10 leading-tight">
              Contact us to learn how <span className="text-orange-500">VizX LDC</span> can support your mission.
            </h3>
            
            <a 
              href="mailto:info@vizxglobal.com" 
              className="inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-10 py-4 sm:py-5 bg-orange-500 text-black font-black rounded-full hover:bg-orange-600 hover:shadow-glow transition-bounce transform hover:-translate-y-1 text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              <FiMail className="text-lg sm:text-xl" />
              <span>info@vizxglobal.com</span>
              <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;