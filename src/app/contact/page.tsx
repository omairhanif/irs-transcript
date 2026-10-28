import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { buildMetadata } from '@/lib/metadata';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = buildMetadata({
  title: 'Contact',
  description: 'Get in touch with the IRS Transcript guide team. Report errors, ask questions, or suggest improvements to our unofficial IRS transcript resource.',
  path: '/contact',
  keywords: ['contact irs transcript guide', 'irs transcript help'],
});

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Contact', url: '/contact' }]} />

      <div className="page-header pt-50 pb-50 bg-light">
        <div className="container">
          <div className="row"><div className="col-lg-8 mx-auto text-center">
            <h1 className="font-weight-900">Contact Us</h1>
            <p className="text-muted font-medium mt-15">Questions, corrections, or feedback — we&apos;d love to hear from you.</p>
          </div></div>
        </div>
      </div>

      <div className="container section-padding-60">
        <div className="row"><div className="col-lg-8 mx-auto">

          <div className="bg-white has-border shadow border-radius-10 p-30 mb-30">
            <h2 className="font-weight-800 mb-20">Get in Touch</h2>
            <p className="text-muted mb-20">
              For the fastest response, email us directly at{' '}
              <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>.
              We&apos;d love to hear from you.
            </p>

            <form>
              <div className="form-group mb-20">
                <label className="font-small font-weight-600 mb-5">Your Name</label>
                <input type="text" className="form-control" placeholder="Jane Smith" />
              </div>
              <div className="form-group mb-20">
                <label className="font-small font-weight-600 mb-5">Email Address</label>
                <input type="email" className="form-control" placeholder="jane@example.com" />
              </div>
              <div className="form-group mb-20">
                <label className="font-small font-weight-600 mb-5">Subject</label>
                <input type="text" className="form-control" placeholder="Question about IRS transcripts" />
              </div>
              <div className="form-group mb-25">
                <label className="font-small font-weight-600 mb-5">Message</label>
                <textarea className="form-control" rows={5} placeholder="Tell us how we can help..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary font-small">Send Message</button>
            </form>
          </div>

          <div className="bg-light border-radius-10 p-20">
            <p className="font-small text-muted mb-0">
              <strong>Note:</strong> We are an unofficial resource and cannot help resolve IRS account issues.
              For IRS matters, contact the IRS directly at <a href="https://www.irs.gov/help/telephone-assistance" target="_blank" rel="noopener noreferrer">IRS.gov</a> or call 1-800-829-1040.
            </p>
          </div>

          <div className="text-center mt-30">
            <a href="/" className="font-small color-primary">← Back to Home</a>
          </div>
        </div></div>
      </div>
    </>
  );
}
