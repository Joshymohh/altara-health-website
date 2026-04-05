import { Header } from "@/components/header";
import { MagazineHero } from "@/components/magazine-hero";
import { ProductGrid } from "@/components/product-grid";
import { CtaBanner } from "@/components/cta-banner";
import { Testimonials } from "@/components/testimonials";
import { HowItWorks } from "@/components/how-it-works";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <MagazineHero />
      <ProductGrid />
      <CtaBanner />
      <Testimonials />
      <HowItWorks />
      <FAQ />
      <Footer />
    </main>
  );
}
