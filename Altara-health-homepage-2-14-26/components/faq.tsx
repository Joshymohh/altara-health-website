"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is Altara?",
    answer:
      "Altara Health is a premium telehealth platform specializing in peptide therapies for weight loss, longevity, and skin health. We connect you with certified doctors who create personalized treatment plans.",
  },
  {
    question: "How does Altara work?",
    answer:
      "Simply complete our online health assessment, get matched with a licensed provider, receive your personalized prescription, and have your medication delivered directly to your door.",
  },
  {
    question: "Do I need insurance?",
    answer:
      "No insurance is required. Our treatments are HSA/FSA eligible, and we offer flexible payment options through Affirm, Klarna, and Afterpay.",
  },
  {
    question: "Are Altara Pharmacies FDA regulated?",
    answer:
      "Yes, all our partner pharmacies are FDA-registered and follow strict quality control protocols to ensure the safety and efficacy of all medications.",
  },
  {
    question: "Who are the providers at Altara?",
    answer:
      "Our network consists of board-certified physicians and licensed healthcare providers who specialize in peptide therapy and regenerative medicine.",
  },
  {
    question: "Where are Altara products available?",
    answer:
      "Altara Health services are currently available throughout the United States, with plans to expand internationally in the near future.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-background py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            Your questions, <span className="text-muted-foreground">answered</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FAQ Accordion */}
          <motion.div
            className="lg:col-span-2 space-y-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-border">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                  <span className="ml-4 flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <Plus className="w-5 h-5 text-muted-foreground" />
                    )}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>

          {/* CTA Card */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
              <div className="mb-6">
                <button className="bg-[#bbc7a4] text-[#1a2e3e] px-5 py-2 rounded-full text-sm font-medium hover:bg-[#bbc7a4]/85 transition-colors shimmer-cta">
                  Get Started
                </button>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=400&fit=crop"
                  alt="Doctor consultation"
                  className="w-full h-64 object-cover object-top rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
