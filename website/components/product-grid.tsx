"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: "weightloss",
    title: "Weight Loss",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=400&fit=crop",
    href: "/weight-loss",
  },
  {
    id: "longevity",
    title: "Longevity",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=300&h=400&fit=crop",
    href: "/longevity",
  },
  {
    id: "skin",
    title: "Skin",
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4a8e6fe?w=300&h=400&fit=crop",
    href: "/skin",
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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function ProductGrid() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-2">Peptides</h2>
            <p className="font-serif text-4xl md:text-5xl text-muted-foreground">made accessible</p>
          </div>
          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Affirm_logo.svg/120px-Affirm_logo.svg.png"
              alt="Affirm"
              className="h-5 opacity-60"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Klarna_Payment_Badge.svg/80px-Klarna_Payment_Badge.svg.png"
              alt="Klarna"
              className="h-5 opacity-60"
            />
            <span className="text-sm text-muted-foreground">afterpay</span>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-6 md:gap-12 mb-12 text-sm text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="font-medium">HSA/FSA Eligible</span>
          <span className="font-medium">100% Online</span>
          <span className="font-medium">Certified Doctors</span>
        </motion.div>

        <motion.div
          className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product) => (
            <Link key={product.id} href={product.href}>
              <motion.div
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px -12px rgba(0,0,0,0.15), 0 8px 20px -8px rgba(0,0,0,0.1)",
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="bg-black/[0.04] backdrop-blur-sm border border-white/40 rounded-lg p-6 cursor-pointer group shadow-md min-w-[280px] md:min-w-0 snap-center flex-shrink-0 md:flex-shrink block"
                style={{ willChange: "transform" }}
              >
                <div className="flex flex-col h-full min-h-[320px]">
                  <div className="flex-1 flex items-center justify-center mb-6">
                    <motion.img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="h-48 w-auto object-contain drop-shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
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
          ))}
        </motion.div>
      </div>
    </section>
  );
}
