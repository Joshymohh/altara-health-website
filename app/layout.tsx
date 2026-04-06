import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/footer";
import { LoadingScreen } from "@/components/LoadingScreen";
import "./globals.css";

export const metadata: Metadata = {
  title: "Altara Health - Premium Peptide Therapy",
  description:
    "Physician-supervised peptide therapy delivered nationally. Compounded tirzepatide, semaglutide, NAD+, sermorelin, and more.",
  icons: {
    icon: "/altara-favicon.png",
    shortcut: "/altara-favicon.png",
    apple: "/altara-favicon.png",
  },
  openGraph: {
    title: "Altara Health - Premium Peptide Therapy",
    description:
      "Physician-supervised peptide therapy delivered nationally. Transform your health with premium compounded peptides.",
    url: "https://altara.health",
    siteName: "Altara Health",
    images: [
      {
        url: "/social-favicon.jpg",
        width: 1200,
        height: 630,
        alt: "Altara Health - Premium Peptide Therapy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Altara Health - Premium Peptide Therapy",
    description: "Physician-supervised peptide therapy delivered nationally",
    images: ["/social-favicon.jpg"],
  },
  metadataBase: new URL("https://altara.health"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <LoadingScreen />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
