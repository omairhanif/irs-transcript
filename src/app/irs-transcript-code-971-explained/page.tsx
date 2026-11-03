import type { Metadata } from 'next';
import ArticleContent from './article.mdx';
import { ArticleSchema } from '@/components/seo/ArticleSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { buildMetadata } from '@/lib/metadata';

const title = 'IRS Transcript Code 971 Explained: Notices, Updates, and Next Steps';
const description =
  'Learn what IRS Transcript Code 971 means, how to find related notices, how it differs from Code 972, and what steps to take next.';

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: '/irs-transcript-code-971-explained',
  keywords: [
    'irs transcript code 971',
    'code 971 notice issued',
    'irs code 971 action code',
    'code 971 and 570',
    'irs transcript code 972',
  ],
});

const FAQS = [
  {
    question: 'Does Code 971 mean the IRS sent me a letter?',
    answer:
      'It might. If the description says “Notice Issued,” it generally means the IRS recorded that a notice or letter was sent. Check your online account and physical mail for more details.',
  },
  {
    question: 'Does Code 971 mean my tax return is being audited?',
    answer:
      'No. Code 971 by itself does not mean you are being audited. Check the action code and any IRS letters before drawing conclusions.',
  },
  {
    question: 'Does Code 971 delay my refund?',
    answer:
      'Not automatically. Some actions associated with Code 971 may relate to refunds, but the code itself does not mean your refund is delayed. Look for codes such as Code 570 and check your refund status.',
  },
  {
    question: 'What does Code 971 followed by Code 846 mean?',
    answer:
      'It could mean that an action was recorded and your refund was issued later. Review the descriptions, dates, and amounts to see what happened.',
  },
  {
    question: 'What does Code 971 with Action Code 010 mean?',
    answer:
      'Action Code 010 generally means an amended return or claim was sent to Accounts Management for processing. It does not mean the return was approved.',
  },
  {
    question: 'What does Code 971 followed by Code 972 mean?',
    answer:
      'Code 972 generally reverses a Code 971 entry. Review both entries to see what was reversed and whether anything else happened afterward.',
  },
];

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: title, url: '/irs-transcript-code-971-explained' },
        ]}
      />
      <ArticleSchema
        title={title}
        description={description}
        url="/irs-transcript-code-971-explained"
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
