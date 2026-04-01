import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle, Phone, ArrowLeft, Mic, Volume2, BookOpen, Users } from "lucide-react";
import { linkifyCities } from "@/lib/cityLinks";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SpeechTherapy = () => {
  const services = [
    {
      title: "Expressive Language",
      description: "Helping your child express their thoughts, needs, and feelings through words, sentences, and conversations.",
      icon: Mic,
    },
    {
      title: "Receptive Language",
      description: "Improving your child's ability to understand spoken language, follow directions, and comprehend questions.",
      icon: Volume2,
    },
    {
      title: "Augmentative & Alternative Communication (AAC)",
      description: "Implementing communication systems for children who benefit from visual supports or speech-generating devices.",
      icon: BookOpen,
    },
    {
      title: "Social Communication",
      description: "Teaching pragmatic language skills including conversation, body language, and understanding social cues.",
      icon: Users,
    },
  ];

  const areas = [
    "Expressive language (verbal communication)",
    "Receptive language (understanding others)",
    "Articulation and speech clarity",
    "Augmentative and alternative communication (AAC)",
    "Social communication and pragmatics",
    "Feeding and swallowing difficulties",
    "Voice disorders and fluency",
    "Early language development",
    "Literacy and reading comprehension",
  ];

  const approaches = [
    {
      title: "Naturalistic Teaching",
      description: "Using your child's interests and natural environment to create meaningful learning opportunities.",
    },
    {
      title: "Visual Supports",
      description: "Incorporating pictures, symbols, and visual schedules to support understanding and communication.",
    },
    {
      title: "Parent Coaching",
      description: "Teaching families strategies to support language development throughout daily routines.",
    },
    {
      title: "Collaborative Approach",
      description: "Working closely with other therapists and educators to ensure consistent support across settings.",
    },
  ];

  const faqs = [
    {
      question: "What is speech therapy for autism?",
      answer: "Speech therapy for autism, provided by Speech-Language Pathologists (SLPs), addresses the unique communication challenges faced by children on the autism spectrum. This includes helping with verbal communication, understanding language, social communication skills, and using alternative communication methods when needed. Our SLPs specialize in autism and use evidence-based approaches tailored to each child's needs."
    },
    {
      question: "At what age should my child start speech therapy?",
      answer: "Early intervention is key for communication development. Children can benefit from speech therapy as early as 12-18 months if there are concerns about language development. However, it's never too late to start—children and even adults can make significant progress with speech therapy. If you have concerns about your child's communication, we recommend scheduling a consultation."
    },
    {
      question: "What is the difference between speech and language?",
      answer: "Speech refers to the physical act of producing sounds and words (articulation, voice, fluency). Language refers to the system of words and symbols used to communicate meaning, including understanding others (receptive language) and expressing oneself (expressive language). A child can have challenges with speech, language, or both. Our SLPs assess and treat both areas."
    },
    {
      question: "What is AAC and does my child need it?",
      answer: "AAC (Augmentative and Alternative Communication) includes all forms of communication other than oral speech, such as picture exchange systems, communication boards, sign language, or speech-generating devices. AAC is not a replacement for speech—research shows it often supports and enhances verbal communication development. Our SLPs will assess whether AAC would benefit your child."
    },
    {
      question: "How long does speech therapy take?",
      answer: "The duration of speech therapy varies depending on your child's needs, goals, and the severity of their communication challenges. Some children may need therapy for several months, while others benefit from longer-term support. We regularly assess progress and adjust treatment plans accordingly. Many children show noticeable improvements within the first few months of consistent therapy."
    },
    {
      question: "Can speech therapy help with social skills?",
      answer: "Yes! Social communication (pragmatics) is a core area of speech therapy. Our SLPs help children understand and use social cues, take turns in conversation, understand figurative language, maintain topics, and navigate social situations. For children with autism, social communication therapy is often a primary focus."
    },
    {
      question: "Will my child ever speak normally?",
      answer: "Every child's journey is unique, and outcomes vary based on many factors. Many children with speech and language delays go on to communicate effectively, whether through verbal speech, AAC, or a combination. Our goal is to help your child communicate as effectively as possible and participate fully in their daily life. We celebrate all communication, not just spoken words."
    },
    {
      question: "How can I support my child's speech development at home?",
      answer: "Parent involvement is crucial! Our SLPs provide specific strategies for your family, but general tips include: talk to your child throughout daily routines, read together daily, follow your child's lead and interests, model correct speech without correcting, use visual supports, create opportunities for communication, and celebrate all attempts to communicate."
    },
    {
      question: "Is speech therapy covered by insurance in Ontario?",
      answer: "Many private insurance plans cover speech therapy services. Additionally, some children may access speech therapy through the Ontario Autism Program (OAP) funding. We can provide documentation needed for insurance claims and funding applications. Contact us to discuss your specific coverage and options."
    },
    {
      question: "How is speech therapy different from ABA for communication?",
      answer: "Speech therapy and ABA are complementary services that work together to support communication. Speech-Language Pathologists specialize in all aspects of communication development, including the mechanics of speech production, language structure, and social communication. ABA therapists use behavioral principles to teach communication skills. At Side by Side, our SLPs and BCBAs collaborate to provide comprehensive support."
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
    "name": "Speech Therapy for Autism",
    "alternateName": ["Speech-Language Pathology", "SLP Services", "Communication Therapy"],
    "description": "Speech-Language Pathology services for children with autism in the Greater Toronto Area. Improve verbal and nonverbal communication skills with experienced SLPs.",
    "medicineSystem": "WesternConventional",
    "relevantSpecialty": "SpeechPathology",
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
      { "@type": "City", "name": "Richmond Hill" },
      { "@type": "City", "name": "Oakville" }
    ],
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "CAD"
    },
    "audience": {
      "@type": "MedicalAudience",
      "audienceType": "Children with communication challenges"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Side by Side Therapy",
    "url": "https://sidebysidetherapy.ca",
    "telephone": "+1-647-955-5995",
    "medicalSpecialty": ["SpeechPathology", "Pediatrics"]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sidebysidetherapy.ca" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://sidebysidetherapy.ca/#services" },
      { "@type": "ListItem", "position": 3, "name": "Speech Therapy", "item": "https://sidebysidetherapy.ca/services/speech-therapy" }
    ]
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Speech Therapy for Autism Toronto | Speech-Language Pathology | Side by Side</title>
        <meta name="description" content="Expert speech therapy for children with autism in Toronto & GTA. Speech-Language Pathologists specializing in autism, AAC, social communication. Free consultation: 647-955-5995" />
        <meta name="keywords" content="speech therapy Toronto, speech pathology autism, SLP Toronto, AAC therapy, communication therapy, autism speech therapy, language therapy GTA" />
        <link rel="canonical" href="https://sidebysidetherapy.ca/services/speech-therapy" />
        <meta property="og:title" content="Speech Therapy for Autism Toronto | Side by Side Therapy" />
        <meta property="og:description" content="Expert speech therapy for children with autism. AAC, social communication, language development." />
        <meta property="og:url" content="https://sidebysidetherapy.ca/services/speech-therapy" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://sidebysidetherapy.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Speech Therapy Toronto | Side by Side Therapy" />
        <meta name="twitter:description" content="Expert speech therapy for children with autism in Toronto & GTA." />
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
        <section className="py-16 md:py-24 bg-gradient-to-br from-orange-100 to-amber-50">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center">
                    <MessageCircle className="h-8 w-8 text-orange-600" />
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold text-foreground">
                    Speech Therapy
                  </h1>
                </div>
                
                <p className="text-xl text-muted-foreground mb-6">
                  Our Speech-Language Pathologists specialize in helping children with autism develop effective communication skills. Whether your child is learning their first words or working on complex social communication, we provide individualized support that makes a difference.
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

              <div className="grid grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="bg-card p-6 rounded-2xl shadow-soft border">
                    <service.icon className="h-8 w-8 text-orange-500 mb-3" />
                    <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">How Speech Therapy Helps Children with Autism</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  Communication challenges are among the most common characteristics of autism spectrum disorder. Many children with autism experience delays in spoken language, difficulty understanding what others say, challenges with social communication, or a combination of these areas. Speech therapy addresses these challenges using evidence-based approaches tailored to each child's unique profile.
                </p>
                <p className="mb-4">
                  Our Speech-Language Pathologists (SLPs) are specially trained to work with children on the autism spectrum. They understand that communication is about much more than words—it includes gestures, facial expressions, tone of voice, and the social rules of conversation. Our therapy addresses all aspects of communication to help your child connect with others.
                </p>
                <p>
                  We believe that every child can communicate. For some children, this means developing verbal speech. For others, it may include augmentative and alternative communication (AAC) systems. Our SLPs work with each family to determine the most effective communication approach for their child, always with the goal of giving your child a voice.
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
                Our comprehensive speech therapy services address all aspects of communication development.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {areas.map((area, index) => (
                <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-xl shadow-sm border">
                  <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Approach</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We use evidence-based approaches designed specifically for children with autism.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {approaches.map((approach, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-soft border">
                  <h3 className="font-bold text-lg mb-2 text-orange-600">{approach.title}</h3>
                  <p className="text-muted-foreground">{approach.description}</p>
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
                Find answers to common questions about speech therapy for children with autism.
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
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Help Your Child Find Their Voice</h2>
            <p className="mb-8 max-w-2xl mx-auto opacity-90">
              Contact us today to schedule a free consultation and learn how speech therapy can help your child communicate more effectively.
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

export default SpeechTherapy;