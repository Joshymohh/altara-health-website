import type { Metadata } from "next";
import { MicB12ProductPage } from "@/components/mic-b12-product-page";

export const metadata: Metadata = {
  title: "Lipotropic (MIC) + B12 Injection | Altara Health",
  description:
    "Lipotropic (MIC) + B12 injection from a U.S.-based FDA-licensed drug manufacturer. Support fat metabolism, energy, and mental clarity with methionine, inositol, choline, and vitamin B12.",
};

export default function MicB12PageRoute() {
  return <MicB12ProductPage />;
}
