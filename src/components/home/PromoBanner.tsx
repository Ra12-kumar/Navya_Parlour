"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { MessageCircle, Sparkles } from "lucide-react";
import { promo } from "@/data/promo";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

function Flower({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false">
      <g fill="currentColor">
        <path d="M32 6c6 8 8 16 0 28-8-12-6-20 0-28z" />
        <path d="M32 34c-4-11-12-16-22-14 1 11 10 18 22 14z" opacity=".8" />
        <path d="M32 34c4-11 12-16 22-14-1 11-10 18-22 14z" opacity=".8" />
        <circle cx="32" cy="38" r="4" fill="#C9A46A" />
      </g>
    </svg>
  );
}

/** Eye-catching offer banner, shown above the hero on the homepage only. */
export function PromoBanner() {
  const pathname = usePathname();
  if (!promo.enabled || pathname !== "/") return null;

  const href = buildWhatsAppUrl(promo.whatsappMessage);

  return (
    <section
      aria-label="Special offer: free eyebrow threading"
      className="relative isolate overflow-hidden border-b-2 border-gold/70 bg-gradient-to-br from-blush via-cream to-blush"
    >
      {/* decorative flowers */}
      <Flower className="pointer-events-none absolute -left-6 top-4 -z-10 h-24 w-24 rotate-[-18deg] text-rose/15 sm:h-32 sm:w-32" />
      <Flower className="pointer-events-none absolute right-[8%] top-3 -z-10 hidden h-14 w-14 rotate-12 text-gold/30 lg:block" />
      <Flower className="pointer-events-none absolute -right-8 bottom-0 -z-10 h-28 w-28 rotate-[24deg] text-rose/15" />

      <div className="container-x grid items-center gap-6 py-6 sm:py-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-10">
        <div className="anim-fade-up text-center lg:text-left">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-dark px-3.5 py-1.5 text-xs font-bold tracking-[0.18em] text-white shadow-md">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            {promo.badge}
          </span>

          <h2 className="fluid-promo mt-4 font-heading font-semibold leading-[1.15] text-ink [text-wrap:balance]">
            {promo.headline}
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg lg:mx-0">
            {promo.supportingText}
          </p>

          <ul className="mt-4 flex flex-wrap justify-center gap-2 lg:justify-start" aria-label="Offer highlights">
            {promo.highlights.map((h) => (
              <li
                key={h}
                className="rounded-full border border-gold/60 bg-white px-3.5 py-1.5 text-xs font-semibold text-ink shadow-sm sm:text-sm"
              >
                {h}
              </li>
            ))}
            {promo.limitedTimeText && (
              <li className="rounded-full bg-ink px-3.5 py-1.5 text-xs font-semibold text-white sm:text-sm">
                {promo.limitedTimeText}
              </li>
            )}
          </ul>

          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="promo-cta mt-6 inline-flex min-h-14 w-full items-center justify-center gap-2.5 rounded-full bg-rose-dark px-8 text-base font-bold tracking-wider text-white transition-transform hover:-translate-y-0.5 hover:bg-rose-deep sm:w-auto sm:min-w-56"
          >
            <MessageCircle className="h-6 w-6" aria-hidden="true" />
            {promo.buttonLabel}
            <span className="sr-only"> on WhatsApp for the free eyebrows offer (opens WhatsApp)</span>
          </a>

          <p className="mt-3 text-xs text-ink-soft">{promo.finePrint}</p>
        </div>

        {/* No opacity animation on the main photo so it can paint (LCP) immediately. */}
        <div className="relative mx-auto w-full max-w-xl pb-8 lg:max-w-none lg:pb-0">
          <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem] border-4 border-white shadow-[0_24px_50px_-20px_rgba(56,43,43,0.45)] ring-1 ring-gold/50">
            <Image
              src={promo.image}
              alt={promo.imageAlt}
              fill
              priority
              fetchPriority="high"
              sizes="(min-width:1024px) 38rem, (min-width:640px) 36rem, 92vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" aria-hidden="true" />
          </div>

          <span className="absolute -right-1 top-3 grid h-20 w-20 rotate-12 place-items-center rounded-full bg-gold text-center text-[0.7rem] font-extrabold leading-tight text-ink shadow-lg sm:-right-3 sm:h-24 sm:w-24 sm:text-xs">
            100%
            <br />
            FREE
          </span>
        </div>
      </div>
    </section>
  );
}
