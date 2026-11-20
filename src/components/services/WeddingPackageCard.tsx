import Image from "next/image";
import { Check, Home } from "lucide-react";
import type { WeddingPackage } from "@/types";
import { WhatsAppButton } from "@/components/booking/WhatsAppButton";
import { formatPrice } from "@/lib/utils";

export function WeddingPackageCard({ pkg }: { pkg: WeddingPackage }) {
  return (
    <article className="card flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[4/3]">
        <Image src={pkg.image} alt={pkg.imageAlt} fill sizes="(min-width:1024px) 22rem, (min-width:640px) 45vw, 92vw" className="object-cover" />
        {pkg.homeService && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-[0.68rem] font-semibold text-rose-dark">
            <Home className="h-3 w-3" aria-hidden="true" /> Home service available
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-semibold">{pkg.name}</h3>
        <p className="mt-1 text-sm text-ink-soft">{pkg.details}</p>
        <ul className="mt-3 flex-1 space-y-1 text-sm">
          {pkg.includes.map((i) => (
            <li key={i} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-gold-dark" aria-hidden="true" /> {i}
            </li>
          ))}
        </ul>
        <p className="mt-4">
          <span className="block text-[0.7rem] uppercase tracking-wider text-ink-soft">Starting from</span>
          <span className="font-heading text-xl font-semibold text-rose-dark">{formatPrice(pkg.startingPrice)}</span>
          <span className="ml-1 text-xs text-ink-soft">*</span>
        </p>
        <div className="mt-4 grid gap-2">
          <WhatsAppButton service={pkg.name} label="Book Consultation" />
          <WhatsAppButton
            mode="enquiry"
            topic={`${pkg.name} (Bridal package)`}
            label="WhatsApp Enquiry"
            variant="wa"
            size="sm"
          />
        </div>
      </div>
    </article>
  );
}
