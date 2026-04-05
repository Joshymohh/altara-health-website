import Image from "next/image";
import Link from "next/link";

/** `public/home page/Peptide Hero Image 1.jpg` */
const HERO_IMAGE_SRC = "/home%20page/Peptide%20Hero%20Image%201.jpg";

export function HomeHero() {
  return (
    <section
      className="relative m-0 min-h-[500px] h-[70vh] w-full overflow-hidden p-0 md:h-[75vh] md:min-h-[600px]"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMAGE_SRC}
          alt="Vitality Redefined"
          fill
          priority
          quality={100}
          unoptimized
          className="object-cover sharp-image"
          sizes="100vw"
        />
      </div>
      <div
        className="absolute inset-0 z-[1] bg-[rgba(0,0,0,0.4)]"
        aria-hidden
      />

      <div className="relative z-[2] flex h-full min-h-[500px] flex-col items-center justify-center px-6 py-12 text-center md:min-h-[600px]">
        <h1
          id="hero-heading"
          className="mx-auto mb-6 w-full max-w-4xl text-center font-serif text-[40px] font-normal leading-tight text-white md:mb-8 md:text-[52px] lg:mb-8 lg:text-[64px]"
        >
          Vitality Redefined
        </h1>

        <div className="mx-auto flex w-full max-w-[280px] flex-col items-center justify-center gap-3 md:mx-0 md:max-w-none md:flex-row md:justify-center md:gap-4">
          <Link
            href="/blog"
            className="hero-cta inline-flex w-full max-w-[280px] min-h-[44px] items-center justify-center rounded-lg bg-white px-6 py-3.5 text-center font-sans text-base font-semibold text-black transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:w-auto md:max-w-none md:min-h-11 md:px-8 md:py-4"
          >
            Read How
          </Link>
          <Link
            href="/products"
            className="hero-cta inline-flex w-full max-w-[280px] min-h-[44px] items-center justify-center rounded-lg bg-white px-6 py-3.5 text-center font-sans text-base font-semibold text-black transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:w-auto md:max-w-none md:min-h-11 md:px-8 md:py-4"
          >
            View Peptides
          </Link>
        </div>
      </div>
    </section>
  );
}
