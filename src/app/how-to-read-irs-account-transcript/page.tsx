/// <reference types="mdx" />
import type { Metadata } from 'next';
import ArticleContent from './article.mdx';
import { ArticleSchema } from '@/components/seo/ArticleSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { buildMetadata } from '@/lib/metadata';

const title = 'How to Read Your IRS Account Transcript: A Practical Walkthrough';
const description =
  'Learn how to get and read your IRS account transcript, understand transaction codes and dates, and review payments, refunds, and balances.';

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: '/how-to-read-irs-account-transcript',
  keywords: [
    'how to read irs account transcript',
    'irs account transcript explained',
    'irs transcript transaction codes',
    'irs transcript refund status',
    'irs account transcript balance',
  ],
});

const FAQS = [
  {
    question: 'What does an IRS account transcript show?',
    answer:
      'An IRS account transcript shows activity for a tax year, including return processing, payments, credits, adjustments, penalties, interest, refunds, and balances.',
  },
  {
    question: 'What does TC 150 mean on an IRS account transcript?',
    answer:
      'TC 150 generally indicates that the IRS posted the return transaction and assessed the associated tax liability. It does not by itself mean a refund has been issued.',
  },
  {
    question: 'What does TC 846 mean?',
    answer:
      'TC 846 generally indicates that the IRS issued a refund. The date on the transcript is the issuance date and may not be the date the deposit appears in your bank account.',
  },
  {
    question: 'Does TC 570 mean my refund was rejected?',
    answer:
      'No. TC 570 generally indicates that an additional account action or review is pending. Review later transactions and any IRS notices for more context.',
  },
  {
    question: 'Where can I get my IRS account transcript?',
    answer:
      'Eligible taxpayers can generally access account transcripts through an IRS Individual Online Account or request an eligible transcript by mail or using Form 4506-T.',
  },
];

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: title, url: '/how-to-read-irs-account-transcript' },
        ]}
      />
      <ArticleSchema
        title={title}
        description={description}
        url="/how-to-read-irs-account-transcript"
      />

      <main className="container pb-80 pt-30">
        <article className="entry-main-content single-content">
          <header className="entry-header mb-40">
            <div className="entry-meta meta-0 font-small mb-10">
              <span className="post-cat text-info">Account transcripts</span>
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
