import React, { useState, useEffect } from "react";
import "./Solutions.css";
import { Link } from "react-router-dom";
import ContactForm from "../components/common/ContactForm";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Solutions: React.FC = () => {
  const images = [
    "/images/solutions-bg1.jpg",
    "/images/IMG_6049.jpg",
    "/images/IMG_6027.jpg",
    "/images/IMG_6030.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Initialize AOS for scroll animations
    AOS.init({ duration: 800, once: true });
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="solutions-page">
      {/* Hero Section */}
      <section className="hero-section relative">
        <div
          className="solutions-content dark-bg w-screen h-full"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
          }}
        >
          <div className="overlay w-full flex flex-col items-center justify-center text-1xl">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our <span className="text-orange-500">Solutions</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Innovative and tailored outsourcing services to drive your success.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Solutions Content */}
      <section>
        <div className="solution dark-bg" data-aos="fade-up">
          <Link to="/rpo">
            <h2>Recruitment Process Outsourcing (RPO)</h2>
          </Link>
          <p>
            Comprehensive recruitment, quality control, and payroll services ensuring access to the best talent in the industry.
            We connect top-tier professionals with the right organizations, ensuring a seamless hiring process for businesses looking to expand their workforce efficiently.
          </p>
        </div>

        <div className="solution bg-orange-400" data-aos="fade-up">
          <Link to="/contact-center">
            <h2>Contact Center as a Service (CCaaS)</h2>
          </Link>
          <p>
            Empower your business with our state-of-the-art contact center solutions, designed to enhance customer experiences while driving operational efficiency.
            From inbound customer support to outbound sales, we provide high-quality, multilingual call center services tailored to your needs.
          </p>
        </div>

        <div className="solution dark-bg" data-aos="fade-up">
          <Link to="/industry/real-estate">
            <h2>Real Estate Management</h2>
          </Link>
          <p>
            We offer a full suite of real estate management solutions to ensure properties are well-maintained and supported by experienced professionals.
            Whether you're managing a residential, commercial, or industrial property, we have the expertise to streamline operations.
          </p>
        </div>

        <div className="solution bg-orange-400" data-aos="fade-up">
          <Link to="/rpo">
            <h2>Back Office Support</h2>
          </Link>
          <p>
            Streamline your operations with our specialized back-office support services, including payroll processing, data management, and administrative support.
            Our team ensures accuracy, efficiency, and compliance, allowing your business to focus on growth.
          </p>
        </div>
      </section>
      <ContactForm />
    </div>
  );
};

export default Solutions;
