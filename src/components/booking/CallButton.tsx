import { Phone } from "lucide-react";
import { salon } from "@/data/salon";
import { cn } from "@/lib/utils";

export function CallButton({
  className,
  label = "Call Now",
  variant = "outline",
  showNumber = false,
}: {
  className?: string;
  label?: string;
  variant?: "outline" | "light" | "primary";
  showNumber?: boolean;
}) {
  return (
    <a
      href={salon.telHref}
      className={cn("btn", `btn-${variant}`, className)}
    >
      <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
      {label}
      {showNumber && <span className="font-normal opacity-90">· {salon.phoneDisplay}</span>}
    </a>
  );
}
