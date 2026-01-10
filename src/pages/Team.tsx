import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Award, GraduationCap, Heart, Users } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Sarah Mitchell",
    title: "Clinical Director & BCBA-D",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    credentials: ["BCBA-D", "Ph.D. in Applied Behavior Analysis", "Licensed Psychologist"],
    specializations: ["Autism Spectrum Disorder", "Early Intervention", "Parent Training"],
    bio: "Dr. Mitchell brings over 15 years of experience in applied behavior analysis and developmental psychology. She founded Side by Side ABA Therapy with a vision to provide compassionate, evidence-based care to children and families in the Greater Toronto Area.",
    education: "Ph.D. in Applied Behavior Analysis from Western University"
  },
  {
    name: "Jennifer Chen",
    title: "Senior BCBA & Clinical Supervisor",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face",
    credentials: ["BCBA", "M.A. in Psychology", "Certified Autism Specialist"],
    specializations: ["Verbal Behavior", "Social Skills Development", "School Integration"],
    bio: "Jennifer has been instrumental in developing our social skills training programs. Her expertise in verbal behavior therapy has helped countless children develop meaningful communication skills.",
    education: "M.A. in Psychology from University of Toronto"
  },
  {
    name: "Michael Thompson",
    title: "Lead Speech-Language Pathologist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
    credentials: ["M.S. CCC-SLP", "PROMPT Certified", "Hanen Certified"],
    specializations: ["Articulation Disorders", "Language Development", "AAC"],
    bio: "Michael specializes in helping children find their voice, whether through traditional speech therapy or augmentative and alternative communication (AAC) devices. His patient, playful approach makes therapy sessions engaging and effective.",
    education: "M.S. in Speech-Language Pathology from McGill University"
  },
  {
    name: "Dr. Amanda Rodriguez",
    title: "Occupational Therapist & Sensory Specialist",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop&crop=face",
    credentials: ["OT Reg. (Ont.)", "Ph.D. in Rehabilitation Sciences", "Sensory Integration Certified"],
    specializations: ["Sensory Processing", "Fine Motor Skills", "Self-Care Independence"],
    bio: "Dr. Rodriguez is passionate about helping children develop the skills they need for everyday independence. Her expertise in sensory processing disorders has transformed the lives of many families struggling with sensory challenges.",
    education: "Ph.D. in Rehabilitation Sciences from Queen's University"
  },
  {
    name: "David Park",
    title: "Therapeutic Recreation Specialist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    credentials: ["CTRS", "B.A. in Recreation Therapy", "Certified Inclusive Recreation Specialist"],
    specializations: ["Adaptive Sports", "Social Recreation", "Community Integration"],
    bio: "David believes that every child deserves to experience the joy of play and recreation. He designs adaptive programs that allow children of all abilities to participate in sports, games, and community activities.",
    education: "B.A. in Recreation Therapy from Brock University"
  },
  {
    name: "Lisa Nguyen",
    title: "Registered Behavior Technician Team Lead",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    credentials: ["RBT", "B.Sc. in Psychology", "Crisis Prevention Certified"],
    specializations: ["Direct ABA Therapy", "Data Collection", "Behavior Reduction"],
    bio: "Lisa leads our team of Registered Behavior Technicians, ensuring consistent, high-quality therapy delivery. Her dedication to each child's progress and her mentorship of new therapists exemplifies our commitment to excellence.",
    education: "B.Sc. in Psychology from York University"
  },
  {
    name: "Dr. Robert Kim",
    title: "Psycho-Educational Assessment Specialist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    credentials: ["Ph.D. in School Psychology", "Registered Psychologist", "Licensed School Psychologist"],
    specializations: ["Learning Disabilities", "ADHD Assessment", "Giftedness Evaluation"],
    bio: "Dr. Kim specializes in comprehensive psycho-educational assessments that help families and schools understand each child's unique learning profile. His detailed reports provide actionable recommendations for educational planning.",
    education: "Ph.D. in School Psychology from OISE, University of Toronto"
  },
  {
    name: "Maria Santos",
    title: "Family Support Coordinator & Respite Specialist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    credentials: ["B.S.W.", "Developmental Services Worker Diploma", "Family Mediation Certificate"],
    specializations: ["Family Support", "Respite Care Coordination", "Resource Navigation"],
    bio: "Maria understands the challenges families face when caring for a child with special needs. She coordinates our respite services and helps families connect with community resources, funding opportunities, and support networks.",
    education: "B.S.W. from Ryerson University"
  }
];

const teamSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "Side by Side ABA Therapy",
  "url": "https://sidebysideaba.ca",
  "employee": teamMembers.map(member => ({
    "@type": "Person",
    "name": member.name,
    "jobTitle": member.title,
    "description": member.bio,
    "hasCredential": member.credentials.map(cred => ({
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional Certification",
      "name": cred
    }))
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
      "item": "https://sidebysideaba.ca"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Our Team",
      "item": "https://sidebysideaba.ca/team"
    }
  ]
};

const Team = () => {
  return (
    <>
      <Helmet>
        <title>Our Team - Expert Therapists & BCBAs | Side by Side ABA Therapy</title>
        <meta name="description" content="Meet our team of experienced BCBAs, speech therapists, occupational therapists, and specialists dedicated to helping children with autism and developmental needs in the GTA." />
        <meta name="keywords" content="BCBA Toronto, ABA therapists GTA, speech therapist autism, occupational therapist children, autism specialists Ontario" />
        <link rel="canonical" href="https://sidebysideaba.ca/team" />
        <meta property="og:title" content="Our Team - Expert Therapists & BCBAs | Side by Side ABA Therapy" />
        <meta property="og:description" content="Meet our team of experienced BCBAs, speech therapists, occupational therapists, and specialists dedicated to helping children with autism and developmental needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sidebysideaba.ca/team" />
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
                Meet Our Experts
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Our <span className="text-primary">Dedicated Team</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Our multidisciplinary team of certified professionals is committed to providing 
                compassionate, evidence-based care to help every child reach their full potential.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  <span>Board Certified Professionals</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span>Advanced Degrees</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  <span>Passionate About Care</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.title}`}
                      className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-medium text-sm mb-3">{member.title}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {member.credentials.slice(0, 3).map((credential, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {credential}
                        </Badge>
                      ))}
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {member.bio}
                    </p>
                    
                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground flex items-start gap-2">
                        <GraduationCap className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                        {member.education}
                      </p>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-xs font-medium text-muted-foreground mb-2">Specializations:</p>
                      <div className="flex flex-wrap gap-1">
                        {member.specializations.map((spec, idx) => (
                          <span key={idx} className="text-xs text-primary/80 bg-primary/10 px-2 py-0.5 rounded-full">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Commitment to Excellence
              </h2>
              <p className="text-lg text-muted-foreground">
                Every member of our team shares a deep commitment to providing the highest quality care 
                and making a meaningful difference in the lives of children and families.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center p-8 border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Certified Expertise</h3>
                <p className="text-muted-foreground">
                  All our therapists hold current certifications and engage in ongoing professional development 
                  to stay at the forefront of evidence-based practices.
                </p>
              </Card>
              
              <Card className="text-center p-8 border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Compassionate Care</h3>
                <p className="text-muted-foreground">
                  We believe in treating every child and family with dignity, respect, and genuine compassion. 
                  Your child's wellbeing is our top priority.
                </p>
              </Card>
              
              <Card className="text-center p-8 border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Collaborative Approach</h3>
                <p className="text-muted-foreground">
                  Our multidisciplinary team works together, ensuring comprehensive care that addresses 
                  all aspects of your child's development.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Join Our Growing Team
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Are you a passionate therapist looking to make a difference? We're always looking 
                for dedicated professionals to join our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  <Mail className="mr-2 h-5 w-5" />
                  View Career Opportunities
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Phone className="mr-2 h-5 w-5" />
                  (647) 555-0123
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
                Contact us today to schedule a consultation and learn how our team can support 
                your child's development journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule a Consultation
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Mail className="mr-2 h-5 w-5" />
                  info@sidebysideaba.ca
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
