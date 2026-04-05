import Image from "next/image"
import Link from "next/link"
import type { ProductCardData } from "@/lib/blog"

interface SuggestedProductsProps {
  products: ProductCardData[]
}

export function SuggestedProducts({ products }: SuggestedProductsProps) {
  if (products.length === 0) return null

  return (
    <section
      className="border-t border-neutral-200 bg-[#FFFFFF] px-5 pb-16 pt-14 md:px-10 md:pb-20 md:pt-16"
      aria-label="Related products"
    >
      <div className="mx-auto max-w-[1100px]">
        <h2 className="mb-10 text-center font-serif text-2xl font-normal text-black md:text-3xl">
          Explore related products
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {products.map((p) => (
            <article
              key={p.link}
              className="group flex flex-col overflow-hidden rounded-[4px] bg-white"
            >
              <div className="relative suggested-product-image overflow-hidden bg-neutral-100">
                <div className="absolute inset-0 transition-transform duration-[400ms] ease-out will-change-transform group-hover:scale-105">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    quality={100}
                    className="object-cover sharp-image"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized
                  />
                </div>
                <div
                  className="pointer-events-none absolute inset-0 bg-black/[0.15] opacity-0 transition-opacity duration-[400ms] ease-out group-hover:opacity-100"
                  aria-hidden
                />
              </div>
              <div className="flex flex-1 flex-col px-5 py-6 md:px-6">
                <h3 className="font-serif text-lg font-normal text-black">{p.name}</h3>
                <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-[#666666]">
                  {p.description}
                </p>
                <Link
                  href={p.link}
                  className="mt-5 inline-flex w-fit font-sans text-sm font-semibold text-black underline underline-offset-4 transition-colors hover:text-[#326ea2]"
                >
                  learn more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
