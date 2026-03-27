import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Heart,
  Award,
  Users,
  GraduationCap,
  Star,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  Home,
  Sparkles,
} from "lucide-react";

const jobPostings = [
  {
    id: "bcba",
    title: "Board Certified Behaviour Analyst (BCBA)",
    category: "Clinical",
    type: "Contract",
    location: "Greater Toronto Area, ON",
    remote: "In-Home / Community-Based",
    salary: "$85 – $120/hour",
    salaryCurrency: "CAD",
    salaryMin: 85,
    salaryMax: 120,
    salaryUnit: "HOUR",
    urgent: true,
    description:
      "Conduct functional behaviour assessments, develop individualized treatment plans, and supervise the implementation of ABA programs for children with Autism Spectrum Disorder. Provide clinical oversight, parent coaching, and mentor instructor therapists.",
    requirements: [
      "Board Certified Behaviour Analyst (BCBA) certification",
      "Registered with the College of Psychologists and Behaviour Analysts of Ontario (CPBAO) or eligible",
      "Experience working with children with Autism Spectrum Disorder",
      "Strong interpersonal and communication skills",
      "Ability to work independently in-home settings",
      "Valid driver's licence and reliable vehicle",
    ],
    niceToHave: [
      "Listed on the Ontario Autism Program provider list",
      "Experience with OAP-funded service delivery",
      "Bilingual (French/English) an asset",
    ],
  },
  {
    id: "rba",
    title: "Registered Behaviour Analyst (RBA)",
    category: "Clinical",
    type: "Contract",
    location: "Greater Toronto Area, ON",
    remote: "In-Home / Community-Based",
    salary: "Competitive rates",
    salaryCurrency: "CAD",
    salaryMin: 50,
    salaryMax: 80,
    salaryUnit: "HOUR",
    urgent: true,
    description:
      "Work under the supervision of BCBAs to deliver comprehensive ABA programs, conduct assessments, and implement behaviour intervention strategies for children with autism and special needs.",
    requirements: [
      "Registered Behaviour Analyst designation in Ontario",
      "Experience delivering ABA therapy to children",
      "Strong data collection and analysis skills",
      "Excellent communication with families and team members",
      "Valid driver's licence and reliable vehicle",
    ],
    niceToHave: [
      "Experience with OAP clinical framework",
      "Previous in-home therapy experience",
    ],
  },
  {
    id: "instructor-therapist",
    title: "Instructor Therapist / Registered Behaviour Technician (RBT)",
    category: "Therapy",
    type: "Part-Time / Full-Time",
    location: "Greater Toronto Area, ON",
    remote: "In-Home",
    salary: "$25 – $35/hour",
    salaryCurrency: "CAD",
    salaryMin: 25,
    salaryMax: 35,
    salaryUnit: "HOUR",
    urgent: true,
    description:
      "Work one-on-one with children diagnosed with Autism Spectrum Disorder in their homes, implementing ABA therapy programs designed by our BCBAs. Help children develop communication, social, self-help, and academic skills through evidence-based interventions.",
    requirements: [
      "University degree or diploma in a related field (Psychology, Education, Social Work, etc.)",
      "Experience working with children with special needs preferred",
      "RBT certification or willingness to obtain",
      "Patient, compassionate, and enthusiastic",
      "Valid driver's licence and reliable vehicle",
      "Clear Vulnerable Sector Police Check",
    ],
    niceToHave: [
      "Previous ABA therapy experience",
      "Knowledge of discrete trial training (DTT) and natural environment teaching (NET)",
      "First Aid / CPR certification",
    ],
  },
];

const benefits = [
  {
    icon: Home,
    title: "In-Home Work",
    description: "Provide therapy in the child's natural environment — no clinic commute.",
  },
  {
    icon: GraduationCap,
    title: "Professional Development",
    description: "Ongoing training, BCBA supervision hours, and mentorship opportunities.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Design your own caseload with flexible hours that work for you.",
  },
  {
    icon: Users,
    title: "Collaborative Team",
    description: "Join a trans-disciplinary team of BCBAs, SLPs, OTs, and recreation therapists.",
  },
  {
    icon: Heart,
    title: "Meaningful Impact",
    description: "Make a real difference in the lives of children with autism and their families.",
  },
  {
    icon: Award,
    title: "OAP-Approved Provider",
    description: "Work within Ontario's leading autism funding program with established clinical frameworks.",
  },
];

