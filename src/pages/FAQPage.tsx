import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const faqData = [
  {
    question: "What is in-home autism therapy?",
    answer: "In-home autism therapy brings evidence-informed support to your child in the home environment. Sessions focus on functional skills, communication, play, behaviour support, and caregiver coaching, using goals tailored to your family."
  },
  {
    question: "What areas do you serve in the GTA and surrounding regions?",
    answer: "We provide in-home services across the Greater Toronto Area (Toronto, Peel, York, Durham, and Halton) and many nearby communities. Availability can vary by clinician coverage and scheduling."
  },
  {
    question: "What ages do you work with?",
    answer: "We typically support children from toddlerhood through adolescence. Service planning is individualized based on needs, goals, and family priorities."
  },
  {
    question: "Do you provide ABA therapy?",
    answer: "We provide behaviour-analytic and skills-based supports that may include ABA principles when appropriate. Our approach is individualized, collaborative, and focused on practical, meaningful outcomes for the child and family."
  },
  {
    question: "How is your approach different from clinic-based therapy?",
    answer: "In-home therapy targets skills in the environments where your child uses them every day. It can improve generalization (using skills across settings), allow realistic routines-based goals, and include direct caregiver coaching."
  },
  {
    question: "What goals can in-home therapy help with?",
    answer: "Common goals include communication and functional requesting, play and social engagement, daily living skills (e.g., dressing, hygiene), emotional regulation and coping, transitions and routines, and reducing behaviours that interfere with learning or safety."
  },
  {
    question: "What does a typical session look like?",
    answer: "Sessions usually include rapport building, targeted activities, natural play-based teaching, behaviour support strategies, and caregiver coaching. We also track progress toward goals and adjust plans over time."
  },
  {
    question: "Do parents or caregivers need to be present?",
    answer: "For most families, yes—at least for part of the session. Caregiver involvement helps ensure strategies fit your routines and that skills carry over between sessions."
  },
  {
    question: "How do you create an individualized plan?",
    answer: "We begin with intake, review of history, and collaborative goal setting. We may use observation, interviews, and skills/behaviour assessments to develop a plan with measurable targets and practical strategies."
  },
  {
    question: "Do you offer an initial assessment?",
    answer: "Yes. An initial assessment typically includes caregiver interviews, observation, and a summary of needs and recommendations. The exact tools used depend on the child's age and goals."
  },
  {
    question: "How often are sessions and how long do they last?",
    answer: "Many families start with 1–3 sessions per week, typically 1–2 hours each. Frequency depends on goals, availability, funding, and what is sustainable for your family."
  },
  {
    question: "Can you help with challenging behaviours at home?",
    answer: "Yes. We support families with behaviours such as aggression, elopement risk, self-injury, tantrums, refusal, and rigidity. Plans focus on safety, understanding triggers, teaching replacement skills, and adjusting environments and routines."
  },
  {
    question: "Is your therapy neurodiversity-affirming?",
    answer: "We aim to be neurodiversity-affirming by prioritizing dignity, autonomy, functional communication, and meaningful participation. Goals are chosen collaboratively and focus on skills that improve quality of life, not masking."
  },
  {
    question: "Do you work with non-speaking or minimally speaking children?",
    answer: "Yes. We support communication using a range of methods, including AAC (augmentative and alternative communication), picture-based systems, sign, and speech-generating devices, depending on the child's needs."
  },
  {
    question: "Do you support AAC and communication devices?",
    answer: "Yes. We can support AAC implementation, caregiver training, and integrating communication systems into daily routines. We also collaborate with speech-language pathologists when involved."
  },
  {
    question: "Can you collaborate with schools, daycare, or other providers?",
    answer: "With consent, we can collaborate with educators, daycare teams, SLPs, OTs, psychologists, and physicians. Coordination helps align strategies and improve generalization across settings."
  },
  {
    question: "Do you provide caregiver coaching and training?",
    answer: "Yes. Caregiver coaching is a core part of our model. We teach practical strategies you can use during daily routines, and we problem-solve together as your child's needs change."
  },
  {
    question: "What if my child has multiple diagnoses or complex needs?",
    answer: "We frequently support children with co-occurring needs (e.g., ADHD, anxiety, developmental delays). Planning focuses on functional goals, collaboration with your care team, and strategies that fit your home."
  },
  {
    question: "Do you offer evening or weekend appointments?",
    answer: "Some clinicians offer evening or weekend sessions depending on availability. We'll do our best to match your preferred schedule."
  },
  {
    question: "How do you measure progress?",
    answer: "We track progress with measurable targets, session notes, and periodic reviews. Data may include frequency of skills, independence levels, and reduction of interfering behaviours, paired with caregiver feedback."
  },
  {
    question: "How long does therapy usually last?",
    answer: "Length varies. Some families use short-term coaching for specific goals, while others prefer longer-term support. We review goals regularly and adjust intensity based on progress and family priorities."
  },
  {
    question: "What are your rates and do you offer packages?",
    answer: "Rates depend on the clinician's credentials and service type (assessment, direct therapy, supervision, caregiver coaching). Many providers offer packages or blocks of sessions; contact us for current rates and options."
  },
  {
    question: "Do you provide receipts for insurance reimbursement?",
    answer: "Yes. We provide receipts and documentation required by many extended health benefit plans. Coverage varies by insurer and by provider designation."
  },
  {
    question: "How do we get started?",
    answer: "Start by booking a discovery call or intake. We'll learn about your goals, discuss service options, match you with a clinician, and schedule an assessment or first session."
  },
  {
    question: "Do you offer virtual sessions if needed?",
    answer: "Yes. If in-person sessions are not possible, we may offer virtual caregiver coaching or hybrid support depending on your needs and what is clinically appropriate."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Side by Side Therapy",
  "url": "https://sidebysidetherapy.ca",
  "logo": "https://sidebysidetherapy.ca/logo.png",
  "description": "Toronto's leading provider of in-home autism therapy and ABA services for children and families across the Greater Toronto Area.",
  "telephone": "+1-647-955-5995",
  "email": "info@sidebysidetherapy.ca",
  "areaServed": [
    {
      "@type": "City",
      "name": "Toronto",
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "Ontario"
      }
    },
    {
      "@type": "AdministrativeArea",
      "name": "Peel Region",
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "Ontario"
      }
    },
    {
      "@type": "AdministrativeArea",
      "name": "York Region",
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "Ontario"
      }
    },
    {
      "@type": "AdministrativeArea",
      "name": "Durham Region",
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "Ontario"
      }
    },
    {
      "@type": "AdministrativeArea",
      "name": "Halton Region",
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "Ontario"
      }
    }
  ],
  "sameAs": []
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Side by Side Therapy",
  "description": "In-home autism therapy and ABA services for children across the Greater Toronto Area. Evidence-based support including behaviour analysis, caregiver coaching, and individualized treatment plans.",
  "url": "https://sidebysidetherapy.ca",
  "telephone": "+1-647-955-5995",
  "email": "info@sidebysidetherapy.ca",
  "image": "https://sidebysidetherapy.ca/logo.png",
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "19:00"
    }
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.6532,
    "longitude": -79.3832
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Toronto",
    "addressRegion": "ON",
    "addressCountry": "CA"
  },
  "areaServed": [
    {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 43.6532,
        "longitude": -79.3832
      },
      "geoRadius": "50000"
    },
    { "@type": "City", "name": "Toronto" },
    { "@type": "City", "name": "Mississauga" },
    { "@type": "City", "name": "Brampton" },
    { "@type": "City", "name": "Vaughan" },
    { "@type": "City", "name": "Markham" },
    { "@type": "City", "name": "Richmond Hill" },
    { "@type": "City", "name": "Oakville" },
    { "@type": "City", "name": "Burlington" },
    { "@type": "City", "name": "Milton" },
    { "@type": "City", "name": "Pickering" },
    { "@type": "City", "name": "Ajax" },
    { "@type": "City", "name": "Whitby" },
    { "@type": "City", "name": "Oshawa" },
    { "@type": "City", "name": "Newmarket" },
    { "@type": "City", "name": "Aurora" },
    { "@type": "City", "name": "Scarborough" },
    { "@type": "City", "name": "North York" },
    { "@type": "City", "name": "Etobicoke" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Autism Therapy Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "In-Home ABA Therapy",
          "description": "Applied Behavior Analysis therapy delivered in your home environment"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Caregiver Coaching",
          "description": "Training and support for parents and caregivers"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Behaviour Support",
          "description": "Strategies for managing challenging behaviours"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Skills Assessment",
          "description": "Comprehensive evaluation and individualized treatment planning"
        }
      }
    ]
  }
};

