import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/site';

/**
 * buildMetadata — returns a fully-populated Next.js Metadata object.
 *
 * Merges page-level overrides on top of sensible site-wide defaults.
 *
 * Usage (in any page.tsx):
 *   export const metadata = buildMetadata({
 *     title: 'How to Get Your IRS Transcript',
 *     description: 'Step-by-step guide...',
 *     path: '/guides/how-to-get-irs-transcript',
 *     keywords: ['irs transcript', ...],
 *   });
 */
interface BuildMetadataOptions {
  /** Page title — will be appended with ' | {SITE_CONFIG.name}' */
  title?: string;
  description?: string;
  /** Canonical path, e.g. '/about'. If omitted defaults to '/'. */
  path?: string;
  keywords?: string[];
  ogImage?: string;
  /** If true, the page title is used verbatim without appending site name. */
  exactTitle?: boolean;
  /** Prevent indexing — use for legal/utility pages if needed. */
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description = SITE_CONFIG.description,
  path = '/',
  keywords = [],
  ogImage = SITE_CONFIG.ogImage,
  exactTitle = false,
  noIndex = false,
}: BuildMetadataOptions = {}): Metadata {
  const canonicalUrl = `${SITE_CONFIG.url}${path}`;
  const fullTitle = title
    ? exactTitle
      ? title
      : `${title} | ${SITE_CONFIG.name}`
    : SITE_CONFIG.fullTitle;

  const allKeywords: string[] = [...SITE_CONFIG.keywords, ...keywords];

  const ogImageAbsolute = ogImage.startsWith('http')
    ? ogImage
    : `${SITE_CONFIG.url}${ogImage}`;

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    formatDetection: { email: false, address: false, telephone: false },
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: SITE_CONFIG.locale,
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImageAbsolute,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: SITE_CONFIG.twitterHandle,
      title: fullTitle,
      description,
      images: [ogImageAbsolute],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    ...(SITE_CONFIG.googleVerification
      ? { verification: { google: SITE_CONFIG.googleVerification } }
      : {}),
    ...(SITE_CONFIG.msValidate
      ? { other: { 'msvalidate.01': SITE_CONFIG.msValidate } }
      : {}),
  };
}
