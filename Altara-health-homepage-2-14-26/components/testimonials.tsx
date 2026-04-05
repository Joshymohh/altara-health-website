"use client";

import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "My combination of MIC helped burn fat and accelerate my weight loss. The support from Layla has been incredible!",
    author: "Jessica",
    treatment: "Weight Loss Treatment",
    verified: true,
  },
  {
    id: 2,
    rating: 5,
    text: "The NAD+ and Glutathione treatments have made such a difference in my energy, skin, and overall health. I wake up feeling refreshed and ready to take on the day!",
    author: "Lily",
    treatment: "Anti-Aging Treatment",
    verified: true,
  },
  {
    id: 3,
    rating: 5,
    text: "The B12 injections are a game changer. My energy levels have skyrocketed, and I feel more focused throughout the day.",
    author: "Maria",
    treatment: "Energy Boost Treatment",
    verified: true,
  },
  {
    id: 4,
    rating: 5,
    text: "After starting the Glutathione injections, my skin is brighter, and I feel rejuvenated. It's like hitting the reset button on my health!",
    author: "Sophia",
    treatment: "Longevity Treatment",
    verified: true,
  },
  {
    id: 5,
    rating: 5,
    text: "The NAD+ treatment has been life-changing. I have more energy, my skin looks better, and I feel sharper mentally.",
    author: "Ethan",
    treatment: "Cognitive Treatment",
    verified: true,
  },
];

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section className="bg-background py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">TESTIMONIALS</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            Helping real people solve real issues
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shadow-md transition-opacity ${
              canScrollLeft ? "opacity-100 hover:bg-secondary" : "opacity-0"
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shadow-md transition-opacity ${
              canScrollRight ? "opacity-100 hover:bg-secondary" : "opacity-0"
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Cards Container */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="flex-shrink-0 w-72 bg-card border border-border rounded-lg p-6 snap-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-foreground leading-relaxed mb-6">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <p className="font-medium text-sm text-foreground">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.treatment}</p>
                  {testimonial.verified && (
                    <p className="text-xs text-accent mt-1 flex items-center gap-1">
                      <span className="w-3 h-3 rounded-full bg-accent flex items-center justify-center">
                        <svg className="w-2 h-2 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      Verified Layla member
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
