import type { BlogPost, BlogAuthor } from "./types"

/**
 * Tina Cloud GraphQL fetch. Set in .env:
 *   TINA_GRAPHQL_URL=https://content.tinajs.io/v1/graphql  (default)
 *   TINA_TOKEN=<read-only token>
 *   TINA_BRANCH=main
 *
 * Adjust `TINA_COLLECTION` and `TINA_RELATIVE_PATH_TEMPLATE` to match your schema.
 * Default assumes a file collection `blog` with relativePath `slug + ".md"`.
 */
const DEFAULT_GRAPHQL_URL = "https://content.tinajs.io/v1/graphql"

function buildRelativePath(slug: string): string {
  const prefix = process.env.TINA_RELATIVE_PATH_PREFIX ?? ""
  const suffix = process.env.TINA_RELATIVE_PATH_SUFFIX ?? ".md"
  return `${prefix}${slug}${suffix}`
}

/** Default query — replace with your generated Tina schema or set TINA_GRAPHQL_QUERY env (full query string). */
function defaultQuery(collection: string): string {
  return `
    query BlogPost($relativePath: String!) {
      ${collection}(relativePath: $relativePath) {
        title
        slug
        date
        category
        excerpt
        body
        videoUrl
        featuredImage
        seoTitle
        seoDescription
        author {
          name
          bio
          avatar
        }
      }
    }
  `
}

function mapDocToPost(doc: Record<string, unknown>, slug: string): BlogPost | null {
  if (!doc || typeof doc !== "object") return null
  const title = doc.title
  if (typeof title !== "string" || !title.trim()) return null

  const authorRaw = doc.author as Record<string, unknown> | undefined
  const author: BlogAuthor = {
    name: typeof authorRaw?.name === "string" ? authorRaw.name : "Altara Health",
    bio: typeof authorRaw?.bio === "string" ? authorRaw.bio : null,
    avatar: typeof authorRaw?.avatar === "string" ? authorRaw.avatar : null,
  }

  const dateVal = doc.date
  const date =
    typeof dateVal === "string"
      ? dateVal
      : new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })

  return {
    slug: typeof doc.slug === "string" ? doc.slug : slug,
    title,
    date,
    dateIso: typeof dateVal === "string" ? dateVal : undefined,
    featured: typeof doc.featured === "boolean" ? doc.featured : undefined,
    category: typeof doc.category === "string" ? doc.category : "Blog",
    author,
    excerpt: typeof doc.excerpt === "string" ? doc.excerpt : null,
    content: typeof doc.body === "string" ? doc.body : "",
    videoUrl: typeof doc.videoUrl === "string" ? doc.videoUrl : null,
    featuredImage: typeof doc.featuredImage === "string" ? doc.featuredImage : null,
    seoTitle: typeof doc.seoTitle === "string" ? doc.seoTitle : null,
    seoDescription: typeof doc.seoDescription === "string" ? doc.seoDescription : null,
    readTime: null,
  }
}

export async function fetchBlogPostFromTina(slug: string): Promise<BlogPost | null> {
  const token = process.env.TINA_TOKEN ?? process.env.TINA_PUBLIC_READ_ONLY_TOKEN
  const url = process.env.TINA_GRAPHQL_URL ?? DEFAULT_GRAPHQL_URL
  if (!token) return null

  const collection = process.env.TINA_COLLECTION ?? "blog"
  const query =
    process.env.TINA_GRAPHQL_QUERY?.trim() || defaultQuery(collection)
  const relativePath = buildRelativePath(slug)

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...(process.env.TINA_BRANCH
          ? { "X-Tina-Branch": process.env.TINA_BRANCH }
          : {}),
      },
      body: JSON.stringify({
        query,
        variables: { relativePath },
      }),
      next: { revalidate: 60 },
    })

    if (!res.ok) return null
    const json = (await res.json()) as {
      data?: Record<string, unknown>
      errors?: unknown
    }
    if (json.errors) return null

    const data = json.data
    if (!data) return null

    const doc = data[collection] as Record<string, unknown> | null | undefined
    if (!doc) return null

    return mapDocToPost(doc, slug)
  } catch {
    return null
  }
}
