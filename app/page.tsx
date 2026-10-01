import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { products } from "@/data/products";
import { DiyaIllustration, DoodleBannerPattern } from "@/components/Illustrations";
import HeroAnimations from "@/components/HeroAnimations";
import ProductsSection from "@/components/ProductsSection";
import FaqSection from "@/components/FaqSection";
import {
  BookOpen, Target, Eye,
  Flame, Gift, Wind, Leaf,
  Star, ShoppingBag, Home as HomeIcon,
  ShoppingCart, CreditCard, Truck,
  Shield, MessageCircle, AtSign, Share2, Mail, Globe, Sparkles
} from "lucide-react";

export const metadata: Metadata = {
  title: "Hey Prabhu – Desi Ghee Diyas, T-Lights & Incense",
  description:
    "Hey Prabhu brings traditional Indian devotional products — Desi Ghee T-Lights, Terracotta Diyas, Incense Sticks and Gift Boxes — for pooja, festivals and everyday moments of bhakti and warmth.",
};

const MARQUEE_ITEMS = [
  "Thodi si roshni, thodi si bhakti.",
  "Har shubh pal ke liye.",
  "Aapke pooja moments ke liye.",
  "Bring home the warmth of tradition.",
  "Tradition, with a beautiful touch.",
];

const WHY_BULLETS = [
  { icon: Flame,      text: "Desi Ghee devotional products"               },
  { icon: HomeIcon,   text: "Terracotta Diyas"                            },
  { icon: Star,       text: "Traditional Indian-inspired products"         },
  { icon: Leaf,       text: "Multiple fragrance options"                   },
  { icon: Wind,       text: "Pooja and festive essentials"                 },
  { icon: Gift,       text: "Thoughtful gifting options"                   },
  { icon: ShoppingBag,text: "Products for devotional use and home ambience" },
];

const ORDER_STEPS = [
  {
    icon: ShoppingCart,
    label: "Place your order",
    text: (
      <>
        Through our official website or available Hey Prabhu ordering channels, or{" "}
        <a
          href="https://wa.me/918828833303"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-bold text-emerald-700"
        >
          WhatsApp us at 8828833303
        </a>{" "}
        for assistance.
      </>
    ),
  },
  {
    icon: Gift,
    label: "Bulk orders and gifting packs",
    text: "WhatsApp 8828833303 for quantity and pricing details.",
  },
  {
    icon: CreditCard,
    label: "Payment",
    text: "Cash on Delivery is currently not available. Orders can be placed using the available online payment options.",
  },
  {
    icon: Truck,
    label: "Delivery",
    text: "Timelines depend on your location and order details and are shared at the time of order confirmation.",
  },
];

const SAFETY_TIPS = [
  "Place diyas on a stable, heat-resistant surface, away from flammable materials.",
  "Never leave a burning diya, incense or dhoop unattended.",
  "Keep out of reach of children and pets.",
  "Use incense sticks and dhoop in a suitable holder or heat-resistant surface.",
];

