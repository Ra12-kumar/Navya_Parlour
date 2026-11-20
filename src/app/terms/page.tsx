import { salon } from "@/data/salon";
import type { Metadata } from "next";
import { PolicyPage } from "@/components/common/PolicyPage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms for using the ${salon.name} website and booking services.`,
  alternates: { canonical: "/terms" },
};

export default function Page() {
  return (
    <PolicyPage
      title="Terms & Conditions"
      intro="Please read these terms before booking a service."
      sections={[
        {
          heading: "Bookings are enquiries",
          body: [
            "Submitting a booking request on this website opens a WhatsApp message to the salon. It is an enquiry only. An appointment is confirmed only when the salon replies and confirms the date, time and price.",
          ],
        },
        {
          heading: "Prices",
          body: [
            "Prices on this website are indicative starting prices. Final prices depend on the service, hair length, products used and, for home services, location and any travel charges. The salon confirms the price before the service.",
          ],
        },
        {
          heading: "Offers",
          body: [
            "Offers apply only as described in their terms, may apply to selected services only and may be changed or withdrawn by the salon. Free services cannot be exchanged for cash.",
          ],
        },
        {
          heading: "Home services",
          body: [
            "Home services depend on availability and location. Please provide a suitable, clean space and accurate address details.",
          ],
        },
        {
          heading: "Health and allergies",
          body: [
            "Please tell us about allergies, skin conditions or medical concerns before any treatment so we can advise you suitably.",
          ],
        },
        {
          heading: "Images and brands",
          body: [
            "Images on this website may be stock photography used for illustration. Brand names belong to their owners and do not imply any partnership or endorsement.",
          ],
        },
      ]}
    />
  );
}
