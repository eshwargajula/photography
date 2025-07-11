import type { Metadata } from "next"

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: "website" | "article"
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
}

export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  image = "/images/og-image.jpg",
  url,
  type = "website",
  publishedTime,
  modifiedTime,
  author = "Elena Rodriguez",
  section,
  tags = [],
}: SEOProps): Metadata {
  const baseUrl = "https://elenarodriquezphotography.com"
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl
  const fullTitle = title
    ? `${title} | Elena Rodriguez Photography`
    : "Elena Rodriguez Photography | Award-Winning Wedding & Portrait Photographer"

  const defaultDescription =
    "Award-winning professional photographer specializing in luxury weddings, intimate portraits, and lifestyle photography. Based in San Francisco, serving clients worldwide."

  const allKeywords = [
    "Elena Rodriguez",
    "photography",
    "photographer",
    "San Francisco",
    "wedding",
    "portrait",
    "professional",
    ...keywords,
  ]

  return {
    title: fullTitle,
    description: description || defaultDescription,
    keywords: allKeywords,
    authors: [{ name: author, url: baseUrl }],
    creator: author,
    publisher: "Elena Rodriguez Photography",
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
      type: type as any,
      locale: "en_US",
      url: fullUrl,
      siteName: "Elena Rodriguez Photography",
      title: fullTitle,
      description: description || defaultDescription,
      images: [
        {
          url: `${baseUrl}${image}`,
          width: 1200,
          height: 630,
          alt: title || "Elena Rodriguez Photography",
          type: "image/jpeg",
        },
      ],
      ...(type === "article" && {
        publishedTime,
        modifiedTime,
        authors: [author],
        section,
        tags,
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: description || defaultDescription,
      images: [`${baseUrl}${image}`],
      creator: "@elena_photo",
      site: "@elena_photo",
    },
    alternates: {
      canonical: fullUrl,
    },
  }
}
