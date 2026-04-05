"use client"

import { Facebook, Linkedin, Twitter } from "lucide-react"

interface SocialShareProps {
  title: string
  url: string
}

const btn =
  "inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-black transition-colors hover:border-[#326ea2] hover:text-[#326ea2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#326ea2]"

export function SocialShare({ title, url }: SocialShareProps) {
  const encoded = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(url)

  const twitter = `https://twitter.com/intent/tweet?text=${encoded}&url=${encodedUrl}`
  const linkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
  const facebook = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`

  return (
    <div className="flex flex-wrap items-center gap-3 border-y border-neutral-200 py-6">
      <span className="w-full font-sans text-sm font-medium text-[#666666] sm:w-auto">
        Share
      </span>
      <a href={twitter} target="_blank" rel="noopener noreferrer" className={btn} aria-label="Share on X">
        <Twitter className="h-4 w-4" />
      </a>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={btn}
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="h-4 w-4" />
      </a>
      <a
        href={facebook}
        target="_blank"
        rel="noopener noreferrer"
        className={btn}
        aria-label="Share on Facebook"
      >
        <Facebook className="h-4 w-4" />
      </a>
    </div>
  )
}
