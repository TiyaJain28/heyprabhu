"use client";

import { motion, type Transition } from "framer-motion";
import { Sparkles, MessageCircle, ArrowRight } from "lucide-react";

const makeTransition = (delay = 0): Transition => ({
  duration: 0.55,
  delay,
  ease: [0.22, 1, 0.36, 1],
});

const fadeUpProps = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: makeTransition(delay),
});

export default function HeroAnimations() {
  return (
    <div className="flex flex-col gap-5 py-6 lg:py-12 z-10">
      {/* ── Collection Title Tag ── */}
      <motion.div {...fadeUpProps(0.1)} className="flex items-center gap-2">
        <span
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider text-stone-900 shadow-xs border border-amber-300/80"
          style={{ backgroundColor: "var(--sun-yellow)" }}
        >
          <Sparkles size={13} className="text-stone-950" />
          Pooja &amp; Bhakti Essentials
        </span>
      </motion.div>

      {/* ── Big Bold Display Title (Light Theme) ── */}
      <motion.h1
        {...fadeUpProps(0.2)}
        className="font-serif text-5xl sm:text-7xl font-extrabold tracking-tight leading-none"
        style={{ color: "var(--charcoal)" }}
      >
        Hey Prabhu
      </motion.h1>

      {/* ── Brand Tagline ── */}
      <motion.p
        {...fadeUpProps(0.3)}
        className="font-serif text-xl sm:text-2xl italic font-semibold"
        style={{ color: "var(--maroon)" }}
      >
        Thodi si roshni, thodi si bhakti.
      </motion.p>

      {/* ── Description ── */}
      <motion.p
        {...fadeUpProps(0.4)}
        className="text-sm sm:text-base text-stone-700 leading-relaxed max-w-lg font-normal"
      >
        Hey Prabhu is all about bringing a little more roshni, bhakti and warmth into your
        everyday moments. From Desi Ghee T-Lights and Terracotta Diyas to Dhoop Batti,
        Incense Sticks and beautiful Gift Boxes, we bring traditional Indian essentials with
        a simple and beautiful touch.
      </motion.p>

      {/* ── Core Brand Thought ── */}
      <motion.div {...fadeUpProps(0.45)}>
        <p className="text-xs sm:text-sm font-semibold text-stone-900 bg-amber-100/70 border border-amber-300/80 rounded-xl px-3.5 py-2 inline-block">
          “Making traditions effortless for the modern generation — without losing the connection to our roots.”
        </p>
      </motion.div>

      {/* ── CTA Buttons ── */}
      <motion.div {...fadeUpProps(0.5)} className="flex flex-wrap items-center gap-3 pt-2">
        <a
          href="#products"
          className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full text-sm font-extrabold text-stone-950 transition-all hover:scale-105 active:scale-95 shadow-md"
          style={{ backgroundColor: "var(--sun-yellow)" }}
        >
          <span>Explore Collection</span>
          <ArrowRight size={16} strokeWidth={2.5} />
        </a>
        <a
          href="https://wa.me/918828833303"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full text-sm font-extrabold text-white transition-all hover:scale-105 active:scale-95 shadow-md"
          style={{
            backgroundColor: "var(--wa-green)",
            boxShadow: "0 4px 14px rgba(37,211,102,0.35)",
          }}
        >
          <MessageCircle size={17} strokeWidth={2.5} />
          <span>WhatsApp 8828833303</span>
        </a>
      </motion.div>
    </div>
  );
}
