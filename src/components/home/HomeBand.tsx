import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";
import { WhatsAppButton } from "@/components/booking/WhatsAppButton";

export function HomeBand() {
  return (
    <section className="bg-ink" aria-labelledby="homeband-title">
      <div className="container-x grid items-center gap-8 py-14 lg:grid-cols-2">
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            <Home className="h-4 w-4" aria-hidden="true" /> Home Beauty Services
          </p>
          <h2 id="homeband-title" className="mt-3 text-3xl font-semibold !text-white sm:text-4xl">
            Salon Experience, Now at Your Home
          </h2>
          <p className="mt-4 max-w-lg text-white/80">
            Facials, cleanups, waxing, threading, hair spa, styling and bridal and party makeup — brought to your
            doorstep. Travel charges, if any, depend on your location.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/services#home-services" className="btn btn-light">See home packages</Link>
            <WhatsAppButton service="Home Service enquiry" visitType="Home Service" label="Book on WhatsApp" variant="wa" />
          </div>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
          <Image src="/images/spa-room.jpg" alt="Calm, plant-filled space for relaxing beauty care" fill sizes="(min-width:1024px) 36rem, 92vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
