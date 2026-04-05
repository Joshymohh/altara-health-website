"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px] md:min-h-[480px]">
        {/* Left - Text Side: same left edge + padding as ProductGrid on md+; centered on mobile */}
        <div className="relative flex flex-col justify-center bg-primary px-4 py-16 max-md:items-center max-md:text-center md:items-start md:py-24 md:pl-0 md:text-left">
          <div className="w-full max-w-7xl pr-4 max-md:mx-auto md:ml-[max(0px,calc((100vw-80rem)/2))] md:pl-4 md:pr-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex w-full flex-col max-md:items-center max-md:text-center md:items-start md:text-left"
            >
              <h2 className="mb-8 w-full max-w-4xl font-serif text-3xl leading-tight text-primary-foreground max-md:mx-auto max-md:text-center md:text-left md:text-4xl lg:text-5xl">
                Your Best Self{" "}
                <br />
                Starts Here
              </h2>
              <a
                href="#get-started"
                className="inline-block w-full max-w-[280px] rounded-full bg-[#bbc7a4] px-8 py-3 text-center text-sm font-medium text-[#1a2e3e] transition-colors hover:bg-[#bbc7a4]/85 shimmer-cta max-md:mx-auto md:w-auto"
              >
                Get started today
              </a>
            </motion.div>
          </div>
        </div>

        {/* Right - Image Side: best-self-starts-here.png */}
        <div className="relative h-64 md:h-auto min-h-[256px] md:min-h-[480px]">
          <Image
            src="/home%20page/Best%20Self%20Starts%20Here.png"
            alt="Your best self starts here"
            fill
            quality={100}
            unoptimized
            className="object-cover object-center sharp-image"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
