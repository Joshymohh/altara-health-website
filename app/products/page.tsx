import type { Metadata } from "next"
import { ProductsGlassCatalog } from "@/components/products-glass-catalog"
import { PRODUCTS_PAGE_CATEGORIES } from "@/lib/products-page-data"

/** `public/Product Page/products page background.jpg` — bump `v` when replacing the file in place (cache bust). */
const BANNER_BG_URL = "/Product%20Page/products%20page%20background.jpg?v=2"

export const metadata: Metadata = {
  title: "Premium Peptide Therapy | Altara Health",
  description:
    "Explore our physician-supervised peptide treatments for weight management, longevity, and metabolic health.",
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Banner: ~1/3 viewport, background + overlay, title + intro */}
      <header className="relative flex min-h-[max(33vh,250px)] flex-col justify-center overflow-hidden md:min-h-[max(33vh,300px)]">
        <div
          className="absolute inset-0 bg-neutral-800 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${BANNER_BG_URL}')` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)]" aria-hidden />
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 py-10 md:px-20 md:py-14">
          <h1 className="text-left font-serif text-[36px] font-normal leading-tight text-white md:text-[48px]">
            Premium Peptide Therapy
          </h1>
          <p className="mt-4 max-w-[600px] text-left font-sans text-base font-normal leading-relaxed text-[#E5E5E5] md:text-lg">
            Physician-supervised peptide therapy for weight management, longevity, and metabolic
            health.
          </p>
        </div>
      </header>

      {/* Catalog — light bone (bg-background), trust row, categories + cards */}
      <ProductsGlassCatalog categories={PRODUCTS_PAGE_CATEGORIES} />
    </div>
  )
}
