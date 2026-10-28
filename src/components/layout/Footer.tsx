import Link from 'next/link';
import { SITE_CONFIG } from '@/config/site';

const QUICK_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Types of Transcripts', path: '/types-of-irs-transcripts' },
  { name: 'How to Request', path: '/how-to-request-irs-transcript' },
  { name: 'Transcript Codes', path: '/irs-transcript-codes' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const TOPIC_TAGS = [
  'IRS Transcript', 'Tax Return', 'Account Transcript', 'Wage & Income',
  'Transcript Codes', 'Get Transcript', 'Form 4506-T', 'IRS Online',
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="pt-50 pb-20 bg-grey">
      <div className="container">
        <div className="row">

          {/* About */}
          <div className="col-lg-3 col-md-6">
            <div className="sidebar-widget wow fadeInUp animated mb-30">
              <div className="widget-header-2 position-relative mb-30">
                <h5 className="mt-5 mb-30">About Us</h5>
              </div>
              <div className="textwidget">
                <p>
                  An unofficial, plain-English guide to IRS transcripts. Not affiliated with the IRS or any government agency.
                </p>
                <p>
                  <strong className="color-black">Email</strong><br />
                  <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>
                </p>
                <p><strong className="color-black">Follow us</strong></p>
                <ul className="header-social-network d-inline-block list-inline color-white mb-20">
                  <li className="list-inline-item">
                    <a className="tw" href={SITE_CONFIG.social.twitter} target="_blank" rel="noopener noreferrer" title="Twitter / X">
                      <i className="elegant-icon social_twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <div className="sidebar-widget widget_categories wow fadeInUp animated mb-30" data-wow-delay="0.1s">
              <div className="widget-header-2 position-relative mb-30">
                <h5 className="mt-5 mb-30">Quick Links</h5>
              </div>
              <ul className="font-small">
                {QUICK_LINKS.map((link, i) => (
                  <li key={link.path} className={`cat-item cat-item-${i + 2}`}>
                    <Link href={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tag Cloud */}
          <div className="col-lg-3 col-md-6">
            <div className="sidebar-widget widget_tagcloud wow fadeInUp animated mb-30" data-wow-delay="0.2s">
              <div className="widget-header-2 position-relative mb-30">
                <h5 className="mt-5 mb-30">Topics</h5>
              </div>
              <div className="tagcloud mt-50">
                {TOPIC_TAGS.map((tag) => (
                  <a key={tag} className="tag-cloud-link" href="#">{tag}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-lg-4 col-md-6">
            <div className="sidebar-widget widget_newsletter wow fadeInUp animated mb-30" data-wow-delay="0.3s">
              <div className="widget-header-2 position-relative mb-30">
                <h5 className="mt-5 mb-30">Newsletter</h5>
              </div>
              <div className="newsletter">
                <p className="font-medium">Subscribe for IRS transcript tips and updates straight to your inbox.</p>
                <form className="input-group form-subcriber mt-30 d-flex">
                  <input type="email" className="form-control bg-white font-small" placeholder="Enter your email" />
                  <button className="btn bg-primary text-white" type="submit">Subscribe</button>
                  <label className="mt-20">
                    <input className="mr-5" name="agree" type="checkbox" value="1" required /> I agree to the{' '}
                    <Link href="/terms">terms &amp; conditions</Link>
                  </label>
                </form>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="footer-copy-right pt-30 mt-20 wow fadeInUp animated">
          <p className="float-md-start font-small text-muted">
            © {year} {SITE_CONFIG.name} — Unofficial Guide. Not affiliated with the IRS.
          </p>
          <p className="float-md-end font-small text-muted">
            <Link href="/privacy">Privacy</Link> |{' '}
            <Link href="/terms">Terms</Link> |{' '}
            <Link href="/dmca">DMCA</Link>
          </p>
        </div>

      </div>
    </footer>
  );
}


