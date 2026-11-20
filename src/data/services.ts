import type { HomePackage, Service, ServiceCategory, WeddingPackage } from "@/types";

export const serviceCategories: ServiceCategory[] = [
  { id: "facial", label: "Facial & Skincare" },
  { id: "hair", label: "Hair" },
  { id: "waxing", label: "Waxing" },
  { id: "threading", label: "Threading" },
  { id: "makeup", label: "Makeup" },
  { id: "nails", label: "Nails" },
];

// Prices are indicative starting prices (INR) — confirm with the salon.
export const services: Service[] = [
  // Facial & skincare
  { id: "basic-facial", category: "facial", name: "Basic Facial", description: "Gentle cleansing and massage for a fresh, refreshed look.", image: "/images/facial.jpg", imageAlt: "Woman enjoying a facial mask treatment", startingPrice: 500, duration: "45 min" },
  { id: "fruit-facial", category: "facial", name: "Fruit Facial", description: "Fruit-based care to brighten and nourish tired skin.", image: "/images/cleanup.jpg", imageAlt: "Esthetician performing a facial on a client", startingPrice: 700, duration: "60 min" },
  { id: "gold-facial", category: "facial", name: "Gold Facial", description: "A radiance-focused facial with a luxurious finish.", image: "/images/spa-room.jpg", imageAlt: "Calm spa treatment room with natural light", startingPrice: 1200, duration: "60 min" },
  { id: "diamond-facial", category: "facial", name: "Diamond Facial", description: "A deep-care facial for a polished, glowing complexion.", image: "/images/skincare.jpg", imageAlt: "Premium skincare products arranged on a towel", startingPrice: 1500, duration: "75 min" },
  { id: "cleanup", category: "facial", name: "Cleanup", description: "Quick cleansing, exfoliation and massage between facials.", image: "/images/cleanup.jpg", imageAlt: "Client receiving a skin cleanup", startingPrice: 400, duration: "30 min" },
  { id: "hydra-skincare", category: "facial", name: "Hydra-inspired Skincare", description: "Hydrating skin treatment. Offered only if confirmed by the salon.", image: "/images/skincare.jpg", imageAlt: "Hydrating skincare products", startingPrice: 2000, duration: "60 min" },

  // Hair
  { id: "haircut", category: "hair", name: "Haircut", description: "A consultation and cut tailored to your face and lifestyle.", image: "/images/hair-style.jpg", imageAlt: "Woman with long wavy brown hair", startingPrice: 300, duration: "30 min" },
  { id: "hair-styling", category: "hair", name: "Hair Styling", description: "Blow-dry, curls or party styling for any occasion.", image: "/images/hair-curl.jpg", imageAlt: "Stylist curling long brown hair", startingPrice: 500, duration: "45 min" },
  { id: "hair-spa", category: "hair", name: "Hair Spa", description: "Deep-conditioning spa to restore shine and softness.", image: "/images/hair-wash.jpg", imageAlt: "Hair being washed at a salon basin", startingPrice: 800, duration: "60 min" },
  { id: "hair-colour", category: "hair", name: "Hair Colour", description: "Global colour and highlights with a consultation first.", image: "/images/hair-colour.jpg", imageAlt: "Long blonde coloured hair", startingPrice: 1500, duration: "90 min" },
  { id: "hair-smoothening", category: "hair", name: "Hair Smoothening", description: "Smoother, easier-to-manage hair. Price depends on length.", image: "/images/hair-blow.jpg", imageAlt: "Stylist blow-drying and brushing hair", startingPrice: 2500, duration: "3 hrs" },
  { id: "hair-treatment", category: "hair", name: "Hair Treatment", description: "Targeted care for dry, damaged or frizzy hair.", image: "/images/stylist.jpg", imageAlt: "Stylist styling a client's hair with a hairdryer", startingPrice: 1000, duration: "60 min" },

  // Waxing
  { id: "wax-full-arms", category: "waxing", name: "Full Arms Waxing", description: "Smooth, clean waxing for full arms.", image: "/images/body.jpg", imageAlt: "Soothing oil being applied during a body treatment", startingPrice: 250, duration: "30 min" },
  { id: "wax-half-arms", category: "waxing", name: "Half Arms Waxing", description: "Quick waxing for the lower or upper arms.", image: "/images/body.jpg", imageAlt: "Body care treatment with oil", startingPrice: 150, duration: "20 min" },
  { id: "wax-full-legs", category: "waxing", name: "Full Legs Waxing", description: "Full legs waxing for long-lasting smoothness.", image: "/images/body.jpg", imageAlt: "Relaxing body treatment", startingPrice: 350, duration: "40 min" },
  { id: "wax-half-legs", category: "waxing", name: "Half Legs Waxing", description: "Waxing for knees down or knees up.", image: "/images/body.jpg", imageAlt: "Body wellness treatment", startingPrice: 200, duration: "25 min" },
  { id: "wax-full-body", category: "waxing", name: "Full Body Waxing", description: "Complete body waxing package.", image: "/images/spa-room.jpg", imageAlt: "Treatment room prepared for body care", startingPrice: 1500, duration: "2 hrs" },

  // Threading
  { id: "thread-eyebrows", category: "threading", name: "Eyebrows", description: "Precise shaping to frame your face.", image: "/images/threading.jpg", imageAlt: "Eyebrow shaping at a salon", startingPrice: 40, duration: "10 min" },
  { id: "thread-upper-lip", category: "threading", name: "Upper Lips", description: "Quick, clean upper lip threading.", image: "/images/threading.jpg", imageAlt: "Face threading service", startingPrice: 20, duration: "5 min" },
  { id: "thread-forehead", category: "threading", name: "Forehead", description: "Gentle forehead threading.", image: "/images/threading.jpg", imageAlt: "Beautician performing threading", startingPrice: 30, duration: "5 min" },
  { id: "thread-full-face", category: "threading", name: "Full Face", description: "Eyebrows, upper lip, forehead and more in one visit.", image: "/images/threading.jpg", imageAlt: "Full face threading at a salon", startingPrice: 150, duration: "25 min" },

  // Makeup
  { id: "party-makeup", category: "makeup", name: "Party Makeup", description: "Polished makeup for parties and celebrations.", image: "/images/makeup-red.jpg", imageAlt: "Close-up of a model with bold red lips", startingPrice: 2000, duration: "60 min" },
  { id: "engagement-makeup", category: "makeup", name: "Engagement Makeup", description: "Soft, camera-ready makeup for your engagement.", image: "/images/makeup.jpg", imageAlt: "Makeup artist applying lip colour", startingPrice: 4000, duration: "90 min" },
  { id: "reception-makeup", category: "makeup", name: "Reception Makeup", description: "Glamorous evening makeup for your reception.", image: "/images/flatlay.jpg", imageAlt: "Makeup brushes and cosmetics flat lay", startingPrice: 5000, duration: "90 min" },
  { id: "bridal-makeup", category: "makeup", name: "Bridal Makeup", description: "Complete bridal look with a trial discussion beforehand.", image: "/images/promo-indian.jpg", imageAlt: "Indian bride with bridal makeup and gold jewellery", startingPrice: 8000, duration: "2–3 hrs" },

  // Nails
  { id: "manicure", category: "nails", name: "Manicure", description: "Nail shaping, cuticle care and polish for tidy hands.", image: "/images/manicure.jpg", imageAlt: "Manicurist painting a client's nails", startingPrice: 400, duration: "45 min" },
  { id: "pedicure", category: "nails", name: "Pedicure", description: "Relaxing foot care with scrub, massage and polish.", image: "/images/nails.jpg", imageAlt: "Hand with glossy tortoiseshell nail polish", startingPrice: 600, duration: "60 min" },
  { id: "nail-art", category: "nails", name: "Nail Art", description: "Creative designs to match your outfit or mood.", image: "/images/nail-art.jpg", imageAlt: "Red nail art design", startingPrice: 500, duration: "45 min" },
  { id: "nail-extensions", category: "nails", name: "Nail Extensions", description: "Length and shape extensions, finished with your colour.", image: "/images/nails.jpg", imageAlt: "Manicured nails with a glossy finish", startingPrice: 1500, duration: "90 min" },
];

