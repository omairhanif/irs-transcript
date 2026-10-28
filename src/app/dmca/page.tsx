import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { buildMetadata } from '@/lib/metadata';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = buildMetadata({
  title: 'DMCA Policy',
  description: 'DMCA policy for IRS Transcript guide. How to submit a copyright removal request.',
  path: '/dmca',
  noIndex: true,
});

export default function DmcaPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'DMCA', url: '/dmca' }]} />

      <div className="page-header pt-50 pb-50 bg-light">
        <div className="container"><div className="row"><div className="col-lg-8 mx-auto text-center">
          <h1 className="font-weight-900">DMCA Policy</h1>
        </div></div></div>
      </div>

      <div className="container section-padding-60">
        <div className="row"><div className="col-lg-8 mx-auto">
          <div className="bg-white has-border shadow border-radius-10 p-30">
            <section className="mb-40">
              <h2 className="font-weight-800 mb-15">Copyright Infringement Notice</h2>
              <p className="text-muted">
                We respect intellectual property rights. If you believe that content on {SITE_CONFIG.name}
                infringes your copyright, please send a notice to{' '}
                <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a> with the subject line &quot;DMCA Takedown Request&quot;.
              </p>
            </section>
            <section className="mb-40">
              <h2 className="font-weight-800 mb-15">Your Notice Must Include</h2>
              <ul className="text-muted font-small">
                <li className="mb-10">A description of the copyrighted work you claim has been infringed.</li>
                <li className="mb-10">The URL(s) on our site where the infringing material appears.</li>
                <li className="mb-10">Your name, address, telephone number, and email address.</li>
                <li className="mb-10">A statement that you have a good-faith belief the use is not authorised.</li>
                <li>Your electronic or physical signature.</li>
              </ul>
            </section>
            <section>
              <h2 className="font-weight-800 mb-15">Response Time</h2>
              <p className="text-muted">We will review and respond to valid DMCA notices within 5–10 business days.</p>
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
