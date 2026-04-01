import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Heart, CheckCircle, Phone, ArrowLeft, Home, Users, Shield, Clock } from "lucide-react";
import respiteHeroImage from "@/assets/services/respite-services-hero.jpg";
import { linkifyCities } from "@/lib/cityLinks";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const RespiteServices = () => {
  const features = [
    "Trained professionals experienced with autism",
    "Engaging, fun activities for your child",
    "In-home or community-based options",
    "Flexible scheduling to meet family needs",
    "Peace of mind knowing your child is safe",
    "Opportunity for siblings to get attention too",
    "Consistency with your child's routines and strategies",
    "Regular communication with families",
    "Emergency and planned respite available",
  ];

  const options = [
    {
      title: "In-Home Respite",
      description: "Respite workers come to your home, providing care in your child's familiar environment while maintaining their routines.",
      icon: Home,
    },
    {
      title: "Community-Based Respite",
      description: "Your child enjoys supervised outings and activities in the community, building skills while having fun.",
      icon: Users,
    },
    {
      title: "Planned Respite",
      description: "Regularly scheduled respite sessions that give your family predictable breaks and your child consistent relationships.",
      icon: Clock,
    },
    {
      title: "Emergency Respite",
      description: "Support when unexpected situations arise and your family needs immediate assistance.",
      icon: Shield,
    },
  ];

  const faqs = [
    {
      question: "What is respite care?",
      answer: "Respite care provides temporary relief for primary caregivers of children with disabilities or special needs. Trained respite workers care for your child while you take a break, attend to other responsibilities, or simply rest and recharge. Respite can be provided in your home, in the community, or at a respite facility."
    },
    {
      question: "Why is respite important for families?",
      answer: "Caring for a child with autism is rewarding but can also be physically and emotionally demanding. Research shows that caregiver burnout is common and can affect the whole family. Regular respite helps prevent burnout, allowing caregivers to maintain their own health and well-being, which ultimately benefits the entire family—including the child receiving care."
    },
    {
      question: "Who provides respite care?",
      answer: "Our respite workers are carefully selected and trained to work with children with autism. They understand autism, positive behavior supports, and how to provide engaging activities tailored to your child's interests and needs. All workers complete background checks and receive ongoing training and supervision."
    },
    {
      question: "Will my child be safe with a respite worker?",
      answer: "Safety is our top priority. All respite workers complete comprehensive background checks, including vulnerable sector screening. They receive training in autism, positive behavior support, and emergency procedures. We carefully match workers with families and provide ongoing supervision. Parents receive regular updates and can always reach the respite worker during sessions."
    },
    {
      question: "What will my child do during respite?",
      answer: "Respite workers engage children in fun, age-appropriate activities based on their interests. This might include playing games, doing crafts, outdoor activities, watching movies, or going on community outings. Activities are planned in consultation with families and adapted to your child's abilities and preferences."
    },
    {
      question: "How do I prepare my child for respite?",
      answer: "We recommend a gradual introduction to respite. This might include meeting the respite worker with you present, starting with short sessions, and building up to longer periods. We work with you to ensure your child is comfortable and to identify strategies that support successful respite sessions. Visual schedules and social stories can also help prepare your child."
    },
    {
      question: "Can respite workers follow my child's routines and strategies?",
      answer: "Absolutely! Consistency is important for children with autism. Before starting respite, we meet with your family to learn about your child's routines, preferences, communication style, and behavioral strategies. Respite workers are trained to implement these consistently, and we maintain regular communication to ensure continuity of care."
    },
    {
      question: "How is respite funded in Ontario?",
      answer: "Respite services may be funded through several sources including: Ontario Autism Program (OAP) caregiver-mediated funding, Developmental Services Ontario (DSO), Assistance for Children with Severe Disabilities (ACSD), private insurance, or self-pay. We can help you navigate funding options and provide documentation for reimbursement."
    },
    {
      question: "How often can we use respite services?",
      answer: "The frequency of respite depends on your family's needs and available funding. Some families use respite weekly for regular breaks, while others use it monthly or for specific occasions. We work with you to develop a respite schedule that meets your family's needs within your available resources."
    },
    {
      question: "Can siblings participate during respite?",
      answer: "Depending on the arrangement, siblings may be included in respite activities, which can provide bonding opportunities. Alternatively, respite can be focused specifically on your child with autism, giving you time to spend with siblings or manage other responsibilities. We discuss your preferences during the intake process."
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Respite Care Services for Autism Families",
    "alternateName": ["Respite Care", "Caregiver Support", "Family Respite"],
    "description": "Respite care services for families of children with autism in the Greater Toronto Area. Give caregivers a break while children enjoy engaging activities with trained professionals.",
    "image": "https://sidebysidetherapy.ca/og-image.png",
    "provider": {
      "@type": "Organization",
      "name": "Side by Side Therapy",
      "telephone": "+1-647-955-5995",
      "email": "info@sidebysidetherapy.ca",
      "url": "https://sidebysidetherapy.ca",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Toronto",
        "addressRegion": "Ontario",
        "addressCountry": "CA"
      }
    },
    "areaServed": [
      { "@type": "City", "name": "Toronto" },
      { "@type": "City", "name": "Mississauga" },
      { "@type": "City", "name": "Brampton" },
      { "@type": "City", "name": "Vaughan" },
      { "@type": "City", "name": "Markham" }
    ],
    "serviceType": "Respite Care",
    "audience": {
      "@type": "Audience",
      "audienceType": "Families of children with autism"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "CAD"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Side by Side Therapy",
    "url": "https://sidebysidetherapy.ca",
    "telephone": "+1-647-955-5995"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sidebysidetherapy.ca" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://sidebysidetherapy.ca/#services" },
      { "@type": "ListItem", "position": 3, "name": "Respite Services", "item": "https://sidebysidetherapy.ca/services/respite-services" }
    ]
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Respite Care Services for Autism Families Toronto | Side by Side Therapy</title>
        <meta name="description" content="Quality respite care for families of children with autism in Toronto & GTA. Trained professionals, flexible scheduling, in-home & community options. Free consultation: 647-955-5995" />
        <meta name="keywords" content="respite care Toronto, autism respite, caregiver support, family respite services, autism family support, in-home respite GTA" />
        <link rel="canonical" href="https://sidebysidetherapy.ca/services/respite-services" />
        <meta property="og:title" content="Respite Care for Autism Families Toronto | Side by Side Therapy" />
        <meta property="og:description" content="Quality respite care for families of children with autism. Trained professionals, flexible scheduling." />
        <meta property="og:url" content="https://sidebysidetherapy.ca/services/respite-services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://sidebysidetherapy.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Respite Services Toronto | Side by Side Therapy" />
        <meta name="twitter:description" content="Respite care for autism families in Toronto & GTA." />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Toronto" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-rose-100 to-pink-50">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-rose-500/20 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-rose-600" />
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold text-foreground">
                    Respite Services
                  </h1>
                </div>
                
                <p className="text-xl text-muted-foreground mb-6">
                  Taking care of a child with autism is a labor of love, but every caregiver needs a break. Our respite services provide you peace of mind while your child enjoys engaging activities with trained professionals who understand their unique needs.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <a href="tel:647-955-5995">
                      <Phone className="h-4 w-4 mr-2" />
                      Free Consultation
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="#faq">View FAQ</a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/prices">View Pricing</Link>
                  </Button>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={respiteHeroImage}
                  alt="Caring respite worker reading a book with a child in a cozy home setting"
                  width={1280}
                  height={864}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Supporting the Whole Family</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  Parenting a child with autism is incredibly rewarding, but it can also be exhausting. The constant advocacy, therapy appointments, behavioral challenges, and hypervigilance can lead to caregiver burnout. Research consistently shows that parents of children with autism experience higher levels of stress than parents of children with other disabilities or typically developing children.
                </p>
                <p className="mb-4">
                  Respite care is not a luxury—it is an essential support that helps families thrive. When caregivers get regular breaks, they have more energy and patience for their child. They can attend to their own health needs, nurture their relationships, and give attention to other children in the family. The whole family benefits when caregivers are rested and recharged.
                </p>
                <p>
                  Our respite workers are more than babysitters—they are trained professionals who understand autism and can meaningfully engage with your child. They follow your child's routines and behavioral strategies, ensuring consistency. Most importantly, they genuinely care about your child and your family. You can rest knowing your child is in capable, caring hands.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">What We Offer</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our respite services are designed to meet your family's unique needs.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-xl shadow-sm border">
                  <CheckCircle className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about our respite services.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-xl border px-6">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {linkifyCities(faq.answer)}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <ServiceAreasSection serviceName="Respite Services" />

        {/* CTA */}
        <section className="py-16 md:py-20 gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">You Deserve a Break</h2>
            <p className="mb-8 max-w-2xl mx-auto opacity-90">
              Contact us today to learn how respite services can support your family. Taking care of yourself is taking care of your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <a href="tel:647-955-5995">
                  <Phone className="h-4 w-4 mr-2" />
                  Call 647-955-5995
                </a>
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <a href="mailto:info@sidebysidetherapy.ca">Email Us</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </PageTransition>
  );
};

export default RespiteServices;