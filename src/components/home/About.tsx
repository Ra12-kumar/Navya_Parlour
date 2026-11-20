import Image from "next/image";
import { Heart, Home, ShieldCheck, Smile, Sparkles, UserCheck } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { salon } from "@/data/salon";

const points = [
  { icon: Sparkles, title: "Beauty & skincare philosophy", text: "Enhance natural beauty with treatments chosen for your skin, hair and occasion." },
  { icon: UserCheck, title: "Professional approach", text: "We listen first, explain every service clearly and share pricing before you commit." },
  { icon: ShieldCheck, title: "Hygiene & cleanliness", text: "A clean, tidy workspace and careful handling of tools are part of every appointment." },
  { icon: Smile, title: "Customer satisfaction", text: "Your comfort comes first. Tell us what you need and we will do our best to deliver it." },
  { icon: Home, title: "Home service available", text: "Prefer comfort at home? Selected services are available at your doorstep." },
  { icon: Heart, title: "Affordable luxury", text: "A premium experience at honest, transparent prices." },
];

export function About({ compact = false }: { compact?: boolean }) {
  return (
    <section className="section-pad" aria-labelledby="about-title">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image src="/images/salon-dark.jpg" alt="Modern salon interior with round mirrors and styling chairs" fill sizes="(min-width:1024px) 36rem, 92vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-2 hidden aspect-square w-40 overflow-hidden rounded-3xl border-4 border-cream shadow-xl sm:block">
            <Image src="/images/hair-style.jpg" alt="Stylist-finished long wavy hair" fill sizes="10rem" className="object-cover" />
          </div>
        </Reveal>

        <div>
          <SectionHeading
            as={compact ? "h2" : "h1"}
            align="left"
            eyebrow="About Us"
            title={`Welcome to ${salon.name}`}
            subtitle="A friendly beauty studio offering facials, hair, waxing, threading, makeup, nails, bridal services — at the salon or at your home."
          />
          <span id="about-title" className="sr-only">About {salon.name}</span>
          <ul className="grid gap-5 sm:grid-cols-2">
            {points.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-blush text-rose-dark">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-body text-sm font-semibold">{title}</h3>
                  <p className="mt-0.5 text-sm text-ink-soft">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
