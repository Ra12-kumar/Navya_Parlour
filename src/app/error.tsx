"use client";

import { useEffect } from "react";
import { WaLink } from "@/components/booking/WaLink";
import { generalUrl } from "@/lib/whatsapp";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="section-pad">
      <div className="container-x max-w-xl text-center">
        <h1 className="text-3xl font-semibold">Something went wrong</h1>
        <p className="mt-3 text-ink-soft">
          Sorry about that. Please try again, or message us directly on WhatsApp to book your appointment.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <button type="button" onClick={reset} className="btn btn-primary">Try again</button>
          <WaLink href={generalUrl()}>WhatsApp us</WaLink>
        </div>
      </div>
    </section>
  );
}
