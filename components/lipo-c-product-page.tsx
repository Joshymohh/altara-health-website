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

/** Assets live in public/products/lipo-c/ (lowercase; case-sensitive on deploy). */
const LIPO_C_DIR = "/products/lipo-c";

function lipoCAsset(file: string) {
  return `${LIPO_C_DIR}/${file}`;
}

const productImages = [
  {
    src: lipoCAsset("lipo-c-image-1.jpg"),
    alt: "Lipo C lipotropic injection product from Altara",
  },
  {
    src: lipoCAsset("lipo-c-image-2.jpg"),
    alt: "Lipo C methionine inositol choline therapy packaging",
  },
  {
    src: lipoCAsset("lipo-c-image-3.jpg"),
    alt: "FDA-licensed Lipo C injection for metabolic support",
  },
];

const benefits = [
  {
    title: "Boosts Energy Naturally",
    description:
      "Helps optimize nutrient utilization and cellular function for sustained vitality throughout your day.",
    image: lipoCAsset("lipo-c-benefits-1.jpg"),
    alt: "Lipo C supports natural energy and vitality",
  },
  {
    title: "Enhances Fat Metabolism",
    description:
      "Supports your body's natural ability to process and transport fats efficiently for optimal metabolic function.",
    image: lipoCAsset("lipo-c-benefits-2.jpg"),
    alt: "Lipo C enhances fat metabolism",
  },
  {
    title: "Promotes Metabolic Balance",
    description:
      "Combines essential lipotropic nutrients to support healthy metabolism and overall well-being.",
    image: lipoCAsset("lipo-c-benefits-3.jpg"),
    alt: "Lipo C promotes metabolic balance",
  },
  {
    title: "Supports Liver Health",
    description:
      "Aids in liver detoxification and promotes healthy hepatic fat metabolism for whole-body wellness.",
    image: lipoCAsset("lipo-c-benefits-4.jpg"),
    alt: "Lipo C supports liver health",
  },
];

