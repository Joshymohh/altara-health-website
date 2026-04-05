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
  title: 'Altara Blog',
  description: 'Wellness, fitness, and longevity insights from Altara',
}

export const viewport = {
  themeColor: '#F5F5F0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${lora.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
