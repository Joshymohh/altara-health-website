import type { Metadata } from "next";
import { NadProductPage } from "@/components/nad-product-page";

export const metadata: Metadata = {
  title: "NAD+ Injection | Altara Health",
  description:
    "NAD+ injection from a U.S.-based FDA-licensed manufacturer. Support cellular energy, cognitive function, and healthy aging. Prescribed by licensed providers, shipped to you.",
};

export default function NadProductPageRoute() {
  return <NadProductPage />;
}
