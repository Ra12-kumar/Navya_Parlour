import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  as: Tag = "h2",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <div className={cn("mb-10 max-w-2xl", align === "center" ? "mx-auto text-center" : "", className)}>
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">{eyebrow}</p>
      )}
      <Tag className="fluid-h2 font-semibold">{title}</Tag>
      <div className={cn("mt-4 flex items-center gap-2", align === "center" && "justify-center")} aria-hidden="true">
        <span className="gold-rule" />
        <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
        <span className="gold-rule" />
      </div>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-ink-soft">{subtitle}</p>}
    </div>
  );
}
