interface StructuredDataProps {
  type: "Organization" | "Person" | "LocalBusiness" | "Article" | "ImageObject"
  data: any
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

// Usage examples:
export const OrganizationSchema = () => (
  <StructuredData
    type="Organization"
    data={{
      name: "Elena Rodriguez Photography",
      url: "https://elenarodriquezphotography.com",
      logo: "https://elenarodriquezphotography.com/images/logo.png",
      image: "/images/elina.webp",
      description: "Award-winning professional photographer specializing in luxury weddings and portraits",
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Photography Lane",
        addressLocality: "San Francisco",
        addressRegion: "CA",
        postalCode: "94102",
        addressCountry: "US",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-415-555-1234",
        contactType: "customer service",
        email: "elena@photography.com",
      },
      sameAs: [
        "https://www.instagram.com/elena_photography",
        "https://www.facebook.com/elenarodriguezphotography",
        "https://www.twitter.com/elena_photo",
      ],
    }}
  />
)

export const PersonSchema = () => (
  <StructuredData
    type="Person"
    data={{
      name: "Elena Rodriguez",
      jobTitle: "Professional Photographer",
      image: "https://elenarodriquezphotography.com/images/elena-portrait.jpg",
      url: "https://elenarodriquezphotography.com/about",
      worksFor: {
        "@type": "Organization",
        name: "Elena Rodriguez Photography",
      },
      knowsAbout: ["Wedding Photography", "Portrait Photography", "Event Photography", "Commercial Photography"],
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Art Institute of California",
      },
    }}
  />
)
