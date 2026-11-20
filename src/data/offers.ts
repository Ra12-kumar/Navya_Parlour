import type { Offer } from "@/types";

export const offers: Offer[] = [
  {
    id: "free-eyebrows",
    badge: "FREE",
    title: "Free Eyebrows",
    description: "Enjoy complimentary eyebrow threading with selected beauty services.",
    terms: [
      "Applies only with selected services — ask the salon which ones.",
      "One complimentary eyebrow threading per visit.",
      "Cannot be exchanged for cash.",
    ],
    bookingService: "Free Eyebrows offer",
    image: "/images/free-eyebrows.png",
    imageAlt: "Eyebrow threading being done on a client with a cotton thread",
  },
  {
    id: "first-visit",
    badge: "FIRST VISIT",
    title: "First Visit Special",
    description: "Get a FREE Basic Facial on your first visit.",
    terms: [
      "For new customers on their first visit only.",
      "The salon will confirm eligibility when you enquire.",
      "Subject to availability of appointment slots.",
    ],
    bookingService: "First Visit Special - free Basic Facial",
    image: "/images/facial.jpg",
    imageAlt: "Woman relaxing with a facial mask treatment",
  },
  {
    id: "home-special",
    badge: "AT HOME",
    title: "Home Beauty Special",
    description: "Professional beauty services at your doorstep at affordable prices.",
    terms: [
      "Home service availability depends on your location.",
      "Travel charges, if any, are confirmed before booking.",
      "A minimum booking value may apply.",
    ],
    bookingService: "Home Beauty Special",
    image: "/images/spa-room.jpg",
    imageAlt: "Calm, plant-filled space for relaxing beauty care at home",
  },
];
