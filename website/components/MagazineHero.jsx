"use client";

import { motion } from "framer-motion";
import { useState } from "react";

function ArticleCard({ image, title, author, className = "" }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      className={`cursor-pointer group rounded-lg bg-white/10 backdrop-blur-md border border-white/10 p-3 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="overflow-hidden rounded-sm mb-3">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
        />
      </div>
      <h3
        className={`font-serif text-lg leading-tight mb-2 transition-colors duration-300 ${
          isHovered ? "text-[#a8c5b8]" : "text-white"
        }`}
      >
        {title}
      </h3>
      <p className="text-sm text-white/60 uppercase tracking-wide">{author}</p>
    </motion.article>
  );
}

function SidebarArticle({ image, title, author }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      className="flex gap-3 cursor-pointer group rounded-lg bg-white/10 backdrop-blur-md border border-white/10 p-2.5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="overflow-hidden rounded-sm flex-shrink-0">
        <motion.img
          src={image}
          alt={title}
          className="w-16 h-16 object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
        />
      </div>
      <div>
        <h4
          className={`font-serif text-sm leading-tight mb-1 transition-colors duration-300 ${
            isHovered ? "text-[#a8c5b8]" : "text-white"
          }`}
        >
          {title}
        </h4>
        <p className="text-xs text-white/60 uppercase tracking-wide">{author}</p>
      </div>
    </motion.article>
  );
}

function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[#1a2e3e]" />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-[#5a8a7a] opacity-20 blur-3xl"
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
        className="absolute w-[600px] h-[600px] rounded-full bg-[#d4b896] opacity-15 blur-3xl"
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
        className="absolute w-[400px] h-[400px] rounded-full bg-[#326ea2] opacity-15 blur-3xl"
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

export function MagazineHero() {
  const [mainHovered, setMainHovered] = useState(false);

  return (
    <section className="relative bg-[#1a2e3e] overflow-hidden">
      <AuroraBackground />
      <div className="relative max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <ArticleCard
              image="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&h=300&fit=crop"
              title="Tesla Just Killed the Most Important Car of the 21st Century"
              author="PATRICK GEORGE"
            />
            <ArticleCard
              image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop"
              title="The Rise of Digital Wellness in Modern Healthcare"
              author="SARAH CHEN"
            />
          </div>

          <div className="lg:col-span-5">
            <motion.article
              className="cursor-pointer rounded-lg bg-white/10 backdrop-blur-md border border-white/10 p-4"
              onMouseEnter={() => setMainHovered(true)}
              onMouseLeave={() => setMainHovered(false)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="overflow-hidden rounded-sm mb-4">
                <motion.img
                  src="https://images.unsplash.com/photo-1559757175042-b8d87734a5a2?w=600&h=400&fit=crop"
                  alt="Main feature"
                  className="w-full h-64 md:h-80 object-cover"
                  animate={{ scale: mainHovered ? 1.05 : 1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <h2
                className={`font-serif text-2xl md:text-3xl leading-tight mb-3 transition-colors duration-300 ${
                  mainHovered ? "text-[#a8c5b8]" : "text-white"
                }`}
              >
                {"MAGA's War on Empathy"}
              </h2>
              <p className="text-white/70 text-sm md:text-base mb-3">
                {"This crisis in Minneapolis reveals a deep moral rot at the heart of Trump's movement."}
              </p>
              <p className="text-sm text-white/50 uppercase tracking-wide">
                HILLARY RODHAM CLINTON
              </p>
            </motion.article>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <SidebarArticle
                image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop"
                title="Purge the Public Servants"
                author="ANNE APPLEBAUM"
              />
              <SidebarArticle
                image="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=100&h=100&fit=crop"
                title="The Film Students Who Can No Longer Sit Through Films"
                author="ROSE HOROWITZ"
              />
              <SidebarArticle
                image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=100&h=100&fit=crop"
                title="T-Manning Has Gone Too Far"
                author="PARKER TABAS"
              />
              <SidebarArticle
                image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop"
                title="Katie Miller Makes a Classic Error"
                author="JONATHAN CHAIT"
              />
            </div>

            <motion.div
              className="bg-white/15 backdrop-blur-md border border-white/15 rounded-lg p-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-sm font-medium mb-3 text-white">Sign up for our daily newsletter.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 px-3 py-2 text-sm border border-white/20 rounded-sm bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-[#5a8a7a]"
                />
                <button type="button" className="bg-[#bbc7a4] text-[#1a2e3e] px-4 py-2 text-sm font-medium rounded-sm hover:bg-[#bbc7a4]/85 transition-colors">
                  Sign up
                </button>
              </div>
              <p className="text-xs text-white/50 mt-2">
                Your newsletter subscriptions are subject to Altara&apos;s{" "}
                <a href="#" className="underline text-white/60">
                  Privacy Policy
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
