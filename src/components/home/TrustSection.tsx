import { BadgeCheck, CalendarX, FileText, Home, MessageSquareHeart, ShieldCheck, Tag, Package } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";

const items = [
  { icon: Tag, title: "Transparent pricing", text: "Indicative prices are listed openly and confirmed before you book." },
  { icon: FileText, title: "Clear service descriptions", text: "Know what each service includes and how long it takes." },
  { icon: BadgeCheck, title: "Professional standards", text: "Careful, respectful service from start to finish." },
  { icon: ShieldCheck, title: "Hygiene-focused practices", text: "Clean tools and a tidy workspace for every client." },
  { icon: MessageSquareHeart, title: "Customer feedback", text: "We welcome your feedback — message us on WhatsApp any time." },
  { icon: Home, title: "Home service details", text: "Location, timing and any travel charges are agreed on WhatsApp first." },
  { icon: CalendarX, title: "Clear cancellation policy", text: "Straightforward rescheduling and cancellation guidance." },
  { icon: Package, title: "Genuine product information", text: "Ask us which products are used for your service." },
];

export function TrustSection() {
  return (
    <section className="section-pad" aria-labelledby="trust-title">
      <div className="container-x">
        <SectionHeading eyebrow="Trust & Safety" title="Your Beauty, Your Comfort, Our Priority" subtitle="Honest information so you can book with confidence." />
        <span id="trust-title" className="sr-only">Trust and safety</span>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="list-none">
              <Reveal delay={(i % 4) * 0.05} className="card h-full p-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-blush text-rose-dark">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-3 font-body text-base font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-ink-soft">{text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-sm text-ink-soft">
          Read our <Link href="/cancellation-policy" className="inline-flex min-h-11 items-center font-medium text-rose-dark underline">cancellation &amp; refund policy</Link>.
        </p>
      </div>
    </section>
  );
}
