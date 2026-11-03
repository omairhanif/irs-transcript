import type { Metadata } from 'next';
import ArticleContent from './article.mdx';
import { ArticleSchema } from '@/components/seo/ArticleSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { buildMetadata } from '@/lib/metadata';

const title = "IRS Wage and Income Transcript vs. Tax Return Transcript: What's the Difference?";
const description =
  'Compare IRS Wage and Income and Tax Return Transcripts, learn what each includes, and find out which transcript to request and how to get it.';

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: '/wage-and-income-vs-tax-return-transcript',
  keywords: [
    'wage and income transcript vs tax return transcript',
    'irs wage and income transcript',
    'irs tax return transcript',
    'difference between wage and income and tax return transcript',
    'how to get irs transcript',
  ],
});

const FAQS = [
  {
    question: 'Is a Wage and Income Transcript the same as a Tax Return Transcript?',
    answer:
      'No. A Wage and Income Transcript shows information reported by third parties, while a Tax Return Transcript summarizes information from your originally filed federal income tax return.',
  },
  {
    question: 'Which transcript shows my W-2 information?',
    answer:
      'A Wage and Income Transcript generally includes W-2 information, such as wages and federal income tax withholding, when the IRS has received and processed the document.',
  },
  {
    question: 'Which transcript shows my gross income?',
    answer:
      'A Tax Return Transcript generally shows your total income and adjusted gross income from your originally filed federal income tax return.',
  },
  {
    question: 'Are IRS transcripts free?',
    answer:
      'Yes. Eligible Wage and Income and Tax Return Transcripts are available from the IRS at no charge.',
  },
  {
    question: 'Can I get these transcripts online?',
    answer:
      'Yes. You can generally access both through your IRS Individual Online Account.',
  },
];

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: title, url: '/wage-and-income-vs-tax-return-transcript' },
        ]}
      />
      <ArticleSchema
        title={title}
        description={description}
        url="/wage-and-income-vs-tax-return-transcript"
      />

      <main className="container pb-80 pt-30">
        <article className="entry-main-content single-content">
          <header className="entry-header mb-40">
            <div className="entry-meta meta-0 font-small mb-10">
              <span className="post-cat text-info">Transcript comparison</span>
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
