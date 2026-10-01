import type { Metadata } from "next";
import "./globals.css";
import { Cormorant_Garamond, Inter } from "next/font/google";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hey Prabhu – Desi Ghee Diyas, T-Lights & Incense",
  description:
    "Hey Prabhu brings traditional Indian devotional products — Desi Ghee T-Lights, Terracotta Diyas, Incense Sticks and Gift Boxes — to bring roshni, bhakti and warmth into your everyday moments.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body
        className="font-sans antialiased"
        style={{ backgroundColor: "var(--cream)", color: "var(--charcoal)" }}
      >
        {children}
      </body>
    </html>
  );
}
