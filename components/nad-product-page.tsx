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
    src: "/products/nad/nad-image-1.jpg",
    alt: "NAD+ injection product from Altara Health",
  },
  {
    src: "/products/nad/nad-image-2.jpg",
    alt: "NAD+ coenzyme therapy packaging",
  },
  {
    src: "/products/nad/nad-image-3.jpg",
    alt: "FDA-licensed NAD+ injection for cellular energy and healthy aging",
  },
];

const benefits = [
  {
    title: "Supports Healthy Aging",
    description:
      "Promotes cellular longevity, DNA repair, and youthful vitality from within.",
    image: "/products/nad/nad-benefit-1.jpg",
    alt: "NAD+ supports healthy aging and cellular longevity",
  },
  {
    title: "Sharpens Mental Clarity",
    description:
      "Enhances cognitive function, focus, and neurological health at the cellular level.",
    image: "/products/nad/nad-benefit-2.jpg",
    alt: "NAD+ sharpens mental clarity and cognitive function",
  },
  {
    title: "All Day Energy",
    description:
      "Fuels mitochondrial function for sustained stamina without caffeine or stimulants.",
    image: "/products/nad/nad-benefit-3.jpg",
    alt: "NAD+ supports all-day energy via mitochondrial function",
  },
  {
    title: "Supports Cellular Repair",
    description:
      "Aids in DNA maintenance and cellular regeneration for resilience and recovery.",
    image: "/products/nad/nad-benefit-4.jpg",
    alt: "NAD+ supports cellular repair and DNA maintenance",
  },
];

