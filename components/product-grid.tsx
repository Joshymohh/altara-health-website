"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const paymentLogos = [
  { src: "/home%20page/Affirm%20Logo.png", alt: "Affirm" },
  { src: "/home%20page/Klarna%20Logo.png", alt: "Klarna" },
  { src: "/home%20page/Afterpay%20Logo.png", alt: "Afterpay" },
];

const products = [
  {
    id: "weightloss",
    title: "Weight Loss",
    image: "/home%20page/Home%20Page%20Product%201.png",
    href: "/tirzepatide",
  },
  {
    id: "longevity",
    title: "Longevity",
    image: "/home%20page/Home%20Page%20Product%202.png",
    href: "/products/nad",
  },
  {
    id: "skin",
    title: "Skin",
    image: "/home%20page/Home%20Page%20Product%203.png",
    href: "/products/ghk-cu",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function ProductGrid() {
  return (
    <section id="product-categories" className="bg-background py-16 md:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-2">Peptides</h2>
            <p className="font-serif text-4xl md:text-5xl text-muted-foreground">made accessible</p>
          </div>
          <div className="flex items-center gap-4 mt-6 md:mt-0">
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

        {/* Trust Badges - glassmorphic bubbles */}
        <motion.div
          className="flex flex-wrap gap-4 md:gap-6 mb-12"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {["HSA/FSA Eligible", "100% Online", "Certified Doctors"].map((label) => (
            <span
              key={label}
              className="inline-flex items-center px-4 py-2.5 rounded-full text-sm font-medium text-foreground bg-white/40 backdrop-blur-md border border-white/60 shadow-sm"
            >
              {label}
            </span>
          ))}
        </motion.div>

        {/* Product Cards */}
        <motion.div
          className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="min-w-[320px] sm:min-w-[380px] md:min-w-0 snap-center flex-shrink-0 md:flex-shrink"
            >
              <Link
                href={product.href}
                className="block h-full rounded-lg cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/60"
              >
                <motion.div
                  whileHover={{
                    y: -10,
                    boxShadow:
                      "0 0 0 1px rgba(184,134,98,0.25), 0 0 24px rgba(184,134,98,0.12), 0 20px 40px -12px rgba(0,0,0,0.15), 0 8px 20px -8px rgba(0,0,0,0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="relative bg-black/[0.04] backdrop-blur-sm border border-white/40 rounded-lg p-6 group h-full overflow-hidden"
                  style={{
                    willChange: "transform",
                    boxShadow:
                      "0 0 0 1px rgba(184,134,98,0.12), 0 0 16px rgba(184,134,98,0.06), 0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -2px rgba(0,0,0,0.05)",
                  }}
                >
                  {/* Full-card radial gradient - fills entire box edge to edge including CTA area */}
                  <div
                    className="absolute inset-0 rounded-lg opacity-90 sm:opacity-100 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse 100% 100% at 50% 40%, rgba(255,255,255,0.92) 0%, rgba(227,242,253,0.5) 50%, rgba(227,242,253,0.3) 85%, rgba(227,242,253,0.25) 100%)",
                    }}
                  />
                  <div className="relative z-10 flex flex-col h-full min-h-[400px]">
                    <div className="flex-1 relative flex items-center justify-center mb-6 min-h-[288px]">
                      <motion.div
                        className="relative w-full h-72 flex items-center justify-center"
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
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-xl text-foreground">{product.title}</h3>
                      <motion.div
                        className="w-10 h-10 rounded-full bg-card flex items-center justify-center"
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <ArrowRight className="w-5 h-5 text-foreground group-hover:translate-x-0.5 transition-transform" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
