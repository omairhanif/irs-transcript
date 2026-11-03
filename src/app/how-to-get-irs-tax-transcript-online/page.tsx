import type { Metadata } from 'next';
import ArticleContent from './article.mdx';
import { ArticleSchema } from '@/components/seo/ArticleSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { buildMetadata } from '@/lib/metadata';

const title = 'How to Get Your IRS Tax Transcript Online: Step-by-Step Guide';
const description =
  'Follow clear steps to sign in to your IRS Individual Online Account, choose the right transcript and tax year, and download your tax transcript.';

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: '/how-to-get-irs-tax-transcript-online',
  keywords: [
    'get irs tax transcript online',
    'how to get tax transcript',
    'irs individual online account',
    'download irs tax transcript',
    'irs transcript types',
  ],
});

const FAQS = [
  {
    question: 'Is it free to get an IRS transcript online?',
    answer:
      'Yes. The IRS generally provides transcripts free through its official online account and other IRS request methods. Be cautious of third-party sites that charge to obtain a transcript.',
  },
  {
    question: 'How long does it take to get an IRS transcript online?',
    answer:
      'If the transcript is available in your Individual Online Account, you can generally view or download it after signing in. Availability depends on the transcript type and tax year.',
  },
  {
    question: 'Which IRS transcript should I choose?',
    answer:
      'Choose based on what you need to verify. A Tax Return Transcript contains most information from your original return; a Tax Account Transcript focuses on account activity; a Record of Account combines both; and a Wage and Income Transcript lists information returns reported to the IRS. Confirm the exact requirement with the organization requesting the document.',
  },
  {
    question: 'Can I get a transcript if I cannot use the online account?',
    answer:
      'The IRS Get Transcript page lists other request methods, including mail or phone, for eligible documents. Check IRS.gov for the current instructions and options.',
  },
];

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: title, url: '/how-to-get-irs-tax-transcript-online' },
        ]}
      />
      <ArticleSchema
        title={title}
        description={description}
        url="/how-to-get-irs-tax-transcript-online"
      />

      <main className="container pb-80 pt-30">
        <article className="entry-main-content single-content">
          <header className="entry-header mb-40">
            <div className="entry-meta meta-0 font-small mb-10">
              <span className="post-cat text-info">Getting transcripts</span>
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
