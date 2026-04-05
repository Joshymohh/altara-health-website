import { Suspense } from "react"
import { BlogIndex } from "@/components/blog/blog-index"
import { BlogIndexSkeleton } from "@/components/blog/blog-index-skeleton"

export default function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string; page?: string }>
}) {
  return (
    <Suspense fallback={<BlogIndexSkeleton />}>
      <BlogIndex searchParams={searchParams} />
    </Suspense>
  )
}
