/**
 * Central business configuration. Update this file when the salon confirms
 * its real details. Nothing here is hardcoded in components.
 */
export const salon = {
  name: "Navya Beauty Parlour",
  shortName: "Navya",
  /** Small line shown under the name in the logo */
  logoSubtitle: "Beauty Parlour",
  tagline: "Your Beauty, Our Passion",
  description:
    "Premium beauty treatments, professional care and affordable luxury — at the salon or at your doorstep.",
  /** Public URL of the deployed site (used for canonical, sitemap, OG) */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",

  /** Local number as given by the salon */
  phoneDisplay: "82984 19154",
  /** International format, digits only (for wa.me) */
  whatsappNumber: "918298419154",
  telHref: "tel:+918298419154",

  /**
   * LOCATION — only the area given by the salon is filled in. The exact
   * street address and PIN code have NOT been provided, so they stay empty
   * and are never invented. Add them here once confirmed.
   */
  address: {
    line: "", // exact street address — add when confirmed
    city: "Chakka, Darbhanga",
    state: "Bihar",
    postalCode: "", // PIN code — add when confirmed
    country: "India",
  },
  /** Shown near the map until an exact address is added */
  locationNote:
    "Map shows the Chakka area of Darbhanga. Message us on WhatsApp for the exact salon location.",
  /**
   * Keyless Google Maps embed + directions search for the area. For the exact
   * salon pin, set NEXT_PUBLIC_MAP_EMBED_URL / NEXT_PUBLIC_MAP_DIRECTIONS_URL
   * (see README) or replace these two values.
   */
  mapEmbedUrl:
    process.env.NEXT_PUBLIC_MAP_EMBED_URL ||
    "https://www.google.com/maps?q=Chakka,+Darbhanga,+Bihar,+India&output=embed",
  mapDirectionsUrl:
    process.env.NEXT_PUBLIC_MAP_DIRECTIONS_URL ||
    "https://www.google.com/maps/search/?api=1&query=Chakka%2C%20Darbhanga%2C%20Bihar%2C%20India",

  hours: [
    { day: "Monday – Saturday", time: "To be confirmed" },
    { day: "Sunday", time: "To be confirmed" },
  ],
  hoursNote: "Business hours will be confirmed by the salon. Please message us on WhatsApp to check availability.",

  social: [
    // Add real profile URLs. Entries with an empty url are not rendered.
    { id: "instagram", label: "Instagram", url: "" },
    { id: "facebook", label: "Facebook", url: "" },
    { id: "youtube", label: "YouTube", url: "" },
  ],

  pricesAreIndicative: true,
  priceNote:
    "All prices are indicative starting prices and will be confirmed by the salon before booking.",
} as const;

export const hasAddress = Boolean(salon.address.line || salon.address.city);

export const fullAddress = [
  salon.address.line,
  salon.address.city,
  salon.address.state,
  salon.address.postalCode,
  salon.address.country,
]
  .filter(Boolean)
  .join(", ");

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/services#home-services", label: "Home Services" },
  { href: "/bridal", label: "Bridal" },
  { href: "/pricing", label: "Pricing" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
] as const;
