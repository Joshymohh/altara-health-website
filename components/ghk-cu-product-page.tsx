"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Star } from "lucide-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaqSection, type FaqItemType } from "@/components/faq-section";
import { ProductHowItWorks } from "@/components/product-how-it-works";
import { QualitySection } from "@/components/quality-section";

const productImages = [
  {
    src: "/products/ghk-cu/ghk-cu-image-1.jpg",
    alt: "GHK-Cu + Tretinoin + Niacinamide injection product from Altara",
  },
  {
    src: "/products/ghk-cu/ghk-cu-image-2.jpg",
    alt: "GHK-Cu injectable skin rejuvenation therapy packaging",
  },
  {
    src: "/products/ghk-cu/ghk-cu-image-3.jpg",
    alt: "GHK-Cu anti-aging formulation for skin renewal support",
  },
];

const benefits = [
  {
    title: "Supports Skin Elasticity",
    description:
      "Promotes supple skin, strong collagen networks, and youthful firmness through multi-pathway rejuvenation.",
    image: "/products/ghk-cu/ghk-cu-benefits-1.jpg",
    alt: "GHK-Cu supports skin elasticity and collagen structure",
  },
  {
    title: "Enhances Skin Clarity & Tone",
    description:
      "Reduces hyperpigmentation, evens skin tone, and promotes radiant, luminous complexion.",
    image: "/products/ghk-cu/ghk-cu-benefits-2.jpg",
    alt: "GHK-Cu improves skin tone and clarity",
  },
  {
    title: "Accelerates Cellular Renewal",
    description:
      "Enhances skin cell turnover for smoother texture and reduced appearance of fine lines.",
    image: "/products/ghk-cu/ghk-cu-benefits-3.jpg",
    alt: "GHK-Cu promotes cellular skin renewal",
  },
  {
    title: "Supports Comprehensive Repair",
    description:
      "Combines tissue regeneration, barrier strengthening, and antioxidant protection for complete skin health.",
    image: "/products/ghk-cu/ghk-cu-benefits-4.jpg",
    alt: "GHK-Cu supports comprehensive skin repair",
  },
];

