import { Hero } from "@/components/home/Hero";
import { SpecialOffers } from "@/components/home/SpecialOffers";
import { ServiceHighlights } from "@/components/home/ServiceHighlights";
import { About } from "@/components/home/About";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { HomeBand } from "@/components/home/HomeBand";
import { BrandSection } from "@/components/home/BrandSection";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { TrustSection } from "@/components/home/TrustSection";
import { FAQ } from "@/components/home/FAQ";
import { ContactSection } from "@/components/home/ContactSection";
import { WeddingTeaser } from "@/components/home/WeddingTeaser";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SpecialOffers />
      <ServiceHighlights />
      <About compact />
      <ServicesPreview />
      <HomeBand />
      <WeddingTeaser />
      <BrandSection />
      <GalleryPreview />
      <TrustSection />
      <FAQ />
      <ContactSection />
    </>
  );
}
