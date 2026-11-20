import { salon } from "@/data/salon";
import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { ContactSection } from "@/components/home/ContactSection";
import { FAQ } from "@/components/home/FAQ";

export const metadata: Metadata = {
  title: "Contact & Location",
  description: `Call or WhatsApp ${salon.name} to book an appointment. Business hours, address and directions.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact Us" title="Book Your Appointment" subtitle="Call Us for Appointments or message us on WhatsApp." />
      <ContactSection asPage />
      <FAQ />
    </>
  );
}
