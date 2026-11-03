import type { Metadata } from 'next';
import ArticleContent from './article.mdx';
import { ArticleSchema } from '@/components/seo/ArticleSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { buildMetadata } from '@/lib/metadata';

const title = "What Is an IRS Tax Transcript? A Complete Beginner's Guide";
const description =
  'Learn what an IRS tax transcript is, how it differs from a tax return, which transcript types exist, and when you may need one.';

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: '/what-is-an-irs-tax-transcript',
  keywords: [
    'what is an irs tax transcript',
    'irs transcript explained',
    'tax return transcript',
    'tax account transcript',
    'wage and income transcript',
    'irs transcript types',
  ],
});

const FAQS = [
  {
    question: 'What is an IRS tax transcript?',
    answer:
      'An IRS tax transcript is an official summary of selected information from your federal tax records. It shows items like filing status, income, tax payments, and account activity without providing a full copy of your tax return.',
  },
  {
    question: 'What is the difference between a tax transcript and a copy of my tax return?',
    answer:
      'A tax return is the actual document you filed with the IRS. A transcript is a summarized report from IRS records that includes selected data from that return and related account activity.',
  },
  {
    question: 'Why would I need an IRS transcript?',
    answer:
      'People often need one for mortgage applications, income verification, student aid forms, resolving tax notices, or preparing a return when prior documents are missing.',
  },
  {
    question: 'What are the main types of IRS transcripts?',
    answer:
      'The main types are Tax Return Transcript, Tax Account Transcript, Record of Account Transcript, Wage and Income Transcript, and Verification of Non-Filing Letter.',
  },
  {
    question: 'Can I get an IRS transcript for free?',
    answer:
      'Yes. The IRS generally provides transcripts free of charge through the Get Transcript Online tool, by mail, or by phone for certain requests.',
  },
];

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'What Is an IRS Tax Transcript?', url: '/what-is-an-irs-tax-transcript' },
        ]}
      />
      <ArticleSchema
        title={title}
        description={description}
        url="/what-is-an-irs-tax-transcript"
      />

      <main className="container pb-80 pt-30">
        <article className="entry-main-content single-content">
          <header className="entry-header mb-40">
            <div className="entry-meta meta-0 font-small mb-10">
              <span className="post-cat text-info">Transcript basics</span>
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
