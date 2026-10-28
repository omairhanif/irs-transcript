import { StructuredData } from './StructuredData';
import { SITE_CONFIG } from '@/config/site';

/**
 * FAQSchema — renders an FAQPage JSON-LD block.
 *
 * Usage:
 *   <FAQSchema
 *     faqs={[
 *       { question: 'What is an IRS transcript?', answer: 'An IRS transcript is a summary...' },
 *     ]}
 *   />
 */
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    datePublished: SITE_CONFIG.datePublished,
    dateModified: SITE_CONFIG.dateModified,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return <StructuredData schema={schema} id="faq-schema" />;
}
