import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { GalleryGrid } from "@/components/home/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Browse bridal and party makeup, hair styling, facials, nails and salon interior imagery.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="Our Gallery" subtitle="Royalty-free stock photos are used as placeholders until the salon adds its own work." />
      <section className="section-pad" aria-label="Photo gallery">
        <div className="container-x">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
