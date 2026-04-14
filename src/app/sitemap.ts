import { MetadataRoute } from 'next';
import { serviceDatabase } from '@/lib/data/services';
import { locationDatabase, expansionMapping } from '@/lib/data/locations';

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [
    {
      url: 'https://srdreamspacerealty.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://srdreamspacerealty.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://srdreamspacerealty.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://srdreamspacerealty.com/portfolio',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // Dynamically add all service pages
  const serviceSlugs = Object.keys(serviceDatabase);
  serviceSlugs.forEach((slug) => {
    sitemapEntries.push({
      url: `https://srdreamspacerealty.com/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // Dynamically add all primary location pages
  const primaryLocationSlugs = Object.keys(locationDatabase);
  primaryLocationSlugs.forEach((slug) => {
    sitemapEntries.push({
      url: `https://srdreamspacerealty.com/locations/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // Dynamically add all expansion (mapped) location pages
  const expansionLocationSlugs = Object.keys(expansionMapping);
  expansionLocationSlugs.forEach((slug) => {
    sitemapEntries.push({
      url: `https://srdreamspacerealty.com/locations/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7, // Slightly lower priority for mapped areas
    });
  });

  return sitemapEntries;
}
