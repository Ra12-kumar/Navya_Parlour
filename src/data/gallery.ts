import type { GalleryCategoryId, GalleryImage } from "@/types";

export const galleryCategories: { id: GalleryCategoryId; label: string }[] = [
  { id: "bridal", label: "Bridal Makeup" },
  { id: "party", label: "Party Makeup" },
  { id: "hair", label: "Hair Styling" },
  { id: "facial", label: "Facial" },
  { id: "interior", label: "Salon Interior" },
  { id: "before-after", label: "Before & After" },
];

/**
 * Royalty-free stock photography (Unsplash / Pexels licences), used as
 * placeholders until the salon adds its own work. Before & After is
 * intentionally empty: only real client results should be shown there.
 */
export const galleryImages: GalleryImage[] = [
  { id: "g1", category: "bridal", src: "/images/promo-indian.jpg", alt: "Indian bride with bridal eye makeup, bindi and gold jewellery" },
  { id: "g2", category: "bridal", src: "/images/bouquet.jpg", alt: "Bridal bouquet of white and blush flowers" },
  { id: "g3", category: "bridal", src: "/images/makeup.jpg", alt: "Makeup artist applying lip colour on a model" },
  { id: "g4", category: "party", src: "/images/makeup-red.jpg", alt: "Model with bold red lips and styled hair" },
  { id: "g5", category: "party", src: "/images/face-glam.jpg", alt: "Portrait with defined eye makeup" },
  { id: "g6", category: "party", src: "/images/flatlay.jpg", alt: "Makeup flat lay with brushes, blush and lipstick" },
  { id: "g7", category: "party", src: "/images/brushes.jpg", alt: "Makeup brushes in a holder" },
  { id: "g8", category: "hair", src: "/images/hair-style.jpg", alt: "Long wavy brown hair" },
  { id: "g9", category: "hair", src: "/images/hair-curl.jpg", alt: "Stylist curling a client's hair" },
  { id: "g10", category: "hair", src: "/images/hair-blow.jpg", alt: "Hair being blow-dried with a round brush" },
  { id: "g11", category: "hair", src: "/images/hair-colour.jpg", alt: "Long blonde hair with soft waves" },
  { id: "g12", category: "facial", src: "/images/facial.jpg", alt: "Woman relaxing with a facial mask" },
  { id: "g13", category: "facial", src: "/images/cleanup.jpg", alt: "Skin treatment being performed on a client" },
  { id: "g14", category: "facial", src: "/images/skincare.jpg", alt: "Skincare products on a textured towel" },
  { id: "g15", category: "interior", src: "/images/hero.jpg", alt: "Bright salon with a pink styling chair" },
  { id: "g16", category: "interior", src: "/images/salon-bw.jpg", alt: "Salon stations with large windows" },
  { id: "g17", category: "interior", src: "/images/salon-dark.jpg", alt: "Modern salon with round mirrors" },
  { id: "g18", category: "interior", src: "/images/spa-room.jpg", alt: "Calm treatment room with plants" },
];
