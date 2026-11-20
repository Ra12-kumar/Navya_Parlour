import type { Metadata, Viewport } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { BridalBar } from "@/components/layout/BridalBar";
import { PromoBanner } from "@/components/home/PromoBanner";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookingProvider } from "@/components/booking/BookingProvider";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { StickyMobileCTA } from "@/components/common/StickyMobileCTA";
import { salon } from "@/data/salon";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(salon.siteUrl),
  title: {
    default: `${salon.name} | Premium Beauty Parlour & Home Beauty Services`,
    template: `%s | ${salon.name}`,
  },
  description: salon.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: salon.name,
    title: `${salon.name} | ${salon.tagline}`,
    description: salon.description,
    images: [{ url: "/images/hero.jpg", width: 1800, height: 1200, alt: "Bright, modern beauty salon interior" }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#FFF9F5",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

// Only verified business facts are included. Address is added once configured.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: salon.name,
  description: salon.description,
  url: salon.siteUrl,
  telephone: salon.telHref.replace("tel:", ""),
  image: `${salon.siteUrl}/images/hero.jpg`,
  address: {
    "@type": "PostalAddress",
    ...(salon.address.line ? { streetAddress: salon.address.line } : {}),
    addressLocality: "Darbhanga",
    addressRegion: salon.address.state,
    ...(salon.address.postalCode ? { postalCode: salon.address.postalCode } : {}),
    addressCountry: "IN",
  },
  areaServed: "Darbhanga, Bihar",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only z-[80] rounded bg-white px-4 py-2 focus:not-sr-only focus:fixed focus:left-2 focus:top-2"
        >
          Skip to content
        </a>
        <BookingProvider>
          <Navbar />
          <BridalBar />
          <PromoBanner />
          <main id="main" className="w-full min-w-0 flex-1">
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
          <ScrollToTop />
          <StickyMobileCTA />
        </BookingProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
