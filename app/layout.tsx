import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import BackToTop from "@/components/BackToTop"
import CookieConsent from "@/components/CookieConsent"
import ErrorBoundary from "@/components/ErrorBoundary"
import PerformanceOptimizer from "@/components/PerformanceOptimizer"
import { OrganizationSchema, PersonSchema } from "@/components/StructuredData"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  preload: true,
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL("https://elenarodriquezphotography.com"),
  title: {
    default: "Elena Rodriguez Photography | Award-Winning Wedding & Portrait Photographer",
    template: "%s | Elena Rodriguez Photography",
  },
  description:
    "Award-winning professional photographer specializing in luxury weddings, intimate portraits, and lifestyle photography. Based in San Francisco, serving clients worldwide with 10+ years of experience.",
  keywords: [
    "wedding photographer",
    "portrait photographer",
    "luxury photography",
    "San Francisco photographer",
    "professional photography",
    "destination weddings",
    "engagement photos",
    "family portraits",
    "lifestyle photography",
    "award winning photographer",
    "Elena Rodriguez",
    "California wedding photographer",
    "Bay Area photographer",
    "videography",
    "wedding videographer",
  ],
  authors: [{ name: "Elena Rodriguez", url: "https://elenarodriquezphotography.com" }],
  creator: "Elena Rodriguez",
  publisher: "Elena Rodriguez Photography",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elenarodriquezphotography.com",
    siteName: "Elena Rodriguez Photography",
    title: "Elena Rodriguez Photography | Award-Winning Wedding & Portrait Photographer",
    description:
      "Award-winning professional photographer specializing in luxury weddings, intimate portraits, and lifestyle photography. 10+ years experience, 500+ happy clients.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Elena Rodriguez Photography - Award-Winning Wedding & Portrait Photographer",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elena Rodriguez Photography | Award-Winning Wedding & Portrait Photographer",
    description:
      "Award-winning professional photographer specializing in luxury weddings, intimate portraits, and lifestyle photography.",
    images: ["/images/og-image.jpg"],
    creator: "@elena_photo",
    site: "@elena_photo",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://elenarodriquezphotography.com",
  },
  category: "photography",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Elena Photography",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#fbbf24",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <OrganizationSchema />
        <PersonSchema />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#fbbf24" />
        <meta name="color-scheme" content="light" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ErrorBoundary>
          <PerformanceOptimizer />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BackToTop />
          <CookieConsent />
        </ErrorBoundary>
      </body>
    </html>
  )
}
