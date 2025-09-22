import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Calendar, Home, Instagram, Linkedin, Twitter } from "lucide-react";

/**
 * ComingSoon Page
 * ------------------------------------------------------
 * Drop-in page you can render at any route while a feature/page is in progress.
 * Tailwind + Framer Motion. Fully mobile responsive.
 *
 * Usage:
 *   <ComingSoon launchDate="2025-11-01T00:00:00Z" title="RPO Portal" />
 *
 * Notes:
 * - If no launchDate is provided, a generic message is shown instead of the countdown.
 * - The email form is a stub (POST to /api/notify). Hook it up to your backend or a service (e.g., Formspree).
 */

interface ComingSoonProps {
  /** ISO string or any Date-parsable string */
  launchDate?: string;
  title?: string;
  subtitle?: string;
  /** Toggle the notify-me email field */
  showNotify?: boolean;
}

const pad = (n: number) => String(Math.max(0, n)).padStart(2, "0");

function useCountdown(target?: string) {
  const targetMs = useMemo(() => (target ? new Date(target).getTime() : undefined), [target]);
  const [now, setNow] = useState<number>(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!targetMs) return { days: "--", hours: "--", minutes: "--", seconds: "--", finished: false };

  const diff = Math.max(0, targetMs - now);
  const finished = diff === 0;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days: pad(days), hours: pad(hours), minutes: pad(minutes), seconds: pad(seconds), finished };
}

const ComingSoon: React.FC<ComingSoonProps> = ({
  launchDate,
  title = "Coming Soon",
  subtitle = "We're putting on the final polish.",
  showNotify = true,
}) => {
  const { days, hours, minutes, seconds, finished } = useCountdown(launchDate);

  return (
    <div className="relative min-h-[100dvh] w-full overflow-hidden bg-black text-white">
      {/* Backdrop + gradient accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl opacity-30 bg-orange-500/40" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full blur-3xl opacity-20 bg-purple-500/30" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full blur-3xl opacity-20 bg-emerald-500/30" />
      </div>

      <main className="relative z-10 mx-auto flex min-h-[100dvh] max-w-5xl flex-col items-center justify-center px-4 py-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur"
        >
          <Calendar className="h-3.5 w-3.5" />
          {launchDate ? (
            <span>Launching on {new Date(launchDate).toLocaleString()}</span>
          ) : (
            <span>We\'re building something great</span>
          )}
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.6 }}
          className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
        >
          <span className="bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">{title}</span>
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-4 max-w-2xl text-center text-base text-white/70 sm:text-lg"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Countdown */}
        {launchDate && !finished && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-10 grid w-full max-w-2xl grid-cols-4 gap-3 sm:gap-4"
          >
            {[{ label: "Days", value: days }, { label: "Hours", value: hours }, { label: "Minutes", value: minutes }, { label: "Seconds", value: seconds }].map(
              ({ label, value }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur sm:p-5"
                >
                  <div className="text-3xl font-bold tabular-nums sm:text-4xl">{value}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-white/60">{label}</div>
                </div>
              )
            )}
          </motion.div>
        )}

        {/* Notify me */}
        {showNotify && (
          <motion.form
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const fd = new FormData(form);
              const email = String(fd.get("email") || "");
              try {
                // Replace with your endpoint or integrate with existing ContactForm logic
                await fetch("/api/notify", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email, launchDate }),
                });
                alert("Thanks! We'll keep you posted.");
                form.reset();
              } catch (err) {
                console.error(err);
                alert("Something went wrong. Please try again later.");
              }
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-10 w-full max-w-xl"
          >
            <div className="flex flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="h-12 w-full rounded-xl border border-white/10 bg-white/10 px-4 text-white placeholder-white/60 outline-none ring-orange-500/40 focus:border-orange-400 focus:ring-4"
              />
              <button
                type="submit"
                className="h-12 shrink-0 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 px-5 font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> Notify me</span>
              </button>
            </div>
            <p className="mt-2 text-center text-xs text-white/60">No spam. Unsubscribe anytime.</p>
          </motion.form>
        )}

        {/* Actions & Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm"
        >
          <a href="/" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/80 backdrop-blur hover:bg-white/10">
            <Home className="h-4 w-4" /> Back to Home
          </a>
          <div className="h-4 w-px bg-white/10" />
          <div className="inline-flex items-center gap-4 text-white/70">
            <a aria-label="Twitter" href="https://twitter.com/vizxglobal" target="_blank" rel="noreferrer" className="hover:text-white">
              <Twitter className="h-5 w-5" />
            </a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/company/vizxglobal" target="_blank" rel="noreferrer" className="hover:text-white">
              <Linkedin className="h-5 w-5" />
            </a>
            <a aria-label="Instagram" href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="hover:text-white">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        {/* Footer mini-note */}
        <div className="mt-12 text-center text-xs text-white/50">
          © {new Date().getFullYear()} VizX Global — All rights reserved.
        </div>
      </main>
    </div>
  );
};

export default ComingSoon;
