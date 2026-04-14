import { HeroSection } from "@/components/sections/HeroSection";
import { PainPointsSection } from "@/components/sections/PainPointsSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { ServicesGridSection } from "@/components/sections/ServicesGridSection";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SR DreamSpace Realty | Premium Residential & Commercial Construction in Bangalore',
  description: 'Transparent pricing, guaranteed timelines, and premium quality construction services in Bangalore. Villa construction, commercial development, and turnkey interiors.',
  alternates: {
    canonical: 'https://srdreamspacerealty.com',
  },
  openGraph: {
    title: 'SR DreamSpace Realty | Premium Construction in Bangalore',
    description: 'Transparent pricing, guaranteed timelines, and premium quality construction services in Bangalore.',
    url: 'https://srdreamspacerealty.com',
    siteName: 'SR DreamSpace Realty',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1541888088320-cf5f9f6874eb?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'SR DreamSpace Realty Bangalore',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SR DreamSpace Realty | Premium Construction',
    description: 'Leading Residential & Commercial Construction in Bangalore.',
    images: ['https://images.unsplash.com/photo-1541888088320-cf5f9f6874eb?q=80&w=1200&auto=format&fit=crop'],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <PainPointsSection />
      <WhyChooseUsSection />
      <ServicesGridSection />
    </>
  );
}
