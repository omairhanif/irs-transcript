import { StructuredData } from './StructuredData';
import { SITE_CONFIG } from '@/config/site';

/**
 * ArticleSchema — renders an Article JSON-LD block for blog/guide posts.
 *
 * Usage:
 *   <ArticleSchema
 *     title="How to Get Your IRS Tax Transcript"
 *     description="Step-by-step guide..."
 *     url="/guides/how-to-get-irs-transcript"
 *     datePublished="2024-01-01T00:00:00Z"
 *     dateModified="2026-10-01T00:00:00Z"
 *     image="/og-image.png"
 *   />
 */
interface ArticleSchemaProps {
  title: string;
  description: string;
  /** Relative path or absolute URL */
  url: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
  authorName?: string;
}

export function ArticleSchema({
  title,
  description,
  url,
  datePublished = SITE_CONFIG.datePublished,
  dateModified = SITE_CONFIG.dateModified,
  image = SITE_CONFIG.ogImage,
  authorName = SITE_CONFIG.name,
}: ArticleSchemaProps) {
  const absoluteUrl = url.startsWith('http') ? url : `${SITE_CONFIG.url}${url}`;
  const absoluteImage = image.startsWith('http')
    ? image
    : `${SITE_CONFIG.url}${image}`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: absoluteUrl,
    datePublished,
    dateModified,
    image: absoluteImage,
    author: {
      '@type': 'Organization',
      name: authorName,
      url: SITE_CONFIG.url,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}${SITE_CONFIG.logo}`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl,
    },
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
  };

  return <StructuredData schema={schema} id="article-schema" />;
}
