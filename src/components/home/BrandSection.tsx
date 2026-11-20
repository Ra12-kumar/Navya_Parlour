import Image from "next/image";
import { brandImages, brands } from "@/data/brands";
import { SectionHeading } from "@/components/common/SectionHeading";

export function BrandSection() {
  const shown = brands.filter((b) => b.confirmed);
  if (shown.length === 0) return null;
  return (
    <section className="section-pad" aria-labelledby="brands-title">
      <div className="container-x">
        <SectionHeading eyebrow="Our Products" title="Beauty Powered by Trusted Brands" subtitle="Brands our team works with. Product availability may vary by service." />
        <span id="brands-title" className="sr-only">Brands we use</span>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {shown.map((b) => (
            <li key={b.id} className="card flex min-h-28 flex-col items-center justify-center p-4 text-center">
              <span className="font-heading text-xl font-semibold text-ink">{b.name}</span>
              <span className="mt-1 text-xs text-ink-soft">{b.tagline}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
          {brandImages.map((img) => (
            <div key={img.src} className="relative aspect-square overflow-hidden rounded-2xl">
              <Image src={img.src} alt={img.alt} fill sizes="(min-width:1024px) 24rem, 33vw" className="object-cover" />
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-ink-soft">
          Brand names belong to their respective owners. Their appearance here does not indicate an official
          partnership, dealership or endorsement. Product images are illustrative stock photos.
        </p>
      </div>
    </section>
  );
}
