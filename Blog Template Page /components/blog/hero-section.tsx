import { CalendarDays, Clock } from "lucide-react"

export function HeroSection() {
  return (
    <section className="px-5 py-12 md:px-10 md:py-[60px]">
      <div className="mx-auto max-w-[900px] text-center">
        <span className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-1.5 font-sans text-[14px] font-medium uppercase tracking-wider text-primary">
          Design & Creativity
        </span>
        <h1 className="mx-auto max-w-[800px] font-serif text-[32px] font-normal leading-[1.2] text-foreground md:text-[42px]">
          <span className="text-balance">
            The Art of Mindful Design: How Intentional Choices Shape Better
            Digital Experiences
          </span>
        </h1>
        <div className="mt-6 flex flex-col items-start gap-2 font-sans text-[16px] text-muted-foreground md:flex-row md:items-center md:justify-center md:gap-6">
          <div className="flex items-center gap-6 md:gap-6">
            <span>Elena Marchetti</span>
            <div className="flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" />
              <span>February 12, 2026</span>
            </div>
          </div>
          <div className="hidden items-center gap-1.5 md:flex">
            <Clock className="h-4 w-4" />
            <span>8 min read</span>
          </div>
        </div>
      </div>
    </section>
  )
}
