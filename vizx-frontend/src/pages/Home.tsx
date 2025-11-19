import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { FaPlay } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSlideshow from "../components/layout/HeroSlideShow";

/* =========================
   Inline zero-dependency Particles
   ========================= */
const CanvasParticles: React.FC<{
  count?: number;
  color?: string;
  speed?: number;
  maxSize?: number;
  className?: string;
}> = ({
  count = 160,
  color = "rgba(255,255,255,0.7)",
  speed = 0.5,
  maxSize = 1.8,
  className = "",
}) => {
  const ref = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const dpr = Math.min(2, window.devicePixelRatio || 1);

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const prefersReduced =
      "matchMedia" in window &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    type P = { x: number; y: number; vx: number; vy: number; r: number };
    const W = () => canvas.width / dpr;
    const H = () => canvas.height / dpr;

    const parts: P[] = Array.from({ length: count }).map(() => ({
      x: Math.random() * W(),
      y: Math.random() * H(),
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
      r: Math.random() * maxSize + 0.3,
    }));

    let raf = 0;
    const step = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = color;

      for (const p of parts) {
        if (!prefersReduced) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < -4) p.x = W() + 4;
          if (p.x > W() + 4) p.x = -4;
          if (p.y < -4) p.y = H() + 4;
          if (p.y > H() + 4) p.y = -4;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!prefersReduced) raf = requestAnimationFrame(step);
    };

    step();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, [count, color, speed, maxSize]);

  return (
    <canvas
      ref={ref}
      className={`w-full h-full ${className || ""}`}
      aria-hidden="true"
    />
  );
};

/* =========================
   KPI Band
   ========================= */
