import { z } from "zod";

// Zod otherwise probes for eval() (JIT) at startup. Our strict Content-Security-Policy
// forbids eval, so disable the JIT path up-front instead of triggering a CSP violation.
z.config({ jitless: true });

export const bookingSchema = z
  .object({
    name: z.string().trim().min(2, "Please enter your name").max(60, "Name is too long"),
    service: z.string().trim().min(2, "Please enter the service you want").max(120),
    date: z.string().min(1, "Please choose a preferred date"),
    time: z.string().min(1, "Please choose a preferred time"),
    visitType: z.enum(["Salon Visit", "Home Service"], { message: "Please choose salon or home" }),
    location: z.string().trim().max(160).optional(),
  })
  .refine((v) => v.visitType !== "Home Service" || (v.location && v.location.trim().length >= 3), {
    path: ["location"],
    message: "Please share your area for home service",
  });

export type BookingFormValues = z.infer<typeof bookingSchema>;
