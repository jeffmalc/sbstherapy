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

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Side by Side Therapy - ${area.name} Autism Services`,
    "description": area.description,
    "url": `https://sidebysidetherapy.ca/service-area/${area.slug}`,
    "telephone": "+1-647-Xxx-Xxxx",
    "email": "info@sidebysidetherapy.ca",
    "areaServed": {
      "@type": "City",
      "name": area.name,
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": area.region + " Region, Ontario, Canada"
      }
    },
    "serviceType": ["ABA Therapy", "Speech Therapy", "Occupational Therapy", "Autism Services"],
    "priceRange": "$$"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Autism Therapy in {area.name} | In-Home ABA & Speech Therapy | Side by Side Therapy</title>
        <meta 
          name="description" 
          content={`In-home autism therapy services in ${area.name}, ${area.region} Region. ABA therapy, speech therapy, occupational therapy & more. OAP-funded services available. Call today!`} 
        />
        <meta 
          name="keywords" 
          content={`autism therapy ${area.name}, ABA therapy ${area.name}, speech therapy ${area.name}, occupational therapy ${area.name}, autism services ${area.region} Region, OAP funded therapy ${area.name}`} 
        />
        <link rel="canonical" href={`https://sidebysidetherapy.ca/service-area/${area.slug}`} />
        <meta property="og:title" content={`Autism Therapy in ${area.name} | Side by Side Therapy`} />
        <meta property="og:description" content={area.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://sidebysidetherapy.ca/service-area/${area.slug}`} />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
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
                  <a href="tel:+16470000000">
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
                <div key={index} className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow">
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
                  className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group"
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

        {/* OAP Funding Banner */}
        <section className={`py-12 ${region?.color || 'bg-primary'} text-white`}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-8 w-8 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-1">OAP Funding Available</h3>
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
          <section className="py-16 bg-background">
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
                      className={`px-4 py-2 rounded-full ${region?.tagColor || 'bg-primary/90'} text-white font-medium hover:opacity-90 transition-opacity flex items-center gap-2`}
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
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Get Started in {area.name}?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation. Our team is ready to discuss how we can support your child's development 
              with personalized, in-home therapy services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="tel:+16470000000">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
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
