import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { BookOpen, CheckCircle, Phone, ArrowLeft, FileText, Brain, Target, School } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PsychoEducationalAssessments = () => {
  const assessmentAreas = [
    "Cognitive abilities and intellectual functioning",
    "Academic achievement (reading, writing, math)",
    "Attention and executive functioning",
    "Memory and processing speed",
    "Social-emotional functioning",
    "Adaptive behaviour skills",
    "Visual-spatial processing",
    "Language and verbal reasoning",
    "Perceptual reasoning abilities",
  ];

  const benefits = [
    "Identify learning disabilities and giftedness",
    "Support IEP development and school accommodations",
    "Guide intervention planning",
    "Access to specialized programs and funding",
    "Comprehensive written report with recommendations",
    "Feedback session with parents/caregivers",
    "Better understanding of your child's unique profile",
    "Documentation for college/university accommodations",
    "Clarity for educational decision-making",
  ];

  const features = [
    {
      title: "Comprehensive Testing",
      description: "Thorough evaluation using standardized, validated assessment tools to create a complete picture of your child's abilities.",
      icon: FileText,
    },
    {
      title: "Cognitive Assessment",
      description: "Evaluation of intellectual abilities, reasoning skills, memory, and processing speed to understand how your child learns.",
      icon: Brain,
    },
    {
      title: "Academic Achievement",
      description: "Detailed assessment of reading, writing, and math skills to identify specific strengths and areas of difficulty.",
      icon: Target,
    },
    {
      title: "School Recommendations",
      description: "Clear, actionable recommendations for teachers and IEP teams to support your child's success at school.",
      icon: School,
    },
  ];

  const process = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "We discuss your concerns, review developmental and educational history, and determine if a psycho-educational assessment is appropriate.",
    },
    {
      step: 2,
      title: "Assessment Sessions",
      description: "Your child completes standardized tests over one or more sessions in a comfortable, supportive environment.",
    },
    {
      step: 3,
      title: "Scoring & Analysis",
      description: "The psychologist scores and analyzes results, integrating findings to understand your child's unique profile.",
    },
    {
      step: 4,
      title: "Written Report",
      description: "A comprehensive report is prepared including results, interpretation, diagnosis (if applicable), and recommendations.",
    },
    {
      step: 5,
      title: "Feedback Session",
      description: "We meet to review findings, answer questions, and discuss how to implement recommendations at home and school.",
    },
  ];

  const faqs = [
    {
      question: "What is a psycho-educational assessment?",
      answer: "A psycho-educational assessment is a comprehensive evaluation that examines how a child learns. It includes testing of cognitive abilities (how a child thinks and processes information) and academic achievement (what a child has learned). The assessment identifies learning disabilities, attention difficulties, giftedness, or other factors affecting school performance, and provides recommendations for support."
    },
    {
      question: "When should my child have a psycho-educational assessment?",
      answer: "Consider an assessment if your child is: struggling academically despite adequate instruction, not performing at the level expected for their age or ability, having difficulty with reading, writing, or math, showing attention or concentration problems, or if you want to understand how your child learns best. Early identification of learning needs leads to more effective intervention."
    },
    {
      question: "What learning disabilities can be identified?",
      answer: "Psycho-educational assessments can identify specific learning disabilities including: dyslexia (reading disorder), dyscalculia (math disorder), dysgraphia (writing disorder), as well as other conditions affecting learning such as ADHD, intellectual disabilities, and giftedness. The assessment also identifies strengths that can be leveraged in intervention."
    },
    {
      question: "How long does the assessment process take?",
      answer: "The assessment typically involves 4-6 hours of direct testing with your child, often completed over 1-2 sessions. Additional time is needed for history gathering, scoring, analysis, and report writing. From initial consultation to final feedback, the entire process typically takes 3-4 weeks."
    },
    {
      question: "What will my child experience during testing?",
      answer: "Testing sessions are designed to be comfortable and engaging. Your child will work one-on-one with a psychologist or trained psychometrist, completing various tasks and puzzles. We take breaks as needed and work at your child's pace. Most children find the activities interesting, and we ensure they feel supported throughout."
    },
    {
      question: "Who conducts the assessment?",
      answer: "Psycho-educational assessments are conducted by registered psychologists or psychological associates who specialize in learning and development. Some testing may be administered by trained psychometrists under the psychologist's supervision. All assessment professionals are trained to work with children and create a positive testing experience."
    },
    {
      question: "What is included in the assessment report?",
      answer: "The comprehensive written report includes: background information and developmental history, detailed results from all tests administered, interpretation of findings, diagnosis (if applicable), specific recommendations for home and school, and strategies to support your child's learning. Reports are written to be understood by parents and educators."
    },
    {
      question: "How will the assessment help my child at school?",
      answer: "Assessment results provide evidence-based recommendations for classroom accommodations, modifications, and interventions. The report can support the development of an Individual Education Plan (IEP) and may qualify your child for additional school resources or specialized programs. We can also consult directly with school teams."
    },
    {
      question: "Can the assessment identify autism?",
      answer: "While psycho-educational assessments evaluate cognitive and academic functioning, they are not designed to diagnose autism. However, if autism is suspected, we can discuss appropriate referrals for comprehensive autism assessment. Some children receive both psycho-educational and autism assessments to fully understand their needs."
    },
    {
      question: "How much does a psycho-educational assessment cost?",
      answer: "The cost of a psycho-educational assessment varies depending on the scope of testing required. We provide a detailed quote after the initial consultation. Many private insurance plans cover psychological assessment. We provide itemized receipts for insurance submission and can discuss payment options."
    },
    {
      question: "How often should assessments be repeated?",
      answer: "Intellectual abilities are generally stable over time, so cognitive testing doesn't need frequent repetition. However, academic achievement testing may be updated every 2-3 years or when significant concerns arise. For access to accommodations on standardized tests (SAT, LSAT, etc.), updated assessments are often required every 3-5 years."
    },
    {
      question: "Will the assessment diagnose ADHD?",
      answer: "A comprehensive psycho-educational assessment can provide significant information about attention and executive functioning that supports an ADHD diagnosis. However, ADHD diagnosis also requires consideration of behavioral observations, rating scales, and developmental history. We integrate all available information to make diagnostic decisions."
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
    "@type": "MedicalTest",
    "name": "Psycho-Educational Assessment",
    "alternateName": ["Educational Assessment", "Learning Disability Testing", "Cognitive Assessment"],
    "description": "Comprehensive psycho-educational assessments for children in the Greater Toronto Area. Identify learning disabilities, giftedness, and get school accommodation recommendations.",
    "image": "https://sidebysidetherapy.ca/og-image.png",
    "usedToDiagnose": ["Learning Disability", "ADHD", "Giftedness", "Dyslexia", "Dyscalculia"],
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
      { "@type": "City", "name": "Markham" }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Side by Side Therapy",
    "url": "https://sidebysidetherapy.ca",
    "telephone": "+1-647-955-5995",
    "medicalSpecialty": ["Psychology", "Pediatrics"]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sidebysidetherapy.ca" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://sidebysidetherapy.ca/#services" },
      { "@type": "ListItem", "position": 3, "name": "Psycho-Educational Assessments", "item": "https://sidebysidetherapy.ca/services/psycho-educational-assessments" }
    ]
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Psycho-Educational Assessment Toronto | Learning Disability Testing | Side by Side</title>
        <meta name="description" content="Comprehensive psycho-educational assessments in Toronto & GTA. Identify learning disabilities, ADHD, giftedness. Get school accommodations and IEP support. Free consultation: 647-955-5995" />
        <meta name="keywords" content="psycho-educational assessment Toronto, learning disability testing, ADHD assessment, educational psychology, IEP assessment, school accommodations, dyslexia testing GTA" />
        <link rel="canonical" href="https://sidebysidetherapy.ca/services/psycho-educational-assessments" />
        <meta property="og:title" content="Psycho-Educational Assessment Toronto | Side by Side Therapy" />
        <meta property="og:description" content="Comprehensive psycho-educational assessments. Identify learning disabilities, ADHD, giftedness." />
        <meta property="og:url" content="https://sidebysidetherapy.ca/services/psycho-educational-assessments" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://sidebysidetherapy.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Psycho-Educational Assessment Toronto | Side by Side Therapy" />
        <meta name="twitter:description" content="Learning disability testing and educational assessments in Toronto & GTA." />
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
        <section className="py-16 md:py-24 bg-gradient-to-br from-amber-100 to-yellow-50">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-amber-500/20 flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-amber-600" />
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold text-foreground">
                    Psycho-Educational Assessments
                  </h1>
                </div>
                
                <p className="text-xl text-muted-foreground mb-6">
                  Comprehensive assessments that uncover how your child learns, identify strengths and challenges, and provide clear recommendations for school success. Get the answers you need to support your child's education.
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
                {features.map((feature, index) => (
                  <div key={index} className="bg-card p-6 rounded-2xl shadow-soft border">
                    <feature.icon className="h-8 w-8 text-amber-500 mb-3" />
                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Understanding Your Child's Learning Profile</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  Every child learns differently. When a child struggles at school, it's often not immediately clear why. A psycho-educational assessment provides a comprehensive picture of how your child learns—their cognitive strengths, processing style, academic skills, and areas that need support. This understanding is essential for effective intervention planning.
                </p>
                <p className="mb-4">
                  Using standardized, evidence-based assessment tools, we evaluate intellectual abilities, academic achievement, attention, memory, and processing skills. We look at the whole child, considering not just test scores but also developmental history, classroom performance, and social-emotional functioning. This thorough approach ensures accurate identification of learning needs.
                </p>
                <p>
                  The assessment results translate directly into action. Our detailed report includes specific, practical recommendations for parents, teachers, and intervention specialists. Whether your child needs classroom accommodations, specialized instruction, or enrichment for giftedness, our assessment provides the documentation and guidance to make it happen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Assessment Areas */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">What We Assess</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our comprehensive assessments evaluate all areas important for academic success.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {assessmentAreas.map((area, index) => (
                <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-xl shadow-sm border">
                  <CheckCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Assessment Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A clear, structured process from initial consultation to actionable recommendations.
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

        {/* Benefits */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Benefits of Assessment</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A psycho-educational assessment provides valuable insights and opens doors to support.
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

        {/* FAQ */}
        <section id="faq" className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about psycho-educational assessments.
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Get Answers About Your Child's Learning</h2>
            <p className="mb-8 max-w-2xl mx-auto opacity-90">
              Contact us today to schedule a consultation and learn how a psycho-educational assessment can help your child succeed at school.
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

export default PsychoEducationalAssessments;