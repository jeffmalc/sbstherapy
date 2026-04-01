import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Phone, Mail, AlertCircle, DollarSign, ArrowRight, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface PricingRow {
  professional: string;
  hours: string;
  rate: string;
  total: string;
}

interface PricingTable {
  title: string;
  description?: string;
  link?: string;
  rows: PricingRow[];
  totalPerCycle: string;
}

const pricingData: PricingTable[] = [
  {
    title: "Focused ABA – 5 Hours Weekly",
    description: "Ideal for targeted skill development with focused intervention.",
    link: "/services/aba-therapy",
    rows: [
      { professional: "Instructor Therapist (IT)", hours: "20 direct hours", rate: "$75", total: "$1,500" },
      { professional: "BCBA – Clinical Supervision", hours: "3 hrs (1.5 hrs every 2 weeks)", rate: "$165", total: "$495" },
      { professional: "BCBA – Program Development", hours: "2 hrs indirect", rate: "$85", total: "$170" },
    ],
    totalPerCycle: "$2,165",
  },
  {
    title: "Focused ABA – 10 Hours Weekly",
    description: "Enhanced support with increased therapy hours and supervision.",
    link: "/services/aba-therapy",
    rows: [
      { professional: "Instructor Therapist (IT)", hours: "40 direct hours", rate: "$75", total: "$3,000" },
      { professional: "Senior Therapist (ST) – Supervision", hours: "4 hrs (2 hrs every 2 weeks)", rate: "$95", total: "$380" },
      { professional: "BCBA – Clinical Supervision", hours: "2 hours", rate: "$165", total: "$330" },
      { professional: "Program Development (BCBA or ST)", hours: "2 hrs indirect", rate: "$85", total: "$170" },
    ],
    totalPerCycle: "$3,880",
  },
  {
    title: "Focused ABA – 15 Hours Weekly",
    description: "Comprehensive focused intervention with intensive supervision.",
    link: "/services/aba-therapy",
    rows: [
      { professional: "Instructor Therapist (IT)", hours: "60 direct hours", rate: "$75", total: "$4,500" },
      { professional: "Senior Therapist (ST) – Supervision", hours: "6 hours", rate: "$95", total: "$570" },
      { professional: "BCBA – Clinical Supervision", hours: "2 hours", rate: "$165", total: "$330" },
      { professional: "Program Development (BCBA or ST)", hours: "2 hrs indirect", rate: "$85", total: "$170" },
    ],
    totalPerCycle: "$5,570",
  },
  {
    title: "Comprehensive ABA – 20 Hours Weekly",
    description: "Full comprehensive ABA program for maximum progress.",
    link: "/services/aba-therapy",
    rows: [
      { professional: "Instructor Therapist (IT)", hours: "80 direct hours", rate: "$75", total: "$6,000" },
      { professional: "Senior Therapist (ST) – Supervision", hours: "8 hours", rate: "$95", total: "$760" },
      { professional: "BCBA – Clinical Supervision", hours: "2 hours", rate: "$165", total: "$330" },
      { professional: "Program Development (BCBA or ST)", hours: "2 hrs indirect", rate: "$85", total: "$170" },
    ],
    totalPerCycle: "$7,260",
  },
  {
    title: "1:1 BCBA Coaching",
    description: "Direct BCBA-led parent or caregiver coaching sessions.",
    link: "/services/bcba-mentorship",
    rows: [
      { professional: "BCBA – Direct Service", hours: "4 hours", rate: "$165", total: "$660" },
      { professional: "BCBA – Program Development", hours: "2 hours", rate: "$85", total: "$170" },
    ],
    totalPerCycle: "$830",
  },
  {
    title: "Occupational Therapy",
    description: "Addressing sensory, motor, and daily living skill challenges.",
    link: "/services/occupational-therapy",
    rows: [
      { professional: "Occupational Therapist – Direct", hours: "4 hrs (1 hr weekly)", rate: "$165", total: "$660" },
      { professional: "Occupational Therapist – Indirect", hours: "2 hrs program development", rate: "$85", total: "$170" },
    ],
    totalPerCycle: "$830",
  },
  {
    title: "Speech & Language Therapy",
    description: "Improving verbal and nonverbal communication skills.",
    link: "/services/speech-therapy",
    rows: [
      { professional: "Speech-Language Pathologist – Direct", hours: "4 hrs (1 hr weekly)", rate: "$165", total: "$660" },
      { professional: "Speech-Language Pathologist – Indirect", hours: "2 hrs program development", rate: "$85", total: "$170" },
    ],
    totalPerCycle: "$830",
  },
  {
    title: "Respite Services",
    description: "Providing families with much-needed breaks while ensuring quality care.",
    link: "/services/respite-services",
    rows: [
      { professional: "Respite Worker", hours: "Min. 2 hrs direct at a time", rate: "$48", total: "$96" },
    ],
    totalPerCycle: "$384",
  },
];

