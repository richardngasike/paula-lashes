import { Cormorant_Garamond, Jost } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { site } from "@/data/site";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Paula Lashes | Eyelash & Nail Salon in Ruaka, Kenya",
    template: "%s | Paula Lashes",
  },
  description: site.description,
  keywords: [
    "lash extensions Ruaka",
    "eyelash salon Ruaka",
    "nail salon Ruaka",
    "lash clusters Nairobi",
    "acrylic nails Ruaka",
    "gel polish Kiambu",
    "outcall lashes Nairobi",
    "Paula Lashes",
  ],
  openGraph: {
    title: "Paula Lashes | Eyelash & Nail Salon in Ruaka",
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_KE",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport = {
  themeColor: "#F26A3D",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: site.name,
  description: site.description,
  telephone: site.phone,
  email: site.email,
  url: site.url,
  image: `${site.url}/og-image.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ruaka",
    addressRegion: "Kiambu",
    addressCountry: "KE",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "19:00",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
