import type { Metadata } from 'next'
import { Lato, Montserrat } from 'next/font/google'

import './globals.css'

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['400', '700', '900'],
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'The Art of Mindful Design - Editorial Blog',
  description:
    'Exploring the intersection of thoughtful design, creative process, and digital craftsmanship.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${lato.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
