"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "What products do you offer in the Hey Prabhu range?",
    answer:
      "Hey Prabhu offers a range of devotional products including Desi Ghee T-Lights (Gold Cup, Gifting, Sample Pack), Terracotta Diyas (Mogra & Lavender), Tealight Candles (White Unscented), Incense Sticks (Economy Range: Hey Prabhu Special, Lavender, Rose), Dhoop Cups (Assorted 2 Fragrances), and Gift Boxes.",
  },
  {
    question: "What are Desi Ghee T-Lights and how long do they burn?",
    answer:
      "Desi Ghee T-Lights are devotional tealight-style diyas made using Desi Ghee and presented in Gold Cups. They are designed for pooja, prayers, festivals, celebrations and other devotional occasions, providing a long-lasting burn of up to approximately 5 hours.",
  },
  {
    question: "Are Desi Ghee T-Lights and Gift Boxes available for gifting and bulk orders?",
    answer:
      "Yes. We offer Desi Ghee T-Lights in Gold Cups in gifting options as well as curated Gift Boxes. Bulk orders can be considered for festive celebrations, family functions, and corporate gifting. Please WhatsApp our team at 8828833303 for quantity and pricing details.",
  },
  {
    question: "How can I place an order and what payment methods are available?",
    answer:
      "You can place your order through our official website or available Hey Prabhu ordering channels, or WhatsApp us at 8828833303 for assistance with your order. Cash on Delivery is currently not available; orders can be placed using the available online payment options.",
  },
  {
    question: "What are the delivery timelines?",
    answer:
      "Delivery timelines depend on your location and order details. Confirmed delivery information and tracking details are shared at the time of order confirmation.",
  },
  {
    question: "How should I use diyas and incense safely?",
    answer:
      "Place diyas and incense on a stable, heat-resistant surface away from flammable materials. Never leave a burning diya or incense unattended, and keep them out of reach of children and pets. Always use an appropriate holder.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* ── Section Header ── */}
        <div className="text-center mb-12">
          <p
            className="text-xs uppercase tracking-widest font-extrabold mb-2"
            style={{ color: "var(--fun-pink)" }}
          >
            Got Questions?
          </p>
          <h2
            className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight mb-3"
            style={{ color: "var(--charcoal)" }}
          >
            Hey Prabhu FAQs
          </h2>
          <p className="text-stone-600 text-sm max-w-lg mx-auto">
            Everything you need to know about our devotional essentials, ordering, delivery and safety.
          </p>
        </div>

        {/* ── Accordion List ── */}
        <div className="flex flex-col gap-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-stone-200/90 bg-white transition-all shadow-xs hover:border-stone-300"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans font-bold text-sm sm:text-base text-stone-900 leading-snug">
                    {faq.question}
                  </span>

                  {/* Fun Pink Circular Toggle Button */}
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-white transition-transform duration-200 shadow-sm"
                    style={{ backgroundColor: "var(--fun-pink)" }}
                    aria-hidden="true"
                  >
                    {isOpen ? <Minus size={16} strokeWidth={2.5} /> : <Plus size={16} strokeWidth={2.5} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
