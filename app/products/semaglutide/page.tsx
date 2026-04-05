import type { Metadata } from "next";
import { SemaglutideProductPage } from "@/components/semaglutide-product-page";

export const metadata: Metadata = {
  title: "Compounded Semaglutide | Altara Health",
  description:
    "Compounded GLP-1 Semaglutide injection from a U.S.-based FDA-licensed drug manufacturer for effective weight loss, appetite control, and metabolic health support.",
};

export default function SemaglutidePageRoute() {
  return <SemaglutideProductPage />;
}
