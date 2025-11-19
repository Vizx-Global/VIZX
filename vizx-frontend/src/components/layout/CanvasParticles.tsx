import React, { useEffect, useRef } from "react";

type Props = {
  /** Number of particles (desktop ~120–200, mobile ~60–120) */
  count?: number;
  /** Fill color (supports rgba) */
  color?: string;
  /** Velocity scalar: 0.05–0.3 is subtle */
  speed?: number;
  /** Max particle radius in px (actual size is randomized up to this) */
  maxSize?: number;
  className?: string;
};

const CanvasParticles: React.FC<Props> = ({
  count = 160,
  color = "rgba(255,255,255,0.7)",
  speed = 0.12,
  maxSize = 1.8,
  className = "",
}) => {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
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
          // wrap around edges
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

    step(); // first paint (static if reduced motion)
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, [count, color, speed, maxSize]);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
};

export default CanvasParticles;
