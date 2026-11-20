import { salon } from "@/data/salon";
import type { Metadata } from "next";
import { PolicyPage } from "@/components/common/PolicyPage";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy",
  description: `Rescheduling, cancellation and refund guidance for ${salon.name} appointments.`,
  alternates: { canonical: "/cancellation-policy" },
};

export default function Page() {
  return (
    <PolicyPage
      title="Cancellation & Refund Policy"
      intro="Plans change. Here is how rescheduling and cancellations work."
      sections={[
        {
          heading: "Rescheduling",
          body: [
            "Please message or call the salon as early as possible if you need to change your appointment. We will do our best to offer another suitable slot.",
          ],
        },
        {
          heading: "Cancellation",
          body: [
            "Please cancel in advance so that the time can be offered to another customer. Late cancellations or no-shows may affect future bookings. The exact notice period will be confirmed by the salon when you book.",
          ],
        },
        {
          heading: "Home service and bridal bookings",
          body: [
            "Because these bookings reserve a longer block of time (and travel for home visits), the salon may require advance notice or an advance payment. Any such terms are shared with you before the booking is confirmed.",
          ],
        },
        {
          heading: "Refunds",
          body: [
            "If you are unhappy with a service, please tell us right away so we can try to put it right. Any advance payment or refund is handled as agreed with the salon at the time of booking.",
          ],
        },
        {
          heading: "Online payments",
          body: ["This website does not take online payments. Payments are made directly to the salon."],
        },
      ]}
    />
  );
}
