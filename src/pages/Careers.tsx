import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Phone, Mail, MapPin, Clock, DollarSign, Briefcase, GraduationCap, Heart, Users, CheckCircle, Star, Loader2, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface JobPosting {
  id: string;
  title: string;
  category: string;
  type: string;
  salary: string;
  location: string;
  hours: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  perks: string[];
  referenceId: string;
  datePosted: string;
}

const jobPostings: JobPosting[] = [
  {
    id: "bcba",
    title: "Board Certified Behaviour Analyst (BCBA)",
    category: "BCBA",
    type: "Independent Contractor",
    salary: "$85.00 – $120.00/hour",
    location: "Greater Toronto Area, ON",
    hours: "Part-time",
    description: "The Board Certified Behaviour Analyst (BCBA) will be responsible for conducting assessments and supervising the implementation of applied behaviour analysis programs for autistic children. This BCBA will have a proven record of working as a team leader. The BCBA will be expected to collaborate with SLP, OT, and other disciplines while providing their expertise in ABA to generate an individualized program for each child.",
    responsibilities: [
      "Conducting assessments and supervising ABA program implementation",
      "Collaborating with SLP, OT, and other disciplines",
      "Generating individualized programs for each child",
      "Providing team leadership and clinical supervision",
    ],
    qualifications: [
      "Master's Degree (Required)",
      "BACB certification (Required)",
      "Supervision experience: 2 years (Required)",
      "Approved Clinical Supervisor under OAP guidelines",
      "Valid driver's license and access to a vehicle",
      "Up-to-date Vulnerable Sector Screening",
      "First Aid and CPR certification (Recommended)",
    ],
    perks: [
      "Competitive pay: $85–$120/hour",
      "Flexible scheduling",
      "Collaborative multidisciplinary team",
      "Professional development opportunities",
    ],
    referenceId: "BCBA001",
    datePosted: "2025-01-15",
  },
  {
    id: "rba",
    title: "Registered Behaviour Analyst (RBA) – Ongoing Contract",
    category: "RBA",
    type: "Independent Contractor",
    salary: "Competitive",
    location: "Toronto & GTA, ON",
    hours: "Part-time, Ongoing",
    description: "The Registered Behaviour Analyst (RBA) will be responsible for conducting assessments and supervising the implementation of Applied Behaviour Analysis (ABA) programs for autistic children. The RBA will be expected to collaborate with an SLP, OT, and other disciplines while providing their expertise in ABA to generate an individualized program for each child.",
    responsibilities: [
      "Providing assessment in a home setting",
      "Designing treatment plans using evidence-based information and best practice guidelines",
      "Actively engaging clients, families, caregivers, and therapists to address client-centered goals",
      "Engaging in client/family and therapist coaching",
      "Evaluating intervention effectiveness, client response, and progress toward goals",
      "Providing evidence-based assessment and intervention",
    ],
    qualifications: [
      "Registration as an approved OAP Provider (Required)",
      "Good standing as a Registered Behaviour Analyst with the College of Psychologists and Behaviour Analysts of Ontario",
      "Valid driver's license and access to a vehicle",
      "Up-to-date Vulnerable Sector Screening",
    ],
    perks: [
      "On-site parking",
      "Flexible hours and scheduling",
      "Weekly pay",
      "Minimal travel time between clients",
      "Ongoing support, learning, and room to grow professionally and financially",
      "Possible hybrid supervision model",
      "Ability to collaborate with 20+ BCBAs",
    ],
    referenceId: "RBA001",
    datePosted: "2025-01-15",
  },
  {
    id: "instructor-therapist",
    title: "Instructor Therapist / Registered Behaviour Technician",
    category: "Instructor Therapist",
    type: "Part-time Contract",
    salary: "$25–$35/hour",
    location: "GTA and Surrounding Areas, ON",
    hours: "4–40 hours per week",
    description: "Instructor Therapists will work one-on-one with children diagnosed with Autism Spectrum Disorder (or other developmental disabilities) in the children's home while employing IBI/ABA teaching strategies as directed by a Senior Therapist and BCBA. Candidates must collaborate with team members in the consistent implementation of behaviour reduction and skill acquisition programs.",
    responsibilities: [
      "Implementing IBI/ABA teaching strategies one-on-one with children",
      "Consistent implementation of behaviour reduction and skill acquisition programs",
      "Maintaining regular communication with parents as required",
      "Participating in scheduled team meetings and training conferences",
    ],
    qualifications: [
      "College Diploma or University Degree in a related field",
      "Outstanding organizational, interpersonal, and time management skills",
      "Strong verbal and written communication skills",
      "Ability to work collaboratively with team members",
      "Valid Ontario Driver's License and access to a vehicle",
      "ABA/Autism related Diploma/Certificate is an asset",
      "Minimum 4 hours availability (2×2 hr sessions) on weeknights or weekends",
    ],
    perks: [
      "Get paid weekly!",
      "Enrolment into Perkopolis program",
      "Flexible scheduling",
      "No additional charge for BCBA mentorship (if approved)",
      "Without RBT designation: $25–$30/hr",
      "With RBT designation: $27–$35/hr",
    ],
    referenceId: "IT001",
    datePosted: "2025-01-15",
  },
  {
    id: "occupational-therapist",
    title: "Occupational Therapist (OT) – Ongoing Contract",
    category: "Occupational Therapist",
    type: "Independent Contractor",
    salary: "$100.00 – $115.00/hour",
    location: "Greater Toronto Area, ON",
    hours: "Part-time",
    description: "OTs will work one-on-one with children diagnosed with Autism Spectrum Disorder (or other developmental disabilities) and their families, in the children's home delivering evidence-based intervention.",
    responsibilities: [
      "Providing assessment in a home setting using standardized assessment tools",
      "Designing treatment plans using evidence-based information and best practice guidelines",
      "Actively engaging clients, families, and caregivers to address client-centered goals",
      "Engaging in client/family coaching",
      "Evaluating intervention effectiveness and progress toward goal attainment",
      "Providing evidence-based assessment and intervention using SMART goals",
    ],
    qualifications: [
      "Experience with children and teens diagnosed with Autism",
      "Current registration with the College of Occupational Therapists of Ontario",
      "Proof of professional liability",
      "Valid driver's license",
      "ADP authorizer status is an asset",
    ],
    perks: [
      "Competitive pay: $100–$115/hour",
      "On-site parking",
      "Flexible hours and scheduling",
      "Weekly pay",
      "Minimal travel time between clients",
      "Ongoing support, learning, and room to grow professionally and financially",
    ],
    referenceId: "OT001",
    datePosted: "2025-01-15",
  },
];