const KPIBand: React.FC = () => {
  const [allowMotion, setAllowMotion] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined" || !("matchMedia" in window)) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setAllowMotion(!mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const KPIS = [
    { value: "70%", label: "Avg. Cost Reduction" },
    { value: "< 30d", label: "Typical Ramp Time" },
    { value: "24/7", label: "Global Coverage" },
    { value: "97%", label: "CSAT on Managed Programs" },
  ];

  return (
    <section className="relative bg-black text-white py-16 overflow-hidden min-h-[260px]">
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        {allowMotion ? (
          <CanvasParticles
            className="w-full h-full"
            count={160}
            speed={0.12}
            maxSize={1.6}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-b from-zinc-900/60 to-black" />
        )}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <h2 className="sr-only">Impact KPIs</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {KPIS.map((kpi, i) => (
            <div
              key={i}
              className="bg-white/0 border border-zinc-800 rounded-2xl p-6 text-center hover:border-orange-500 transition"
              aria-label={kpi.label}
            >
              <div className="text-3xl md:text-4xl font-extrabold tracking-tight">
                {kpi.value}
              </div>
              <div className="mt-2 text-sm text-zinc-300">{kpi.label}</div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-zinc-400">
          Metrics reflect recent program outcomes and typical ranges; not
          guarantees.
        </p>
      </div>
    </section>
  );
};

/* =========================
   Home Page
   ========================= */
const Home: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true as const,
    autoplaySpeed: 0,
    pauseOnHover: false,
    cssEase: "linear" as const,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const solutions = [
    {
      title: "CX Solutions",
      desc:
        "Leverage global expertise to deliver cost-effective outsourcing solutions that drive growth and enhance customer satisfaction.",
    },
    {
      title: "Merchant Services",
      desc:
        "Empower your business with cutting-edge digital solutions for seamless payment processing and operational automation.",
    },
    {
      title: "RPO Solutions",
      desc:
        "Connect your company with top-tier talent from diverse markets to fuel innovation and achieve your strategic hiring goals.",
    },
    {
      title: "Back Office ",
      desc:
        "Optimize your core operations through streamlined processes and advanced technology, allowing you to focus on your primary business objectives.",
    },
    {
      title: "Real Estate Solutions",
      desc:
        "Optimize your real estate operations through streamlined processes and advanced technology for greater efficiency and success.",
    },
  ];

  const locations = [
    {
      title: "Nairobi, Kenya",
      image: "/images/nairobi-office1.jpg",
      description:
        "Our flagship office in East Africa, harnessing a talented workforce of young, educated, English-speaking professionals. This hub supports clients worldwide with agile BPO solutions.",
    },
    {
      title: "Los Angeles, USA",
      image: "/images/us-office.jpg",
      description:
        "Strategically located for easy access to North American clients. Our LA team provides seamless communication, ensuring your operations run smoothly around the clock.",
    },
  ];

  const clients = [
    "Bryant Staffing Solutions",
    "VAME",
    "Spring Delta",
    "Kenbright",
    "Outsource Consultants",
    "RingCentral",
  ];

  const partnersCount = 7; // Partner1.png … Partner7.png

  return (
    <div className="home-page overflow-x-hidden">
      {/* ======================================================
         TOP HERO: Inline video (files in public/hero/)
         ====================================================== */}
      <section className="relative w-full h-screen bg-black bg-opacity-50 overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    preload="metadata"
    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
    onError={(e) => {
      console.error("Video failed to load. Check the path and filename.");
    }}
  >
    {/* IMPORTANT: file must be in public/images/Globe.mp4 */}
    <source src="/images/Globe1.mp4" type="video/mp4" />
  </video>

  <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
    <button
      onClick={() => setIsVideoPlaying(true)}
      className="bg-orange-500 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center"
      aria-label="Play intro video"
    >
      {/* You already import FaPlay */}
      <FaPlay className="text-white text-xl sm:text-2xl" />
    </button>

    <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mt-6 leading-snug max-w-2xl">
      Africa’s leading BPO Powerhouse
    </h1>

    <Link to="/solutions" className="mt-6 inline-block">
      <button className="px-6 py-2 sm:px-8 sm:py-3 bg-orange-500 text-white rounded-md shadow-lg text-sm sm:text-base">
        Get Started
      </button>
    </Link>
  </div>

  {isVideoPlaying && (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 px-4">
      <div className="relative w-full max-w-4xl">
        <button
          onClick={() => setIsVideoPlaying(false)}
          className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-3 py-1"
          aria-label="Close video"
        >
          ✖
        </button>

        <video
          controls
          autoPlay
          className="w-full h-auto rounded-md"
          preload="metadata"
          onError={() =>
            console.error("Intro video failed to load. Check /images/intro.mp4")
          }
        >
          {/* IMPORTANT: file must be in public/images/intro.mp4 */}
          <source src="/images/intro.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )}
</section>


      

      {/* SOLUTIONS */}
      <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Solutions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {solutions.map((s, i) => (
              <div
                key={i}
                className="bg-black border border-gray-700 rounded-md p-6 hover:border-orange-500 hover:animate-glow transition"
              >
                <h3 className="text-orange-400 text-xl font-semibold mb-3">
                  {s.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
         SECOND HERO: your existing slideshow (now below video)
         ====================================================== */}
      <section id="slideshow-hero">
        <HeroSlideshow />
      </section>

      {/* KPI BAND */}
      <KPIBand />

      {/* LOCATIONS */}
      <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Locations</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((loc, i) => (
            <div key={i} className="mx-auto w-full max-w-xs sm:max-w-md md:max-w-none">
              <div className="border p-6 rounded-md shadow-md bg-black">
                <img
                  src={loc.image}
                  alt={loc.title}
                  className="w-full h-48 sm:h-64 object-cover mb-4 rounded-md"
                />
                <h3 className="text-xl font-semibold mb-2">{loc.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{loc.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENTS */}
      <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Our Clients</h2>

        {/* mobile grid */}
          <div className="grid grid-cols-2 gap-4 sm:hidden">
            {clients.map((_, i) => (
              <div key={i} className="bg-black border border-black rounded-md flex items-center justify-center p-4">
                <img
                  src={`/images/Client${i + 1}.png`}
                  alt={`Client ${i + 1}`}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* carousel on sm+ */}
          <div className="hidden sm:block px-2 sm:px-0">
            <Slider {...(sliderSettings as any)}>
              {clients.map((_, i) => (
                <div key={i} className="px-1 sm:px-3">
                  <div className="bg-black border border-black rounded-md flex items-center justify-center h-16 sm:h-24">
                    <img
                      src={`/images/Client${i + 1}.png`}
                      alt={`Client ${i + 1}`}
                      className="max-h-full w-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* ABOUT & VIDEO */}
      <section className="bg-black text-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left column: About Us + Why VIZX */}
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  <span className="text-white">About</span>{" "}
                  <span className="text-orange-500">Us</span>
                </h2>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  We are a leading provider of innovative outsourcing solutions with a proven track record of delivering measurable results and strategic partnerships that foster long-term success.
                </p>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  With decades of experience, our leadership team brings deep industry knowledge across customer management, data processing &amp; more.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  <span className="text-white">Why</span>{" "}
                  <span className="text-orange-500">VIZX?</span>
                </h2>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  We strive to deliver customized solutions that align tightly with your objectives, backed by a commitment to innovation, efficiency, and collaboration.
                </p>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  From our strategic presence in Kenya and the US to our global delivery capabilities, every aspect of our operations is designed to help you stay ahead in a dynamic market.
                </p>
              </div>
            </div>

            {/* Right column: video */}
            <div className="w-full self-start mt-0 md:mt-12">
              <video
                loop
                muted
                playsInline
                autoPlay
                className="w-full rounded-md shadow-lg object-cover"
              >
                <source src="/images/fistbump.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Our Trusted Partners</h2>

          {/* mobile grid */}
          <div className="grid grid-cols-2 gap-4 sm:hidden">
            {Array.from({ length: partnersCount }).map((_, i) => (
              <div
                key={i}
                className="bg-black border border-gray-700 rounded-md flex items-center justify-center p-4"
              >
                <img
                  src={`/images/Partner${i + 1}.png`}
                  alt={`Partner ${i + 1}`}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* carousel on sm+ */}
          <div className="hidden sm:block px-2 sm:px-0">
            <Slider {...(sliderSettings as any)}>
              {Array.from({ length: partnersCount }).map((_, i) => (
                <div key={i} className="px-1 sm:px-3">
                  <div className="bg-black border border-black rounded-md flex items-center justify-center h-16 sm:h-24">
                    <img
                      src={`/images/Partner${i + 1}.png`}
                      alt={`Partner ${i + 1}`}
                      className="max-h-full w-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center ">
          <h2 className="text-3xl font-bold mb-12">Hear From Our Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {[
              {
                name: "Sam Zahoor",
                role:
                  "Payroll, Operations & Logistics Manager at ATC West Healthcare, LosAngeles - CA",
                image: "/images/sam-zahoor.jpg",
                quote:
                  "VIZX RPO and BPO services has been a game changer for our business operations. They have streamlined our processes, improved efficiency, and significantly reduced overhead costs. Their services have allowed us to focus on our core business while they handle the rest.",
              },
              {
                name: "Joanne Foy",
                role: "Director of Business Development - WellTech Partners",
                image: "/images/joanne-foy.jpg",
                quote:
                  "Prospects often turn to customer service reviews when looking for an agency for direct hires. VIZX has been a consistent partner to WellTech Partners from the beginning of our relationship, helping us meet client expectiations which has increased our candidate placements.",
              },
              {
                name: "Amanda Bryant",
                role: "COO - Bryant Staffing Solutions",
                image: "/images/amanda-bryant.jpg",
                quote:
                  "The team members at VIZX have consistently demonstrated their expertise and commitment to our company’s success. They are proactive and always ready to go the extra mile. Their deep understanding of our business needs has been instrumental in achieving our goals.",
              },
            ].map((t, index) => (
              <div
                key={index}
                className="bg-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
                />
                <p className="inline text-sm text-gray-300 mb-4 italic">
                  "{t.quote}"
                </p>
                <h3 className="text-lg font-semibold text-white">{t.name}</h3>
                <p className="text-sm text-orange-400">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
