import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { BridalServices } from "@/components/services/BridalServices";
import { PremiumPackages } from "@/components/services/PremiumPackages";
import { WhatsAppButton } from "@/components/booking/WhatsAppButton";

export const metadata: Metadata = {
  title: "Bridal Makeup & Services",
  description: "Bridal makeup, engagement, reception, haldi and mehendi looks, and pre-bridal care, at the salon or at your home.",
  alternates: { canonical: "/bridal" },
};

const included = [
  "Bridal makeup planned around your outfit and ceremony",
  "Engagement, reception, haldi and mehendi looks",
  "Hairstyling and pre-bridal skin preparation",
  "At the salon or at your home",
];

export default function BridalPage() {
  return (
    <>
      <PageHero eyebrow="Bridal Makeup" title="Your Special Day Deserves Special Beauty" subtitle="Consultation first, then a look and package planned around you." />
      <section className="section-pad pb-0" aria-label="Bridal makeup">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg">
            <div className="relative aspect-[2/3] overflow-hidden rounded-[2rem] border-4 border-white shadow-[0_30px_60px_-25px_rgba(56,43,43,0.55)] ring-2 ring-gold/60">
              <Image
                src="/images/bridal-makeup.jpg"
                alt="Indian bride in a gold embroidered lehenga with kundan jewellery, maang tikka, nose ring and bridal makeup"
                fill
                priority
                fetchPriority="high"
                sizes="(min-width:1024px) 32rem, (min-width:640px) 28rem, 90vw"
                className="object-cover"
              />
            </div>
            <span className="absolute -right-2 top-8 rotate-6 rounded-full bg-gold px-4 py-2 text-xs font-extrabold tracking-wider text-ink shadow-lg sm:-right-5">
              BRIDAL MAKEUP
            </span>
          </div>
          <div className="text-center lg:text-left">
            <h2 className="fluid-h2 font-semibold">Bridal Makeup, Done Beautifully</h2>
            <ul className="mx-auto mt-5 max-w-md space-y-3 text-left lg:mx-0">
              {included.map((i) => (
                <li key={i} className="flex items-start gap-3 text-ink">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-rose-dark text-white">
                    <Check className="h-3 w-3" aria-hidden="true" />
                  </span>
                  {i}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex justify-center lg:justify-start">
              <WhatsAppButton service="Bridal Makeup" label="Book Bridal Makeup" className="w-full sm:w-auto sm:min-w-64" />
            </div>
          </div>
        </div>
      </section>
      <BridalServices />
      <PremiumPackages />
    </>
  );
}
