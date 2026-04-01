import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Brain, CheckCircle, Phone, ArrowLeft, Clock, Users, Target, Award, BookOpen, Heart } from "lucide-react";
import { linkifyCities } from "@/lib/cityLinks";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ABATherapy = () => {
  const benefits = [
    "Individualized treatment plans based on comprehensive assessments",
    "Evidence-based interventions proven effective through research",
    "Data-driven progress monitoring and adjustments",
    "Parent training and family involvement",
    "Focus on meaningful, functional skill development",
    "Reduction of challenging behaviors through positive strategies",
    "Improved communication and social skills",
    "Greater independence in daily living activities",
    "Enhanced academic readiness and performance",
  ];

  const serviceModels = [
    {
      title: "Comprehensive ABA",
      description: "Intensive, full-time therapy addressing multiple developmental areas including communication, social skills, self-care, and academics. Ideal for children who need support across many skill areas.",
      hours: "25-40 hours/week",
      icon: Clock,
    },
    {
      title: "Focused ABA",
      description: "Targeted intervention addressing specific skill deficits or behavioral challenges with measurable goals. Perfect for children who need support in particular areas.",
      hours: "10-25 hours/week",
      icon: Target,
    },
    {
      title: "Consultation Model",
      description: "Expert guidance for families and other professionals, including program development, staff training, and ongoing support for implementation.",
      hours: "As needed",
      icon: Users,
    },
  ];

  const process = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Free phone or video consultation to discuss your child's needs, answer questions, and determine if our services are a good fit for your family.",
    },
    {
      step: 2,
      title: "Comprehensive Assessment",
      description: "Our BCBA conducts thorough assessments including VB-MAPP, ABLLS-R, or other standardized tools to identify your child's current skills and areas for growth.",
    },
    {
      step: 3,
      title: "Individualized Treatment Plan",
      description: "Based on assessment results and family priorities, we develop a personalized treatment plan with specific, measurable goals.",
    },
    {
      step: 4,
      title: "Therapy Implementation",
      description: "Trained therapists work directly with your child, implementing the treatment plan in your home, community, or school setting.",
    },
    {
      step: 5,
      title: "Ongoing Monitoring & Adjustment",
      description: "Regular data analysis, progress reports, and plan updates ensure your child continues to make meaningful progress.",
    },
  ];

  const skillAreas = [
    { title: "Communication", description: "Requesting, labeling, answering questions, and conversational skills" },
    { title: "Social Skills", description: "Play skills, turn-taking, sharing, and peer interaction" },
    { title: "Self-Care", description: "Toileting, dressing, feeding, and hygiene routines" },
    { title: "Academic Skills", description: "Pre-academic and academic skills including reading, writing, and math" },
    { title: "Motor Skills", description: "Fine and gross motor skill development" },
    { title: "Behavior Management", description: "Reducing challenging behaviors and teaching replacement skills" },
  ];

  const faqs = [
    {
      question: "What is Applied Behaviour Analysis (ABA) therapy?",
      answer: "Applied Behaviour Analysis (ABA) is a scientific approach to understanding and changing behaviour. It is the most researched and evidence-based treatment for autism spectrum disorder. ABA therapy uses principles of learning theory to teach new skills, increase helpful behaviours, and reduce behaviours that may interfere with learning or cause harm. Programs are individualized and supervised by Board Certified Behavior Analysts (BCBAs)."
    },
    {
      question: "Is ABA therapy effective for autism?",
      answer: "Yes, ABA therapy is considered the gold standard treatment for autism and has decades of research supporting its effectiveness. Studies show that intensive ABA therapy can lead to significant improvements in communication, social skills, self-care, academic performance, and reduction of challenging behaviours. The US Surgeon General and the American Psychological Association consider ABA an evidence-based best practice treatment."
    },
    {
      question: "How many hours of ABA therapy does my child need?",
      answer: "The recommended intensity varies based on your child's individual needs, age, and goals. Research suggests that comprehensive ABA programs (25-40 hours per week) are most effective for young children with significant needs. However, focused ABA (10-25 hours per week) may be appropriate for children with specific skill deficits or older children. Our BCBAs will recommend the appropriate intensity based on your child's assessment."
    },
    {
      question: "What qualifications do your ABA therapists have?",
      answer: "All our ABA programs are designed and supervised by Board Certified Behavior Analysts (BCBAs), who hold graduate degrees and have completed extensive supervised experience. Our therapy team includes Registered Behaviour Technicians (RBTs) who have completed specialized training and certification. All team members receive ongoing professional development and supervision."
    },
    {
      question: "Where does ABA therapy take place?",
      answer: "We provide ABA therapy in the setting that works best for your family, including in-home, in-school, or in community settings throughout the Greater Toronto Area. In-home therapy allows skills to be taught in the natural environment where they will be used, while school-based services support academic and social success."
    },
    {
      question: "How long does ABA therapy take to show results?",
      answer: "Many families notice improvements within the first few weeks of therapy, particularly in communication and compliance. However, significant and lasting changes typically require consistent therapy over months or years. We track progress continuously using data collection and provide regular progress reports so you can see your child's growth over time."
    },
    {
      question: "Is ABA therapy covered by insurance or funding in Ontario?",
      answer: "Yes, ABA therapy may be covered through the Ontario Autism Program (OAP), private insurance, or other funding sources. Side by Side Therapy is an approved OAP provider, and we can help you navigate funding options. Many private insurance plans also cover ABA therapy. Contact us for a free consultation to discuss funding options available to your family."
    },
    {
      question: "What is the difference between a BCBA and an RBT?",
      answer: "A Board Certified Behavior Analyst (BCBA) holds a graduate degree, has completed supervised experience, and passed a national certification exam. BCBAs design and supervise ABA programs. A Registered Behaviour Technician (RBT) is a trained therapist who implements the treatment plan under BCBA supervision. Both work together to provide high-quality ABA services."
    },
    {
      question: "Will ABA therapy help with my child's challenging behaviours?",
      answer: "Yes, ABA therapy is highly effective at reducing challenging behaviours such as tantrums, aggression, self-injury, and non-compliance. Rather than simply suppressing behaviours, ABA focuses on understanding why behaviours occur and teaching appropriate replacement behaviours. We use positive, evidence-based strategies to help children learn better ways to communicate their needs."
    },
    {
      question: "How are parents involved in ABA therapy?",
      answer: "Parent involvement is crucial to the success of ABA therapy. We provide parent training to help you understand ABA principles and implement strategies at home. Parents participate in goal-setting, receive regular progress updates, and learn techniques to support their child's development throughout daily routines. This ensures skills generalize beyond therapy sessions."
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
    "name": "Applied Behaviour Analysis (ABA) Therapy",
    "alternateName": ["ABA Therapy", "Behaviour Therapy", "Autism Therapy"],
    "description": "Evidence-based ABA therapy for children with autism in the Greater Toronto Area. Comprehensive, focused, and consultation models available with experienced BCBAs.",
    "medicineSystem": "WesternConventional",
    "relevantSpecialty": "BehaviorAnalysis",
    "image": "https://sidebysidetherapy.ca/og-image.png",
    "provider": {
      "@type": "MedicalOrganization",
      "name": "Side by Side Therapy",
      "telephone": "+1-647-955-5995",
      "email": "info@sidebysidetherapy.ca",
      "url": "https://sidebysidetherapy.ca",
      "logo": "https://sidebysidetherapy.ca/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Toronto",
        "addressRegion": "Ontario",
        "addressCountry": "CA"
      },
      "sameAs": [
        "https://www.facebook.com/sidebysidetherapy",
        "https://www.instagram.com/sidebysidetherapy"
      ]
    },
    "areaServed": [
      { "@type": "City", "name": "Toronto", "sameAs": "https://en.wikipedia.org/wiki/Toronto" },
      { "@type": "City", "name": "Mississauga" },
      { "@type": "City", "name": "Brampton" },
      { "@type": "City", "name": "Vaughan" },
      { "@type": "City", "name": "Markham" },
      { "@type": "City", "name": "Richmond Hill" },
      { "@type": "City", "name": "Oakville" },
      { "@type": "City", "name": "Burlington" }
    ],
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "CAD"
      },
      "eligibleRegion": {
        "@type": "Place",
        "name": "Greater Toronto Area, Ontario, Canada"
      }
    },
    "audience": {
      "@type": "MedicalAudience",
      "audienceType": "Children with Autism Spectrum Disorder",
      "healthCondition": {
        "@type": "MedicalCondition",
        "name": "Autism Spectrum Disorder"
      }
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Side by Side Therapy",
    "url": "https://sidebysidetherapy.ca",
    "logo": "https://sidebysidetherapy.ca/logo.png",
    "telephone": "+1-647-955-5995",
    "email": "info@sidebysidetherapy.ca",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Toronto",
      "addressRegion": "Ontario",
      "addressCountry": "CA"
    },
    "medicalSpecialty": ["BehaviorAnalysis", "Pediatrics"],
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional Certification",
      "name": "Ontario Autism Program (OAP) Approved Provider"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sidebysidetherapy.ca" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://sidebysidetherapy.ca/#services" },
      { "@type": "ListItem", "position": 3, "name": "ABA Therapy", "item": "https://sidebysidetherapy.ca/services/aba-therapy" }
    ]
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Applied Behaviour Analysis (ABA) Therapy Toronto | Side by Side Therapy</title>
        <meta name="description" content="Evidence-based ABA therapy for children with autism in Toronto & GTA. BCBA-supervised programs, OAP approved provider. Comprehensive, focused & consultation models. Free consultation: 647-955-5995" />
        <meta name="keywords" content="ABA therapy Toronto, Applied Behaviour Analysis, autism therapy GTA, BCBA Toronto, autism treatment, OAP provider, behaviour therapy, autism support" />
        <link rel="canonical" href="https://sidebysidetherapy.ca/services/aba-therapy" />
        <meta property="og:title" content="ABA Therapy Toronto | Side by Side Therapy" />
        <meta property="og:description" content="Evidence-based ABA therapy for children with autism. BCBA-supervised, OAP approved. Free consultation available." />
        <meta property="og:url" content="https://sidebysidetherapy.ca/services/aba-therapy" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://sidebysidetherapy.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:site_name" content="Side by Side Therapy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ABA Therapy Toronto | Side by Side Therapy" />
        <meta name="twitter:description" content="Evidence-based ABA therapy for children with autism. BCBA-supervised, OAP approved." />
        <meta name="twitter:image" content="https://sidebysidetherapy.ca/og-image.png" />
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
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full">OAP Approved Provider</span>
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <Brain className="h-8 w-8 text-primary" />
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold text-foreground">
                    Applied Behaviour Analysis (ABA) Therapy
                  </h1>
                </div>
                
                <p className="text-xl text-muted-foreground mb-6">
                  ABA is the gold standard in autism treatment, using evidence-based techniques to teach helpful behaviours while reducing challenging ones. Our Board Certified Behavior Analysts (BCBAs) create individualized programs that make a real difference in your child's life.
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
                <div className="bg-card p-6 rounded-2xl shadow-soft border">
                  <Award className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-bold text-lg mb-2">BCBA Supervised</h3>
                  <p className="text-sm text-muted-foreground">All programs designed and supervised by certified professionals</p>
                </div>
                <div className="bg-card p-6 rounded-2xl shadow-soft border">
                  <Heart className="h-8 w-8 text-accent mb-3" />
                  <h3 className="font-bold text-lg mb-2">Family-Centered</h3>
                  <p className="text-sm text-muted-foreground">Parents are partners in your child's therapy journey</p>
                </div>
                <div className="bg-card p-6 rounded-2xl shadow-soft border">
                  <Target className="h-8 w-8 text-secondary mb-3" />
                  <h3 className="font-bold text-lg mb-2">Data-Driven</h3>
                  <p className="text-sm text-muted-foreground">Continuous monitoring ensures measurable progress</p>
                </div>
                <div className="bg-card p-6 rounded-2xl shadow-soft border">
                  <BookOpen className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-bold text-lg mb-2">Evidence-Based</h3>
                  <p className="text-sm text-muted-foreground">Backed by decades of scientific research</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is ABA */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">What is ABA Therapy?</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  Applied Behaviour Analysis (ABA) is a scientific approach to understanding behaviour and how it is affected by the environment. As the most extensively researched treatment for autism spectrum disorder (ASD), ABA therapy applies our understanding of how behaviour works to real situations, with the goal of increasing helpful behaviours and decreasing behaviours that may cause harm or interfere with learning.
                </p>
                <p className="mb-4">
                  ABA therapy programs are designed and supervised by Board Certified Behavior Analysts (BCBAs) who have completed graduate-level education and extensive supervised experience. Each program is tailored to the individual needs of the child and family, taking into account the child's strengths, challenges, interests, and the family's priorities and culture.
                </p>
                <p className="mb-4">
                  Research spanning over 50 years has shown that intensive and long-term therapy using ABA principles improves outcomes for many children with autism. These improvements include significant gains in intellectual functioning, language development, daily living skills, and social functioning. The US Surgeon General and the American Psychological Association have recognized ABA as an evidence-based best practice treatment for autism.
                </p>
                <p>
                  At Side by Side Therapy, we use a naturalistic, play-based approach to ABA that makes learning fun and engaging for your child. We focus on teaching skills that are meaningful and functional, ensuring that progress in therapy translates to real-world improvements in your child's daily life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skill Areas */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Skills We Develop</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our ABA programs address a wide range of skill areas based on your child's individual needs and goals.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {skillAreas.map((area, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-sm border">
                  <h3 className="font-bold text-lg mb-2 text-primary">{area.title}</h3>
                  <p className="text-muted-foreground text-sm">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Benefits of ABA Therapy</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                ABA therapy provides numerous benefits that extend far beyond the therapy session.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-xl shadow-sm border">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Models */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Service Models</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We offer flexible service options to meet the unique needs of each child and family.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {serviceModels.map((model, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 shadow-soft border hover:shadow-elevated transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <model.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{model.title}</h3>
                  <p className="text-muted-foreground mb-4">{model.description}</p>
                  <div className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full inline-block">
                    {model.hours}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From initial consultation to ongoing therapy, here's what to expect when you choose Side by Side Therapy.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              {process.map((step, index) => (
                <div key={index} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    {index < process.length - 1 && (
                      <div className="w-0.5 h-16 bg-primary/20 mx-auto mt-2" />
                    )}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
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
                Find answers to common questions about ABA therapy and our services.
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
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-8 max-w-2xl mx-auto opacity-90">
              Contact us today to schedule a free consultation and learn how ABA therapy can help your child reach their full potential. Our team is ready to answer your questions and discuss how we can support your family.
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

export default ABATherapy;