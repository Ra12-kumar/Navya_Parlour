import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "@/components/booking/WhatsAppButton";

export function WeddingTeaser() {
  return (
    <section className="section-pad bg-petals" aria-labelledby="wedding-title" id="bridal-makeup">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative mx-auto w-full max-w-sm sm:max-w-md">
          <div className="relative aspect-[2/3] overflow-hidden rounded-[2rem] border-4 border-white shadow-[0_30px_60px_-25px_rgba(56,43,43,0.55)] ring-2 ring-gold/60">
            <Image
              src="/images/bridal-makeup.jpg"
              alt="Indian bride in a gold embroidered lehenga with kundan jewellery, maang tikka, nose ring and bridal makeup"
              fill
              sizes="(min-width:640px) 28rem, 90vw"
              className="object-cover"
            />
          </div>
          <span className="absolute -right-2 top-8 rotate-6 rounded-full bg-gold px-4 py-2 text-xs font-extrabold tracking-wider text-ink shadow-lg sm:-right-5">
            BRIDAL MAKEUP
          </span>
        </div>
        <div className="text-center lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">Bridal Makeup</p>
          <h2 id="wedding-title" className="fluid-h2 mt-2 font-semibold">Your Special Day Deserves Special Beauty</h2>
          <div className="mt-4 flex items-center justify-center gap-2 lg:justify-start" aria-hidden="true">
            <span className="gold-rule" />
            <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
            <span className="gold-rule" />
          </div>
          <p className="mx-auto mt-4 max-w-lg text-ink-soft lg:mx-0">
            Bridal, engagement, reception, haldi and mehendi makeup, and pre-bridal skin preparation — at the salon or at
            your home.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <WhatsAppButton service="Bridal Makeup" label="Book Bridal Makeup" variant="wa" />
            <Link href="/bridal" className="btn btn-outline">Bridal services</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
