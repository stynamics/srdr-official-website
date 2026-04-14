import { notFound } from "next/navigation";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { Metadata } from 'next';
import { serviceDatabase } from "@/lib/data/services";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const data = serviceDatabase[resolvedParams.slug];
  if (!data) return { title: 'Service Not Found' };
  
  return {
    title: `${data.title} in Bangalore | SR DreamSpace Realty`,
    description: data.subtitle,
    alternates: {
      canonical: `https://srdreamspacerealty.com/services/${resolvedParams.slug}`,
    },
    openGraph: {
      title: `${data.title} in Bangalore | SR DreamSpace Realty`,
      description: data.subtitle,
      url: `https://srdreamspacerealty.com/services/${resolvedParams.slug}`,
      siteName: 'SR DreamSpace Realty',
      images: [
        {
          url: data.heroImage,
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${data.title} | SR DreamSpace Realty`,
      description: data.subtitle,
      images: [data.heroImage],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = serviceDatabase[resolvedParams.slug];

  if (!data) {
    notFound();
  }

  // Generate Service Schema
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": data.title,
    "provider": {
      "@type": "LocalBusiness",
      "name": "SR DreamSpace Realty",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      }
    },
    "description": data.subtitle,
    "areaServed": {
      "@type": "City",
      "name": "Bangalore"
    },
    "url": `https://srdreamspacerealty.com/services/${resolvedParams.slug}`
  };

  // Generate FAQ Schema
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ServicePageTemplate data={data} />
    </>
  );
}
