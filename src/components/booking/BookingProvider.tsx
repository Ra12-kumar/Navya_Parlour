"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import dynamic from "next/dynamic";
import type { VisitType } from "@/lib/whatsapp";

// The booking dialog (with the form + validation libraries) is loaded only when
// it is first needed, keeping them out of every page's initial JavaScript.
const loadDialog = () => import("./BookingDialog").then((m) => m.BookingDialog);
const BookingDialog = dynamic(loadDialog, { ssr: false });

export interface BookingPreset {
  service?: string;
  visitType?: VisitType;
}

interface Ctx {
  openBooking: (preset?: BookingPreset) => void;
}

const BookingContext = createContext<Ctx | null>(null);

export function useBooking(): Ctx {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used inside BookingProvider");
  return ctx;
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [preset, setPreset] = useState<BookingPreset | null>(null);
  const [mounted, setMounted] = useState(false);

  const openBooking = useCallback((p?: BookingPreset) => {
    setMounted(true);
    setPreset(p ?? {});
  }, []);
  const closeBooking = useCallback(() => setPreset(null), []);
  const value = useMemo(() => ({ openBooking }), [openBooking]);

  // Warm the dialog chunk as soon as the visitor interacts, so the first
  // "Book Now" tap feels instant without slowing the initial page load.
  useEffect(() => {
    const warm = () => {
      void loadDialog();
      cleanup();
    };
    const events = ["pointerdown", "keydown", "scroll", "touchstart"] as const;
    const cleanup = () => events.forEach((e) => window.removeEventListener(e, warm));
    events.forEach((e) => window.addEventListener(e, warm, { passive: true, once: true }));
    return cleanup;
  }, []);

  return (
    <BookingContext.Provider value={value}>
      {children}
      {mounted && <BookingDialog preset={preset} onClose={closeBooking} />}
    </BookingContext.Provider>
  );
}
