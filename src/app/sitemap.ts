import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/config/site';

const base = SITE_CONFIG.url;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base,                                          lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/about`,                               lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`,                             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/types-of-irs-transcripts`,            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/irs-tax-return-transcript`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/irs-tax-account-transcript`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/irs-wage-income-transcript`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/how-to-request-irs-transcript`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/irs-get-transcript-online`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/irs-transcript-by-mail`,              lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/irs-transcript-codes`,                lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/privacy`,                             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/terms`,                               lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/dmca`,                                lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
  ];
}
