import { salon } from "@/data/salon";
import type { Metadata } from "next";
import { PolicyPage } from "@/components/common/PolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${salon.name} handles the information you share through this website.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function Page() {
  return (
    <PolicyPage
      title="Privacy Policy"
      intro="We keep this simple: this website does not run a server or database of its own."
      sections={[
        {
          heading: "What this website collects",
          body: [
            "This website does not store your details. The booking and feedback forms only prepare a WhatsApp message on your device.",
            "Nothing is sent to us until you press send inside WhatsApp yourself.",
          ],
        },
        {
          heading: "Information you share on WhatsApp or by phone",
          body: [
            "When you message or call the salon, we receive the details you choose to share, such as your name, service, preferred date and time, and location for home service.",
            "We use this only to respond to your enquiry, arrange your appointment and improve our service.",
          ],
        },
        {
          heading: "Third-party services",
          body: [
            "Opening WhatsApp, Google Maps or a phone call hands over to those services, which have their own privacy policies.",
          ],
        },
        {
          heading: "Contact",
          body: ["For any privacy question, message the salon on WhatsApp or call the number shown on the Contact page."],
        },
      ]}
    />
  );
}
