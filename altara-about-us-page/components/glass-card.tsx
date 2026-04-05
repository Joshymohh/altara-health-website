"use client"

import { useRef, useState, useCallback } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"
import { MagnoliaLetter } from "./magnolia-letter"

const MAX_TILT_DEG = 2.5

const LOREM_TEXT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

export function GlassCard() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const springRotateX = useSpring(rotateX, { stiffness: 120, damping: 18 })
  const springRotateY = useSpring(rotateY, { stiffness: 120, damping: 18 })

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return
      const rect = cardRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const deltaX = (e.clientX - centerX) / (rect.width / 2)
      const deltaY = (e.clientY - centerY) / (rect.height / 2)

      rotateY.set(clamp(deltaX * MAX_TILT_DEG, -MAX_TILT_DEG, MAX_TILT_DEG))
      rotateX.set(clamp(-deltaY * MAX_TILT_DEG, -MAX_TILT_DEG, MAX_TILT_DEG))
    },
    [rotateX, rotateY]
  )

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
    rotateX.set(0)
    rotateY.set(0)
  }, [rotateX, rotateY])

  return (
    <div className="w-full max-w-[820px] flex flex-col items-center gap-8">
      {/* A + About Us sits outside the glass card */}
      <MagnoliaLetter />

      {/* Tilting glass card */}
      <div style={{ perspective: 900 }} className="w-full">
        <motion.div
          ref={cardRef}
          className="relative w-full cursor-default"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX: springRotateX,
            rotateY: springRotateY,
            transformStyle: "preserve-3d",
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Outer glow on hover */}
          <motion.div
            className="absolute -inset-1 rounded-2xl bg-[#003366]/10 blur-xl"
            animate={{ opacity: isHovered ? 0.4 : 0.1 }}
            transition={{ duration: 0.4 }}
          />

          {/* Main glassmorphism card */}
          <div className="relative w-full rounded-2xl border border-[#003366]/[0.08] bg-white/60 backdrop-blur-xl overflow-hidden shadow-sm">
            {/* Inner glass highlight */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/70 via-transparent to-white/30 pointer-events-none" />

            {/* Subtle top edge light */}
            <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#003366]/10 to-transparent" />

            {/* Content: full-width Lorem Ipsum text */}
            <div className="relative px-8 py-8 md:px-12 md:py-10">
              <p className="font-serif text-sm leading-relaxed text-[#003366]/70 font-normal">
                {LOREM_TEXT}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
