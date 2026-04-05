"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const benefits = [
  {
    title: "Supports healthy aging",
    description:
      "Promotes skin elasticity, bone strength, and overall youthful vitality.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Sharpens focus at the source",
    description:
      "Targets cognitive clarity by delivering closer to the brain.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "All day energy",
    description: "Fuel your cells and fight fatigue — no caffeine crash.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Supports cellular repair",
    description:
      "Aids in DNA repair and cell regeneration, helping your body recover and renew at a deeper level.",
    image: "/placeholder.svg?height=300&width=400",
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
    transition: { duration: 0.6, ease: "easeOut" },
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
            <p className="text-lg text-foreground">
              Recharge Your Cells, Renew Your Energy
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

        {/* Right: Scrolling benefit cards */}
        <motion.div
          className="flex flex-col gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={cardVariants}
              className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted sm:w-64 sm:shrink-0">
                <Image
                  src={benefit.image || "/placeholder.svg"}
                  alt={benefit.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-serif text-xl font-normal text-foreground lg:text-2xl">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
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
