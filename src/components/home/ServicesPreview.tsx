import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { WhatsAppButton } from "@/components/booking/WhatsAppButton";

const tiles = [
  { name: "Facial & Skincare", from: "Basic Facial", img: "/images/facial.jpg", alt: "Woman enjoying a facial treatment" },
  { name: "Hair", from: "Hair Spa", img: "/images/hair-curl.jpg", alt: "Stylist curling long brown hair" },
  { name: "Makeup", from: "Party Makeup", img: "/images/makeup-red.jpg", alt: "Model with bold red lips" },
  { name: "Nails", from: "Manicure", img: "/images/nail-art.jpg", alt: "Red nail art" },
  { name: "Waxing & Threading", from: "Full Face Threading", img: "/images/threading.jpg", alt: "Eyebrow shaping at the salon" },
];

export function ServicesPreview() {
  return (
    <section className="section-pad" aria-labelledby="services-prev-title">
      <div className="container-x">
        <SectionHeading eyebrow="Our Services" title="Treatments for Every Occasion" subtitle="From everyday care to your biggest celebrations." />
        <span id="services-prev-title" className="sr-only">Our services</span>
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {tiles.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.06}>
              <Link href="/services" className="group relative block aspect-[4/5] overflow-hidden rounded-3xl sm:aspect-[4/3]">
                <Image src={t.img} alt={t.alt} fill sizes="(min-width:1024px) 24rem, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <h3 className="font-heading text-lg font-semibold !text-white sm:text-2xl">{t.name}</h3>
                  <p className="mt-0.5 hidden text-xs text-white/85 sm:block">e.g. {t.from}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/services" className="btn btn-primary">
            View all services &amp; prices <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <WhatsAppButton label="Book an Appointment" variant="outline" />
        </div>
      </div>
    </section>
  );
}
