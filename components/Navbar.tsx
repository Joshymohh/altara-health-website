"use client";

import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/** Hero height as a fraction of viewport; before this scroll distance the bar is in normal flow. */
const HERO_VH_DESKTOP = 0.75;
const HERO_VH_MOBILE = 0.7;

/* ------------------------------------------------------------------ */
/*  NAV DATA STRUCTURE                                                */
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

/**
 * Featured images in public/products/Featured Products Navigation/
 * Bump FEATURE_NAV_IMAGE_VERSION when replacing those files so browsers fetch the new assets.
 */
const FEATURE_NAV_IMAGE_VERSION = "2";

function featureNavAsset(filename: string) {
  const path = `/products/${encodeURIComponent("Featured Products Navigation")}/${encodeURIComponent(filename)}`;
  return `${path}?v=${FEATURE_NAV_IMAGE_VERSION}`;
}

const navItems: NavItemData[] = [
  {
    label: "Weight Management",
    href: "/weight-loss",
    featureImage: featureNavAsset("Feature Product - Weight Management .jpg"),
    submenu: [
      {
        label: "Compounded Tirzepatide",
        href: "/tirzepatide",
        imageSrc: "/products/tirzepatide/tirzepatide-image-1.jpg",
        rx: true,
      },
      {
        label: "Compounded Semaglutide",
        href: "/products/semaglutide",
        imageSrc: "/products/semaglutide/semaglutide-image-1.jpg",
        rx: true,
      },
    ],
  },
  {
    label: "Longevity & Vitality",
    href: "/products/ghk-cu",
    featureImage: featureNavAsset("Feature Product - Longevity & Vitality .jpg"),
    submenu: [
      { label: "NAD+ Injection", href: "/products/nad", imageSrc: "/products/nad/nad-image-1.jpg", rx: true },
      {
        label: "Sermorelin",
        href: "/products/sermorelin",
        imageSrc: "/products/sermorelin/sermorelin-image-1.jpg",
        rx: true,
      },
      {
        label: "GHK-Cu + Tretinoin + Niacinamide",
        href: "/products/ghk-cu",
        imageSrc: "/products/ghk-cu/ghk-cu-image-1.jpg",
        rx: true,
      },
    ],
  },
  {
    label: "Metabolic Health",
    href: "/longevity",
    featureImage: featureNavAsset("Feature Product - Metabolic Health.jpg"),
    submenu: [
      {
        label: "Glutathione",
        href: "/products/glutathione",
        imageSrc: "/products/glutathione/glutathione-image-1.jpg",
        rx: true,
      },
      { label: "Lipo C", href: "/products/lipo-c", imageSrc: "/products/lipo-c/lipo-c-image-1.jpg", rx: true },
      {
        label: "Lipotropic (MIC) + B12",
        href: "/products/lipotropic-mic",
        imageSrc: "/products/lipotropic-mic/lipotropic-mic-image-1.jpg",
        rx: true,
      },
    ],
  },
];

const LEFT_NAV_ITEMS = navItems.slice(0, 2);
const RIGHT_NAV_ITEM = navItems[2];

