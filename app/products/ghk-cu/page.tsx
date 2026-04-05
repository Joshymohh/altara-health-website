import type { Metadata } from "next";
import { GhkCuProductPage } from "@/components/ghk-cu-product-page";

export const metadata: Metadata = {
  title: "GHK-Cu + Tretinoin + Niacinamide Injection | Altara Health",
  description:
    "GHK-Cu + Tretinoin + Niacinamide injection from a U.S.-based FDA-licensed manufacturer. Support skin rejuvenation, collagen production, and anti-aging goals with provider-guided care.",
};

export default function GhkCuProductPageRoute() {
  return <GhkCuProductPage />;
}
