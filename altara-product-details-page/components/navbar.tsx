"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const navLinks = [
  { label: "Weightloss", href: "#" },
  { label: "Skin", href: "#" },
  { label: "Daily Health", href: "#" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-[hsl(var(--bone))]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Left nav links - desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Center logo */}
        <Link href="/" className="font-serif text-xl font-bold tracking-tight text-foreground">
          Altara Health
        </Link>

        {/* Right nav */}
        <div className="flex items-center gap-6">
          <Link
            href="#"
            className="hidden text-sm font-medium text-foreground/70 transition-colors hover:text-foreground md:inline"
          >
            Newsletter
          </Link>
          <Link
            href="#"
            className="btn-cta rounded-full px-5 py-2 text-sm font-medium text-primary-foreground"
          >
            Login
          </Link>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="border-t border-border/40 bg-[hsl(var(--bone))] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#"
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Newsletter
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