export default function Home() {
  const marqueeContent = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        {/* ── Marquee Announcement Strip ── */}
        <div
          className="w-full overflow-hidden border-b py-2 text-xs font-bold select-none"
          style={{
            backgroundColor: "var(--sun-yellow-soft)",
            borderColor: "rgba(0,0,0,0.06)",
            color: "var(--charcoal)",
          }}
          aria-hidden="true"
        >
          <div className="marquee-track">
            {marqueeContent.map((item, i) => (
              <span key={i} className="inline-flex items-center gap-3 px-6 whitespace-nowrap">
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: "var(--fun-pink)" }}
                />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            HERO / COLLECTION BANNER (Light Theme)
        ═══════════════════════════════════════════ */}
        <section
          className="relative min-h-[540px] lg:min-h-[600px] flex items-center overflow-hidden py-12 px-4 sm:px-6 border-b border-amber-200/60"
          style={{
            background: "linear-gradient(165deg, #FFF9D6 0%, #FFFDF8 45%, #FDF6E2 100%)",
            color: "var(--charcoal)",
          }}
        >
          {/* Subtle line-art doodle background in soft warm tone */}
          <div className="absolute inset-0 pointer-events-none text-amber-800/10 opacity-25">
            <DoodleBannerPattern className="w-full h-full object-cover" />
          </div>

          {/* Radial warm lighting glow */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none blur-3xl opacity-30"
            style={{ backgroundColor: "var(--sun-yellow)" }}
          />

          <div className="relative max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Hero Typography & Actions */}
              <div className="lg:col-span-7">
                <HeroAnimations />
              </div>

              {/* Right Column: Animated Diya Illustration */}
              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="relative p-6 sm:p-10 rounded-3xl bg-white/90 border border-amber-200/80 backdrop-blur-xs shadow-xl">
                  <DiyaIllustration />
                  <div className="text-center mt-3">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wide"
                      style={{
                        backgroundColor: "var(--sun-yellow-soft)",
                        color: "var(--maroon)",
                        border: "1px solid rgba(245, 158, 11, 0.3)",
                      }}
                    >
                      ✨ Handcrafted with Pure Cow Ghee
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Feature Highlights Strip ── */}
        <section className="py-6 px-4 bg-white border-b border-stone-200">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { icon: Flame, title: "Desi Ghee Products", desc: "Pure cow ghee blend" },
              { icon: HomeIcon, title: "Terracotta Diyas", desc: "Traditional clay craftsmanship" },
              { icon: Wind, title: "Pure Fragrances", desc: "Mogra, Lavender, Rose" },
              { icon: Gift, title: "Festive & Gifting", desc: "Perfect for every pooja" },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center p-3 rounded-xl hover:bg-stone-50 transition-colors">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-2 shadow-xs"
                  style={{ backgroundColor: "var(--sun-yellow-soft)", color: "var(--charcoal)" }}
                >
                  <Icon size={18} />
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-stone-900">{title}</h3>
                <p className="text-[11px] text-stone-500 mt-0.5">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            PRODUCTS SECTION (With Filters & Cards)
        ═══════════════════════════════════════════ */}
        <ProductsSection products={products} />

        {/* ═══════════════════════════════════════════
            ABOUT HEY PRABHU
        ═══════════════════════════════════════════ */}
        <section id="about" className="py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span
                className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 inline-block"
                style={{ backgroundColor: "var(--sun-yellow-soft)", color: "var(--charcoal)" }}
              >
                Our Story
              </span>
              <h2
                className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight mt-1"
                style={{ color: "var(--charcoal)" }}
              >
                About Hey Prabhu
              </h2>
              <blockquote className="text-sm sm:text-base font-serif font-bold text-stone-900 mt-4 max-w-2xl mx-auto italic bg-amber-50/90 border border-amber-200/90 py-2.5 px-5 rounded-2xl shadow-xs">
                “Making traditions effortless for the modern generation — without losing the connection to our roots.”
              </blockquote>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: BookOpen,
                  title: "Brand Story",
                  text: "Hey Prabhu is inspired by those simple moments that make our traditions so special — diya jalana, pooja karna, ghar ko beautiful fragrance se fill karna and celebrating festivals with our loved ones. Our idea is simple: bring these beautiful traditions into everyday life, whether it's your daily pooja, a festive celebration, gifting someone special or simply creating a peaceful vibe at home.",
                },
                {
                  icon: Target,
                  title: "Mission",
                  text: "Making traditions effortless for the modern generation — without losing the connection to our roots. To make everyday devotional moments more beautiful, meaningful and easy to enjoy — with products that bring roshni, positivity and tradition into your home.",
                },
                {
                  icon: Eye,
                  title: "Vision",
                  text: "To bring the timeless beauty of Indian traditions into modern homes, making every space feel warmer, more peaceful and connected to our roots.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-2xl p-7 border border-stone-200/90 bg-[#FFFDF9] shadow-sm flex flex-col gap-4 hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-xs"
                    style={{ backgroundColor: "var(--sun-yellow)" }}
                  >
                    <Icon size={22} className="text-stone-900" />
                  </div>
                  <h3
                    className="font-serif text-xl sm:text-2xl font-bold"
                    style={{ color: "var(--charcoal)" }}
                  >
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-stone-600 font-normal">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            WHY HEY PRABHU
        ═══════════════════════════════════════════ */}
        <section id="why" className="py-20 px-4 sm:px-6 bg-[#FAF8F5] border-t border-b border-stone-200">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <span
                className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 inline-block"
                style={{ backgroundColor: "var(--fun-pink-soft)", color: "var(--fun-pink)" }}
              >
                Why Choose Us
              </span>
              <h2
                className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight mt-1 mb-6"
                style={{ color: "var(--charcoal)" }}
              >
                What makes Hey Prabhu different?
              </h2>
              <p className="leading-relaxed text-stone-700 text-sm sm:text-base mb-4 font-normal">
                Hey Prabhu brings together Indian tradition and everyday lifestyle in a simple,
                beautiful way. Whether it&apos;s lighting a Desi Ghee T-Light, using a Terracotta
                Diya, enjoying the fragrance of Dhoop Batti or gifting something meaningful —
                Hey Prabhu is made for those little moments of bhakti and warmth.
              </p>
              <p className="leading-relaxed text-stone-700 text-sm sm:text-base font-normal">
                Customers can find their everyday pooja and devotional essentials in one place —
                from Diyas and Desi Ghee T-Lights to Dhoop and Incense Sticks. It&apos;s about
                making traditional moments easy, beautiful and meaningful.
              </p>
            </div>

            {/* Right: Chips Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {WHY_BULLETS.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-stone-200/90 shadow-xs hover:border-amber-400 transition-colors"
                >
                  <span
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "var(--sun-yellow-soft)", color: "var(--charcoal)" }}
                  >
                    <Icon size={18} />
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-stone-800">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            HOW TO ORDER & SAFETY
        ═══════════════════════════════════════════ */}
        <section id="order" className="py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <span
                className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 inline-block"
                style={{ backgroundColor: "var(--sun-yellow-soft)", color: "var(--charcoal)" }}
              >
                Easy Ordering
              </span>
              <h2
                className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight mt-1"
                style={{ color: "var(--charcoal)" }}
              >
                How to Order
              </h2>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-start">
              {/* Order Steps */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                {ORDER_STEPS.map(({ icon: Icon, label, text }, idx) => (
                  <div
                    key={label}
                    className="flex gap-4 p-5 rounded-2xl border border-stone-200/90 bg-[#FAF9F5] shadow-xs"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-bold"
                      style={{ backgroundColor: "var(--sun-yellow)", color: "var(--charcoal)" }}
                    >
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-900 text-sm mb-1">{label}</h3>
                      <div className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Safety Card */}
              <div className="lg:col-span-5 p-7 rounded-3xl bg-amber-50/60 border border-amber-200/80 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                    style={{ backgroundColor: "var(--fun-pink)" }}
                  >
                    <Shield size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-stone-900">
                      Safety Note
                    </h3>
                    <p className="text-xs text-stone-500">For peaceful & secure celebrations</p>
                  </div>
                </div>

                <ul className="flex flex-col gap-3">
                  {SAFETY_TIPS.map((tip, i) => (
                    <li key={i} className="flex gap-3 items-start text-xs sm:text-sm text-stone-700 leading-relaxed">
                      <span
                        className="w-5 h-5 rounded-full text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold"
                        style={{ backgroundColor: "var(--sun-yellow)", color: "var(--charcoal)" }}
                      >
                        {i + 1}
                      </span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            DIYA FAQS (Matches STUTI Screenshot 3 & 4)
        ═══════════════════════════════════════════ */}
        <FaqSection />

        {/* ═══════════════════════════════════════════
            CONTACT US
        ═══════════════════════════════════════════ */}
        <section id="contact" className="py-20 px-4 sm:px-6 bg-[#FAF8F5] border-t border-stone-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-xl mx-auto mb-14">
              <span
                className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 inline-block"
                style={{ backgroundColor: "var(--fun-pink-soft)", color: "var(--fun-pink)" }}
              >
                Get in Touch
              </span>
              <h2
                className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight mt-1"
                style={{ color: "var(--charcoal)" }}
              >
                Contact Us
              </h2>
              <p className="text-sm text-stone-600 mt-2">
                We are happy to assist you with orders, bulk inquiries and pooja essentials.
              </p>
            </div>

            <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* WhatsApp */}
              <div className="p-3.5 rounded-2xl bg-white border border-stone-200/90 shadow-xs flex flex-col gap-2.5">
                <div className="flex items-center gap-2">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-white shrink-0"
                    style={{ backgroundColor: "var(--wa-green)" }}
                  >
                    <MessageCircle size={15} />
                  </div>
                  <h3 className="font-bold text-stone-900 text-xs">WhatsApp</h3>
                </div>
                <a
                  href="https://wa.me/918828833303"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-white transition-transform hover:scale-[1.02] shadow-xs"
                  style={{ backgroundColor: "var(--wa-green)" }}
                >
                  <span>8828833303</span>
                </a>
              </div>

              {/* Instagram */}
              <div className="p-3.5 rounded-2xl bg-white border border-stone-200/90 shadow-xs flex flex-col gap-2.5">
                <div className="flex items-center gap-2">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-white shrink-0"
                    style={{ backgroundColor: "var(--fun-pink)" }}
                  >
                    <AtSign size={15} />
                  </div>
                  <h3 className="font-bold text-stone-900 text-xs">Instagram</h3>
                </div>
                <a
                  href="https://www.instagram.com/heyprabhuoffical/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-white transition-transform hover:scale-[1.02] shadow-xs truncate"
                  style={{ backgroundColor: "var(--fun-pink)" }}
                >
                  <span className="truncate">@heyprabhuoffical</span>
                </a>
              </div>

              {/* Facebook */}
              <div className="p-3.5 rounded-2xl bg-white border border-stone-200/90 shadow-xs flex flex-col gap-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-stone-100 text-stone-600 shrink-0">
                    <Share2 size={15} />
                  </div>
                  <h3 className="font-bold text-stone-900 text-xs">Facebook</h3>
                </div>
                <div className="w-full inline-flex items-center justify-center py-2 px-3 rounded-xl text-xs font-semibold text-stone-500 bg-stone-50 border border-stone-100">
                  <span>Hey Prabhu</span>
                </div>
              </div>

              {/* Email */}
              <div className="p-3.5 rounded-2xl bg-white border border-stone-200/90 shadow-xs flex flex-col gap-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-stone-100 text-stone-600 shrink-0">
                    <Mail size={15} />
                  </div>
                  <h3 className="font-bold text-stone-900 text-xs">Email</h3>
                </div>
                <div className="w-full inline-flex items-center justify-center py-2 px-3 rounded-xl text-xs font-semibold text-stone-500 bg-stone-50 border border-stone-100">
                  <span>Customer Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
