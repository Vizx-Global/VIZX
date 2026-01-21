import { motion, Variants } from 'framer-motion';

const WhyChooseUs: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      } 
    }
  };

  const reasons = [
    {
      title: "Purpose-led partnership",
      description: "A collaboration grounded in inclusion, dignity, and social impact."
    },
    {
      title: "Trusted quality",
      description: "Experienced linguists, subject-matter specialists, and strong quality assurance processes."
    },
    {
      title: "Global reach with local insight",
      description: "Support for widely spoken languages as well as regional dialects and underserved languages."
    },
    {
      title: "Ethical delivery",
      description: "People-first practices, fair compensation, and culturally responsible operations."
    }
,     {
      title: "Operates across diverse markets",
      description:"Designed for companies and corporations operating across diverse markets, as well as non-profits, NGOs, and mission-led organizations"
    },
  ];

  return (
    <section className="w-full bg-black py-16 px-4 sm:px-6 lg:py-24 lg:px-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-[2px] bg-orange-500 shadow-glow" />
            <h2 className="text-sm font-bold text-orange-500 tracking-[0.3em] uppercase">
              Core Values
            </h2>
            <div className="w-10 h-[2px] bg-orange-500 shadow-glow" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight uppercase leading-none">
            Why <span className="text-orange-500">VizX LDC</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 font-light max-w-2xl mx-auto italic">
            "Facilitating better communication across languages and cultures."
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4 sm:space-y-6"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Card Background with subtle hover effect */}
              <div className="glass-card flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 p-6 sm:p-8 md:p-10 border-white/5 hover:border-orange-500/40 hover:bg-white/[0.03] transition-smooth cursor-default overflow-hidden">
                
                {/* Number Badge */}
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-orange-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-glow transform group-hover:rotate-6 transition-smooth">
                    <span className="text-xl sm:text-2xl md:text-3xl font-black text-black">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                  {/* Subtle number glow */}
                  <div className="absolute inset-0 bg-orange-500 blur-xl opacity-20 group-hover:opacity-40 transition-smooth" />
                </div>

                {/* Content */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3 group-hover:text-orange-500 transition-smooth">
                    {reason.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-400 font-light leading-relaxed max-w-3xl">
                    {reason.description}
                  </p>
                </div>

                {/* Corner Decoration */}
                <div className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/10 transition-smooth" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
