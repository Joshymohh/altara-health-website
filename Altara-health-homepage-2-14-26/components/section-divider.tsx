"use client";

import Link from "next/link";

const navLinks = [
  { href: "#weightloss", label: "Weightloss" },
  { href: "#skin", label: "Skin" },
  { href: "#daily-health", label: "Daily Health" },
];

export function SectionDivider() {
  return (
    <div className="bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Center Logo */}
          <div className="flex items-center gap-2">
            <span className="font-serif text-xl text-foreground">Altara Health</span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-6">
            <Link
              href="#newsletter"
              className="hidden md:block text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Newsletter
            </Link>
            <Link
              href="#login"
              className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
