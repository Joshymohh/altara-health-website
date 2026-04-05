"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, Check, Minus } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const productImages = [
  {
    src: "/images/product-20page-201.jpg",
    alt: "Tirzepatide+ Good Life bottle",
  },
  {
    src: "/placeholder.svg?height=400&width=400",
    alt: "Clinically proven results showing weight loss",
  },
  {
    src: "/placeholder.svg?height=400&width=400",
    alt: "Customer testimonial with 5-star rating",
  },
]

const planPricing = [
  { plan: "6 Month", perMonth: "$209" },
  { plan: "3 Month", perMonth: "$211" },
  { plan: "Monthly", perMonth: "$260" },
  { plan: "3 Month Starter Pack", perMonth: "$198" },
]

export function ProductHero() {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <section className="mx-auto max-w-7xl px-6 py-8 lg:py-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        {/* Left: Images */}
        <div>
          {/* Mobile horizontal slider */}
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide lg:hidden">
            {productImages.map((img, i) => (
              <div
                key={i}
                className="min-w-[85%] snap-center overflow-hidden rounded-2xl bg-[hsl(var(--sage))]/30"
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Main image + thumbnails */}
          <div className="hidden lg:block">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-[hsl(var(--sage))]/30">
              <Image
                src={productImages[selectedImage].src || "/placeholder.svg"}
                alt={productImages[selectedImage].alt}
                fill
                className="object-cover"
                priority
              />
              <span className="absolute left-4 top-4 rounded-full bg-foreground/80 px-3 py-1 text-xs font-medium text-card">
                LIMITED TIME PROMOTION
              </span>
            </div>
            <div className="mt-4 flex gap-3">
              {productImages.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedImage(i)}
                  className={`relative h-20 w-20 overflow-hidden rounded-xl border-2 transition-all ${
                    selectedImage === i
                      ? "border-primary"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={img.src || "/placeholder.svg"} alt={img.alt} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="mb-2 inline-block rounded bg-[hsl(var(--sage))]/40 px-3 py-1 text-xs font-medium uppercase tracking-wider text-foreground/60">
              Best Seller
            </p>
            <h1 className="font-serif text-4xl font-normal tracking-tight text-foreground lg:text-5xl">
              Compounded Tirzepatide
            </h1>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-foreground">$247</span>
            <span className="text-lg text-muted-foreground line-through">$297</span>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-2 text-sm text-muted-foreground">(2,847 reviews)</span>
          </div>

          {/* CTA */}
          <button
            type="button"
            className="btn-cta w-full rounded-lg py-4 text-base font-semibold text-primary-foreground"
          >
            Buy now
          </button>

          {/* Description */}
          <p className="text-sm leading-relaxed text-muted-foreground">
            Now available through a{" "}
            <strong className="text-foreground">U.S.-based, FDA-licensed drug manufacturer</strong>,
            our compounded GLP-1 + GIP Tirzepatide injection is custom formulated to support
            effective weight loss, enhanced metabolic health and boost energy.
          </p>

          {/* Checkmarks */}
          <ul className="flex flex-col gap-2">
            {[
              "Direct from FDA-licensed manufacturer",
              "Order up to six months supply at once",
              "No additional fees or membership costs",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--success))]" />
                {item}
              </li>
            ))}
          </ul>

          {/* Accordions */}
          <Accordion type="single" collapsible className="w-full border-t border-border">
            <AccordionItem value="what-is">
              <AccordionTrigger className="text-sm font-medium hover:no-underline">
                What is Compounded Tirzepatide?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Compounded Tirzepatide is a dual GIP/GLP-1 receptor agonist that helps regulate
                appetite and blood sugar levels, supporting effective and sustained weight loss.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="switch">
              <AccordionTrigger className="text-sm font-medium hover:no-underline">
                Can you switch from another provider?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Yes! You can easily switch from another provider. Our medical team will review your
                history and create a seamless transition plan.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="quality">
              <AccordionTrigger className="text-sm font-medium hover:no-underline">
                How Good Life ensures quality and safety
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                All medications are prepared in a state-licensed pharmacy, independently verified in
                FDA- and DEA-registered labs, and delivered to your door.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Pricing Table */}
          <div className="overflow-hidden rounded-xl border border-border">
            <div className="grid grid-cols-2 border-b border-border bg-muted px-4 py-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Plan Length
              </span>
              <span className="text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Per Month
              </span>
            </div>
            {planPricing.map((row, i) => (
              <div
                key={row.plan}
                className={`grid grid-cols-2 px-4 py-3 ${
                  i < planPricing.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <span className="text-sm text-foreground">{row.plan}</span>
                <span className="text-right text-sm font-semibold text-foreground">
                  {row.perMonth}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
