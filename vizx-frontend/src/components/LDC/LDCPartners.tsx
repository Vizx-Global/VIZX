import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const LDCPartners: React.FC = () => {
  const navigate = useNavigate();

  const clients = [
    { name: "The African Academy of Sciences", logo: "/images/AAS.webp" },
    { name: "Circular Innovation Hub", logo: "/images/Circular-Innovation-Hub.webp" },
    { name: "DANKE", logo: "/images/DANKE.webp" },
    { name: "Discover Brands", logo: "/images/DiscoverBrands.webp" },
    { name: "EcoTourism Kenya", logo: "/images/EcoTourism.webp" },
    { name: "Museums of Kenya", logo: "/images/Meusum.webp" },
    { name: "WMO", logo: "/images/wmo.webp" },
    { name: "PePlay", logo: "/images/PePlay.webp" },
    { name: "IGAD", logo: "/images/igad.webp" },
    { name: "Master Card Foundation", logo: "/images/mastercard_foundation.webp" },
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 uppercase tracking-tight">
              Our <span className="text-orange-500">Partners</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              We collaborate with industry leaders and mission-driven organizations to deliver exceptional value and communication solutions worldwide.
            </p>
          </motion.div>
        </div>

        {/* Endless Horizontal Carousel */}
        <div className="relative w-full overflow-hidden py-8 mb-16">
          {/* Gradient Masks for smooth blending */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-black via-black/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-black via-black/50 to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            className="flex gap-6 sm:gap-10 whitespace-nowrap items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 35, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {/* Duplicating array for seamless loop */}
            {[...clients, ...clients].map((client, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-44 sm:w-56 h-24 sm:h-32 flex items-center justify-center p-4 sm:p-6 bg-white/5 dark:bg-zinc-900/50 border border-white/5 rounded-2xl backdrop-blur-sm hover:border-orange-500/40 transition-smooth group relative overflow-hidden"
              >
                {/* Subtle inner card glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain filter brightness-110 contrast-110 group-hover:scale-110 group-hover:brightness-125 transition-all duration-500"
                />
                
                {/* Partner Name Tooltip */}
                <div className="absolute bottom-0 inset-x-0 bg-orange-500 text-black text-[10px] font-black py-1.5 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {client.name.toUpperCase()}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Become a Partner Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <button 
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-black px-10 py-4 rounded-full text-base font-black transition-bounce shadow-glow group uppercase tracking-widest"
          >
            BECOME A PARTNER
            <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>

      {/* Background Decor Component */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.05)_0%,transparent_70%)] pointer-events-none" />
    </section>
  );
};

export default LDCPartners;
