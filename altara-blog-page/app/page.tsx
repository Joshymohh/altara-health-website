import { BlogHero } from "@/components/blog-hero"
import { BlogTabs } from "@/components/blog-tabs"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <BlogHero />
      <BlogTabs />
    </main>
  )
}
