"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Truck, MessageCircle, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home",         href: "/#"        },
  { label: "About",        href: "/#about"   },
  { label: "Products",     href: "/#products"},
  { label: "How to Order", href: "/#order"   },
  { label: "FAQs",         href: "/#faqs"    },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  /* Track active section on scroll */
  useEffect(() => {
    const onScroll = () => {
      const sections = ["about", "products", "why", "order", "faqs", "contact"];
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 160) current = id;
      }
      setActiveId(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const productsEl = document.getElementById("products");
    if (productsEl) {
      productsEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ── 1. UPPER PART: Hey Prabhu Logo & Fast Dispatch (Scrolls away, not sticky) ── */}
      <header className="w-full relative" style={{ backgroundColor: "var(--sun-yellow)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4 border-b border-black/5">
          {/* Mobile menu trigger */}
          <button
            className="md:hidden p-2 -ml-2 rounded-lg text-stone-900 hover:bg-black/5 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Brand Logo / Wordmark */}
          <div className="flex-1 md:flex-initial flex items-center justify-center md:justify-start">
            <Link
              href="/"
              className="group inline-flex items-center gap-1.5 font-serif text-2xl sm:text-3xl font-extrabold tracking-tight transition-transform hover:scale-[1.02]"
              style={{ color: "var(--charcoal)" }}
            >
              <span className="text-[var(--fun-pink)] text-lg animate-pulse" aria-hidden="true">
                ✦
              </span>
              <span>Hey Prabhu</span>
              <span
                className="inline-flex items-center justify-center w-6 h-6 rounded-full text-white text-xs font-bold shadow-sm -ml-0.5"
                style={{ backgroundColor: "var(--fun-pink)" }}
                title="Devotional Essentials"
              >
                🪔
              </span>
            </Link>
          </div>

          {/* Fast Dispatch Badge (Top right) */}
          <div
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/75 text-stone-800 border border-black/5 shadow-xs"
            title="Express delivery details available"
          >
            <Truck size={14} className="text-stone-700" />
            <span>Fast Dispatch</span>
          </div>
        </div>
      </header>

      {/* ── 2. LOWER PART: Standalone Sticky Navigation Bar across the whole page! ── */}
      <nav
        className="sticky top-0 z-50 w-full shadow-md transition-all"
        style={{
          backgroundColor: "var(--sun-yellow)",
          borderBottom: "2px solid rgba(0,0,0,0.08)",
        }}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
          {/* Left: Navigation links (Contact removed) */}
          <div className="hidden md:flex items-center gap-1 lg:gap-3 text-xs lg:text-sm font-semibold text-stone-900">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace("/#", "").replace("#", "");
              const isActive = id === "" ? activeId === "" : activeId === id;
              return (
                <a
                  key={label}
                  href={href}
                  className={`px-3 py-1.5 rounded-full transition-all hover:bg-black/10 hover:text-black ${
                    isActive ? "bg-black/10 text-stone-950 font-bold" : "text-stone-800"
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </div>

          {/* Center / Right: Search Bar (Moved down to this sticky row) */}
          <form
            onSubmit={handleSearchSubmit}
            className="flex-1 max-w-xs sm:max-w-sm relative flex items-center"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search diyas, t-lights, incense..."
              className="w-full pl-3.5 pr-9 py-1.5 rounded-full text-xs font-medium text-stone-900 bg-white/95 placeholder-stone-500 border border-stone-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-inner"
            />
            <button
              type="submit"
              aria-label="Search"
              className="absolute right-2.5 text-stone-500 hover:text-stone-900 transition-colors"
            >
              <Search size={15} />
            </button>
          </form>

          {/* Far Right: WhatsApp Order Button (Moved down to this sticky row) */}
          <a
            href="https://wa.me/918828833303"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-sm shrink-0"
            style={{
              backgroundColor: "var(--wa-green)",
              boxShadow: "0 2px 8px rgba(37,211,102,0.35)",
            }}
            aria-label="Order on WhatsApp"
          >
            <MessageCircle size={15} />
            <span className="hidden sm:inline">WhatsApp Order</span>
            <span className="sm:hidden">Order</span>
          </a>
        </div>

        {/* ── Mobile Menu Dropdown ── */}
        {menuOpen && (
          <div
            className="md:hidden px-4 pt-2 pb-5 border-t border-black/10 flex flex-col gap-2"
            style={{ backgroundColor: "var(--sun-yellow)" }}
          >
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="py-2 px-3 rounded-lg font-semibold text-stone-900 hover:bg-black/10 transition-colors text-sm"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}

            <a
              href="https://wa.me/918828833303"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-white font-bold text-sm"
              style={{ backgroundColor: "var(--wa-green)" }}
              onClick={() => setMenuOpen(false)}
            >
              <MessageCircle size={16} />
              WhatsApp Us: 8828833303
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
