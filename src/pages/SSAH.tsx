import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  Phone,
  ExternalLink,
  HelpCircle,
  DollarSign,
  Heart,
  Users,
  ArrowLeft,
  ClipboardCheck,
  FileText,
  Home,
  Sparkles,
  HandHeart,
  Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { linkifyCities } from "@/lib/cityLinks";

const eligibilityCriteria = [
  "Your child has a physical and/or developmental disability",
  "Your child is under 18 years of age",
  "Your child lives at home with you (not in a residential placement)",
  "You are an Ontario resident",
  "You are caring for your child at home",
];

const fundingUses = [
  {
    title: "Respite Services",
    icon: Heart,
    description:
      "Temporary relief for primary caregivers, allowing them to take a break while their child receives quality care.",
    examples: [
      "In-home respite workers",
      "Out-of-home respite programs",
      "Overnight respite stays",
      "Emergency respite care",
    ],
  },
  {
    title: "Personal Development",
    icon: Sparkles,
    description:
      "Activities and supports that promote your child's personal growth, skill development, and independence.",
    examples: [
      "Recreational programs and camps",
      "Social skills groups",
      "Life skills training",
      "Community participation activities",
    ],
  },
  {
    title: "Daily Living Support",
    icon: Home,
    description:
      "Help with day-to-day activities that support your child's participation in family and community life.",
    examples: [
      "Support during daily routines",
      "Assistance with personal care",
      "Help with community outings",
      "Support for skill-building at home",
    ],
  },
];

const applicationSteps = [
  {
    step: 1,
    title: "Contact Your Local Office",
    icon: Phone,
    description:
      "Reach out to your regional office of the Ministry of Children, Community and Social Services to request an application.",
    tip: "You can also download the application form from the Ontario government website.",
  },
  {
    step: 2,
    title: "Complete the Application",
    icon: FileText,
    description:
      "Fill out the SSAH application form with details about your child's disability, your family situation, and the types of support you need.",
    tip: "Be as detailed as possible when describing your child's needs — this helps determine your funding amount.",
  },
  {
    step: 3,
    title: "Provide Supporting Documents",
    icon: ClipboardCheck,
    description:
      "Submit supporting documentation including medical or diagnostic reports confirming your child's disability.",
    tip: "If your child has an autism diagnosis, include the diagnostic report along with any therapy recommendations.",
  },
  {
    step: 4,
    title: "Assessment & Approval",
    icon: Users,
    description:
      "A worker will review your application and may contact you for additional information. Funding is allocated based on assessed need.",
    tip: "Processing times can vary. Follow up with your local office if you haven't heard back within a few weeks.",
  },
  {
    step: 5,
    title: "Receive Funding & Submit Expenses",
    icon: DollarSign,
    description:
      "Once approved, you'll receive funding to purchase eligible services. You must submit expense reports to account for how funds are used.",
    tip: "Keep all receipts and records organized — you'll need to submit them when reporting your expenses.",
  },
];

const faqs = [
  {
    question: "What is the Special Services at Home (SSAH) program?",
    answer:
      "Special Services at Home (SSAH) is an Ontario government program that provides funding to families caring for a child with a developmental and/or physical disability at home. The funding helps families purchase services and supports such as respite care, personal development activities, and daily living assistance.",
  },
  {
    question: "Can I use SSAH funding for autism therapy services?",
    answer:
      "SSAH funding can be used for services that support your child's personal growth and development, as well as respite care. While it is not specifically designed for clinical therapy, many families use it for recreational therapy, social skills programs, respite workers, and community participation activities. Contact us to discuss how Side by Side Therapy services may align with your SSAH funding.",
  },
  {
    question: "How much funding will my family receive?",
    answer:
      "Funding amounts vary based on your child's assessed needs and the availability of funds. The amount is determined through the application and assessment process. Funding is provided as a reimbursement — you pay for services first and then submit expenses for reimbursement.",
  },
  {
    question: "Can I use SSAH and OAP funding together?",
    answer:
      "Yes, families can access both SSAH and OAP funding, as they are separate programs with different purposes. However, you cannot use both programs to pay for the same service at the same time. Many families use OAP funding for clinical therapy and SSAH funding for respite and recreational activities.",
  },
  {
    question: "How long does the application process take?",
    answer:
      "Processing times vary depending on your regional office and current demand. It can take several weeks to a few months from application to approval. We recommend applying as early as possible and following up with your local office regularly.",
  },
  {
    question: "What happens when my child turns 18?",
    answer:
      "When your child turns 18, SSAH funding ends. However, adults with developmental disabilities may be eligible for other programs such as Passport funding, which provides similar supports for adults. Contact your local Developmental Services Ontario (DSO) office to learn about adult services.",
  },
  {
    question: "Do I need to hire workers through an agency?",
    answer:
      "No, you have flexibility in how you use your SSAH funding. You can hire workers privately, use agency-based services, or enroll your child in eligible programs. You are responsible for managing the workers you hire, including any tax obligations if hiring privately.",
  },
  {
    question: "How do I submit my expenses?",
    answer:
      "You must submit expense reports to the Ministry for the period between April 1 and March 31 each year. Keep all receipts and invoices organized. You can submit expenses through the SSAH online portal or by mail. Expenses must be submitted by the deadline to maintain your funding.",
  },
];

