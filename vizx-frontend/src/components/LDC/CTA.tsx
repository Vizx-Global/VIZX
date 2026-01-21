import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiArrowRight } from 'react-icons/fi';

const CTA: React.FC = () => {
  return (
    <section className="w-full bg-black py-24 px-6 lg:py-40 lg:px-12 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://res.cloudinary.com/dvkt0lsqb/image/upload/v1768955087/businessman-businesswoman-bumping-their-fist-front-corporate-building_lq1zjk.jpg" 
          alt="Business Partnership"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-10" />
      </div>
      
      <div className="max-w-4xl mx-auto relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-bold text-orange-500 tracking-widest uppercase">Get In Touch</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-8 tracking-tight uppercase leading-none">
            Let's <span className="text-orange-500 italic">Work Together</span>
          </h2>

          <p className="text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed font-light">
            If your organisation is looking for reliable, high-quality translation services that understand the realities of non-profit and NGO work, we'd love to hear from you.
          </p>

          <div className="glass-card p-8 md:p-12 border-orange-500/20 hover:border-orange-500/40 transition-smooth group">
            <h3 className="text-2xl font-bold text-white mb-6">
              Contact us to learn how <span className="text-orange-500">VizX LDC</span> can support your mission.
            </h3>
            
            <a 
              href="mailto:info@vizxglobal.com" 
              className="inline-flex items-center gap-4 px-8 py-4 bg-orange-500 text-black font-black rounded-full hover:bg-orange-600 hover:shadow-glow transition-bounce transform hover:-translate-y-1"
            >
              <FiMail className="text-xl" />
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