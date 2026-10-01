import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

interface LegalPageProps {
  title: string;
  description: string;
}

export default function LegalPage({ title, description }: LegalPageProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6" style={{ backgroundColor: "#FFFDF7" }}>
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-colors hover:opacity-80"
            style={{ color: "var(--maroon)" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          {/* Draft notice */}
          <div
            className="mb-8 rounded-xl px-5 py-4 text-sm border"
            style={{
              backgroundColor: "rgba(245,158,11,0.08)",
              borderColor: "rgba(245,158,11,0.35)",
              color: "var(--maroon)",
            }}
          >
            <strong>Draft</strong> — to be reviewed and approved by Hey Prabhu before final use.
          </div>

          {/* Article */}
          <article>
            <h1
              className="font-serif text-4xl font-semibold mb-3"
              style={{ color: "var(--maroon)" }}
            >
              {title}
            </h1>
            <p className="text-sm mb-10 opacity-50">
              Last updated:
            </p>

            <div
              className="rounded-2xl border p-8 text-base leading-relaxed opacity-75"
              style={{
                backgroundColor: "#FFFDF7",
                borderColor: "rgba(251,191,36,0.2)",
                boxShadow: "0 4px 20px rgba(122,46,14,0.04)",
              }}
            >
              {description}
            </div>
          </article>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
