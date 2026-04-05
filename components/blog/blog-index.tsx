import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import {
  getAllPosts,
  getFeaturedPost,
  BLOG_CATEGORIES,
} from "@/lib/blog"
import { EditorialArticleCard } from "@/components/blog/editorial-article-card"

const PER_PAGE = 9

function buildQuery(cat: string | undefined, page: number): string {
  const p = new URLSearchParams()
  if (cat && cat !== "All") p.set("cat", cat)
  if (page > 1) p.set("page", String(page))
  const q = p.toString()
  return q ? `?${q}` : ""
}

export async function BlogIndex({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string; page?: string }>
}) {
  const sp = await searchParams
  const catRaw = sp.cat
  const category =
    catRaw && (BLOG_CATEGORIES as readonly string[]).includes(catRaw)
      ? catRaw
      : "All"
  const pageNum = Math.max(1, parseInt(sp.page ?? "1", 10) || 1)

  const [allPosts, featured] = await Promise.all([getAllPosts(), getFeaturedPost()])

  if (allPosts.length === 0) {
    return (
      <div className="min-h-[50vh] bg-[#FFFFFF] px-4 py-24 text-center">
        <h1 className="font-serif text-2xl text-black">No posts yet</h1>
        <p className="mt-3 font-sans text-[#666666]">
          New articles will appear here once they are published from the CMS.
        </p>
        <Link
          href="/admin"
          className="mt-8 inline-block font-sans text-sm font-semibold text-[#326ea2] underline"
        >
          Open admin
        </Link>
      </div>
    )
  }

  const filtered =
    category === "All" ? allPosts : allPosts.filter((p) => p.category === category)

  const gridSource =
    featured && category === "All"
      ? filtered.filter((p) => p.slug !== featured.slug)
      : filtered

  const totalPages = Math.max(1, Math.ceil(gridSource.length / PER_PAGE))
  const safePage = Math.min(pageNum, totalPages)
  const slice = gridSource.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE)

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <h1 className="sr-only">Blog</h1>
      {featured && category === "All" ? (
        <section className="border-b border-neutral-100 px-4 py-12 md:px-8 md:py-16">
          <div className="mx-auto max-w-7xl">
            <p className="mb-6 font-sans text-[11px] font-bold tracking-wide text-black">
              featured story
            </p>
            <EditorialArticleCard
              href={`/blog/${featured.slug}`}
              title={featured.title}
              category={featured.category}
              imageSrc={
                featured.featuredImage ?? "/placeholder.svg?height=640&width=1200"
              }
              imageAlt={featured.title}
              excerpt={featured.excerpt}
              showExcerpt
              variant="featured"
              layout="horizontal"
              imagePriority
            />
          </div>
        </section>
      ) : null}

      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-14">
        <nav className="flex flex-wrap gap-2 md:gap-6" aria-label="Filter by category">
          {BLOG_CATEGORIES.map((c) => {
            const active = c === category
            return (
              <Link
                key={c}
                href={c === "All" ? "/blog" : `/blog?cat=${encodeURIComponent(c)}`}
                scroll={false}
                className={`border-b-2 pb-1 font-sans text-sm font-semibold transition-colors ${
                  active
                    ? "border-black text-black"
                    : "border-transparent text-[#666666] hover:border-neutral-300 hover:text-black"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {c}
              </Link>
            )
          })}
        </nav>

        {slice.length === 0 ? (
          <p className="mt-16 text-center font-sans text-[#666666]">
            No posts in this category yet.
          </p>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-10 xl:gap-12">
            {slice.map((post) => {
              const img =
                post.featuredImage ?? "/placeholder.svg?height=400&width=640"
              return (
                <EditorialArticleCard
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  title={post.title}
                  category={post.category}
                  imageSrc={img}
                  imageAlt={post.title}
                  excerpt={post.excerpt}
                  showExcerpt
                  variant="grid"
                  date={post.date}
                  showDate
                  imageSizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              )
            })}
          </div>
        )}

        {totalPages > 1 ? (
          <nav
            className="mt-14 flex flex-wrap items-center justify-center gap-2"
            aria-label="Pagination"
          >
            <Link
              href={`/blog${buildQuery(category === "All" ? undefined : category, Math.max(1, safePage - 1))}`}
              scroll={false}
              className={`flex items-center gap-1 px-4 py-2.5 font-sans text-sm font-medium text-black underline-offset-4 hover:underline ${
                safePage <= 1 ? "pointer-events-none opacity-40" : ""
              }`}
              aria-disabled={safePage <= 1}
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Link>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <Link
                key={n}
                href={`/blog${buildQuery(category === "All" ? undefined : category, n)}`}
                scroll={false}
                className={`flex h-10 min-w-10 items-center justify-center px-3 font-sans text-sm font-medium ${
                  n === safePage
                    ? "border-b-2 border-black text-black"
                    : "text-[#666666] hover:text-black"
                }`}
                aria-current={n === safePage ? "page" : undefined}
              >
                {n}
              </Link>
            ))}
            <Link
              href={`/blog${buildQuery(category === "All" ? undefined : category, Math.min(totalPages, safePage + 1))}`}
              scroll={false}
              className={`flex items-center gap-1 px-4 py-2.5 font-sans text-sm font-medium text-black underline-offset-4 hover:underline ${
                safePage >= totalPages
                  ? "pointer-events-none opacity-40"
                  : ""
              }`}
              aria-disabled={safePage >= totalPages}
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Link>
          </nav>
        ) : null}
      </div>
    </div>
  )
}
