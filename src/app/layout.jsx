import { Outfit, Playfair_Display } from "next/font/google";
import { SEO, SITE_URL, CONTACT } from "@/lib/constants";
import { getPersonSchema, getWebsiteSchema } from "@/lib/schemas";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { PropertyModalProvider } from "@/components/PropertyModalProvider";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO.title,
    template: `%s | ${CONTACT.name} RE/MAX`,
  },
  description: SEO.description,
  keywords: SEO.keywords,
  authors: [{ name: CONTACT.name }],
  creator: CONTACT.name,
  publisher: "RE/MAX Integral",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    title: SEO.title,
    description: SEO.description,
    siteName: `${CONTACT.name} - RE/MAX Integral`,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${CONTACT.name} - Asesora Inmobiliaria RE/MAX`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    // google: "tu-verification-code", ← Agrega tu código de Google Search Console
  },
};

export const viewport = {
  themeColor: "#0A1128",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${outfit.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getPersonSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebsiteSchema()),
          }}
        />
      </head>
      <body className="font-sans">
        <PropertyModalProvider>
          <div className="min-h-screen flex flex-col overflow-x-hidden text-remax-navy">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <WhatsAppButton />
          </div>
        </PropertyModalProvider>
      </body>
    </html>
  );
}
