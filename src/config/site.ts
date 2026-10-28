/**
 * Site-wide configuration — single source of truth for SEO, metadata, and branding.
 * Update this file when the site's identity changes.
 */
export const SITE_CONFIG = {
  // ─── Identity ──────────────────────────────────────────────────────────────
  name: 'IRS Transcript',
  tagline: 'Unofficial Guide for IRS Transcript',
  fullTitle: 'IRS Transcript — Unofficial Guide for IRS Transcript',
  description:
    'Your unofficial, plain-English guide to IRS tax transcripts. Learn how to request, read, and use IRS transcripts — tax return, tax account, wage & income, and record-of-account transcripts explained step by step.',
  url: 'https://irstranscript.com',
  locale: 'en_US',
  language: 'en',

  // ─── Images ────────────────────────────────────────────────────────────────
  logo: '/assets/imgs/theme/logo.png',
  ogImage: '/og-image.png',
  favicon: '/assets/imgs/theme/favicon.png',

  // ─── Social ────────────────────────────────────────────────────────────────
  twitterHandle: '@IRSTranscript',
  social: {
    twitter: 'https://twitter.com/IRSTranscript',
  },

  // ─── Contact ───────────────────────────────────────────────────────────────
  email: 'info@irstranscript.com',

  // ─── SEO: keyword clusters ─────────────────────────────────────────────────
  keywords: [
    'irs transcript',
    'irs tax transcript',
    'how to get irs transcript',
    'irs transcript online',
    'irs tax return transcript',
    'irs account transcript',
    'irs wage and income transcript',
    'irs record of account transcript',
    'get tax transcript irs',
    'irs transcript request',
    'irs transcript types',
    'tax transcript explained',
    'how to read irs transcript',
    'irs get transcript',
    'irs transcript codes',
    'irs transcript verification',
    'unofficial irs transcript guide',
    'irs transcript help',
    'tax return transcript vs account transcript',
    'irs transcript download',
  ],

  // ─── Dates ────────────────────────────────────────────────────────────────
  datePublished: '2024-01-01T00:00:00Z',
  dateModified: '2026-10-01T00:00:00Z',

  // ─── Cloudflare / Misc ────────────────────────────────────────────────────
  themeColor: '#1a56db',
  msValidate: '',    // Add Bing webmaster key here when ready
  googleVerification: '', // Add GSC key here when ready
} as const;

export type SiteConfig = typeof SITE_CONFIG;