const benefits = [
  { icon: Clock, title: "Flexible Scheduling", description: "Work-life balance with flexible hours that suit your lifestyle" },
  { icon: DollarSign, title: "Competitive Pay", description: "Industry-leading compensation with weekly pay" },
  { icon: Users, title: "Collaborative Team", description: "Work alongside 20+ BCBAs and a multidisciplinary team" },
  { icon: GraduationCap, title: "Professional Growth", description: "Ongoing support, mentorship, and career development" },
  { icon: Heart, title: "Meaningful Impact", description: "Make a real difference in the lives of children and families" },
  { icon: Star, title: "Perks & Benefits", description: "Perkopolis program, minimal travel time, and more" },
];

const Careers = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    resumeText: "",
  });

  const handleApplyClick = (position: string) => {
    setSelectedPosition(position);
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-application", {
        body: {
          ...formData,
          position: selectedPosition,
        },
      });

      if (error) throw error;

      toast.success("Application submitted successfully! We'll be in touch soon.");
      setIsDialogOpen(false);
      setFormData({ name: "", email: "", phone: "", message: "", resumeText: "" });
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("There was an error submitting your application. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const jobPostingSchemas = jobPostings.map((job) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    identifier: {
      "@type": "PropertyValue",
      name: "Side by Side Therapy",
      value: job.referenceId,
    },
    datePosted: job.datePosted,
    validThrough: "2026-12-31",
    employmentType: job.type === "Independent Contractor" ? "CONTRACTOR" : "PART_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: "Side by Side Therapy",
      sameAs: "https://sidebysidetherapy.ca",
      logo: "https://sidebysidetherapy.ca/logo.png",
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
    baseSalary: job.salary !== "Competitive" ? {
      "@type": "MonetaryAmount",
      currency: "CAD",
      value: {
        "@type": "QuantitativeValue",
        unitText: "HOUR",
        ...(job.id === "bcba" ? { minValue: 85, maxValue: 120 } :
           job.id === "instructor-therapist" ? { minValue: 25, maxValue: 35 } :
           job.id === "occupational-therapist" ? { minValue: 100, maxValue: 115 } :
           {}),
      },
    } : undefined,
    jobBenefits: job.perks.join(", "),
    qualifications: job.qualifications.join(", "),
    responsibilities: job.responsibilities.join(", "),
    industry: "Healthcare",
    occupationalCategory: "29-1129.00",
    directApply: true,
  }));

  return (
    <PageTransition>
      <Helmet>
        <title>Careers at Side by Side Therapy | ABA Therapy Jobs Toronto</title>
        <meta name="description" content="Join Side by Side Therapy's team in Toronto & GTA. Open positions for BCBAs, RBAs, Instructor Therapists, and Occupational Therapists. Competitive pay, flexible scheduling, meaningful work." />
        <meta name="keywords" content="BCBA jobs Toronto, ABA therapist careers GTA, behaviour analyst jobs Ontario, occupational therapist jobs Toronto, autism therapy careers, RBT jobs Toronto" />
        <link rel="canonical" href="https://sidebysidetherapy.ca/careers" />
        <meta property="og:title" content="Careers at Side by Side Therapy | ABA Therapy Jobs Toronto" />
        <meta property="og:description" content="Join our team! Open positions for BCBAs, RBAs, Instructor Therapists, and OTs in the Greater Toronto Area. Flexible scheduling, competitive pay." />
        <meta property="og:url" content="https://sidebysidetherapy.ca/careers" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Careers at Side by Side Therapy | ABA Therapy Jobs Toronto" />
        <meta name="twitter:description" content="Join our team! Open positions for BCBAs, RBAs, Instructor Therapists, and OTs in the Greater Toronto Area." />
        {jobPostingSchemas.map((schema, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>

      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 gradient-hero text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsla(0,0%,100%,0.1),transparent_70%)]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 text-sm px-4 py-1">
                <Briefcase className="mr-2 h-4 w-4" />
                We're Hiring
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Build a Career That Makes a Difference
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Join our passionate team of therapists and behaviour analysts dedicated to improving the lives of children with autism and their families across the Greater Toronto Area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                  <a href="#openings">View Open Positions</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  onClick={() => handleApplyClick("General Application")}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Your Resume
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work With Us?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                At Side by Side Therapy, we believe in supporting our team just as passionately as we support the families we serve.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="border-border/50 hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="openings" className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                We're always looking for talented and compassionate individuals to join our growing team.
              </p>
            </div>

            <div className="space-y-8 max-w-4xl mx-auto">
              {jobPostings.map((job) => (
                <Card key={job.id} className="border-border/50 overflow-hidden hover:shadow-lg transition-shadow" id={`job-${job.id}`}>
                  <CardContent className="p-0">
                    {/* Job Header */}
                    <div className="p-6 md:p-8 border-b border-border/30">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold mb-2">{job.title}</h3>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary" className="text-xs">
                              <Briefcase className="mr-1 h-3 w-3" />
                              {job.type}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              <MapPin className="mr-1 h-3 w-3" />
                              {job.location}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              <Clock className="mr-1 h-3 w-3" />
                              {job.hours}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-lg font-bold text-primary">{job.salary}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{job.description}</p>
                    </div>

                    {/* Job Details */}
                    <div className="p-6 md:p-8 grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-primary mt-1 flex-shrink-0">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <GraduationCap className="h-5 w-5 text-primary" />
                          Qualifications
                        </h4>
                        <ul className="space-y-2">
                          {job.qualifications.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-primary mt-1 flex-shrink-0">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Perks */}
                    <div className="px-6 md:px-8 pb-6 md:pb-8">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Star className="h-5 w-5 text-primary" />
                        Perks & Benefits
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {job.perks.map((perk, i) => (
                          <Badge key={i} variant="secondary" className="text-xs font-normal">
                            {perk}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Apply CTA */}
                    <div className="px-6 md:px-8 pb-6 md:pb-8">
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                          variant="hero"
                          size="lg"
                          onClick={() => handleApplyClick(`${job.title} (${job.referenceId})`)}
                        >
                          <Send className="mr-2 h-4 w-4" />
                          Apply Now
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                          <a href="tel:647-955-5995">
                            <Phone className="mr-2 h-4 w-4" />
                            647-955-5995
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* General Application CTA */}
        <section className="py-16 md:py-20 gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't See the Right Fit?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              We're always interested in hearing from talented therapists and behaviour analysts. Send us your resume and we'll keep it on file for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8"
                onClick={() => handleApplyClick("General Application")}
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Your Resume
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <a href="tel:647-955-5995">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Application Form Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Apply Now</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Applying for: <span className="font-semibold text-foreground">{selectedPosition}</span>
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                required
                maxLength={100}
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                required
                maxLength={255}
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                maxLength={20}
                placeholder="(647) 555-1234"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Cover Letter / Message</Label>
              <Textarea
                id="message"
                maxLength={2000}
                placeholder="Tell us about yourself and why you're interested in this position..."
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="resumeText">Resume / Qualifications Summary</Label>
              <Textarea
                id="resumeText"
                maxLength={5000}
                placeholder="Paste your resume or summarize your relevant experience, certifications, and education..."
                rows={6}
                value={formData.resumeText}
                onChange={(e) => setFormData({ ...formData, resumeText: e.target.value })}
              />
            </div>

            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Submit Application
                </>
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </PageTransition>
  );
};

export default Careers;
