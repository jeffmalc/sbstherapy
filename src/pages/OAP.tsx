import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { citySlugMap } from "@/lib/cityLinks";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  FileText, 
  UserPlus, 
  ClipboardCheck, 
  Phone, 
  Mail, 
  ExternalLink,
  AlertCircle,
  HelpCircle,
  DollarSign,
  GraduationCap,
  Heart,
  Users,
  Clock,
  ArrowRight,
  Sparkles,
  Baby,
  School,
  Stethoscope
} from "lucide-react";

const applicationSteps = [
  {
    step: 1,
    title: "Get a Diagnosis",
    icon: Stethoscope,
    description: "Your child must have a written diagnosis of Autism Spectrum Disorder (ASD) from a qualified professional.",
    details: [
      "The diagnosis must include your child's full name and date of birth",
      "It must include the date of the assessment",
      "A clear statement that your child meets the diagnostic criteria for ASD",
      "The qualified professional's name and credentials"
    ],
    tip: "If you need help getting a diagnosis, visit ontario.ca/page/autism-assessment-diagnosis for assessment options."
  },
  {
    step: 2,
    title: "Check Eligibility",
    icon: ClipboardCheck,
    description: "Before applying, ensure your child meets the eligibility requirements for the Ontario Autism Program.",
    details: [
      "Your child must be under 18 years of age",
      "Your child must currently live in Ontario",
      "You must have a written diagnosis of autism from a qualified professional"
    ],
    tip: "Keep all diagnostic documents organized and easily accessible for the application process."
  },
  {
    step: 3,
    title: "Create an AccessOAP Account",
    icon: UserPlus,
    description: "Visit AccessOAP.ca to create your account. This is the official portal for managing your child's OAP services.",
    details: [
      "Go to accessoap.ca and click 'Sign Up'",
      "Follow the prompts to create your account",
      "You'll receive your child's unique OAP number",
      "Use this portal to track services and funding eligibility"
    ],
    tip: "Check your AccessOAP account regularly for updates on service availability and messages from providers."
  },
  {
    step: 4,
    title: "Complete the Registration Form",
    icon: FileText,
    description: "Fill out the OAP registration form with all required information and supporting documentation.",
    details: [
      "Complete all mandatory sections of the form",
      "Provide consent for collection and use of personal information",
      "Attach your child's diagnostic documents",
      "Submit the form through AccessOAP"
    ],
    tip: "If you need help completing the form, AccessOAP care coordinators are available to assist you."
  },
  {
    step: 5,
    title: "Connect with a Care Coordinator",
    icon: Users,
    description: "After registration, an AccessOAP care coordinator will be available to guide you through your options.",
    details: [
      "Care coordinators can answer your questions about the program",
      "They help you understand your service options",
      "They can help you access needs-based services in your community",
      "They provide ongoing support throughout your journey"
    ],
    tip: "Don't hesitate to reach out to your care coordinator whenever you have questions or concerns."
  },
  {
    step: 6,
    title: "Access Services",
    icon: Sparkles,
    description: "Once registered, you can begin accessing various OAP services based on your child's age and needs.",
    details: [
      "Foundational Family Services (free for all registered families)",
      "Caregiver-Mediated Early Years Programs (ages 12-48 months)",
      "Entry to School Program (starting kindergarten or Grade 1)",
      "Core Clinical Services (based on needs assessment)"
    ],
    tip: "Side by Side Therapy is an OAP-approved provider. Contact us to learn how we can support your family!"
  }
];

