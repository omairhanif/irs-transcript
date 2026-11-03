import type { Metadata } from 'next';
import ArticleContent from './article.mdx';
import { ArticleSchema } from '@/components/seo/ArticleSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { buildMetadata } from '@/lib/metadata';

const title = 'IRS Transcript Code 152 Explained: What It Means for Your Tax Refund';
const description =
  'Learn what IRS Tax Topic 152 means, how it differs from transcript transaction codes, and what to do while waiting for a refund.';

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: '/irs-transcript-code-152-explained',
  keywords: [
    'irs tax topic 152',
    'irs code 152 refund',
    'what does tax topic 152 mean',
    'irs transcript code 152 explained',
    'tax topic 152 refund status',
  ],
});

const FAQS = [
  {
    question: 'Is IRS Code 152 good or bad?',
    answer:
      'Tax Topic 152 is generally an informational message related to refund processing. It does not mean your return contains an error, that you are being audited, or that your refund has been approved.',
  },
  {
    question: 'Does Tax Topic 152 mean my refund is delayed?',
    answer:
      'It can appear while your return is still being processed and additional time may be needed. The message alone does not confirm a delay or explain how long processing will take.',
  },
  {
    question: 'Should I contact the IRS after seeing Code 152?',
    answer:
      "You generally do not need to contact the IRS just because Tax Topic 152 appears. Check Where's My Refund? and contact the IRS if the tracker instructs you to do so.",
  },
  {
    question: 'Does IRS Code 152 mean I am being audited?',
    answer:
      'No. Tax Topic 152 is not an indication of an audit. If the IRS selects your return for examination, it will generally send correspondence explaining the situation.',
  },
  {
    question: 'Does Code 152 have a specific refund date?',
    answer:
      "No. Tax Topic 152 does not provide a specific refund date. Use the IRS refund tracker to monitor your status and look for a payment update.",
  },
];

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: title, url: '/irs-transcript-code-152-explained' },
        ]}
      />
      <ArticleSchema
        title={title}
        description={description}
        url="/irs-transcript-code-152-explained"
      />

      <main className="container pb-80 pt-30">
        <article className="entry-main-content single-content">
          <header className="entry-header mb-40">
            <div className="entry-meta meta-0 font-small mb-10">
              <span className="post-cat text-info">Transcript codes</span>
            </div>
            <div className="entry-meta meta-1 font-x-small text-uppercase">
              <span className="post-by">IRS Transcript</span>
              <span className="post-on">Updated guide</span>
            </div>
          </header>

          <div className="entry-content">
            <ArticleContent />
          </div>
        </article>
      </main>

      <FAQSchema faqs={FAQS} />
    </>
  );
}
