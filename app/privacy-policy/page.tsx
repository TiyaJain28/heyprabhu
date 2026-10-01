import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy – Hey Prabhu",
  description: "Official Privacy Policy for Hey Prabhu. Learn how we handle, protect, and respect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="Your privacy and trust are sacred to us. Learn how Hey Prabhu collects, protects, and handles your information."
    >
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-stone-900 border-b border-stone-100 pb-2">
          1. Introduction &amp; Scope
        </h2>
        <p>
          At <strong>Hey Prabhu</strong>, we are committed to safeguarding the personal privacy of our visitors, customers,
          and devotees. This Privacy Policy outlines what information we collect when you visit our website, inquire about
          devotional products, or purchase through our channels, and how that information is utilized and secured.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-stone-900 border-b border-stone-100 pb-2">
          2. Information We Collect
        </h2>
        <p>
          We only collect personal information that is reasonably necessary to fulfill your orders, provide responsive customer
          service, and enhance your shopping experience:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600">
          <li><strong>Contact Details:</strong> Your full name, mobile/WhatsApp telephone number, and delivery street address with postal pincode.</li>
          <li><strong>Order Details:</strong> Products selected (e.g., Desi Ghee T-Lights, Terracotta Mogra Diyas, Incense Sticks, or Gift Boxes), quantities, and special packaging requests.</li>
          <li><strong>Customer Communications:</strong> Messages and inquiries sent to our official WhatsApp support number (+91 8828833303) or Instagram account.</li>
          <li><strong>Technical Data:</strong> Basic non-identifiable technical data such as browser type, operating system, and IP address collected automatically for site security and performance.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-stone-900 border-b border-stone-100 pb-2">
          3. How We Use Your Information
        </h2>
        <p>Your information is used strictly for legitimate business and fulfillment purposes:</p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600">
          <li>Processing, packing, and dispatching your devotional product orders.</li>
          <li>Communicating delivery updates, courier tracking links, and order status via WhatsApp or SMS.</li>
          <li>Responding to your customer service questions, bulk order inquiries, and gifting quotes.</li>
          <li>Maintaining internal accounting records and complying with Indian statutory obligations.</li>
          <li>We <strong>never sell, trade, or rent</strong> your personal contact information to third-party marketing companies.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-stone-900 border-b border-stone-100 pb-2">
          4. Payment Information Security
        </h2>
        <p>
          Hey Prabhu does <strong>not</strong> collect, process, or store sensitive card numbers, CVVs, UPI PINs, or net
          banking passwords. All online payments are handled directly by certified, RBI-compliant third-party payment gateways
          with industry-standard 256-bit encryption.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-stone-900 border-b border-stone-100 pb-2">
          5. Sharing with Trusted Service Providers
        </h2>
        <p>
          To ensure your fragile terracotta diyas and ghee t-lights reach you safely, we share relevant contact information
          only with vetted operational partners:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600">
          <li><strong>Logistics Partners:</strong> Trusted domestic courier companies (e.g., Delhivery, Blue Dart, Shiprocket) strictly for parcel delivery and verification.</li>
          <li><strong>Communication Services:</strong> WhatsApp Business / Meta messaging platforms for order coordination and customer support.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-stone-900 border-b border-stone-100 pb-2">
          6. Cookies &amp; Tracking Technologies
        </h2>
        <p>
          Our website may use standard session cookies and browser storage to keep track of site preferences, navigation,
          and ensure smooth page loading. You may adjust your browser settings to refuse cookies at any time, though some
          interactive elements may be affected.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-stone-900 border-b border-stone-100 pb-2">
          7. Data Retention &amp; Security Measures
        </h2>
        <p>
          We employ physical, technical, and managerial safeguards to protect your personal information against unauthorized
          access, alteration, disclosure, or destruction. We retain customer transaction records only for as long as required
          by tax laws and operational warranty obligations.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-stone-900 border-b border-stone-100 pb-2">
          8. Your Rights &amp; Choices
        </h2>
        <p>
          You have the right to request access to the personal data we hold about you, request corrections to your delivery
          address, or request that your contact details be deleted from our customer records. Simply send a message to our
          team on WhatsApp at <strong>+91 8828833303</strong>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-stone-900 border-b border-stone-100 pb-2">
          9. Updates to this Policy
        </h2>
        <p>
          Hey Prabhu may update this Privacy Policy from time to time to reflect operational, legal, or regulatory modifications.
          Any revisions will be posted on this page with an updated revision date.
        </p>
      </section>

      <section className="space-y-3 bg-amber-50/70 p-5 rounded-2xl border border-amber-200/80">
        <h2 className="text-base font-bold text-amber-900">
          10. Contact Us Regarding Privacy
        </h2>
        <p className="text-xs sm:text-sm text-stone-700">
          If you have questions, feedback, or concerns regarding your privacy or data protection, please reach out to us:
        </p>
        <p className="text-xs sm:text-sm font-semibold text-stone-900">
          WhatsApp: <a href="https://wa.me/918828833303" className="underline text-emerald-700">+91 8828833303</a><br />
          Instagram: <a href="https://www.instagram.com/heyprabhuoffical/" className="underline text-[var(--fun-pink)]">@heyprabhuoffical</a>
        </p>
      </section>
    </LegalPage>
  );
}
