/**
 * Root layout — wraps every page of the site.
 * Loads Google Fonts (Lora + Montserrat) and renders the shared Navbar and Footer
 * around the main content (children).
 */
import type { Metadata } from "next";
import { Lora, Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

// Lora: used for H1 titles on blog posts (400, 700)
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lora",
});

// Montserrat: used for everything else — body, UI, headings (400, 500, 600, 700)
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Altara | Premium Health & Wellness",
  description: "Altara — premium peptides and wellness, made accessible.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${montserrat.variable}`}>
      <body className="min-h-screen flex flex-col antialiased font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
