import type { Metadata } from "next";
import { GlutathioneProductPage } from "@/components/glutathione-product-page";

export const metadata: Metadata = {
  title: "Glutathione Injection | Altara Health",
  description:
    "Glutathione injection from a U.S.-based FDA-licensed drug manufacturer for antioxidant support, detoxification, radiant skin, and cellular protection.",
};

export default function GlutathionePageRoute() {
  return <GlutathioneProductPage />;
}
