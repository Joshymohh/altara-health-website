/**
 * Home page — route: /
 * V0 design: hero, product grid, CTA, testimonials, how it works, FAQ.
 * Navbar and Footer are in the root layout.
 */
import { MagazineHero } from "@/components/magazine-hero";
import { ProductGrid } from "@/components/product-grid";
import { CtaBanner } from "@/components/cta-banner";
import { Testimonials } from "@/components/testimonials";
import { HowItWorks } from "@/components/how-it-works";
import { FAQ } from "@/components/faq";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <MagazineHero />
      <ProductGrid />
      <CtaBanner />
      <Testimonials />
      <HowItWorks />
      <FAQ />
    </div>
  );
}
