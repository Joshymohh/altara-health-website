"use client";

import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "My combination of MIC helped burn fat and accelerate my weight loss. The support from Altara has been incredible!",
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

function isMobileCarousel(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 767px)").matches;
}

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  const updateActiveIndex = useCallback(() => {
    const el = scrollRef.current;
    if (!el || !isMobileCarousel()) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const cards = el.querySelectorAll<HTMLElement>("[data-testimonial-card]");
    let bestIdx = 0;
    let bestDist = Infinity;
    cards.forEach((card, i) => {
      const cr = card.getBoundingClientRect();
      const cardCenter = cr.left + cr.width / 2;
      const d = Math.abs(cardCenter - centerX);
      if (d < bestDist) {
        bestDist = d;
        bestIdx = i;
      }
    });
    setActiveIndex(bestIdx);
  }, []);

  const handleScroll = useCallback(() => {
    checkScroll();
    updateActiveIndex();
  }, [checkScroll, updateActiveIndex]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    if (isMobileCarousel() && el.firstElementChild) {
      const first = el.firstElementChild as HTMLElement;
      const gapStr = getComputedStyle(el).gap || "12px";
      const gap = parseFloat(gapStr) || 12;
      const w = first.getBoundingClientRect().width + gap;
      el.scrollBy({
        left: direction === "left" ? -w : w,
        behavior: "smooth",
      });
    } else {
      el.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
    setTimeout(() => {
      checkScroll();
      updateActiveIndex();
    }, 320);
  };

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLElement>("[data-testimonial-card]");
    const card = cards[index];
    card?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    setTimeout(() => {
      checkScroll();
      updateActiveIndex();
    }, 350);
  };

  useEffect(() => {
    checkScroll();
    updateActiveIndex();
    window.addEventListener("resize", checkScroll);
    window.addEventListener("resize", updateActiveIndex);
    return () => {
      window.removeEventListener("resize", checkScroll);
      window.removeEventListener("resize", updateActiveIndex);
    };
  }, [checkScroll, updateActiveIndex]);

  return (
    <section className="bg-background py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">TESTIMONIALS</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            Exceptional Care. Extraordinary Outcomes.
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 z-20 -translate-x-4 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-md transition-opacity ${
              canScrollLeft ? "opacity-100 hover:bg-secondary" : "opacity-0"
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 z-20 translate-x-4 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-md transition-opacity ${
              canScrollRight ? "opacity-100 hover:bg-secondary" : "opacity-0"
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>

          {/* -mx-4 aligns track + fades with section bleed (matches former scroll -mx-4) */}
          <div className="relative -mx-4">
            {/* Edge fades — desktop/tablet only (hidden on mobile ≤767px) */}
            <div
              className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 hidden w-[min(100%,200px)] md:block md:w-[240px] lg:w-[250px]"
              style={{
                background:
                  "linear-gradient(to right, var(--background) 0%, var(--background) 20%, transparent 100%)",
              }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute top-0 bottom-0 right-0 z-10 hidden w-[min(100%,200px)] md:block md:w-[240px] lg:w-[250px]"
              style={{
                background:
                  "linear-gradient(to left, var(--background) 0%, var(--background) 20%, transparent 100%)",
              }}
              aria-hidden
            />

            {/* Cards Container — mobile: one centered card, snap-center; md+: horizontal strip */}
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="relative z-0 flex max-md:gap-3 gap-6 overflow-x-auto overflow-y-hidden scrollbar-hide snap-x snap-mandatory scroll-pl-[5vw] scroll-pr-[5vw] px-0 pb-4 max-md:pb-6 md:scroll-p-0 md:px-4 touch-pan-x"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                data-testimonial-card
                className="flex-shrink-0 w-[min(90vw,calc(100vw-2rem))] min-w-[min(90vw,calc(100vw-2rem))] snap-center snap-always rounded-lg border border-border bg-card p-6 md:w-72 md:min-w-0 md:snap-start"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
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
                      Verified Altara member
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
            </div>

            {/* Mobile slide indicators */}
            <div
              className="mt-4 flex justify-center gap-2 md:hidden"
              role="tablist"
              aria-label="Testimonial slides"
            >
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={activeIndex === i}
                  aria-label={`Go to testimonial ${i + 1} of ${testimonials.length}`}
                  onClick={() => scrollToIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === i
                      ? "w-7 bg-[#326ea2]"
                      : "w-2 bg-muted-foreground/35 hover:bg-muted-foreground/55"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
