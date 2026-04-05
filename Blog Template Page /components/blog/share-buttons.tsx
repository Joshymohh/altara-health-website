"use client"

import { Facebook, Twitter, Linkedin, Link2, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function ShareButtons() {
  const [copied, setCopied] = useState(false)

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : ""
  const shareTitle = "The Art of Mindful Design"

  return (
    <section className="border-t border-border px-5 py-8 md:px-10">
      <div className="mx-auto max-w-[800px]">
        <h3 className="mb-4 text-center font-serif text-[20px] font-normal text-foreground">
          Share this article
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="gap-2"
            asChild
          >
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-4 w-4" />
              <span className="sr-only md:not-sr-only">Twitter</span>
            </a>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="gap-2"
            asChild
          >
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="h-4 w-4" />
              <span className="sr-only md:not-sr-only">Facebook</span>
            </a>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="gap-2"
            asChild
          >
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only md:not-sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="gap-2"
            asChild
          >
            <a
              href={`mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(`Check out this article: ${shareUrl}`)}`}
            >
              <Mail className="h-4 w-4" />
              <span className="sr-only md:not-sr-only">Email</span>
            </a>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="gap-2"
            onClick={handleCopyLink}
          >
            <Link2 className="h-4 w-4" />
            <span className="sr-only md:not-sr-only">
              {copied ? "Copied!" : "Copy Link"}
            </span>
          </Button>
        </div>
      </div>
    </section>
  )
}