const LIPO_C_FAQS: FaqItemType[] = [
  {
    q: "What happens if I'm not approved for the treatment?",
    a: "If you are not prescribed Lipo C therapy from our team of medical providers, you will be notified and receive a full refund for all costs incurred. This includes a cancellation of any subscription memberships you selected.",
  },
  {
    q: "What is the administration and dosage protocol?",
    a: `Altara's approach to Lipo C administration involves a personalized dosage strategy tailored to your individual needs and wellness goals. Lipo C is administered via intramuscular injection, typically in the upper arm, thigh, or buttock area. Injections are usually given 1-2 times per week, though your provider may adjust frequency based on your response and objectives. You will receive comprehensive instructions on proper self-administration technique, ensuring comfort and confidence. Regular follow-ups with your healthcare provider will help monitor your progress and optimize your treatment plan.

Disclaimer: Individual results may vary. Always consult with your healthcare provider before starting any new therapy to ensure it is appropriate for your condition. Follow your healthcare provider's instructions for dosage and administration. These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.`,
  },
  {
    q: "How does Lipo C work?",
    a: "Lipo C works through the combined action of three lipotropic compounds. Methionine is an essential amino acid that helps break down fats and supports liver detoxification. Inositol aids in fat metabolism and helps maintain healthy cell membranes. Choline supports fat transport from the liver and plays a crucial role in lipid metabolism. Together, these nutrients help optimize your body's ability to process fats, support liver function, and maintain metabolic balance.",
  },
  {
    q: "What are the common side effects of Lipo C injections?",
    a: "Lipo C injections are generally well-tolerated with minimal side effects. Some people may experience mild injection site reactions such as redness, swelling, or temporary discomfort. Occasionally, individuals may notice mild digestive changes or a temporary increase in energy and urination frequency. Allergic reactions are rare. Always consult your healthcare provider for personalized advice and to report any side effects.",
  },
  {
    q: "Is Lipo C FDA-approved?",
    a: "Lipo C injections containing lipotropic compounds (methionine, inositol, choline) are not FDA-approved as drugs for specific medical conditions. However, these are recognized nutrients that support metabolic function. These injections are available as a wellness therapy administered by licensed healthcare providers who ensure proper evaluation and monitoring throughout your treatment.",
  },
  {
    q: "How long does it take to see results?",
    a: "Results vary by individual and depend on your health goals, lifestyle, and consistency of treatment. Many people report increased energy levels and improved sense of well-being within the first 1-2 weeks of treatment. For metabolic and weight management benefits, noticeable changes typically occur over 4-8 weeks when combined with proper nutrition and regular exercise. Your healthcare provider will help set realistic expectations based on your specific situation.",
  },
  {
    q: "Can I take Lipo C with other supplements or medications?",
    a: "Lipo C is generally safe to combine with other supplements and most medications. However, it's essential to inform your healthcare provider about all medications, supplements, and health conditions you have. Certain medical conditions or medications may require dose adjustments or special considerations to ensure safe and effective use.",
  },
  {
    q: "Do I need to diet or exercise while taking Lipo C?",
    a: "While Lipo C supports fat metabolism and liver function, it works best as part of a comprehensive wellness approach. Combining Lipo C injections with balanced nutrition and regular physical activity will optimize your results. Lipo C is designed to complement—not replace—healthy lifestyle habits. Your healthcare provider can help you develop a holistic plan that includes dietary guidance and exercise recommendations tailored to your goals.",
  },
  {
    q: "How often do I need Lipo C injections?",
    a: "Injection frequency depends on your individual goals and provider recommendations. Common protocols range from 1-2 times per week, with some programs recommending weekly injections for maintenance. Your healthcare provider will create a personalized treatment schedule based on your response, goals, and overall health status.",
  },
  {
    q: "What makes the combination of methionine, inositol, and choline effective?",
    a: "These three lipotropic compounds work synergistically to support metabolic function. Methionine helps initiate fat breakdown, inositol aids in fat transport and cellular signaling, and choline prevents fat accumulation in the liver while supporting fat metabolism. Together, they create a comprehensive approach to metabolic support that addresses multiple pathways involved in healthy fat processing and energy production.",
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

export function LipoCProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--bone))] to-[hsl(var(--sage))]">
      {/* Product showcase — layout matches components/product-hero.tsx (Tirzepatide) */}
      <section className="mx-auto max-w-7xl px-6 py-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left: gallery (mobile swipe / desktop main + thumbnails) */}
          <div className="lg:mr-auto lg:max-w-full w-full">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide lg:hidden pb-1">
              {productImages.map((img, i) => (
                <div
                  key={img.src}
                  className="min-w-[85%] snap-center overflow-hidden rounded-2xl bg-[hsl(var(--sage))]/30 flex-shrink-0"
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

            <div className="hidden lg:block">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-[hsl(var(--sage))]/30">
                <Image
                  src={productImages[selectedImage]?.src || "/placeholder.svg"}
                  alt={productImages[selectedImage]?.alt ?? "Lipo C"}
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

          {/* Right: details + accordions */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="mb-2 inline-block rounded bg-[hsl(var(--sage))]/40 px-3 py-1 text-xs font-medium uppercase tracking-wider text-foreground/60">
                Metabolic
              </p>
              <h1 className="font-serif text-4xl font-normal tracking-tight text-foreground lg:text-5xl">
                Lipo C
              </h1>
              <p className="mt-2 font-sans text-lg text-muted-foreground">
                Lipotropic support for fat metabolism, liver health, and natural energy.
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
              <strong className="text-foreground">U.S.-based, FDA-licensed drug manufacturer</strong>
              , our Lipo C injection combines methionine, inositol, and choline to support fat metabolism,
              liver health, and natural energy. Administered via intramuscular injection and prescribed by
              licensed providers, shipped directly to you.
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
                  What are Lipo C injections?
                </AccordionTrigger>
                <AccordionContent className="font-sans text-sm text-black">
                  Lipo C is a lipotropic injection containing methionine, inositol, and choline—three
                  essential nutrients that work synergistically to support fat metabolism, liver function,
                  and cellular health. These lipotropic compounds help the body efficiently process and
                  transport fats, support healthy liver function, and promote optimal metabolic
                  performance. By delivering these nutrients directly through injection, Lipo C offers
                  superior absorption and immediate metabolic support for your wellness goals.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="benefits-intro">
                <AccordionTrigger className="font-sans text-sm font-medium hover:no-underline">
                  Benefits of Lipo C Injections
                </AccordionTrigger>
                <AccordionContent className="font-sans text-sm text-black">
                  Lipo C injections offer comprehensive metabolic support through the synergistic action of
                  methionine, inositol, and choline. Experience enhanced fat metabolism, improved liver
                  function, increased energy levels, and metabolic optimization. These lipotropic agents
                  help support healthy weight management efforts when combined with proper nutrition and
                  exercise, while promoting efficient nutrient processing and overall metabolic wellness.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="quality">
                <AccordionTrigger className="font-sans text-sm font-medium hover:no-underline">
                  How Altara ensures quality and safety
                </AccordionTrigger>
                <AccordionContent className="font-sans text-sm text-black">
                  Altara sources Lipo C from reputable, quality-controlled suppliers and works exclusively
                  with licensed healthcare providers. Our partner pharmacies and medical professionals follow
                  strict protocols to ensure proper handling, storage, and administration. We prioritize
                  patient safety and medication quality at every step of your wellness journey.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Benefits — layout matches components/benefits-section.tsx (Tirzepatide) */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="font-serif text-6xl font-normal tracking-tight text-foreground lg:text-8xl">
              Benefits
            </h2>
            <div className="mt-8">
              <p className="font-sans text-lg text-foreground">Why Lipo C from Altara</p>
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
                    src={benefit.image || "/placeholder.svg"}
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
        subheading="Everything you need to know about Lipo C"
        items={LIPO_C_FAQS}
        answerTextClassName="text-black"
      />
    </div>
  );
}
