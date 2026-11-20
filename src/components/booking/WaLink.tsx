import type { ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

/** Plain WhatsApp link styled as a button (works in server components). */
export function WaLink({
  href,
  children,
  variant = "wa",
  size = "md",
  className,
  icon = true,
}: {
  href: string;
  children: ReactNode;
  variant?: "wa" | "primary" | "outline" | "light";
  size?: "md" | "sm";
  className?: string;
  icon?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("btn", `btn-${variant}`, size === "sm" && "btn-sm", className)}
    >
      {icon && <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />}
      {children}
      <span className="sr-only"> (opens WhatsApp)</span>
    </a>
  );
}
