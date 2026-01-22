import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// Import Zalando Sans Expanded from Google Fonts
const zalandoSans = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-zalando-sans',
})

export const metadata: Metadata = {
  title: 'Network Expansion - Fundraising Guide',
  description: 'Tilling the Soil - Chapter I',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Zalando+Sans+Expanded:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className={zalandoSans.variable}>{children}</body>
    </html>
  )
}
