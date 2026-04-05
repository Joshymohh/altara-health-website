"use client"

import * as React from "react"
import { Plus } from "lucide-react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { cn } from "@/lib/utils"

const faqLeft = [
  {
    q: "How long should I continue NAD+ therapy?",
    a: "Most patients see optimal results with ongoing therapy. Your provider will recommend a personalized treatment timeline based on your health goals.",
  },
  {
    q: "What's the difference between NAD+ injections and oral supplements?",
    a: "NAD+ injections deliver the compound directly into your bloodstream for maximum bioavailability, bypassing the digestive system where oral supplements lose potency.",
  },
  {
    q: "How much does NAD+ therapy cost?",
    a: "Pricing varies by plan length. Our 6-month plan offers the best value at $209/month. See our pricing table above for all options.",
  },
  {
    q: "Is NAD+ therapy safe for long-term use?",
    a: "Yes, NAD+ therapy has been studied extensively and is considered safe for long-term use under medical supervision.",
  },
  {
    q: "Can NAD+ help with specific health conditions?",
    a: "NAD+ has shown benefits for aging, cognitive function, energy metabolism, and cellular repair. Consult with our medical team for personalized guidance.",
  },
  {
    q: "Is Astra available in my state?",
    a: "We currently serve patients in most US states. Complete our free assessment to check availability in your area.",
  },
  {
    q: "Who is your pharmacy partner?",
    a: "We partner with FDA-registered, state-licensed pharmacies that meet the highest standards for compounding and quality testing.",
  },
]

const faqRight = [
  {
    q: "What is NAD+ and why is it important?",
    a: "NAD+ (Nicotinamide Adenine Dinucleotide) is a coenzyme found in every cell of your body. It plays a critical role in energy production, DNA repair, and cellular communication.",
  },
  {
    q: "How are NAD+ injections administered?",
    a: "NAD+ injections are self-administered subcutaneously. We provide detailed instructions and support to make the process simple and comfortable.",
  },
  {
    q: "How quickly will I notice results?",
    a: "Many patients report improved energy and mental clarity within the first 1-2 weeks of treatment.",
  },
  {
    q: "What are the potential side effects?",
    a: "Side effects are generally mild and may include temporary flushing, mild nausea, or discomfort at the injection site. These typically resolve quickly.",
  },
  {
    q: "Can I combine NAD+ with other treatments?",
    a: "In many cases, yes. However, it is important to discuss all current medications and treatments with your provider during your assessment.",
  },
  {
    q: "Who is a good candidate for NAD+ therapy?",
    a: "Adults looking to improve energy, cognitive function, and overall wellness may benefit from NAD+ therapy. Our medical team will determine if it is right for you.",
  },
  {
    q: "How long should I continue NAD+ therapy?",
    a: "Treatment duration varies by individual. Your provider will help you determine the optimal length based on your response and goals.",
  },
]

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <AccordionPrimitive.Item value={question} className="border-b border-foreground/10">
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-4 text-left text-sm font-medium text-foreground transition-all [&[data-state=open]>svg]:rotate-45">
          {question}
          <Plus className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
      <AccordionPrimitive.Content className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
        <div className="pb-4 text-sm leading-relaxed text-muted-foreground">{answer}</div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  )
}

export function FaqSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
      <div className="mb-12">
        <h2 className="font-serif text-4xl font-normal tracking-tight text-foreground lg:text-5xl">
          Frequently
          <br />
          Asked
          <br />
          Questions
        </h2>
        <p className="mt-4 text-sm text-muted-foreground">
          Everything you need to know about NAD+ therapy.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-8">
        {/* Left column */}
        <AccordionPrimitive.Root type="single" collapsible className="w-full">
          {faqLeft.map((item) => (
            <FaqItem key={item.q} question={item.q} answer={item.a} />
          ))}
        </AccordionPrimitive.Root>

        {/* Right column */}
        <AccordionPrimitive.Root type="single" collapsible className="w-full">
          {faqRight.map((item) => (
            <FaqItem key={item.q} question={item.q} answer={item.a} />
          ))}
        </AccordionPrimitive.Root>
      </div>
    </section>
  )
}
