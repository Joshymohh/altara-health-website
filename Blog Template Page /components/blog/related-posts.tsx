import { ArrowRight } from "lucide-react"

const posts = [
  {
    title: "Designing for Accessibility: A Practical Guide",
    excerpt:
      "How inclusive design practices lead to better products for everyone, not just those with disabilities.",
    category: "Accessibility",
    date: "Feb 5, 2026",
    image: "/placeholder.svg?height=220&width=400",
  },
  {
    title: "The Psychology Behind Color in Digital Interfaces",
    excerpt:
      "Understanding how color influences user behavior and emotional response in product design.",
    category: "Color Theory",
    date: "Jan 28, 2026",
    image: "/placeholder.svg?height=220&width=400",
  },
  {
    title: "Motion Design: Bringing Interfaces to Life",
    excerpt:
      "Subtle animations and micro-interactions that enhance usability while delighting users.",
    category: "Animation",
    date: "Jan 19, 2026",
    image: "/placeholder.svg?height=220&width=400",
  },
]

export function RelatedPosts() {
  return (
    <section className="border-t border-border px-5 py-12 md:px-10 md:py-16">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="mb-8 text-center font-sans text-[24px] font-semibold text-foreground">
          Related Posts
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-md"
            >
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-primary/10 px-3 py-1 font-sans text-[12px] font-medium uppercase tracking-wider text-primary">
                    {post.category}
                  </span>
                  <span className="font-sans text-[13px] text-muted-foreground">
                    {post.date}
                  </span>
                </div>
                <h3 className="mt-3 font-sans text-[18px] font-semibold leading-snug text-foreground">
                  {post.title}
                </h3>
                <p className="mt-2 font-sans text-[15px] leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-1.5 font-sans text-[14px] font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Read more
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
