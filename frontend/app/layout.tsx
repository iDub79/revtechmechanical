import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const SITE_URL = 'https://www.revtechmechanical.com.au'
const MAP_URL =
  'https://www.google.com/maps/place/Rev-Tech+Mechanical/@-27.390812,152.973584,15z/data=!4m6!3m5!1s0x6b9157b6803de80b:0x40d51232ed79821e!8m2!3d-27.3906095!4d152.972074!16s%2Fg%2F1tmk8p28'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Rev-Tech Mechanical | Trusted Car Mechanic in Everton Hills, QLD',
    template: '%s | Rev-Tech Mechanical',
  },
  description:
    'Rev-Tech Mechanical offers expert car servicing, repairs, and diagnostics in Everton Hills QLD. 40+ years of experience. Log book servicing, safety certificates, auto electrical and more.',
  keywords: [
    'mechanic Everton Hills',
    'car service Brisbane northside',
    'log book service QLD',
    'auto electrical',
    'safety certificate QLD',
    'Rev-Tech Mechanical',
  ],
  icons: {
    icon: '/favicon.ico',
    apple: '/images/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: SITE_URL,
    siteName: 'Rev-Tech Mechanical',
    title: 'Rev-Tech Mechanical | Trusted Car Mechanic in Everton Hills, QLD',
    description:
      'Expert car servicing, repairs, and diagnostics in Everton Hills QLD. 40+ years experience servicing all makes and models.',
    images: [
      {
        url: '/images/og.jpg',
        width: 1200,
        height: 630,
        alt: 'The Rev-Tech Mechanical workshop',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rev-Tech Mechanical | Trusted Car Mechanic in Everton Hills, QLD',
    description:
      'Expert car servicing, repairs, and diagnostics in Everton Hills QLD. 40+ years experience.',
    images: ['/images/og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#111111',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  '@id': `${SITE_URL}/#business`,
  name: 'Rev-Tech Mechanical',
  url: SITE_URL,
  image: `${SITE_URL}/images/og.jpg`,
  logo: `${SITE_URL}/images/logo.png`,
  telephone: '+61733552248',
  priceRange: '$$',
  hasMap: MAP_URL,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Unit 2, Building 5, 991 South Pine Rd',
    addressLocality: 'Everton Hills',
    addressRegion: 'QLD',
    postalCode: '4053',
    addressCountry: 'AU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -27.3906095,
    longitude: 152.972074,
  },
  areaServed: 'Brisbane Northside, QLD',
  sameAs: ['https://www.facebook.com/revtechmechanical'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AU" className={inter.variable}>
      <body className="flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          strategy="afterInteractive"
          data-cf-beacon='{"token": "dad84aa8c1844fc5a2c0cd9bc45fbd28"}'
        />
      </body>
    </html>
  )
}
