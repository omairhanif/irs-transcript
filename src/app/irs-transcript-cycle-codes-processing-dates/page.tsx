import type { Metadata } from 'next';
import ArticleContent from './article.mdx';
import { ArticleSchema } from '@/components/seo/ArticleSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { buildMetadata } from '@/lib/metadata';

const title = 'IRS Tax Transcript Cycle Codes Explained: How to Read Processing Dates';
const description =
  'Learn how to read IRS transcript cycle codes, understand processing-day indicators, and distinguish processing dates from refund dates.';

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: '/irs-transcript-cycle-codes-processing-dates',
  keywords: [
    'irs transcript cycle codes',
    'irs cycle code explained',
    'irs processing dates',
    'irs weekly cycle code',
    'irs daily cycle code',
  ],
});

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: title, url: '/irs-transcript-cycle-codes-processing-dates' },
        ]}
      />
      <ArticleSchema
        title={title}
        description={description}
        url="/irs-transcript-cycle-codes-processing-dates"
      />

      <main className="container pb-80 pt-30">
        <article className="entry-main-content single-content">
          <header className="entry-header mb-40">
            <div className="entry-meta meta-0 font-small mb-10">
              <span className="post-cat text-info">Processing</span>
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
    </>
  );
}
