import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { HandHeart, CheckCircle, Phone, ArrowLeft, Paintbrush, Activity, Eye, Home } from "lucide-react";
import otHeroImage from "@/assets/services/occupational-therapy-hero.jpg";
import { linkifyCities } from "@/lib/cityLinks";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const OccupationalTherapy = () => {
  const services = [
    {
      title: "Fine Motor Skills",
      description: "Developing hand strength, coordination, and dexterity for writing, cutting, buttoning, and other precise movements.",
      icon: Paintbrush,
    },
    {
      title: "Sensory Processing",
      description: "Helping children who are over or under-responsive to sensory input regulate and process sensory information effectively.",
      icon: Activity,
    },
    {
      title: "Visual Motor Integration",
      description: "Coordinating visual perception with motor output for tasks like copying, catching, and navigating spaces.",
      icon: Eye,
    },
    {
      title: "Daily Living Skills",
      description: "Building independence in self-care activities including dressing, feeding, toileting, and hygiene routines.",
      icon: Home,
    },
  ];

  const areas = [
    "Fine motor skills (writing, cutting, buttoning)",
    "Gross motor coordination and balance",
    "Sensory processing and regulation",
    "Self-care skills (dressing, feeding, hygiene)",
    "Visual motor integration",
    "Executive functioning and organization",
    "Handwriting and pencil grip",
    "Play skills and motor planning",
    "Environmental modifications",
  ];

  const sensoryStrategies = [
    {
      title: "Sensory Diets",
      description: "Individualized plans of sensory activities scheduled throughout the day to help maintain optimal arousal and attention.",
    },
    {
      title: "Environmental Modifications",
      description: "Recommendations for adapting home, school, or community environments to support your child's sensory needs.",
    },
    {
      title: "Calming Techniques",
      description: "Teaching self-regulation strategies your child can use when feeling overwhelmed or dysregulated.",
    },
    {
      title: "Sensory Tools",
      description: "Identifying and recommending appropriate sensory tools and equipment to support regulation.",
    },
  ];

  const faqs = [
    {
      question: "What is occupational therapy for children with autism?",
      answer: "Occupational therapy (OT) for children with autism helps them participate in the activities or 'occupations' that are important to them—playing, learning, self-care, and social participation. OTs address challenges in sensory processing, motor skills, daily living activities, and self-regulation that may be interfering with your child's ability to function at home, school, and in the community."
    },
    {
      question: "What is sensory processing disorder and how does OT help?",
      answer: "Sensory processing disorder (SPD) occurs when the brain has difficulty receiving and responding to sensory information. Children may be over-responsive (avoiding sensory input), under-responsive (seeking intense input), or have difficulty with sensory discrimination. OTs are experts in sensory processing and use evidence-based interventions to help children regulate their responses to sensory input and function more effectively."
    },
    {
      question: "Why does my child have difficulty with handwriting?",
      answer: "Handwriting challenges can stem from many factors including fine motor weakness, visual-motor integration difficulties, sensory processing issues, or poor postural control. Occupational therapists assess all these areas to determine the root cause of handwriting difficulties and develop targeted interventions. We may work on underlying skills, teach compensatory strategies, or recommend accommodations."
    },
    {
      question: "Can occupational therapy help with picky eating?",
      answer: "Yes! Many children with autism have feeding challenges related to sensory sensitivities, oral motor difficulties, or rigid routines around food. OTs with training in feeding therapy can help expand your child's food repertoire using gradual exposure, sensory-based strategies, and behavioral approaches. We work closely with families to make mealtimes less stressful."
    },
    {
      question: "What happens in an occupational therapy session?",
      answer: "OT sessions are typically play-based and child-led, making therapy fun and engaging. Activities are designed to address specific goals while feeling like play to your child. Sessions may include sensory activities, fine motor tasks, gross motor games, self-care practice, and parent coaching. We adapt activities based on your child's interests and needs."
    },
    {
      question: "How is OT different from physical therapy?",
      answer: "While there is some overlap, occupational therapy focuses on helping children participate in daily activities and addresses fine motor skills, sensory processing, and self-care. Physical therapy focuses more on gross motor skills, strength, balance, and mobility. Many children with autism benefit from both OT and PT, and therapists often collaborate to provide comprehensive care."
    },
    {
      question: "How long will my child need occupational therapy?",
      answer: "The duration of OT varies based on your child's needs and goals. Some children may need short-term therapy to address specific skills, while others benefit from longer-term support. We regularly reassess progress and adjust treatment plans. Many skills learned in OT become part of your child's daily routines, reducing the need for ongoing therapy."
    },
    {
      question: "Can you help with toilet training?",
      answer: "Yes, OTs can help with toilet training, especially when sensory processing or motor planning challenges are involved. We assess the underlying factors affecting toilet training success and develop individualized strategies. This may include sensory modifications, visual supports, routine establishment, and addressing any fears or anxieties around toileting."
    },
    {
      question: "What is a sensory diet?",
      answer: "A sensory diet is a personalized plan of sensory activities and strategies scheduled throughout the day to help your child maintain optimal arousal, attention, and regulation. Just like a food diet, a sensory diet provides the right 'nutrients' (sensory input) your child needs to function at their best. Our OTs design customized sensory diets for each child."
    },
    {
      question: "Does my child have sensory processing disorder?",
      answer: "Signs of sensory processing difficulties include extreme reactions to sounds, textures, or lights; seeking intense movement or pressure; difficulty with transitions; poor body awareness; and challenges with coordination. If you're concerned, our OTs can conduct a comprehensive sensory assessment to identify your child's sensory profile and develop appropriate interventions."
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
    "@type": "MedicalTherapy",
    "name": "Occupational Therapy for Autism",
    "alternateName": ["Pediatric OT", "Sensory Integration Therapy", "Sensory Processing Therapy"],
    "description": "Occupational therapy for children with autism in the Greater Toronto Area. Address motor skills, sensory processing, and daily living skills with experienced OTs.",
    "medicineSystem": "WesternConventional",
    "relevantSpecialty": "OccupationalTherapy",
    "image": "https://sidebysidetherapy.ca/og-image.png",
    "provider": {
      "@type": "MedicalOrganization",
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
      { "@type": "City", "name": "Markham" },
      { "@type": "City", "name": "Richmond Hill" }
    ],
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "CAD"
    },
    "audience": {
      "@type": "MedicalAudience",
      "audienceType": "Children with sensory processing and motor skill challenges"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Side by Side Therapy",
    "url": "https://sidebysidetherapy.ca",
    "telephone": "+1-647-955-5995",
    "medicalSpecialty": ["OccupationalTherapy", "Pediatrics"]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sidebysidetherapy.ca" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://sidebysidetherapy.ca/#services" },
      { "@type": "ListItem", "position": 3, "name": "Occupational Therapy", "item": "https://sidebysidetherapy.ca/services/occupational-therapy" }
    ]
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Occupational Therapy for Autism Toronto | Sensory Processing | Side by Side</title>
        <meta name="description" content="Expert occupational therapy for children with autism in Toronto & GTA. Sensory processing, fine motor skills, daily living skills. Free consultation: 647-955-5995" />
        <meta name="keywords" content="occupational therapy Toronto, OT autism, sensory processing therapy, fine motor skills, sensory integration, pediatric OT, autism therapy GTA" />
        <link rel="canonical" href="https://sidebysidetherapy.ca/services/occupational-therapy" />
        <meta property="og:title" content="Occupational Therapy for Autism Toronto | Side by Side Therapy" />
        <meta property="og:description" content="Expert occupational therapy for children with autism. Sensory processing, fine motor skills, daily living." />
        <meta property="og:url" content="https://sidebysidetherapy.ca/services/occupational-therapy" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://sidebysidetherapy.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Occupational Therapy Toronto | Side by Side Therapy" />
        <meta name="twitter:description" content="Expert OT for children with autism. Sensory processing, motor skills, self-care." />
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
        <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-100 to-teal-50">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
                    <HandHeart className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold text-foreground">
                    Occupational Therapy
                  </h1>
                </div>
                
                <p className="text-xl text-muted-foreground mb-6">
                  Our Occupational Therapists help children with autism develop the skills they need to participate fully in everyday activities. From sensory processing to fine motor skills to daily routines, we address the challenges that may be holding your child back.
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
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={otHeroImage}
                  alt="Occupational therapist helping a child with sensory play activities"
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
              <h2 className="text-2xl md:text-3xl font-bold mb-6">What is Occupational Therapy?</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  Occupational therapy helps children participate in the activities—or "occupations"—that are important to them. For children, these occupations include playing, learning, self-care, and social participation. When sensory processing differences, motor skill challenges, or other difficulties interfere with these activities, occupational therapy can help.
                </p>
                <p className="mb-4">
                  Many children with autism experience challenges with sensory processing—they may be over-responsive to certain sounds, textures, or movements, or they may seek intense sensory input. These sensory differences can significantly impact daily functioning, from tolerating clothing to participating in classroom activities. Our OTs are experts in sensory processing and use evidence-based interventions to help children regulate their responses.
                </p>
                <p>
                  Beyond sensory processing, our OTs address fine and gross motor skills, visual-motor integration, self-care skills, and executive functioning. We work with families to set meaningful goals and develop strategies that can be implemented across home, school, and community settings. Our play-based approach makes therapy engaging while building the skills your child needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Address */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Areas We Address</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our comprehensive OT services address the skills children need for success at home, school, and in the community.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {areas.map((area, index) => (
                <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-xl shadow-sm border">
                  <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sensory Strategies */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Sensory Processing Support</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We help children and families understand and manage sensory processing differences.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {sensoryStrategies.map((strategy, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-soft border">
                  <h3 className="font-bold text-lg mb-2 text-emerald-600">{strategy.title}</h3>
                  <p className="text-muted-foreground">{strategy.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about occupational therapy for children with autism.
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

        <ServiceAreasSection serviceName="Occupational Therapy" />

        {/* CTA */}
        <section className="py-16 md:py-20 gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Help Your Child Thrive</h2>
            <p className="mb-8 max-w-2xl mx-auto opacity-90">
              Contact us today to schedule a free consultation and learn how occupational therapy can help your child participate more fully in daily life.
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

export default OccupationalTherapy;