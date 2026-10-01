export interface ProductDetail {
  label: string;
  value: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string | null;
  group: string;
  details: ProductDetail[];
}

export const products: Product[] = [
  // GROUP 1 — DESI GHEE PRODUCTS
  {
    id: 1,
    name: "Desi Ghee T-Light – Gold Cup – Gifting Pack",
    description:
      "A beautiful gifting option featuring Desi Ghee T-Lights in elegant Gold Cups. Perfect for pooja, festivals and gifting your loved ones.",
    price: "₹85",
    group: "Desi Ghee Products",
    details: [
      { label: "Pack Size", value: "25 pcs" },
      { label: "Fragrance", value: "Unscented" },
      { label: "Ingredients", value: "Natural clay diya body; pure cow ghee blend; pre-fitted natural cotton wick" },
      { label: "Burning Time", value: "20 minutes" },
      { label: "Usage", value: "Pooja, festivals, gifting and devotional occasions" },
    ],
  },
  {
    id: 2,
    name: "Desi Ghee T-Lights – Gold Cup (25 pcs)",
    description:
      "A 25-piece pack of Desi Ghee T-Lights in Gold Cups, perfect for regular pooja, festive celebrations and special occasions.",
    price: "₹335",
    group: "Desi Ghee Products",
    details: [
      { label: "Pack Size", value: "25 pcs" },
      { label: "Burning Time", value: "20 minutes" },
      { label: "Usage", value: "Pooja, festivals, and devotional rituals" },
    ],
  },
  {
    id: 3,
    name: "Desi Ghee T-Lights – Gold Cup (50 pcs)",
    description:
      "A larger 50-piece pack, perfect if you need T-Lights for bigger pooja setups, festivals or regular use.",
    price: "₹650",
    group: "Desi Ghee Products",
    details: [
      { label: "Pack Size", value: "50 pcs" },
      { label: "Burning Time", value: "20 minutes" },
      { label: "Usage", value: "Pooja, festivals and devotional occasions" },
    ],
  },
  {
    id: 4,
    name: "Desi Ghee T-Light – Gold Cup – Sample Pack",
    description:
      "Want to try them first? The Sample Pack is a great option to experience our Desi Ghee T-Lights before going for a larger pack.",
    price: "₹14",
    group: "Desi Ghee Products",
    details: [
      { label: "Pack Size", value: "1 no" },
    ],
  },
  {
    id: 5,
    name: "Desi Ghee Terracotta Diya – Mogra",
    description:
      "A traditional Terracotta Diya with Mogra fragrance — perfect for adding that warm, festive and devotional feel to your space.",
    price: "₹210",
    group: "Desi Ghee Products",
    details: [
      { label: "Fragrance", value: "Mogra" },
      { label: "Material", value: "Terracotta clay, Desi Ghee, cotton wick and fragrance" },
      { label: "Burning Time", value: "Approx. 1–2 hours" },
      { label: "Usage", value: "Pooja, festivals, gifting and home ambience" },
    ],
  },
  {
    id: 6,
    name: "Desi Ghee Terracotta Diya – Lavender",
    description:
      "A beautiful Terracotta Diya with Lavender fragrance, perfect for your pooja moments or creating a calm and peaceful vibe at home.",
    price: null,
    group: "Desi Ghee Products",
    details: [
      { label: "Fragrance", value: "Lavender" },
      { label: "Price", value: "" },
      { label: "Material", value: "Terracotta clay, Desi Ghee, cotton wick and fragrance" },
      { label: "Burning Time", value: "Approx. 1–2 hours" },
      { label: "Usage", value: "Pooja, festivals, gifting and home ambience" },
    ],
  },
  // GROUP 2 — INCENSE STICKS
  {
    id: 7,
    name: "Hey Prabhu Special Incense Sticks",
    description:
      "A 50g incense stick pack made for those peaceful moments of pooja, prayer and devotion.",
    price: "₹80",
    group: "Incense Sticks",
    details: [
      { label: "Pack Size", value: "50g" },
      { label: "Fragrance", value: "Hey Special" },
    ],
  },
  {
    id: 8,
    name: "Lavender Incense Sticks",
    description:
      "Lavender fragrance wali incense sticks, perfect for creating a calm and soothing atmosphere at home.",
    price: "₹80",
    group: "Incense Sticks",
    details: [
      { label: "Pack Size", value: "50g" },
      { label: "Fragrance", value: "Lavender" },
    ],
  },
  {
    id: 9,
    name: "Rose Incense Sticks",
    description:
      "Rose fragrance wali incense sticks with a soft floral aroma, perfect for pooja, prayer and everyday home fragrance.",
    price: "₹80",
    group: "Incense Sticks",
    details: [
      { label: "Pack Size", value: "50g" },
      { label: "Fragrance", value: "Rose" },
    ],
  },
];
