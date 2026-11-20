import Image from "next/image";
import Link from "next/link";
import { galleryImages } from "@/data/gallery";
import { SectionHeading } from "@/components/common/SectionHeading";

const preview = ["g1", "g4", "g9", "g12", "g15", "g17"].map((id) => galleryImages.find((g) => g.id === id)!);

export function GalleryPreview() {
  return (
    <section className="section-pad bg-petals" aria-labelledby="gallery-prev-title">
      <div className="container-x">
        <SectionHeading eyebrow="Gallery" title="A Glimpse of Glow" subtitle="Sample imagery to show the style and care we aim for." />
        <span id="gallery-prev-title" className="sr-only">Gallery preview</span>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {preview.map((g) => (
            <Link key={g.id} href="/gallery" className="group relative block aspect-square overflow-hidden rounded-2xl">
              <Image src={g.src} alt={g.alt} fill sizes="(min-width:1024px) 24rem, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
              <span className="sr-only">View gallery</span>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/gallery" className="btn btn-outline">View full gallery</Link>
        </div>
      </div>
    </section>
  );
}
