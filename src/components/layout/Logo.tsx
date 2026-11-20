import { salon } from "@/data/salon";

export function LotusMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false">
      <circle cx="32" cy="32" r="31" fill="#F8E7EB" stroke="#C9A46A" strokeWidth="2" />
      <g fill="#D96C8A">
        <path d="M32 14c5 6 7 12 0 22-7-10-5-16 0-22z" />
        <path d="M32 36c-3-9-10-13-17-12 1 9 8 15 17 12z" opacity=".85" />
        <path d="M32 36c3-9 10-13 17-12-1 9-8 15-17 12z" opacity=".85" />
      </g>
      <path d="M18 42c9 6 19 6 28 0" fill="none" stroke="#C9A46A" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const main = tone === "light" ? "text-white" : "text-ink";
  return (
    <span className="flex items-center gap-2.5">
      <LotusMark />
      <span className="flex flex-col leading-none">
        <span className={`font-heading text-2xl font-semibold tracking-wide ${main}`}>
          {salon.shortName}
        </span>{" "}
        <span className={`mt-1 text-[0.62rem] font-medium uppercase tracking-[0.28em] ${tone === "light" ? "text-gold" : "text-gold-dark"}`}>
          {salon.logoSubtitle}
        </span>
      </span>
    </span>
  );
}
