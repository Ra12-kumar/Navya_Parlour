import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { fullAddress, navLinks, salon } from "@/data/salon";
import { WhatsAppButton } from "@/components/booking/WhatsAppButton";

const iconPaths: Record<string, string> = {
  instagram: "M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.3-3.1a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z",
  facebook: "M13.5 22v-8h2.7l.5-3.2h-3.2V8.7c0-.9.4-1.7 1.8-1.7h1.5V4.2S15.5 4 14.2 4C11.7 4 10 5.5 10 8.4v2.4H7.3V14H10v8h3.5Z",
  youtube: "M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.200 0-7.800.4A2.500 2.500 0 0 0 2.400 7.200C2 8.800 2 12 2 12s0 3.200.4 4.800a2.500 2.500 0 0 0 1.800 1.800C5.800 19 12 19 12 19s6.200 0 7.800-.4a2.500 2.500 0 0 0 1.800-1.800C22 15.200 22 12 22 12s0-3.200-.4-4.800ZM10 15V9l5.200 3-5.200 3Z",
};

export function Footer() {
  const socials = salon.social.filter((s) => s.url);
  return (
    <footer className="mt-0 border-t-4 border-gold bg-ink text-white/80">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo tone="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">{salon.description}</p>
          {socials.length > 0 && (
            <ul className="mt-4 flex gap-2">
              {socials.map((s) => {
                                return (
                  <li key={s.id}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="grid h-11 w-11 place-items-center rounded-full border border-white/30 hover:bg-white/10"
                    >
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true"><path d={iconPaths[s.id]} /></svg>
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div>
          <h2 className="font-heading text-lg text-white">Explore</h2>
          <ul className="mt-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-flex min-h-11 items-center hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-lg text-white">Policies</h2>
          <ul className="mt-3 text-sm">
            <li><Link href="/privacy-policy" className="inline-flex min-h-11 items-center hover:text-gold">Privacy Policy</Link></li>
            <li><Link href="/terms" className="inline-flex min-h-11 items-center hover:text-gold">Terms &amp; Conditions</Link></li>
            <li><Link href="/cancellation-policy" className="inline-flex min-h-11 items-center hover:text-gold">Cancellation &amp; Refund Policy</Link></li>
          </ul>
          <h2 className="mt-6 font-heading text-lg text-white">Hours</h2>
          <ul className="mt-3 space-y-1 text-sm">
            {salon.hours.map((h) => (
              <li key={h.day}>
                {h.day}: {h.time}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-lg text-white">Book with us</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <a href={salon.telHref} className="inline-flex min-h-11 items-center hover:text-gold">Call Us for Appointments: {salon.phoneDisplay}</a>
            </li>
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <span>{fullAddress}</span>
            </li>
          </ul>
          <WhatsAppButton mode="enquiry" label="Book on WhatsApp" variant="wa" className="mt-5 w-full sm:w-auto" />
        </div>
      </div>
      <div className="border-t border-white/10 py-5 pb-24 text-center text-xs text-white/60 lg:pb-5">
        <div className="container-x">
          © {new Date().getFullYear()} {salon.name}. Prices are indicative; bookings are enquiries until confirmed by the salon.
        </div>
      </div>
    </footer>
  );
}
