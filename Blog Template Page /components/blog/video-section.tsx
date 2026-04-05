import { Play } from "lucide-react"

export function VideoSection() {
  return (
    <section className="px-5 pb-10 md:px-10 md:pb-14">
      <div className="mx-auto max-w-[900px]">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105">
              <Play className="ml-1 h-7 w-7" />
            </div>
            <span className="font-sans text-sm font-medium text-muted-foreground">
              Watch the full video
            </span>
          </div>
          {/* Replace with actual YouTube embed */}
          {/* <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          /> */}
        </div>
      </div>
    </section>
  )
}
