import type { Metadata } from 'next';
import ArticleContent from './article.mdx';
import { ArticleSchema } from '@/components/seo/ArticleSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { buildMetadata } from '@/lib/metadata';

const title = 'IRS Transcript Code 570: Why Is Your Tax Refund on Hold?';
const description =
  'Learn what IRS Transcript Code 570 means, why a refund may be on hold, how to read related codes, and what steps to take next.';

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: '/irs-transcript-code-570-refund-hold',
  keywords: [
    'irs transcript code 570',
    'code 570 refund hold',
    'irs tax refund on hold',
    'code 570 and 971',
    'code 570 and 571',
  ],
});

const FAQS = [
  {
    question: 'Does IRS Code 570 mean my refund has been denied?',
    answer:
      'No. Code 570 does not mean your refund has been permanently denied. It generally indicates that the IRS has not completed an account action or released a held credit.',
  },
  {
    question: 'Can Code 570 disappear without Code 571?',
    answer:
      'Yes. Transcript activity varies depending on account circumstances. Do not assume every hold must follow a particular sequence of codes; review the full transaction history.',
  },
  {
    question: 'Does Code 570 mean I made a mistake on my tax return?',
    answer:
      'Not necessarily. The IRS may need time to verify information or resolve an account issue. The code alone does not identify an error or prove that you filed incorrectly.',
  },
  {
    question: 'Should I amend my return because of Code 570?',
    answer:
      'No. Do not file an amended return just because Code 570 appears. Review your return and any IRS notices first. Amend only if you identify an error or the IRS instructs you to take a particular action.',
  },
  {
    question: 'Can Code 570 appear with Code 971?',
    answer:
      'Yes. Both codes may appear on a transcript. Code 971 represents a miscellaneous account action, and its specific meaning depends on the action code and related information.',
  },
  {
    question: 'What does Code 570 followed by Code 846 mean?',
    answer:
      'This may indicate that the IRS placed a hold on your account and later issued your refund. Review the dates and amounts to understand the sequence. Code 846 generally indicates that the refund transaction was issued.',
  },
  {
    question: 'Will I receive a letter if Code 570 appears?',
    answer:
      'Not always. Some account actions may not require a notice, while others may result in an IRS letter requesting information or explaining an adjustment. Check your online account and physical mail regularly.',
  },
];

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: title, url: '/irs-transcript-code-570-refund-hold' },
        ]}
      />
      <ArticleSchema
        title={title}
        description={description}
        url="/irs-transcript-code-570-refund-hold"
      />

      <main className="container pb-80 pt-30">
        <article className="entry-main-content single-content">
          <header className="entry-header mb-40">
            <div className="entry-meta meta-0 font-small mb-10">
              <span className="post-cat text-info">Refunds</span>
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
