"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { BlogPost } from "@/lib/blog/types";
import { editorialCategoryLabel } from "@/lib/blog-editorial";

function PlaceholderTallCard() {
  return (
    <article
      className="flex min-h-[280px] flex-col justify-center rounded-[4px] border border-dashed border-neutral-200 bg-white p-8 text-center"
      aria-label="Article placeholder"
    >
      <p className="font-sans text-sm text-neutral-500">More articles coming soon</p>
    </article>
  );
}

function PlaceholderCenterFeatured() {
  return (
    <article
      className="flex min-h-[360px] flex-col justify-center rounded-[4px] border border-dashed border-neutral-200 bg-white p-10 text-center"
      aria-label="Featured article placeholder"
    >
      <p className="font-serif text-lg text-neutral-600">More articles coming soon</p>
      <Link
        href="/blog"
        className="mt-4 font-sans text-sm font-semibold text-black underline underline-offset-4 transition-colors hover:text-[#326ea2]"
      >
        Visit the blog
      </Link>
    </article>
  );
}

interface ArticleCardProps {
  post: BlogPost | null;
  className?: string;
  /** Right column: show excerpt + “read now” (left column uses compact body). */
  showExcerpt?: boolean;
  /** Larger typography for featured / wide cards */
  variant?: "compact" | "featured";
}

function ArticleCard({
  post,
  className = "",
  showExcerpt = false,
  variant = "compact",
}: ArticleCardProps) {
  if (!post) {
    return <PlaceholderTallCard />;
  }

  const img = post.featuredImage ?? "/placeholder.svg?height=300&width=400";
  const label = editorialCategoryLabel(post.category);
  const titleClass =
    variant === "featured"
      ? "font-serif text-xl leading-snug text-black md:text-2xl lg:text-[26px]"
      : "font-serif text-lg leading-snug text-black md:text-xl";

  return (
    <article
      className={`group bg-white ${className}`}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="block cursor-pointer overflow-hidden rounded-[4px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#326ea2]"
      >
        <div className="relative aspect-[3/2] w-full overflow-hidden bg-neutral-100">
          <div className="absolute inset-0 transition-transform duration-[400ms] ease-out will-change-transform group-hover:scale-105">
            <Image
              src={img}
              alt={post.title}
              fill
              quality={100}
              unoptimized={img.includes("placeholder")}
              className="object-cover sharp-image"
              sizes={
                variant === "featured"
                  ? "(max-width: 1024px) 100vw, 42vw"
                  : "(max-width: 1024px) 100vw, 25vw"
              }
            />
          </div>
          <div
            className="pointer-events-none absolute inset-0 bg-black/[0.15] opacity-0 transition-opacity duration-[400ms] ease-out group-hover:opacity-100"
            aria-hidden
          />
        </div>

        <div className="px-5 py-6 md:px-6">
          <p className="category-label mb-3 font-sans text-[11px] font-bold leading-none tracking-wide text-black transition-colors duration-300 ease-out group-hover:text-[#326ea2] md:text-xs">
            <span className="mr-1.5 inline" aria-hidden>
              ■
            </span>
            {label}
          </p>
          <h3 className={`${titleClass} mb-4`}>{post.title}</h3>

          {showExcerpt && post.excerpt ? (
            <p className="mb-3 line-clamp-3 font-sans text-sm font-normal leading-relaxed text-[#666666] md:text-base">
              {post.excerpt}
            </p>
          ) : null}

          <span className="read-cta font-sans text-[13px] font-semibold text-black underline underline-offset-4 transition-colors duration-300 ease-out group-hover:text-[#326ea2] md:text-sm">
            read now
          </span>
        </div>
      </Link>
    </article>
  );
}

