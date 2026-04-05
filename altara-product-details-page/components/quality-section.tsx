"use client"

import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

const tests = [
  {
    name: "Potency test",
    description:
      "Confirmed every 3-6 months to stay within +/- 10 % of the target strength.",
    status: "Passed",
  },
  {
    name: "Sterility test",
    description:
      "Screened for bacteria, fungi, and other contaminants to meet USP 797 standards.",
    status: "Passed",
  },
  {
    name: "Endotoxicity test",
    description:
      "Checked to USP 85 limits to ensure zero harmful bacterial toxins.",
    status: "Passed",
  },
  {
    name: "pH test",
    description:
      "Fine-tuned for a smooth, irritation-free injection.",
    status: "Passed",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export function QualitySection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 pt-8 lg:pb-24 lg:pt-12">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-4xl font-normal tracking-tight text-white lg:text-5xl">
          Quality <span className="italic text-white/80">tested</span>
        </h2>
        <p className="mt-4 text-sm font-light leading-relaxed text-white/70">
          Your medication is prepared in a state-licensed pharmacy, independently verified in FDA-
          and DEA-registered labs, and delivered to your door exactly when you need it.
        </p>
      </div>

      {/* Test Grid */}
      <motion.div
        className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {tests.map((test) => (
          <motion.div
            key={test.name}
            variants={cardVariants}
            className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base font-normal text-white">{test.name}</h3>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#bbc7a4]">
                <CheckCircle2 className="h-4 w-4" />
                {test.status}
              </span>
            </div>
            <p className="text-sm font-light leading-relaxed text-white/60">
              {test.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <div className="mt-10 flex justify-center">
        <a
          href="#"
          className="btn-sage rounded-full px-8 py-3 text-sm font-medium"
        >
          Get started
        </a>
      </div>
    </section>
  )
}
