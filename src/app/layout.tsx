import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/site';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ThemeScripts } from '@/components/layout/ThemeScripts';
import { StructuredData } from '@/components/seo/StructuredData';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.fullTitle,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [...SITE_CONFIG.keywords],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: { email: false, address: false, telephone: false },
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.fullTitle,
    description: SITE_CONFIG.description,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630, alt: SITE_CONFIG.fullTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    site: SITE_CONFIG.twitterHandle,
    title: SITE_CONFIG.fullTitle,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  other: { 'theme-color': SITE_CONFIG.themeColor },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_CONFIG.name,
  alternateName: ['IRS Transcript Guide', 'IRS Tax Transcript Help'],
  url: SITE_CONFIG.url,
  description: SITE_CONFIG.description,
  inLanguage: SITE_CONFIG.language,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_CONFIG.url}/?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}${SITE_CONFIG.logo}`,
  description: SITE_CONFIG.description,
  datePublished: SITE_CONFIG.datePublished,
  dateModified: SITE_CONFIG.dateModified,
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    url: `${SITE_CONFIG.url}/contact`,
    email: SITE_CONFIG.email,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="no-js" lang={SITE_CONFIG.language}>
      <head>
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/widgets.css" />
        <link rel="stylesheet" href="/assets/css/dark.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
        <StructuredData schema={websiteSchema} id="website-schema" />
        <StructuredData schema={organizationSchema} id="organization-schema" />
      </head>
      <body className="theme-mode">
        <div className="scroll-progress primary-bg"></div>
        <Header />
        <main>{children}</main>
        <div className="dark-mark"></div>
        <Footer />
        <ThemeScripts />
      </body>
    </html>
  );
}


