import Link from "next/link"

export default function BlogPostNotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-6 py-20 text-center">
      <h1 className="font-lora text-2xl font-semibold text-foreground md:text-3xl">
        This article could not be found
      </h1>
      <p className="mt-4 font-sans text-muted-foreground">
        The post may have been moved or removed. Browse the blog for the latest
        stories from Altara Health.
      </p>
      <Link
        href="/blog"
        className="mt-8 inline-flex rounded-lg bg-[#326ea2] px-6 py-3 font-sans text-sm font-semibold text-white transition-colors hover:bg-[#003366]"
      >
        Back to blog
      </Link>
    </div>
  )
}
