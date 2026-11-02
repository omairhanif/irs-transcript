import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleSchema } from '@/components/seo/ArticleSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Irs Transcript Codes Explained',
  description: 'Learn more about Irs Transcript Codes Explained and how it applies to your IRS tax transcript questions.',
  path: '/irs-transcript-codes-explained',
  keywords: ['irs-transcript-codes-explained', 'irs transcript guide'],
});

const FAQS = [
  {
    question: 'What is this IRS transcript guide about?',
    answer: 'This guide explains the basics of Irs Transcript Codes Explained in plain English so you can understand the information that appears on your IRS records.',
  },
  {
    question: 'Why does this matter?',
    answer: 'Understanding the topic helps you review your tax account, prepare your return, and respond correctly to requests from lenders or government agencies.',
  },
];

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Irs Transcript Codes Explained', url: '/irs-transcript-codes-explained' }]} />
      <ArticleSchema title="Irs Transcript Codes Explained" description="Learn more about Irs Transcript Codes Explained and how it applies to your IRS tax transcript questions." url="/irs-transcript-codes-explained" />

      <main className="container pb-80 pt-30">
        <article className="entry-main-content single-content">
          <header className="entry-header mb-40">
            <div className="entry-meta meta-0 font-small mb-10">
              <span className="post-cat text-info">IRS Transcript</span>
            </div>
            <h1 className="entry-title mb-20 font-weight-900">Irs Transcript Codes Explained</h1>
          </header>

          <div className="entry-content">
            <p>
              This article provides a clear, beginner-friendly overview of Irs Transcript Codes Explained. It helps explain the
              key concepts, common questions, and practical context that matter when working with IRS tax
              transcript information.
            </p>
            <p>
              Use this page as a starting point to understand the basics, then compare it with other
              transcript types and account activity when you need more detail.
            </p>

            <h2>What you need to know</h2>
            <p>
              IRS transcript information is designed to summarize records the IRS has on file. Depending on
              the type of transcript, it may show filing details, tax payments, account changes, or income
              records that were reported by employers or financial institutions.
            </p>

            <h2>Key takeaway</h2>
            <p>
              If you are reviewing an IRS transcript for the first time, focus on the document type, the tax
              year involved, and the specific information that was requested by the institution or agency
              asking for it.
            </p>

            <div className="related-links mt-40 mb-30">
              <h3>More IRS transcript guides</h3>
              <ul>
                <li><Link href="/what-is-an-irs-tax-transcript">What Is an IRS Tax Transcript?</Link></li>
                <li><Link href="/how-to-get-irs-tax-transcript-online">How to Get an IRS Tax Transcript Online</Link></li>
                <li><Link href="/irs-transcript-codes-explained">IRS Transcript Codes Explained</Link></li>
              </ul>
            </div>
          </div>
        </article>
      </main>

      <FAQSchema faqs={FAQS} />
    </>
  );
}