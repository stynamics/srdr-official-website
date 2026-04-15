import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";

// Body font: clean, modern, highly readable — ideal for real estate
const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Heading font: premium serif for the Royal Heritage aesthetic
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SR DreamSpace Realty | Premium Construction in Bangalore",
  description: "Transparent pricing, guaranteed timelines, and premium quality construction services in Bangalore.",
  metadataBase: new URL('https://srdreamspacerealty.com'),
  openGraph: {
    title: 'SR DreamSpace Realty',
    description: 'Transparent pricing, guaranteed timelines, and premium quality construction services in Bangalore.',
    url: 'https://srdreamspacerealty.com',
    siteName: 'SR DreamSpace Realty',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1541888088320-cf5f9f6874eb?q=80&w=1200&auto=format&fit=crop', // Fallback standard hero
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SR DreamSpace Realty',
    description: 'Leading Residential & Commercial Construction in Bangalore.',
    images: ['https://images.unsplash.com/photo-1541888088320-cf5f9f6874eb?q=80&w=1200&auto=format&fit=crop'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // TODO: Add GA4 after deploying to Hostinger with actual domain name
  // Import `Script` from "next/script" and uncomment the GA4 block below
  // const GA_MEASUREMENT_ID = "G-YOUR_REAL_ID";

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${jakartaSans.variable} ${playfair.variable} antialiased font-sans flex flex-col min-h-screen bg-slate-50`}
      >
        {children}
        {/* 
          Google Analytics 4 — Uncomment after Hostinger deployment with real domain:
          
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname });
            `}
          </Script>
        */}
      </body>
    </html>
  );
}
