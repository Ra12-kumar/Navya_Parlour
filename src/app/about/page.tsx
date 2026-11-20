import { salon } from "@/data/salon";
import type { Metadata } from "next";
import { About } from "@/components/home/About";
import { TrustSection } from "@/components/home/TrustSection";
import { WhatsAppButton } from "@/components/booking/WhatsAppButton";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${salon.name} — our approach to beauty, hygiene, customer care and home beauty services.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <About />
      <TrustSection />
      <div className="pb-16 text-center">
        <WhatsAppButton label="Book an Appointment" />
      </div>
    </>
  );
}
