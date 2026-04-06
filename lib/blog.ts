import fs from "node:fs/promises"
import path from "node:path"
import { cache } from "react"
import matter from "gray-matter"
import type { BlogPost, BlogAuthor, RelatedPostItem } from "./blog/types"
import { estimateReadTimeFromMarkdown } from "./blog/read-time"

const BLOG_DIR = path.join(process.cwd(), "content", "blog")

export type ProductCardData = {
  name: string
  description: string
  image: string
  link: string
}

const PRODUCT_MAP: Record<string, Omit<ProductCardData, "description"> & { description: string }> =
  {
    tirzepatide: {
      name: "Compounded Tirzepatide",
      description:
        "Dual GIP/GLP-1 support for metabolic health and weight management under clinician guidance.",
      link: "/tirzepatide",
      image: "/products/tirzepatide/tirzepatide-image-1.jpg",
    },
    semaglutide: {
      name: "Compounded Semaglutide",
      description:
        "GLP-1 therapy option to support appetite regulation and sustainable weight management.",
      link: "/products/semaglutide",
      image: "/products/semaglutide/semaglutide-image-1.jpg",
    },
    nad: {
      name: "NAD+ Injection",
      description:
        "Supports cellular energy and repair pathways often discussed in longevity-focused care.",
      link: "/products/nad",
      image: "/products/nad/nad-image-1.jpg",
    },
    sermorelin: {
      name: "Sermorelin",
      description:
        "Growth hormone secretagogue explored for recovery, sleep quality, and healthy aging goals.",
      link: "/products/sermorelin",
      image: "/products/sermorelin/sermorelin-image-1.jpg",
    },
    "ghk-cu": {
      name: "GHK-Cu + Tretinoin + Niacinamide",
      description:
        "Topical peptide and active blend aimed at skin texture, firmness, and even tone.",
      link: "/products/ghk-cu",
      image: "/products/ghk-cu/ghk-cu-image-1.jpg",
    },
    glutathione: {
      name: "Glutathione",
      description:
        "Antioxidant support often used in wellness protocols focused on detox and resilience.",
      link: "/products/glutathione",
      image: "/products/glutathione/glutathione-image-1.jpg",
    },
    "lipo-c": {
      name: "Lipo C",
      description:
        "Lipotropic vitamin blend used in metabolic and energy-support protocols.",
      link: "/products/lipo-c",
      image: "/products/lipo-c/lipo-c-image-1.jpg",
    },
    "lipotropic-mic": {
      name: "Lipotropic (MIC) + B12",
      description:
        "MIC amino blend with B12 commonly paired with weight and energy-focused plans.",
      link: "/products/lipotropic-mic",
      image: "/products/lipotropic-mic/lipotropic-mic-image-1.jpg",
    },
  }

function normalizeImageRef(src: unknown): string | null {
  if (typeof src !== "string" || !src.trim()) return null
  const s = src.trim()
  if (s.startsWith("http://") || s.startsWith("https://")) return s
  return s.startsWith("/") ? s : `/${s}`
}

function parseDateParts(raw: unknown): { display: string; iso?: string; time: number } {
  if (raw instanceof Date && !Number.isNaN(raw.getTime())) {
    return {
      display: raw.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      iso: raw.toISOString(),
      time: raw.getTime(),
    }
  }
  if (typeof raw === "string" && raw.trim()) {
    const d = new Date(raw)
    if (!Number.isNaN(d.getTime())) {
      return {
        display: d.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        iso: d.toISOString(),
        time: d.getTime(),
      }
    }
    return { display: raw.trim(), iso: undefined, time: 0 }
  }
  const now = new Date()
  return {
    display: now.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    iso: now.toISOString(),
    time: now.getTime(),
  }
}

function normalizeSuggestedProducts(raw: unknown): string[] | null {
  if (!raw) return null
  if (Array.isArray(raw)) {
    const out = raw.filter((x): x is string => typeof x === "string" && !!x.trim())
    return out.length ? out.slice(0, 3) : null
  }
  return null
}

function matterToPost(
  slug: string,
  data: Record<string, unknown>,
  body: string
): BlogPost | null {
  const title = data.title
  if (typeof title !== "string" || !title.trim()) return null

  const authorName = typeof data.author === "string" ? data.author : "Altara Health"
  const author: BlogAuthor = {
    name: authorName,
    bio: typeof data.authorBio === "string" ? data.authorBio : null,
    avatar: normalizeImageRef(data.authorImage),
  }

  const { display: date, iso: dateIso } = parseDateParts(data.date)
  const category =
    typeof data.category === "string" && data.category.trim()
      ? data.category.trim()
      : "Expert Insights"

  const content = typeof body === "string" ? body : ""
  const readTime = estimateReadTimeFromMarkdown(content)

  return {
    slug: typeof data.slug === "string" && data.slug.trim() ? data.slug.trim() : slug,
    title: title.trim(),
    date,
    dateIso,
    featured: typeof data.featured === "boolean" ? data.featured : false,
    category,
    author,
    excerpt: typeof data.excerpt === "string" ? data.excerpt : null,
    content,
    videoUrl: typeof data.videoUrl === "string" ? data.videoUrl : null,
    featuredImage: normalizeImageRef(data.featuredImage),
    seoTitle: typeof data.seoTitle === "string" ? data.seoTitle : null,
    seoDescription: typeof data.seoDescription === "string" ? data.seoDescription : null,
    readTime,
    suggestedProducts: normalizeSuggestedProducts(data.suggestedProducts),
  }
}

