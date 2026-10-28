import type { Metadata } from 'next';
import { StructuredData } from '@/components/seo/StructuredData';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { buildMetadata } from '@/lib/metadata';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = buildMetadata({
  exactTitle: true,
  description: SITE_CONFIG.description,
  path: '/',
  keywords: ['irs transcript guide', 'what is irs transcript', 'irs transcript types explained'],
});

const HOME_FAQS = [
  { question: 'What is an IRS transcript?', answer: 'An IRS transcript is an official summary of your tax information on file with the IRS. Four main types: Tax Return, Tax Account, Record of Account, and Wage & Income Transcript.' },
  { question: 'How do I get my IRS transcript online?', answer: 'Visit IRS.gov and use "Get Transcript Online". Verify your identity with your SSN, filing status, mailing address, and a financial account number.' },
  { question: 'Difference between tax return and tax account transcript?', answer: 'Tax Return Transcript shows line items from your original filed return. Tax Account Transcript shows basic data plus changes made after filing.' },
  { question: 'How long does it take to get an IRS transcript?', answer: 'Online access is immediate. Mail requests via Form 4506-T typically arrive within 5–10 business days.' },
  { question: 'Why would I need an IRS transcript?', answer: 'Common reasons: mortgage applications, student loan verification, resolving IRS notices, filing back taxes, identity theft resolution.' },
];

const TRANSCRIPT_CARDS = [
  { title: 'Tax Return Transcript', desc: 'Most line items from your original Form 1040. Accepted by lenders.', href: '/irs-tax-return-transcript' },
  { title: 'Tax Account Transcript', desc: 'AGI, taxable income, filing status, and post-filing changes.', href: '/irs-tax-account-transcript' },
  { title: 'Wage & Income Transcript', desc: 'W-2s, 1099s, and other income documents reported to the IRS.', href: '/irs-wage-income-transcript' },
  { title: 'Record of Account', desc: 'Combines Tax Return and Tax Account transcripts in one document.', href: '/types-of-irs-transcripts' },
];

export default function HomePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }]} />
      <StructuredData id="hp-schema" schema={{ '@context': 'https://schema.org', '@type': 'WebPage', name: SITE_CONFIG.fullTitle, url: SITE_CONFIG.url, description: SITE_CONFIG.description, datePublished: SITE_CONFIG.datePublished, dateModified: SITE_CONFIG.dateModified, inLanguage: 'en-US' }} />
      <FAQSchema faqs={HOME_FAQS} />
    </>
  );
}

