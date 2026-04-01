import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { GraduationCap, CheckCircle, Phone, ArrowLeft, Users, BookOpen, Award, Clock } from "lucide-react";
import bcbaHeroImage from "@/assets/services/bcba-mentorship-hero.jpg";
import { linkifyCities } from "@/lib/cityLinks";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BCBAMentorship = () => {
  const offerings = [
    "Supervised fieldwork hours (unrestricted and concentrated)",
    "Mentorship from experienced BCBAs",
    "Case conceptualization and analysis",
    "Ethical decision-making guidance",
    "Exam preparation support",
    "Professional development opportunities",
    "Diverse case experience across settings",
    "Regular feedback and performance evaluation",
    "Networking within the autism therapy community",
  ];

  const features = [
    {
      title: "Experienced Supervisors",
      description: "Learn from BCBAs with years of clinical experience across diverse populations and settings.",
      icon: Users,
    },
    {
      title: "Comprehensive Training",
      description: "Develop competency across all BACB task list items through hands-on experience and mentorship.",
      icon: BookOpen,
    },
    {
      title: "Flexible Scheduling",
      description: "Part-time and full-time supervision options to accommodate your academic and personal commitments.",
      icon: Clock,
    },
    {
      title: "Career Support",
      description: "Guidance on career development, job searching, and establishing yourself as a successful BCBA.",
      icon: Award,
    },
  ];

  const requirements = [
    {
      title: "BCBA Supervision",
      items: [
        "Enrolled in or completed an approved graduate program",
        "Understanding of ABA principles and procedures",
        "Commitment to ethical practice",
        "Strong communication and interpersonal skills",
        "Reliable transportation within the GTA",
      ],
    },
    {
      title: "BCaBA Supervision",
      items: [
        "Enrolled in or completed an approved undergraduate program",
        "Basic understanding of behavior analysis",
        "Eagerness to learn and receive feedback",
        "Professional demeanor and work ethic",
        "Flexibility to work with diverse clients",
      ],
    },
  ];

  const faqs = [
    {
      question: "What is BCBA supervision?",
      answer: "BCBA supervision is the supervised fieldwork experience required to become a Board Certified Behavior Analyst. Candidates must accumulate a specified number of supervised hours (currently 2,000 for unrestricted or 1,500 for concentrated) under the guidance of a qualified supervisor. Supervision involves observing, practicing, and receiving feedback on behavior analytic skills."
    },
    {
      question: "What are the requirements to become a BCBA?",
      answer: "To become a BCBA, you must: (1) complete a qualifying graduate degree, (2) complete approved coursework in behavior analysis, (3) accumulate supervised fieldwork hours under a qualified supervisor, and (4) pass the BCBA examination. Requirements are set by the Behavior Analyst Certification Board (BACB) and may change, so always verify current requirements on their website."
    },
    {
      question: "What is the difference between unrestricted and concentrated supervision?",
      answer: "Unrestricted supervision requires 2,000 hours with more flexibility in how hours can be accumulated. Concentrated supervision requires 1,500 hours but with stricter requirements—a larger percentage of hours must be under direct observation, and the supervision period is shorter. Both pathways lead to BCBA certification."
    },
    {
      question: "How long does it take to complete supervision hours?",
      answer: "The time to complete supervision depends on the pathway chosen and how many hours you can accumulate per week. For unrestricted supervision, candidates typically complete hours over 18-24 months working part-time or 12-18 months full-time. Concentrated supervision must be completed within a shorter timeframe with more intensive hours."
    },
    {
      question: "What types of experience will I gain during supervision?",
      answer: "Our supervision program provides experience across diverse settings (home, school, community), age groups (early intervention through adults), and skill areas. You'll gain competency in assessment, treatment planning, behavior intervention, data analysis, staff training, and professional practices. We ensure you meet all BACB task list requirements."
    },
    {
      question: "Who are your supervisors?",
      answer: "Our supervisors are experienced BCBAs who meet all BACB requirements for providing supervision. They have extensive clinical experience working with individuals with autism and related disorders. All supervisors are passionate about training the next generation of behavior analysts and stay current with best practices and ethical guidelines."
    },
    {
      question: "What is the supervision schedule like?",
      answer: "We offer flexible scheduling options to accommodate your academic and personal commitments. Supervision includes individual meetings, group supervision, and on-site observation and feedback. The specific schedule is developed collaboratively based on your needs and BACB requirements for supervision ratios and contact hours."
    },
    {
      question: "Do you help with exam preparation?",
      answer: "Yes! While our primary focus is developing clinical competency, we also support exam preparation. This includes reviewing task list items, discussing exam strategies, recommending study resources, and offering mock examination opportunities. Many of our supervisees pass the exam on their first attempt."
    },
    {
      question: "Is supervision paid or unpaid?",
      answer: "We offer both paid and unpaid supervision arrangements depending on your experience level and our current staffing needs. Paid positions are available for qualified candidates who can commit to a regular schedule. Unpaid supervision is available for those who need more flexibility. Contact us to discuss available options."
    },
    {
      question: "What happens after I complete supervision?",
      answer: "We support your transition to independent practice by providing career guidance, networking opportunities, and references. Many of our former supervisees have joined our team as BCBAs, and we maintain professional relationships with those who pursue opportunities elsewhere. We're invested in your long-term success."
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
    "@type": "EducationalOccupationalProgram",
    "name": "BCBA Mentorship & Supervision Program",
    "alternateName": ["BCBA Supervision", "BCaBA Supervision", "Behavior Analyst Training"],
    "description": "BCBA and BCaBA supervision and mentorship in the Greater Toronto Area. Accumulate supervised fieldwork hours with experienced Board Certified Behavior Analysts.",
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
    "educationalCredentialAwarded": "Board Certified Behavior Analyst (BCBA)",
    "occupationalCategory": "Behavior Analyst",
    "programPrerequisites": "Graduate degree in behavior analysis or related field",
    "timeToComplete": "P18M",
    "areaServed": [
      { "@type": "City", "name": "Toronto" },
      { "@type": "City", "name": "Mississauga" },
      { "@type": "City", "name": "Brampton" },
      { "@type": "City", "name": "Vaughan" }
    ],
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
      { "@type": "ListItem", "position": 3, "name": "BCBA Mentorship", "item": "https://sidebysidetherapy.ca/services/bcba-mentorship" }
    ]
  };

  return (
    <PageTransition>
      <Helmet>
        <title>BCBA Supervision & Mentorship Toronto | Fieldwork Hours | Side by Side</title>
        <meta name="description" content="BCBA and BCaBA supervision in Toronto & GTA. Accumulate fieldwork hours with experienced supervisors. Diverse clinical experience, exam support, career guidance. Contact us today!" />
        <meta name="keywords" content="BCBA supervision Toronto, BCaBA supervision, BCBA fieldwork hours, behavior analyst training, ABA supervision GTA, BCBA mentorship" />
        <link rel="canonical" href="https://sidebysidetherapy.ca/services/bcba-mentorship" />
        <meta property="og:title" content="BCBA Supervision & Mentorship Toronto | Side by Side Therapy" />
        <meta property="og:description" content="BCBA and BCaBA supervision in Toronto. Accumulate fieldwork hours with experienced supervisors." />
        <meta property="og:url" content="https://sidebysidetherapy.ca/services/bcba-mentorship" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://sidebysidetherapy.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BCBA Supervision Toronto | Side by Side Therapy" />
        <meta name="twitter:description" content="BCBA fieldwork supervision in Toronto & GTA." />
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
        <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-100 to-purple-50">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold text-foreground">
                    BCBA Mentorship & Supervision
                  </h1>
                </div>
                
                <p className="text-xl text-muted-foreground mb-6">
                  Take the next step in your career as a behavior analyst. Our experienced BCBAs provide high-quality supervision to help you accumulate fieldwork hours and develop the skills you need to succeed.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <a href="tel:647-955-5995">
                      <Phone className="h-4 w-4 mr-2" />
                      Contact Us
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="#faq">View FAQ</a>
                  </Button>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={bcbaHeroImage}
                  alt="BCBA mentor and trainee reviewing clinical notes together in a professional setting"
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
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Your Path to Certification</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  Becoming a Board Certified Behavior Analyst requires not only academic preparation but also extensive supervised clinical experience. The quality of your supervision directly impacts your development as a clinician and your readiness for independent practice. At Side by Side Therapy, we're committed to providing exceptional supervision that prepares you for a successful career.
                </p>
                <p className="mb-4">
                  Our supervisors bring years of clinical experience across diverse populations, settings, and challenging cases. They are passionate about mentoring the next generation of behavior analysts and are invested in your success. Beyond meeting BACB requirements, we focus on developing confident, ethical, and skilled practitioners who can make a real difference in the lives of individuals with autism.
                </p>
                <p>
                  Our supervision program provides experience across all aspects of behavior analytic practice—from assessment and treatment planning to data analysis and professional conduct. You'll work with clients across age groups and settings, ensuring you graduate with a well-rounded skill set. We also provide exam preparation support to help you pass the BCBA exam on your first attempt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">What We Offer</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive supervision to prepare you for a successful career as a behavior analyst.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {offerings.map((offering, index) => (
                <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-xl shadow-sm border">
                  <CheckCircle className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{offering}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Who We're Looking For</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We welcome dedicated individuals pursuing BCBA or BCaBA certification.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {requirements.map((req, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-soft border">
                  <h3 className="font-bold text-xl mb-4 text-indigo-600">{req.title}</h3>
                  <ul className="space-y-2">
                    {req.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-indigo-400 mt-1 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
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
                Find answers to common questions about our BCBA supervision program.
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

        <ServiceAreasSection serviceName="BCBA Mentorship" />

        {/* CTA */}
        <section className="py-16 md:py-20 gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Start Your Journey Today</h2>
            <p className="mb-8 max-w-2xl mx-auto opacity-90">
              Contact us to learn more about our BCBA supervision program and take the next step in your career as a behavior analyst.
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

export default BCBAMentorship;