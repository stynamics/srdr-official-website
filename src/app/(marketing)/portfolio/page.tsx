import { Metadata } from 'next';
import PortfolioGalleryPageClient from '@/components/PortfolioPageClient';

export const metadata: Metadata = {
  title: 'Our Project Portfolio | SR DreamSpace Realty Bangalore',
  description: 'Explore our masterpieces across Bangalore. From luxury independent villas to high-yield commercial complexes and stunning interior transformations.',
  alternates: {
    canonical: 'https://srdreamspacerealty.com/portfolio',
  },
  openGraph: {
    title: 'Our Project Portfolio | SR DreamSpace Realty Bangalore',
    description: 'Explore our masterpieces across Bangalore. From luxury independent villas to high-yield commercial complexes.',
    url: 'https://srdreamspacerealty.com/portfolio',
    siteName: 'SR DreamSpace Realty',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1541888088320-cf5f9f6874eb?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'SR DreamSpace Realty Portfolio',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SR DreamSpace Realty Portfolio',
    description: 'Explore our delivered masterpieces in Bangalore.',
    images: ['https://images.unsplash.com/photo-1541888088320-cf5f9f6874eb?q=80&w=1200&auto=format&fit=crop'],
  },
};

export default function PortfolioPage() {
    return <PortfolioGalleryPageClient />;
}
