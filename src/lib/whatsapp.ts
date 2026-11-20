import { salon } from "@/data/salon";

export type VisitType = "Salon Visit" | "Home Service";

export interface BookingDetails {
  name?: string;
  service?: string;
  date?: string;
  time?: string;
  visitType?: VisitType | "";
  location?: string;
}

const val = (v?: string) => (v && v.trim() ? v.trim() : "");

/** Builds a wa.me URL for the salon number with an encoded message. */
export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${salon.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildBookingMessage(d: BookingDetails = {}): string {
  return [
    "Hello! I want to book a beauty service.",
    "",
    `Name: ${val(d.name)}`,
    `Service: ${val(d.service)}`,
    `Preferred Date: ${val(d.date)}`,
    `Preferred Time: ${val(d.time)}`,
    `Home Service or Salon Visit: ${val(d.visitType)}`,
    `Location: ${val(d.location)}`,
    "",
    "Please share availability and pricing.",
  ].join("\n");
}

export function buildEnquiryMessage(topic: string): string {
  return `Hello! I would like to enquire about: ${topic}.\n\nPlease share availability and pricing.`;
}

export const bookingUrl = (d?: BookingDetails) => buildWhatsAppUrl(buildBookingMessage(d));
export const enquiryUrl = (topic: string) => buildWhatsAppUrl(buildEnquiryMessage(topic));
export const generalUrl = () =>
  buildWhatsAppUrl("Hello! I would like to know more about your beauty services.");

export function openWhatsApp(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}
