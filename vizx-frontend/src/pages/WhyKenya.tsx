import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyKenya: React.FC = () => {
  // Init AOS
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Backgrounds for Silicon Savanna (add more images if you want rotation)
  const siliconSavannaImages = ["/images/IMG_0010.jpg"];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (siliconSavannaImages.length <= 1) return; // no-op if only one image
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % siliconSavannaImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [siliconSavannaImages.length]);

  return (
    <div className="bg-black text-white w-full min-h-screen font-sans">
      <main className="flex flex-col gap-16 sm:gap-20">
        {/* HERO */}
        <section
          className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/images/IMG_0011.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 text-center px-4 sm:px-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-orange-500 leading-tight tracking-tight mb-2 break-words"
            >
              WHY KENYA?
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-light leading-snug"
            >
              Kenya <span className="italic">“The Silicon Savanna”</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-300 mx-auto max-w-3xl leading-relaxed break-words hyphens-auto"
            >
              “And as I’ve told many, when President Biden mentioned the Silicon
              Savannah and Kenya’s economic growth potential, I did not need
              convincing…”
              <br />
              <span className="italic">
                — Meg Whitman, Former US Ambassador to Kenya and Former CEO of
                eBay
              </span>
            </motion.p>
          </div>
        </section>

        {/* AMBASSADOR WHITMAN */}
        <section className="px-4 sm:px-6" data-aos="fade-up">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-orange-500 mb-3 sm:mb-4 leading-tight">
              Former Ambassador Meg Whitman’s Take on{" "}
              <span className="italic">Why Kenya</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed break-words hyphens-auto">
              Remarks made by the former US Ambassador to Kenya Meg Whitman and
              former CEO of eBay during the Kenya Business Roadshow by the US
              Embassy highlight why Kenya should be on your radar. As she put
              it, “Why did you not want to move to Ambassador to Kenya?” And as
              I’ve told many, when President Biden mentioned the Silicon
              Savannah and Kenya’s economic growth potential, I did not need
              convincing.
            </p>
          </div>
        </section>

        {/* REASONS — INLINE (TEXT + IMAGE) */}
        <section className="px-4 sm:px-6" data-aos="fade-up">
          <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center gap-8">
            {/* Left: Text */}
            <div className="md:w-1/2">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-4 sm:mb-6 leading-tight">
                Here Are Some Reasons:
              </h3>
              <ul className="list-disc list-inside space-y-3 sm:space-y-4 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed break-words hyphens-auto">
                <li>It is the most stable democracy in East Africa</li>
                <li>
                  It is the gateway to the East African market of almost 500
                  million consumers
                </li>
                <li>Kenya has a young, educated, English-speaking workforce</li>
                <li>Its largest export market is the United States</li>
                <li>
                  Kenya is the regional logistics hub and leading regional
                  financial hub
                </li>
                <li>
                  It is the leading destination for foreign direct investment
                  and venture capital
                </li>
                <li>Kenya generates over 90% of its energy from renewable sources</li>
              </ul>
              <div className="mt-5 sm:mt-6">
                <a
                  href="#kenya-fact-files"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-2.5 px-5 rounded-md transition-colors text-sm sm:text-base"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Right: Image */}
            <div className="md:w-1/2 w-full">
              <img
                src="/images/kenya-reasons.jpg"
                alt="Kenya map"
                className="rounded-lg shadow-lg w-full object-cover aspect-video"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* FACT FILES */}
        <section id="kenya-fact-files" className="px-4 sm:px-6" data-aos="fade-up">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-orange-500 mb-4 sm:mb-6 leading-tight">
              Kenya Fact Files
            </h2>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
              {[
                {
                  title: "Flights",
                  copy:
                    "Direct flights from New York (JFK) to Nairobi (JKIA)",
                },
                {
                  title: "Infrastructure",
                  copy:
                    "High broadband speed & reliable internet – 5G and Starlink Satellite",
                },
                {
                  title: "Language",
                  copy: "2nd Best English-Speaking Country in Africa",
                },
                {
                  title: "Workforce",
                  copy: "70% of youth are college graduates",
                },
                {
                  title: "Timezone",
                  copy: "Easily aligns with US time zones",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800 text-center"
                >
                  <h4 className="font-semibold text-orange-400 text-base sm:text-lg">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm sm:text-base text-gray-200 leading-relaxed break-words hyphens-auto">
                    {item.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SILICON SAVANNA — FEATURE SECTION */}
        <section
          className="relative min-h-[420px] sm:min-h-[520px] md:min-h-[640px] flex items-center justify-center"
          data-aos="fade-up"
          style={{
            backgroundImage: `url(${siliconSavannaImages[currentImageIndex]})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/75" />
          <div className="relative z-10 max-w-5xl w-full px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-orange-500 mb-4 sm:mb-6 leading-tight">
              Kenya <span className="italic">“The Silicon Savanna”</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed mb-4 sm:mb-6 break-words hyphens-auto">
              Kenya’s emergence as the “Silicon Savanna” stems from its
              conducive environment for tech innovation, fueled by robust
              internet connectivity, a growing pool of local developers, and
              progressive government policies. Several major American companies
              have recognized this potential and established offices in Kenya,
              including IBM, Microsoft, Google, Oracle, and Cisco.
            </p>
            <blockquote className="border-l-4 border-orange-500 pl-3 sm:pl-4 text-gray-300 italic mb-4 sm:mb-6 text-sm sm:text-base md:text-lg break-words hyphens-auto">
              “The future of Africa is the young entrepreneurs, like those in
              the Nairobi tech scene, who are developing solutions for the
              continent’s challenges and opportunities.”
              <br />
              <span className="font-semibold not-italic">
                — Bill Gates, Co-founder of Microsoft
              </span>
            </blockquote>
            <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed break-words hyphens-auto">
              With infrastructure such as Tatu City (opened 2014), companies in
              Tech, Manufacturing, Finance & Logistics benefit from independent
              power, high-speed fiber, dedicated road access, warehousing, and
              incentives (e.g., corporate tax relief and zero-rated VAT).
            </p>
          </div>
        </section>

        {/* OBAMA QUOTE */}
        <section className="px-4 sm:px-6" data-aos="fade-up">
          <div className="container mx-auto max-w-5xl">
            <blockquote className="border-l-4 border-orange-500 pl-3 sm:pl-4 text-gray-300 italic text-sm sm:text-base md:text-lg leading-relaxed break-words hyphens-auto">
              “Today, Kenya is the largest economy in East Africa. High-speed
              broadband and mobile connectivity are on the rise, unleashing the
              entrepreneurial spirit I’ve always known from Kenya’s.”
              <br />
              <span className="font-semibold not-italic">
                — Barack Obama, 44th President of the United States (2009–2017)
              </span>
            </blockquote>
          </div>
        </section>

        {/* CONTACT */}
        <section className="px-4 sm:px-6" data-aos="fade-up">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-orange-500 mb-4 sm:mb-6 leading-tight">
              Contact Us
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed mb-5 sm:mb-6 break-words hyphens-auto">
              Ready to explore how Kenya can be your next big move? We’re here
              to help you navigate every opportunity. Let’s discuss your goals
              and how we can support your vision.
            </p>
            <a
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-2.5 px-6 rounded-md transition-colors text-sm sm:text-base"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-black px-4 sm:px-6 py-6 border-t border-gray-800 mt-10">
        <div className="container mx-auto max-w-5xl">
          <p className="text-xs sm:text-sm text-gray-400">
            &copy; {new Date().getFullYear()} VIZX Global Solutions. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WhyKenya;
