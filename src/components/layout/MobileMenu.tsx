"use client";

import Link from "next/link";
import { navLinks } from "@/data/salon";
import { WhatsAppButton } from "@/components/booking/WhatsAppButton";
import { CallButton } from "@/components/booking/CallButton";
import { cn } from "@/lib/utils";

/** Collapsible mobile navigation (CSS height transition, no animation library). */
export function MobileMenu({ open, onClose, pathname }: { open: boolean; onClose: () => void; pathname: string }) {
  return (
    <div
      id="mobile-menu"
      aria-hidden={!open}
      inert={!open}
      className={cn(
        "grid bg-cream transition-[grid-template-rows,opacity] duration-300 ease-out xl:hidden",
        open ? "grid-rows-[1fr] border-t border-gold/30 opacity-100" : "grid-rows-[0fr] opacity-0",
      )}
    >
      <div className="min-h-0 overflow-hidden">
        <div className="container-x max-h-[calc(100dvh-4rem)] overflow-y-auto py-4">
          <ul className="grid grid-cols-1 sm:grid-cols-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={onClose}
                  aria-current={l.href === pathname ? "page" : undefined}
                  className={cn(
                    "flex min-h-12 items-center border-b border-blush-deep px-1 text-base font-medium",
                    l.href === pathname ? "text-rose-dark" : "text-ink",
                  )}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <WhatsAppButton mode="enquiry" label="Book on WhatsApp" variant="wa" />
            <CallButton label="Call Us for Appointments" />
          </div>
        </div>
      </div>
    </div>
  );
}
