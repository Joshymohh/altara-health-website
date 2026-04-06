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

/** All imagery from public/products/sermorelin/ only. */
const SERMORELIN_DIR = "/products/sermorelin";

function sermorelinAsset(file: string) {
  return `${SERMORELIN_DIR}/${file}`;
}

const productImages = [
  {
    src: sermorelinAsset("sermorelin-image-1.jpg"),
    alt: "Sermorelin injection product from Altara",
  },
  {
    src: sermorelinAsset("sermorelin-image-2.jpg"),
    alt: "Sermorelin growth hormone support therapy packaging",
  },
  {
    src: sermorelinAsset("sermorelin-image-3.jpg"),
    alt: "FDA-licensed Sermorelin injection for vitality and recovery",
  },
];

const benefits = [
  {
    title: "Enhances Recovery & Repair",
    description:
      "Supports natural tissue regeneration and accelerates recovery from exercise and daily stress.",
    image: sermorelinAsset("sermorelin-benefits-1.jpg"),
    alt: "Sermorelin enhances recovery and tissue repair",
  },
  {
    title: "Improves Sleep Quality",
    description:
      "Promotes deeper, more restorative sleep patterns for better overall health and vitality.",
    image: sermorelinAsset("sermorelin-benefits-2.jpg"),
    alt: "Sermorelin improves sleep quality",
  },
  {
    title: "Supports Lean Body Composition",
    description:
      "Helps maintain healthy muscle tone while supporting efficient fat metabolism.",
    image: sermorelinAsset("sermorelin-benefits-3.jpg"),
    alt: "Sermorelin supports lean body composition",
  },
  {
    title: "Boosts Energy & Vitality",
    description:
      "Enhances natural energy production and stamina for sustained performance throughout your day.",
    image: sermorelinAsset("sermorelin-benefits-4.jpg"),
    alt: "Sermorelin boosts energy and vitality",
  },
];

