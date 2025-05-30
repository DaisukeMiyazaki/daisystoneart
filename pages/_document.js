import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: 'Daisy Stone - Tokyo Tour Guide | Cultural Experiences & Local Adventures',
    description: 'Discover authentic Tokyo with expert-guided tours. Experience hidden temples, specialty coffee culture, traditional sweets making, and unique cultural adventures in Japan\'s capital city.',
    image: 'https://daisystoneart.vercel.app/images/og-image.jpg',
    url: 'https://daisystoneart.vercel.app'
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta name="keywords" content="Tokyo tour guide, Japan cultural tours, Tokyo experiences, traditional Japanese culture, coffee tours Tokyo, temple tours, wagashi making, sento experience, tattoo-friendly Japan" />
        
        {/* Open Graph */}
        <meta property="og:site_name" content="Daisy Stone Tokyo Tours" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Tokyo cultural tour experiences with traditional gardens, coffee culture, and authentic Japanese activities" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@daisystoneart" />
        <meta name="twitter:creator" content="@daisystoneart" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="twitter:image:alt" content="Tokyo cultural tour experiences with traditional gardens, coffee culture, and authentic Japanese activities" />
        
        {/* Additional Meta Tags */}
        <meta name="author" content="Daisy Stone" />
        <meta name="geo.region" content="JP-13" />
        <meta name="geo.placename" content="Tokyo" />
        <meta name="geo.position" content="35.6762;139.6503" />
        <meta name="ICBM" content="35.6762, 139.6503" />
        
        {/* Structured Data for Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristService",
            "name": "Daisy Stone Tokyo Tours",
            "description": meta.description,
            "url": meta.url,
            "image": meta.image,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Tokyo",
              "addressCountry": "JP"
            },
            "email": "dstone1704@gmail.com",
            "founder": {
              "@type": "Person",
              "name": "Daisy Stone"
            },
            "serviceType": "Cultural Tours",
            "areaServed": "Tokyo, Japan",
            "offers": [
              {
                "@type": "Offer",
                "name": "Best of Downtown Tokyo: Nature, Coffee & Sweets",
                "price": "14500",
                "priceCurrency": "JPY"
              },
              {
                "@type": "Offer", 
                "name": "Hidden Temples & Gardens",
                "price": "15000",
                "priceCurrency": "JPY"
              },
              {
                "@type": "Offer",
                "name": "Tokyo After Dark",
                "price": "18000", 
                "priceCurrency": "JPY"
              },
              {
                "@type": "Offer",
                "name": "Tattoo-Friendly Sento & Ramen Experience",
                "price": "7200",
                "priceCurrency": "JPY"
              }
            ]
          })}
        </script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