function postSortTime(p: BlogPost): number {
  if (p.dateIso) {
    const t = new Date(p.dateIso).getTime()
    if (!Number.isNaN(t)) return t
  }
  return 0
}

async function readMdxFiles(): Promise<string[]> {
  try {
    const names = await fs.readdir(BLOG_DIR)
    return names.filter((n) => n.endsWith(".mdx") || n.endsWith(".md"))
  } catch (e) {
    console.error("[blog] Unable to read content/blog:", e)
    return []
  }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const files = await readMdxFiles()
  const posts: BlogPost[] = []

  for (const file of files) {
    const full = path.join(BLOG_DIR, file)
    try {
      const raw = await fs.readFile(full, "utf8")
      const { data, content } = matter(raw)
      const stem = file.replace(/\.mdx?$/i, "")
      const parsed = matterToPost(stem, data as Record<string, unknown>, content)
      if (parsed) posts.push(parsed)
    } catch (e) {
      console.error(`[blog] Failed to parse ${file}:`, e)
    }
  }

  return posts.sort((a, b) => postSortTime(b) - postSortTime(a))
}

export const getPostBySlug = cache(async function getPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  const safe = slug.replace(/[^a-zA-Z0-9-_]/g, "")
  if (!safe) return null

  for (const ext of [".mdx", ".md"]) {
    const full = path.join(BLOG_DIR, `${safe}${ext}`)
    try {
      const raw = await fs.readFile(full, "utf8")
      const { data, content } = matter(raw)
      const parsed = matterToPost(safe, data as Record<string, unknown>, content)
      if (parsed) return parsed
    } catch {
      /* try next ext */
    }
  }

  return null
})

export async function getFeaturedPost(): Promise<BlogPost | null> {
  const all = await getAllPosts()
  if (all.length === 0) return null

  const featured = all.filter((p) => p.featured)
  if (featured.length > 0) {
    return featured.sort((a, b) => {
      const ta = a.dateIso ? new Date(a.dateIso).getTime() : 0
      const tb = b.dateIso ? new Date(b.dateIso).getTime() : 0
      return tb - ta
    })[0]
  }

  return all[0]
}

/**
 * Homepage magazine layout: center = featured post; left = next two posts (excluding featured);
 * rightLarge = third post in that list (3rd most recent after featured + left slots).
 * When there are too few posts, side slots stay null/placeholder.
 */
export async function getHomeMagazineSlots(): Promise<{
  featured: BlogPost | null
  left: (BlogPost | null)[]
  rightLarge: BlogPost | null
}> {
  const all = await getAllPosts()
  const featured = await getFeaturedPost()

  if (!featured) {
    return {
      featured: null,
      left: [null, null],
      rightLarge: null,
    }
  }

  const rest = all.filter((p) => p.slug !== featured.slug)

  if (all.length <= 2) {
    return {
      featured,
      left: [null, null],
      rightLarge: null,
    }
  }

  return {
    featured,
    left: [rest[0] ?? null, rest[1] ?? null],
    rightLarge: rest[2] ?? null,
  }
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const all = await getAllPosts()
  return all.filter((p) => p.category === category)
}

export async function getRelatedPosts(
  currentSlug: string,
  category: string,
  limit = 3
): Promise<RelatedPostItem[]> {
  const same = (await getPostsByCategory(category)).filter((p) => p.slug !== currentSlug)

  const items: RelatedPostItem[] = same.slice(0, limit).map((p) => ({
    title: p.title,
    excerpt: p.excerpt ?? "",
    category: p.category,
    date: p.date,
    image: p.featuredImage ?? "/placeholder.svg?height=220&width=400",
    slug: p.slug,
  }))

  return items
}

export function getProductData(productSlug: string): ProductCardData | null {
  const row = PRODUCT_MAP[productSlug]
  if (!row) return null
  return {
    name: row.name,
    description: row.description,
    image: row.image,
    link: row.link,
  }
}

export async function getAllSlugs(): Promise<string[]> {
  const posts = await getAllPosts()
  return posts.map((p) => p.slug)
}

export const BLOG_CATEGORIES = [
  "All",
  "Expert Insights",
  "Wellness Stories",
  "Longevity Lab",
  "Performance & Recovery",
] as const

export { categoryBadgeClass } from "./blog-category-badge"
