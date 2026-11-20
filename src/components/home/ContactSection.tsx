import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { fullAddress, salon } from "@/data/salon";
import { SectionHeading } from "@/components/common/SectionHeading";
import { WhatsAppButton } from "@/components/booking/WhatsAppButton";
import { CallButton } from "@/components/booking/CallButton";
import { LazyMap } from "@/components/common/LazyMap";

export function ContactSection({ asPage = false }: { asPage?: boolean }) {
  return (
    <section className="section-pad" aria-labelledby="contact-title" id="contact">
      <div className="container-x">
        {!asPage && (
          <SectionHeading eyebrow="Visit Us" title="Contact & Location" subtitle="Message us on WhatsApp or call to book your appointment." />
        )}
        <span id="contact-title" className="sr-only">Contact and location</span>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-5">
            <div className="card p-6">
              <h3 className="flex items-center gap-2 text-xl font-semibold"><MapPin className="h-5 w-5 text-rose-dark" aria-hidden="true" /> Salon address</h3>
              <address className="mt-2 not-italic text-ink-soft">{fullAddress}</address>
              <p className="mt-2 text-xs text-ink-soft">{salon.locationNote}</p>
              {salon.mapDirectionsUrl && (
                <a href={salon.mapDirectionsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-4">
                  <Navigation className="h-4 w-4" aria-hidden="true" /> Get Directions
                </a>
              )}
            </div>

            <div className="card p-6">
              <h3 className="flex items-center gap-2 text-xl font-semibold"><Clock className="h-5 w-5 text-rose-dark" aria-hidden="true" /> Business hours</h3>
              <ul className="mt-2 space-y-1 text-sm text-ink-soft">
                {salon.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4"><span>{h.day}</span><span>{h.time}</span></li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-ink-soft">{salon.hoursNote}</p>
            </div>

            <div className="card p-6">
              <h3 className="flex items-center gap-2 text-xl font-semibold"><Phone className="h-5 w-5 text-rose-dark" aria-hidden="true" /> Call Us for Appointments</h3>
              <p className="mt-2 text-lg font-semibold">{salon.phoneDisplay}</p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <CallButton label="Call Now" variant="primary" />
                <WhatsAppButton mode="enquiry" label="Book on WhatsApp" variant="wa" />
              </div>
            </div>
          </div>

          <div className="card flex min-h-80 overflow-hidden">
            {salon.mapEmbedUrl ? (
              <LazyMap src={salon.mapEmbedUrl} title={`Map showing the location of ${salon.name}`} />
            ) : (
              <div className="m-auto max-w-xs p-8 text-center">
                <MapPin className="mx-auto h-10 w-10 text-gold" aria-hidden="true" />
                <p className="mt-3 font-heading text-xl font-semibold">Map coming soon</p>
                <p className="mt-2 text-sm text-ink-soft">
                  The Google Map will appear here once the salon&apos;s location is confirmed.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
