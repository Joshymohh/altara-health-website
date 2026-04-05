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
    src: "/products/semaglutide/semaglutide-image-1.jpg",
    alt: "Compounded Semaglutide injection product from Altara",
  },
  {
    src: "/products/semaglutide/semaglutide-image-2.jpg",
    alt: "Semaglutide weight management treatment packaging",
  },
  {
    src: "/products/semaglutide/semaglutide-image-3.jpg",
    alt: "FDA-licensed compounded Semaglutide for metabolic health",
  },
];

const benefits = [
  {
    title: "Supports Significant Weight Loss",
    description:
      "Powerful appetite suppression and metabolic support for meaningful, sustainable weight reduction.",
    image: "/products/semaglutide/semaglutide-benefit-1.jpg",
    alt: "Semaglutide supports significant weight loss",
  },
  {
    title: "Improves Blood Sugar Control",
    description:
      "Enhances insulin sensitivity and helps maintain healthy blood glucose levels naturally.",
    image: "/products/semaglutide/semaglutide-benefit-2.jpg",
    alt: "Semaglutide improves blood sugar control",
  },
  {
    title: "Reduces Cravings & Hunger",
    description:
      "Quiets persistent food thoughts and cravings, making healthy eating feel effortless.",
    image: "/products/semaglutide/semaglutide-benefit-3.jpg",
    alt: "Semaglutide reduces cravings and hunger",
  },
  {
    title: "Enhances Metabolic Health",
    description:
      "Supports comprehensive metabolic function including cardiovascular health markers and overall well-being.",
    image: "/products/semaglutide/semaglutide-benefit-4.jpg",
    alt: "Semaglutide enhances metabolic health",
  },
];

const planPricing = [
  { plan: "6 Month", perMonth: "$120" },
  { plan: "3 Month", perMonth: "$125" },
  { plan: "Monthly", perMonth: "$145" },
  { plan: "3 Month Starter Pack", perMonth: "$96" },
];

