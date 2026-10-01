import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

interface LegalPageProps {
  title: string;
  subtitle?: string;
  description?: string;
  children?: React.ReactNode;
}

export default function LegalPage({ title, subtitle, description, children }: LegalPageProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-12 pb-20 px-4 sm:px-6 bg-[#FCFBF7]">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold mb-8 py-1.5 px-3 rounded-full bg-white border border-stone-200 text-stone-700 hover:text-stone-950 hover:bg-stone-50 transition-all shadow-xs"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          {/* Article Header */}
          <header className="mb-10 pb-6 border-b border-stone-200">
            <span
              className="text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full mb-3 inline-block"
              style={{ backgroundColor: "var(--sun-yellow-soft)", color: "var(--charcoal)" }}
            >
              Official Policies
            </span>
            <h1
              className="font-serif text-3xl sm:text-5xl font-black tracking-tight"
              style={{ color: "var(--charcoal)" }}
            >
              {title}
            </h1>
            {subtitle && (
              <p className="text-sm sm:text-base text-stone-600 mt-2 font-medium">
                {subtitle}
              </p>
            )}
            <p className="text-xs text-stone-400 mt-3">
              Last updated: October 2026 • Hey Prabhu Official Policy
            </p>
          </header>

          {/* Article Body */}
          <article
            className="rounded-3xl border border-stone-200/90 p-6 sm:p-10 bg-white shadow-sm text-stone-700 text-sm sm:text-base leading-relaxed space-y-8"
          >
            {children || <div className="leading-relaxed opacity-85">{description}</div>}
          </article>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