const rateCards = [
  { role: "Instructor Therapist (IT)", rate: "$75/hr", color: "bg-secondary/10 text-secondary" },
  { role: "Senior Therapist (ST)", rate: "$95/hr", color: "bg-primary/10 text-primary" },
  { role: "BCBA – Direct Service", rate: "$165/hr", color: "bg-accent/10 text-accent" },
  { role: "BCBA / ST – Indirect", rate: "$85/hr", color: "bg-muted text-muted-foreground" },
  { role: "Respite Worker", rate: "$48/hr", color: "bg-secondary/10 text-secondary" },
];

const PricingTableComponent = ({ table, index }: { table: PricingTable; index: number }) => (
  <AnimatedSection animation="fade-up" delay={index * 80}>
    <Card className="overflow-hidden border-border/50 shadow-soft hover:shadow-elevated transition-shadow duration-300">
      <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5 pb-4">
        <CardTitle className="text-xl font-bold text-foreground">
          {table.link ? (
            <Link to={table.link} className="hover:text-primary transition-colors inline-flex items-center gap-2 group">
              {table.title}
              <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ) : (
            table.title
          )}
        </CardTitle>
        {table.description && (
          <p className="text-sm text-muted-foreground mt-1">{table.description}</p>
        )}
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-muted/30">
                <th className="text-left p-4 font-semibold text-foreground">Professional</th>
                <th className="text-left p-4 font-semibold text-foreground">Hours / 4 Weeks</th>
                <th className="text-right p-4 font-semibold text-foreground">Rate</th>
                <th className="text-right p-4 font-semibold text-foreground">Total</th>
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, i) => (
                <tr key={i} className="border-b border-border/30 hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium text-foreground/90">{row.professional}</td>
                  <td className="p-4 text-muted-foreground">{row.hours}</td>
                  <td className="p-4 text-right font-medium text-foreground/80">{row.rate}</td>
                  <td className="p-4 text-right font-semibold text-foreground">{row.total}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-primary/5">
                <td colSpan={3} className="p-4 font-bold text-foreground">Total per 4 Weeks</td>
                <td className="p-4 text-right font-bold text-lg text-primary">{table.totalPerCycle}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </CardContent>
    </Card>
  </AnimatedSection>
);

const pricesSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Service Prices | Side by Side Therapy",
  "description": "Transparent pricing for ABA therapy, Speech Therapy, Occupational Therapy, and more in Toronto and the GTA. OAP-approved provider.",
  "url": "https://sidebysidetherapy.ca/prices",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Side by Side Therapy",
    "url": "https://sidebysidetherapy.ca"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sidebysidetherapy.ca" },
      { "@type": "ListItem", "position": 2, "name": "Prices", "item": "https://sidebysidetherapy.ca/prices" }
    ]
  }
};

const servicesOfferedSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Side by Side Therapy Service Pricing",
  "itemListElement": pricingData.map((item, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "item": {
      "@type": "Offer",
      "name": item.title,
      "description": item.description,
      "price": item.totalPerCycle.replace(/[$,]/g, ""),
      "priceCurrency": "CAD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": item.totalPerCycle.replace(/[$,]/g, ""),
        "priceCurrency": "CAD",
        "unitText": "per 4 weeks",
        "referenceQuantity": { "@type": "QuantitativeValue", "value": 4, "unitCode": "WK" }
      },
      "offeredBy": {
        "@type": "MedicalOrganization",
        "name": "Side by Side Therapy",
        "url": "https://sidebysidetherapy.ca"
      },
      "areaServed": [
        { "@type": "City", "name": "Toronto" },
        { "@type": "City", "name": "Mississauga" },
        { "@type": "City", "name": "Brampton" },
        { "@type": "City", "name": "Markham" },
        { "@type": "City", "name": "Vaughan" },
        { "@type": "City", "name": "Richmond Hill" },
        { "@type": "City", "name": "Oakville" },
        { "@type": "City", "name": "Oshawa" },
        { "@type": "City", "name": "Ajax" },
        { "@type": "City", "name": "Pickering" },
        { "@type": "City", "name": "Whitby" },
        { "@type": "City", "name": "Burlington" },
        { "@type": "City", "name": "Milton" },
        { "@type": "City", "name": "Aurora" },
        { "@type": "City", "name": "Newmarket" }
      ]
    }
  }))
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does ABA therapy cost in Toronto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ABA therapy at Side by Side Therapy starts at $2,165 per 4 weeks for focused 5-hour weekly programs and goes up to $7,260 per 4 weeks for comprehensive 20-hour weekly programs. All prices include required supervision and program development."
      }
    },
    {
      "@type": "Question",
      "name": "Does Side by Side Therapy accept OAP funding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Side by Side Therapy is an approved Ontario Autism Program (OAP) provider. We help families navigate funding options to access high-quality therapeutic services."
      }
    },
    {
      "@type": "Question",
      "name": "What is included in the ABA therapy price?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All ABA therapy prices include direct therapy hours with an Instructor Therapist, clinical supervision by a BCBA or Senior Therapist, and indirect program development hours. There are no additional costs for required assessments."
      }
    }
  ]
};

