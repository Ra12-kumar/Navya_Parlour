import Image from "next/image";
import { Clock } from "lucide-react";
import type { Service } from "@/types";
import { WhatsAppButton } from "@/components/booking/WhatsAppButton";
import { formatPrice } from "@/lib/utils";

export function ServiceCard({ service, priority = false }: { service: Service; priority?: boolean }) {
  return (
    <article className="card group flex h-full flex-col overflow-hidden transition-shadow hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          priority={priority}
          sizes="(min-width:1024px) 22rem, (min-width:640px) 45vw, 92vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-semibold">{service.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{service.description}</p>
        <div className="mt-4 flex items-end justify-between gap-2">
          <p>
            <span className="block text-[0.7rem] uppercase tracking-wider text-ink-soft">Starting from</span>
            <span className="font-heading text-xl font-semibold text-rose-dark">{formatPrice(service.startingPrice)}</span>
            <span className="ml-1 text-xs text-ink-soft">*</span>
          </p>
          <p className="flex items-center gap-1 text-xs text-ink-soft">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" /> {service.duration}
          </p>
        </div>
        <WhatsAppButton service={service.name} className="mt-4 w-full" />
      </div>
    </article>
  );
}
