"use client"

/**
 * Products page: trust/logos + Montserrat category headings + homepage-style cards.
 */

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { ProductsPageCategory, ProductsPageItem } from "@/lib/products-page-data"

const paymentLogos = [
  { src: "/home%20page/Affirm%20Logo.png", alt: "Affirm" },
  { src: "/home%20page/Klarna%20Logo.png", alt: "Klarna" },
  { src: "/home%20page/Afterpay%20Logo.png", alt: "Afterpay" },
] as const

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
}

const categoryHeadingClass =
  "mb-8 text-left font-sans text-xl font-semibold uppercase tracking-[0.05em] text-[#1a2332] md:text-[22px] lg:text-2xl"

function ProductCardMotion({ product }: { product: ProductsPageItem }) {
  return (
    <motion.div
      variants={itemVariants}
      className="min-w-0"
    >
      <Link
        href={product.href}
        className="block h-full cursor-pointer rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/60"
      >
        <motion.div
          whileHover={{
            y: -10,
            boxShadow:
              "0 0 0 1px rgba(184,134,98,0.25), 0 0 24px rgba(184,134,98,0.12), 0 20px 40px -12px rgba(0,0,0,0.15), 0 8px 20px -8px rgba(0,0,0,0.1)",
          }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="group relative h-full overflow-hidden rounded-lg border border-white/40 bg-black/[0.04] p-6 backdrop-blur-sm"
          style={{
            willChange: "transform",
            boxShadow:
              "0 0 0 1px rgba(184,134,98,0.12), 0 0 16px rgba(184,134,98,0.06), 0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -2px rgba(0,0,0,0.05)",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 rounded-lg opacity-90 sm:opacity-100"
            style={{
              background:
                "radial-gradient(ellipse 100% 100% at 50% 40%, rgba(255,255,255,0.92) 0%, rgba(227,242,253,0.5) 50%, rgba(227,242,253,0.3) 85%, rgba(227,242,253,0.25) 100%)",
            }}
          />
          <div className="relative z-10 flex min-h-[400px] flex-col">
            <div className="relative mb-6 flex min-h-[288px] flex-1 items-center justify-center">
              <motion.div
                className="relative flex h-72 w-full items-center justify-center"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={840}
                  height={576}
                  quality={100}
                  unoptimized
                  className="h-72 w-auto max-w-full object-contain drop-shadow-lg sharp-image"
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 33vw"
                />
              </motion.div>
            </div>
            <div className="flex items-start justify-between gap-3">
              <h3 className="min-w-0 flex-1 font-serif text-xl leading-snug text-foreground">
                {product.title}
              </h3>
              <motion.div
                className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-card"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowRight className="h-5 w-5 text-foreground transition-transform group-hover:translate-x-0.5" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}

export function ProductsGlassCatalog({ categories }: { categories: ProductsPageCategory[] }) {
  return (
    <section id="product-categories" className="scroll-mt-20 bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Trust pills (left) + payment logos (right) */}
        <motion.div
          className="mb-8 flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between md:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap items-center justify-start gap-4 md:gap-6">
            {["HSA/FSA Eligible", "100% Online", "Certified Doctors"].map((label) => (
              <span
                key={label}
                className="inline-flex items-center rounded-full border border-white/60 bg-white/40 px-4 py-2.5 text-sm font-medium text-foreground shadow-sm backdrop-blur-md"
              >
                {label}
              </span>
            ))}
          </div>
          <div className="flex shrink-0 flex-wrap items-center justify-end gap-4 md:gap-6">
            {paymentLogos.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={80}
                height={24}
                quality={100}
                unoptimized
                className="h-5 w-auto object-contain sharp-image"
              />
            ))}
          </div>
        </motion.div>

        {/* Category sections */}
        {categories.map((category, index) => (
          <section
            key={category.id}
            aria-labelledby={`category-${category.id}`}
            className={index === 0 ? "" : "mt-12 md:mt-16 lg:mt-20"}
          >
            <h2 id={`category-${category.id}`} className={categoryHeadingClass}>
              {category.heading}
            </h2>
            <motion.div
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {category.products.map((product) => (
                <ProductCardMotion key={product.id} product={product} />
              ))}
            </motion.div>
          </section>
        ))}
      </div>
    </section>
  )
}
