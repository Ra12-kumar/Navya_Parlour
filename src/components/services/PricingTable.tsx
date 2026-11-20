"use client";

import { useMemo, useState } from "react";
import { priceFilters, priceGroups, priceItems, type PriceFilterId } from "@/data/pricing";
import { salon } from "@/data/salon";
import { WhatsAppButton } from "@/components/booking/WhatsAppButton";
import { cn, formatPrice } from "@/lib/utils";

export function PricingTable() {
  const [filter, setFilter] = useState<PriceFilterId>("all");
  const [group, setGroup] = useState("All");

  const rows = useMemo(
    () =>
      priceItems.filter((i) => {
        const f =
          filter === "all" ||
          (filter === "home" ? i.homePrice !== null : i.audience.includes(filter));
        return f && (group === "All" || i.group === group);
      }),
    [filter, group],
  );

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2" role="group" aria-label="Filter by audience">
        {priceFilters.map((f) => (
          <button
            key={f.id}
            type="button"
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
            className={cn(
              "min-h-11 rounded-full border px-4 text-sm font-medium transition-colors",
              filter === f.id ? "border-rose-dark bg-rose-dark text-white" : "border-gold/40 bg-white hover:bg-blush",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="-mx-4 mb-6 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0" role="group" aria-label="Filter by category">
        {priceGroups.map((g) => (
          <button
            key={g}
            type="button"
            aria-pressed={group === g}
            onClick={() => setGroup(g)}
            className={cn(
              "min-h-10 shrink-0 rounded-full px-3 text-xs font-medium transition-colors",
              group === g ? "bg-ink text-white" : "bg-blush text-ink hover:bg-blush-deep",
            )}
          >
            {g}
          </button>
        ))}
      </div>

      <div className="card">
        <div className="relative w-full max-w-full overflow-x-auto">
        <table className="w-full min-w-[40rem] text-left text-sm">
          <caption className="sr-only">Indicative service price list</caption>
          <thead className="bg-blush text-xs uppercase tracking-wider text-ink-soft">
            <tr>
              <th scope="col" className="px-4 py-3">Service</th>
              <th scope="col" className="px-4 py-3 text-right">Salon</th>
              <th scope="col" className="px-4 py-3 text-right">Home service</th>
              <th scope="col" className="px-4 py-3"><span className="sr-only">Book</span></th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 && (
              <tr><td colSpan={4} className="px-4 py-8 text-center text-ink-soft">No services in this selection.</td></tr>
            )}
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-blush-deep/60 align-top">
                <td className="px-4 py-4">
                  <p className="font-medium">{r.name}</p>
                  <p className="mt-0.5 max-w-sm text-xs text-ink-soft">{r.description}</p>
                  <p className="mt-1 text-[0.65rem] uppercase tracking-wider text-gold-dark">{r.group}</p>
                </td>
                <td className="px-4 py-4 text-right">
                  {r.discountPrice ? (
                    <>
                      <span className="mr-1 text-xs text-ink-soft line-through">{formatPrice(r.salonPrice)}</span>
                      <span className="font-semibold text-rose-dark">{formatPrice(r.discountPrice)}</span>
                    </>
                  ) : (
                    <span className="font-semibold">{formatPrice(r.salonPrice)}</span>
                  )}
                </td>
                <td className="px-4 py-4 text-right">
                  {r.homePrice !== null ? (
                    <span className="font-semibold">{formatPrice(r.homePrice)}</span>
                  ) : (
                    <span className="text-xs text-ink-soft">Salon only</span>
                  )}
                </td>
                <td className="px-4 py-4 text-right">
                  <WhatsAppButton service={r.name} size="sm" label="Book Now" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
      <p className="mt-4 text-xs text-ink-soft">
        {salon.priceNote} Home service prices may include travel charges depending on your location.
      </p>
    </div>
  );
}
