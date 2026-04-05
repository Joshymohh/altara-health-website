import { EditorialArticleCard } from "@/components/blog/editorial-article-card"

export interface RelatedPost {
  title: string
  excerpt: string
  category: string
  date: string
  image: string
  slug: string
}

const defaultPosts: RelatedPost[] = [
  {
    title: "Designing for Accessibility: A Practical Guide",
    excerpt:
      "How inclusive design practices lead to better products for everyone, not just those with disabilities.",
    category: "Expert Insights",
    date: "Feb 5, 2026",
    image: "/placeholder.svg?height=220&width=400",
    slug: "sample-post",
  },
  {
    title: "The Psychology Behind Color in Digital Interfaces",
    excerpt:
      "Understanding how color influences user behavior and emotional response in product design.",
    category: "Wellness Stories",
    date: "Jan 28, 2026",
    image: "/placeholder.svg?height=220&width=400",
    slug: "sample-post",
  },
  {
    title: "Motion Design: Bringing Interfaces to Life",
    excerpt:
      "Subtle animations and micro-interactions that enhance usability while delighting users.",
    category: "Performance & Recovery",
    date: "Jan 19, 2026",
    image: "/placeholder.svg?height=220&width=400",
    slug: "sample-post",
  },
]

interface RelatedPostsProps {
  posts?: RelatedPost[]
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  const list = posts !== undefined ? posts : defaultPosts
  if (list.length === 0) return null

  return (
    <section className="border-t border-neutral-200 bg-[#FFFFFF] px-5 py-12 md:px-10 md:py-16">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="mb-10 text-center font-serif text-2xl font-normal text-black md:text-3xl">
          Related articles
        </h2>
        <div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-3 lg:gap-10 xl:gap-12">
          {list.map((post) => (
            <EditorialArticleCard
              key={`${post.slug}-${post.title}`}
              href={`/blog/${post.slug}`}
              title={post.title}
              category={post.category}
              imageSrc={post.image}
              imageAlt={post.title}
              excerpt={post.excerpt}
              showExcerpt
              variant="grid"
              date={post.date}
              showDate
              imageSizes="(max-width: 768px) 100vw, 33vw"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
