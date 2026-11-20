import type { Brand } from "@/types";

/**
 * Set `confirmed: true` ONLY for brands the salon actually uses or stocks.
 * Unconfirmed brands are not rendered. Listing a brand here does not imply
 * any official partnership, dealership or authenticity guarantee.
 */
export const brands: Brand[] = [
  { id: "loreal", name: "L'Oréal", tagline: "Hair colour & care", confirmed: true },
  { id: "lakme", name: "Lakmé", tagline: "Makeup & skincare", confirmed: true },
  { id: "mac", name: "MAC", tagline: "Professional makeup", confirmed: true },
  { id: "vlcc", name: "VLCC", tagline: "Skincare", confirmed: true },
  { id: "o3plus", name: "O3+", tagline: "Facial care", confirmed: true },
  { id: "lotus", name: "Lotus Herbals", tagline: "Herbal skincare", confirmed: true },
  { id: "schwarzkopf", name: "Schwarzkopf", tagline: "Hair care", confirmed: true },
  { id: "wella", name: "Wella", tagline: "Hair colour & styling", confirmed: true },
];

export const brandImages = [
  { src: "/images/products.jpg", alt: "Makeup and beauty products on a marble surface" },
  { src: "/images/skincare.jpg", alt: "Skincare products arranged on a towel" },
  { src: "/images/flatlay.jpg", alt: "Makeup brushes and cosmetics flat lay" },
];
