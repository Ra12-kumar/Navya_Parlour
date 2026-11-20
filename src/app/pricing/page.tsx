import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { PricingTable } from "@/components/services/PricingTable";

export const metadata: Metadata = {
  title: "Price List",
  description: "Indicative salon and home service prices for facials, hair, waxing, threading, makeup, nails, and bridal packages.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <PageHero eyebrow="Pricing" title="Transparent Price List" subtitle="Indicative starting prices, shown for the salon and for home service. The salon confirms exact rates before booking." />
      <section className="section-pad" aria-label="Price list">
        <div className="container-x">
          <PricingTable />
        </div>
      </section>
    </>
  );
}