const NAD_FAQS: FaqItemType[] = [
  {
    q: "What happens if I'm not approved for the treatment?",
    a: "If you are not prescribed NAD+ therapy from our team of medical providers, you will be notified and receive a full refund for all costs incurred. This includes a cancellation of any subscription memberships you selected.",
  },
  {
    q: "What is the administration and dosage protocol?",
    a: `Altara's approach to NAD+ administration involves a personalized dosage strategy tailored to your individual needs and wellness goals. NAD+ can be administered via intramuscular injection or subcutaneous injection, depending on your provider's recommendation and your tolerance. Injection frequency typically ranges from 1-3 times per week based on your objectives and response. You will receive comprehensive instructions on proper self-administration technique, ensuring comfort and confidence. Regular follow-ups with your healthcare provider will help monitor your progress and optimize your treatment plan.

Disclaimer: Individual results may vary. Always consult with your healthcare provider before starting any new therapy to ensure it is appropriate for your condition. Follow your healthcare provider's instructions for dosage and administration. These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.`,
  },
  {
    q: "How does NAD+ work?",
    a: "NAD+ works as a critical coenzyme in hundreds of metabolic processes throughout your body. It serves as a key electron carrier in cellular respiration, enabling mitochondria to produce ATP (cellular energy). NAD+ activates sirtuins—proteins that regulate cellular health, DNA repair, and longevity. It supports enzymes involved in DNA damage repair, helps maintain healthy circadian rhythms, and plays essential roles in neurotransmitter synthesis and neurological function. By restoring NAD+ levels, you support optimal cellular metabolism, energy production, and the body's natural repair mechanisms.",
  },
  {
    q: "What are common side effects of NAD+ injections?",
    a: "NAD+ injections are generally well-tolerated. Some people may experience mild injection site reactions such as redness, swelling, or temporary discomfort. During or shortly after injection, some individuals notice temporary flushing, warmth, or mild nausea—these effects typically resolve quickly. Rarely, people may experience temporary headache or fatigue as the body adjusts to increased NAD+ levels. Starting with lower doses and gradually increasing can minimize these adjustment effects. Always consult your healthcare provider for personalized advice and to report any side effects.",
  },
  {
    q: "Is NAD+ FDA-approved?",
    a: "NAD+ injections are not FDA-approved as a drug for specific medical conditions. However, NAD+ is a naturally occurring coenzyme essential for human life and has been extensively studied in scientific research. NAD+ therapy is available through licensed healthcare providers who ensure proper evaluation and monitoring throughout your treatment.",
  },
  {
    q: "How long does it take to see results?",
    a: "Results vary by individual and depend on your baseline NAD+ levels, age, lifestyle, and treatment consistency. Many people report increased energy and improved mental clarity within the first 1-2 weeks of treatment. More significant improvements in stamina, sleep quality, recovery, and overall vitality typically develop over 4-8 weeks of consistent use. Cellular repair and anti-aging benefits accumulate progressively over months. Your healthcare provider will help set realistic expectations based on your specific situation.",
  },
  {
    q: "Can I take NAD+ with other supplements or medications?",
    a: "NAD+ can generally be combined with other supplements and most medications. However, it's essential to inform your healthcare provider about all medications, supplements, and health conditions you have. NAD+ may enhance the effects of certain supplements (like resveratrol or other sirtuin activators). Individuals taking blood thinners or medications affecting cellular metabolism should discuss potential interactions with their provider.",
  },
  {
    q: "What is the difference between NAD+ injections and oral NAD+ supplements?",
    a: "NAD+ injections offer dramatically superior bioavailability compared to oral NAD+ supplements. When taken orally, NAD+ is largely broken down in the digestive system before reaching cells. Injectable NAD+ bypasses digestion entirely, delivering the coenzyme directly into your bloodstream for immediate cellular uptake. This results in significantly higher NAD+ levels and more pronounced benefits. While oral NAD+ precursors (like NMN or NR) can help, injections provide the most direct and effective delivery method.",
  },
  {
    q: "How often do I need NAD+ injections?",
    a: "Injection frequency depends on your individual goals and provider recommendations. Common protocols range from 1-2 times per week for maintenance and general wellness to 3 times weekly for more intensive cellular support and anti-aging benefits. Some individuals use NAD+ continuously, while others cycle it strategically around periods of high stress or recovery needs. Your healthcare provider will create a personalized schedule based on your objectives and response.",
  },
  {
    q: "Can NAD+ help with recovery from illness or fatigue?",
    a: "Yes, NAD+ plays a crucial role in cellular recovery and energy restoration. Many people use NAD+ therapy to support recovery from chronic fatigue, post-viral syndromes, or periods of high stress. NAD+ supports mitochondrial function, which is often compromised during illness or chronic stress. By restoring cellular energy production and supporting repair mechanisms, NAD+ can help accelerate recovery and restore vitality. However, NAD+ should complement—not replace—appropriate medical care for underlying conditions.",
  },
  {
    q: "Is NAD+ safe for long-term use?",
    a: "Based on current research and clinical experience, NAD+ appears safe for long-term use when administered under medical supervision. As a naturally occurring molecule essential for life, NAD+ supplementation supports physiological processes rather than introducing foreign substances. Long-term studies on NAD+ precursors show favorable safety profiles. However, ongoing monitoring by a healthcare provider ensures optimal dosing and response over time.",
  },
  {
    q: "What is the difference between NAD+ and NAD+ precursors (NMN, NR)?",
    a: "NAD+ is the active coenzyme itself, while NMN (nicotinamide mononucleotide) and NR (nicotinamide riboside) are precursors that the body converts into NAD+. Injectable NAD+ provides the end molecule directly for immediate use, bypassing conversion steps. NAD+ precursors taken orally must first be converted to NAD+ within cells—a process that becomes less efficient with age. Direct NAD+ injection offers the most immediate and reliable increase in cellular NAD+ levels, particularly beneficial when rapid restoration is desired.",
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

export function NadProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--bone))] to-[hsl(var(--sage))]">
      <section className="mx-auto max-w-7xl px-6 py-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Images */}
          <div>
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide lg:hidden">
              {productImages.map((img, i) => (
                <div
                  key={i}
                  className="min-w-[85%] snap-center overflow-hidden rounded-2xl flex-shrink-0"
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

          {/* Details */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="mb-2 inline-block rounded bg-[hsl(var(--sage))]/40 px-3 py-1 text-xs font-medium uppercase tracking-wider text-foreground/60">
                Longevity
              </p>
              <h1 className="font-serif text-4xl font-normal tracking-tight text-foreground lg:text-5xl">
                NAD+ Injection
              </h1>
              <p className="mt-2 font-sans text-lg text-muted-foreground">
                Cellular energy, cognitive support, and healthy aging—delivered to your door.
              </p>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-foreground">From $135</span>
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
              , our NAD+ injection delivers this essential coenzyme directly to support cellular
              energy, cognitive function, and healthy aging. Administered via intramuscular or
              subcutaneous injection and prescribed by licensed providers, shipped directly to you.
            </p>

            <ul className="flex flex-col gap-2">
              {[
                "Direct from FDA-licensed manufacturer",
                "Starting at $135 per month",
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
                  What are NAD+ injections?
                </AccordionTrigger>
                <AccordionContent className="font-sans text-sm text-muted-foreground">
                  NAD+ (nicotinamide adenine dinucleotide) is a critical coenzyme found in every cell
                  of your body, essential for energy production, DNA repair, and cellular function.
                  NAD+ levels naturally decline with age, contributing to fatigue, cognitive decline,
                  and cellular aging. NAD+ injections deliver this vital molecule directly into your
                  system, bypassing digestive limitations for superior absorption and immediate
                  cellular availability. By restoring optimal NAD+ levels, these injections support
                  mitochondrial function, enhance cellular energy production, promote DNA repair
                  mechanisms, and provide comprehensive anti-aging benefits at the cellular level.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="benefits">
                <AccordionTrigger className="font-sans text-sm font-medium hover:no-underline">
                  Benefits of NAD+ Injections
                </AccordionTrigger>
                <AccordionContent className="font-sans text-sm text-muted-foreground">
                  NAD+ injections offer powerful support for cellular energy, cognitive function, and
                  healthy aging. Experience enhanced mental clarity and focus, increased physical
                  energy and stamina, improved metabolic function, better sleep quality, and
                  accelerated recovery from exercise and stress. NAD+ supports DNA repair and cellular
                  regeneration, promotes healthy inflammatory responses, enhances mitochondrial
                  efficiency, and provides neuroprotective benefits. This essential coenzyme helps
                  combat age-related cellular decline while supporting optimal brain function,
                  physical vitality, and overall longevity.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="quality">
                <AccordionTrigger className="font-sans text-sm font-medium hover:no-underline">
                  How Altara ensures quality and safety
                </AccordionTrigger>
                <AccordionContent className="font-sans text-sm text-muted-foreground">
                  Altara sources NAD+ from reputable, quality-controlled, FDA-licensed drug
                  manufacturers and works exclusively with licensed healthcare providers. Our partner
                  pharmacies and medical professionals follow strict protocols to ensure proper
                  handling, storage, and administration. We prioritize patient safety and medication
                  quality at every step of your wellness journey.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="font-serif text-5xl font-normal tracking-tight text-foreground lg:text-7xl">
              Benefits
            </h2>
            <p className="mt-6 font-sans text-lg text-foreground">Why NAD+ from Altara</p>
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
                  <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it works + quality */}
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
        subheading="Everything you need to know about NAD+"
        items={NAD_FAQS}
        answerTextClassName="text-black"
      />
    </div>
  );
}
