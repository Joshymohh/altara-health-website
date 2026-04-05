"use client";

import { motion } from "framer-motion";
import { ClipboardList, FileText, Truck } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "Step 1",
    title: "Free assessment, 100% online",
    description:
      "Answer some questions about your health history, lifestyle and goals on our online medical intake.",
    cta: "Take the assessment",
  },
  {
    icon: FileText,
    step: "Step 2",
    title: "Get Your Prescription",
    description:
      "A licensed medical provider will review your information and determine which medication is right for you.",
    cta: "See if your eligible",
  },
  {
    icon: Truck,
    step: "Step 3",
    title: "Free Delivery",
    description:
      "If prescribed, your medication is cold-shipped straight to your door for no additional cost.",
    cta: "Get started today",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

/* Matches hero gradient structure with reduced opacity for same subtle, barely-noticeable look */
function SectionAuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[#1a2e3e]" />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-[#5a8a7a] opacity-[0.12] blur-3xl"
        animate={{
          x: ["-10%", "30%", "-10%"],
          y: ["-10%", "20%", "-10%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: "transform", top: "-10%", left: "-5%" }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-[#d4b896] opacity-[0.10] blur-3xl"
        animate={{
          x: ["10%", "-25%", "10%"],
          y: ["10%", "-15%", "10%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: "transform", bottom: "-15%", right: "-5%" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-[#326ea2] opacity-[0.10] blur-3xl"
        animate={{
          x: ["5%", "-15%", "5%"],
          y: ["-5%", "10%", "-5%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: "transform", top: "30%", left: "40%" }}
      />
    </div>
  );
}

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <SectionAuroraBackground />
      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-white">
            How it <span className="text-[#a8c5b8] italic">works</span>
          </h2>
          <button type="button" className="mt-4 md:mt-0 bg-[#bb4430] text-white border border-[#bb4430] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#bb4430]/85 transition-colors shimmer-cta">
            Get Started
          </button>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-md border border-white/15 rounded-lg p-6 flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-white/80" />
                </div>
                <span className="text-sm text-white/50">{step.step}</span>
              </div>
              <h3 className="font-serif text-xl text-white mb-3">{step.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed flex-1">{step.description}</p>
              <button type="button" className="text-sm font-medium text-[#1a2e3e] bg-[#bbc7a4] rounded-full px-4 py-2.5 hover:bg-[#bbc7a4]/85 transition-colors w-full mt-6">
                {step.cta}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
