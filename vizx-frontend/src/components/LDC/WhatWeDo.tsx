import React from 'react';
import { motion } from 'framer-motion';
import { FiEdit3, FiGlobe, FiMic, FiFileText, FiLayers } from 'react-icons/fi';

const WhatWeDo: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const services = [
    {
      icon: FiEdit3,
      title: "Written Translation",
      description: "Across multiple global and local languages"
    },
    {
      icon: FiGlobe,
      title: "Cultural Localisation",
      description: "For regional relevance and sensitivity"
    },
    {
      icon: FiMic,
      title: "Interpretation Support",
      description: "Project-based or ongoing services"
    },
    {
      icon: FiFileText,
      title: "Comprehensive Translation",
      description: "Reports, proposals, training materials, policies, and digital content"
    },
    {
      icon: FiLayers,
      title: "Sector-Specific Support",
      description: "Language support for health, education, humanitarian, advocacy, and development programmes"
    }
  ];

  return (
    <section className="w-full bg-black py-16 px-4 sm:px-6 lg:py-24 lg:px-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-10 h-[2px] bg-orange-500 shadow-glow" />
            <h2 className="text-sm font-bold text-orange-500 tracking-[0.3em] uppercase">
              Our Expertise
            </h2>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 sm:mb-8 tracking-tight uppercase leading-tight">
            What <span className="text-orange-500">We Do</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl leading-relaxed font-light">
            VizX LDC provides professional, reliable, and culturally sensitive language services tailored to the realities of non-profit and humanitarian work.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card border-white/5 p-6 sm:p-8 hover:border-orange-500/30 transition-smooth group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-orange-500 group-hover:text-black transition-smooth">
                <service.icon className="text-xl sm:text-2xl text-orange-500 group-hover:text-black transition-smooth" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-orange-500 transition-smooth">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;