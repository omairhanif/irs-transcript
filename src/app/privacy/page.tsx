import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { buildMetadata } from '@/lib/metadata';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description: 'Privacy policy for IRS Transcript guide. Learn how we handle your data on this unofficial tax transcript resource.',
  path: '/privacy',
});

export default function PrivacyPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Privacy Policy', url: '/privacy' }]} />

      <div className="page-header pt-50 pb-50 bg-light">
        <div className="container"><div className="row"><div className="col-lg-8 mx-auto text-center">
          <h1 className="font-weight-900">Privacy Policy</h1>
          <p className="text-muted font-small mt-10">Last updated: {lastUpdated}</p>
        </div></div></div>
      </div>

      <div className="container section-padding-60">
        <div className="row"><div className="col-lg-8 mx-auto">
          <div className="bg-white has-border shadow border-radius-10 p-30">

            <section className="mb-40">
              <h2 className="font-weight-800 mb-15">Overview</h2>
              <p className="text-muted">
                {SITE_CONFIG.name} (&quot;we&quot;, &quot;us&quot;) is an unofficial, independent website. This privacy policy explains
                what data we collect and how we use it.
              </p>
            </section>

            <section className="mb-40">
              <h2 className="font-weight-800 mb-15">Information We Collect</h2>
              <ul className="text-muted font-small">
                <li className="mb-10"><strong>Analytics:</strong> We use anonymised analytics (e.g., page views, referral sources) to understand how readers use the site. No personally identifiable information is collected.</li>
                <li className="mb-10"><strong>Contact form:</strong> If you send us a message, we collect your name and email address solely to respond to your inquiry.</li>
                <li><strong>Cookies:</strong> We may use session cookies for basic site functionality. No third-party advertising cookies are set.</li>
              </ul>
            </section>

            <section className="mb-40">
              <h2 className="font-weight-800 mb-15">How We Use Your Information</h2>
              <p className="text-muted">We use collected data to operate and improve the site. We do not sell or share your personal data with third parties.</p>
            </section>

            <section className="mb-40">
              <h2 className="font-weight-800 mb-15">Third-Party Links</h2>
              <p className="text-muted">Our site links to external resources including IRS.gov. We are not responsible for the privacy practices of those sites.</p>
            </section>

            <section>
              <h2 className="font-weight-800 mb-15">Contact</h2>
              <p className="text-muted">
                Questions about this policy? Email <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>.
              </p>
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
