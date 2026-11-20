"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ImagePlus } from "lucide-react";
import { galleryCategories, galleryImages } from "@/data/gallery";
import { WhatsAppButton } from "@/components/booking/WhatsAppButton";
import { cn } from "@/lib/utils";

export function GalleryGrid() {
  const [category, setCategory] = useState<string>("all");
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const items = useMemo(
    () => galleryImages.filter((g) => category === "all" || g.category === category),
    [category],
  );

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (d: number) => setActive((a) => (a === null ? a : (a + d + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (active === null) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [active, close, step]);

  const tabs = [{ id: "all", label: "All" }, ...galleryCategories];
  const current = active !== null ? items[active] : null;

  return (
    <MotionConfig reducedMotion="user">
    <div>
      <div role="group" aria-label="Gallery categories" className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            aria-pressed={category === t.id}
            onClick={() => setCategory(t.id)}
            className={cn(
              "min-h-11 shrink-0 rounded-full border px-4 text-sm font-medium transition-colors",
              category === t.id ? "border-rose-dark bg-rose-dark text-white" : "border-gold/40 bg-white hover:bg-blush",
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      {items.length === 0 ? (
        <div className="card mx-auto max-w-xl p-8 text-center">
          <ImagePlus className="mx-auto h-10 w-10 text-gold" aria-hidden="true" />
          <h3 className="mt-3 text-xl font-semibold">Real results coming soon</h3>
          <p className="mt-2 text-sm text-ink-soft">
            To keep things honest, this category only shows genuine before &amp; after photos from the salon,
            shared with client consent. None have been added yet.
          </p>
          <WhatsAppButton mode="enquiry" topic="Before & After results" label="Ask on WhatsApp" variant="wa" className="mt-5" />
        </div>
      ) : (
        <motion.ul layout className="columns-2 gap-3 sm:gap-4 lg:columns-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {items.map((g, i) => (
              <motion.li
                layout
                key={g.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="mb-3 break-inside-avoid sm:mb-4"
              >
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Open image: ${g.alt}`}
                  className="group relative block w-full overflow-hidden rounded-2xl"
                >
                  <Image
                    src={g.src}
                    alt={g.alt}
                    width={600}
                    height={i % 3 === 0 ? 780 : i % 3 === 1 ? 600 : 680}
                    sizes="(min-width:1024px) 24rem, 50vw"
                    priority={i < 2}
                    className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/25" aria-hidden="true" />
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      )}

      <AnimatePresence>
        {current && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(e) => e.target === e.currentTarget && close()}
          >
            <button ref={closeRef} type="button" onClick={close} aria-label="Close preview" className="absolute right-3 top-3 grid h-12 w-12 place-items-center rounded-full bg-white/15 text-white hover:bg-white/30">
              <X className="h-6 w-6" />
            </button>
            <button type="button" onClick={() => step(-1)} aria-label="Previous image" className="absolute left-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white hover:bg-white/30">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button type="button" onClick={() => step(1)} aria-label="Next image" className="absolute right-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white hover:bg-white/30">
              <ChevronRight className="h-6 w-6" />
            </button>
            <motion.figure key={current.id} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="relative max-h-full max-w-4xl">
              <Image src={current.src} alt={current.alt} width={1200} height={1200} sizes="90vw" className="max-h-[80dvh] w-auto rounded-xl object-contain" />
              <figcaption className="mt-3 text-center text-sm text-white/80">{current.alt}</figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </MotionConfig>
  );
}