const servicesAvailable = [
  {
    title: "Foundational Family Services",
    icon: Heart,
    description: "Free services for all registered families including workshops, coaching sessions, family mentoring, and consultations.",
    ageGroup: "All ages",
    cost: "Free"
  },
  {
    title: "Caregiver-Mediated Early Years",
    icon: Baby,
    description: "Programs for children 12-48 months old that teach caregivers strategies to support their child's development.",
    ageGroup: "12-48 months",
    cost: "Free"
  },
  {
    title: "Entry to School Program",
    icon: School,
    description: "Supports children entering kindergarten or Grade 1, helping them build skills for a successful school transition.",
    ageGroup: "Starting school",
    cost: "Free"
  },
  {
    title: "Core Clinical Services",
    icon: GraduationCap,
    description: "Intensive, individualized therapy services including ABA, speech therapy, and occupational therapy.",
    ageGroup: "All ages",
    cost: "Funded through OAP"
  }
];

const additionalSupports = [
  {
    title: "Special Services at Home (SSAH)",
    description: "Funding for respite care and programs that promote skill development and independence.",
    link: "https://www.ontario.ca/page/special-services-home"
  },
  {
    title: "Assistance for Children with Severe Disabilities (ACSD)",
    description: "Monthly financial benefit for families with low to moderate incomes to cover additional costs.",
    link: "https://www.ontario.ca/page/assistance-children-severe-disabilities-program"
  },
  {
    title: "Healthy Babies Healthy Children",
    description: "Early childhood development support program for families with children 0-6 years.",
    link: "https://www.ontario.ca/page/healthy-babies-healthy-children-program"
  }
];