const generateJobPostingSchema = () =>
  jobPostings.map((job) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: `<p>${job.description}</p><h3>Requirements</h3><ul>${job.requirements.map((r) => `<li>${r}</li>`).join("")}</ul>${job.niceToHave ? `<h3>Nice to Have</h3><ul>${job.niceToHave.map((r) => `<li>${r}</li>`).join("")}</ul>` : ""}`,
    identifier: {
      "@type": "PropertyValue",
      name: "Side by Side Therapy",
      value: job.id,
    },
    datePosted: "2026-03-01",
    validThrough: "2026-12-31",
    employmentType: job.type.includes("Full") ? "FULL_TIME" : job.type.includes("Part") ? "PART_TIME" : "CONTRACTOR",
    hiringOrganization: {
      "@type": "Organization",
      name: "Side by Side Therapy",
      sameAs: "https://sidebysidetherapy.ca",
      logo: "https://sidebysidetherapy.ca/logo.png",
      url: "https://sidebysidetherapy.ca",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Toronto",
        addressRegion: "ON",
        addressCountry: "CA",
      },
    },
    applicantLocationRequirements: {
      "@type": "Country",
      name: "Canada",
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: job.salaryCurrency,
      value: {
        "@type": "QuantitativeValue",
        minValue: job.salaryMin,
        maxValue: job.salaryMax,
        unitText: job.salaryUnit,
      },
    },
    industry: "Healthcare",
    occupationalCategory: "29-1129.00",
    qualifications: job.requirements.join("; "),
    responsibilities: job.description,
    skills: job.niceToHave?.join(", ") || "",
    jobLocationType: "TELECOMMUTE",
  }));

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sidebysidetherapy.ca" },
    { "@type": "ListItem", position: 2, name: "Careers", item: "https://sidebysidetherapy.ca/jobs" },
  ],
};

const Jobs = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Careers at Side by Side Therapy | BCBA & ABA Therapist Jobs Toronto</title>
        <meta
          name="description"
          content="Join Side by Side Therapy — Toronto's leading OAP-approved autism therapy provider. Now hiring BCBAs, RBAs, and Instructor Therapists across the GTA. Flexible in-home positions with competitive pay."
        />
        <meta
          name="keywords"
          content="BCBA jobs Toronto, ABA therapist jobs GTA, behaviour analyst careers Ontario, RBT jobs, autism therapy careers, OAP provider jobs, instructor therapist Toronto, behaviour technician jobs"
        />
        <link rel="canonical" href="https://sidebysidetherapy.ca/jobs" />
        <meta property="og:title" content="Careers at Side by Side Therapy | BCBA & ABA Therapist Jobs Toronto" />
        <meta
          property="og:description"
          content="Join our trans-disciplinary team. Now hiring BCBAs, RBAs, and Instructor Therapists across the Greater Toronto Area."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sidebysidetherapy.ca/jobs" />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Toronto" />
        {generateJobPostingSchema().map((schema, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(107,61,123,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(76,175,80,0.08),transparent_50%)]" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30">
                <Briefcase className="w-4 h-4 mr-2" />
                We're Hiring
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Build Your Career <span className="text-gradient">Side by Side</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
                Join Toronto's leading OAP-approved autism therapy team. We're looking for passionate, qualified
                professionals who want to make a real difference in the lives of children and families.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Greater Toronto Area</span>
                </div>
                <div className="flex items-center gap-2">
                  <Home className="w-5 h-5 text-primary" />
                  <span>In-Home Services</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Flexible Hours</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Open Positions</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Current Opportunities</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're always looking for talented therapists to join our growing team across the GTA.
              </p>
            </div>

            <div className="space-y-8 max-w-4xl mx-auto">
              {jobPostings.map((job) => (
                <div
                  key={job.id}
                  className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">
                            {job.title}
                          </h3>
                          {job.urgent && (
                            <Badge className="bg-destructive/10 text-destructive border-destructive/20 text-xs">
                              <Sparkles className="w-3 h-3 mr-1" />
                              Actively Hiring
                            </Badge>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <Home className="w-4 h-4" />
                            {job.remote}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            {job.salary}
                          </span>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {job.category}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">{job.description}</p>

                    <div>
                      <h4 className="font-semibold mb-2">Requirements:</h4>
                      <ul className="space-y-1.5">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {job.niceToHave && (
                      <div>
                        <h4 className="font-semibold mb-2">Nice to Have:</h4>
                        <ul className="space-y-1.5">
                          {job.niceToHave.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Star className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="pt-4 border-t border-border/50">
                      <Button variant="hero" asChild>
                        <a href="mailto:info@sidebysidetherapy.ca?subject=Application: {{title}}" className="flex items-center gap-2">
                          Apply Now
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Why Join Us</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Why Work at Side by Side Therapy</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We invest in our team because we know that great therapists create the best outcomes for families.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-background rounded-2xl p-8 shadow-soft border border-border/50 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <benefit.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
                Send your resume and cover letter to join our growing team of passionate therapists across the Greater Toronto Area.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  asChild
                >
                  <a href="mailto:info@sidebysidetherapy.ca?subject=Job Application" className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Email Your Resume
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <a href="tel:647-955-5995" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call 647-955-5995
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </PageTransition>
  );
};

export default Jobs;
