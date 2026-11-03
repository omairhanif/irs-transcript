import type { Metadata } from 'next';
import ArticleContent from './article.mdx';
import { ArticleSchema } from '@/components/seo/ArticleSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { buildMetadata } from '@/lib/metadata';

const title = 'IRS Transcript Code 846: What It Means for Your Tax Refund';
const description =
  'Learn what IRS Transcript Code 846 means, how to read its date and amount, when your refund may arrive, and what to do if it is missing.';

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: '/irs-transcript-code-846-refund',
  keywords: [
    'irs transcript code 846',
    'code 846 refund date',
    'irs refund issued transcript',
    'refund not received after code 846',
    'irs account transcript refund',
  ],
});

const FAQS = [
  {
    question: 'Does IRS Code 846 mean my refund is approved?',
    answer:
      'Code 846 means the IRS recorded a refund issuance transaction. It is generally a sign that the refund has been released, although the money may not yet be available in your bank account or mailbox.',
  },
  {
    question: 'Does Code 846 show the date I will receive my refund?',
    answer:
      'Not necessarily. The date beside Code 846 is the refund issue date recorded on your transcript. Your bank or postal service may need additional time to deliver the payment.',
  },
  {
    question: 'Can my refund still be delayed after Code 846?',
    answer:
      'Yes. Bank processing problems, incorrect account information, rejected deposits, and other payment-related issues can affect when you receive your money.',
  },
  {
    question: 'Is Code 846 the same as Code 150?',
    answer:
      'No. Code 150 generally indicates that the original tax return transaction was posted and tax assessed. Code 846 indicates that a refund transaction was issued.',
  },
  {
    question: 'What if Code 846 appears but I never receive my refund?',
    answer:
      'Check the IRS refund tracker, confirm your payment method, and contact your bank if you selected direct deposit. If you expected a paper check, check your mailing address and follow IRS instructions for a missing refund or refund trace.',
  },
];

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: title, url: '/irs-transcript-code-846-refund' },
        ]}
      />
      <ArticleSchema
        title={title}
        description={description}
        url="/irs-transcript-code-846-refund"
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
