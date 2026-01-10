import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Award, GraduationCap, Heart, Users, Briefcase, Star } from "lucide-react";

// Lindsey Malc is the real founder - verified from sidebysidetherapy.ca
const founderInfo = {
  name: "Lindsey Malc",
  title: "Founder & Clinical Director",
  image: "https://i.ytimg.com/vi/KvrUusVp8fo/hqdefault.jpg",
  credentials: ["BCBA", "Registered Behaviour Analyst (Ont.)", "M.ADS", "Hon. B.S.W."],
  specializations: ["Autism Spectrum Disorder", "Applied Behaviour Analysis", "Parent/Caregiver Coaching", "Ontario Autism Program"],
  bio: "Hello, my name is Lindsey Malc. I'm the founder and Clinical Director of Side by Side Therapy. In 2013, I became a Board Certified Behaviour Analyst. I have spent my entire career working with children with special needs and their families. I have extensive experience in clinical as well as community settings. I have worked primarily with autistic children but have considerable experience working with typically developing children with challenging behaviour as well.",
  education: "M.ADS (Master of Applied Disability Studies) from Brock University, Honours B.S.W. from Lakehead University",
  experience: "Over 14 years at Zareinu Educational Centre (now Kayla's Children Centre), holding positions from classroom assistant to Behaviour Analyst. Listed on the Ontario Autism Program provider list as a Clinical Supervisor."
};

// Additional team members
const teamMembers = [
  {
    name: "Marci McCluskey",
    title: "Senior Therapist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    credentials: ["RBT", "B.A."],
    specializations: ["ABA Therapy", "Early Intervention", "Behaviour Support"],
    bio: "Marci is a dedicated member of our therapy team, bringing passion and expertise to help children with autism reach their full potential through evidence-based interventions."
  },
  {
    name: "Madison Bartley",
    title: "Instructor Therapist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    credentials: ["RBT", "B.Sc."],
    specializations: ["ABA Therapy", "Social Skills", "Play-Based Learning"],
    bio: "Madison works one-on-one with children diagnosed with Autism Spectrum Disorder, implementing individualized ABA therapy programs with compassion and skill."
  }
];

// Representing the diverse team of contractors and specialists
const teamDisciplines = [
  {
    title: "Board Certified Behaviour Analysts (BCBAs)",
    description: "Our BCBAs conduct assessments and supervise the implementation of applied behaviour analysis programs for autistic children. They develop individualized treatment plans and provide clinical oversight.",
    icon: Award,
    hiring: true,
    payRange: "$85 - $120/hour"
  },
  {
    title: "Registered Behaviour Analysts (RBAs)",
    description: "RBAs work under the supervision of BCBAs to deliver comprehensive ABA programs, conduct assessments, and implement behaviour intervention strategies.",
    icon: Award,
    hiring: true,
    payRange: "Competitive rates"
  },
  {
    title: "Instructor Therapists / RBTs",
    description: "Our Instructor Therapists work one-on-one with children diagnosed with Autism Spectrum Disorder in their homes, implementing ABA therapy programs designed by our BCBAs.",
    icon: Users,
    hiring: true,
    payRange: "$25 - $35/hour"
  },
  {
    title: "Speech-Language Pathologists",
    description: "Our SLPs work to improve your child's verbal and nonverbal communication, addressing speech disorders, language disorders, and social communication challenges.",
    icon: Star,
    hiring: false
  },
  {
    title: "Occupational Therapists",
    description: "OTs help children develop skills for everyday independence, addressing sensory processing, fine motor skills, self-care, and participation in school and community activities.",
    icon: Star,
    hiring: false
  },
  {
    title: "Therapeutic Recreation Specialists",
    description: "Recreation Therapists engage with your child to address social, emotional, cognitive and physical development using recreation and leisure as therapeutic modalities.",
    icon: Heart,
    hiring: false
  },
  {
    title: "Psychometrists",
    description: "Our psycho-educational assessment specialists work with children to establish learning baselines, identify areas of difficulty, and suggest strategies for educational success.",
    icon: GraduationCap,
    hiring: false
  },
  {
    title: "Respite Workers",
    description: "Trained respite workers provide quality care for children with special needs, allowing families to take a much-needed break while ensuring their child is engaged and safe.",
    icon: Heart,
    hiring: false
  }
];

const teamSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "Side by Side Therapy",
  "url": "https://www.sidebysidetherapy.ca",
  "telephone": "647-955-5995",
  "email": "info@sidebysidetherapy.ca",
  "founder": {
    "@type": "Person",
    "name": "Lindsey Malc",
    "jobTitle": "Founder & Clinical Director",
    "description": founderInfo.bio,
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional Certification",
        "name": "Board Certified Behaviour Analyst (BCBA)"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional Certification",
        "name": "Registered Behaviour Analyst (Ontario)"
      }
    ],
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Brock University"
      },
      {
        "@type": "EducationalOrganization",
        "name": "Lakehead University"
      }
    ]
  },
  "employee": teamDisciplines.map(discipline => ({
    "@type": "Role",
    "roleName": discipline.title,
    "description": discipline.description
  }))
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.sidebysidetherapy.ca"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Our Team",
      "item": "https://www.sidebysidetherapy.ca/team"
    }
  ]
};

const Team = () => {
  return (
    <>
      <Helmet>
        <title>Our Team - BCBAs, Therapists & Specialists | Side by Side Therapy Toronto</title>
        <meta name="description" content="Meet Lindsey Malc, BCBA, founder of Side by Side Therapy, and our trans-disciplinary team of BCBAs, speech therapists, occupational therapists, and specialists serving the Greater Toronto Area." />
        <meta name="keywords" content="Lindsey Malc BCBA, Side by Side Therapy team, ABA therapists Toronto, BCBA GTA, autism therapists Ontario, speech therapist autism Toronto" />
        <link rel="canonical" href="https://www.sidebysidetherapy.ca/team" />
        <meta property="og:title" content="Our Team - BCBAs, Therapists & Specialists | Side by Side Therapy Toronto" />
        <meta property="og:description" content="Meet Lindsey Malc, BCBA, founder of Side by Side Therapy, and our trans-disciplinary team serving children with autism in the GTA." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sidebysidetherapy.ca/team" />
        <script type="application/ld+json">
          {JSON.stringify(teamSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/10 py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30">
                <Users className="w-4 h-4 mr-2" />
                Trans-Disciplinary Team
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Meet Our <span className="text-primary">Expert Team</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Side by Side Therapy is a trans-disciplinary team of paediatric therapists who work with 
                parents and their special needs children to teach skills that improve the child and family's quality of life.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  <span>Board Certified Professionals</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span>Evidence-Based Practice</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  <span>In-Home Services</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-primary/20 text-primary">
                  <Star className="w-4 h-4 mr-2" />
                  Leadership
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Meet Our Founder
                </h2>
              </div>
              
              <Card className="overflow-hidden border-primary/20 shadow-xl">
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="relative md:col-span-1">
                    <img
                      src={founderInfo.image}
                      alt={`${founderInfo.name} - ${founderInfo.title} at Side by Side Therapy`}
                      className="w-full h-full object-cover min-h-[300px] md:min-h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:bg-gradient-to-r" />
                  </div>
                  <CardContent className="p-8 md:col-span-2 flex flex-col justify-center">
                    <div className="mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{founderInfo.name}</h3>
                      <p className="text-primary font-semibold text-lg">{founderInfo.title}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {founderInfo.credentials.map((credential, idx) => (
                        <Badge key={idx} variant="secondary" className="text-sm">
                          {credential}
                        </Badge>
                      ))}
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {founderInfo.bio}
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <GraduationCap className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-medium text-foreground text-sm">Education</p>
                          <p className="text-muted-foreground text-sm">{founderInfo.education}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Briefcase className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-medium text-foreground text-sm">Experience</p>
                          <p className="text-muted-foreground text-sm">{founderInfo.experience}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm font-medium text-muted-foreground mb-3">Specializations:</p>
                      <div className="flex flex-wrap gap-2">
                        {founderInfo.specializations.map((spec, idx) => (
                          <span key={idx} className="text-sm text-primary/80 bg-primary/10 px-3 py-1 rounded-full">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-primary/20 text-primary">
                  <Users className="w-4 h-4 mr-2" />
                  Our Team
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Meet Our Therapists
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {teamMembers.map((member, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-border/50">
                    <div className="flex flex-col sm:flex-row">
                      <div className="relative sm:w-1/3">
                        <img
                          src={member.image}
                          alt={`${member.name} - ${member.title} at Side by Side Therapy`}
                          className="w-full h-48 sm:h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-6 sm:w-2/3 flex flex-col justify-center">
                        <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                        <p className="text-primary font-medium text-sm mb-3">{member.title}</p>
                        
                        <div className="flex flex-wrap gap-1 mb-3">
                          {member.credentials.map((credential, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {credential}
                            </Badge>
                          ))}
                        </div>
                        
                        <p className="text-muted-foreground text-sm mb-4">
                          {member.bio}
                        </p>
                        
                        <div className="flex flex-wrap gap-1">
                          {member.specializations.map((spec, idx) => (
                            <span key={idx} className="text-xs text-primary/80 bg-primary/10 px-2 py-0.5 rounded-full">
                              {spec}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Disciplines Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge className="mb-4 bg-primary/20 text-primary">
                <Users className="w-4 h-4 mr-2" />
                Our Disciplines
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                A Trans-Disciplinary Approach
              </h2>
              <p className="text-lg text-muted-foreground">
                Our team of BCBAs, Senior Therapists, Instructor Therapists, Speech-Language Pathologists, 
                Occupational Therapists, Recreation Therapists, and Respite Workers work together to ensure 
                comprehensive care for your child and family.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {teamDisciplines.map((discipline, index) => {
                const IconComponent = discipline.icon;
                return (
                  <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300 border-border/50">
                    {discipline.hiring && (
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-green-500/90 text-white hover:bg-green-500">
                          Now Hiring
                        </Badge>
                      </div>
                    )}
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-3 pr-16">{discipline.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {discipline.description}
                      </p>
                      {discipline.payRange && (
                        <p className="text-sm font-medium text-primary">
                          Pay Range: {discipline.payRange}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Parents of children with autism or other special needs often have a very difficult time 
                helping their child overcome their challenges. We work as a trans-disciplinary team to create 
                individualized, functional, evidence-based interventions that teach these missing skills. 
                <span className="font-semibold text-foreground"> As a result, the family achieves an improved quality of life.</span>
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center p-8 border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Evidence-Based Practice</h3>
                <p className="text-muted-foreground">
                  All our therapists use proven, evidence-based interventions. Our BCBAs are listed on the 
                  Ontario Autism Program provider list as Clinical Supervisors.
                </p>
              </Card>
              
              <Card className="text-center p-8 border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Family-Centred Care</h3>
                <p className="text-muted-foreground">
                  We believe that families are integral parts of the treatment team. All services happen 
                  in your home so parents can be aware of and involved in therapy.
                </p>
              </Card>
              
              <Card className="text-center p-8 border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Collaborative Approach</h3>
                <p className="text-muted-foreground">
                  Our multidisciplinary team works together seamlessly, ensuring comprehensive care that 
                  addresses all aspects of your child's development.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
                <Briefcase className="w-4 h-4 mr-2" />
                We're Hiring
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Join Our Growing Team
              </h2>
              <p className="text-xl opacity-90 mb-4">
                At Side by Side Therapy, we aim to improve the quality of life for special needs children 
                and their families by providing evidence-based, effective, functional interventions.
              </p>
              <p className="text-lg opacity-80 mb-8">
                We're currently hiring Instructor Therapists, RBTs, BCBAs, and RBAs for independent contractor positions 
                in the Greater Toronto Area and Durham Region.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                  <a href="https://www.sidebysidetherapy.ca/careers-side-by-side-therapy-in-toronto/" target="_blank" rel="noopener noreferrer">
                    <Briefcase className="mr-2 h-5 w-5" />
                    View Career Opportunities
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <a href="mailto:info@sidebysidetherapy.ca">
                    <Mail className="mr-2 h-5 w-5" />
                    info@sidebysidetherapy.ca
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact us today to schedule a free 30-minute consultation and learn how our team can support 
                your child's development journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8" asChild>
                  <a href="tel:647-955-5995">
                    <Phone className="mr-2 h-5 w-5" />
                    647-955-5995
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <a href="tel:1-877-797-0437">
                    <Phone className="mr-2 h-5 w-5" />
                    1-877-797-0437 (Toll Free)
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Team;
