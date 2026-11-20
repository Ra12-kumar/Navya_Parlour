/**
 * Top promotional banner — all text and images are configurable here.
 * Set `enabled: false` to hide the banner.
 */
export const promo = {
  enabled: true,
  headline: "✨ FREE EYEBROWS – BEAUTY TREAT FOR YOU! ✨",
  supportingText: "Book any eligible beauty service and enjoy FREE Eyebrow Threading!",
  badge: "FREE OFFER",
  highlights: ["100% FREE Eyebrow Threading", "Special Beauty Offer"],
  /**
   * Only set this to a real, honest string (e.g. "Valid until 31 Dec") if the
   * promotion genuinely has an end date. Leave empty otherwise.
   */
  limitedTimeText: "",
  finePrint: "Applies with eligible services only. The salon confirms eligibility when you enquire.",
  buttonLabel: "BOOK NOW",
  whatsappMessage:
    "Hello! I saw your FREE EYEBROWS offer on your website. I would like to book an appointment. Please share the details.",
  image: "/images/promo-brows.jpg",
  imageAlt: "Beautician carefully shaping a client's eyebrow with tweezers in a salon",
} as const;
