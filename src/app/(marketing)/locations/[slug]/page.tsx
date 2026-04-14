import { notFound } from "next/navigation";
import { LocationPageTemplate } from "@/components/templates/LocationPageTemplate";
import { Metadata } from 'next';
import { locationDatabase, expansionMapping } from "@/lib/data/locations";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  let targetSlug = resolvedParams.slug;

  if (expansionMapping[targetSlug]) {
    targetSlug = expansionMapping[targetSlug];
  }

  const data = locationDatabase[targetSlug];
  if (!data) return { title: 'Location Not Found' };

  // Customizing title based on exactly what user typed, even if it mapped to kr puram data
  const displayName = resolvedParams.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return {
    title: `Best Construction Company in ${displayName}, Bangalore | SR DreamSpace Realty`,
    description: `Leading residential and commercial builders in ${displayName}. We provide 100% transparent pricing and guaranteed timelines.`,
    alternates: {
      canonical: `https://srdreamspacerealty.com/locations/${resolvedParams.slug}`,
    },
    openGraph: {
      title: `Best Construction Company in ${displayName}, Bangalore | SR DreamSpace Realty`,
      description: `Leading residential and commercial builders in ${displayName}. We provide 100% transparent pricing and guaranteed timelines.`,
      url: `https://srdreamspacerealty.com/locations/${resolvedParams.slug}`,
      siteName: 'SR DreamSpace Realty',
      images: [
        {
          url: data.heroImage,
          width: 1200,
          height: 630,
          alt: `Construction Company in ${displayName}`,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Best Construction Company in ${displayName}`,
      description: `Leading residential and commercial builders in ${displayName}.`,
      images: [data.heroImage],
    },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  let targetSlug = resolvedParams.slug;
  const displayName = resolvedParams.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  if (expansionMapping[targetSlug]) {
    targetSlug = expansionMapping[targetSlug];
  }

  const data = locationDatabase[targetSlug];

  if (!data) {
    notFound();
  }

  // Clone data and override name simply for visual presentation so it feels local
  const localizedData = { ...data, name: displayName };

  // Generate LocalBusiness Schema
  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `SR DreamSpace Realty - ${displayName}`,
    "image": data.heroImage,
    "description": `Premium construction and real estate services in ${displayName}, Bangalore.`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": displayName,
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "url": `https://srdreamspacerealty.com/locations/${resolvedParams.slug}`,
    "areaServed": displayName,
    "telephone": "+919876543210"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <LocationPageTemplate data={localizedData} />
    </>
  );
}
