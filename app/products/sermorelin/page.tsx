import type { Metadata } from "next";
import { SermorelinProductPage } from "@/components/sermorelin-product-page";

export const metadata: Metadata = {
  title: "Sermorelin Injection | Altara Health",
  description:
    "Sermorelin injection from a U.S.-based FDA-licensed drug manufacturer. Support natural growth hormone production, recovery, lean body composition, and vitality with provider-guided care.",
};

export default function SermorelinPageRoute() {
  return <SermorelinProductPage />;
}
