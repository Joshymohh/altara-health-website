import Link from "next/link"

export function BlogHero() {
  return (
    <section className="relative w-full h-[360px] md:h-[460px] overflow-hidden bg-white">
      <div className="absolute inset-0 bg-white" />

      {/* Featured article overlay content */}
      <Link
        href="#"
        className="relative z-10 flex flex-col justify-end h-full px-4 md:px-8 lg:px-12 pb-16 group"
      >
        <span className="inline-flex w-fit px-5 py-2 rounded-full bg-[#003366] text-white text-xs font-semibold tracking-wider uppercase transition-colors duration-200 group-hover:bg-[#004080]">
          Featured Article
        </span>
        <h2 className="mt-4 text-2xl md:text-3xl font-serif text-foreground max-w-xl text-balance leading-snug group-hover:text-[#003366] transition-colors duration-200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h2>
        <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-lg leading-relaxed">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </p>
      </Link>
    </section>
  )
}
