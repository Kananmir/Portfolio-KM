import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kanan Mirchandani | Portfolio',
  description: 'Creative technologist blending design, photography, and engineering.',
  keywords: ['portfolio', 'design', 'development', 'photography', 'creative'],
  authors: [{ name: 'Kanan Mirchandani' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kanan.dev',
    title: 'Kanan Mirchandani | Portfolio',
    description: 'Creative technologist blending design, photography, and engineering.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#F4F1E2" />
      </head>
      <body className="bg-cream text-warm-brown font-sans">
        {children}
      </body>
    </html>
  )
}
