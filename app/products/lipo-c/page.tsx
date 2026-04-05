import type { Metadata } from "next";
import { LipoCProductPage } from "@/components/lipo-c-product-page";

export const metadata: Metadata = {
  title: "Lipo C Injection | Altara Health",
  description:
    "Lipo C lipotropic injection (methionine, inositol, choline) from a U.S.-based FDA-licensed drug manufacturer. Support fat metabolism, liver health, and natural energy with provider-guided care.",
};

export default function LipoCPageRoute() {
  return <LipoCProductPage />;
}