export const homePackages: HomePackage[] = [
  { id: "hw-facial", name: "Facial", details: "Facial of your choice with products brought to you.", image: "/images/facial.jpg", imageAlt: "Facial treatment", startingPrice: 600, duration: "60 min" },
  { id: "hw-cleanup", name: "Cleanup", details: "Quick refresh cleanup at your doorstep.", image: "/images/cleanup.jpg", imageAlt: "Skin cleanup service", startingPrice: 450, duration: "40 min" },
  { id: "hw-waxing", name: "Waxing", details: "Arms, legs or full body waxing at home.", image: "/images/body.jpg", imageAlt: "Body waxing treatment", startingPrice: 300, duration: "30–120 min" },
  { id: "hw-threading", name: "Threading", details: "Eyebrows, upper lip and face threading.", image: "/images/threading.jpg", imageAlt: "Eyebrow threading", startingPrice: 60, duration: "10–30 min" },
  { id: "hw-hair-spa", name: "Hair Spa", details: "Conditioning hair spa in your own space.", image: "/images/hair-wash.jpg", imageAlt: "Hair spa treatment", startingPrice: 900, duration: "60 min" },
  { id: "hw-hair-styling", name: "Hair Styling", details: "Blow-dry, curls and party hairstyles.", image: "/images/hair-curl.jpg", imageAlt: "Hair styling in progress", startingPrice: 600, duration: "45 min" },
  { id: "hw-bridal", name: "Bridal Makeup", details: "Bridal makeup at your home or venue.", image: "/images/promo-indian.jpg", imageAlt: "Indian bride with bridal makeup and gold jewellery", startingPrice: 9000, duration: "2–3 hrs" },
  { id: "hw-party", name: "Party Makeup", details: "Party-ready makeup before you head out.", image: "/images/makeup-red.jpg", imageAlt: "Party makeup look", startingPrice: 2200, duration: "60 min" },
];

