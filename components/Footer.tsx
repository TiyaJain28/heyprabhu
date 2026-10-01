"use client";

import Link from "next/link";
import { AtSign, Globe, Mail, MessageCircle, Share2, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative pt-16 pb-10 px-4 sm:px-6 mt-16"
      style={{
        backgroundColor: "var(--sun-yellow)",
        color: "var(--charcoal)",
        borderTop: "3px solid rgba(0,0,0,0.06)",
      }}
    >
      {/* ── Playful "Find Us On" Pink Pill (Matches STUTI Screenshot 4) ── */}
      <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        {/* Whiskers / spark radiant lines */}
        <div className="flex justify-between w-44 px-3 -mb-1 pointer-events-none select-none" aria-hidden="true">
          <svg width="40" height="16" viewBox="0 0 40 16" fill="none">
            <line x1="8" y1="14" x2="2" y2="4" stroke="#D81B60" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="22" y1="15" x2="20" y2="2" stroke="#D81B60" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="34" y1="15" x2="38" y2="6" stroke="#D81B60" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <svg width="40" height="16" viewBox="0 0 40 16" fill="none">
            <line x1="6" y1="15" x2="2" y2="6" stroke="#D81B60" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="18" y1="15" x2="20" y2="2" stroke="#D81B60" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="32" y1="14" x2="38" y2="4" stroke="#D81B60" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* Hot-pink pill */}
        <div
          className="flex items-center gap-3 px-6 py-2.5 rounded-full text-white font-extrabold text-sm shadow-md hover:scale-105 transition-transform"
          style={{ backgroundColor: "var(--fun-pink)" }}
        >
          <span className="tracking-wide">Find Us On</span>
          <div className="flex items-center gap-2">
            <a
              href="https://www.instagram.com/heyprabhuoffical/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hey Prabhu on Instagram"
              className="w-7 h-7 rounded-full bg-white/20 hover:bg-white text-white hover:text-[var(--fun-pink)] flex items-center justify-center transition-colors"
              title="@heyprabhuoffical on Instagram"
            >
              <AtSign size={14} strokeWidth={2.5} />
            </a>
            <a
              href="https://wa.me/918828833303"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hey Prabhu on WhatsApp"
              className="w-7 h-7 rounded-full bg-white/20 hover:bg-white text-white hover:text-[var(--fun-pink)] flex items-center justify-center transition-colors"
              title="8828833303 on WhatsApp"
            >
              <MessageCircle size={14} strokeWidth={2.5} />
            </a>
            <span
              className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center opacity-60 cursor-default"
              title="Facebook"
              aria-label="Facebook"
            >
              <Share2 size={13} strokeWidth={2.5} />
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* ── 4 Column Grid on Bright Yellow (Matches STUTI Screenshot 4) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-black/10">
          {/* Col 1: Logo & Brand Description */}
          <div className="flex flex-col gap-4">
            <div className="inline-block p-4 rounded-2xl bg-white shadow-sm border border-stone-200/80 max-w-[240px]">
              <Link
                href="/"
                className="font-serif text-2xl font-black tracking-tight text-stone-900 flex items-center gap-1.5"
              >
                <span className="text-[var(--fun-pink)] text-base">✦</span>
                <span>Hey Prabhu</span>
                <span
                  className="w-5 h-5 rounded-full text-white text-[10px] font-bold flex items-center justify-center shadow-xs"
                  style={{ backgroundColor: "var(--fun-pink)" }}
                >
                  🪔
                </span>
              </Link>
              <p className="text-[11px] font-medium text-stone-500 mt-1 italic">
                Tradition, with a beautiful touch.
              </p>
            </div>
            <p className="text-xs text-stone-800 leading-relaxed font-medium">
              Hey Prabhu brings thoughtfully crafted traditional Indian essentials — Desi Ghee
              T-Lights, Terracotta Diyas, Incense Sticks and Gift Boxes — bringing roshni, bhakti
              and warmth into your everyday moments.
            </p>
          </div>

          {/* Col 2: Quick links */}
          <div className="flex flex-col gap-2 text-xs font-semibold">
            <p className="text-sm font-black uppercase tracking-wider text-stone-900 mb-2">
              Quick Links
            </p>
            {[
              { label: "Our Story",        href: "/#about"    },
              { label: "Products",         href: "/#products" },
              { label: "Why Hey Prabhu",   href: "/#why"      },
              { label: "How to Order",     href: "/#order"    },
              { label: "Diya FAQs",        href: "/#faqs"     },
              { label: "Contact Us",       href: "/#contact"  },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-stone-800 hover:text-stone-950 hover:underline transition-colors py-0.5"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Col 3: Contact Us */}
          <div className="flex flex-col gap-2 text-xs">
            <p className="text-sm font-black uppercase tracking-wider text-stone-900 mb-2">
              Contact Us
            </p>
            <p className="font-bold text-stone-900">
              Mob:{" "}
              <a
                href="https://wa.me/918828833303"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-stone-950 font-extrabold"
              >
                +91 8828833303
              </a>
            </p>
            <p className="font-semibold text-stone-800">
              Timing: Mon to Sat: 11 AM - 7 PM.
            </p>
            <p className="font-medium text-stone-800">
              Email: <span className="opacity-70"></span>
            </p>
            <p className="font-medium text-stone-800">
              Website: <span className="opacity-70"></span>
            </p>
          </div>

          {/* Col 4: Policies */}
          <div className="flex flex-col gap-2 text-xs font-semibold">
            <p className="text-sm font-black uppercase tracking-wider text-stone-900 mb-2">
              Policies
            </p>
            {[
              { label: "Terms and Conditions", href: "/terms-and-conditions" },
              { label: "Privacy Policy",       href: "/privacy-policy"       },
              { label: "Terms of Use",         href: "/terms-of-use"         },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-stone-800 hover:text-stone-950 hover:underline transition-colors py-0.5"
              >
                {label}
              </Link>
            ))}
            <div className="mt-3 p-3 rounded-xl bg-white/70 border border-black/5 text-[11px] text-stone-800">
              <span className="font-bold text-stone-900">COD Notice:</span> Cash on Delivery is currently not available.
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-stone-700">
          <p>© Hey Prabhu • Devotional Essentials • All rights reserved.</p>
          <p className="italic text-stone-800">Har shubh pal ke liye. Aapke pooja moments ke liye.</p>
        </div>
      </div>

      {/* Floating Scroll to Top button (Matches STUTI Screenshot 3 & 4) */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-white text-stone-900 shadow-lg border border-stone-200 flex items-center justify-center hover:bg-stone-50 hover:scale-105 active:scale-95 transition-all"
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        <ArrowUp size={18} strokeWidth={2.5} />
      </button>
    </footer>
  );
}
