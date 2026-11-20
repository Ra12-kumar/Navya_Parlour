import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Fade-up as the element scrolls into view. Pure CSS (scroll-driven animation,
 * progressive enhancement): browsers without support, reduced-motion users and
 * no-JS visitors simply see the content. Ships no JavaScript.
 * `delay` is accepted for API compatibility but not used.
 */
export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return <div className={cn("reveal", className)}>{children}</div>;
}
