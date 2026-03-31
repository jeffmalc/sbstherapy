import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react";

const serviceAreas = [
  "Toronto", "North York", "Scarborough", "Etobicoke", "East York",
  "Mississauga", "Brampton", "Caledon", "Oakville", "Burlington", "Milton", "Halton Hills", "Georgetown",
  "Vaughan", "Markham", "Richmond Hill", "Thornhill", "Aurora", "Newmarket", "East Gwillimbury",
  "Georgina", "King", "Stouffville", "Pickering", "Ajax", "Whitby", "Oshawa", "Clarington",
  "Uxbridge", "Scugog", "Brock", "Peel", "Durham", "Halton", "York Region"
];

const citySlugMap: Record<string, string> = {
  "Toronto": "toronto", "North York": "north-york", "Scarborough": "scarborough",
  "Etobicoke": "etobicoke", "East York": "east-york", "Mississauga": "mississauga",
  "Brampton": "brampton", "Caledon": "caledon", "Oakville": "oakville",
  "Burlington": "burlington", "Milton": "milton", "Halton Hills": "halton-hills",
  "Georgetown": "georgetown", "Vaughan": "vaughan", "Markham": "markham",
  "Richmond Hill": "richmond-hill", "Thornhill": "thornhill", "Aurora": "aurora",
  "Newmarket": "newmarket", "East Gwillimbury": "east-gwillimbury", "Georgina": "georgina",
  "King": "king", "Stouffville": "stouffville", "Pickering": "pickering",
  "Ajax": "ajax", "Whitby": "whitby", "Oshawa": "oshawa", "Clarington": "clarington",
  "Uxbridge": "uxbridge", "Scugog": "scugog", "Brock": "brock",
};

