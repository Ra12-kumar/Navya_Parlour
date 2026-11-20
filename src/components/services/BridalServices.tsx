import { weddingPackages } from "@/data/services";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { WeddingPackageCard } from "./WeddingPackageCard";

export function BridalServices() {
  return (
    <section className="section-pad" aria-labelledby="bridal-heading">
      <div className="container-x">
        <SectionHeading eyebrow="Bridal Services" title="Bridal Services" subtitle="From engagement to reception — look and feel your best at every function." />
        <span id="bridal-heading" className="sr-only">Bridal services</span>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {weddingPackages.map((p, i) => (
              <Reveal key={p.id} delay={Math.min(i, 3) * 0.05}>
                <WeddingPackageCard pkg={p} />
              </Reveal>
            ))}
        </div>
        <p className="mt-6 text-center text-xs text-ink-soft">* Indicative starting prices. The salon confirms exact rates after consultation.</p>
      </div>
    </section>
  );
}
