import type { Metadata } from 'next';
import Link from 'next/link';
import { StructuredData } from '@/components/seo/StructuredData';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { buildMetadata } from '@/lib/metadata';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = buildMetadata({
  exactTitle: true,
  description: SITE_CONFIG.description,
  path: '/',
  keywords: ['irs transcript guide', 'what is irs transcript', 'irs transcript types explained'],
});

const HOME_FAQS = [
  { question: 'What is an IRS transcript?', answer: 'An IRS transcript is an official summary of your tax information on file with the IRS. Four main types: Tax Return, Tax Account, Record of Account, and Wage & Income Transcript.' },
  { question: 'How do I get my IRS transcript online?', answer: 'Visit IRS.gov and use "Get Transcript Online". Verify your identity with your SSN, filing status, mailing address, and a financial account number.' },
  { question: 'Difference between tax return and tax account transcript?', answer: 'Tax Return Transcript shows line items from your original filed return. Tax Account Transcript shows basic data plus changes made after filing.' },
  { question: 'How long does it take to get an IRS transcript?', answer: 'Online access is immediate. Mail requests via Form 4506-T typically arrive within 5–10 business days.' },
  { question: 'Why would I need an IRS transcript?', answer: 'Common reasons: mortgage applications, student loan verification, resolving IRS notices, filing back taxes, identity theft resolution.' },
];

const ARTICLES = [
  {
    slug: 'what-is-an-irs-tax-transcript',
    title: 'What Is an IRS Tax Transcript?',
    description: 'Learn what an IRS tax transcript contains, how it differs from a tax return, and when you may need one.',
    category: 'Transcript basics',
  },
  {
    slug: 'how-to-get-irs-tax-transcript-online',
    title: 'How to Get an IRS Tax Transcript Online',
    description: 'Understand the online options for requesting an IRS transcript and the information needed to access your records.',
    category: 'Getting transcripts',
  },
  {
    slug: 'irs-transcript-codes-explained',
    title: 'IRS Transcript Codes Explained',
    description: 'Use this guide to understand IRS transcript transaction codes and what they can indicate about your account.',
    category: 'Transcript codes',
  },
  {
    slug: 'irs-transcript-code-846-refund',
    title: 'IRS Transcript Code 846: Refund Issued',
    description: 'Learn what transaction code 846 means on an IRS account transcript and how it relates to a refund.',
    category: 'Refunds',
  },
  {
    slug: 'irs-transcript-code-570-refund-hold',
    title: 'IRS Transcript Code 570: Refund Hold',
    description: 'Find out what code 570 indicates on a transcript and how to interpret a pending account hold.',
    category: 'Refunds',
  },
  {
    slug: 'irs-transcript-code-971-explained',
    title: 'IRS Transcript Code 971 Explained',
    description: 'See what transaction code 971 means and how it can relate to notices or other account activity.',
    category: 'Transcript codes',
  },
  {
    slug: 'irs-transcript-cycle-codes-processing-dates',
    title: 'IRS Transcript Cycle Codes and Processing Dates',
    description: 'Learn how cycle codes appear on transcripts and what they can tell you about IRS processing activity.',
    category: 'Processing',
  },
  {
    slug: 'irs-tax-transcript-not-updating',
    title: 'IRS Tax Transcript Not Updating',
    description: 'Review common reasons an IRS transcript may not show a recent change and what to check next.',
    category: 'Troubleshooting',
  },
  {
    slug: 'wage-and-income-vs-tax-return-transcript',
    title: 'Wage and Income vs. Tax Return Transcript',
    description: 'Compare the information shown on Wage and Income and Tax Return transcripts to identify the right record.',
    category: 'Transcript types',
  },
  {
    slug: 'how-to-read-irs-account-transcript',
    title: 'How to Read an IRS Account Transcript',
    description: 'Learn how to navigate the dates, transaction codes, payments, and balance details on an account transcript.',
    category: 'Reading transcripts',
  },
  {
    slug: 'irs-transcript-code-152-explained',
    title: 'IRS Transcript Code 152 Explained',
    description: 'Understand what code 152 means on an IRS transcript and how it relates to return processing.',
    category: 'Transcript codes',
  },
  {
    slug: 'understand-irs-transcript-account-balance',
    title: 'Understand Your IRS Transcript Account Balance',
    description: 'Learn how to interpret the balance and account activity displayed on an IRS transcript.',
    category: 'Reading transcripts',
  },
  {
    slug: 'irs-transcript-code-810-refund-freeze',
    title: 'IRS Transcript Code 810: Refund Freeze',
    description: 'Find out what transaction code 810 can mean for a refund and how it appears in your account activity.',
    category: 'Refunds',
  },
  {
    slug: 'return-transcript-vs-record-of-account',
    title: 'Return Transcript vs. Record of Account',
    description: 'Compare a Tax Return Transcript with a Record of Account and see how their contents differ.',
    category: 'Transcript types',
  },
] as const;

