"use client";

import { AuroraBackground } from "./aurora-background";
import { GlassCard } from "./glass-card";

export function AboutUsPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AuroraBackground />

      <div className="relative z-10 flex items-center justify-center px-6 py-12 md:px-9 md:py-[4.5rem]">
        <GlassCard />
      </div>
    </main>
  );
}
