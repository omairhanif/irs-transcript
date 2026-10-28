import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { buildMetadata } from '@/lib/metadata';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = buildMetadata({
  title: 'Terms of Service',
  description: 'Terms of service for IRS Transcript guide. This is an unofficial, educational resource — not affiliated with the IRS.',
  path: '/terms',
});

export default function TermsPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Terms of Service', url: '/terms' }]} />

      <div className="page-header pt-50 pb-50 bg-light">
        <div className="container"><div className="row"><div className="col-lg-8 mx-auto text-center">
          <h1 className="font-weight-900">Terms of Service</h1>
          <p className="text-muted font-small mt-10">Last updated: {lastUpdated}</p>
        </div></div></div>
      </div>

      <div className="container section-padding-60">
        <div className="row"><div className="col-lg-8 mx-auto">
          <div className="bg-white has-border shadow border-radius-10 p-30">

            <section className="mb-40">
              <h2 className="font-weight-800 mb-15">Acceptance of Terms</h2>
              <p className="text-muted">By using {SITE_CONFIG.name} (&quot;the Site&quot;), you agree to these terms. If you do not agree, please do not use the Site.</p>
            </section>

            <section className="mb-40">
              <h2 className="font-weight-800 mb-15">Unofficial & Educational Only</h2>
              <p className="text-muted">
                This Site is <strong>unofficial and not affiliated with the IRS or any government agency</strong>.
                All content is provided for general informational and educational purposes only.
                Nothing on this Site constitutes tax, legal, or financial advice.
                Always consult a qualified professional and the official{' '}
                <a href="https://www.irs.gov" target="_blank" rel="noopener noreferrer">IRS.gov</a>.
              </p>
            </section>

            <section className="mb-40">
              <h2 className="font-weight-800 mb-15">Intellectual Property</h2>
              <p className="text-muted">All original content, text, and graphics on this Site are the property of {SITE_CONFIG.name}. You may not reproduce or redistribute our content without permission.</p>
            </section>

            <section className="mb-40">
              <h2 className="font-weight-800 mb-15">Limitation of Liability</h2>
              <p className="text-muted">We make no warranties about the accuracy or completeness of any information. We are not liable for any damages arising from reliance on information provided on this Site.</p>
            </section>

            <section>
              <h2 className="font-weight-800 mb-15">Contact</h2>
              <p className="text-muted">Questions? Email <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>.</p>
            </section>
          </div>
          <div className="text-center mt-30">
            <a href="/" className="font-small color-primary">← Back to Home</a>
          </div>
        </div></div>
      </div>
    </>
  );
}
