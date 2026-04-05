import { HeroSection } from "@/components/blog/hero-section"
import { VideoSection } from "@/components/blog/video-section"
import { ContentSection } from "@/components/blog/content-section"
import { AuthorCard } from "@/components/blog/author-card"
import { ShareButtons } from "@/components/blog/share-buttons"
import { SuggestedProducts } from "@/components/blog/suggested-products"
import { RelatedPosts } from "@/components/blog/related-posts"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <VideoSection />
      <ContentSection />
      <AuthorCard />
      <ShareButtons />
      <SuggestedProducts />
      <RelatedPosts />
    </main>
  )
}
