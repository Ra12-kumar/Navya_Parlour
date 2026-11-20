import { Check } from "lucide-react";
import { premiumWeddingPackages } from "@/data/services";
import { SectionHeading } from "@/components/common/SectionHeading";
import { WhatsAppButton } from "@/components/booking/WhatsAppButton";
import { cn, formatPrice } from "@/lib/utils";

export function PremiumPackages() {
  return (
    <section className="section-pad" aria-labelledby="premium-title">
      <div className="container-x">
        <SectionHeading eyebrow="Wedding Packages" title="Premium Wedding Packages" subtitle="Compare our sample packages side by side. Final inclusions and rates are tailored to you after consultation." />
        <span id="premium-title" className="sr-only">Premium wedding packages</span>
        <div className="grid gap-6 md:grid-cols-3">
          {premiumWeddingPackages.map((p) => (
            <article
              key={p.id}
              className={cn(
                "card relative flex flex-col p-6",
                p.highlight && "border-2 border-gold md:-translate-y-2",
              )}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-ink">
                  Most popular choice
                </span>
              )}
              <h3 className="text-2xl font-semibold">{p.name}</h3>
              <p className="mt-3">
                <span className="text-xs uppercase tracking-wider text-ink-soft">Starting from </span>
                <span className="font-heading text-3xl font-semibold text-rose-dark">{formatPrice(p.price)}</span>
                <span className="ml-1 text-xs text-ink-soft">*</span>
              </p>
              <ul className="my-5 flex-1 space-y-2 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" aria-hidden="true" /> {f}
                  </li>
                ))}
              </ul>
              <WhatsAppButton service={p.name} label="Book Consultation" variant={p.highlight ? "primary" : "outline"} />
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-ink-soft">
          * Sample indicative prices, not confirmed rates. The salon will share a final quote on WhatsApp.
        </p>
      </div>
    </section>
  );
}
