"use client";

import Image from "next/image";
import { Clock, Home } from "lucide-react";
import { homePackages } from "@/data/services";
import { homeComparison, homeTravelNote } from "@/data/pricing";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { WhatsAppButton } from "@/components/booking/WhatsAppButton";
import { formatPrice } from "@/lib/utils";

export function HomeServices() {
  const list = homePackages;

  return (
    <section id="home-services" className="section-pad bg-petals" aria-labelledby="home-title">
      <div className="container-x">
        <SectionHeading
          eyebrow="Women's Home Beauty Services"
          title="Salon Experience, Now at Your Home"
          subtitle="Professional beauty services at your doorstep. Availability depends on your location."
        />
        <span id="home-title" className="sr-only">Salon Experience, Now at Your Home</span>


        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((p, i) => (
            <Reveal key={p.id} delay={Math.min(i, 4) * 0.04}>
              <article className="card flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image src={p.image} alt={p.imageAlt} fill sizes="(min-width:1024px) 17rem, (min-width:640px) 45vw, 92vw" className="object-cover" />
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-[0.68rem] font-semibold text-rose-dark">
                    <Home className="h-3 w-3" aria-hidden="true" /> Home visit available
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <p className="mt-1 flex-1 text-sm text-ink-soft">{p.details}</p>
                  <div className="mt-3 flex items-end justify-between">
                    <p>
                      <span className="block text-[0.65rem] uppercase tracking-wider text-ink-soft">Starting from</span>
                      <span className="font-heading text-lg font-semibold text-rose-dark">{formatPrice(p.startingPrice)}</span>
                    </p>
                    <p className="flex items-center gap-1 text-xs text-ink-soft"><Clock className="h-3.5 w-3.5" aria-hidden="true" />{p.duration}</p>
                  </div>
                  <WhatsAppButton service={`${p.name} - Home Service`} visitType="Home Service" label="Book on WhatsApp" variant="wa" size="sm" className="mt-4 w-full" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="card mt-12 overflow-hidden">
          <h3 className="bg-white px-5 pt-5 text-2xl font-semibold">Salon vs Home Service pricing</h3>
          <div className="relative overflow-x-auto p-2 sm:p-4">
            <table className="w-full min-w-[26rem] text-left text-sm">
              <caption className="sr-only">Comparison of salon and home service starting prices</caption>
              <thead className="text-xs uppercase tracking-wider text-ink-soft">
                <tr>
                  <th scope="col" className="px-3 py-2">Service</th>
                  <th scope="col" className="px-3 py-2 text-right">At salon</th>
                  <th scope="col" className="px-3 py-2 text-right">At home</th>
                </tr>
              </thead>
              <tbody>
                {homeComparison.map((r) => (
                  <tr key={r.id} className="border-t border-blush-deep/60">
                    <th scope="row" className="px-3 py-3 font-medium">{r.name}</th>
                    <td className="px-3 py-3 text-right">{r.salonPrice !== null ? formatPrice(r.salonPrice) : "—"}</td>
                    <td className="px-3 py-3 text-right font-semibold">{r.homePrice !== null ? formatPrice(r.homePrice) : "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="border-t border-blush-deep/60 bg-cream px-5 py-3 text-xs text-ink-soft">{homeTravelNote}</p>
        </div>
      </div>
    </section>
  );
}
