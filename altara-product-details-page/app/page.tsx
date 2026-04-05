import { Navbar } from "@/components/navbar"
import { ProductHero } from "@/components/product-hero"
import { BenefitsSection } from "@/components/benefits-section"
import { HowItWorks } from "@/components/how-it-works"
import { QualitySection } from "@/components/quality-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--bone))] to-[hsl(var(--sage))]">
      <Navbar />
      <main>
        <ProductHero />
        <BenefitsSection />
        <div style={{ background: "radial-gradient(ellipse at center, #001a33 0%, #002d52 50%, #0a3d66 100%)" }}>
          <HowItWorks />
          <QualitySection />
        </div>
        <FaqSection />
      </main>
      <Footer />
    </div>
  )
}
