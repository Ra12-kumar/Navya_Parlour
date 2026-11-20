"use client";

import type { ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import { useBooking } from "./BookingProvider";
import { enquiryUrl, generalUrl, type VisitType } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type Variant = "wa" | "primary" | "outline" | "light";

interface Props {
  /** Opens the booking dialog (with confirmation) preset with this service */
  service?: string;
  visitType?: VisitType;
  /** "book" = booking dialog; "enquiry" = direct WhatsApp chat with a topic */
  mode?: "book" | "enquiry";
  /** Topic for direct enquiry mode; omit for a general greeting */
  topic?: string;
  label?: string;
  variant?: Variant;
  size?: "md" | "sm";
  icon?: boolean;
  className?: string;
  children?: ReactNode;
}

const variantClass: Record<Variant, string> = {
  wa: "btn-wa",
  primary: "btn-primary",
  outline: "btn-outline",
  light: "btn-light",
};

export function WhatsAppButton({
  service,
  visitType,
  mode = "book",
  topic,
  label = "Book Now",
  variant = "primary",
  size = "md",
  icon = true,
  className,
}: Props) {
  const { openBooking } = useBooking();
  const classes = cn("btn", variantClass[variant], size === "sm" && "btn-sm", className);

  if (mode === "enquiry") {
    const href = topic ? enquiryUrl(topic) : generalUrl();
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {icon && <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />}
        {label}
        <span className="sr-only"> (opens WhatsApp)</span>
      </a>
    );
  }

  return (
    <button type="button" className={classes} onClick={() => openBooking({ service, visitType })}>
      {icon && <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />}
      {label}
      {service && <span className="sr-only"> {service}</span>}
    </button>
  );
}
