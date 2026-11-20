import { PageHero } from "./PageHero";

export interface PolicySection {
  heading: string;
  body: string[];
}

export function PolicyPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: PolicySection[];
}) {
  return (
    <>
      <PageHero eyebrow="Policies" title={title} subtitle={intro} />
      <article className="section-pad">
        <div className="container-x max-w-3xl space-y-8">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-2xl font-semibold">{s.heading}</h2>
              <div className="mt-2 space-y-3 text-ink-soft">
                {s.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </section>
          ))}
          <p className="rounded-2xl border border-dashed border-gold/60 p-4 text-sm text-ink-soft">
            This is a general template written for the website. The salon should review it and adapt it to its
            actual practices (and seek legal advice if needed) before relying on it.
          </p>
        </div>
      </article>
    </>
  );
}
