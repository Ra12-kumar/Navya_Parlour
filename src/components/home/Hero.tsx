import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { WhatsAppButton } from "@/components/booking/WhatsAppButton";

/** Server-rendered hero; entrance animations are pure CSS (no JavaScript needed). */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink" aria-labelledby="hero-title">
      <Image
        src="/images/hero.jpg"
        alt="Bright, modern beauty salon with a pink styling chair"
        fill
        sizes="100vw"
        className="object-cover opacity-55"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/20"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/70 to-transparent"
        aria-hidden="true"
      />

      <div className="container-x relative z-10 grid min-h-[34rem] items-center gap-10 py-20 sm:py-28 lg:min-h-[42rem] lg:grid-cols-[1.15fr_0.85fr] lg:py-32">
        <div className="anim-fade-up">
          <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            Beauty Parlour &amp; Home Services
          </p>
          <h1
            id="hero-title"
            className="fluid-h1 font-heading font-semibold leading-[1.1] !text-white"
          >
            Your Beauty,
            <span className="block italic !text-blush">Our Passion</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            Experience premium beauty treatments, professional care and affordable luxury at your
            doorstep.
          </p>
          <div className="mt-8">
            <WhatsAppButton service="Bridal Makeup" label="Book Bridal Makeup" className="w-full sm:w-auto sm:min-w-64" />
          </div>
        </div>

        <div className="anim-fade-up relative hidden h-[28rem] lg:block" style={{ animationDelay: "0.15s" }} aria-hidden="true">
          <div className="absolute right-0 top-0 h-[24rem] w-60 overflow-hidden rounded-t-[10rem] rounded-b-3xl border-4 border-white/80 shadow-2xl">
            <Image src="/images/makeup.jpg" alt="" fill sizes="15rem" className="object-cover" />
          </div>
          <div className="absolute bottom-0 left-4 h-64 w-48 overflow-hidden rounded-t-[8rem] rounded-b-3xl border-4 border-gold/80 shadow-2xl">
            <Image src="/images/hair-style.jpg" alt="" fill sizes="12rem" className="object-cover" />
          </div>
          <div className="absolute left-0 top-10 h-24 w-24 rounded-full border border-gold/60" />
          <div className="absolute bottom-16 right-10 h-3 w-3 rounded-full bg-gold" />
        </div>
      </div>

      <a
        href="#offers"
        aria-label="Scroll down to offers"
        className="absolute bottom-3 left-1/2 z-10 hidden min-h-11 min-w-11 -translate-x-1/2 flex-col items-center justify-center gap-1 text-[0.65rem] uppercase tracking-[0.3em] text-white/80 hover:text-white sm:flex"
      >
        Scroll
        <ChevronDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}
