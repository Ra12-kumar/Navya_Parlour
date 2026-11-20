"use client";

import { useState, type ReactNode } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Info, MessageCircle } from "lucide-react";
import { bookingSchema, type BookingFormValues } from "@/lib/validation";
import { bookingUrl, openWhatsApp } from "@/lib/whatsapp";
import type { BookingPreset } from "./BookingProvider";

function Field({ label, error, children, id }: { label: string; error?: string; children: ReactNode; id: string }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-err`} role="alert" className="mt-1 text-xs text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

export function BookingForm({ preset, onDone }: { preset: BookingPreset; onDone?: () => void }) {
  const [confirming, setConfirming] = useState<BookingFormValues | null>(null);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      service: preset.service ?? "",
      date: "",
      time: "",
      visitType: preset.visitType,
      location: "",
    },
  });
  const visitType = useWatch({ control, name: "visitType" });
  const today = new Date().toISOString().split("T")[0];

  if (confirming) {
    return (
      <div className="mt-5" aria-live="polite">
        <div className="rounded-2xl border border-gold/40 bg-white p-4 text-sm">
          <p className="flex items-start gap-2 font-medium">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-rose-dark" aria-hidden="true" />
            This is an enquiry, not a confirmed booking.
          </p>
          <p className="mt-2 text-ink-soft">
            WhatsApp will open with your details. Review and press send there. The salon will reply with
            availability and pricing — your appointment is confirmed only when the salon says so.
          </p>
          <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1">
            <dt className="text-ink-soft">Name</dt>
            <dd>{confirming.name}</dd>
            <dt className="text-ink-soft">Service</dt>
            <dd>{confirming.service}</dd>
            <dt className="text-ink-soft">Date</dt>
            <dd>{confirming.date}</dd>
            <dt className="text-ink-soft">Time</dt>
            <dd>{confirming.time}</dd>
            <dt className="text-ink-soft">Type</dt>
            <dd>{confirming.visitType}</dd>
            {confirming.location && (
              <>
                <dt className="text-ink-soft">Location</dt>
                <dd>{confirming.location}</dd>
              </>
            )}
          </dl>
        </div>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            className="btn btn-wa flex-1"
            onClick={() => {
              openWhatsApp(bookingUrl(confirming));
              onDone?.();
            }}
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" /> Continue to WhatsApp
          </button>
          <button type="button" className="btn btn-outline flex-1" onClick={() => setConfirming(null)}>
            Edit details
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="mt-5 space-y-4" noValidate onSubmit={handleSubmit((v) => setConfirming(v))}>
      <Field id="b-name" label="Your name" error={errors.name?.message}>
        <input
          id="b-name"
          className="input"
          autoComplete="name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "b-name-err" : undefined}
          {...register("name")}
        />
      </Field>
      <Field id="b-service" label="Service" error={errors.service?.message}>
        <input
          id="b-service"
          className="input"
          placeholder="e.g. Gold Facial"
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? "b-service-err" : undefined}
          {...register("service")}
        />
      </Field>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field id="b-date" label="Preferred date" error={errors.date?.message}>
          <input
            id="b-date"
            type="date"
            min={today}
            className="input"
            aria-invalid={!!errors.date}
            aria-describedby={errors.date ? "b-date-err" : undefined}
            {...register("date")}
          />
        </Field>
        <Field id="b-time" label="Preferred time" error={errors.time?.message}>
          <input
            id="b-time"
            type="time"
            className="input"
            aria-invalid={!!errors.time}
            aria-describedby={errors.time ? "b-time-err" : undefined}
            {...register("time")}
          />
        </Field>
      </div>
      <Field id="b-visit" label="Home service or salon visit" error={errors.visitType?.message}>
        <select
          id="b-visit"
          className="input"
          defaultValue={preset.visitType ?? ""}
          aria-invalid={!!errors.visitType}
          aria-describedby={errors.visitType ? "b-visit-err" : undefined}
          {...register("visitType")}
        >
          <option value="" disabled>
            Select…
          </option>
          <option value="Salon Visit">Salon Visit</option>
          <option value="Home Service">Home Service</option>
        </select>
      </Field>
      {visitType === "Home Service" && (
        <Field id="b-loc" label="Your area / location" error={errors.location?.message}>
          <input
            id="b-loc"
            className="input"
            placeholder="Area or locality for home visit"
            aria-invalid={!!errors.location}
            aria-describedby={errors.location ? "b-loc-err" : undefined}
            {...register("location")}
          />
        </Field>
      )}
      <button type="submit" className="btn btn-primary w-full">
        Review enquiry
      </button>
      <p className="text-center text-xs text-ink-soft">
        Prices shown on the website are indicative until the salon confirms.
      </p>
    </form>
  );
}
