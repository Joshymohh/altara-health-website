import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/footer";
import { LoadingScreen } from "@/components/LoadingScreen";
import "./globals.css";

export const metadata: Metadata = {
  title: "Altara Health | Premium Peptides Made Accessible",
  description:
    "Altara Health offers premium peptide treatments for weight loss, longevity, and skin health. HSA/FSA eligible, 100% online, certified doctors.",
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
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
