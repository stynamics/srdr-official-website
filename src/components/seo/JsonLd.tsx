import React from 'react';

export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SR DreamSpace Realty",
    "image": "https://srdreamspace.com/logo.png",
    "@id": "https://srdreamspace.com",
    "url": "https://srdreamspace.com",
    "telephone": "+919876543210",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "#45, Prime Business Parkway",
      "addressLocality": "Whitefield, Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560066",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9715987,
      "longitude": 77.580643
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/srdreamspace",
      "https://www.instagram.com/srdreamspace",
      "https://www.linkedin.com/company/srdreamspace"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
