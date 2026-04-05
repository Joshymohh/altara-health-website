"use client";

import { motion } from "framer-motion";

export function MagnoliaLetter() {
  return (
    <motion.div
      className="flex flex-col items-center gap-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* "About Us" heading only - logo appears only in Navbar and Footer */}
      <h1 className="font-serif text-2xl md:text-3xl tracking-[0.35em] uppercase text-[#003366] font-normal">
        About Us
      </h1>
    </motion.div>
  );
}