const SERMORELIN_FAQS: FaqItemType[] = [
  {
    q: "What happens if I'm not approved for the treatment?",
    a: "If you are not prescribed Sermorelin therapy from our team of medical providers, you will be notified and receive a full refund for all costs incurred. This includes a cancellation of any subscription memberships you selected.",
  },
  {
    q: "What is the administration and dosage protocol?",
    a: `Altara's approach to Sermorelin administration involves a personalized dosage strategy tailored to your individual needs and health goals. Sermorelin is administered via subcutaneous injection, typically in the abdomen or thigh, usually before bedtime to align with your body's natural growth hormone release patterns. Initial dosing typically starts lower and may be adjusted based on your response and objectives. You will receive comprehensive instructions on proper self-administration technique, including injection site rotation and storage requirements, ensuring comfort and confidence. Regular follow-ups with your healthcare provider will help monitor your progress and optimize your treatment plan.

Disclaimer: Individual results may vary. Always consult with your healthcare provider before starting any new therapy to ensure it is appropriate for your condition. Follow your healthcare provider's instructions for dosage and administration. These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.`,
  },
  {
    q: "How does Sermorelin work?",
    a: "Sermorelin works by binding to specific receptors on the pituitary gland, stimulating it to naturally produce and release growth hormone. Unlike direct HGH replacement, Sermorelin supports your body's own hormone production mechanisms, working with your natural feedback systems. This stimulates pulsatile growth hormone release similar to natural patterns, which then supports tissue repair, metabolism, immune function, and overall physiological balance. Because it works through your body's own systems, Sermorelin offers a more physiologically natural approach to growth hormone optimization.",
  },
  {
    q: "What are common side effects of Sermorelin injections?",
    a: "Sermorelin is generally well-tolerated with minimal side effects. Some people may experience mild injection site reactions such as redness, swelling, or temporary discomfort. Other possible effects include temporary flushing, dizziness, or headache, particularly when first starting treatment. Rarely, individuals may notice increased hunger or changes in taste. These effects are typically mild and transient. Always consult your healthcare provider for personalized advice and to report any side effects.",
  },
  {
    q: "Is Sermorelin FDA-approved?",
    a: "Sermorelin acetate was previously FDA-approved for diagnostic purposes and pediatric growth hormone deficiency. While the original branded product was discontinued, sermorelin continues to be available through compounding pharmacies for adult hormone optimization therapy as prescribed by licensed healthcare providers who ensure proper evaluation and monitoring throughout your treatment.",
  },
  {
    q: "How long does it take to see results?",
    a: "Results vary by individual and depend on your baseline hormone levels, age, lifestyle, and treatment consistency. Many people notice improvements in sleep quality and recovery within the first 2-4 weeks. Changes in body composition, energy levels, and skin quality typically become more apparent over 3-6 months of consistent use. Sermorelin works gradually by supporting your body's natural processes, so benefits build progressively over time. Your healthcare provider will help set realistic expectations based on your specific situation.",
  },
  {
    q: "Can I take Sermorelin with other supplements or medications?",
    a: "Sermorelin can generally be combined with other supplements and many medications, but it's essential to inform your healthcare provider about all medications, supplements, and health conditions you have. Certain medications (such as corticosteroids or thyroid hormones) may interact with growth hormone pathways. Your provider will review your complete medical profile to ensure safe and effective use.",
  },
  {
    q: "How is Sermorelin different from HGH?",
    a: "Sermorelin stimulates your body to produce its own growth hormone naturally, while HGH (human growth hormone) is direct hormone replacement. Sermorelin works with your body's feedback mechanisms and natural rhythms, reducing the risk of excessive hormone levels. It also maintains your pituitary gland's ability to regulate growth hormone production, making it a more sustainable long-term approach. Additionally, Sermorelin is typically more affordable than HGH therapy.",
  },
  {
    q: "How often do I need Sermorelin injections?",
    a: "Sermorelin is typically administered daily, usually in the evening before bedtime to align with natural growth hormone release patterns during sleep. Some protocols may use 5-6 days per week with rest days. Your healthcare provider will create a personalized injection schedule based on your goals, response to treatment, and lifestyle factors.",
  },
  {
    q: "Do I need to cycle on and off Sermorelin?",
    a: "Unlike some hormone therapies, Sermorelin can be used long-term without mandatory cycling because it works by stimulating your body's natural production rather than replacing hormones directly. However, your healthcare provider may recommend periodic evaluation of your response and adjustment of your protocol. Some individuals use Sermorelin continuously for ongoing benefits, while others may take planned breaks. Your provider will determine the best approach for your individual needs.",
  },
  {
    q: "What should I expect during my first month of treatment?",
    a: "During your first month, your body is adjusting to Sermorelin therapy. You may notice improved sleep quality and depth within the first 1-2 weeks, often accompanied by more vivid dreams. Energy levels and recovery from exercise typically begin improving by week 3-4. Some people experience temporary side effects like mild injection site reactions or slight flushing, which usually resolve as your body adapts. Your provider will monitor your progress closely during this initial period and make any necessary adjustments to optimize your experience.",
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

export function SermorelinProductPage() {
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
                  alt={productImages[selectedImage]?.alt ?? "Sermorelin"}
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
                Longevity
              </p>
              <h1 className="font-serif text-4xl font-normal tracking-tight text-foreground lg:text-5xl">
                Sermorelin
              </h1>
              <p className="mt-2 font-sans text-lg text-muted-foreground">
                Natural growth hormone support for recovery, composition, and vitality.
              </p>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-foreground">From $120</span>
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
              Sermorelin injection stimulates natural growth hormone production to support recovery, lean
              body composition, and youthful vitality. Administered via subcutaneous injection, typically
              before bedtime, and prescribed by licensed providers, shipped directly to you.
            </p>

            <ul className="flex flex-col gap-2">
              {[
                "Direct from FDA-licensed manufacturer",
                "Starting at $120 per month",
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
                  What are Sermorelin injections?
                </AccordionTrigger>
                <AccordionContent className="font-sans text-sm text-black">
                  Sermorelin is a growth hormone-releasing hormone (GHRH) analog that stimulates the
                  pituitary gland to naturally produce and release human growth hormone (HGH). As a
                  bioidentical synthetic peptide consisting of the first 29 amino acids of naturally
                  occurring GHRH, Sermorelin works with your body&apos;s own mechanisms to optimize growth
                  hormone levels. Administered via subcutaneous injection, Sermorelin offers a safe and
                  effective approach to supporting healthy hormone balance, promoting tissue repair,
                  enhancing recovery, and supporting overall vitality as growth hormone levels naturally
                  decline with age.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="benefits-intro">
                <AccordionTrigger className="font-sans text-sm font-medium hover:no-underline">
                  Benefits of Sermorelin Injections
                </AccordionTrigger>
                <AccordionContent className="font-sans text-sm text-black">
                  Sermorelin injections offer comprehensive support for healthy aging and vitality by
                  naturally stimulating your body&apos;s own growth hormone production. Experience improved
                  sleep quality, enhanced muscle tone and recovery, increased energy and stamina, better body
                  composition, and accelerated tissue repair. Sermorelin supports cognitive function,
                  strengthens immune health, and promotes youthful vitality while working harmoniously with
                  your body&apos;s natural hormone rhythms for sustainable, long-term wellness benefits.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="quality">
                <AccordionTrigger className="font-sans text-sm font-medium hover:no-underline">
                  How Altara ensures quality and safety
                </AccordionTrigger>
                <AccordionContent className="font-sans text-sm text-black">
                  Altara sources Sermorelin from reputable, quality-controlled suppliers and works
                  exclusively with licensed healthcare providers. Our partner pharmacies and medical
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
              <p className="font-sans text-lg text-foreground">Why Sermorelin from Altara</p>
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
        subheading="Everything you need to know about Sermorelin"
        items={SERMORELIN_FAQS}
        answerTextClassName="text-black"
      />
    </div>
  );
}
