import { StructuredData } from './StructuredData';
import { SITE_CONFIG } from '@/config/site';

/**
 * BreadcrumbSchema — renders a BreadcrumbList JSON-LD block.
 *
 * Usage:
 *   <BreadcrumbSchema
 *     items={[
 *       { name: 'Home', url: '/' },
 *       { name: 'About', url: '/about' },
 *     ]}
 *   />
 */
interface BreadcrumbItem {
  name: string;
  /** Pass a relative path like '/about' or an absolute URL. */
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http')
        ? item.url
        : `${SITE_CONFIG.url}${item.url}`,
    })),
  };

  return <StructuredData schema={schema} id="breadcrumb-schema" />;
}
