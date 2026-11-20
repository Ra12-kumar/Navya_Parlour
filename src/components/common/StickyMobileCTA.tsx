import { Phone } from "lucide-react";
import { salon } from "@/data/salon";
import { WhatsAppButton } from "@/components/booking/WhatsAppButton";

/** Sticky booking bar for small screens. */
export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-[1fr_auto] gap-2 border-t border-gold/30 bg-cream/95 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur lg:hidden">
      <WhatsAppButton label="Book Appointment" variant="primary" />
      <a href={salon.telHref} aria-label="Call the salon" className="btn btn-outline px-4">
        <Phone className="h-5 w-5" aria-hidden="true" />
      </a>
    </div>
  );
}