const FAQPage = () => {
  return (
    <>
      <Helmet>
        <title>In-Home Autism Therapy in the GTA | FAQ (Top 25) | Side by Side Therapy</title>
        <meta name="description" content="Top 25 FAQs about in-home autism therapy across the Greater Toronto Area (GTA) and surrounding regions. Learn about services, costs, funding, approach, and what to expect." />
        <meta property="og:title" content="In-Home Autism Therapy in the GTA | FAQ" />
        <meta property="og:description" content="Top 25 FAQs about in-home autism therapy across the GTA and surrounding areas." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://sidebysidetherapy.ca/faq" />
        
        {/* Geo meta tags for local SEO */}
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Toronto" />
        <meta name="geo.position" content="43.6532;-79.3832" />
        <meta name="ICBM" content="43.6532, -79.3832" />
        
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-muted py-16 border-b border-border">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              In-Home Autism Therapy in the GTA & Surrounding Areas — FAQ
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Top 25 frequently asked questions about our in-home autism therapy services across the Greater Toronto Area (GTA) and nearby communities.
            </p>
            <p className="mt-4 text-sm text-muted-foreground bg-card border border-border rounded-lg p-4 max-w-3xl">
              <strong>Note:</strong> This page is informational and not a substitute for medical advice. If safety is a concern, call 911 or visit the nearest emergency department.
            </p>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-8 bg-card border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted rounded-xl p-6 border border-border">
                <h2 className="text-xl font-display font-semibold text-foreground mb-2">
                  Want to know if we serve your area?
                </h2>
                <p className="text-muted-foreground">
                  We cover Toronto, Peel, York, Durham, Halton, and many surrounding communities. Ask us about clinician availability in your neighbourhood.
                </p>
              </div>
              <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
                <h2 className="text-xl font-display font-semibold text-foreground mb-2">
                  Book a free discovery call
                </h2>
                <p className="text-muted-foreground mb-4">
                  We'll learn about your goals and recommend next steps.
                </p>
                <Button variant="hero" asChild>
                  <a href="tel:647-955-5995">
                    <Phone className="h-4 w-4 mr-2" />
                    Contact Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="border border-border rounded-xl px-6 bg-card shadow-soft hover:shadow-card transition-shadow"
                  >
                    <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline py-5">
                      <span className="flex items-start gap-3">
                        <span className="text-teal font-semibold shrink-0">{index + 1})</span>
                        <span>{faq.question}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 pl-8 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-muted border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-xl p-8 border border-border shadow-soft">
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">Contact</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <a href="tel:647-955-5995" className="text-muted-foreground hover:text-primary transition-colors">
                        647-955-5995
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <a href="mailto:info@sidebysidetherapy.ca" className="text-muted-foreground hover:text-primary transition-colors">
                        info@sidebysidetherapy.ca
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Service Area</p>
                      <p className="text-muted-foreground">Greater Toronto Area (GTA) + surrounding communities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Hours</p>
                      <p className="text-muted-foreground">Mon–Fri 9am–7pm (some evenings/weekends available)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default FAQPage;
