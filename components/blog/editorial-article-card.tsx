import Image from "next/image";
import Link from "next/link";
import { editorialCategoryLabel } from "@/lib/blog-editorial";

export interface EditorialArticleCardProps {
  href: string;
  title: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
  excerpt?: string | null;
  /** Show excerpt + read now (listing grid omits excerpt on small cards if false). */
  showExcerpt?: boolean;
  /** Larger title on wide / featured slots */
  variant?: "grid" | "featured";
  /** Optional date line (e.g. blog listing) */
  date?: string;
  showDate?: boolean;
  imagePriority?: boolean;
  /** Wider `sizes` hint for featured strip */
  imageSizes?: string;
  /** Blog index hero: image left, copy right on large screens */
  layout?: "vertical" | "horizontal";
}

/**
 * GOOP-style editorial card: white surface, 3:2 image, ■ category, Lora title, read now.
 * Hover: image zoom + 15% black overlay; category + CTA → #326ea2.
 */
export function EditorialArticleCard({
  href,
  title,
  category,
  imageSrc,
  imageAlt,
  excerpt,
  showExcerpt = false,
  variant = "grid",
  date,
  showDate = false,
  imagePriority = false,
  imageSizes = "(max-width: 768px) 100vw, 33vw",
  layout = "vertical",
}: EditorialArticleCardProps) {
  const label = editorialCategoryLabel(category);
  const titleClass =
    variant === "featured"
      ? "font-serif text-xl leading-snug text-black md:text-2xl lg:text-[26px]"
      : "font-serif text-lg leading-snug text-black md:text-xl";

  const featuredTitleClass =
    "font-serif text-2xl font-normal leading-snug text-black md:text-3xl";

  const copyBlock = (
    <>
      <p className="category-label mb-3 font-sans text-[11px] font-bold leading-none tracking-wide text-black transition-colors duration-300 ease-out group-hover:text-[#326ea2] md:text-xs">
        <span className="mr-1.5 inline" aria-hidden>
          ■
        </span>
        {label}
      </p>
      {showDate && date ? (
        <p className="mb-2 font-sans text-xs text-[#666666]">{date}</p>
      ) : null}
      {layout === "horizontal" ? (
        <h2 className={`${featuredTitleClass} mb-4`}>{title}</h2>
      ) : (
        <h3 className={`${titleClass} mb-4`}>{title}</h3>
      )}

      {showExcerpt && excerpt ? (
        <p className="mb-3 line-clamp-3 font-sans text-sm font-normal leading-relaxed text-[#666666] md:text-base">
          {excerpt}
        </p>
      ) : null}

      <span className="read-cta font-sans text-[13px] font-semibold text-black underline underline-offset-4 transition-colors duration-300 ease-out group-hover:text-[#326ea2] md:text-sm">
        read now
      </span>
    </>
  );

  const imageBlock = (
    <div
      className={
        layout === "horizontal"
          ? "relative aspect-[3/2] min-h-[220px] w-full overflow-hidden bg-neutral-100 lg:min-h-[280px] lg:aspect-auto lg:h-full"
          : "relative aspect-[3/2] w-full overflow-hidden bg-neutral-100"
      }
    >
      <div className="absolute inset-0 transition-transform duration-[400ms] ease-out will-change-transform group-hover:scale-105">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          quality={100}
          unoptimized={
            imageSrc.includes("placeholder") || imageSrc.startsWith("http")
          }
          className="object-cover sharp-image"
          sizes={
            layout === "horizontal"
              ? "(max-width: 1024px) 100vw, 58vw"
              : imageSizes
          }
          priority={imagePriority}
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-black/[0.15] opacity-0 transition-opacity duration-[400ms] ease-out group-hover:opacity-100"
        aria-hidden
      />
    </div>
  );

  if (layout === "horizontal") {
    return (
      <article className="group bg-white">
        <Link
          href={href}
          className="grid cursor-pointer grid-cols-1 overflow-hidden rounded-[4px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#326ea2] lg:grid-cols-12 lg:gap-0"
        >
          <div className="lg:col-span-7">{imageBlock}</div>
          <div className="flex flex-col justify-center px-5 py-6 md:px-8 md:py-10 lg:col-span-5 lg:py-12">
            {copyBlock}
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="group bg-white">
      <Link
        href={href}
        className="block cursor-pointer overflow-hidden rounded-[4px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#326ea2]"
      >
        {imageBlock}
        <div className="px-5 py-6 md:px-6">{copyBlock}</div>
      </Link>
    </article>
  );
}
