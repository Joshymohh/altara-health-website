import Image from "next/image"
import { CalendarDays, Clock } from "lucide-react"
import { editorialCategoryLabel } from "@/lib/blog-editorial"

interface HeroSectionProps {
  category?: string
  title?: string
  authorName?: string
  authorAvatar?: string
  date?: string
  readTime?: string
  /** e.g. tighter top padding when a video sits above this block */
  sectionClassName?: string
}

export function HeroSection({
  category = "Expert Insights",
  title = "The Art of Mindful Design: How Intentional Choices Shape Better Digital Experiences",
  authorName = "Elena Marchetti",
  authorAvatar = "/placeholder.svg?height=32&width=32",
  date = "February 12, 2026",
  readTime = "8 min read",
  sectionClassName,
}: HeroSectionProps) {
  const label = editorialCategoryLabel(category)

  return (
    <section
      className={
        sectionClassName ?? "bg-[#FFFFFF] px-5 py-12 md:px-10 md:py-16"
      }
    >
      <div className="mx-auto max-w-[800px] text-left">
        <p className="category-label mb-4 font-sans text-[11px] font-bold leading-none tracking-wide text-black md:text-xs">
          <span className="mr-1.5 inline" aria-hidden>
            ■
          </span>
          {label}
        </p>
        <h1 className="font-serif text-[28px] font-normal leading-[1.25] text-black md:text-[40px] lg:text-[42px]">
          <span className="text-balance">{title}</span>
        </h1>
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 font-sans text-[15px] text-[#666666] md:text-[16px]">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-neutral-100">
              <Image
                src={authorAvatar}
                alt={authorName}
                fill
                className="object-cover"
                unoptimized={authorAvatar.startsWith("http")}
              />
            </div>
            <span className="text-black">{authorName}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4 shrink-0" aria-hidden />
            <span>{date}</span>
          </div>
          {readTime ? (
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 shrink-0" aria-hidden />
              <span>{readTime}</span>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
