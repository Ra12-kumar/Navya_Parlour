import Image from "next/image";
import { offers } from "@/data/offers";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { WhatsAppButton } from "@/components/booking/WhatsAppButton";

export function SpecialOffers() {
  return (
    <section className="section-pad bg-petals" aria-labelledby="offers-title" id="offers">
      <div className="container-x">
        <SectionHeading eyebrow="Special Offers" title="Beauty Offers Made for You" subtitle="Genuine offers, clearly explained. Read the terms and book in a tap." />
        <span id="offers-title" className="sr-only">Special offers</span>
        <div className="grid gap-6 md:grid-cols-3">
          {offers.map((o, i) => (
            <Reveal key={o.id} delay={i * 0.08}>
              <article className="card relative flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[16/9] w-full">
                  <Image src={o.image} alt={o.imageAlt} fill sizes="(min-width:768px) 24rem, 92vw" className="object-cover" />
                </div>
                <span className="absolute right-0 top-0 rounded-bl-2xl bg-rose-dark px-4 py-1.5 text-xs font-bold tracking-wider text-white">
                  {o.badge}
                </span>
                <div className="flex flex-1 flex-col p-6">
                <h3 className="text-2xl font-semibold">{o.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{o.description}</p>
                <details className="mt-4 flex-1 text-sm">
                  <summary className="min-h-8 cursor-pointer font-semibold text-gold-dark">Terms &amp; conditions</summary>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-ink-soft">
                    {o.terms.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </details>
                <WhatsAppButton service={o.bookingService} label="Book Offer" className="mt-5 w-full" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