function DesktopNavItem({ item, alignRight = false }: { item: NavItemData; alignRight?: boolean }) {
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
      <button className="text-sm font-medium text-[#326ea2] flex items-center gap-1 shimmer-link">
        {item.label}
        <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
      </button>
      <div
        className={`absolute top-full h-5 w-[50vw] hidden group-hover:block ${alignRight ? "right-0" : "left-0"}`}
      />
      <div
        className={`absolute top-full pt-5 w-[50vw] min-h-[250px] hidden group-hover:block z-[100] transition-all duration-200 ${
          alignRight ? "right-0" : "left-0"
        }`}
      >
        <div className="w-full overflow-hidden rounded-xl border border-black/5 bg-[#bbc7a4] shadow-2xl">
          <div className="grid min-h-[300px] grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
            <div className="border-r border-black/5 p-8">
              <ul className="space-y-[10px]">
                {item.submenu.map((sub) => (
                  <li key={sub.label}>
                    <Link
                      href={sub.href}
                      className="group relative z-0 hover:z-10 flex items-center gap-3 py-2.5 text-black font-serif text-[15px] hover:text-[#326ea2] transition-colors duration-200"
                    >
                      <span
                        className="relative inline-flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-md mr-[10px]"
                        aria-hidden
                      >
                        <Image
                          src={sub.imageSrc}
                          alt=""
                          width={48}
                          height={48}
                          quality={100}
                          unoptimized
                          className="h-12 w-12 rounded-md object-cover sharp-image transition-transform duration-200 ease-[ease] group-hover:scale-105"
                        />
                      </span>
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
            <div className="relative min-h-[300px] w-full">
              <Image
                src={item.featureImage ?? "/placeholder.svg?height=400&width=300"}
                alt={`${item.label} — featured`}
                fill
                quality={100}
                unoptimized={item.featureImage?.startsWith("/products/") ?? false}
                className="object-cover object-center sharp-image"
                sizes="(min-width: 768px) 1200px, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const overlayVariants = {
  closed: { x: "-100%" },
  open: { x: "0%" },
};

const linkVariants = {
  closed: { opacity: 0, x: -40 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.15 + i * 0.08, duration: 0.4, ease: "easeOut" as const },
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/40"
            onClick={onClose}
          />
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 left-0 z-[70] w-full bg-[#F5F5F0]/95 backdrop-blur-xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <div className="flex flex-col items-center gap-1.5 text-center">
                <Image
                  src="/altara-logo.svg"
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7 shrink-0 object-contain"
                />
                <span className="brand-text text-sm leading-tight text-[#326ea2]">
                  Altara Health
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#326ea2]/10 hover:bg-[#326ea2]/20 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-[#326ea2]" />
              </button>
            </div>

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
                        <AnimatePresence>
                          {openSubmenu === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" as const }}
                              className="overflow-hidden"
                            >
                              <ul className="pl-1 pb-4 pt-2 space-y-[10px]">
                                {item.submenu.map((sub) => (
                                  <li key={sub.label}>
                                    <Link
                                      href={sub.href}
                                      onClick={onClose}
                                      className="group relative z-0 hover:z-10 flex items-center justify-between py-2.5 min-h-[48px]"
                                    >
                                      <span className="font-serif text-base text-black flex items-center gap-2 mr-[10px] min-w-0">
                                        {sub.label}
                                        {sub.rx && (
                                          <span className="text-black/40 text-xs font-sans">
                                            R<sub>x</sub>
                                          </span>
                                        )}
                                      </span>
                                      <span
                                        className="relative inline-flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-md ml-4"
                                        aria-hidden
                                      >
                                        <Image
                                          src={sub.imageSrc}
                                          alt=""
                                          width={56}
                                          height={56}
                                          quality={100}
                                          unoptimized
                                          className="h-14 w-14 rounded-md object-cover sharp-image transition-transform duration-200 ease-[ease] group-hover:scale-105"
                                        />
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                              {item.featureImage && (
                                <div className="relative mt-4 aspect-[4/3] w-full overflow-hidden rounded-lg border border-black/5">
                                  <Image
                                    src={item.featureImage}
                                    alt={`${item.label} — featured`}
                                    fill
                                    quality={100}
                                    unoptimized={item.featureImage.startsWith("/products/")}
                                    className="object-cover object-center sharp-image"
                                    sizes="100vw"
                                  />
                                </div>
                              )}
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

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
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
                href="/blog"
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

function heroHeightPx(): number {
  if (typeof window === "undefined") return 0;
  const ratio = window.innerWidth < 768 ? HERO_VH_MOBILE : HERO_VH_DESKTOP;
  return window.innerHeight * ratio;
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPastHero, setIsPastHero] = useState(
    () => typeof window !== "undefined" && window.scrollY > heroHeightPx(),
  );
  const [headerHeight, setHeaderHeight] = useState(0);

  const headerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const measure = () => setHeaderHeight(el.offsetHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const update = () => {
      setIsPastHero(window.scrollY > heroHeightPx());
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      <div
        aria-hidden
        className="shrink-0 overflow-hidden transition-[height] duration-300 ease-out"
        style={{ height: isPastHero ? headerHeight || 72 : 0 }}
      />
      <header
        ref={headerRef}
        className={cn(
          "w-full border-b backdrop-blur-[10px] transition-[background-color,box-shadow,border-color] duration-300 ease-out",
          isPastHero
            ? "fixed top-0 left-0 right-0 z-50 border-black/[0.08] bg-[#F5F5F0]/98 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            : "relative z-50 border-black/5 bg-[#F5F5F0]/95",
        )}
      >
        <div className="mx-auto max-w-7xl px-4 py-3">
          {/* flex-1 | logo | flex-1 keeps the lockup centered on mobile; same pattern on md+ */}
          <div className="flex min-h-[52px] w-full items-center">
            <div className="flex min-w-0 flex-1 items-center justify-start">
              <nav className="hidden items-center gap-8 md:flex">
                {LEFT_NAV_ITEMS.map((item) => (
                  <DesktopNavItem key={item.label} item={item} />
                ))}
              </nav>
            </div>

            {/* Logo: mark above wordmark on mobile; same stacked lockup on md+; text-only when past hero */}
            <div className="flex shrink-0 justify-center">
              <Link
                href="/"
                className="relative flex min-h-[44px] flex-col items-center justify-center md:min-h-[52px]"
              >
                <div
                  className={cn(
                    "flex flex-col items-center justify-center gap-1.5 transition-opacity duration-200 ease-out",
                    isPastHero
                      ? "pointer-events-none absolute inset-0 opacity-0"
                      : "relative opacity-100",
                  )}
                  aria-hidden={isPastHero}
                >
                  <Image
                    src="/altara-logo.svg"
                    alt=""
                    width={40}
                    height={40}
                    className="block h-8 w-8 shrink-0 object-contain sm:h-9 sm:w-9 md:h-10 md:w-10"
                  />
                  <span className="brand-text text-center text-sm leading-tight text-[#326ea2] sm:text-base md:text-lg">
                    Altara Health
                  </span>
                </div>
                <div
                  className={cn(
                    "flex items-center justify-center transition-opacity duration-200 ease-out",
                    !isPastHero
                      ? "pointer-events-none absolute inset-0 opacity-0"
                      : "relative opacity-100",
                  )}
                  aria-hidden={!isPastHero}
                >
                  <span className="font-serif text-[18px] font-medium leading-none tracking-[0.02em] text-[#326ea2] md:text-[20px]">
                    Altara Health
                  </span>
                </div>
              </Link>
            </div>

            <div className="flex min-w-0 flex-1 items-center justify-end gap-4">
              <div className="hidden md:block">
                <DesktopNavItem item={RIGHT_NAV_ITEM} alignRight />
              </div>
              <Link
                href="/blog"
                className="hidden text-sm font-medium text-[#326ea2] shimmer-link md:block"
              >
                Newsletter
              </Link>
              <Link
                href="#login"
                className="hidden rounded-full bg-[#326ea2] px-5 py-2 text-sm font-medium text-[#F5F5F0] shimmer-cta hover:bg-[#326ea2]/90 md:inline-flex"
              >
                Login
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full hover:bg-[#326ea2]/10 transition-colors md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5 text-[#326ea2]" />
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
