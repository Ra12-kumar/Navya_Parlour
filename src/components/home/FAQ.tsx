import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/testimonials";
import { SectionHeading } from "@/components/common/SectionHeading";

export function FAQ() {
  return (
    <section className="section-pad bg-petals" aria-labelledby="faq-title">
      <div className="container-x max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
        <span id="faq-title" className="sr-only">Frequently asked questions</span>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="card group p-0 open:shadow-md">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-3 px-5 py-3 font-medium">
                {f.q}
                <ChevronDown className="h-5 w-5 shrink-0 text-rose-dark transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
