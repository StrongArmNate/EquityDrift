/** Normalizes a tag into a URL-safe slug, e.g. "Blind Defense" -> "blind-defense". */
export function tagSlug(tag: string): string {
  return tag.toLowerCase().trim().replace(/\s+/g, '-');
}
