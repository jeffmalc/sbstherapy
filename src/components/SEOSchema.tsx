import { Helmet } from "react-helmet-async";

const SEOSchema = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": "https://sidebysidetherapy.ca/#organization",
    "name": "Side by Side Therapy",
    "alternateName": "Side by Side ABA Therapy",
    "url": "https://sidebysidetherapy.ca",
    "logo": "https://sidebysidetherapy.ca/logo.png",
    "description": "Leading ABA therapy and autism support services provider in Toronto. Offering Applied Behaviour Analysis, Speech Therapy, Occupational Therapy, and more for children with autism.",
    "telephone": "+1-647-955-5995",
    "email": "info@sidebysidetherapy.ca",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Toronto",
      "addressRegion": "ON",
      "addressCountry": "CA"
    },
    "areaServed": [
      { "@type": "City", "name": "Ajax", "containedInPlace": { "@type": "AdministrativeArea", "name": "Durham Region" } },
      { "@type": "City", "name": "Aurora", "containedInPlace": { "@type": "AdministrativeArea", "name": "York Region" } },
      { "@type": "City", "name": "Brampton", "containedInPlace": { "@type": "AdministrativeArea", "name": "Peel Region" } },
      { "@type": "City", "name": "Burlington", "containedInPlace": { "@type": "AdministrativeArea", "name": "Halton Region" } },
      { "@type": "City", "name": "Georgina", "containedInPlace": { "@type": "AdministrativeArea", "name": "York Region" } },
      { "@type": "City", "name": "King", "containedInPlace": { "@type": "AdministrativeArea", "name": "York Region" } },
      { "@type": "City", "name": "Markham", "containedInPlace": { "@type": "AdministrativeArea", "name": "York Region" } },
      { "@type": "City", "name": "Milton", "containedInPlace": { "@type": "AdministrativeArea", "name": "Halton Region" } },
      { "@type": "City", "name": "Mississauga", "containedInPlace": { "@type": "AdministrativeArea", "name": "Peel Region" } },
      { "@type": "City", "name": "Newmarket", "containedInPlace": { "@type": "AdministrativeArea", "name": "York Region" } },
      { "@type": "City", "name": "Oakville", "containedInPlace": { "@type": "AdministrativeArea", "name": "Halton Region" } },
      { "@type": "City", "name": "Oshawa", "containedInPlace": { "@type": "AdministrativeArea", "name": "Durham Region" } },
      { "@type": "City", "name": "Pickering", "containedInPlace": { "@type": "AdministrativeArea", "name": "Durham Region" } },
      { "@type": "City", "name": "Richmond Hill", "containedInPlace": { "@type": "AdministrativeArea", "name": "York Region" } },
      { "@type": "City", "name": "Stouffville", "containedInPlace": { "@type": "AdministrativeArea", "name": "York Region" } },
      { "@type": "City", "name": "Thornhill", "containedInPlace": { "@type": "AdministrativeArea", "name": "York Region" } },
      { "@type": "City", "name": "Toronto", "containedInPlace": { "@type": "AdministrativeArea", "name": "Ontario" } },
      { "@type": "City", "name": "Uxbridge", "containedInPlace": { "@type": "AdministrativeArea", "name": "Durham Region" } },
      { "@type": "City", "name": "Vaughan", "containedInPlace": { "@type": "AdministrativeArea", "name": "York Region" } },
      { "@type": "City", "name": "Whitby", "containedInPlace": { "@type": "AdministrativeArea", "name": "Durham Region" } },
      { "@type": "AdministrativeArea", "name": "Durham Region", "containedInPlace": { "@type": "AdministrativeArea", "name": "Ontario" } },
      { "@type": "AdministrativeArea", "name": "Halton Region", "containedInPlace": { "@type": "AdministrativeArea", "name": "Ontario" } },
      { "@type": "AdministrativeArea", "name": "Peel Region", "containedInPlace": { "@type": "AdministrativeArea", "name": "Ontario" } },
      { "@type": "AdministrativeArea", "name": "York Region", "containedInPlace": { "@type": "AdministrativeArea", "name": "Ontario" } }
    ],
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/sidebysidetherapy",
      "https://www.instagram.com/sidebysidetherapy",
      "https://www.linkedin.com/company/sidebysidetherapy"
    ],
    "medicalSpecialty": [
      "AppliedBehaviorAnalysis",
      "SpeechPathology",
      "OccupationalTherapy",
      "BehavioralTherapy"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "BCBA",
        "name": "Board Certified Behavior Analyst"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "OAP",
        "name": "Ontario Autism Program Approved Provider"
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://sidebysidetherapy.ca/#localbusiness",
    "name": "Side by Side Therapy",
    "image": "https://sidebysidetherapy.ca/logo.png",
    "telephone": "+1-647-955-5995",
    "email": "info@sidebysidetherapy.ca",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Toronto",
      "addressRegion": "Ontario",
      "addressCountry": "Canada"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.6532,
      "longitude": -79.3832
    },
    "url": "https://sidebysidetherapy.ca",
    "priceRange": "$$",
    "areaServed": [
      "Ajax", "Aurora", "Brampton", "Burlington", "Durham", "Georgina", "Halton",
      "King", "Markham", "Milton", "Mississauga", "Newmarket", "Oakville", "Oshawa",
      "Peel", "Pickering", "Richmond Hill", "Stouffville", "Thornhill", "Toronto",
      "Uxbridge", "Vaughan", "Whitby", "York Region"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "50"
    }
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Side by Side Therapy Services",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "MedicalTherapy",
          "name": "Applied Behaviour Analysis (ABA) Therapy",
          "description": "Evidence-based therapy to teach helpful behaviours while reducing challenging ones for children with autism.",
          "url": "https://sidebysidetherapy.ca/#services"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "MedicalTherapy",
          "name": "Speech Therapy",
          "description": "Speech-Language Pathologists work to improve verbal and nonverbal communication skills.",
          "url": "https://sidebysidetherapy.ca/#services"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "MedicalTherapy",
          "name": "Occupational Therapy",
          "description": "Addressing challenges that prevent children from being successful at school and home.",
          "url": "https://sidebysidetherapy.ca/#services"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Service",
          "name": "Psycho-Educational Assessments",
          "description": "Standardized testing to identify strengths and areas for growth for school accommodations.",
          "url": "https://sidebysidetherapy.ca/#services"
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Service",
          "name": "Social Skills Training",
          "description": "Dedicated learning opportunities to help children practice essential social skills.",
          "url": "https://sidebysidetherapy.ca/#services"
        }
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ABA Therapy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Applied Behaviour Analysis (ABA) is an evidence-based therapy that focuses on teaching and increasing helpful behaviours while reducing challenging behaviours in children with autism. It uses positive reinforcement and systematic teaching methods."
        }
      },
      {
        "@type": "Question",
        "name": "Is Side by Side Therapy an OAP approved provider?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Side by Side Therapy is an approved Ontario Autism Program (OAP) provider, helping families navigate funding options and access high-quality therapeutic services."
        }
      },
      {
        "@type": "Question",
        "name": "What services does Side by Side Therapy offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer Applied Behaviour Analysis, Speech Therapy, Occupational Therapy, Psycho-Educational Assessments, Therapeutic Recreation, Respite Services, Social Skills Training, and BCBA Mentorship & Supervision."
        }
      },
      {
        "@type": "Question",
        "name": "Where does Side by Side Therapy provide services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide services throughout the Greater Toronto Area, including in-home, in-clinic, and school-based therapy options."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sidebysidetherapy.ca"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://sidebysidetherapy.ca/#services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Contact",
        "item": "https://sidebysidetherapy.ca/#contact"
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>Side by Side Therapy | ABA Therapy & Autism Support in Toronto</title>
      <meta name="title" content="Side by Side Therapy | ABA Therapy & Autism Support in Toronto" />
      <meta name="description" content="Toronto's leading ABA therapy provider. Expert autism support including Applied Behaviour Analysis, Speech Therapy, Occupational Therapy. OAP approved. Free consultation: 647-955-5995" />
      <meta name="keywords" content="ABA therapy Toronto, autism therapy, Applied Behaviour Analysis, speech therapy Toronto, occupational therapy, OAP approved provider, autism support, BCBA, child development therapy" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Side by Side Therapy" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://sidebysidetherapy.ca" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://sidebysidetherapy.ca" />
      <meta property="og:title" content="Side by Side Therapy | ABA Therapy & Autism Support in Toronto" />
      <meta property="og:description" content="Toronto's leading ABA therapy provider. Expert autism support including Applied Behaviour Analysis, Speech Therapy, Occupational Therapy. OAP approved." />
      <meta property="og:image" content="https://sidebysidetherapy.ca/og-image.jpg" />
      <meta property="og:locale" content="en_CA" />
      <meta property="og:site_name" content="Side by Side Therapy" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://sidebysidetherapy.ca" />
      <meta property="twitter:title" content="Side by Side Therapy | ABA Therapy & Autism Support in Toronto" />
      <meta property="twitter:description" content="Toronto's leading ABA therapy provider. Expert autism support. OAP approved. Free consultation: 647-955-5995" />
      <meta property="twitter:image" content="https://sidebysidetherapy.ca/og-image.jpg" />
      
      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="CA-ON" />
      <meta name="geo.placename" content="Toronto" />
      <meta name="geo.position" content="43.6532;-79.3832" />
      <meta name="ICBM" content="43.6532, -79.3832" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(servicesSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

export default SEOSchema;
