"use client"

import { ClipboardList, Pill, Package } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
  {
    icon: ClipboardList,
    step: "Step 1",
    title: "Free assessment, 100% online",
    description:
      "Answer some questions about your health history, lifestyle and goals on our online medical intake.",
    cta: "Take the assessment",
  },
  {
    icon: Pill,
    step: "Step 2",
    title: "Get Your Prescription",
    description:
      "A licensed medical provider will review your information and determine which medication is right for you.",
    cta: "See if your eligible",
  },
  {
    icon: Package,
    step: "Step 3",
    title: "Free Delivery",
    description:
      "If prescribed, your medication is cold-shipped straight to your door for no additional cost.",
    cta: "Get started today",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
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

export function ProductHowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
      {/* Header */}
      <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <h2 className="font-serif text-4xl font-normal tracking-tight text-white lg:text-5xl">
          How it <span className="italic text-white/80">works</span>
        </h2>
        <a
          href="#"
          className="btn-sage rounded-full px-6 py-3 text-sm font-medium"
        >
          Get Started
        </a>
      </div>

      {/* Steps */}
      <motion.div
        className="grid grid-cols-1 gap-6 md:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {steps.map((s) => (
          <motion.div
            key={s.step}
            variants={cardVariants}
            className="flex flex-col justify-between rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-md"
          >
            <div>
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                  <s.icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-light text-white/60">
                  {s.step}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-normal text-white">{s.title}</h3>
              <p className="text-sm font-light leading-relaxed text-white/70">
                {s.description}
              </p>
            </div>
            <a
              href="#"
              className="btn-sage mt-6 block w-full rounded-lg py-3 text-center text-sm font-medium"
            >
              {s.cta}
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
