import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const Contact: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Simple handler for the contact form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement your form submission logic here
  };

  return (
    <div className="bg-black text-white">
      {/* HERO SECTION */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        /* Update the image path below to match your file */
        style={{ backgroundImage: "url('/images/IMG_0007.jpg')" }}
      >
        {/* Dark overlay on the background */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* "CONTACT US" heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-5xl font-bold tracking-wide"
        >
          CONTACT US
        </motion.h1>
      </section>

      {/* OFFICE INFO SECTION */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center md:space-x-16 space-y-8 md:space-y-0">
          {/* US OFFICE */}
          <div className="text-center space-y-4" data-aos="fade-up">
            <h2 className="text-2xl font-bold mb-4">US OFFICE</h2>

            {/* Phone */}
            <div className="flex items-center justify-center space-x-2">
              <FaPhone className="text-orange-500" />
              <span>+1 310-694-3280</span>
            </div>

            {/* Email */}
            <div className="flex items-center justify-center space-x-2">
              <FaEnvelope className="text-orange-500" />
              <span>info@vizxglobal.com</span>
            </div>

            {/* Address */}
            <div className="flex items-center justify-center space-x-2 text-center">
              <MdLocationOn className="text-orange-500" />
              <span>
                360 North Pacific Coast Highway
                <br />
                Suite #2000, El Segundo, CA 90245
              </span>
            </div>
          </div>

          {/* KENYA OFFICE */}
          <div className="text-center space-y-4" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-2xl font-bold mb-4">KENYA OFFICE</h2>

            {/* Phone */}
            <div className="flex items-center justify-center space-x-2">
              <FaPhone className="text-orange-500" />
              <span>+254 759-300-360</span>
            </div>

            {/* Email */}
            <div className="flex items-center justify-center space-x-2">
              <FaEnvelope className="text-orange-500" />
              <span>info@vizxglobal.com</span>
            </div>

            {/* Address */}
            <div className="flex items-center justify-center space-x-2 text-center">
              <MdLocationOn className="text-orange-500" />
              <span>
                Britam Tower, Hospital Rd, Upperhill
                <br />
                Suite #2506 &amp; #1500, Nairobi, Kenya
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="pb-16 px-8">
        <div className="max-w-4xl mx-auto bg-white text-black p-8 rounded-lg shadow-lg" data-aos="fade-up">
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>

            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 p-3 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
                className="w-full border border-gray-300 p-3 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-1">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Your Company"
                className="w-full border border-gray-300 p-3 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="(123) 456-7890"
                className="w-full border border-gray-300 p-3 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="How can we help you?"
                required
                className="w-full border border-gray-300 p-3 rounded-md"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
