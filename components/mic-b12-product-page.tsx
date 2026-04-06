"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Check, Star } from "lucide-react";
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

/** All imagery from public/products/lipotropic-mic/ only. */
const MIC_B12_DIR = "/products/lipotropic-mic";

function micB12Asset(file: string) {
  return `${MIC_B12_DIR}/${file}`;
}

const productImages = [
  {
    src: micB12Asset("lipotropic-mic-image-1.jpg"),
    alt: "Lipotropic MIC plus B12 injection product from Altara",
  },
  {
    src: micB12Asset("lipotropic-mic-image-2.jpg"),
    alt: "Lipotropic MIC and B12 metabolic support packaging",
  },
  {
    src: micB12Asset("lipotropic-mic-image-3.jpg"),
    alt: "FDA-licensed Lipotropic MIC plus B12 injection",
  },
];

const benefits = [
  {
    title: "Boosts Natural Energy",
    description:
      "Enhances cellular energy production for sustained vitality and mental clarity throughout your day.",
    image: micB12Asset("lipotropic-mic-benefits-1.jpg"),
    alt: "Lipotropic MIC plus B12 boosts natural energy",
  },
  {
    title: "Supports Fat Metabolism",
    description:
      "Helps optimize the body's ability to process and utilize fats efficiently for healthy weight management.",
    image: micB12Asset("lipotropic-mic-benefits-2.jpg"),
    alt: "Lipotropic MIC plus B12 supports fat metabolism",
  },
  {
    title: "Promotes Liver Health",
    description:
      "Aids in liver detoxification and supports optimal hepatic function for whole-body wellness.",
    image: micB12Asset("lipotropic-mic-benefits-3.jpg"),
    alt: "Lipotropic MIC plus B12 promotes liver health",
  },
  {
    title: "Enhances Mental Clarity",
    description:
      "Supports cognitive function, focus, and neurological health through essential B12 nutrition.",
    image: micB12Asset("lipotropic-mic-benefits-4.jpg"),
    alt: "Lipotropic MIC plus B12 enhances mental clarity",
  },
];

