import Link from 'next/link';
import { SITE_CONFIG } from '@/config/site';

const QUICK_ARTICLES = [
  {
    title: 'How to Get an IRS Tax Transcript Online',
    slug: 'how-to-get-irs-tax-transcript-online',
    image: 'how-to-get-irs-tax-transcript-online',
    description: 'Requesting a transcript',
  },
  {
    title: 'IRS Transcript Codes Explained',
    slug: 'irs-transcript-codes-explained',
    image: 'irs-transcript-codes-explained',
    description: 'Understanding account codes',
  },
  {
    title: 'IRS Transcript Code 846: Refund Issued',
    slug: 'irs-transcript-code-846-refund',
    image: 'irs-transcript-code-846-refund',
    description: 'Reading refund activity',
  },
];

const GUIDE_LINKS = [
  { name: 'What Is an IRS Tax Transcript?', path: '/what-is-an-irs-tax-transcript' },
  { name: 'Get a Transcript Online', path: '/how-to-get-irs-tax-transcript-online' },
  { name: 'IRS Transcript Codes', path: '/irs-transcript-codes-explained' },
  { name: 'Read an Account Transcript', path: '/how-to-read-irs-account-transcript' },
];

function QuickArticle({ article }: { article: (typeof QUICK_ARTICLES)[number] }) {
  return (
    <li className="mb-30">
      <div className="d-flex hover-up-2 transition-normal">
        <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
          <Link className="color-white" href={`/${article.slug}`}>
            <img src={`/articles/${article.image}.jpg`} alt={article.title} loading="lazy" decoding="async" />
          </Link>
        </div>
        <div className="post-content media-body">
          <h6 className="post-title mb-15 text-limit-2-row font-medium">
            <Link href={`/${article.slug}`}>{article.title}</Link>
          </h6>
          <div className="entry-meta meta-1 float-start font-x-small text-uppercase">
            <span className="post-on">{article.description}</span>
          </div>
        </div>
      </div>
    </li>
  );
}

