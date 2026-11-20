import { Sparkles } from "lucide-react";
import { serviceHighlights } from "@/data/services";
import { formatPrice } from "@/lib/utils";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { WhatsAppButton } from "@/components/booking/WhatsAppButton";

/** Highlighted hair-care services with prices (data in src/data/services.ts). */
export function ServiceHighlights() {
  return (
    <section id="service-highlights" className="section-pad bg-petals" aria-labelledby="highlights-title">
      <div className="container-x">
        <SectionHeading
          eyebrow="Hair Care"
          title="Service Highlights"
          subtitle="Popular hair-care treatments at clear, simple prices."
        />
        <span id="highlights-title" className="sr-only">Service highlights</span>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceHighlights.map((s, i) => (
            <li key={s.id} className="list-none">
              <Reveal delay={(i % 3) * 0.06} className="h-full">
                <article className="card group flex h-full flex-col border-rose/30 bg-gradient-to-br from-white to-blush p-6 transition-colors hover:border-rose-dark">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-semibold">{s.name}</h3>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-rose-dark shadow-sm">
                      <Sparkles className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                  {s.note && <p className="mt-1 text-sm text-ink-soft">{s.note}</p>}
                  <p className="mt-4 flex-1 font-heading text-3xl font-semibold text-rose-dark">
                    {formatPrice(s.price)}
                  </p>
                  <WhatsAppButton service={s.name} label="Book Now" className="mt-4 w-full" />
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-xs text-ink-soft">
          Prices may change depending on hair length and products used. The salon confirms the final price when you book.
        </p>
      </div>
    </section>
  );
}
