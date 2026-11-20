export type ServiceCategoryId =
  | "facial"
  | "hair"
  | "waxing"
  | "threading"
  | "makeup"
  | "nails";

export interface ServiceCategory {
  id: ServiceCategoryId;
  label: string;
}

export type Audience = "women" | "bridal";

export interface Service {
  id: string;
  category: ServiceCategoryId;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  /** Indicative starting price in rupees (placeholder until confirmed) */
  startingPrice: number;
  duration: string;
}

export interface PriceItem {
  id: string;
  name: string;
  description: string;
  /** Group used for the category tabs */
  group: string;
  audience: Audience[];
  salonPrice: number;
  /** null = home service not offered / not priced yet */
  homePrice: number | null;
  discountPrice?: number;
}

export interface HomePackage {
  id: string;
  name: string;
  details: string;
  image: string;
  imageAlt: string;
  startingPrice: number;
  duration: string;
}

export interface WeddingPackage {
  id: string;
  name: string;
  details: string;
  image: string;
  imageAlt: string;
  startingPrice: number;
  homeService: boolean;
  includes: string[];
}

export interface Offer {
  id: string;
  badge: string;
  title: string;
  description: string;
  terms: string[];
  bookingService: string;
  image: string;
  imageAlt: string;
}

export interface Brand {
  id: string;
  name: string;
  tagline: string;
  /** Only brands the salon actually uses should have confirmed = true */
  confirmed: boolean;
}

export type GalleryCategoryId =
  | "bridal"
  | "party"
  | "hair"
  | "facial"
  | "interior"
  | "before-after";

export interface GalleryImage {
  id: string;
  category: GalleryCategoryId;
  src: string;
  alt: string;
}

export interface Faq {
  q: string;
  a: string;
}