const SSAH = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://sidebysidetherapy.ca",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Funding",
        item: "https://sidebysidetherapy.ca/oap",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Special Services at Home",
        item: "https://sidebysidetherapy.ca/ssah",
      },
    ],
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Special Services at Home (SSAH) Guide | Side by Side Therapy</title>
        <meta
          name="description"
          content="Learn about Ontario's Special Services at Home (SSAH) program. Get funding for respite care and personal development for your child with a disability. Guide & FAQ."
        />
        <meta
          name="keywords"
          content="Special Services at Home, SSAH, SSAH funding Ontario, respite care funding, disability funding Ontario, SSAH application, SSAH eligibility"
        />
        <link rel="canonical" href="https://sidebysidetherapy.ca/ssah" />
        <meta
          property="og:title"
          content="Special Services at Home (SSAH) Guide | Side by Side Therapy"
        />
        <meta
          property="og:description"
          content="Ontario SSAH program guide — funding for respite and personal development for children with disabilities."
        />
        <meta property="og:url" content="https://sidebysidetherapy.ca/ssah" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_CA" />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Toronto" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-secondary/10 via-background to-primary/10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(76,175,80,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(107,61,123,0.08),transparent_50%)]" />

          <div className="container mx-auto px-4 relative z-10">
            <Link
              to="/oap"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to OAP Guide
            </Link>

            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-secondary/20 text-secondary">
                <HandHeart className="w-4 h-4 mr-2" />
                Ontario Government Program
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Special Services at Home{" "}
                <span className="text-gradient">(SSAH)</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
                A guide to Ontario's SSAH program — funding to help families
                caring for a child with a physical and/or developmental
                disability at home.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <a
                    href="tel:647-955-5995"
                    className="flex items-center gap-2"
                  >
                    <Phone className="h-5 w-5" />
                    Get Help Applying
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a
                    href="https://www.ontario.ca/page/special-services-home#section-0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Visit Ontario.ca
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What is SSAH */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  What is Special Services at Home?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Understanding SSAH and how it can support your family.
                </p>
              </div>

              <div className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-3xl p-8 md:p-12 border border-secondary/10">
                <p className="text-lg leading-relaxed mb-6">
                  The{" "}
                  <strong>Special Services at Home (SSAH)</strong> program is
                  funded by the Ontario Ministry of Children, Community and
                  Social Services. It provides funding to help families caring
                  for a child with a developmental and/or physical disability
                  who lives at home.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  The program helps with two types of support:{" "}
                  <strong>respite services</strong> that give caregivers a
                  break, and <strong>personal growth and development</strong>{" "}
                  activities that help your child build skills and participate
                  in the community.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <div className="flex items-center gap-2 bg-background rounded-full px-4 py-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                    <span className="font-medium">Ages 0–17</span>
                  </div>
                  <div className="flex items-center gap-2 bg-background rounded-full px-4 py-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                    <span className="font-medium">Ontario Residents</span>
                  </div>
                  <div className="flex items-center gap-2 bg-background rounded-full px-4 py-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                    <span className="font-medium">Living at Home</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-secondary/20 text-secondary">
                <ClipboardCheck className="w-4 h-4 mr-2" />
                Eligibility
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Who is Eligible?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Your family may be eligible for SSAH if you meet these
                criteria.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {eligibilityCriteria.map((criteria, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-card p-5 rounded-xl border border-border/50 shadow-sm"
                  >
                    <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-lg">{criteria}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-accent/10 rounded-xl p-6 flex items-start gap-4">
                <HelpCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold mb-1">Good to know</p>
                  <p className="text-muted-foreground">
                    Children with an autism diagnosis are eligible for SSAH.
                    Many families use SSAH funding alongside their Ontario
                    Autism Program (OAP) funding for complementary services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Can Funding Be Used For */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-secondary/20 text-secondary">
                <DollarSign className="w-4 h-4 mr-2" />
                Funding Uses
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Can SSAH Funding Be Used For?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                SSAH funding supports respite care, personal development, and
                daily living assistance.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {fundingUses.map((use, index) => (
                <Card
                  key={index}
                  className="border-border/50 hover:border-secondary/30 transition-colors"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                      <use.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-lg">{use.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">
                      {use.description}
                    </p>
                    <ul className="space-y-2">
                      {use.examples.map((example, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">
                            {example}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How to Apply */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-secondary/20 text-secondary">
                <FileText className="w-4 h-4 mr-2" />
                Application Process
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How to Apply for SSAH
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Follow these steps to apply for Special Services at Home
                funding.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {applicationSteps.map((step, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-border/50 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-gradient-to-br from-secondary to-primary p-6 md:p-8 flex items-center justify-center md:w-32 flex-shrink-0">
                      <div className="text-center text-primary-foreground">
                        <div className="text-4xl font-bold mb-1">
                          {step.step}
                        </div>
                        <div className="text-sm opacity-80">Step</div>
                      </div>
                    </div>
                    <CardContent className="p-6 md:p-8 flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                          <step.icon className="h-6 w-6 text-secondary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      <div className="ml-16 bg-accent/10 rounded-lg p-4 flex items-start gap-3">
                        <HelpCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <p className="text-sm">
                          <strong>Tip:</strong> {step.tip}
                        </p>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Important Dates */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-secondary/20 text-secondary">
                  <Calendar className="w-4 h-4 mr-2" />
                  Important Information
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Key Things to Know
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-secondary/5 to-transparent rounded-2xl p-6 border border-secondary/10">
                  <h3 className="font-bold text-lg mb-3">Expense Reporting</h3>
                  <p className="text-muted-foreground text-sm">
                    You must submit expense reports for the funding period
                    (April 1 – March 31). Keep all receipts and invoices from
                    service providers organized throughout the year.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-2xl p-6 border border-primary/10">
                  <h3 className="font-bold text-lg mb-3">
                    Reimbursement Model
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    SSAH operates on a reimbursement basis — you pay for
                    eligible services first and then submit your expenses to be
                    reimbursed up to your approved funding amount.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-secondary/5 to-transparent rounded-2xl p-6 border border-secondary/10">
                  <h3 className="font-bold text-lg mb-3">
                    Use It or Lose It
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    SSAH funding does not roll over from year to year. Any
                    unused funds from one period do not carry forward to the
                    next. Plan your services accordingly to maximize your
                    funding.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-2xl p-6 border border-primary/10">
                  <h3 className="font-bold text-lg mb-3">
                    Combine with OAP
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    SSAH and OAP are separate programs. You can access both, but
                    cannot use both to pay for the same service simultaneously.
                    Use them for different types of support to maximize
                    benefits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Common questions about the Special Services at Home program.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-card rounded-xl border px-6"
                  >
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

        {/* CTA */}
        <section className="py-16 md:py-20 gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Need Help Navigating SSAH?
            </h2>
            <p className="mb-8 max-w-2xl mx-auto opacity-90">
              Our team can help you understand your funding options and connect
              you with the right services for your child. Contact us for a
              free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <a href="tel:647-955-5995">
                  <Phone className="h-4 w-4 mr-2" />
                  Call 647-955-5995
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <a href="mailto:info@sidebysidetherapy.ca">Email Us</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link to="/oap">View OAP Guide</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </PageTransition>
  );
};

export default SSAH;