export function Header() {
  return (
    <>
      <aside id="sidebar-wrapper" className="custom-scrollbar offcanvas-sidebar">
        <button className="off-canvas-close" aria-label="Close sidebar">
          <i className="elegant-icon icon_close"></i>
        </button>
        <div className="sidebar-inner">
          <div className="sidebar-widget widget_categories mb-50 mt-30">
            <div className="widget-header-2 position-relative">
              <h5 className="mt-5 mb-15">Explore IRS transcripts</h5>
            </div>
            <div className="widget_nav_menu">
              <ul>
                <li className="cat-item cat-item-2"><Link href="/what-is-an-irs-tax-transcript">Transcript basics</Link><span className="post-count">1</span></li>
                <li className="cat-item cat-item-3"><Link href="/how-to-get-irs-tax-transcript-online">Getting transcripts</Link><span className="post-count">1</span></li>
                <li className="cat-item cat-item-4"><Link href="/irs-transcript-codes-explained">Transcript codes</Link><span className="post-count">3</span></li>
                <li className="cat-item cat-item-5"><Link href="/irs-transcript-cycle-codes-processing-dates">Refunds &amp; processing</Link><span className="post-count">5</span></li>
                <li className="cat-item cat-item-6"><Link href="/how-to-read-irs-account-transcript">Reading transcripts</Link><span className="post-count">4</span></li>
              </ul>
            </div>
          </div>

          <div className="sidebar-widget widget-latest-posts mb-50">
            <div className="widget-header-2 position-relative mb-30">
              <h5 className="mt-5 mb-30">Don&apos;t miss</h5>
            </div>
            <div className="post-block-list post-module-1 post-module-5">
              <ul className="list-post">
                {QUICK_ARTICLES.map((article) => (
                  <QuickArticle key={article.slug} article={article} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </aside>

      <header className="main-header header-style-1 font-heading">
        <div className="header-top">
          <div className="container">
            <div className="row pt-20 pb-20">
              <div className="col-md-3 col-xs-6">
                <Link href="/" aria-label={SITE_CONFIG.name}>
                  <img className="logo" src={SITE_CONFIG.logo} alt={SITE_CONFIG.name} />
                </Link>
              </div>
              <div className="col-md-9 col-xs-6 text-end header-top-right">
                <ul className="list-inline nav-topbar d-none d-md-inline">
                  <li className="list-inline-item menu-item-has-children">
                    <a href="#">Resources</a>
                    <ul className="sub-menu font-small">
                      <li><Link href="/about">About this guide</Link></li>
                      <li><Link href="/contact">Contact</Link></li>
                      <li><Link href="/privacy">Privacy</Link></li>
                      <li><Link href="/terms">Terms</Link></li>
                      <li><Link href="/dmca">DMCA</Link></li>
                    </ul>
                  </li>
                  <li className="list-inline-item"><Link href="/irs-transcript-codes-explained">Transcript code guide</Link></li>
                </ul>
                <span className="vertical-divider mr-20 ml-20 d-none d-md-inline"></span>
                <button className="search-icon d-none d-md-inline">
                  <span className="mr-15 text-muted font-small"><i className="elegant-icon icon_search mr-5"></i>Search</span>
                </button>
                <div className="dark-light-mode-cover">
                  <a className="dark-light-mode" href="#" aria-label="Toggle dark mode"></a>
                </div>
                <Link className="btn btn-radius bg-primary text-white ml-15 font-small box-shadow" href="/how-to-get-irs-tax-transcript-online">
                  Get transcript
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="header-sticky">
          <div className="container align-self-center position-relative">
            <div className="mobile_menu d-lg-none d-block"></div>
            <div className="main-nav d-none d-lg-block float-start">
              <nav>
                <ul className="main-menu d-none d-lg-inline font-small">
                  <li className="menu-item-has-children">
                    <Link href="/"><i className="elegant-icon icon_house_alt mr-5"></i>Home</Link>
                    <ul className="sub-menu text-muted font-small">
                      <li><a href="/#featured-articles">Featured articles</a></li>
                      <li><a href="/#latest-articles">Latest articles</a></li>
                    </ul>
                  </li>
                  <li><Link href="/what-is-an-irs-tax-transcript">Transcript basics</Link></li>
                  <li className="current-item has-mega-menu">
                    <Link href="/irs-transcript-codes-explained">Transcript codes</Link>
                    <ul className="mega-menu">
                      <li className="sub-mega-menu sub-mega-menu-width-22">
                        <a className="menu-title" href="/irs-transcript-codes-explained">Code guides</a>
                        <ul>
                          <li><Link href="/irs-transcript-codes-explained">All transcript codes</Link></li>
                          <li><Link href="/irs-transcript-code-152-explained">Code 152</Link></li>
                          <li><Link href="/irs-transcript-code-971-explained">Code 971</Link></li>
                        </ul>
                      </li>
                      <li className="sub-mega-menu sub-mega-menu-width-22">
                        <a className="menu-title" href="/irs-transcript-code-846-refund">Refund codes</a>
                        <ul>
                          <li><Link href="/irs-transcript-code-846-refund">Code 846: refund issued</Link></li>
                          <li><Link href="/irs-transcript-code-570-refund-hold">Code 570: refund hold</Link></li>
                          <li><Link href="/irs-transcript-code-810-refund-freeze">Code 810: refund freeze</Link></li>
                        </ul>
                      </li>
                      <li className="sub-mega-menu sub-mega-menu-width-22">
                        <a className="menu-title" href="/irs-transcript-cycle-codes-processing-dates">Processing</a>
                        <ul>
                          <li><Link href="/irs-transcript-cycle-codes-processing-dates">Cycle codes &amp; dates</Link></li>
                          <li><Link href="/irs-tax-transcript-not-updating">Transcript not updating</Link></li>
                          <li><Link href="/understand-irs-transcript-account-balance">Account balance</Link></li>
                        </ul>
                      </li>
                      <li className="sub-mega-menu sub-mega-menu-width-22">
                        <a className="menu-title" href="/how-to-read-irs-account-transcript">Transcript types</a>
                        <ul>
                          <li><Link href="/how-to-read-irs-account-transcript">Read an account transcript</Link></li>
                          <li><Link href="/wage-and-income-vs-tax-return-transcript">Wage &amp; income vs. return</Link></li>
                          <li><Link href="/return-transcript-vs-record-of-account">Return vs. record of account</Link></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><Link href="/how-to-get-irs-tax-transcript-online">Get a transcript</Link></li>
                  <li><Link href="/how-to-read-irs-account-transcript">Read your transcript</Link></li>
                  <li><Link href="/irs-tax-transcript-not-updating">Troubleshooting</Link></li>
                  <li><Link href="/about">About</Link></li>
                </ul>

                <ul id="mobile-menu" className="d-block d-lg-none text-muted">
                  <li className="menu-item-has-children">
                    <Link href="/">Home</Link>
                    <ul className="sub-menu text-muted font-small">
                      <li><a href="/#featured-articles">Featured articles</a></li>
                      <li><a href="/#latest-articles">Latest articles</a></li>
                    </ul>
                  </li>
                  <li><Link href="/what-is-an-irs-tax-transcript">Transcript basics</Link></li>
                  <li className="menu-item-has-children">
                    <Link href="/irs-transcript-codes-explained">Transcript codes</Link>
                    <ul className="sub-menu font-small">
                      {GUIDE_LINKS.slice(2).map((link) => (
                        <li key={link.path}><Link href={link.path}>{link.name}</Link></li>
                      ))}
                      <li><Link href="/irs-transcript-code-846-refund">Code 846: refund issued</Link></li>
                      <li><Link href="/irs-transcript-code-570-refund-hold">Code 570: refund hold</Link></li>
                      <li><Link href="/irs-transcript-code-810-refund-freeze">Code 810: refund freeze</Link></li>
                    </ul>
                  </li>
                  <li><Link href="/how-to-get-irs-tax-transcript-online">Get a transcript</Link></li>
                  <li className="menu-item-has-children">
                    <Link href="/how-to-read-irs-account-transcript">Read your transcript</Link>
                    <ul className="sub-menu font-small">
                      <li><Link href="/how-to-read-irs-account-transcript">Account transcript</Link></li>
                      <li><Link href="/wage-and-income-vs-tax-return-transcript">Wage &amp; income vs. return</Link></li>
                      <li><Link href="/return-transcript-vs-record-of-account">Return vs. record of account</Link></li>
                    </ul>
                  </li>
                  <li><Link href="/irs-tax-transcript-not-updating">Troubleshooting</Link></li>
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </nav>
            </div>

            <div className="float-end header-tools text-muted font-small">
              <ul className="header-social-network d-inline-block list-inline mr-15">
                <li className="list-inline-item">
                  <a className="social-icon tw text-xs-center" target="_blank" rel="noopener noreferrer" href={SITE_CONFIG.social.twitter} title="Follow IRS Transcript on X">
                    <i className="elegant-icon social_twitter"></i>
                  </a>
                </li>
              </ul>
              <div className="off-canvas-toggle-cover d-inline-block">
                <div className="off-canvas-toggle hidden d-inline-block" id="off-canvas-toggle">
                  <span></span>
                </div>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </header>

      <div className="main-search-form" id="search">
        <div className="container">
          <div className="pt-50 pb-50">
            <div className="row mb-20">
              <div className="col-12 align-self-center main-search-form-cover m-auto">
                <p className="text-center"><span className="search-text-bg">Search</span></p>
                <form action="/" method="get" className="search-header">
                  <div className="input-group w-100">
                    <input type="search" name="q" className="form-control" placeholder="Search IRS transcript guides" />
                    <div className="input-group-append">
                      <button className="btn btn-search bg-white" type="submit" aria-label="Search">
                        <i className="elegant-icon icon_search"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="row mt-80 text-center">
              <div className="col-12 font-small suggested-area">
                <h5 className="suggested font-heading mb-20 text-muted"><strong>Suggested topics:</strong></h5>
                <ul className="list-inline d-inline-block">
                  <li className="list-inline-item"><a href="/#transcript-guides">Transcript basics</a></li>
                  <li className="list-inline-item"><a href="/#transcript-codes">Transaction codes</a></li>
                  <li className="list-inline-item"><a href="/#latest-articles">Refund codes</a></li>
                  <li className="list-inline-item"><a href="/#latest-articles">Processing dates</a></li>
                  <li className="list-inline-item"><a href="/#transcript-guides">Account transcript</a></li>
                  <li className="list-inline-item"><a href="/#latest-articles">Wage and income</a></li>
                </ul>
              </div>
            </div>
            <div className="row mt-80">
              {QUICK_ARTICLES.map((article) => (
                <div className="col-lg-4 col-md-6" key={article.slug}>
                  <div className="d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5 mb-30">
                    <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                      <Link className="color-white" href={`/${article.slug}`}>
                        <img src={`/articles/${article.image}.jpg`} alt={article.title} loading="lazy" decoding="async" />
                      </Link>
                    </div>
                    <div className="post-content media-body">
                      <h6><Link href={`/${article.slug}`}>{article.title}</Link></h6>
                      <p className="text-muted font-small">{article.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