type Article = (typeof ARTICLES)[number];

const articleUrl = (slug: string) => `${SITE_CONFIG.url}/${slug}`;

function ArticleTags({ article }: { article: Article }) {
  return (
    <div className="entry-meta meta-0 font-small mb-10">
      <span className="post-cat text-info">{article.category}</span>
    </div>
  );
}

function ShareLinks({ article }: { article: Article }) {
  const url = encodeURIComponent(articleUrl(article.slug));
  const title = encodeURIComponent(article.title);

  return (
    <ul className="social-share">
      <li><a href="#" aria-label={`Share ${article.title}`}><i className="elegant-icon social_share"></i></a></li>
      <li><a className="fb" href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} title="Share on Facebook" target="_blank" rel="noopener noreferrer"><i className="elegant-icon social_facebook"></i></a></li>
      <li><a className="tw" href={`https://twitter.com/intent/tweet?url=${url}&text=${title}`} title="Share on X" target="_blank" rel="noopener noreferrer"><i className="elegant-icon social_twitter"></i></a></li>
      <li><a className="pt" href={`https://pinterest.com/pin/create/button/?url=${url}&description=${title}`} title="Share on Pinterest" target="_blank" rel="noopener noreferrer"><i className="elegant-icon social_pinterest"></i></a></li>
    </ul>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated">
      <div className="post-card-1 border-radius-10 hover-up home-post-card">
        <div className="post-thumb thumb-overlay img-hover-slide position-relative">
          <img
            className="home-article-image"
            src={`/articles/${article.slug}.jpg`}
            alt={article.title}
            loading="lazy"
            decoding="async"
          />
          <Link className="img-link" href={`/${article.slug}`} aria-label={article.title} />
          <ShareLinks article={article} />
        </div>
        <div className="post-content p-30">
          <ArticleTags article={article} />
          <div className="d-flex post-card-content">
            <h5 className="post-title mb-15 font-weight-900">
              <Link href={`/${article.slug}`}>{article.title}</Link>
            </h5>
            <p className="post-excerpt mb-20 font-small text-muted">{article.description}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

function LatestArticle({ article }: { article: Article }) {
  return (
    <article className="hover-up-2 transition-normal wow fadeInUp animated">
      <div className="row mb-40 list-style-2">
        <div className="col-md-4">
          <div className="post-thumb position-relative border-radius-5">
            <div className="img-hover-slide border-radius-5 position-relative">
              <img
                className="home-article-image"
                src={`/articles/${article.slug}.jpg`}
                alt={article.title}
                loading="lazy"
                decoding="async"
              />
              <Link className="img-link" href={`/${article.slug}`} aria-label={article.title} />
            </div>
            <ShareLinks article={article} />
          </div>
        </div>
        <div className="col-md-8 align-self-center">
          <div className="post-content">
            <ArticleTags article={article} />
            <h5 className="post-title font-weight-900 mb-15">
              <Link href={`/${article.slug}`}>{article.title}</Link>
            </h5>
            <p className="post-excerpt mb-15 font-small text-muted">{article.description}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

function FeaturedSlide({ article }: { article: Article }) {
  return (
    <div className="position-relative post-thumb">
      <div className="thumb-overlay img-hover-slide position-relative">
        <img
          className="home-article-image"
          src={`/articles/${article.slug}.jpg`}
          alt={article.title}
          loading="lazy"
          decoding="async"
        />
        <Link className="img-link" href={`/${article.slug}`} aria-label={article.title} />
        <span className="top-left-icon bg-warning"><i className="elegant-icon icon_star_alt"></i></span>
        <div className="post-content-overlay text-white ml-30 mr-30 pb-30">
          <ArticleTags article={article} />
          <h3 className="post-title font-weight-900 mb-15">
            <Link className="text-white" href={`/${article.slug}`}>{article.title}</Link>
          </h3>
          <p className="font-small text-white mb-0">{article.description}</p>
        </div>
      </div>
    </div>
  );
}

function SidebarArticle({ article }: { article: Article }) {
  return (
    <li className="mb-30">
      <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
        <div className="post-content media-body">
          <h6 className="post-title mb-15 text-limit-2-row font-medium">
            <Link href={`/${article.slug}`}>{article.title}</Link>
          </h6>
          <ArticleTags article={article} />
        </div>
        <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
          <Link className="color-white" href={`/${article.slug}`}>
            <img src={`/articles/${article.slug}.jpg`} alt={article.title} loading="lazy" decoding="async" />
          </Link>
        </div>
      </div>
    </li>
  );
}

export default function HomePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }]} />
      <StructuredData id="hp-schema" schema={{ '@context': 'https://schema.org', '@type': 'WebPage', name: SITE_CONFIG.fullTitle, url: SITE_CONFIG.url, description: SITE_CONFIG.description, datePublished: SITE_CONFIG.datePublished, dateModified: SITE_CONFIG.dateModified, inLanguage: 'en-US' }} />
      <FAQSchema faqs={HOME_FAQS} />

      <section className="featured-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <p className="text-muted">
                <span
                  className="typewrite d-inline"
                  data-period="2000"
                  data-type='["Plain-English IRS Transcript Guide.", "Tax Transcript Explainers.", "Help Understanding Transcript Codes."]'
                />
              </p>
              <h2>Welcome to <span>IRS Transcript</span></h2>
              <h3 className="mb-20">Make sense of your tax records</h3>
              <h5 className="text-muted">
                Learn how to request, read, and understand IRS tax transcripts, account activity, and transaction codes.
              </h5>
              <form className="input-group form-subcriber mt-30 d-flex">
                <input type="email" className="form-control bg-white font-small" placeholder="Enter your email" />
                <button className="btn bg-primary text-white" type="submit">Subscribe</button>
              </form>
            </div>
            <div className="col-lg-6 text-end d-none d-lg-block">
              <img src="/assets/imgs/authors/featured.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <div className="container" id="featured-articles">
        <div className="hot-tags pt-30 pb-30 font-small align-self-center">
          <div className="widget-header-3">
            <div className="row align-self-center">
              <div className="col-md-4 align-self-center">
                <h5 className="widget-title">Featured articles</h5>
              </div>
              <div className="col-md-8 text-md-end font-small align-self-center">
                <p className="d-inline-block mr-5 mb-0">
                  <i className="elegant-icon icon_tag_alt mr-5 text-muted"></i>Topics:
                </p>
                <ul className="list-inline d-inline-block tags">
                  <li className="list-inline-item"><a href="#transcript-guides"># IRS Transcripts</a></li>
                  <li className="list-inline-item"><a href="#transcript-codes"># Transcript Codes</a></li>
                  <li className="list-inline-item"><a href="#latest-articles"># Refund Updates</a></li>
                  <li className="list-inline-item"><a href="#transcript-guides"># Get Your Transcript</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="loop-grid mb-30">
          <div className="row">
            <div className="col-lg-8 mb-30">
              <div className="carausel-post-1 hover-up border-radius-10 overflow-hidden transition-normal position-relative wow fadeInUp animated">
                <div className="arrow-cover"></div>
                <div className="slide-fade">
                  {ARTICLES.slice(0, 2).map((article) => (
                    <FeaturedSlide key={article.slug} article={article} />
                  ))}
                </div>
              </div>
            </div>
            {ARTICLES.slice(2, 6).map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </div>

      <section className="bg-grey pt-50 pb-50" id="transcript-guides">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="post-module-2" id="transcript-codes">
                <div className="widget-header-1 position-relative mb-30 wow fadeInUp animated">
                  <h5 className="mt-5 mb-30">IRS transcript guides</h5>
                </div>
                <div className="loop-list loop-list-style-1">
                  <div className="row">
                    {ARTICLES.slice(6, 11).map((article) => (
                      <ArticleCard key={article.slug} article={article} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="post-module-3" id="latest-articles">
                <div className="widget-header-1 position-relative mb-30">
                  <h5 className="mt-5 mb-30">Latest articles</h5>
                </div>
                <div className="loop-list loop-list-style-1">
                  {ARTICLES.slice(11).map((article) => (
                    <LatestArticle key={article.slug} article={article} />
                  ))}
                </div>
                <div className="pagination-area mb-30">
                  <nav aria-label="Homepage sections">
                    <ul className="pagination">
                      <li className="page-item active"><a className="page-link" href="#featured-articles">01</a></li>
                      <li className="page-item"><a className="page-link" href="#transcript-guides">02</a></li>
                      <li className="page-item"><a className="page-link" href="#latest-articles">03</a></li>
                      <li className="page-item"><a className="page-link" href="#latest-articles" aria-label="Go to latest articles"><i className="elegant-icon arrow_right"></i></a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            <aside className="col-lg-4">
              <div className="widget-area">
                <div className="sidebar-widget widget-about mb-50 pt-30 pr-30 pb-30 pl-30 bg-white border-radius-5 has-border wow fadeInUp animated">
                  <img className="about-author-img mb-25" src="/assets/imgs/authors/featured.png" alt="" />
                  <h5 className="mb-20">About this guide</h5>
                  <p className="font-medium text-muted">
                    {SITE_CONFIG.description} This site is an independent resource and is not affiliated with the IRS or any government agency.
                  </p>
                </div>
                <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
                  <div className="widget-header-1 position-relative mb-30">
                    <h5 className="mt-5 mb-30">Start with these guides</h5>
                  </div>
                  <div className="post-block-list post-module-1">
                    <ul className="list-post">
                      {ARTICLES.slice(0, 4).map((article) => (
                        <SidebarArticle key={article.slug} article={article} />
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="sidebar-widget widget_categories mb-50 wow fadeInUp animated">
                  <div className="widget-header-1 position-relative mb-30">
                    <h5 className="mt-5 mb-30">Browse topics</h5>
                  </div>
                  <ul>
                    <li className="cat-item cat-item-2"><a href="#transcript-guides">Transcript basics &amp; access</a><span className="post-count">2</span></li>
                    <li className="cat-item cat-item-3"><a href="#transcript-codes">Transcript codes</a><span className="post-count">3</span></li>
                    <li className="cat-item cat-item-4"><a href="#latest-articles">Refunds &amp; processing</a><span className="post-count">5</span></li>
                    <li className="cat-item cat-item-5"><a href="#transcript-guides">Reading &amp; comparing transcripts</a><span className="post-count">4</span></li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="site-bottom pt-50 pb-50">
        <div className="container">
          <div className="row">
            {[
              { title: 'Transcript basics', articles: ARTICLES.slice(0, 3) },
              { title: 'Transcript codes', articles: ARTICLES.slice(3, 6) },
              { title: 'Reading your account', articles: ARTICLES.slice(8, 11) },
            ].map((group) => (
              <div className="col-lg-4 col-md-6" key={group.title}>
                <div className="sidebar-widget widget-latest-posts mb-30 wow fadeInUp animated">
                  <div className="widget-header-2 position-relative mb-30">
                    <h5 className="mt-5 mb-30">{group.title}</h5>
                  </div>
                  <div className="post-block-list post-module-1">
                    <ul className="list-post">
                      {group.articles.map((article) => (
                        <li className="mb-30" key={article.slug}>
                          <div className="d-flex hover-up-2 transition-normal">
                            <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                              <Link className="color-white" href={`/${article.slug}`}>
                                <img src={`/articles/${article.slug}.jpg`} alt={article.title} loading="lazy" decoding="async" />
                              </Link>
                            </div>
                            <div className="post-content media-body">
                              <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                <Link href={`/${article.slug}`}>{article.title}</Link>
                              </h6>
                              <ArticleTags article={article} />
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StructuredData id="home-collection-schema" schema={{
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'IRS Transcript Guides',
        itemListElement: ARTICLES.map((article, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: articleUrl(article.slug),
          name: article.title,
        })),
      }} />
    </>
  );
}