const linkifyCities = (text: string) => {
  // Sort city names by length (longest first) to avoid partial matches
  const cities = Object.keys(citySlugMap).sort((a, b) => b.length - a.length);
  const regex = new RegExp(`\\b(${cities.map(c => c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})\\b`, 'g');
  const parts: (string | JSX.Element)[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const city = match[1];
    parts.push(
      <a key={match.index} href={`/service-area/${citySlugMap[city]}`} className="text-primary hover:underline font-medium">
        {city}
      </a>
    );
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts.length > 0 ? parts : text;
};

const faqData = [
  {
    question: "What is in-home autism therapy?",
    answer: "In-home autism therapy brings evidence-informed support to your child in the home environment. Sessions can focus on functional skills, communication, play, behaviour support, and caregiver coaching using goals tailored to your family."
  },
  {
    question: "Which areas does Side by Side Therapy serve?",
    answer: "We serve the Greater Toronto Area and surrounding regions, including Toronto (North York, Scarborough, Etobicoke, East York), Mississauga, Brampton, Caledon, Oakville, Burlington, Milton, Halton Hills, Georgetown, Vaughan, Markham, Richmond Hill, Thornhill, Aurora, Newmarket, East Gwillimbury, Georgina, King, Stouffville, Pickering, Ajax, Whitby, Oshawa, Clarington, Uxbridge, Scugog, and Brock. Availability can vary by clinician coverage."
  },
  {
    question: "What ages do you work with?",
    answer: "We typically support children from toddlerhood through adolescence. Planning is individualized based on your child's needs, goals, and family priorities."
  },
  {
    question: "Do you provide ABA therapy?",
    answer: "We provide behaviour-analytic and skills-based supports that may include ABA principles when appropriate. Our approach is collaborative and focused on practical, meaningful outcomes for the child and family."
  },
  {
    question: "Is your approach play-based or naturalistic?",
    answer: "Often, yes. We commonly use naturalistic, play-based teaching within everyday routines to help skills generalize to real life. Strategies are tailored to your child and goals."
  },
  {
    question: "What goals can in-home therapy help with?",
    answer: "Common goals include communication, play and social engagement, emotional regulation, daily living skills, transitions and routines, independence, and reducing behaviours that interfere with learning or safety."
  },
  {
    question: "What does a typical session look like?",
    answer: "A session may include rapport building, structured and naturalistic teaching, play-based practice, behaviour support strategies, and caregiver coaching. We track progress and adjust goals over time."
  },
  {
    question: "Do parents or caregivers need to be present?",
    answer: "For most families, yes—at least for part of the session. Caregiver involvement supports carryover between sessions and helps strategies fit your routines."
  },
  {
    question: "How do you create an individualized plan?",
    answer: "We begin with intake and collaborative goal setting. We may use observation, caregiver interviews, and skills/behaviour assessments to create a plan with measurable targets and practical strategies."
  },
  {
    question: "Do you offer an initial assessment?",
    answer: "Yes. Initial assessments typically include caregiver interview, observation, and a written summary of needs and recommendations. Tools used depend on age and goals."
  },
  {
    question: "How often are sessions and how long are they?",
    answer: "Many families start with 1–3 sessions per week, typically 60–120 minutes. Frequency depends on goals, availability, funding, and sustainability for your family."
  },
  {
    question: "Can you help with aggression, tantrums, or other challenging behaviours?",
    answer: "Yes. We support behaviours such as aggression, elopement risk, self-injury, tantrums, refusal, and rigidity. Plans focus on safety, understanding triggers, teaching replacement skills, and adjusting environments and routines."
  },
  {
    question: "Is your therapy neurodiversity-affirming?",
    answer: "We aim to be neurodiversity-affirming by prioritizing dignity, autonomy, and functional communication. Goals are chosen collaboratively and focus on quality of life—not masking."
  },
  {
    question: "Do you work with non-speaking or minimally speaking children?",
    answer: "Yes. We support communication using a range of methods, including AAC, picture-based systems, sign, and speech-generating devices, depending on needs."
  },
  {
    question: "Do you support AAC and communication devices?",
    answer: "Yes. We support AAC implementation and caregiver training, and we help integrate communication into daily routines. We can also collaborate with SLPs when involved."
  },
  {
    question: "Can you collaborate with school, daycare, or other providers?",
    answer: "With consent, yes. We can collaborate with educators, daycare teams, SLPs, OTs, psychologists, and physicians to align goals and strategies across settings."
  },
  {
    question: "Do you provide caregiver coaching?",
    answer: "Yes. Caregiver coaching is central to our model. We teach practical strategies for home routines and problem-solve together as needs change."
  },
  {
    question: "What if my child has multiple diagnoses or complex needs?",
    answer: "We often support children with co-occurring needs (e.g., ADHD, anxiety, developmental delays). Planning focuses on functional goals and strategies that fit your home and daily life."
  },
  {
    question: "Do you offer evenings or weekends?",
    answer: "Some clinicians offer evenings or weekends depending on availability. We'll do our best to match your preferred schedule."
  },
  {
    question: "How do you measure progress?",
    answer: "We track progress using measurable targets, session notes, and periodic reviews. Tracking may include skill independence, frequency of behaviours, and caregiver feedback."
  },
  {
    question: "How long does therapy last?",
    answer: "It varies. Some families use short-term coaching for specific routines, while others prefer ongoing support. We review goals regularly and adjust intensity based on progress and priorities."
  },
  {
    question: "Do you offer support for teens?",
    answer: "Yes, depending on clinician availability and fit. Teen goals often include independence, executive functioning supports, emotional regulation, community skills, and social relationships."
  },
  {
    question: "What are your rates and do you offer packages?",
    answer: "Rates depend on the clinician's credentials and the service type (assessment, direct therapy, supervision, caregiver coaching). Contact us for current rates and any package options."
  },
  {
    question: "Do you provide receipts for insurance?",
    answer: "Yes. We provide receipts and documentation commonly required by extended health benefit plans. Coverage varies by insurer and provider designation."
  },
  {
    question: "How do we get started?",
    answer: "Book a discovery call or intake. We'll learn about your goals, recommend next steps, match you with a clinician, and schedule an assessment or first session."
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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Side by Side Therapy",
  "url": "https://sidebysidetherapy.ca/",
  "image": "https://sidebysidetherapy.ca/logo.png",
  "telephone": "+1-647-955-5995",
  "email": "info@sidebysidetherapy.ca",
  "areaServed": [
    "Toronto", "North York", "Scarborough", "Etobicoke", "East York",
    "Mississauga", "Brampton", "Caledon", "Oakville", "Burlington", "Milton", "Halton Hills", "Georgetown",
    "Vaughan", "Markham", "Richmond Hill", "Thornhill", "Aurora", "Newmarket", "East Gwillimbury",
    "Georgina", "King", "Stouffville", "Pickering", "Ajax", "Whitby", "Oshawa", "Clarington",
    "Uxbridge", "Scugog", "Brock", "Peel", "Durham", "Halton", "York Region"
  ],
  "knowsAbout": [
    "In-home autism therapy",
    "Caregiver coaching",
    "Behaviour support",
    "Communication supports",
    "AAC (augmentative and alternative communication)",
    "Social skills",
    "Daily living skills",
    "School collaboration"
  ]
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
  "areaServed": serviceAreas.map(area => ({
    "@type": "City",
    "name": area
  }))
};

const FAQPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Side by Side Therapy | In-Home Autism Therapy in the GTA — Top 25 FAQs</title>
        <meta name="description" content="Side by Side Therapy provides in-home autism therapy across Toronto, Peel, York Region, Durham, and surrounding areas. Read our top 25 FAQs about services, approach, funding, and what to expect." />
        <meta property="og:title" content="Side by Side Therapy | In-Home Autism Therapy in the GTA — FAQ" />
        <meta property="og:description" content="Top 25 FAQs about in-home autism therapy across the GTA and surrounding areas." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://sidebysidetherapy.ca/faq" />
        
        {/* Geo meta tags for local SEO */}
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Toronto" />
        <meta name="geo.position" content="43.6532;-79.3832" />
        <meta name="ICBM" content="43.6532, -79.3832" />
        
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-muted py-16 border-b border-border">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Side by Side Therapy — In-Home Autism Therapy FAQ
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Top 25 frequently asked questions about our in-home autism therapy services across the GTA and surrounding areas.
            </p>
            <p className="mt-4 text-sm text-muted-foreground bg-card border border-border rounded-lg p-4 max-w-3xl">
              <strong>Note:</strong> This page is informational and not a substitute for medical advice. If safety is a concern, call 911 or visit the nearest emergency department.
            </p>
            
            {/* Service Area Chips */}
            <div className="mt-6">
              <p className="font-semibold text-foreground mb-3">Service area:</p>
              <div className="flex flex-wrap gap-2" aria-label="Service Areas">
                {serviceAreas.map((area, index) => {
                  const slug = citySlugMap[area];
                  return slug ? (
                    <a
                      key={index}
                      href={`/service-area/${slug}`}
                      className="text-sm px-3 py-1.5 bg-card border border-border rounded-full text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
                    >
                      {area}
                    </a>
                  ) : (
                    <span
                      key={index}
                      className="text-sm px-3 py-1.5 bg-card border border-border rounded-full text-muted-foreground"
                    >
                      {area}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-8 bg-card border-b border-border" aria-label="Primary Call To Action">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted rounded-xl p-6 border border-border">
                <h2 className="text-xl font-display font-semibold text-foreground mb-2">
                  Not sure which service is right?
                </h2>
                <p className="text-muted-foreground">
                  We'll learn about your child, your goals, and recommend next steps for in-home support across the GTA and surrounding areas.
                </p>
              </div>
              <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
                <h2 className="text-xl font-display font-semibold text-foreground mb-2">
                  Book a discovery call
                </h2>
                <p className="text-muted-foreground mb-4">
                  Ask about availability in your neighbourhood and preferred times.
                </p>
                <Button variant="hero" asChild>
                  <a href="#contact">
                    <Phone className="h-4 w-4 mr-2" />
                    Contact Side by Side Therapy
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-background" aria-label="FAQ List">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    id={`q${index + 1}`}
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
        <section id="contact" className="py-16 bg-muted border-t border-border" aria-label="Contact Side by Side Therapy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-xl p-8 border border-border shadow-soft">
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">Contact Side by Side Therapy</h2>
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
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
                    <Globe className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Website</p>
                      <a href="https://sidebysidetherapy.ca" className="text-muted-foreground hover:text-primary transition-colors">
                        sidebysidetherapy.ca
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Hours</p>
                      <p className="text-muted-foreground">24/7</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 pt-4 border-t border-border">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-2">Service Area</p>
                    <p className="text-muted-foreground text-sm">
                      Toronto • North York • Scarborough • Etobicoke • Mississauga • Brampton • Caledon • Oakville • Burlington • Milton • Halton Hills • Vaughan • Markham • Richmond Hill • Aurora • Newmarket • Thornhill • Stouffville • King • Georgina • Pickering • Ajax • Whitby • Oshawa • Clarington • Uxbridge
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </PageTransition>
  );
};

export default FAQPage;
