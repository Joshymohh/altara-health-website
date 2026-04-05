/** Maps TinaCMS / frontmatter categories to editorial lowercase labels (GOOP-style). */
export function editorialCategoryLabel(category: string): string {
  const key = category.trim();
  const map: Record<string, string> = {
    "Longevity Lab": "longevity lab",
    "Expert Insights": "expert insights",
    "Wellness Stories": "wellness stories",
    "Performance & Recovery": "performance & recovery",
  };
  return map[key] ?? key.toLowerCase();
}