const Prices = () => {
  return (
    <>
      <Helmet>
        <title>Service Prices | Side by Side Therapy – ABA & Autism Therapy Rates Toronto</title>
        <meta name="description" content="Transparent pricing for ABA therapy, Speech Therapy, Occupational Therapy, Respite Services, and BCBA coaching in Toronto & GTA. OAP-approved provider. Call 647-955-5995." />
        <meta name="keywords" content="ABA therapy cost Toronto, autism therapy prices, speech therapy rates GTA, occupational therapy pricing, OAP approved provider rates, BCBA coaching cost, respite services pricing Toronto" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sidebysidetherapy.ca/prices" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sidebysidetherapy.ca/prices" />
        <meta property="og:title" content="Service Prices | Side by Side Therapy – Toronto ABA Therapy Rates" />
        <meta property="og:description" content="Transparent pricing for ABA therapy, Speech Therapy, Occupational Therapy & more. OAP-approved. Serving Toronto & the GTA." />
        <meta property="og:image" content="https://sidebysidetherapy.ca/og-image.jpg" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:site_name" content="Side by Side Therapy" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Service Prices | Side by Side Therapy" />
        <meta name="twitter:description" content="Transparent ABA therapy & autism support pricing in Toronto & GTA. OAP approved." />

        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Toronto" />
        <meta name="geo.position" content="43.6532;-79.3832" />
        <meta name="ICBM" content="43.6532, -79.3832" />

        <script type="application/ld+json">{JSON.stringify(pricesSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(servicesOfferedSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <section className="pt-28 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
            <div className="container mx-auto px-4">
              <AnimatedSection animation="fade-up">
                <div className="text-center max-w-3xl mx-auto">
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <DollarSign className="h-4 w-4" />
                    Transparent Pricing
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                    Service <span className="text-primary">Prices</span>
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Clear, upfront pricing for all our therapy services. All ABA prices include supervision and program development — no hidden costs. We are an <strong>OAP-approved provider</strong>.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* OAP Banner */}
          <section className="py-4">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Link
                  to="/oap"
                  className="group flex items-center gap-4 bg-gradient-to-r from-secondary/15 via-secondary/10 to-primary/10 border border-secondary/30 hover:border-secondary/50 rounded-2xl p-5 md:p-6 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Award className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-foreground text-sm md:text-base">
                      OAP-Approved Provider — Your services may be funded!
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground mt-0.5">
                      Learn how the Ontario Autism Program can help cover therapy costs for your family.
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-secondary flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </section>

          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <AnimatedSection animation="fade-up">
                <h2 className="text-2xl font-bold text-foreground text-center mb-8">Hourly Rates at a Glance</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
                  {rateCards.map((card) => (
                    <div key={card.role} className={`rounded-xl p-4 text-center ${card.color} transition-transform hover:scale-105`}>
                      <p className="font-bold text-lg">{card.rate}</p>
                      <p className="text-xs mt-1 opacity-80">{card.role}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>

          <section className="py-16 bg-muted/20">
            <div className="container mx-auto px-4">
              <AnimatedSection animation="fade-up">
                <h2 className="text-3xl font-bold text-foreground text-center mb-4">ABA Therapy Services</h2>
                <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-4">
                  Prices include direct and indirect hours required for supervision. No additional costs for assessments completed during initial treatment hours.
                </p>
                <div className="flex items-start gap-2 justify-center mb-12 text-sm text-muted-foreground bg-secondary/5 rounded-lg p-3 max-w-xl mx-auto">
                  <AlertCircle className="h-4 w-4 mt-0.5 text-secondary flex-shrink-0" />
                  <span>Supervision hours are not negotiable and are essential for quality care.</span>
                </div>
              </AnimatedSection>
              <div className="grid gap-8 max-w-4xl mx-auto">
                {pricingData.slice(0, 5).map((table, index) => (
                  <PricingTableComponent key={table.title} table={table} index={index} />
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <AnimatedSection animation="fade-up">
                <h2 className="text-3xl font-bold text-foreground text-center mb-12">Other Professional Services</h2>
              </AnimatedSection>
              <div className="grid gap-8 max-w-4xl mx-auto">
                {pricingData.slice(5).map((table, index) => (
                  <PricingTableComponent key={table.title} table={table} index={index} />
                ))}
              </div>
            </div>
          </section>

          <section className="py-12 bg-muted/20">
            <div className="container mx-auto px-4 max-w-3xl">
              <AnimatedSection animation="fade-up">
                <Card className="border-border/50">
                  <CardContent className="p-8">
                    <h3 className="text-lg font-bold text-foreground mb-4">Important Notes</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        Prices are subject to change. Prices are not negotiable.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        Prices for Psychology services (e.g., Psycho-Educational Assessments) are available upon request.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        Customized service options are available upon request.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        Additional travel charges may apply if your service provider is required to travel during your session.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </section>

          <section className="py-16 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
            <div className="container mx-auto px-4 text-center">
              <AnimatedSection animation="fade-up">
                <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Contact us for a free consultation. We'll help you find the right service plan and navigate OAP funding options.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:647-955-5995"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity"
                  >
                    <Phone className="h-5 w-5" />
                    Call 647-955-5995
                  </a>
                  <a
                    href="mailto:info@sidebysidetherapy.ca"
                    className="inline-flex items-center justify-center gap-2 bg-card text-foreground border border-border px-8 py-4 rounded-xl font-semibold hover:bg-muted/50 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    Email Us
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Prices;
