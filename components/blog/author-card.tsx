import Image from "next/image"
import { Twitter, Linkedin, Globe } from "lucide-react"

interface AuthorCardProps {
  name?: string
  bio?: string
  avatar?: string
  twitterUrl?: string
  linkedInUrl?: string
  websiteUrl?: string
}

const iconBtn =
  "flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-[#666666] transition-colors hover:border-black hover:text-black"

export function AuthorCard({
  name = "Elena Marchetti",
  bio = "Design Director & Writer. Exploring the intersection of technology, art, and human experience. Previously at Studio Forma and the Digital Design Institute.",
  avatar = "/placeholder.svg?height=80&width=80",
  twitterUrl = "#",
  linkedInUrl = "#",
  websiteUrl = "#",
}: AuthorCardProps) {
  return (
    <section className="border-t border-neutral-200 bg-[#FFFFFF] px-5 pb-8 md:px-10 md:pb-12">
      <div className="mx-auto max-w-[800px]">
        <div className="flex flex-col items-start gap-6 pt-10 sm:flex-row sm:items-start">
          <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full bg-neutral-100">
            <Image
              src={avatar}
              alt={name}
              fill
              className="object-cover"
              unoptimized={avatar.startsWith("http")}
            />
          </div>
          <div className="min-w-0 flex-1 text-left">
            <h3 className="font-serif text-xl font-normal text-black">{name}</h3>
            <p className="mt-2 font-sans text-base leading-relaxed text-[#666666] md:text-[17px]">
              {bio}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={twitterUrl}
                className={iconBtn}
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href={linkedInUrl}
                className={iconBtn}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={websiteUrl}
                className={iconBtn}
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
