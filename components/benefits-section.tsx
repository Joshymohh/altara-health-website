"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const benefits = [
  {
    title: "Supports Weight Loss",
    description:
      "Quiets frustrating cravings, making it gentler and easier to lose weight.",
    image: "/products/tirzepatide/tirzepatide-benefits-1.jpg",
    alt: "Tirzepatide supports weight loss by quieting cravings",
  },
  {
    title: "Improves Metabolic Balance",
    description:
      "Eases the burden of metabolic balance by gently regulating blood sugar.",
    image: "/products/tirzepatide/tirzepatide-benefits-2.png",
    alt: "Tirzepatide improves metabolic balance and blood sugar regulation",
  },
  {
    title: "Encourages Natural Energy",
    description:
      "Helps efficiently process nutrients, gently restoring the energy you deserve daily.",
    image: "/products/tirzepatide/tirzepatide-benefits-3.jpg",
    alt: "Tirzepatide encourages natural energy through nutrient processing",
  },
  {
    title: "Helps Maintain Muscle Mass",
    description:
      "Encourages gentle fat loss while keeping your body strong and resilient.",
    image: "/products/tirzepatide/tirzepatide-benefits-4.jpg",
    alt: "Tirzepatide helps maintain muscle mass during weight loss",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
}

export function BenefitsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: Sticky title */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <h2 className="font-serif text-6xl font-normal tracking-tight text-foreground lg:text-8xl">
            Benefits
          </h2>
          <div className="mt-8">
            <p className="font-sans text-lg text-foreground">
              Why compounded Tirzepatide from Altara
            </p>
            <a
              href="#"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              <ArrowRight className="h-4 w-4" />
              Get started
            </a>
          </div>
        </div>

        {/* Right: Scrolling benefit cards - 4 cards with images and text */}
        <motion.div
          className="flex flex-col gap-12 lg:gap-16"
          variants={containerVariants}
          initial="visible"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={cardVariants}
              className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8"
            >
              <div className="relative aspect-[4/3] w-full min-h-[200px] overflow-hidden rounded-2xl bg-muted sm:w-64 sm:min-w-[16rem] sm:shrink-0">
                <Image
                  src={benefit.image}
                  alt={benefit.alt ?? benefit.title}
                  fill
                  quality={100}
                  unoptimized
                  className="object-cover sharp-image"
                  sizes="(max-width: 640px) 100vw, 20rem"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-serif text-xl font-normal text-foreground lg:text-2xl">
                  {benefit.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
