"use client"

import { motion } from "framer-motion"

export function MagnoliaLetter() {
  return (
    <motion.div
      className="flex flex-col items-center gap-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Placeholder image container for the letter "A" */}
      <div className="relative flex items-center justify-center w-[150px] h-[150px] rounded-xl border border-[#003366]/[0.08] bg-white/50 backdrop-blur-sm overflow-hidden">
        {/* Subtle inner gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#003366]/[0.03] via-transparent to-[#003366]/[0.02] pointer-events-none" />

        {/* The letter "A" as a placeholder image element */}
        <span
          className="relative text-[96px] leading-none text-[#003366]/70 select-none"
          style={{
            fontFamily: "var(--font-playfair), 'Didot', 'Georgia', serif",
            fontStyle: "italic",
            fontWeight: 400,
          }}
          aria-label="Decorative letter A placeholder"
        >
          A
        </span>

        {/* Corner accent marks to indicate placeholder */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#003366]/20" />
        <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#003366]/20" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#003366]/20" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#003366]/20" />
      </div>

      {/* "About Us" text in Lora font, non-bold */}
      <h1 className="font-serif text-xl tracking-[0.35em] uppercase text-[#003366] font-normal">
        About Us
      </h1>
    </motion.div>
  )
}
