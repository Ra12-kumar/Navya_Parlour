import type { Audience, PriceItem } from "@/types";
import { serviceCategories, serviceHighlights, services, weddingPackages } from "./services";

/**
 * Pricing is derived from the single source of truth in services.ts, plus the
 * home-service overrides below. Edit prices there, not in components.
 * All prices are INR and indicative until confirmed by the salon.
 */

/** Home-service starting price by service id (absent = not offered at home) */
const homePriceByService: Record<string, number> = {
  "basic-facial": 600,
  cleanup: 450,
  "wax-full-arms": 300,
  "wax-half-arms": 200,
  "wax-full-legs": 400,
  "wax-half-legs": 250,
  "thread-eyebrows": 60,
  "thread-upper-lip": 40,
  "thread-forehead": 40,
  "thread-full-face": 200,
  "hair-styling": 600,
  "hair-spa": 900,
  "party-makeup": 2200,
  "bridal-makeup": 9000,
  "engagement-makeup": 4500,
  "reception-makeup": 5500,
  manicure: 500,
  pedicure: 700,
};

/** Optional promotional prices — only list services with a real discount */
const discountByService: Record<string, number> = {};

export const priceFilters = [
  { id: "all", label: "All" },
  { id: "women", label: "Women's Services" },
  { id: "bridal", label: "Bridal Packages" },
  { id: "home", label: "Home Services" },
] as const;

export type PriceFilterId = (typeof priceFilters)[number]["id"];

const categoryLabel: Record<string, string> = Object.fromEntries(
  serviceCategories.map((c) => [c.id, c.label]),
);

const regular: PriceItem[] = services.map((s) => {
  const audience: Audience[] = ["women"];
  return {
    id: s.id,
    name: s.name,
    description: s.description,
    group: categoryLabel[s.category],
    audience,
    salonPrice: s.startingPrice,
    homePrice: homePriceByService[s.id] ?? null,
    discountPrice: discountByService[s.id],
  };
});

const wedding: PriceItem[] = weddingPackages.map((p) => ({
  id: `w-${p.id}`,
  name: p.name,
  description: p.details,
  group: "Bridal",
  audience: ["bridal"],
  salonPrice: p.startingPrice,
  homePrice: p.homeService ? p.startingPrice : null,
}));

const highlights: PriceItem[] = serviceHighlights.map((h) => ({
  id: h.id,
  name: h.name,
  description: "Hair-care service highlight.",
  group: "Hair Care Highlights",
  audience: ["women" as Audience],
  salonPrice: h.price,
  homePrice: null,
}));

export const priceItems: PriceItem[] = [...regular, ...highlights, ...wedding];

export const priceGroups: string[] = ["All", ...Array.from(new Set(priceItems.map((i) => i.group)))];

/** Salon vs home comparison. Home prices may include travel depending on location. */
export const homeComparison = [
  { id: "cmp-facial", name: "Basic Facial", salonId: "basic-facial" },
  { id: "cmp-cleanup", name: "Cleanup", salonId: "cleanup" },
  { id: "cmp-hair-spa", name: "Hair Spa", salonId: "hair-spa" },
  { id: "cmp-hair-styling", name: "Hair Styling", salonId: "hair-styling" },
  { id: "cmp-full-arms", name: "Full Arms Waxing", salonId: "wax-full-arms" },
  { id: "cmp-party", name: "Party Makeup", salonId: "party-makeup" },
  { id: "cmp-bridal", name: "Bridal Makeup", salonId: "bridal-makeup" },
].map((r) => ({
  id: r.id,
  name: r.name,
  salonPrice: services.find((s) => s.id === r.salonId)?.startingPrice ?? null,
  homePrice: homePriceByService[r.salonId] ?? null,
}));

export const homeTravelNote =
  "Home service prices are starting prices. Travel charges, if any, depend on your location and will be confirmed on WhatsApp before booking.";
