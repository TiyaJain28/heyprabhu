import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use – Hey Prabhu",
  description: "Official Terms of Use governing the digital browsing and interaction with the Hey Prabhu website.",
};

export default function TermsOfUse() {
  return (
    <LegalPage
      title="Terms of Use"
      subtitle="Guidelines and rules governing your access to and interaction with the Hey Prabhu digital website."
    >
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-stone-900 border-b border-stone-100 pb-2">
          1. Acceptance of Website Terms
        </h2>
        <p>
          These Terms of Use govern your access to and use of the <strong>Hey Prabhu</strong> website and digital services.
          By visiting, browsing, or utilizing interactive features on this website, you confirm your acceptance of these
          terms. If you do not agree with any part of these terms, please refrain from using the site.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-stone-900 border-b border-stone-100 pb-2">
          2. Permitted Use &amp; Intellectual Property
        </h2>
        <p>
          This website is provided for your personal, non-commercial devotional exploration, product review, and ordering
          inquiries.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600">
          <li>All content, including brand names (&quot;Hey Prabhu&quot;), logo graphics, custom SVG artworks, product descriptions, and layouts, are owned by or licensed to Hey Prabhu.</li>
          <li>You may view, print, or download snippets of the website solely for personal, non-commercial reference in connection with ordering devotional essentials.</li>
          <li>No portion of this site may be duplicated, republished, reverse engineered, or exploited for competing commercial purposes without prior written authorization.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-stone-900 border-b border-stone-100 pb-2">
          3. Prohibited User Activities
        </h2>
        <p>While using our website, you expressly agree not to:</p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600">
          <li>Use automated scripts, bots, scrapers, or data mining software to extract catalog details or images.</li>
          <li>Attempt to interfere with website security, server performance, or network connectivity.</li>
          <li>Submit false or fraudulent orders or misleading inquiry requests through our WhatsApp or web channels.</li>
          <li>Impersonate any person, brand representative, or entity affiliated with Hey Prabhu.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-stone-900 border-b border-stone-100 pb-2">
          4. Catalog Accuracy &amp; Product Representation
        </h2>
        <p>
          We strive to ensure that all information on this website regarding product sizes, burning times, ingredients,
          and fragrances is accurate and up to date. However:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600">
          <li>Product availability may vary based on festive demand and artisan production cycles.</li>
          <li>Photographs, digital illustrations, and descriptions are designed to provide an accurate aesthetic representation of the products; handcrafted clay items may feature natural variations.</li>
          <li>We reserve the right to modify catalog details or withdraw products without prior notice.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-stone-900 border-b border-stone-100 pb-2">
          5. Electronic Communications &amp; WhatsApp Interaction
        </h2>
        <p>
          When you contact Hey Prabhu through WhatsApp at <strong>8828833303</strong>, Instagram, or online order forms,
          you consent to receive electronic responses, order status updates, and fulfillment notifications from our team.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-stone-900 border-b border-stone-100 pb-2">
          6. External Links &amp; Social Channels
        </h2>
        <p>
          Our website links to third-party social media pages (such as Instagram <code>@heyprabhuoffical</code>) and
          communication platforms (WhatsApp). Hey Prabhu is not responsible for the privacy practices, content, or terms
          governing those external platforms.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-stone-900 border-b border-stone-100 pb-2">
          7. Disclaimer of Warranties
        </h2>
        <p>
          This website and all information provided herein are made available on an &quot;as is&quot; and &quot;as available&quot; basis.
          Hey Prabhu disclaims all warranties of any kind, whether express or implied, regarding site uptime, uninterrupted
          service, or error-free operation.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-stone-900 border-b border-stone-100 pb-2">
          8. Governing Law &amp; Jurisdiction
        </h2>
        <p>
          These Terms of Use shall be governed by the laws of India. Any legal dispute or controversy arising out of your
          use of this website shall be settled exclusively in the competent courts located in India.
        </p>
      </section>

      <section className="space-y-3 bg-amber-50/70 p-5 rounded-2xl border border-amber-200/80">
        <h2 className="text-base font-bold text-amber-900">
          9. Inquiries Regarding Terms of Use
        </h2>
        <p className="text-xs sm:text-sm text-stone-700">
          If you have any questions or require permission regarding the use of our digital assets, please contact us:
        </p>
        <p className="text-xs sm:text-sm font-semibold text-stone-900">
          WhatsApp: <a href="https://wa.me/918828833303" className="underline text-emerald-700">+91 8828833303</a><br />
          Instagram: <a href="https://www.instagram.com/heyprabhuoffical/" className="underline text-[var(--fun-pink)]">@heyprabhuoffical</a>
        </p>
      </section>
    </LegalPage>
  );
}
