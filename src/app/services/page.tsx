import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { ServiceFilter } from "@/components/services/ServiceFilter";
import { ServiceHighlights } from "@/components/home/ServiceHighlights";
import { HomeServices } from "@/components/services/HomeServices";
import { SpecialOffers } from "@/components/home/SpecialOffers";

export const metadata: Metadata = {
  title: "Beauty Services & Home Services",
  description:
    "Facials, hair, waxing, threading, makeup and nail services at the salon or at your home. Indicative starting prices with easy WhatsApp booking.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Our Services" title="Beauty Services" subtitle="Browse by category or search. Prices are indicative starting prices and confirmed by the salon." />
      <ServiceHighlights />
      <section className="section-pad" aria-label="Service catalogue">
        <div className="container-x">
          <ServiceFilter />
        </div>
      </section>
      <HomeServices />
      <SpecialOffers />
    </>
  );
}
