import { Metadata } from 'next';
import AboutPageClient from '@/components/AboutPageClient';

export const metadata: Metadata = {
  title: 'About SR DreamSpace Realty | Transparent Construction in Bangalore',
  description: 'Learn about our mission to bring corporate discipline and absolute transparency to Bangalore\'s residential and commercial construction industry.',
  alternates: {
    canonical: 'https://srdreamspacerealty.com/about',
  },
  openGraph: {
    title: 'About SR DreamSpace Realty | Transparent Construction in Bangalore',
    description: 'Learn about our mission to bring corporate discipline and absolute transparency to Bangalore\'s residential and commercial construction industry.',
    url: 'https://srdreamspacerealty.com/about',
    siteName: 'SR DreamSpace Realty',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1541888088320-cf5f9f6874eb?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'SR DreamSpace Realty Team',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About SR DreamSpace Realty',
    description: 'Engineering Bangalore\'s skyline with unparalleled transparency and quality.',
    images: ['https://images.unsplash.com/photo-1541888088320-cf5f9f6874eb?q=80&w=1200&auto=format&fit=crop'],
  },
};

export default function AboutPage() {
    return <AboutPageClient />;
}
