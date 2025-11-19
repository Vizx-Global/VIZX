import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

type Slide = {
  id: string;
  img: string;
  alt: string;
  eyebrow?: string;
  title: string;
  body: string;
  ctaLabel: string;
  to: string;
};

const slides: Slide[] = [
    {
    id: "bpo-powerhouse",
    img: "/images/hero-bpo1.jpg",
    alt: "African professionals collaborating in a modern workspace",
    eyebrow: "About Vizx",
    title: "Africa’s Home for BPO Excellence",
    body:
      "Empowering global businesses through human intelligence, technology, and excellence in service delivery across Africa and beyond.",
    ctaLabel: "Contact Us",
    to: "/contact",
  },
  {
    id: "solutions",
    img: "/images/hero-solutions.jpg",
    alt: "Customer experience team at modern contact center",
    eyebrow: "Solutions",
    title: "Deliver standout CX. Scale your back office.",
    body:
      "Inbound & outbound contact center, multilingual support, and operational precision so your teams stay focused on growth.",
    ctaLabel: "Explore Solutions",
    to: "/solutions",
  },
  {
    id: "resources",
    img: "/images/hero-resources.jpg",
    alt: "Laptop and notebook with analytics",
    eyebrow: "Resources",
    title: "Insights that move teams forward",
    body:
      "Stay updated with our resources, news, and deep-dive guidance across BPO, RPO, CX and more.",
    ctaLabel: "Read the Blog",
    to: "/resources",
  },
  {
    id: "industries",
    img: "/images/solutions-bg1.jpg",
    alt: "Collage of healthcare, real estate, and travel",
    eyebrow: "Industries",
    title: "Expertise across sectors",
    body:
      "Tailored solutions for healthcare, real estate, travel, and beyond—built on years of delivery experience.",
    ctaLabel: "See Industries",
    to: "/industries",
  },
  {
    id: "vizx-hi",
    img: "/images/hero-vizx-hi.png",
    alt: "Human and AI collaboration abstract",
    eyebrow: "Vizx HI",
    title: "Unleashing Human Intelligence",
    body:
      "Blend automation with human judgment. Train agents in EI, AI tools, and brand guidelines for high-quality service.",
    ctaLabel: "Discover Vizx HI",
    to: "/vizx-hi",
  },
];

interface HeroSlideshowProps {
  intervalMs?: number;
}

const HeroSlideshow: React.FC<HeroSlideshowProps> = ({ intervalMs = 6500 }) => {
  const [index, setIndex] = useState(0);
  const timer = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  const go = (delta: number) => {
    setIndex((curr) => {
      const len = slides.length;
      return ((curr + delta) % len + len) % len;
    });
  };
  const goTo = (i: number) => setIndex(((i % slides.length) + slides.length) % slides.length);

  const start = () => {
    stop();
    timer.current = window.setInterval(() => go(1), intervalMs);
  };
  const stop = () => {
    if (timer.current) window.clearInterval(timer.current);
    timer.current = null;
  };

  useEffect(() => {
    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intervalMs]);

  // Pause autoplay when hovered/focused
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onEnter = () => stop();
    const onLeave = () => start();
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("focusin", onEnter);
    el.addEventListener("focusout", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("focusin", onEnter);
      el.removeEventListener("focusout", onLeave);
    };
  }, []);

  // Touch swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    stop();
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.touches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 60) {
      go(dx > 0 ? -1 : 1);
      touchStartX.current = null;
    }
  };
  const onTouchEnd = () => {
    touchStartX.current = null;
    start();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") go(1);
    else if (e.key === "ArrowLeft") go(-1);
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[70vh] md:h-[88vh] overflow-hidden bg-black"
      aria-roledescription="carousel"
      aria-label="Hero slideshow"
      onKeyDown={onKeyDown}
      tabIndex={0}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides */}
      <div
        className="absolute inset-0 flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((s, i) => (
          <article
            key={s.id}
            className="relative min-w-full h-full"
            aria-hidden={i !== index}
            aria-label={s.title}
          >
            <img
              src={s.img}
              alt={s.alt}
              className="w-full h-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />
            {/* Content */}
            <div className="absolute inset-0 flex items-end md:items-center">
              <div className="px-5 md:px-12 max-w-3xl pb-10 md:pb-0">
                {s.eyebrow && (
                  <p className="uppercase tracking-[0.2em] text-xs md:text-sm text-white/80 mb-3">
                    {s.eyebrow}
                  </p>
                )}
                <h1 className="text-white text-3xl md:text-6xl font-extrabold leading-tight drop-shadow">
                  {s.title}
                </h1>
                <p className="text-white/90 text-base md:text-lg mt-3 md:mt-4">
                  {s.body}
                </p>
                <div className="mt-6">
                  <Link
                    to={s.to}
                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-3 rounded-2xl transition focus:outline-none focus:ring-2 focus:ring-orange-300"
                  >
                    {s.ctaLabel}
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute left-0 right-0 bottom-4 md:bottom-8 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`h-2.5 rounded-full transition-all ${i === index ? "w-8 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"}`}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      {/* Prev/Next */}
      <div className="pointer-events-none absolute inset-0 flex justify-between items-center px-2 md:px-4">
        <button
          className="pointer-events-auto h-10 w-10 md:h-12 md:w-12 grid place-items-center rounded-full bg-black/30 hover:bg-black/50 text-white"
          aria-label="Previous slide"
          onClick={() => go(-1)}
        >
          ‹
        </button>
        <button
          className="pointer-events-auto h-10 w-10 md:h-12 md:w-12 grid place-items-center rounded-full bg-black/30 hover:bg-black/50 text-white"
          aria-label="Next slide"
          onClick={() => go(1)}
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default HeroSlideshow;