const GHK_CU_FAQS: FaqItemType[] = [
  {
    q: "What happens if I'm not approved for the treatment?",
    a: "If you are not prescribed GHK-Cu + Tretinoin + Niacinamide therapy from our team of medical providers, you will be notified and receive a full refund for all costs incurred. This includes a cancellation of any subscription memberships you selected.",
  },
  {
    q: "What is the administration and dosage protocol?",
    a: `Altara's approach to GHK-Cu + Tretinoin + Niacinamide administration involves a personalized dosage strategy tailored to your individual needs and skin goals. This formulation is typically administered via subcutaneous injection, often in the abdominal area or thigh. Due to the tretinoin component, your provider may recommend starting with a lower frequency and gradually increasing as your skin adapts. Injection frequency varies based on your tolerance and objectives. You will receive comprehensive instructions on proper self-administration technique, sun protection requirements, and skin care recommendations. Regular follow-ups with your healthcare provider will help monitor your progress and optimize your treatment plan.

Disclaimer: Individual results may vary. Always consult with your healthcare provider before starting any new therapy to ensure it is appropriate for your condition. Follow your healthcare provider's instructions for dosage and administration. These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.`,
  },
  {
    q: "How does GHK-Cu + Tretinoin + Niacinamide work?",
    a: "This formulation works through three complementary mechanisms. GHK-Cu stimulates collagen and elastin production, modulates gene expression for tissue repair, and provides antioxidant support through its copper component. Tretinoin accelerates cellular turnover, increases collagen synthesis, normalizes skin cell differentiation, and improves skin texture and pigmentation. Niacinamide strengthens the skin barrier, reduces inflammation, improves skin elasticity, minimizes pore appearance, and regulates sebum production. Together, these ingredients create a comprehensive anti-aging approach addressing multiple pathways simultaneously for superior rejuvenation results.",
  },
  {
    q: "What are common side effects?",
    a: "Side effects are generally mild but may include injection site reactions (redness, swelling, temporary discomfort). Due to the tretinoin component, some individuals may experience temporary skin sensitivity, mild dryness, or slight peeling as the skin adjusts—similar to topical tretinoin use but typically milder with injectable administration. Niacinamide is generally very well-tolerated. Sun sensitivity may be increased, making daily broad-spectrum sunscreen essential. Individuals with copper sensitivity or Wilson's disease should not use this therapy. Most adjustment effects diminish as the skin adapts to treatment. Always consult your healthcare provider for personalized advice and to report any side effects.",
  },
  {
    q: "Is this formulation FDA-approved?",
    a: "This combination formulation is not FDA-approved as a specific drug product. However, tretinoin is FDA-approved for various dermatological uses, and the individual components have established research supporting their benefits. This therapy is available through compounding pharmacies and administered by licensed healthcare providers who ensure proper evaluation and monitoring throughout your treatment.",
  },
  {
    q: "How long does it take to see results?",
    a: "Results vary by individual and depend on your baseline skin condition, age, treatment consistency, and specific goals. Many people notice improvements in skin texture, radiance, and hydration within 4-6 weeks. More significant changes in fine lines, skin firmness, and tone typically become apparent over 3-6 months of consistent use. Tretinoin's cellular turnover effects may produce initial improvements within 6-8 weeks, while collagen remodeling benefits develop over several months. Your healthcare provider will help set realistic expectations based on your specific situation.",
  },
  {
    q: "Can I take this with other supplements or medications?",
    a: "This formulation can generally be combined with other supplements and many medications. However, it's essential to inform your healthcare provider about all medications, supplements, and topical treatments you use. Avoid combining with other retinoid products or high-concentration acids without provider guidance. Individuals with copper metabolism disorders (such as Wilson's disease) should not use this therapy. Those using photosensitizing medications should discuss sun protection strategies with their provider.",
  },
  {
    q: "Do I need to avoid sun exposure?",
    a: "Yes, sun protection is crucial when using this formulation, particularly due to the tretinoin component which increases photosensitivity. Daily broad-spectrum SPF 30+ sunscreen is essential, even on cloudy days. Protective clothing, hats, and seeking shade during peak sun hours are recommended. Avoiding tanning beds and excessive sun exposure helps prevent hyperpigmentation and maximizes treatment benefits. Your healthcare provider will provide detailed sun protection guidance.",
  },
  {
    q: "How often do I need injections?",
    a: "Injection frequency depends on your individual goals, skin tolerance, and provider recommendations. Common protocols range from 1-2 times per week initially, with adjustments based on your response. Some individuals use this formulation in cycles while others maintain continuous use. Your healthcare provider will create a personalized treatment schedule considering the potency of the tretinoin component and your skin's adaptation.",
  },
  {
    q: "What makes this combination superior to topical products?",
    a: "Injectable administration offers several advantages: systemic distribution provides benefits beyond surface application, higher bioavailability ensures active ingredients reach target tissues effectively, and the combination creates synergistic effects not possible with topical application alone. Injectable delivery bypasses potential absorption barriers of the skin's outer layer, allowing for comprehensive tissue-level benefits including deeper collagen stimulation and cellular repair that topical products cannot achieve as efficiently.",
  },
  {
    q: "Can I use topical skincare products while on this treatment?",
    a: "Yes, but coordination with your provider is important. Gentle, hydrating skincare is generally recommended. Avoid combining with other potent topical retinoids, high-concentration acids, or potentially irritating ingredients without provider approval. Niacinamide in topical products is typically safe to combine. Your healthcare provider will help you develop a complementary skincare routine that supports—rather than interferes with—your injectable treatment.",
  },
  {
    q: "Why combine these three ingredients specifically?",
    a: "This combination leverages synergistic mechanisms for superior anti-aging results. GHK-Cu provides collagen stimulation and tissue repair, tretinoin accelerates cellular turnover and collagen production, and niacinamide strengthens the skin barrier while reducing inflammation and improving tolerance to tretinoin. Niacinamide also helps minimize potential irritation from tretinoin while enhancing overall skin health. Together, they address collagen production, cellular turnover, barrier function, pigmentation, and inflammation—covering all major aging pathways simultaneously for comprehensive rejuvenation.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function GhkCuProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--bone))] to-[hsl(var(--sage))]">
      <section className="mx-auto max-w-7xl px-6 py-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide lg:hidden">
              {productImages.map((img, i) => (
                <div key={i} className="min-w-[85%] snap-center overflow-hidden rounded-2xl flex-shrink-0">
                  <div className="relative aspect-square w-full">
                    <Image
                      src={img.src}
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

            <div className="hidden lg:block">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                <Image
                  src={productImages[selectedImage].src}
                  alt={productImages[selectedImage].alt}
                  fill
                  quality={100}
                  unoptimized
                  className="object-cover sharp-image"
                  priority
                  sizes="(min-width: 1024px) 50vw, 85vw"
                />
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
                    aria-label={`View product image ${i + 1}`}
                  >
                    <div className="relative h-full w-full overflow-hidden rounded-[10px]">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        quality={100}
                        unoptimized
                        className="object-cover sharp-image"
                        sizes="160px"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <p className="mb-2 inline-block rounded bg-[hsl(var(--sage))]/40 px-3 py-1 text-xs font-medium uppercase tracking-wider text-foreground/60">
                Skin
              </p>
              <h1 className="font-serif text-4xl font-normal tracking-tight text-foreground lg:text-5xl">
                GHK-Cu
              </h1>
              <p className="mt-2 font-sans text-lg text-muted-foreground">
                Advanced peptide and vitamin formulation for skin rejuvenation and anti-aging support.
              </p>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-foreground">From $50</span>
              <span className="text-lg text-muted-foreground">/ month</span>
            </div>

            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 font-sans text-sm text-muted-foreground">
                (Trusted by Altara patients)
              </span>
            </div>

            <button
              type="button"
              className="btn-cta w-full rounded-lg py-4 text-base font-semibold text-primary-foreground"
            >
              Buy now
            </button>

            <p className="font-sans text-sm leading-relaxed text-muted-foreground">
              Now available through a{" "}
              <strong className="text-foreground">U.S.-based, FDA-licensed drug manufacturer</strong>
              , our GHK-Cu + Tretinoin + Niacinamide injection combines a copper peptide, vitamin A
              derivative, and vitamin B3 for comprehensive skin rejuvenation, collagen production,
              and anti-aging support. Administered via subcutaneous injection and prescribed by
              licensed providers, shipped directly to you.
            </p>

            <ul className="flex flex-col gap-2">
              {[
                "Direct from FDA-licensed manufacturer",
                "Starting at $50 per month",
                "No additional fees or membership costs",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 font-sans text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--success))]" />
                  {item}
                </li>
              ))}
            </ul>

            <Accordion type="single" collapsible className="w-full border-t border-border">
              <AccordionItem value="what-are">
                <AccordionTrigger className="font-sans text-sm font-medium hover:no-underline">
                  What are GHK-Cu injections?
                </AccordionTrigger>
                <AccordionContent className="font-sans text-sm text-muted-foreground">
                  GHK-Cu + Tretinoin + Niacinamide is a powerful anti-aging formulation combining
                  three scientifically-backed ingredients for comprehensive skin rejuvenation and
                  cellular repair. GHK-Cu (glycyl-L-histidyl-L-lysine copper) is a naturally
                  occurring copper peptide that supports collagen synthesis, tissue repair, and
                  cellular regeneration. Tretinoin, a vitamin A derivative, enhances cellular
                  turnover, promotes collagen production, and improves skin texture. Niacinamide
                  (vitamin B3) strengthens the skin barrier, reduces inflammation, and improves skin
                  tone and texture. Together, these ingredients work synergistically to deliver
                  superior anti-aging benefits, supporting youthful skin appearance, enhanced tissue
                  repair, and comprehensive cellular rejuvenation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="benefits">
                <AccordionTrigger className="font-sans text-sm font-medium hover:no-underline">
                  Benefits of GHK-Cu Injections
                </AccordionTrigger>
                <AccordionContent className="font-sans text-sm text-muted-foreground">
                  This powerful triple-action formulation offers comprehensive anti-aging and skin
                  rejuvenation benefits. Experience enhanced collagen production, improved skin
                  texture and tone, reduced appearance of fine lines and wrinkles, strengthened skin
                  barrier function, and accelerated cellular turnover. The combination provides
                  superior antioxidant protection, promotes even skin tone, reduces hyperpigmentation,
                  enhances skin firmness and elasticity, and supports comprehensive tissue repair.
                  This synergistic blend addresses multiple aging pathways simultaneously for optimal
                  rejuvenation results.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="quality">
                <AccordionTrigger className="font-sans text-sm font-medium hover:no-underline">
                  How Altara ensures quality and safety
                </AccordionTrigger>
                <AccordionContent className="font-sans text-sm text-muted-foreground">
                  Altara sources GHK-Cu + Tretinoin + Niacinamide from reputable, quality-controlled
                  suppliers and works exclusively with licensed healthcare providers. Our partner
                  pharmacies and medical professionals follow strict protocols to ensure proper
                  handling, storage, and administration. We prioritize patient safety and medication
                  quality at every step of your wellness journey.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="font-serif text-5xl font-normal tracking-tight text-foreground lg:text-7xl">
              Benefits
            </h2>
            <p className="mt-6 font-sans text-lg text-foreground">Why GHK-Cu from Altara</p>
          </div>

          <motion.div
            className="flex flex-col gap-12 lg:gap-16"
            variants={containerVariants}
            initial="visible"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={cardVariants}
                className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8"
              >
                <div className="w-full min-h-[200px] sm:w-64 sm:min-w-[16rem] sm:shrink-0">
                  <div className="relative aspect-[4/3] w-full min-h-[200px] overflow-hidden rounded-2xl">
                    <Image
                      src={benefit.image}
                      alt={benefit.alt ?? benefit.title}
                      fill
                      quality={100}
                      unoptimized
                      className="object-cover sharp-image"
                      sizes="(max-width: 640px) 100vw, 20rem"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-serif text-xl font-normal text-foreground lg:text-2xl">
                    {benefit.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-black">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div
        style={{
          background:
            "radial-gradient(ellipse at center, #001a33 0%, #002d52 50%, #0a3d66 100%)",
        }}
      >
        <ProductHowItWorks />
        <QualitySection />
      </div>

      <FaqSection
        title="Frequently Asked Questions"
        subheading="Everything you need to know about GHK-Cu + Tretinoin + Niacinamide"
        items={GHK_CU_FAQS}
        answerTextClassName="text-black"
      />
    </div>
  );
}