export const weddingPackages: WeddingPackage[] = [
  { id: "b-bridal", name: "Bridal Makeup", details: "Full bridal makeup and hair for the main ceremony.", image: "/images/promo-indian.jpg", imageAlt: "Indian bride with bridal makeup and gold jewellery", startingPrice: 8000, homeService: true, includes: ["Makeup", "Hair styling", "Draping help"] },
  { id: "b-engagement", name: "Engagement Makeup", details: "A soft, elegant look for your engagement.", image: "/images/makeup.jpg", imageAlt: "Makeup artist at work", startingPrice: 4000, homeService: true, includes: ["Makeup", "Hair styling"] },
  { id: "b-reception", name: "Reception Makeup", details: "A glamorous look for the evening.", image: "/images/makeup-red.jpg", imageAlt: "Glamorous red-lip makeup", startingPrice: 5000, homeService: true, includes: ["Makeup", "Hair styling"] },
  { id: "b-haldi", name: "Haldi Makeup", details: "Light, fresh makeup that suits the haldi ceremony.", image: "/images/bouquet.jpg", imageAlt: "Bridal bouquet of flowers", startingPrice: 2500, homeService: true, includes: ["Light makeup", "Hair styling"] },
  { id: "b-mehendi", name: "Mehendi Makeup", details: "Colourful, festive look for the mehendi function.", image: "/images/face-glam.jpg", imageAlt: "Portrait with defined eye makeup", startingPrice: 3000, homeService: true, includes: ["Makeup", "Hair styling"] },
  { id: "b-prebridal", name: "Pre-Bridal Package", details: "A series of treatments in the weeks before the wedding.", image: "/images/spa-room.jpg", imageAlt: "Relaxing spa room for pre-bridal care", startingPrice: 6000, homeService: false, includes: ["Facials", "Waxing", "Hair spa", "Mani-pedi"] },
  { id: "b-skinprep", name: "Bridal Skin Preparation", details: "Skin-focused care to prepare for your big day.", image: "/images/skincare.jpg", imageAlt: "Skincare products for bridal skin prep", startingPrice: 3500, homeService: false, includes: ["Skin consultation", "Facial", "Cleanup"] },
];

export const premiumWeddingPackages = [
  { id: "essential", name: "Essential Bridal", price: 10000, features: ["Bridal makeup", "Hair styling", "Consultation call"], highlight: false },
  { id: "signature", name: "Signature Bridal", price: 20000, features: ["Pre-bridal skin prep", "Bridal makeup", "Hair styling", "Home visit option"], highlight: true },
  { id: "royal", name: "Royal Wedding", price: 35000, features: ["Full pre-bridal series", "Bridal + reception makeup", "Haldi & mehendi looks", "Home visit option"], highlight: false },
] as const;

/**
 * Service highlights — hair-care add-ons and spas, with the prices supplied by
 * the salon. Edit prices here; the homepage, services page and price list all
 * read from this list.
 */
export interface ServiceHighlight {
  id: string;
  name: string;
  price: number;
  note?: string;
}

export const serviceHighlights: ServiceHighlight[] = [
  { id: "sh-conditioner", name: "Conditioner", price: 100 },
  { id: "sh-wash", name: "Wash", price: 200 },
  { id: "sh-mask", name: "Mask", price: 100 },
  { id: "sh-spa-loreal-normal", name: "Spa (L'Oréal) Normal", price: 600 },
  { id: "sh-spa-loreal-power", name: "Spa (L'Oréal) Power Dose", price: 1000 },
  { id: "sh-spa-keratin-normal", name: "Spa (Keratin) Normal", price: 800 },
];
