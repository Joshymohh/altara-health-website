"use client"

import { Play } from "lucide-react"
import { getYoutubeId } from "@/lib/blog/youtube"

interface VideoSectionProps {
  /** YouTube video ID (e.g. "dQw4w9WgXcQ"). When set, shows 16:9 embed; otherwise placeholder. */
  youtubeVideoId?: string | null
  /** Full YouTube URL or ID from TinaCMS — parsed if youtubeVideoId not set */
  videoUrl?: string | null
  placeholderLabel?: string
}

export function VideoSection({
  youtubeVideoId,
  videoUrl,
  placeholderLabel = "Watch the full video",
}: VideoSectionProps) {
  const id = youtubeVideoId ?? getYoutubeId(videoUrl ?? undefined)

  return (
    <section className="bg-[#FFFFFF] px-5 pb-10 md:px-10 md:pb-14">
      <div className="mx-auto max-w-[900px]">
        <div className="relative aspect-video w-full overflow-hidden rounded-[4px] bg-neutral-100">
          {id ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${id}`}
              title="Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105">
                <Play className="ml-1 h-7 w-7" />
              </div>
              <span className="font-sans text-sm font-medium text-muted-foreground">
                {placeholderLabel}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
