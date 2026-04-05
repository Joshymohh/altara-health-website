"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, Check } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const productImages = [
  {
    src: "/products/tirzepatide/tirzepatide-image-1.jpg",
    alt: "Compounded Tirzepatide medication from Altara Health",
  },
  {
    src: "/products/tirzepatide/tirzepatide-image-2.jpg",
    alt: "Tirzepatide weight loss treatment packaging",
  },
  {
    src: "/products/tirzepatide/tirzepatide-image-3.jpg",
    alt: "FDA-licensed compounded Tirzepatide for weight management",
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
                    quality={100}
                    unoptimized
                    className="object-cover sharp-image"
                    priority={i === 0}
                    sizes="(max-width: 1024px) 85vw, 50vw"
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
                quality={100}
                unoptimized
                className="object-cover sharp-image"
                priority
                sizes="(min-width: 1024px) 50vw, 85vw"
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
                  <Image
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    fill
                    quality={100}
                    unoptimized
                    className="object-cover sharp-image"
                    sizes="160px"
                  />
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
              Compounded Tirzepatide for Weight Loss
            </h1>
            <p className="mt-2 font-sans text-lg text-muted-foreground">
              Effective GLP-1 + GIP therapy, delivered to your door.
            </p>
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
            <span className="ml-2 font-sans text-sm text-muted-foreground">(2,847 reviews)</span>
          </div>

          {/* CTA */}
          <button
            type="button"
            className="btn-cta w-full rounded-lg py-4 text-base font-semibold text-primary-foreground"
          >
            Buy now
          </button>

          {/* Description */}
          <p className="font-sans text-sm leading-relaxed text-muted-foreground">
            Now available through a{" "}
            <strong className="text-foreground">U.S.-based, FDA-licensed drug manufacturer</strong>,
            our compounded GLP-1 + GIP Tirzepatide injection is custom formulated to support
            effective weight loss, enhanced metabolic health, and sustained energy. Prescribed
            by licensed providers and shipped directly to you.
          </p>

          {/* Checkmarks */}
          <ul className="flex flex-col gap-2">
            {[
              "Direct from FDA-licensed manufacturer",
              "Order up to six months supply at once",
              "No additional fees or membership costs",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 font-sans text-sm text-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--success))]" />
                {item}
              </li>
            ))}
          </ul>

          {/* Accordions */}
          <Accordion type="single" collapsible className="w-full border-t border-border">
            <AccordionItem value="what-is">
              <AccordionTrigger className="font-sans text-sm font-medium hover:no-underline">
                What is Compounded Tirzepatide
              </AccordionTrigger>
              <AccordionContent className="font-sans text-sm text-muted-foreground">
                Compound Tirzepatide is a dual-action medication that activates both GIP (glucose-dependent insulinotropic polypeptide) and GLP-1 (glucagon-like peptide-1) receptors. This unique mechanism provides superior appetite suppression, enhanced insulin sensitivity, and improved metabolic function for effective weight management.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="benefits">
              <AccordionTrigger className="font-sans text-sm font-medium hover:no-underline">
                Benefits of Compounded Tirzepatide
              </AccordionTrigger>
              <AccordionContent className="font-sans text-sm text-muted-foreground">
                Compound Tirzepatide offers powerful benefits for weight management through its dual-action mechanism. Experience significant appetite reduction, enhanced metabolic function, improved blood sugar regulation, and sustained weight loss with clinical support. This therapy supports comprehensive health improvements while reducing cardiovascular risk factors.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="quality">
              <AccordionTrigger className="font-sans text-sm font-medium hover:no-underline">
                How Altara ensures quality and safety
              </AccordionTrigger>
              <AccordionContent className="font-sans text-sm text-muted-foreground">
                Altara only works with state-licensed and FDA-registered compounding pharmacies. Our partner pharmacies perform third-party testing through FDA and DEA-registered labs to ensure quality control for every compounded lot prescribed to patients. We thoroughly vet our partners to guarantee quality medication.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Pricing Table */}
          <div className="overflow-hidden rounded-xl border border-border">
            <div className="grid grid-cols-2 border-b border-border bg-muted px-4 py-3">
              <span className="font-sans text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Plan Length
              </span>
              <span className="text-right font-sans text-xs font-semibold uppercase tracking-wider text-muted-foreground">
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
                <span className="font-sans text-sm text-foreground">{row.plan}</span>
                <span className="text-right font-sans text-sm font-semibold text-foreground">
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
