"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { Product } from "@/data/products";
import { ChevronDown, Sparkles, Check, Filter as FilterIcon } from "lucide-react";

type Filter = "all" | "Desi Ghee Products" | "Incense Sticks";

const TABS: { label: string; value: Filter; count: number }[] = [
  { label: "All Items",          value: "all",                 count: 9 },
  { label: "Desi Ghee Products", value: "Desi Ghee Products", count: 6 },
  { label: "Incense Sticks",     value: "Incense Sticks",     count: 3 },
];

export default function ProductsSection({ products }: { products: Product[] }) {
  const [active, setActive] = useState<Filter>("all");
  const [inStockOnly, setInStockOnly] = useState(true);

  const filtered =
    active === "all" ? products : products.filter((p) => p.group === active);

  return (
    <section
      id="products"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-[#FCFBF7] border-t border-b border-stone-200/80"
    >
      <div className="max-w-7xl mx-auto">
        {/* ── Section Title & Tagline ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-stone-200">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "var(--fun-pink)" }}
              />
              <p className="text-xs uppercase tracking-widest font-bold text-stone-500">
                Pooja & Festive Essentials
              </p>
            </div>
            <h2
              className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight"
              style={{ color: "var(--charcoal)" }}
            >
              Our Products
            </h2>
          </div>
          <p className="text-sm font-medium text-stone-600 max-w-sm">
            Traditional Indian devotional products for your daily pooja, festive celebrations and peaceful moments.
          </p>
        </div>

        {/* ── Layout with Sidebar (matches STUTI Screenshot 2) ── */}
        <div className="grid lg:grid-cols-4 gap-8 items-start">
          {/* ── Sidebar Filters ── */}
          <aside className="lg:col-span-1 flex flex-col gap-6 p-5 rounded-2xl bg-white border border-stone-200/90 shadow-sm">
            {/* Relevance / Count */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-stone-800 pb-2 border-b border-stone-100">
                <span className="flex items-center gap-1.5">
                  <FilterIcon size={14} className="text-amber-600" />
                  Most Relevant
                </span>
                <span className="px-2 py-0.5 rounded-full bg-stone-100 text-stone-600">
                  {filtered.length} products
                </span>
              </div>
            </div>

            {/* Category Filter list */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
                Categories
              </h3>
              <div className="flex flex-col gap-1.5">
                {TABS.map(({ label, value, count }) => {
                  const isSelected = active === value;
                  return (
                    <button
                      key={value}
                      onClick={() => setActive(value)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-left transition-all ${
                        isSelected
                          ? "bg-amber-100/70 text-stone-900 border border-amber-300 font-bold"
                          : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                      }`}
                    >
                      <span>{label}</span>
                      <span
                        className={`text-[11px] px-2 py-0.5 rounded-full ${
                          isSelected
                            ? "bg-white text-stone-900 font-bold shadow-xs"
                            : "bg-stone-100 text-stone-500"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Availability Accordion / Filter (Matches STUTI Screenshot 2) */}
            <div className="pt-2 border-t border-stone-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
                Availability
              </h3>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2.5 text-xs font-medium text-stone-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="w-4 h-4 rounded text-amber-500 focus:ring-amber-400 accent-amber-500 cursor-pointer"
                  />
                  <span>In stock ({products.length})</span>
                </label>
                <label className="flex items-center gap-2.5 text-xs font-medium text-stone-400 cursor-not-allowed">
                  <input
                    type="checkbox"
                    disabled
                    className="w-4 h-4 rounded text-stone-300 cursor-not-allowed"
                  />
                  <span>Out of stock (0)</span>
                </label>
              </div>
            </div>

            {/* Devotional Note / Help box */}
            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/60 text-xs">
              <p className="font-bold text-amber-900 mb-1 flex items-center gap-1">
                <span>🪔</span> Bulk Orders & Gifting
              </p>
              <p className="text-stone-600 text-[11px] leading-relaxed mb-2">
                Special packs for pooja, festivals and temples available.
              </p>
              <a
                href="https://wa.me/918828833303?text=Hi%20Hey%20Prabhu,%20I%20am%20looking%20for%20bulk%20orders/gifting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-bold text-emerald-700 hover:underline"
              >
                Inquire on WhatsApp →
              </a>
            </div>
          </aside>

          {/* ── Main Product Grid (3 cols on desktop, responsive) ── */}
          <div className="lg:col-span-3">
            {/* Quick Filter Pills (Top of grid) */}
            <div className="flex flex-wrap items-center gap-2 mb-6" role="tablist" aria-label="Filter products">
              {TABS.map(({ label, value }) => {
                const isActive = active === value;
                return (
                  <button
                    key={value}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(value)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                      isActive
                        ? "text-stone-900 shadow-sm"
                        : "bg-white text-stone-600 border border-stone-200 hover:border-stone-400"
                    }`}
                    style={isActive ? { backgroundColor: "var(--sun-yellow)" } : {}}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            {/* Product Cards Grid with animated transitions */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
              >
                {filtered.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>

            <p className="mt-8 text-xs italic text-stone-500">
              Product availability may vary. Prices subject to confirmation where noted.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