function MagazineHeroNewsletter() {
  return (
    <motion.div
      className="mt-2"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: 0.15 }}
    >
      <div className="rounded-[4px] border border-neutral-200 bg-white p-8">
        <h3 className="font-serif text-2xl font-normal leading-tight text-black">
          Sign up for our daily newsletter.
        </h3>

        <form
          action="https://app.kit.com/forms/5b3346550a/subscriptions"
          method="post"
          target="_blank"
          className="mt-6 space-y-4"
        >
          <label className="sr-only" htmlFor="hero-kit-email">
            Email address
          </label>
          <input
            id="hero-kit-email"
            type="email"
            name="email_address"
            placeholder="Email address"
            required
            autoComplete="email"
            className="w-full rounded-[4px] border border-neutral-300 bg-white px-4 py-3 font-sans text-black placeholder:text-neutral-500 focus:border-[#326ea2] focus:outline-none focus:ring-1 focus:ring-[#326ea2]"
          />
          <button
            type="submit"
            className="newsletter-kit-submit min-h-11 w-full rounded-[4px] px-6 py-3 font-medium hover:opacity-[0.98]"
          >
            <span className="relative z-[1]">Sign up</span>
          </button>
        </form>

        <p className="mt-4 font-sans text-sm text-neutral-600">
          Your newsletter subscriptions are subject to Altara&apos;s{" "}
          <Link href="/privacy" className="text-black underline hover:text-[#326ea2]">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </motion.div>
  );
}

export interface MagazineHeroContentProps {
  featured: BlogPost | null;
  left: (BlogPost | null)[];
  rightLarge: BlogPost | null;
}

export function MagazineHeroContent({
  featured,
  left,
  rightLarge,
}: MagazineHeroContentProps) {
  const img = featured?.featuredImage ?? "/placeholder.svg?height=400&width=600";

  return (
    <section className="bg-[#FFFFFF]">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-12 lg:gap-8">
          {/* Left — two stacked article cards */}
          <div className="order-2 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:order-1 lg:col-span-3 lg:grid-cols-1 lg:gap-8">
            <ArticleCard post={left[0] ?? null} />
            <ArticleCard post={left[1] ?? null} />
          </div>

          {/* Center — main featured */}
          <div className="order-1 lg:order-2 lg:col-span-5">
            {featured ? (
              <article className="group bg-white">
                <Link
                  href={`/blog/${featured.slug}`}
                  className="block cursor-pointer overflow-hidden rounded-[4px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#326ea2]"
                >
                  <div className="relative aspect-[3/2] w-full overflow-hidden bg-neutral-100 md:min-h-[280px]">
                    <div className="absolute inset-0 transition-transform duration-[400ms] ease-out will-change-transform group-hover:scale-105">
                      <Image
                        src={img}
                        alt={featured.title}
                        fill
                        quality={100}
                        unoptimized={img.includes("placeholder")}
                        className="object-cover sharp-image"
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        priority
                      />
                    </div>
                    <div
                      className="pointer-events-none absolute inset-0 bg-black/[0.15] opacity-0 transition-opacity duration-[400ms] ease-out group-hover:opacity-100"
                      aria-hidden
                    />
                  </div>

                  <div className="px-5 py-6 md:px-6">
                    <p className="category-label mb-3 font-sans text-[11px] font-bold leading-none tracking-wide text-black transition-colors duration-300 ease-out group-hover:text-[#326ea2] md:text-xs">
                      <span className="mr-1.5 inline" aria-hidden>
                        ■
                      </span>
                      {editorialCategoryLabel(featured.category)}
                    </p>
                    <h2 className="mb-4 font-serif text-2xl font-normal leading-snug text-black md:text-3xl">
                      {featured.title}
                    </h2>
                    {featured.excerpt ? (
                      <p className="mb-3 line-clamp-3 font-sans text-sm font-normal leading-relaxed text-[#666666] md:text-base">
                        {featured.excerpt}
                      </p>
                    ) : null}
                    <span className="read-cta font-sans text-[13px] font-semibold text-black underline underline-offset-4 transition-colors duration-300 ease-out group-hover:text-[#326ea2] md:text-sm">
                      read now
                    </span>
                  </div>
                </Link>
              </article>
            ) : (
              <PlaceholderCenterFeatured />
            )}
          </div>

          {/* Right — tall card + newsletter */}
          <div className="order-3 flex flex-col gap-6 lg:col-span-4 lg:gap-8">
            <ArticleCard post={rightLarge} showExcerpt variant="featured" />
            <MagazineHeroNewsletter />
          </div>
        </div>
      </div>
    </section>
  );
}
