"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { navLinks, salon } from "@/data/salon";
import { WhatsAppButton } from "@/components/booking/WhatsAppButton";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent bg-cream/95 backdrop-blur transition-shadow",
        scrolled && "border-gold/30 shadow-sm",
      )}
    >
      <nav aria-label="Main" className="container-x flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link href="/" aria-label={salon.name} className="shrink-0">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-5 xl:flex">
          {navLinks.map((l) => {
            const active = l.href === pathname;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "inline-flex min-h-11 items-center text-[0.82rem] font-medium transition-colors hover:text-rose-dark",
                    active ? "text-rose-dark" : "text-ink",
                  )}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <WhatsAppButton label="Book Appointment" size="sm" className="hidden sm:inline-flex" icon={false} />
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-gold/50 text-ink xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      <MobileMenu open={open} onClose={() => setOpen(false)} pathname={pathname} />
    </header>
  );
}
