/**
 * StructuredData — injects any JSON-LD schema as a <script> tag.
 *
 * Usage:
 *   <StructuredData schema={{ '@context': 'https://schema.org', '@type': 'WebPage', ... }} />
 */
interface StructuredDataProps {
  schema: Record<string, unknown> | Record<string, unknown>[];
  id?: string;
}

export function StructuredData({ schema, id }: StructuredDataProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
