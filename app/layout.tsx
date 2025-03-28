import type React from "react"
import type { Metadata, Viewport } from "next"
import { Space_Grotesk, Outfit } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

// Load Outfit font for body text - Modern and clean typeface suitable for 2025 designs
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: 'swap',
})

// Load Space Grotesk for headings - Modern geometric sans-serif with personality
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: 'swap',
})

const APP_NAME = "CryptoFuse"
const APP_DEFAULT_TITLE = "CryptoFuse - Next-Gen Crypto Payment Gateway"
const APP_TITLE_TEMPLATE = "%s - CryptoFuse"
const APP_DESCRIPTION = "Accept cryptocurrency payments seamlessly with CryptoFuse, the secure and easy-to-use payment gateway for your business."

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#3B82F6',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://cryptofuse.pages.dev'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  applicationName: APP_NAME,
  keywords: [
    "cryptocurrency", 
    "payment gateway", 
    "blockchain", 
    "crypto payments", 
    "bitcoin", 
    "ethereum", 
    "web3", 
    "digital currency",
    "fintech",
    "payment processing",
    "crypto integration"
  ],
  authors: [{ name: "CryptoFuse Team" }],
  creator: "CryptoFuse",
  publisher: "CryptoFuse",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: 'finance',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo-solid.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon1.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: { url: '/apple-icon.png', sizes: '180x180' },
    other: [
      {
        rel: 'manifest',
        url: '/manifest.json'
      }
    ]
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cryptofuse.pages.dev',
    title: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
    siteName: APP_NAME,
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: APP_NAME
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
    images: ['/twitter-image.png'],
    creator: '@cryptofuse',
    site: '@cryptofuse'
  },
  verification: {
    // Reserved for future use
  },
  appleWebApp: {
    title: APP_NAME,
    statusBarStyle: 'black-translucent',
    capable: true,
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'mobile-web-app-capable': 'yes',
  },
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
