import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Mail, ArrowRight, CheckCircle2, Clock, Heart, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getServiceAreaBySlug, serviceAreas, regions } from "@/data/serviceAreas";

const services = [
  {
    name: "ABA Therapy",
    description: "Evidence-based Applied Behaviour Analysis to build essential skills",
    link: "/services/aba-therapy"
  },
  {
    name: "Speech Therapy",
    description: "Communication and language development support",
    link: "/services/speech-therapy"
  },
  {
    name: "Occupational Therapy",
    description: "Daily living skills and sensory integration",
    link: "/services/occupational-therapy"
  },
  {
    name: "Therapeutic Recreation",
    description: "Fun, engaging activities that promote learning",
    link: "/services/therapeutic-recreation"
  },
  {
    name: "Respite Services",
    description: "Quality care and family support when you need a break",
    link: "/services/respite-services"
  }
];

const benefits = [
  { icon: Heart, title: "Personalized Care", desc: "Therapy tailored to your child's unique needs" },
  { icon: MapPin, title: "In-Home Convenience", desc: "No travel needed - we come to you" },
  { icon: Users, title: "Family Involvement", desc: "Parents are partners in the therapy process" },
  { icon: Clock, title: "Flexible Scheduling", desc: "Sessions that fit your family's routine" }
];

// Generate city-specific FAQs
const generateCityFAQs = (cityName: string, regionName: string) => [
  {
    question: `What autism therapy services are available in ${cityName}?`,
    answer: `Side by Side Therapy offers comprehensive in-home autism services in ${cityName}, including ABA therapy, speech therapy, occupational therapy, therapeutic recreation, and respite services. All our therapists are certified professionals who come directly to your home.`
  },
  {
    question: `Is ABA therapy in ${cityName} covered by OAP funding?`,
    answer: `Yes! Our ABA therapy and other autism services in ${cityName} are eligible for Ontario Autism Program (OAP) funding. We're an approved OAP provider and can help families navigate the funding application process.`
  },
  {
    question: `How do I get started with autism therapy in ${cityName}?`,
    answer: `Getting started is easy! Call us at 647-955-5995 for a free 30-minute consultation. We'll discuss your child's needs, explain our services, and create a personalized therapy plan for your family in ${cityName}.`
  },
  {
    question: `Do you provide in-home therapy services in ${cityName}?`,
    answer: `Yes, all our autism therapy services in ${cityName} are provided in-home. Our therapists travel throughout ${cityName} and the ${regionName} Region to deliver therapy in the comfort and familiarity of your own home.`
  },
  {
    question: `What age groups do you serve in ${cityName}?`,
    answer: `We provide autism therapy services to children of all ages in ${cityName}. Our team includes specialists experienced in working with toddlers, school-age children, and adolescents with autism spectrum disorder.`
  },
  {
    question: `How often are therapy sessions in ${cityName}?`,
    answer: `Therapy frequency in ${cityName} depends on your child's individual needs and goals. We offer flexible scheduling including comprehensive programs (multiple sessions per week) and focused intervention models. We'll work with your family to create a schedule that works for you.`
  }
];

// Generate comprehensive keywords for each city
const generateCityKeywords = (cityName: string, regionName: string, nearbyAreas: string[]) => {
  const baseKeywords = [
    `autism therapy ${cityName}`,
    `ABA therapy ${cityName}`,
    `ABA therapist ${cityName}`,
    `applied behaviour analysis ${cityName}`,
    `speech therapy ${cityName}`,
    `speech therapist ${cityName}`,
    `speech language pathologist ${cityName}`,
    `occupational therapy ${cityName}`,
    `OT ${cityName}`,
    `autism services ${cityName}`,
    `autism treatment ${cityName}`,
    `autism support ${cityName}`,
    `autism help ${cityName}`,
    `child therapy ${cityName}`,
    `pediatric therapy ${cityName}`,
    `in-home therapy ${cityName}`,
    `home-based therapy ${cityName}`,
    `BCBA ${cityName}`,
    `behaviour therapy ${cityName}`,
    `behavioral therapy ${cityName}`,
    `autism spectrum disorder ${cityName}`,
    `ASD therapy ${cityName}`,
    `developmental therapy ${cityName}`,
    `early intervention ${cityName}`,
    `OAP funding ${cityName}`,
    `Ontario Autism Program ${cityName}`,
    `respite care ${cityName}`,
    `therapeutic recreation ${cityName}`,
    `social skills training ${cityName}`,
    `autism therapy ${regionName} Region`,
    `ABA therapy ${regionName}`,
    `autism services GTA`,
    `autism therapy near me`,
    `best autism therapy ${cityName}`,
    `autism therapist near ${cityName}`
  ];

  // Add nearby area keywords
  nearbyAreas.forEach(area => {
    baseKeywords.push(`autism therapy near ${area}`);
    baseKeywords.push(`ABA therapy ${area}`);
  });

  return baseKeywords.join(", ");
};

const ServiceAreaPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const area = getServiceAreaBySlug(slug || "");

  if (!area) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Service Area Not Found</h1>
            <Link to="/" className="text-primary hover:underline">Return Home</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const region = regions.find(r => r.name === area.region);
  const nearbyServiceAreas = area.nearbyAreas
    .map(name => serviceAreas.find(a => a.name === name))
    .filter(Boolean);

  const cityFAQs = generateCityFAQs(area.name, area.region);
  const cityKeywords = generateCityKeywords(area.name, area.region, area.nearbyAreas);

  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Side by Side Therapy - ${area.name} Autism Services`,
    "description": area.description,
    "url": `https://sidebysidetherapy.ca/service-area/${area.slug}`,
    "telephone": "+1-647-955-5995",
    "email": "info@sidebysidetherapy.ca",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": area.name,
      "addressRegion": "Ontario",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "addressCountry": "CA"
    },
    "areaServed": {
      "@type": "City",
      "name": area.name,
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": `${area.region} Region, Ontario, Canada`
      }
    },
    "serviceType": [
      "ABA Therapy",
      "Applied Behaviour Analysis",
      "Speech Therapy",
      "Speech-Language Pathology",
      "Occupational Therapy",
      "Autism Services",
      "Therapeutic Recreation",
      "Respite Care"
    ],
    "priceRange": "$$",
    "openingHours": "Mo-Fr 09:00-17:00",
    "sameAs": [
      "https://www.facebook.com/sidebysidetherapy",
      "https://www.instagram.com/sidebysidetherapy"
    ]
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": cityFAQs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Autism Therapy Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Side by Side Therapy",
      "telephone": "+1-647-955-5995"
    },
    "areaServed": {
      "@type": "City",
      "name": area.name
    },
    "description": `Comprehensive in-home autism therapy services in ${area.name} including ABA therapy, speech therapy, and occupational therapy.`,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "areaServed": area.name
    }
  };

  // BreadcrumbList Schema
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
        "name": "Service Areas",
        "item": "https://sidebysidetherapy.ca/#service-area"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": area.name,
        "item": `https://sidebysidetherapy.ca/service-area/${area.slug}`
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Autism Therapy in {area.name} | In-Home ABA, Speech & OT Therapy | Side by Side Therapy</title>
        <meta 
          name="description" 
          content={`Professional in-home autism therapy services in ${area.name}, ${area.region} Region. Expert ABA therapy, speech therapy, occupational therapy & more. OAP-funded. Free consultation: 647-955-5995`} 
        />
        <meta name="keywords" content={cityKeywords} />
        <link rel="canonical" href={`https://sidebysidetherapy.ca/service-area/${area.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`Autism Therapy in ${area.name} | Side by Side Therapy`} />
        <meta property="og:description" content={`In-home autism therapy services in ${area.name}. ABA therapy, speech therapy, OT & more. OAP-funded services available.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://sidebysidetherapy.ca/service-area/${area.slug}`} />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:site_name" content="Side by Side Therapy" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Autism Therapy in ${area.name} | Side by Side Therapy`} />
        <meta name="twitter:description" content={`Professional in-home autism therapy in ${area.name}. ABA, speech, OT & more.`} />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content={area.name} />
        
        {/* Schema Markup */}
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className={`py-16 md:py-24 ${region?.color || 'bg-primary'} text-white relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4 text-white/90">
                <MapPin className="h-5 w-5" />
                <span className="text-sm font-medium">{area.region} Region</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Autism Therapy Services in {area.name}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                {area.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <a href="tel:+16479555995">
                    <Phone className="h-5 w-5 mr-2" />
                    Call for Free Consultation
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <a href="mailto:info@sidebysidetherapy.ca">
                    <Mail className="h-5 w-5 mr-2" />
                    Email Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Why Choose Side by Side Therapy in {area.name}?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_8px_25px_-8px_hsl(289_35%_36%_/_0.2)] hover:scale-[1.02] transition-all duration-300">
                  <div className={`w-12 h-12 rounded-lg ${region?.color || 'bg-primary'} flex items-center justify-center mb-4`}>
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Our Services in {area.name}
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              We bring comprehensive autism therapy services directly to your home in {area.name}. 
              All services can be funded through the Ontario Autism Program (OAP).
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.link}
                  className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_8px_25px_-8px_hsl(289_35%_36%_/_0.2)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] group active:scale-[0.98]"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Frequently Asked Questions About Autism Therapy in {area.name}
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Find answers to common questions about our autism therapy services in {area.name}.
            </p>
            <div className="max-w-3xl mx-auto space-y-4">
              {cityFAQs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-lg mb-3 text-primary">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OAP Funding Banner */}
        <section className={`py-12 ${region?.color || 'bg-primary'} text-white`}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-8 w-8 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-1">OAP Funding Available in {area.name}</h3>
                  <p className="text-white/90">
                    Our services in {area.name} are eligible for Ontario Autism Program funding. 
                    We can help you navigate the process.
                  </p>
                </div>
              </div>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/oap">Learn About OAP Funding</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Nearby Areas */}
        {nearbyServiceAreas.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                We Also Serve Nearby Areas
              </h2>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
                In addition to {area.name}, our therapists provide services throughout the {area.region} Region and surrounding areas.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {nearbyServiceAreas.map((nearby) => (
                  nearby && (
                    <Link
                      key={nearby.slug}
                      to={`/service-area/${nearby.slug}`}
                      className={`px-4 py-2 rounded-full ${region?.tagColor || 'bg-primary/90'} text-white font-medium hover:opacity-90 transition-all duration-200 hover:scale-110 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_hsl(289_35%_36%_/_0.3)] flex items-center gap-2 active:scale-100`}
                    >
                      <MapPin className="h-4 w-4" />
                      {nearby.name}
                    </Link>
                  )
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Get Started in {area.name}?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation. Our team is ready to discuss how we can support your child's development 
              with personalized, in-home therapy services in {area.name}.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="tel:+16479555995">
                  <Phone className="h-5 w-5 mr-2" />
                  Call 647-955-5995
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/faq">View FAQ</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceAreaPage;
