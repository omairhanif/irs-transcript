/// <reference types="mdx" />
import type { Metadata } from 'next';
import ArticleContent from './article.mdx';
import { ArticleSchema } from '@/components/seo/ArticleSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { buildMetadata } from '@/lib/metadata';

const title = 'Why Is My IRS Tax Transcript Not Updating? Common Reasons and What to Do';
const description =
  'Learn why your IRS tax transcript may not be updating, how long processing can take, which codes to check, and what steps to take next.';

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: '/irs-tax-transcript-not-updating',
  keywords: [
    'irs transcript not updating',
    'tax transcript no record of return filed',
    'irs transcript processing time',
    'irs transcript code 570',
    'irs transcript code 971',
  ],
});

const FAQS = [
  {
    question: 'What does “No Record of Return Filed” mean?',
    answer:
      'It means the transcript you are viewing does not currently show a processed return. It does not always mean the IRS never received your return. Check your filing confirmation and the correct refund-status tool.',
  },
  {
    question: 'How often does the IRS update tax transcripts?',
    answer:
      'There is no single update schedule for everyone. Transcript details change when account transactions and information become available through IRS systems. Some accounts need additional processing time.',
  },
  {
    question: 'Does an unchanged transcript mean my tax return was rejected?',
    answer:
      'No. An unchanged transcript does not automatically mean your return was rejected. Check your e-file acceptance confirmation or use the IRS refund tracker to see whether the IRS received your return.',
  },
  {
    question: 'Does Code 150 mean my transcript is fully updated?',
    answer:
      'No. Code 150 generally means the return was posted and tax assessed. Additional transactions, adjustments, credits, or refund information may appear later.',
  },
  {
    question: 'Can an IRS notice explain why my transcript is not updating?',
    answer:
      'Yes. A notice may explain that additional information, verification, or an account adjustment is needed. Check your IRS Online Account and physical mail for letters.',
  },
  {
    question: 'Can I get my transcript by mail if it is not available online?',
    answer:
      'Yes. The IRS allows taxpayers to request transcripts by mail and through its automated phone service. You can also use Form 4506-T when necessary. Availability depends on transcript type and tax year.',
  },
];

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: title, url: '/irs-tax-transcript-not-updating' },
        ]}
      />
      <ArticleSchema
        title={title}
        description={description}
        url="/irs-tax-transcript-not-updating"
      />

      <main className=" max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="entry-main-content single-content">
          <header className="entry-header mb-40">
            <div className="entry-meta meta-0 font-small mb-10">
              <span className="post-cat text-info">Troubleshooting</span>
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
