import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'About',
  description: 'Learn about IRS Transcript — an unofficial, independent resource helping everyday taxpayers understand and access their IRS transcripts with plain-English guides.',
  path: '/about',
  keywords: ['about irs transcript guide', 'unofficial irs help', 'tax transcript resource'],
});

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'About', url: '/about' }]} />

      <div className="page-header pt-50 pb-50 bg-light">
        <div className="container">
          <div className="row"><div className="col-lg-8 mx-auto text-center">
            <h1 className="font-weight-900">About IRS Transcript Guide</h1>
            <p className="text-muted font-medium mt-15">Unofficial, independent — always plain English.</p>
          </div></div>
        </div>
      </div>

      <div className="container section-padding-60">
        <div className="row"><div className="col-lg-8 mx-auto">

          <div className="bg-white has-border shadow border-radius-10 p-30 mb-40">
            <h2 className="font-weight-800 mb-20">Who We Are</h2>
            <p className="text-muted font-medium">
              IRS Transcript is an unofficial, independent resource run by a team of tax writers and researchers.
              We are <strong>not affiliated with the IRS or any government agency</strong>. Our mission is to
              translate confusing IRS terminology and processes into plain, actionable English for everyday taxpayers.
            </p>
          </div>

          <div className="bg-white has-border shadow border-radius-10 p-30 mb-40">
            <h2 className="font-weight-800 mb-20">Why We Built This</h2>
            <p className="text-muted mb-15">
              Millions of Americans need their IRS transcripts every year — for mortgage applications, resolving IRS
              notices, filing amended returns, or verifying past income. Yet the official IRS documentation can be
              dense and hard to navigate.
            </p>
            <p className="text-muted">
              We created this guide to fill that gap: a straightforward, jargon-free reference that walks you through
              every type of IRS transcript, how to request one, and how to read it.
            </p>
          </div>

          <div className="bg-white has-border shadow border-radius-10 p-30 mb-40">
            <h2 className="font-weight-800 mb-20">Disclaimer</h2>
            <div className="p-20 bg-light border-radius-5">
              <p className="text-muted mb-0">
                This website is an <strong>unofficial</strong> guide. All content is provided for educational purposes only
                and does not constitute tax or legal advice. Always consult the official{' '}
                <a href="https://www.irs.gov" target="_blank" rel="noopener noreferrer">IRS.gov</a> or a qualified
                tax professional for authoritative guidance.
              </p>
            </div>
          </div>

          <div className="text-center mt-30">
            <a href="/contact" className="btn btn-primary font-small mr-15">Contact Us</a>
            <a href="/" className="btn btn-light font-small">← Back to Home</a>
          </div>
        </div></div>
      </div>
    </>
  );
}
