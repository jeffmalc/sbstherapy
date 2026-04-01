import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Gamepad2, CheckCircle, Phone, ArrowLeft, Smile, Heart, Users, Trophy } from "lucide-react";
import recHeroImage from "@/assets/services/therapeutic-recreation-hero.jpg";
import { linkifyCities } from "@/lib/cityLinks";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TherapeuticRecreation = () => {
  const benefits = [
    "Social skill development through structured play",
    "Emotional regulation and coping strategies",
    "Physical fitness and motor skill improvement",
    "Increased self-confidence and self-esteem",
    "Community integration and leisure skills",
    "Stress reduction and enjoyment",
    "Improved attention and focus",
    "Development of lifelong hobbies and interests",
    "Enhanced quality of life",
  ];

  const activities = [
    {
      title: "Sports & Physical Activities",
      description: "Adapted sports, swimming, yoga, and movement activities that build fitness while having fun.",
      icon: Trophy,
    },
    {
      title: "Creative Arts",
      description: "Art, music, drama, and other creative activities that support self-expression and skill development.",
      icon: Heart,
    },
    {
      title: "Social Recreation",
      description: "Games, group activities, and community outings that build social skills in natural settings.",
      icon: Users,
    },
    {
      title: "Leisure Education",
      description: "Teaching children to independently engage in recreational activities and hobbies.",
      icon: Smile,
    },
  ];

  const faqs = [
    {
      question: "What is therapeutic recreation?",
      answer: "Therapeutic recreation (also called recreational therapy) uses recreational activities as a treatment modality to improve physical, cognitive, emotional, and social functioning. For children with autism, therapeutic recreation provides opportunities to develop skills in a fun, engaging way while building interests that can enhance quality of life."
    },
    {
      question: "How is therapeutic recreation different from just playing?",
      answer: "While therapeutic recreation involves play and recreational activities, it is goal-directed and facilitated by trained recreation therapists. Activities are carefully selected and adapted to address specific therapeutic goals. The therapist assesses your child's needs, develops individualized goals, implements activities designed to meet those goals, and monitors progress."
    },
    {
      question: "What kinds of activities are included in therapeutic recreation?",
      answer: "Therapeutic recreation includes a wide range of activities such as sports and physical activities, creative arts (art, music, drama), games, social activities, community outings, nature-based activities, and leisure education. Activities are selected based on your child's interests, goals, and developmental level."
    },
    {
      question: "Can therapeutic recreation help with social skills?",
      answer: "Yes! Therapeutic recreation is excellent for social skill development because it provides natural opportunities to practice social interactions. Through group activities, games, and community outings, children learn turn-taking, cooperation, sportsmanship, communication, and relationship-building in motivating, real-world contexts."
    },
    {
      question: "My child has limited interests. Can therapeutic recreation help?",
      answer: "Absolutely. Many children with autism have restricted interests or difficulty engaging in typical recreational activities. Our recreation therapists are skilled at building on existing interests while gradually introducing new activities. We adapt activities to meet your child where they are and help them discover new sources of enjoyment."
    },
    {
      question: "Is therapeutic recreation covered by funding or insurance?",
      answer: "Therapeutic recreation may be covered through the Ontario Autism Program (OAP) core clinical services funding, as it can address social and emotional goals. Some private insurance plans also cover recreational therapy. Contact us to discuss your specific funding options."
    },
    {
      question: "Can you help my child participate in community recreation programs?",
      answer: "Yes! Community integration is a key goal of therapeutic recreation. We can help your child develop the skills needed to participate in community recreation programs, provide support during community activities, and work with community recreation providers to ensure appropriate accommodations are in place."
    },
    {
      question: "What qualifications do your recreation therapists have?",
      answer: "Our therapeutic recreation specialists hold degrees in Therapeutic Recreation and are certified or eligible for certification. They have specialized training in working with children with autism and developmental disabilities, and receive ongoing supervision and professional development."
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
    "name": "Therapeutic Recreation for Autism",
    "alternateName": ["Recreational Therapy", "Play Therapy", "Adaptive Recreation"],
    "description": "Therapeutic recreation services for children with autism in the Greater Toronto Area. Develop social, emotional, and physical skills through engaging recreational activities.",
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
    "serviceType": "Therapeutic Recreation",
    "audience": {
      "@type": "Audience",
      "audienceType": "Children with Autism Spectrum Disorder"
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
      { "@type": "ListItem", "position": 3, "name": "Therapeutic Recreation", "item": "https://sidebysidetherapy.ca/services/therapeutic-recreation" }
    ]
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Therapeutic Recreation for Autism Toronto | Side by Side Therapy</title>
        <meta name="description" content="Therapeutic recreation for children with autism in Toronto & GTA. Develop social, emotional, and physical skills through fun recreational activities. Free consultation: 647-955-5995" />
        <meta name="keywords" content="therapeutic recreation Toronto, recreational therapy autism, play therapy, social skills activities, autism recreation, adaptive recreation GTA" />
        <link rel="canonical" href="https://sidebysidetherapy.ca/services/therapeutic-recreation" />
        <meta property="og:title" content="Therapeutic Recreation for Autism Toronto | Side by Side Therapy" />
        <meta property="og:description" content="Therapeutic recreation for children with autism. Develop skills through fun recreational activities." />
        <meta property="og:url" content="https://sidebysidetherapy.ca/services/therapeutic-recreation" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://sidebysidetherapy.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Therapeutic Recreation Toronto | Side by Side Therapy" />
        <meta name="twitter:description" content="Recreational therapy for children with autism in Toronto & GTA." />
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
        <section className="py-16 md:py-24 bg-gradient-to-br from-violet-100 to-purple-50">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-violet-500/20 flex items-center justify-center">
                    <Gamepad2 className="h-8 w-8 text-violet-600" />
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold text-foreground">
                    Therapeutic Recreation
                  </h1>
                </div>
                
                <p className="text-xl text-muted-foreground mb-6">
                  Our Recreation Therapists use the power of play and recreational activities to help your child develop social, emotional, cognitive, and physical skills. Therapy has never been so much fun!
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
                  src={recHeroImage}
                  alt="Children playing outdoors in a therapeutic recreation setting"
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
              <h2 className="text-2xl md:text-3xl font-bold mb-6">The Power of Play</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  Therapeutic recreation recognizes that play and leisure activities are essential to child development and quality of life. For children with autism who may struggle with typical play or have limited leisure interests, therapeutic recreation provides structured opportunities to develop new skills and discover new sources of enjoyment.
                </p>
                <p className="mb-4">
                  Our certified therapeutic recreation specialists design individualized programs that tap into your child's natural interests and motivations. Whether your child loves video games, sports, art, music, or nature, we build on those interests to address therapeutic goals. Activities are carefully adapted to ensure success while providing appropriate challenge.
                </p>
                <p>
                  Beyond skill development, therapeutic recreation enhances overall quality of life. Children learn to manage stress through enjoyable activities, develop friendships through shared interests, and build the skills needed to participate in community recreation programs independently. We believe every child deserves access to the joy and benefits of recreation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Benefits of Therapeutic Recreation</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Therapeutic recreation provides numerous benefits that extend into all areas of life.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-xl shadow-sm border">
                  <CheckCircle className="h-5 w-5 text-violet-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
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
                Find answers to common questions about therapeutic recreation.
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

        <ServiceAreasSection serviceName="Therapeutic Recreation" />

        {/* CTA */}
        <section className="py-16 md:py-20 gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Let the Fun Begin!</h2>
            <p className="mb-8 max-w-2xl mx-auto opacity-90">
              Contact us today to learn how therapeutic recreation can help your child develop new skills while having a great time.
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

export default TherapeuticRecreation;