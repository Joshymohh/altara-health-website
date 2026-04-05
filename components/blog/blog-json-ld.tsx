import type { BlogPost } from "@/lib/blog/types"

interface BlogJsonLdProps {
  post: BlogPost
  pageUrl: string
  baseUrl: string
}

export function BlogJsonLd({ post, pageUrl, baseUrl }: BlogJsonLdProps) {
  const imageUrl = post.featuredImage
    ? post.featuredImage.startsWith("http")
      ? post.featuredImage
      : `${baseUrl}${post.featuredImage}`
    : undefined

  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.seoDescription ?? post.excerpt ?? undefined,
    datePublished: post.dateIso ?? undefined,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "Altara Health",
      url: baseUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    ...(imageUrl ? { image: [imageUrl] } : {}),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
