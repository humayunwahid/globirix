export function generateMetadata({
  title = "Globirix",
  description = "Professional accounting and financial outsourcing solutions",
  keywords = "accounting, outsourcing, financial services, bookkeeping, payroll",
  ogImage = "/images/logo/feature-image.jpg",
  ogUrl = "https://globirix.com",
  canonical,
  noIndex = false
}) {
  return {
    title,
    description,
    keywords,
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    canonical: canonical || ogUrl,
    openGraph: {
      title,
      description,
      url: ogUrl,
      siteName: 'Globirix',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: canonical || ogUrl,
    },
  }
}