import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-headline',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Laxmikant Yelgandrawar | Data Analyst Portfolio',
  description: 'Data Analyst specializing in industrial efficiency, fuel optimization, and analytics dashboards. Driving $1.2M+ in annual savings.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased selection:bg-primary selection:text-primary-foreground overflow-x-hidden`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
