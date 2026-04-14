import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SR DreamSpace Realty | Premium Construction in Bangalore",
  description: "Transparent pricing, guaranteed timelines, and premium quality construction services in Bangalore.",
  metadataBase: new URL('https://srdreamspace.com'),
  openGraph: {
    title: 'SR DreamSpace Realty',
    description: 'Transparent pricing, guaranteed timelines, and premium quality construction services in Bangalore.',
    url: 'https://srdreamspace.com',
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
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans flex flex-col min-h-screen bg-slate-50`}
      >
        {children}
      </body>
    </html>
  );
}
