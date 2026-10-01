import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms and Conditions – Hey Prabhu",
  description: "Official Terms and Conditions for Hey Prabhu devotional products, ordering, payment, and delivery.",
};

export default function TermsAndConditions() {
  return (
    <LegalPage
      title="Terms and Conditions"
      subtitle="Please read these terms carefully before using our website or placing an order with Hey Prabhu."
    >
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-stone-900 border-b border-stone-100 pb-2">
          1. Introduction & Acceptance
        </h2>
        <p>
          Welcome to <strong>Hey Prabhu</strong>. These Terms and Conditions govern your access to and use of our
          website, product catalog, and ordering channels. By browsing our website, inquiring about products, or
          placing an order through our official online store or WhatsApp (+91 8828833303), you signify that you have
          read, understood, and agreed to be bound by these terms.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-stone-900 border-b border-stone-100 pb-2">
          2. Product Catalog & Handcrafted Characteristics
        </h2>
        <p>
          Hey Prabhu specializes in traditional Indian devotional products, including Desi Ghee T-Lights (Gold Cup),
          Terracotta Clay Diyas (Mogra &amp; Lavender fragrances), Tealight Candles (White Unscented), Incense Sticks
          (Economy &amp; Special ranges), Dhoop Batti, and curated festive Gift Boxes.
        </p>
        <p>
          Due to the authentic artisanal craftsmanship of terracotta clay and natural cow ghee formulations:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600">
          <li>Slight variations in clay color, handcrafted finish, and dimensions are inherent hallmarks of traditional making.</li>
          <li>Burn duration (such as up to approximately 5 hours for Desi Ghee T-Lights) is tested under standard indoor conditions and may vary depending on ambient breeze, room temperature, and surface.</li>
          <li>All product listings and catalog descriptions reflect authentic details verified by the Hey Prabhu team.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-stone-900 border-b border-stone-100 pb-2">
          3. Ordering & WhatsApp Inquiries
        </h2>
        <p>
          Orders can be initiated through our official website or facilitated directly by messaging our team on
          WhatsApp at <strong>8828833303</strong>. For custom quantities, temple supplies, or festive gifting packs,
          bulk order inquiries should be coordinated via WhatsApp to verify current stock, packing, and dispatch schedules.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-stone-900 border-b border-stone-100 pb-2">
          4. Pricing & Payment Policy
        </h2>
        <p>
          All product prices are quoted in Indian Rupees (INR) and are subject to confirmation where noted.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600">
          <li><strong>No Cash on Delivery:</strong> Cash on Delivery (COD) is currently not available.</li>
          <li><strong>Online Payments:</strong> Orders must be prepaid using authorized online payment channels (UPI, Net Banking, Debit/Credit Cards) as provided during checkout or confirmed by our team.</li>
          <li>Hey Prabhu reserves the right to correct any accidental typographical errors in pricing prior to order confirmation.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-stone-900 border-b border-stone-100 pb-2">
          5. Shipping, Packaging & Delivery
        </h2>
        <p>
          Because our items include delicate terracotta pottery and ghee-filled cups, each order is cushioned with
          protective packaging to ensure safe transit.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600">
          <li>Delivery timelines depend on your geographic location and order size, and are shared upon confirmation.</li>
          <li>Tracking details or dispatch updates are communicated as soon as the package is handed over to our logistics partner.</li>
          <li>Customers are responsible for providing complete and accurate shipping addresses and reachable contact numbers.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-stone-900 border-b border-stone-100 pb-2">
          6. Transit Damage, Cancellations & Refunds
        </h2>
        <p>
          We take immense pride in delivering devotional essentials in pristine condition. If a package arrives damaged:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600">
          <li>Please notify our team on WhatsApp at <strong>+91 8828833303</strong> within <strong>48 hours</strong> of delivery, accompanied by photographs or an unboxing video of the damaged item and packaging.</li>
          <li>Verified claims for transit damage will be resolved promptly with a suitable replacement or refund as per policy.</li>
          <li>Order cancellations can be accommodated only before your package has been handed over for courier dispatch.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-stone-900 border-b border-stone-100 pb-2">
          7. Devotional Use & Safety Guidelines
        </h2>
        <p>
          Customer safety is of paramount importance during daily pooja and festive celebrations. You agree to follow
          all product safety instructions:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600">
          <li>Always place diyas, t-lights, and dhoop on a stable, level, heat-resistant surface away from curtains, paper, and combustible materials.</li>
          <li>Never leave an open flame, burning diya, or smoldering incense stick unattended.</li>
          <li>Keep burning items strictly out of reach of children and domestic pets.</li>
          <li>Always burn incense sticks and dhoop cups in an appropriate, secure heat-resistant holder.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-stone-900 border-b border-stone-100 pb-2">
          8. Intellectual Property
        </h2>
        <p>
          All trademarks, brand logos, trade names, custom illustrations, imagery, graphics, and written content
          published on this website are the intellectual property of Hey Prabhu. Any unauthorized commercial copying,
          scraping, or redistribution is strictly prohibited.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-stone-900 border-b border-stone-100 pb-2">
          9. Governing Law & Jurisdiction
        </h2>
        <p>
          These Terms and Conditions shall be governed by and construed in accordance with the substantive laws of India.
          Any legal proceedings or disputes arising under or in connection with these terms shall be subject to the
          exclusive jurisdiction of the courts in India.
        </p>
      </section>

      <section className="space-y-3 bg-amber-50/70 p-5 rounded-2xl border border-amber-200/80">
        <h2 className="text-base font-bold text-amber-900">
          10. Contact Us
        </h2>
        <p className="text-xs sm:text-sm text-stone-700">
          For any clarifications or assistance regarding our Terms and Conditions, please contact us:
        </p>
        <p className="text-xs sm:text-sm font-semibold text-stone-900">
          WhatsApp: <a href="https://wa.me/918828833303" className="underline text-emerald-700">+91 8828833303</a><br />
          Instagram: <a href="https://www.instagram.com/heyprabhuoffical/" className="underline text-[var(--fun-pink)]">@heyprabhuoffical</a>
        </p>
      </section>
    </LegalPage>
  );
}