const SEMAGLUTIDE_FAQS: FaqItemType[] = [
  {
    q: "What happens if I'm not approved for the medication?",
    a: "If you are not prescribed the desired medication from our team of medical providers, you will be notified and receive a full refund for all costs incurred. This includes a cancellation of any subscription memberships you selected.",
  },
  {
    q: "What is the administration and dosage protocol?",
    a: `Altara's approach to semaglutide administration involves a personalized dosage strategy that starts at a lower dose and gradually increases based on your body's response to minimize side effects. Semaglutide is administered via subcutaneous injection once weekly, typically in the abdomen, thigh, or upper arm. The gradual dose escalation allows your body to adapt while optimizing effectiveness. You will receive comprehensive instructions on how to self-administer the medication, including proper injection technique, site rotation, and storage requirements, ensuring comfort and confidence. Regular follow-ups with your healthcare provider will help monitor your progress and adjust the dosage as needed to optimize your results and minimize side effects.

Disclaimer: Individual results may vary. Always consult with your healthcare provider before starting any new medication to ensure it is appropriate for your condition. Follow your healthcare provider's instructions for dosage and administration. These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Not approved by the FDA for safety or efficacy. Prescription required.`,
  },
  {
    q: "How does semaglutide work?",
    a: "Semaglutide works by mimicking GLP-1, a naturally occurring hormone that regulates appetite and blood sugar. It activates GLP-1 receptors in multiple areas including the brain (reducing appetite and cravings), pancreas (enhancing insulin secretion when needed), and digestive system (slowing gastric emptying to promote satiety). This multi-pathway approach creates powerful appetite suppression, improved blood sugar regulation, and reduced caloric intake, supporting significant weight loss when combined with lifestyle modifications.",
  },
  {
    q: "Are there alternatives to compounded semaglutide?",
    a: "Yes, FDA-approved versions of semaglutide—such as Ozempic® (for type 2 diabetes) and Wegovy® (for weight management)—should be considered as alternative options. These branded medications are manufactured by Novo Nordisk and have undergone extensive FDA review for safety and efficacy.",
  },
  {
    q: "What are common side effects of semaglutide?",
    a: "Common side effects of semaglutide include nausea, vomiting, diarrhea, constipation, abdominal pain, decreased appetite, injection site reactions (such as redness, swelling, or pain), fatigue, and gastrointestinal issues like heartburn, gas, and bloating. These effects are typically most pronounced when starting treatment or increasing dosage and often decrease over time. Serious side effects, although less common, can include thyroid tumors, pancreatitis, gallbladder problems, and severe allergic reactions. Always consult your healthcare provider for personalized advice and to report any side effects.",
  },
  {
    q: "Is compounded semaglutide FDA-approved?",
    a: "Compounded semaglutide is not approved nor evaluated for safety, effectiveness, or quality by the FDA. Brand-name medications such as Ozempic® (semaglutide) and Wegovy® (semaglutide) are FDA-approved and not compounded. Compounded versions of semaglutide are not affiliated with, endorsed by, approved by, or intended to replace the FDA-approved products manufactured by Novo Nordisk.",
  },
  {
    q: "How much weight can I lose on semaglutide?",
    a: "Clinical trials of semaglutide for weight management have shown average weight loss of 15-20% of body weight over 68-72 weeks when combined with lifestyle interventions including reduced-calorie diet and increased physical activity. Individual results vary based on starting weight, adherence to treatment, lifestyle modifications, and metabolic factors. Your healthcare provider will help set realistic, personalized weight loss goals based on your individual circumstances.",
  },
  {
    q: "Can I start on a higher dosage?",
    a: "If you're currently taking semaglutide and switching from another provider, you can choose to maintain your current dose, increase it, or decrease it based on your provider's recommendation. For new patients, starting at a lower dose and gradually increasing is the standard protocol to minimize side effects and allow your body to adjust. This information is assessed during the ordering process to ensure you're prescribed the appropriate dosage for your situation.",
  },
  {
    q: "What is the difference between semaglutide and tirzepatide?",
    a: "Semaglutide is a GLP-1 receptor agonist that activates one hormone pathway. Tirzepatide is a dual agonist that activates both GLP-1 and GIP receptors, potentially offering enhanced metabolic benefits. Both medications support weight loss and metabolic health but work through slightly different mechanisms. Your healthcare provider will help determine which medication is most appropriate for your individual needs and health goals.",
  },
  {
    q: "Do I need to follow a specific diet while on semaglutide?",
    a: "While semaglutide significantly reduces appetite and helps control food intake, optimal results require combining treatment with a reduced-calorie diet and increased physical activity. Your healthcare provider can provide dietary guidance, and many patients find success with a balanced, nutrient-dense diet focused on protein, vegetables, and whole foods. The medication makes it easier to adhere to healthy eating patterns by reducing cravings and promoting feelings of fullness.",
  },
  {
    q: "How long do I need to take semaglutide?",
    a: "Semaglutide is typically used as a long-term weight management therapy. Clinical studies have demonstrated continued benefits with ongoing use, and many patients maintain treatment to sustain their weight loss results. Discontinuing semaglutide may result in weight regain if lifestyle changes are not maintained. Your healthcare provider will work with you to determine the appropriate duration of treatment based on your goals, response, and overall health status.",
  },
  {
    q: "What should I do if I miss a dose?",
    a: "If you miss your weekly semaglutide dose and it has been less than 5 days since the missed dose, take it as soon as you remember. If more than 5 days have passed, skip the missed dose and resume your regular weekly schedule. Do not take two doses within 48 hours of each other. If you frequently miss doses or have questions about your dosing schedule, consult your healthcare provider.",
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

export function SemaglutideProductPage() {
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
                Weight Loss
              </p>
              <h1 className="font-serif text-4xl font-normal tracking-tight text-foreground lg:text-5xl">
                Compounded Semaglutide
              </h1>
              <p className="mt-2 font-sans text-lg text-muted-foreground">
                GLP-1 support for appetite control, weight loss, and improved metabolic health.
              </p>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-foreground">From $96</span>
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
              , our compounded GLP-1 Semaglutide injection is custom formulated to support effective
              weight loss, appetite control, and improved metabolic health. Administered once weekly
              via subcutaneous injection and prescribed by licensed providers, shipped directly to
              you.
            </p>

            <ul className="flex flex-col gap-2">
              {[
                "Direct from FDA-licensed manufacturer",
                "Order up to six months supply at once",
                "No additional fees or membership costs",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 font-sans text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--success))]" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="overflow-hidden rounded-xl border border-border">
              <div className="grid grid-cols-2 border-b border-border bg-muted px-4 py-3">
                <span className="font-sans text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Plan Length
                </span>
                <span className="text-right font-sans text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Per Month
                </span>
              </div>
              {planPricing.map((row, i) => (
                <div
                  key={row.plan}
                  className={`grid grid-cols-2 px-4 py-3 ${
                    i < planPricing.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="font-sans text-sm text-foreground">{row.plan}</span>
                  <span className="text-right font-sans text-sm font-semibold text-foreground">
                    {row.perMonth}
                  </span>
                </div>
              ))}
            </div>

            <Accordion type="single" collapsible className="w-full border-t border-border">
              <AccordionItem value="what-is">
                <AccordionTrigger className="font-sans text-sm font-medium hover:no-underline">
                  What is Compounded Semaglutide?
                </AccordionTrigger>
                <AccordionContent className="font-sans text-sm text-muted-foreground">
                  Compounded Semaglutide is a GLP-1 (glucagon-like peptide-1) receptor agonist that
                  mimics a naturally occurring hormone in the body to regulate blood sugar levels and
                  reduce appetite. This injectable medication works by slowing gastric emptying,
                  enhancing insulin secretion when blood sugar is elevated, and significantly reducing
                  hunger signals to the brain. Administered via subcutaneous injection, compounded
                  semaglutide provides powerful support for weight management and metabolic health
                  through its comprehensive effects on appetite regulation, blood sugar control, and
                  overall metabolic function.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="benefits">
                <AccordionTrigger className="font-sans text-sm font-medium hover:no-underline">
                  Benefits of Compounded Semaglutide
                </AccordionTrigger>
                <AccordionContent className="font-sans text-sm text-muted-foreground">
                  Compounded Semaglutide offers powerful benefits for weight management and metabolic
                  health through its targeted GLP-1 mechanism. Experience significant appetite
                  reduction, enhanced blood sugar regulation, sustained weight loss, and improved
                  metabolic function. This therapy supports cardiovascular health markers, helps reduce
                  food cravings, promotes feelings of fullness, and provides comprehensive metabolic
                  support. Clinical studies have shown substantial weight loss results when combined
                  with lifestyle modifications including reduced-calorie diet and increased physical
                  activity.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="quality">
                <AccordionTrigger className="font-sans text-sm font-medium hover:no-underline">
                  How Altara ensures quality and safety
                </AccordionTrigger>
                <AccordionContent className="font-sans text-sm text-muted-foreground">
                  Altara only works with state-licensed and FDA-registered compounding pharmacies. Our
                  partner pharmacies perform third-party testing through FDA and DEA-registered labs to
                  ensure quality control for every compounded lot prescribed to patients. We thoroughly
                  vet our partners to guarantee quality medication.
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
            <p className="mt-6 font-sans text-lg text-foreground">
              Why Compounded Semaglutide from Altara
            </p>
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
        subheading="Everything you need to know about Semaglutide"
        items={SEMAGLUTIDE_FAQS}
        answerTextClassName="text-black"
      />
    </div>
  );
}
