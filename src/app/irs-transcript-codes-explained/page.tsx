import type { Metadata } from 'next';
import ArticleContent from './article.mdx';
import { ArticleSchema } from '@/components/seo/ArticleSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { buildMetadata } from '@/lib/metadata';

const title = 'IRS Transcript Codes Explained: What Do the Most Common Codes Mean?';
const description =
  'Understand common IRS transcript codes, including 150, 570, 846, and 971, and learn how to interpret account activity in context.';

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: '/irs-transcript-codes-explained',
  keywords: [
    'irs transcript codes explained',
    'irs transaction codes',
    'irs transcript code 150',
    'irs transcript code 570',
    'irs transcript code 846',
    'irs transcript code 971',
  ],
});

const FAQS = [
  {
    question: 'What are common IRS transcript codes?',
    answer:
      'Commonly encountered codes include 150, 806, 766, 768, 570, 571, 846, and 971. They relate to return processing, withholding, credits, account holds, refund activity, and other account actions.',
  },
  {
    question: 'What does Code 150 mean on an IRS transcript?',
    answer:
      'Code 150 generally indicates that the original return transaction was posted and the associated tax liability assessed. It does not automatically mean a refund was approved.',
  },
  {
    question: 'What does Code 846 mean?',
    answer:
      'Code 846 generally means the IRS issued a refund. The transaction may include a date and amount, but it does not guarantee that the money has already appeared in your bank account.',
  },
  {
    question: 'What does Code 570 mean on a tax transcript?',
    answer:
      'Code 570 generally indicates that an additional account action is pending and a hold was placed on the tax module. The code alone does not explain why.',
  },
  {
    question: 'What does Code 971 mean?',
    answer:
      'Code 971 can record different account actions, commonly an IRS notice being issued. Review the accompanying description and any related correspondence.',
  },
];

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: title, url: '/irs-transcript-codes-explained' },
        ]}
      />
      <ArticleSchema
        title={title}
        description={description}
        url="/irs-transcript-codes-explained"
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
