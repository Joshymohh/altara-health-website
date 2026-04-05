/** Normalized blog post shape (TinaCMS + fallbacks). */
export interface BlogAuthor {
  name: string
  bio?: string | null
  avatar?: string | null
}

export interface BlogPost {
  slug: string
  title: string
  date: string
  /** ISO date when available (for JSON-LD / sorting) */
  dateIso?: string
  /** When true, prefer this post for featured blocks (TinaCMS + mock). */
  featured?: boolean
  category: string
  author: BlogAuthor
  excerpt?: string | null
  /** Markdown body */
  content: string
  videoUrl?: string | null
  featuredImage?: string | null
  seoTitle?: string | null
  seoDescription?: string | null
  readTime?: string | null
  /** Product slugs from Tina (1–3) for the bottom-of-post product strip */
  suggestedProducts?: string[] | null
}

export interface RelatedPostItem {
  title: string
  excerpt: string
  category: string
  date: string
  image: string
  slug: string
}
