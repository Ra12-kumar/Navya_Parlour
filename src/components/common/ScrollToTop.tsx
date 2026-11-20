"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;
  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0 })}
      className="fixed bottom-[calc(9rem+env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-40 grid h-11 w-11 place-items-center rounded-full border border-gold bg-white text-ink shadow-lg hover:bg-blush lg:bottom-24 lg:right-7"
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
