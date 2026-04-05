import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { HeroSection } from "@/components/blog/hero-section"
import { VideoSection } from "@/components/blog/video-section"
import { BlogMarkdown } from "@/components/blog/blog-markdown"
import { AuthorCard } from "@/components/blog/author-card"
import { RelatedPosts } from "@/components/blog/related-posts"
import { SocialShare } from "@/components/blog/social-share"
import { BlogFeaturedImage } from "@/components/blog/blog-featured-image"
import { BlogConsultationCta } from "@/components/blog/blog-consultation-cta"
import { BlogJsonLd } from "@/components/blog/blog-json-ld"
import { SuggestedProducts } from "@/components/blog/suggested-products"
import {
  getBlogPostBySlug,
  getRelatedPosts,
  getStaticSlugsForBuild,
} from "@/lib/blog/get-post"
import { getProductData, type ProductCardData } from "@/lib/blog"
import { getYoutubeId } from "@/lib/blog/youtube"
import type { BlogPost } from "@/lib/blog/types"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

function siteBaseUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.altarahealth.com").replace(
    /\/$/,
    ""
  )
}

function resolveSuggestedProducts(post: BlogPost): ProductCardData[] {
  const slugs =
    post.suggestedProducts && post.suggestedProducts.length > 0
      ? post.suggestedProducts
      : ["tirzepatide", "nad", "ghk-cu"]
  const cards: ProductCardData[] = []
  for (const s of slugs) {
    const p = getProductData(s)
    if (p) cards.push(p)
  }
  return cards.slice(0, 3)
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)
  if (!post) {
    return { title: "Post not found | Altara Health" }
  }
  const baseUrl = siteBaseUrl()
  const canonical = `${baseUrl}/blog/${slug}`
  const title = post.seoTitle ?? `${post.title} | Altara Health`
  const description =
    post.seoDescription ??
    post.excerpt ??
    `Read ${post.title} on the Altara Health blog.`
  const ogImage = post.featuredImage
    ? post.featuredImage.startsWith("http")
      ? post.featuredImage
      : `${baseUrl}${post.featuredImage}`
    : undefined

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: post.seoTitle ?? post.title,
      description,
      url: canonical,
      type: "article",
      publishedTime: post.dateIso,
      ...(ogImage
        ? {
            images: [
              { url: ogImage, width: 1200, height: 630, alt: post.title },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle ?? post.title,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  }
}

export async function generateStaticParams() {
  return getStaticSlugsForBuild()
}

export const dynamicParams = true

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)
  if (!post) notFound()

  const baseUrl = siteBaseUrl()
  const canonicalUrl = `${baseUrl}/blog/${slug}`
  const videoId = getYoutubeId(post.videoUrl)
  const related = await getRelatedPosts(post.category, post.slug)
  const suggested = resolveSuggestedProducts(post)

  return (
    <>
      <BlogJsonLd post={post} pageUrl={canonicalUrl} baseUrl={baseUrl} />
      <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#FFFFFF]">
        {videoId ? (
          <section className="bg-[#FFFFFF] px-5 pb-2 pt-5 md:px-10">
            <VideoSection youtubeVideoId={videoId} />
          </section>
        ) : post.featuredImage ? (
          <BlogFeaturedImage src={post.featuredImage} alt={post.title} />
        ) : null}
        <HeroSection
          category={post.category}
          title={post.title}
          authorName={post.author.name}
          authorAvatar={
            post.author.avatar ?? "/placeholder.svg?height=32&width=32"
          }
          date={post.date}
          readTime={post.readTime ?? undefined}
          sectionClassName={
            videoId || post.featuredImage
              ? "bg-[#FFFFFF] px-5 pt-0 pb-10 md:px-10 md:pb-12"
              : undefined
          }
        />
        <article className="bg-[#FFFFFF] px-5 py-12 md:px-10 md:py-14">
          <BlogMarkdown content={post.content} />
        </article>
        <div className="mx-auto max-w-[800px] px-5 md:px-10">
          <SocialShare title={post.title} url={canonicalUrl} />
        </div>
        <AuthorCard
          name={post.author.name}
          bio={post.author.bio ?? ""}
          avatar={post.author.avatar ?? "/placeholder.svg?height=80&width=80"}
        />
        {related.length > 0 ? <RelatedPosts posts={related} /> : null}
        <SuggestedProducts products={suggested} />
        <section className="bg-[#FFFFFF]" aria-label="Consultation">
          <BlogConsultationCta />
        </section>
      </div>
    </>
  )
}
