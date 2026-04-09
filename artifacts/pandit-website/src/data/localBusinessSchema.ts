/**
 * Schema.org LocalBusiness — Pandit / Vedic services in Nagpur.
 * @see https://schema.org/LocalBusiness
 */
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  additionalType: "https://schema.org/ProfessionalService",
  name: "Pandit Devesh Darbhe (Darbhe Guruji)",
  alternateName: ["Sacred Guidance", "Darbhe Guruji"],
  description:
    "Experienced Hindu pandit in Nagpur offering Vedic pujas at your home — Satyanarayan Puja, Griha Pravesh, Vastu Shanti, Namkaran, marriage rituals, and astrology consultations.",
  url: "https://www.darbheguruji.com",
  telephone: "+91-8421115719",
  email: "darbhe123@gmail.com",
  image: [
    "https://www.darbheguruji.com/og-image.jpg",
    "https://www.darbheguruji.com/favicon-192.png",
  ],
  logo: "https://www.darbheguruji.com/favicon-192.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot 10, Sneh Nagar, Near Khamla",
    addressLocality: "Nagpur",
    addressRegion: "Maharashtra",
    postalCode: "440015",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 21.1466,
    longitude: 79.0888,
  },
  areaServed: [
    { "@type": "City", name: "Nagpur" },
    {
      "@type": "AdministrativeArea",
      name: "Nagpur district and nearby localities",
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Bank transfer",
  knowsAbout: [
    "Satyanarayan Puja",
    "Griha Pravesh Puja",
    "Vastu Shanti",
    "Vedic astrology",
    "Hindu marriage rituals",
    "Namkaran",
    "Rudrabhishek",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Puja and consultation services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Satyanarayan Puja",
          areaServed: "Nagpur",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Griha Pravesh Puja",
          areaServed: "Nagpur",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Vastu Shanti and consultation",
          areaServed: "Nagpur",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Vedic astrology consultation",
          areaServed: "Nagpur",
        },
      },
    ],
  },
};

