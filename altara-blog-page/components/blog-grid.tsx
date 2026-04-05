"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

interface Article {
  title: string
  image: string
}

function ArticleCard({ article, index }: { article: Article; index: number }) {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger the animation based on index
          const timeout = setTimeout(() => setIsVisible(true), index * 100)
          return () => clearTimeout(timeout)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [index])

  return (
    <article
      ref={ref}
      className={`
        group cursor-pointer rounded-2xl border border-foreground/15 bg-white/30 backdrop-blur-md p-3
        transition-all duration-500 hover:shadow-lg
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="mt-3 px-1 pb-2">
        <h3 className="text-sm font-medium leading-snug text-foreground line-clamp-2">
          {article.title}
        </h3>
        <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-foreground tracking-wide">
          <span aria-hidden="true">{"\u2192"}</span>
          Read article
        </span>
      </div>
    </article>
  )
}

export function BlogGrid({ articles }: { articles: Article[] }) {
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-16">
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} index={index} />
      ))}
    </div>
  )
}
