import { HomeHero } from "@/components/home-hero";
import { MagazineHero } from "@/components/magazine-hero";
import { ProductGrid } from "@/components/product-grid";
import { CtaBanner } from "@/components/cta-banner";
import { Testimonials } from "@/components/testimonials";
import { HowItWorks } from "@/components/how-it-works";
import { FAQ } from "@/components/faq";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <HomeHero />
      <MagazineHero />
      <ProductGrid />
      <CtaBanner />
      <Testimonials />
      <HowItWorks />
      <FAQ />
    </div>
  );
}
