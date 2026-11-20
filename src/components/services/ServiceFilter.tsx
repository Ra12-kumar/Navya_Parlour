"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { serviceCategories, services } from "@/data/services";
import { salon } from "@/data/salon";
import { ServiceCard } from "./ServiceCard";
import { Reveal } from "@/components/common/Reveal";
import { cn } from "@/lib/utils";

export function ServiceFilter() {
  const [category, setCategory] = useState<string>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return services.filter(
      (s) =>
        (category === "all" || s.category === category) &&
        (!q || s.name.toLowerCase().includes(q) || s.description.toLowerCase().includes(q)),
    );
  }, [category, query]);

  const tabs = [{ id: "all", label: "All" }, ...serviceCategories];

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div role="tablist" aria-label="Service categories" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 lg:mx-0 lg:flex-wrap lg:px-0">
          {tabs.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={category === t.id}
              type="button"
              onClick={() => setCategory(t.id)}
              className={cn(
                "min-h-11 shrink-0 rounded-full border px-4 text-sm font-medium transition-colors",
                category === t.id
                  ? "border-rose-dark bg-rose-dark text-white"
                  : "border-gold/40 bg-white text-ink hover:bg-blush",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="relative w-full lg:max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" aria-hidden="true" />
          <label htmlFor="service-search" className="sr-only">Search services</label>
          <input
            id="service-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services…"
            className="input pl-9"
          />
        </div>
      </div>

      <p className="sr-only" role="status">{filtered.length} services shown</p>

      {filtered.length === 0 ? (
        <p className="card p-8 text-center text-ink-soft">
          No services match your search. Try a different word or choose another category.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s, i) => (
            <Reveal key={s.id} delay={Math.min(i, 5) * 0.04}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      )}
      <p className="mt-6 text-center text-xs text-ink-soft">* {salon.priceNote}</p>
    </div>
  );
}
