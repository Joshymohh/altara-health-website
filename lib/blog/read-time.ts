/** ~200 words per minute for blog body. */
export function estimateReadTimeFromMarkdown(markdown: string): string {
  const text = markdown.replace(/```[\s\S]*?```/g, " ").replace(/[^\w\s]/g, " ")
  const words = text.trim().split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.ceil(words / 200))
  return `${minutes} min read`
}
