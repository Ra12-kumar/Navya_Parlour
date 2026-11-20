"use client";

import { Crown } from "lucide-react";
import { useBooking } from "@/components/booking/BookingProvider";

/** Slim top bar that highlights bridal makeup booking on every page. */
export function BridalBar() {
  const { openBooking } = useBooking();
  return (
    <div className="bg-ink text-white">
      <div className="container-x flex flex-col items-center justify-center gap-2 py-2.5 text-center sm:flex-row sm:gap-5">
        <p className="flex items-center gap-2 text-sm font-medium">
          <Crown className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
          <span>
            <strong className="font-semibold tracking-wide text-gold">BRIDAL MAKEUP</strong>
            <span className="text-white/90"> — look radiant on your wedding day</span>
          </span>
        </p>
        <button
          type="button"
          onClick={() => openBooking({ service: "Bridal Makeup" })}
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-gold px-5 text-sm font-bold tracking-wide text-ink transition-transform hover:-translate-y-0.5 hover:bg-white"
        >
          Book Bridal Makeup
        </button>
      </div>
    </div>
  );
}
