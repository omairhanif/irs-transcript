import Image from 'next/image';
import Link from 'next/link';

interface AuthorInfoProps {
  name?: string;
  role?: string;
  bio?: string;
  avatar?: string;
  /** ISO date string */
  publishedDate?: string;
  readingTimeMinutes?: number;
  showCard?: boolean;
}

/**
 * AuthorInfo — reusable author block for articles and guides.
 * Use showCard=true for a full author card at the bottom of a post.
 * Use showCard=false (default) for an inline byline at the top.
 */
export function AuthorInfo({
  name = 'IRS Transcript Editorial Team',
  role = 'Tax Guidance Editors',
  bio = 'Our editorial team consists of tax professionals and writers dedicated to making IRS processes understandable for everyday taxpayers.',
  avatar = '/assets/imgs/authors/author-default.jpg',
  publishedDate,
  readingTimeMinutes,
  showCard = false,
}: AuthorInfoProps) {
  const formattedDate = publishedDate
    ? new Date(publishedDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null;

  if (!showCard) {
    // ── Inline byline ──────────────────────────────────────────────────────
    return (
      <div className="entry-meta meta-1 float-start font-x-small text-uppercase mb-15">
        <span className="author-meta mr-10">
          <i className="elegant-icon icon_profile mr-5"></i>
          {name}
        </span>
        {formattedDate && (
          <span className="post-on has-dot">{formattedDate}</span>
        )}
        {readingTimeMinutes && (
          <span className="post-on has-dot">{readingTimeMinutes} min read</span>
        )}
      </div>
    );
  }

  // ── Full author card ─────────────────────────────────────────────────────
  return (
    <div className="author-bio mt-50 mb-50 bg-light p-30 border-radius-10">
      <div className="d-flex align-items-center mb-20">
        <div className="author-img mr-20">
          <img
            src={avatar}
            alt={name}
            width={80}
            height={80}
            style={{ borderRadius: '50%', objectFit: 'cover' }}
          />
        </div>
        <div>
          <h5 className="font-weight-700 mb-5">{name}</h5>
          <span className="text-muted font-small">{role}</span>
        </div>
      </div>
      <p className="font-small text-muted">{bio}</p>
    </div>
  );
}
