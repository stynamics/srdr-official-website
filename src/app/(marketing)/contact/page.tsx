import { Metadata } from 'next';
import ContactPageClient from '@/components/ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact Us | SR DreamSpace Realty Bangalore',
  description: 'Get a transparent quote and expert consultation for your construction project in Bangalore. Reach out via phone, WhatsApp, or our lead form.',
  alternates: {
    canonical: 'https://srdreamspacerealty.com/contact',
  },
  openGraph: {
    title: 'Contact Us | SR DreamSpace Realty Bangalore',
    description: 'Get a transparent quote and expert consultation for your construction project in Bangalore.',
    url: 'https://srdreamspacerealty.com/contact',
    siteName: 'SR DreamSpace Realty',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1541888088320-cf5f9f6874eb?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Contact SR DreamSpace Realty',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact SR DreamSpace Realty',
    description: 'Get a transparent quote and expert consultation for your construction project in Bangalore.',
    images: ['https://images.unsplash.com/photo-1541888088320-cf5f9f6874eb?q=80&w=1200&auto=format&fit=crop'],
  },
};

export default function ContactPage() {
    return <ContactPageClient />;
}
