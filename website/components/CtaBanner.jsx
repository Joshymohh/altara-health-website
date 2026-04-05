"use client";

import { motion } from "framer-motion";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px] md:min-h-[480px]">
        <div className="relative bg-primary flex flex-col justify-center px-8 md:px-16 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground leading-tight mb-8">
              Your Best Self{" "}
              <br />
              Starts Here
            </h2>
            <a
              href="#get-started"
              className="inline-block bg-[#bbc7a4] text-[#1a2e3e] px-8 py-3 rounded-full text-sm font-medium hover:bg-[#bbc7a4]/85 transition-colors shimmer-cta"
            >
              Get started today
            </a>
          </motion.div>
        </div>

        <div className="relative h-64 md:h-auto">
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=600&fit=crop"
            alt="Healthcare professional ready to help"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
