import { CONTACT, SITE_URL } from "./constants";

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: CONTACT.name,
    url: SITE_URL,
    telephone: `+${CONTACT.phone}`,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tuxtla Gutiérrez",
      addressRegion: "Chiapas",
      addressCountry: "MX",
    },
    memberOf: {
      "@type": "Organization",
      name: "RE/MAX Integral",
      url: "https://www.remax.com",
    },
    image: `${SITE_URL}/images/jessi-narcia.jpg`,
    description:
      "Asesora Inmobiliaria afiliada a RE/MAX Integral en Tuxtla Gutiérrez, Chiapas.",
    areaServed: {
      "@type": "State",
      name: "Chiapas",
    },
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${CONTACT.name} - RE/MAX Integral`,
    url: SITE_URL,
    description:
      "Portafolio inmobiliario de propiedades en venta y renta en Tuxtla Gutiérrez, Chiapas.",
    publisher: {
      "@type": "RealEstateAgent",
      name: CONTACT.name,
    },
  };
}

export function getPropertyListSchema(properties) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Portafolio Inmobiliario",
    numberOfItems: properties.length,
    itemListElement: properties.slice(0, 10).map((p, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "RealEstateListing",
        name: p.title,
        description: p.description || `Propiedad en ${p.location}`,
        url: SITE_URL + "/portafolio",
        image: p.image,
        offers: {
          "@type": "Offer",
          priceCurrency: p.price?.toUpperCase().includes("USD") ? "USD" : "MXN",
        },
      },
    })),
  };
}
