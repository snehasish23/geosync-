export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GeoSync Agency",
  url: "https://www.geosync.agency",
  logo: "https://www.geosync.agency/logo.png",
  description: "Empowering institutions and businesses through smart digital solutions. Specializing in school management systems and comprehensive SEO services.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Innovation Drive",
    addressLocality: "Tech City",
    addressRegion: "TC",
    postalCode: "12345",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-555-123-4567",
    contactType: "Customer Service",
    email: "contact@geosync.agency",
    areaServed: "US",
    availableLanguage: ["en"],
  },
  sameAs: [
    "https://www.facebook.com/geosyncagency",
    "https://www.twitter.com/geosyncagency",
    "https://www.linkedin.com/company/geosyncagency",
  ],
  offers: {
    "@type": "Offer",
    name: "Digital Solutions",
    description: "School management systems and SEO services",
  },
};

export const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.geosync.agency",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: "https://www.geosync.agency#about",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Services",
      item: "https://www.geosync.agency#services",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Contact",
      item: "https://www.geosync.agency#lead",
    },
  ],
};

export const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Digital Solutions",
  provider: {
    "@type": "Organization",
    name: "GeoSync Agency",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Solutions",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "GeoEduSync - School Management System",
          description: "Advanced school automation platform that streamlines administrative tasks, student management, and educational processes.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Local SEO & Business Growth Solutions",
          description: "Comprehensive SEO services exclusively managed by GeoSync Agency to boost online presence and drive sustainable business growth.",
        },
      },
    ],
  },
};

export const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does GeoSync Agency offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GeoSync Agency offers school management systems (GeoEduSync) and comprehensive local SEO services to help businesses and educational institutions transform their digital presence.",
      },
    },
    {
      "@type": "Question",
      name: "What is GeoEduSync?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GeoEduSync is a smart school management system that simplifies school operations with advanced automation and intuitive interfaces. It streamlines administrative tasks, student management, and educational processes.",
      },
    },
    {
      "@type": "Question",
      name: "How can I contact GeoSync Agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can contact us via phone at +1 (555) 123-4567, email at contact@geosync.agency, or fill out the contact form on our website to schedule a consultation.",
      },
    },
  ],
};


