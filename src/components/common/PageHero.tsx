import { SectionHeading } from "./SectionHeading";

export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="bg-petals pb-10 pt-12 sm:pt-16">
      <div className="container-x">
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} subtitle={subtitle} className="mb-0" />
      </div>
    </section>
  );
}