const OAP = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Ontario Autism Program (OAP) Guide | How to Apply | Side by Side Therapy</title>
        <meta 
          name="description" 
          content="Step-by-step guide to applying for the Ontario Autism Program (OAP). Learn about eligibility, registration, and services available for children with autism in Ontario." 
        />
        <meta name="keywords" content="Ontario Autism Program, OAP application, autism funding Ontario, AccessOAP, autism services Toronto, OAP eligibility" />
        <link rel="canonical" href="https://www.sidebysidetherapy.ca/oap" />
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(107,61,123,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(76,175,80,0.08),transparent_50%)]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-primary/20 text-primary">
                <GraduationCap className="w-4 h-4 mr-2" />
                OAP Approved Provider
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Ontario Autism Program <span className="text-gradient">(OAP)</span> Guide
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
                A step-by-step guide to help you understand and navigate the Ontario Autism Program application process. 
                We're here to support you every step of the way.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <a href="tel:647-955-5995" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Get Help Applying
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://accessoap.ca" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Visit AccessOAP
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What is OAP Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">What is the Ontario Autism Program?</h2>
                <p className="text-lg text-muted-foreground">
                  Understanding the basics of OAP and how it can help your family.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
                <p className="text-lg leading-relaxed mb-6">
                  The <strong>Ontario Autism Program (OAP)</strong> offers support to families of children and youth on the autism spectrum. 
                  Children who have been diagnosed with Autism Spectrum Disorder (ASD) by a qualified professional are eligible for the program.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  The program provides access to various services and supports, including therapy services, family support programs, 
                  and funding to help cover the costs of autism-related services.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <div className="flex items-center gap-2 bg-background rounded-full px-4 py-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                    <span className="font-medium">Ages 0-17</span>
                  </div>
                  <div className="flex items-center gap-2 bg-background rounded-full px-4 py-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                    <span className="font-medium">Ontario Residents</span>
                  </div>
                  <div className="flex items-center gap-2 bg-background rounded-full px-4 py-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                    <span className="font-medium">ASD Diagnosis Required</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step by Step Guide */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/20 text-primary">
                <ClipboardCheck className="w-4 h-4 mr-2" />
                Application Process
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Apply for OAP</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Follow these steps to register your child for the Ontario Autism Program and access the services and supports available.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              {applicationSteps.map((step, index) => (
                <Card key={index} className="overflow-hidden border-border/50 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-gradient-to-br from-primary to-secondary p-6 md:p-8 flex items-center justify-center md:w-32 flex-shrink-0">
                      <div className="text-center text-primary-foreground">
                        <div className="text-4xl font-bold mb-1">{step.step}</div>
                        <div className="text-sm opacity-80">Step</div>
                      </div>
                    </div>
                    <CardContent className="p-6 md:p-8 flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <step.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                      
                      <ul className="space-y-2 mb-4 ml-16">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
                            <span className="text-sm text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="ml-16 bg-accent/10 rounded-lg p-4 flex items-start gap-3">
                        <HelpCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <p className="text-sm"><strong>Tip:</strong> {step.tip}</p>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Available */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/20 text-primary">
                <Sparkles className="w-4 h-4 mr-2" />
                Available Services
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">OAP Services & Supports</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Once registered, your family can access these services based on your child's age and needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {servicesAvailable.map((service, index) => (
                <Card key={index} className="border-border/50 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg mb-1">{service.title}</CardTitle>
                        <div className="flex gap-2">
                          <Badge variant="secondary" className="text-xs">{service.ageGroup}</Badge>
                          <Badge className="text-xs bg-secondary/20 text-secondary">{service.cost}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Financial Supports */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/20 text-primary">
                <DollarSign className="w-4 h-4 mr-2" />
                Additional Supports
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Other Financial Supports</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Beyond the OAP, there are other valuable programs that can help support your family.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {additionalSupports.map((support, index) => (
                <Card key={index} className="border-border/50 hover:border-primary/30 transition-colors group">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-3 group-hover:text-primary transition-colors">{support.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{support.description}</p>
                    <a 
                      href={support.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80"
                    >
                      Learn More
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help?</h2>
                <p className="text-lg text-muted-foreground">
                  Contact these resources for assistance with your OAP application.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-bold mb-2">AccessOAP</h3>
                    <p className="text-sm text-muted-foreground mb-4">For registration and general OAP questions</p>
                    <div className="space-y-2 text-sm">
                      <a href="mailto:info@AccessOAP.ca" className="flex items-center justify-center gap-2 text-primary hover:text-primary/80">
                        <Mail className="h-4 w-4" />
                        info@AccessOAP.ca
                      </a>
                      <a href="tel:1-833-425-2445" className="flex items-center justify-center gap-2 text-primary hover:text-primary/80">
                        <Phone className="h-4 w-4" />
                        1-833-425-2445
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-accent/20 bg-gradient-to-br from-accent/5 to-transparent">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-bold mb-2">Autism Ontario</h3>
                    <p className="text-sm text-muted-foreground mb-4">For autism services and information</p>
                    <div className="space-y-2 text-sm">
                      <a href="tel:1-800-472-7789" className="flex items-center justify-center gap-2 text-accent hover:text-accent/80">
                        <Phone className="h-4 w-4" />
                        1-800-472-7789
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Side by Side CTA */}
              <div className="bg-gradient-to-br from-primary via-primary/90 to-secondary rounded-3xl p-8 md:p-12 text-primary-foreground text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">We're Here to Help</h3>
                <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                  As an OAP-approved provider, Side by Side Therapy can help guide you through the application process 
                  and provide the therapy services your child needs. Contact us for a free 30-minute consultation.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" variant="secondary" asChild>
                    <a href="tel:647-955-5995" className="flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      Call 647-955-5995
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
                    <a href="/#contact">
                      Send Us a Message
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">OAP Services Available In Your Area</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                As an OAP-approved provider, Side by Side Therapy serves families across these communities.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {Object.entries(citySlugMap).map(([city, slug]) => (
                  <a
                    key={slug}
                    href={`/service-area/${slug}`}
                    className="text-sm px-3 py-1.5 bg-card border border-border rounded-full text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    {city}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-6 flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Important Notice</h4>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    This guide is provided for informational purposes only and was last updated in January 2025. 
                    For the most current information about the Ontario Autism Program, please visit the 
                    <a href="https://www.ontario.ca/page/ontario-autism-program" target="_blank" rel="noopener noreferrer" className="underline ml-1 hover:text-amber-900">
                      official Ontario government website
                    </a> or contact AccessOAP directly.
                  </p>
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

export default OAP;
