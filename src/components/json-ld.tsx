import { site, groups } from "@/content/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "DanceSchool",
    name: site.brand,
    description: "Weekend breaking (breakdance) classes for kids, teens and adult beginners on Brisbane's north side.",
    url: site.url + "/",
    areaServed: site.suburbsServed.map((s) => ({ "@type": "Place", name: `${s}, QLD` })),
    address: { "@type": "PostalAddress", addressLocality: "Brisbane", addressRegion: "QLD", addressCountry: "AU" },
    founder: { "@type": "Person", name: site.instructor },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Breaking classes",
      itemListElement: groups.map((g) => ({ "@type": "Offer", itemOffered: { "@type": "Course", name: `Breaking: ${g.name}`, description: g.focus } })),
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
