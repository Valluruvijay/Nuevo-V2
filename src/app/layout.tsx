import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { StructuredData } from "@/components/site/structured-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nuevo Supply Chain Solutions | Integrated 3PL, Warehousing & Logistics in India",
  description:
    "Nuevo Supply Chain Solutions is a leading Indian integrated logistics & 3PL company delivering warehousing, contract logistics, transportation, e-commerce fulfilment and end-to-end supply chain services across 28 states & 8,000+ pin codes. Offices in Hyderabad & Bengaluru.",
  keywords: [
    "supply chain India",
    "3PL services India",
    "warehousing India",
    "contract logistics",
    "logistics company India",
    "e-commerce fulfilment",
    "cold chain logistics",
    "freight management India",
    "Nuevo Supply Chain",
    "Hyderabad logistics",
    "Bengaluru logistics",
  ],
  authors: [{ name: "Nuevo Supply Chain Solutions Pvt. Ltd." }],
  metadataBase: new URL("https://nuevosc.in"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Nuevo Supply Chain Solutions | Integrated 3PL & Logistics in India",
    description:
      "End-to-end integrated logistics & supply chain solutions across India — warehousing, contract logistics, transportation, e-commerce fulfilment and more. Hyderabad & Bengaluru.",
    url: "https://nuevosc.in",
    siteName: "Nuevo Supply Chain Solutions",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/hero-warehouse.png",
        width: 1344,
        height: 768,
        alt: "Nuevo Supply Chain warehouse in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuevo Supply Chain Solutions",
    description: "Integrated 3PL, warehousing & logistics across India.",
    images: ["/hero-warehouse.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "logistics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${sora.variable} font-sans antialiased bg-background text-foreground`}
      >
        <StructuredData />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
