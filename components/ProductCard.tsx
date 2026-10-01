"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Product } from "@/data/products";
import { ProductIllustration } from "./Illustrations";
import { Plus, MessageCircle } from "lucide-react";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(product.image);
  const [imageFailed, setImageFailed] = useState(false);
  const isIncense = product.group === "Incense Sticks";

  /* Filter details so "Price" label is never shown — price is shown in badge */
  const filteredDetails = product.details.filter(
    (d) => d.label.toLowerCase() !== "price"
  );

  const displayPrice = product.price ?? "";
  const isPriceMissing = product.price === null;

  /* Derive a fun badge label inspired by STUTI e-commerce badge style */
  const packDetail = product.details.find((d) => d.label.toLowerCase() === "pack size");
  const fragranceDetail = product.details.find((d) => d.label.toLowerCase() === "fragrance");
  const badgeText = packDetail
    ? packDetail.value
    : fragranceDetail
    ? fragranceDetail.value
    : isIncense
    ? "Fragrant"
    : "Pure Ghee";

  const waOrderUrl = `https://wa.me/918828833303?text=${encodeURIComponent(
    `Hello Hey Prabhu! I would like to order: ${product.name} (${displayPrice})`
  )}`;

  const handleImageError = () => {
    if (currentSrc?.endsWith(".png")) {
      // Try .jpg if .png failed
      setCurrentSrc(currentSrc.replace(/\.png$/, ".jpg"));
    } else if (currentSrc?.endsWith(".jpg")) {
      // Try .png if .jpg failed
      setCurrentSrc(currentSrc.replace(/\.jpg$/, ".png"));
    } else {
      setImageFailed(true);
    }
  };

  const hasRealImage = Boolean(currentSrc && !imageFailed);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, boxShadow: "0 16px 36px rgba(0,0,0,0.10)" }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-stone-200/90 shadow-sm transition-all duration-300"
    >
      {/* ── Visual / Image Container ── */}
      <div className="relative aspect-square w-full flex items-center justify-center bg-stone-50/80 border-b border-stone-100 overflow-hidden">
        {/* Top-Right Badge (Yellow/Amber badge like STUTI screenshot 2) */}
        <span
          className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-md text-[11px] font-bold tracking-tight shadow-sm text-stone-900"
          style={{ backgroundColor: "var(--sun-yellow)" }}
        >
          {badgeText}
        </span>

        {/* Product Visual: Real image if available, else bespoke SVG illustration */}
        {hasRealImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={currentSrc}
            alt={product.name}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            onError={handleImageError}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center p-6 bg-gradient-to-b from-stone-50/80 to-amber-50/40 transition-transform duration-300 group-hover:scale-105">
            <ProductIllustration
              id={product.id}
              name={product.name}
              group={product.group}
              className="w-32 h-32 sm:w-36 sm:h-36 drop-shadow-md"
            />
          </div>
        )}

        {/* Floating Quick Action Button on Bottom-Right (matches STUTI '+' circular button) */}
        <a
          href={waOrderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 right-3 w-9 h-9 rounded-full flex items-center justify-center text-stone-900 shadow-md transition-all duration-200 hover:scale-110 active:scale-95 z-10"
          style={{ backgroundColor: "var(--sun-yellow)" }}
          aria-label={`Order ${product.name} via WhatsApp`}
          title="Quick Order on WhatsApp"
        >
          <Plus size={18} strokeWidth={2.5} />
        </a>
      </div>

      {/* ── Product Info Body ── */}
      <div className="flex flex-col flex-1 p-4 sm:p-5 gap-2.5">
        {/* Category Pill */}
        <span
          className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full self-start"
          style={{
            backgroundColor: isIncense ? "var(--fun-pink-soft)" : "var(--sun-yellow-soft)",
            color: isIncense ? "var(--fun-pink)" : "var(--maroon)",
          }}
        >
          {product.group}
        </span>

        {/* Title */}
        <h3
          className="font-serif font-bold text-base leading-snug line-clamp-2 min-h-[2.6rem]"
          style={{ color: "var(--charcoal)" }}
        >
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
          {product.description}
        </p>

        {/* Price Row (STUTI style: bold prominent price) */}
        <div className="mt-auto pt-2 flex items-baseline justify-between gap-2 border-t border-stone-100">
          <div>
            <span
              className={`font-sans font-extrabold ${
                isPriceMissing
                  ? "text-xs italic text-stone-400 font-normal"
                  : "text-lg text-stone-900"
              }`}
            >
              {displayPrice}
            </span>
          </div>

          <a
            href={waOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
          >
            <MessageCircle size={13} />
            <span>Order</span>
          </a>
        </div>

        {/* Details list (attributes) */}
        {filteredDetails.length > 0 && (
          <dl className="text-[11px] pt-2 flex flex-col gap-1 border-t border-stone-100">
            {filteredDetails.slice(0, 2).map((d) => (
              <div key={d.label} className="flex justify-between gap-2">
                <dt className="text-stone-500 font-medium">{d.label}:</dt>
                <dd className="text-stone-800 font-semibold truncate max-w-[65%] text-right">
                  {d.value}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </motion.article>
  );
}
