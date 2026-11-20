"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";

/**
 * Google Maps embed that is only loaded when it is about to scroll into view.
 * Keeps ~160 KB of third-party JavaScript (and any contact with Google) off the
 * initial page load.
 */
export function LazyMap({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      const t = setTimeout(() => setLoad(true), 0);
      return () => clearTimeout(t);
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative h-full min-h-80 w-full">
      {load ? (
        <iframe
          title={title}
          src={src}
          referrerPolicy="strict-origin-when-cross-origin"
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          className="absolute inset-0 h-full w-full border-0"
          allowFullScreen
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center bg-blush/50 text-center">
          <div className="p-6">
            <MapPin className="mx-auto h-9 w-9 text-gold-dark" aria-hidden="true" />
            <p className="mt-2 text-sm text-ink-soft">Loading map…</p>
          </div>
        </div>
      )}
    </div>
  );
}
