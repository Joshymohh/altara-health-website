"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  NAV DATA STRUCTURE                                                 */
/* ------------------------------------------------------------------ */

interface SubmenuItem {
  label: string;
  href: string;
  imageSrc: string;
  rx?: boolean;
}

interface NavItemData {
  label: string;
  href: string;
  submenu?: SubmenuItem[];
  featureImage?: string;
}

const navItems: NavItemData[] = [
  {
    label: "Weight Loss",
    href: "/weight-loss",
    featureImage: "/placeholder.svg?height=400&width=300",
    submenu: [
      { label: "GLP-1 Injection", href: "/product/glp1-injection", imageSrc: "/placeholder.svg?height=64&width=64", rx: true },
      { label: "GLP-1 Microdose", href: "/product/glp1-microdose", imageSrc: "/placeholder.svg?height=64&width=64", rx: true },
      { label: "MIC + B12 Injection", href: "/product/mic-b12", imageSrc: "/placeholder.svg?height=64&width=64", rx: true },
      { label: "Anti-Nausea Tablets", href: "/product/anti-nausea", imageSrc: "/placeholder.svg?height=64&width=64", rx: true },
      { label: "GLP-1 Boost", href: "/product/glp1-boost", imageSrc: "/placeholder.svg?height=64&width=64" },
      { label: "Ozempic\u00AE", href: "/product/ozempic", imageSrc: "/placeholder.svg?height=64&width=64", rx: true },
      { label: "Mounjaro\u00AE", href: "/product/mounjaro", imageSrc: "/placeholder.svg?height=64&width=64", rx: true },
      { label: "Metformin", href: "/product/metformin-wl", imageSrc: "/placeholder.svg?height=64&width=64", rx: true },
    ],
  },
  {
    label: "Skin",
    href: "/skin",
  },
  {
    label: "Longevity",
    href: "/longevity",
    featureImage: "/placeholder.svg?height=400&width=300",
    submenu: [
      { label: "NAD+ Injection", href: "/product/nad-injection", imageSrc: "/placeholder.svg?height=64&width=64", rx: true },
      { label: "NAD+ Nasal Spray", href: "/product/nad-spray", imageSrc: "/placeholder.svg?height=64&width=64", rx: true },
      { label: "Glutathione Injection", href: "/product/glutathione", imageSrc: "/placeholder.svg?height=64&width=64", rx: true },
      { label: "B12 Injection", href: "/product/b12", imageSrc: "/placeholder.svg?height=64&width=64", rx: true },
      { label: "Sermorelin", href: "/product/sermorelin", imageSrc: "/placeholder.svg?height=64&width=64", rx: true },
      { label: "Metformin", href: "/product/metformin", imageSrc: "/placeholder.svg?height=64&width=64", rx: true },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  DESKTOP NAV ITEM (pure CSS group-hover dropdown)                   */
/* ------------------------------------------------------------------ */

function DesktopNavItem({ item }: { item: NavItemData }) {
  if (!item.submenu) {
    return (
      <Link
        href={item.href}
        className="text-sm font-medium text-[#326ea2] shimmer-link"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="group relative">
      {/* Trigger */}
      <button className="text-sm font-medium text-[#326ea2] flex items-center gap-1 shimmer-link">
        {item.label}
        <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
      </button>

      {/* Ghost gap bridge - invisible padding to prevent hover loss */}
      <div className="absolute top-full left-0 w-[50vw] h-5 hidden group-hover:block" />

      {/* Dropdown - anchored to left:0 of trigger, consistent position */}
      <div className="absolute top-full left-0 pt-5 w-[50vw] min-h-[250px] hidden group-hover:block z-[100] transition-all duration-200">
        <div className="bg-[#bbc7a4] rounded-xl shadow-2xl border border-black/5 overflow-hidden">
          <div className="grid grid-cols-2 min-h-[250px]">
            {/* Left column - Links */}
            <div className="p-8">
              <ul className="space-y-1">
                {item.submenu.map((sub) => (
                  <li key={sub.label}>
                    <Link
                      href={sub.href}
                      className="flex items-center gap-3 py-2.5 text-black font-serif text-[15px] hover:text-[#326ea2] transition-colors duration-200"
                    >
                      <img
                        src={sub.imageSrc}
                        alt=""
                        className="w-10 h-10 rounded-md object-cover flex-shrink-0"
                      />
                      <span>{sub.label}</span>
                      {sub.rx && (
                        <span className="text-black/40 text-xs font-sans ml-1">
                          R<sub>x</sub>
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right column - Feature image */}
            <div className="relative">
              <img
                src={item.featureImage ?? "/placeholder.svg?height=400&width=300"}
                alt={`${item.label} featured`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  MOBILE MENU                                                        */
/* ------------------------------------------------------------------ */

const overlayVariants = {
  closed: { x: "100%" },
  open: { x: "0%" },
};

const linkVariants = {
  closed: { opacity: 0, x: 40 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.15 + i * 0.08, duration: 0.4, ease: "easeOut" },
  }),
};

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setOpenSubmenu(null);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/40"
            onClick={onClose}
          />

          {/* Slide-in panel */}
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-[70] w-full bg-[#F5F5F0]/95 backdrop-blur-xl flex flex-col"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 py-5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 border border-[#326ea2]/30 flex items-center justify-center">
                  <span className="font-serif text-lg font-bold text-[#326ea2]">A</span>
                </div>
                <span className="font-serif text-base text-[#326ea2]">Altara Health</span>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#326ea2]/10 hover:bg-[#326ea2]/20 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-[#326ea2]" />
              </button>
            </div>

            {/* Menu items */}
            <nav className="flex-1 overflow-y-auto px-6">
              <div className="flex flex-col gap-2 py-8">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    custom={i}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="w-full"
                  >
                    {item.submenu ? (
                      <>
                        <button
                          onClick={() =>
                            setOpenSubmenu(openSubmenu === item.label ? null : item.label)
                          }
                          className="font-serif text-3xl text-[#326ea2] flex items-center gap-2 min-h-[56px] w-full text-left"
                        >
                          {item.label}
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-300 ${
                              openSubmenu === item.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Accordion submenu */}
                        <AnimatePresence>
                          {openSubmenu === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <ul className="pl-1 pb-4 pt-2 space-y-1">
                                {item.submenu.map((sub) => (
                                  <li key={sub.label}>
                                    <Link
                                      href={sub.href}
                                      onClick={onClose}
                                      className="flex items-center justify-between py-2.5 min-h-[48px]"
                                    >
                                      <span className="font-serif text-base text-black flex items-center gap-2">
                                        {sub.label}
                                        {sub.rx && (
                                          <span className="text-black/40 text-xs font-sans">
                                            R<sub>x</sub>
                                          </span>
                                        )}
                                      </span>
                                      <img
                                        src={sub.imageSrc}
                                        alt=""
                                        className="w-12 h-12 rounded-md object-cover flex-shrink-0 ml-4"
                                      />
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="font-serif text-3xl text-[#326ea2] shimmer-link flex items-center min-h-[56px]"
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </nav>

            {/* Bottom CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="px-6 pb-10 flex flex-col gap-3"
            >
              <Link
                href="#login"
                onClick={onClose}
                className="bg-[#326ea2] text-[#F5F5F0] text-center px-6 py-3.5 rounded-full text-sm font-medium hover:bg-[#326ea2]/90 transition-colors"
              >
                Login
              </Link>
              <Link
                href="#newsletter"
                onClick={onClose}
                className="bg-[#326ea2]/10 border border-[#326ea2]/20 text-[#326ea2] text-center px-6 py-3.5 rounded-full text-sm font-medium hover:bg-[#326ea2]/20 transition-colors"
              >
                Newsletter
              </Link>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ------------------------------------------------------------------ */
/*  HEADER                                                             */
/* ------------------------------------------------------------------ */

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#F5F5F0]/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Left Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <DesktopNavItem key={item.label} item={item} />
              ))}
            </nav>

            {/* Center - Logo + Brand Name */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border-2 border-[#326ea2] flex items-center justify-center">
                <span className="font-serif text-2xl font-bold text-[#326ea2]">A</span>
              </div>
              <span className="font-serif text-xl text-[#326ea2]">Altara Health</span>
            </div>

            {/* Right Nav */}
            <div className="flex items-center gap-4">
              <Link
                href="#newsletter"
                className="hidden md:block text-sm font-medium text-[#326ea2] shimmer-link"
              >
                Newsletter
              </Link>
              <Link
                href="#login"
                className="hidden md:inline-flex bg-[#326ea2] text-[#F5F5F0] px-5 py-2 rounded-full text-sm font-medium hover:bg-[#326ea2]/90 shimmer-cta"
              >
                Login
              </Link>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#326ea2]/10 transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5 text-[#326ea2]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
