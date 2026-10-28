/**
 * ─────────────────────────────────────────────────────────────────────────────
 * NEW PAGE TEMPLATE
 * ─────────────────────────────────────────────────────────────────────────────
 * HOW TO CREATE A NEW PAGE:
 *
 *  1. Duplicate this file to:  src/app/[your-slug]/page.tsx
 *  2. Update the `metadata` export (title, description, path, keywords)
 *  3. Update the `breadcrumb` items to reflect the page hierarchy
 *  4. Replace the placeholder content inside <> with real content
 *  5. Add optional schemas (FAQSchema, ArticleSchema) as needed
 *  6. Add the new page URL to src/app/sitemap.ts
 *
 * Available SEO components:
 *  - <BreadcrumbSchema>  — BreadcrumbList JSON-LD
 *  - <FAQSchema>         — FAQPage JSON-LD
 *  - <ArticleSchema>     — Article JSON-LD
 *  - <StructuredData>    — any raw JSON-LD object
 *
 * Metadata helper:
 *  buildMetadata({ title, description, path, keywords, ogImage, noIndex })
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { ArticleSchema } from '@/components/seo/ArticleSchema';
import { AuthorInfo } from '@/components/shared/AuthorInfo';
import { buildMetadata } from '@/lib/metadata';

// ─── 1. Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = buildMetadata({
  title: 'Page Title Here',                              // → "Page Title Here | IRS Transcript"
  description: 'Compelling 150-160 char description here.',
  path: '/your-slug-here',                               // canonical path
  keywords: ['keyword one', 'keyword two'],              // page-specific extras
});

// ─── 2. Optional FAQ data ─────────────────────────────────────────────────────
const PAGE_FAQS = [
  { question: 'Sample question 1?', answer: 'Sample answer 1.' },
  { question: 'Sample question 2?', answer: 'Sample answer 2.' },
];

// ─── 3. Page Component ────────────────────────────────────────────────────────
export default function NewPageTemplate() {
  return (
    <>

      {/* ── Schemas ── */}
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Page Title Here', url: '/your-slug-here' },
        ]}
      />
      <ArticleSchema
        title="Page Title Here"
        description="Compelling 150-160 char description here."
        url="/your-slug-here"
      />
      <FAQSchema faqs={PAGE_FAQS} />

      {/* ── Page Header ── */}
      <div className="page-header pt-50 pb-50 bg-light">
        <div className="container">
          <div className="row"><div className="col-lg-8 mx-auto text-center">
            <span className="text-muted font-small">Category Label</span>
            <h1 className="font-weight-900 mt-10">Page Title Here</h1>
            <AuthorInfo
              publishedDate="2024-01-01"
              readingTimeMinutes={5}
            />
          </div></div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="container section-padding-60">
        <div className="row">
          <div className="col-lg-8 mx-auto">

            {/* Introduction */}
            <div className="entry-content mb-40">
              <p className="font-medium text-muted">
                Lead paragraph — summarise the topic and hook the reader. Answer the primary keyword question directly here.
              </p>
            </div>

            {/* Content sections */}
            <section className="mb-40">
              <h2 className="font-weight-800 mb-15">Section Heading</h2>
              <p className="text-muted">
                Section body text. Use clear, plain English. Break up long paragraphs.
              </p>
            </section>

            <section className="mb-40">
              <h2 className="font-weight-800 mb-15">Another Section</h2>
              <p className="text-muted">Body text.</p>
              <ul className="text-muted font-small mt-15">
                <li className="mb-10">Bullet point one</li>
                <li className="mb-10">Bullet point two</li>
                <li>Bullet point three</li>
              </ul>
            </section>

            {/* FAQ Section */}
            <section className="mb-40" id="faqs">
              <h2 className="font-weight-800 mb-25">Frequently Asked Questions</h2>
              {PAGE_FAQS.map((faq, i) => (
                <div key={i} className="card mb-15 has-border border-radius-5">
                  <div className="card-header bg-white p-20">
                    <h6 className="mb-0 font-weight-600">{faq.question}</h6>
                  </div>
                  <div className="card-body p-20">
                    <p className="text-muted font-small mb-0">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </section>

            {/* Author card */}
            <AuthorInfo showCard={true} />

            {/* Back link */}
            <div className="text-center mt-30">
              <a href="/" className="font-small color-primary">← Back to Home</a>
            </div>

          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-white py-20 border-top">
        <div className="container">
          <p className="text-center font-small text-muted mb-0">
            <strong>Disclaimer:</strong> Unofficial resource. Not affiliated with the IRS.
            Always verify at <a href="https://www.irs.gov" target="_blank" rel="noopener noreferrer">IRS.gov</a>.
          </p>
        </div>
      </div>

    </>
  );
}
