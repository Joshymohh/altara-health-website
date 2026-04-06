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
    src: "/products/glutathione/glutathione-image-1.jpg",
    alt: "Glutathione injection product from Altara",
  },
  {
    src: "/products/glutathione/glutathione-image-2.jpg",
    alt: "Glutathione antioxidant therapy packaging",
  },
  {
    src: "/products/glutathione/glutathione-image-3.jpg",
    alt: "Glutathione cellular protection and detox support therapy",
  },
];

const benefits = [
  {
    title: "Supports Radiant Skin",
    description:
      "Promotes even tone, luminous complexion, and youthful glow from the cellular level.",
    image: "/products/glutathione/glutathione-benefits-1.jpg",
    alt: "Glutathione supports radiant skin and glow",
  },
  {
    title: "Enhances Detoxification",
    description:
      "Helps your body eliminate toxins naturally, supporting liver function and cellular health.",
    image: "/products/glutathione/glutathione-benefits-2.jpg",
    alt: "Glutathione supports detoxification and liver health",
  },
  {
    title: "Strengthens Immune Defense",
    description:
      "Bolsters your body's natural defenses against oxidative stress and environmental challenges.",
    image: "/products/glutathione/glutathione-benefits-3.jpg",
    alt: "Glutathione strengthens immune defense",
  },
  {
    title: "Protects Cellular Health",
    description:
      "Neutralizes free radicals and supports DNA repair for long-term vitality and resilience.",
    image: "/products/glutathione/glutathione-benefits-4.jpg",
    alt: "Glutathione protects cellular health and resilience",
  },
];

const GLUTATHIONE_FAQS: FaqItemType[] = [
  {
    q: "What happens if I'm not approved for the medication?",
    a: "If you are not prescribed glutathione therapy from our team of medical providers, you will be notified and receive a full refund for all costs incurred. This includes a cancellation of any subscription memberships you selected.",
  },
  {
    q: "What is the administration and dosage protocol?",
    a: `Altara's approach to glutathione administration involves a personalized dosage strategy tailored to your individual needs. Glutathione is administered via injection, typically intramuscularly or intravenously, depending on your health goals and provider recommendation. You will receive comprehensive instructions on proper administration technique if self-administering, ensuring comfort and confidence. Regular follow-ups with your healthcare provider will help monitor your progress and adjust the dosage as needed to optimize your results.

Disclaimer: Individual results may vary. Always consult with your healthcare provider before starting any new therapy to ensure it is appropriate for your condition. Follow your healthcare provider's instructions for dosage and administration. These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.`,
  },
  {
    q: "How does glutathione work?",
    a: "Glutathione works as the body's master antioxidant by neutralizing harmful free radicals and reactive oxygen species. It supports Phase II detoxification in the liver, helps regenerate other antioxidants like vitamins C and E, and plays a crucial role in immune function and cellular repair processes.",
  },
  {
    q: "What are common side effects of glutathione injections?",
    a: "Glutathione injections are generally well-tolerated with minimal side effects. Some people may experience mild injection site reactions such as redness, swelling, or temporary discomfort. Rare allergic reactions can occur. Always consult your healthcare provider for personalized advice and to report any side effects.",
  },
  {
    q: "Is glutathione FDA-approved?",
    a: "Glutathione itself is not FDA-approved as a drug for specific medical conditions. However, it is available as a prescription therapy administered by licensed healthcare providers. Our medical team ensures proper evaluation and monitoring throughout your treatment.",
  },
  {
    q: "How long does it take to see results?",
    a: "Results vary by individual and depend on your health goals. Some people notice improvements in energy and skin radiance within 2-4 weeks, while deeper cellular benefits may develop over 2-3 months of consistent use. Your healthcare provider will help set realistic expectations based on your specific situation.",
  },
  {
    q: "Can I take glutathione with other supplements or medications?",
    a: "Glutathione is generally safe to combine with other supplements, but it's important to inform your healthcare provider about all medications and supplements you're taking. Certain medications may interact with glutathione therapy, so professional guidance ensures safe and effective use.",
  },
  {
    q: "What is the difference between oral and injectable glutathione?",
    a: "Injectable glutathione offers significantly higher bioavailability, meaning more of the active ingredient reaches your bloodstream and cells. Oral glutathione must pass through the digestive system, which can reduce absorption substantially. Injectable administration delivers glutathione directly where your body needs it most, making it the preferred method for therapeutic benefits.",
  },
  {
    q: "How often do I need glutathione injections?",
    a: "Injection frequency depends on your individual health goals and provider recommendations. Common protocols range from 1-3 times per week initially, with maintenance schedules adjusted based on your response and desired outcomes. Your healthcare provider will create a personalized treatment plan for you.",
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

export function GlutathioneProductPage() {
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
                Longevity
              </p>
              <h1 className="font-serif text-4xl font-normal tracking-tight text-foreground lg:text-5xl">
                Glutathione
              </h1>
              <p className="mt-2 font-sans text-lg text-muted-foreground">
                Master antioxidant support for detoxification, cellular protection, and radiant skin.
              </p>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-foreground">From $75</span>
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
              , our Glutathione injection delivers the body's master antioxidant directly to support
              detoxification, radiant skin, and cellular protection. Administered via intramuscular
              or intravenous injection and prescribed by licensed providers, shipped directly to you.
            </p>

            <ul className="flex flex-col gap-2">
              {[
                "Direct from FDA-licensed manufacturer",
                "Starting at $75 per month",
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
                  What are glutathione injections?
                </AccordionTrigger>
                <AccordionContent className="font-sans text-sm text-muted-foreground">
                  Glutathione injections are a form of antioxidant therapy where glutathione, a
                  powerful antioxidant made up of three amino acids (cysteine, glycine, and
                  glutamine), is administered directly into the body. These injections help protect
                  cells from damage caused by free radicals, support the immune system, and aid in
                  detoxification processes. By delivering glutathione directly into the bloodstream,
                  injections offer superior bioavailability compared to oral supplementation, allowing
                  your body to utilize this master antioxidant more effectively.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="benefits">
                <AccordionTrigger className="font-sans text-sm font-medium hover:no-underline">
                  Benefits of Glutathione Injections
                </AccordionTrigger>
                <AccordionContent className="font-sans text-sm text-muted-foreground">
                  Glutathione injections offer comprehensive antioxidant support for whole-body
                  wellness. Experience enhanced detoxification, improved skin radiance, strengthened
                  immune function, and cellular protection. This master antioxidant supports liver
                  health, reduces oxidative stress, and promotes youthful vitality while helping your
                  body defend against environmental toxins and free radical damage.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="quality">
                <AccordionTrigger className="font-sans text-sm font-medium hover:no-underline">
                  How Altara ensures quality and safety
                </AccordionTrigger>
                <AccordionContent className="font-sans text-sm text-muted-foreground">
                  Altara sources glutathione from reputable, quality-controlled suppliers and works
                  exclusively with licensed healthcare providers. Our partner pharmacies and medical
                  professionals follow strict protocols to ensure proper handling, storage, and
                  administration. We prioritize patient safety and medication quality at every step of
                  your wellness journey.
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
            <p className="mt-6 font-sans text-lg text-foreground">Why Glutathione from Altara</p>
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
        subheading="Everything you need to know about Glutathione"
        items={GLUTATHIONE_FAQS}
        answerTextClassName="text-black"
      />
    </div>
  );
}