const MIC_B12_FAQS: FaqItemType[] = [
  {
    q: "What happens if I'm not approved for the treatment?",
    a: "If you are not prescribed Lipotropic (MIC) + B12 therapy from our team of medical providers, you will be notified and receive a full refund for all costs incurred. This includes a cancellation of any subscription memberships you selected.",
  },
  {
    q: "What is the administration and dosage protocol?",
    a: `Altara's approach to Lipotropic (MIC) + B12 administration involves a personalized dosage strategy tailored to your individual needs and wellness goals. The medication is administered via intramuscular injection, typically in the upper arm, thigh, or buttock area. Injections are usually given 1-2 times per week, though your provider may adjust frequency based on your response, B12 levels, and objectives. You will receive comprehensive instructions on proper self-administration technique, ensuring comfort and confidence. Regular follow-ups with your healthcare provider will help monitor your progress and optimize your treatment plan.

Disclaimer: Individual results may vary. Always consult with your healthcare provider before starting any new therapy to ensure it is appropriate for your condition. Follow your healthcare provider's instructions for dosage and administration. These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.`,
  },
  {
    q: "How does Lipotropic (MIC) + B12 work?",
    a: "This combination works through complementary mechanisms. Methionine helps break down fats and supports liver detoxification. Inositol aids in fat metabolism and cellular signaling. Choline prevents fat accumulation in the liver and supports lipid transport. Vitamin B12 acts as a crucial cofactor in energy metabolism, supports DNA synthesis, aids in red blood cell formation, and maintains healthy nerve function. Together, these nutrients optimize metabolic function, enhance energy production, and support overall cellular health.",
  },
  {
    q: "What are common side effects of Lipotropic (MIC) + B12 injections?",
    a: "Lipotropic (MIC) + B12 injections are generally well-tolerated with minimal side effects. Some people may experience mild injection site reactions such as redness, swelling, or temporary discomfort. Occasionally, individuals may notice a temporary increase in energy, mild digestive changes, or increased urination frequency. The addition of B12 may cause a harmless temporary color change in urine (bright yellow). Allergic reactions are rare. Always consult your healthcare provider for personalized advice and to report any side effects.",
  },
  {
    q: "Are Lipotropic (MIC) + B12 injections FDA-approved?",
    a: "Lipotropic (MIC) + B12 injections containing these nutritional compounds are not FDA-approved as drugs for specific medical conditions. However, the individual components (methionine, inositol, choline, vitamin B12) are recognized nutrients. Vitamin B12 injections are FDA-approved for treating B12 deficiency. These combination injections are available as wellness therapy administered by licensed healthcare providers who ensure proper evaluation and monitoring throughout your treatment.",
  },
  {
    q: "How long does it take to see results?",
    a: "Results vary by individual and depend on your baseline nutrient levels, health goals, lifestyle, and consistency of treatment. Many people report increased energy levels and improved mental clarity within the first 1-2 weeks, particularly if they had underlying B12 deficiency. For metabolic and weight management benefits, noticeable changes typically occur over 4-8 weeks when combined with proper nutrition and regular exercise. Your healthcare provider will help set realistic expectations based on your specific situation.",
  },
  {
    q: "Can I take Lipotropic (MIC) + B12 with other supplements or medications?",
    a: "Lipotropic (MIC) + B12 is generally safe to combine with other supplements and most medications. However, it's essential to inform your healthcare provider about all medications, supplements, and health conditions you have. Certain medications may affect B12 absorption or metabolism, and some medical conditions may require dose adjustments to ensure safe and effective use.",
  },
  {
    q: "What's the difference between Lipo C and Lipotropic (MIC) + B12?",
    a: "Both contain the same lipotropic compounds (methionine, inositol, choline) for metabolic support. Lipotropic (MIC) + B12 adds vitamin B12, which provides additional benefits for energy production, nervous system health, red blood cell formation, and cognitive function. The B12 addition makes this formulation particularly beneficial for individuals seeking both metabolic support and enhanced energy and mental clarity.",
  },
  {
    q: "Do I need to diet or exercise while taking these injections?",
    a: "While Lipotropic (MIC) + B12 supports fat metabolism, liver function, and energy production, it works best as part of a comprehensive wellness approach. Combining these injections with balanced nutrition and regular physical activity will optimize your results. The injections are designed to complement—not replace—healthy lifestyle habits. The increased energy from B12 can help support more consistent exercise routines. Your healthcare provider can help you develop a holistic plan tailored to your goals.",
  },
  {
    q: "How often do I need Lipotropic (MIC) + B12 injections?",
    a: "Injection frequency depends on your individual goals, B12 levels, and provider recommendations. Common protocols range from 1-2 times per week for optimal metabolic and energy support. Some individuals with B12 deficiency may benefit from more frequent initial dosing. Your healthcare provider will create a personalized treatment schedule based on your response, nutrient levels, and overall health status.",
  },
  {
    q: "Can vegetarians or vegans benefit from these injections?",
    a: "Yes, vegetarians and especially vegans are at higher risk for B12 deficiency since vitamin B12 is primarily found in animal products. Lipotropic (MIC) + B12 injections can be particularly beneficial for individuals following plant-based diets, providing essential B12 that may be lacking from dietary sources along with metabolic support from the lipotropic compounds.",
  },
  {
    q: "How is the B12 in these injections different from oral B12 supplements?",
    a: "Injectable B12 offers superior bioavailability compared to oral supplements. When administered via injection, B12 bypasses the digestive system and potential absorption issues, delivering the vitamin directly into the bloodstream for immediate utilization. This is particularly important for individuals with digestive issues, certain medications, or conditions that impair B12 absorption. Injectable B12 ensures you receive the full therapeutic dose.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
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

export function MicB12ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--bone))] to-[hsl(var(--sage))]">
      <section className="mx-auto max-w-7xl px-6 py-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="w-full lg:mr-auto lg:max-w-full">
            <div className="flex gap-4 overflow-x-auto pb-1 scrollbar-hide snap-x snap-mandatory lg:hidden">
              {productImages.map((img, i) => (
                <div
                  key={img.src}
                  className="min-w-[85%] flex-shrink-0 snap-center overflow-hidden rounded-2xl bg-[hsl(var(--sage))]/30"
                >
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
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-[hsl(var(--sage))]/30">
                <Image
                  src={productImages[selectedImage]?.src ?? "/placeholder.svg"}
                  alt={productImages[selectedImage]?.alt ?? "Lipotropic MIC plus B12"}
                  fill
                  quality={100}
                  unoptimized
                  className="object-cover sharp-image"
                  priority
                  sizes="(min-width: 1024px) 50vw, 85vw"
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                {productImages.map((img, i) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => setSelectedImage(i)}
                    className={`relative h-20 w-20 overflow-hidden rounded-xl border-2 transition-all ${
                      selectedImage === i
                        ? "border-primary"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                    aria-label={`View product image ${i + 1}`}
                  >
                    <Image
                      src={img.src}
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

          <div className="flex flex-col gap-6">
            <div>
              <p className="mb-2 inline-block rounded bg-[hsl(var(--sage))]/40 px-3 py-1 text-xs font-medium uppercase tracking-wider text-foreground/60">
                Metabolic
              </p>
              <h1 className="font-serif text-4xl font-normal tracking-tight text-foreground lg:text-5xl">
                Lipotropic (MIC) + B12
              </h1>
              <p className="mt-2 font-sans text-lg text-muted-foreground">
                Lipotropic support with B12 for metabolism, energy, and clarity.
              </p>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-foreground">From $99.50</span>
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

            <p className="font-sans text-sm leading-relaxed text-foreground">
              Now available through a{" "}
              <strong className="text-foreground">U.S.-based, FDA-licensed drug manufacturer</strong>, our
              Lipotropic (MIC) + B12 injection combines methionine, inositol, choline, and vitamin B12 to
              support fat metabolism, energy production, and mental clarity. Administered via intramuscular
              injection and prescribed by licensed providers, shipped directly to you.
            </p>

            <ul className="flex flex-col gap-2">
              {[
                "Direct from FDA-licensed manufacturer",
                "Starting at $99.50 per month",
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
                  What are Lipotropic (MIC) + B12 injections?
                </AccordionTrigger>
                <AccordionContent className="font-sans text-sm text-black">
                  Lipotropic (MIC) + B12 injections combine powerful lipotropic compounds—methionine,
                  inositol, and choline—with vitamin B12 to provide comprehensive metabolic and energy
                  support. The lipotropic agents work synergistically to support fat metabolism and liver
                  function, while vitamin B12 enhances cellular energy production, supports nervous system
                  health, and promotes red blood cell formation. This combination delivers superior
                  absorption through direct injection, offering immediate support for metabolic function,
                  sustained energy, and overall vitality.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="benefits-intro">
                <AccordionTrigger className="font-sans text-sm font-medium hover:no-underline">
                  Benefits of Lipotropic (MIC) + B12 Injections
                </AccordionTrigger>
                <AccordionContent className="font-sans text-sm text-black">
                  Lipotropic (MIC) + B12 injections offer comprehensive support for metabolism, energy, and
                  overall wellness. Experience enhanced fat metabolism, increased energy levels, improved
                  mental clarity, liver detoxification support, and metabolic optimization. The addition of
                  vitamin B12 provides crucial support for red blood cell production, neurological function,
                  and cellular energy, while the lipotropic compounds help the body efficiently process fats
                  and support healthy weight management when combined with proper nutrition and exercise.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="quality">
                <AccordionTrigger className="font-sans text-sm font-medium hover:no-underline">
                  How Altara ensures quality and safety
                </AccordionTrigger>
                <AccordionContent className="font-sans text-sm text-black">
                  Altara sources Lipotropic (MIC) + B12 from reputable, quality-controlled suppliers and
                  works exclusively with licensed healthcare providers. Our partner pharmacies and medical
                  professionals follow strict protocols to ensure proper handling, storage, and administration.
                  We prioritize patient safety and medication quality at every step of your wellness journey.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="font-serif text-6xl font-normal tracking-tight text-foreground lg:text-8xl">
              Benefits
            </h2>
            <div className="mt-8">
              <p className="font-sans text-lg text-foreground">
                Why Lipotropic (MIC) + B12 from Altara
              </p>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                <ArrowRight className="h-4 w-4" />
                Get started
              </a>
            </div>
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
                <div className="relative aspect-[4/3] w-full min-h-[200px] overflow-hidden rounded-2xl bg-muted sm:w-64 sm:min-w-[16rem] sm:shrink-0">
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
                <div className="flex flex-col gap-2">
                  <h3 className="font-serif text-xl font-normal text-foreground lg:text-2xl">
                    {benefit.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-black">{benefit.description}</p>
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
        subheading="Everything you need to know about Lipotropic (MIC) + B12"
        items={MIC_B12_FAQS}
        answerTextClassName="text-black"
      />
    </div>
  );
}
