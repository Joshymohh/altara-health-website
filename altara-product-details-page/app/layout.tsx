import React from "react"
import type { Metadata } from 'next'
import { Montserrat, Lora } from 'next/font/google'

import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
})

export const metadata: Metadata = {
  title: 'Altara Health | Compounded Tirzepatide',
  description: 'FDA-licensed compounded Tirzepatide for effective weight loss. Free assessment, quality tested, delivered to your door.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lora.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>{children}</body>
    </html>
  )
}
