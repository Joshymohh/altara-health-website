import { Twitter, Linkedin, Globe } from "lucide-react"

export function AuthorCard() {
  return (
    <section className="px-5 pb-12 md:px-10 md:pb-16">
      <div className="mx-auto max-w-[800px]">
        <div className="flex flex-col items-center gap-6 rounded-lg border border-border bg-card p-8 sm:flex-row sm:items-start">
          <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-full bg-muted">
            <img
              src="/placeholder.svg?height=80&width=80"
              alt="Elena Marchetti"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="font-sans text-[20px] font-semibold text-foreground">
              Elena Marchetti
            </h3>
            <p className="mt-1 font-sans text-[16px] leading-relaxed text-muted-foreground">
              Design Director & Writer. Exploring the intersection of
              technology, art, and human experience. Previously at Studio
              Forma and the Digital Design Institute.
            </p>
            <div className="mt-4 flex items-center justify-center gap-3 sm:justify-start">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Website"
              >
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
