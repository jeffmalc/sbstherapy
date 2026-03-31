import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { citySlugMap } from "@/lib/cityLinks";
import { 
  Heart, 
  Target, 
  Sparkles, 
  Users, 
  Award, 
  Clock, 
  Phone, 
  CheckCircle2,
  GraduationCap,
  Lightbulb,
  HandHeart,
  Shield,
  Star,
  ArrowRight
} from "lucide-react";

const coreValues = [
  {
    icon: Target,
    title: "Evidence-Based Practice",
    description: "Every intervention we implement is grounded in scientific research and proven methodologies. We continuously stay updated with the latest developments in behavioural science and therapy."
  },
  {
    icon: Heart,
    title: "Family-Centered Care",
    description: "We believe families are integral parts of the treatment team. All services happen in your home, ensuring you're involved and empowered in every step of your child's journey."
  },
  {
    icon: Users,
    title: "Trans-Disciplinary Approach",
    description: "Our therapists from ABA, Speech, OT, and Recreation work as a unified team, sharing knowledge and strategies to provide comprehensive, coordinated care."
  },
  {
    icon: Lightbulb,
    title: "Individualized Programs",
    description: "No two children are the same. We create customized treatment plans that address your child's unique strengths, challenges, and goals."
  },
  {
    icon: HandHeart,
    title: "Compassionate Support",
    description: "We understand the challenges families face. Our team provides not just therapy, but emotional support and guidance through every milestone."
  },
  {
    icon: Shield,
    title: "Quality & Integrity",
    description: "As an OAP-approved provider, we maintain the highest standards of care, ethical practice, and professional accountability in everything we do."
  }
];

const timeline = [
  {
    year: "2020",
    title: "Our Beginning",
    description: "Side by Side Therapy was founded as an Ontario Autism Program (OAP) approved provider, offering exceptional, family-centered therapy services to children with autism and special needs in the Greater Toronto Area."
  },
  {
    year: "2021",
    title: "Expanding Our Team",
    description: "We grew our team to include Speech-Language Pathologists and Occupational Therapists, enabling us to offer truly trans-disciplinary care."
  },
  {
    year: "2022",
    title: "Comprehensive Services",
    description: "We added Therapeutic Recreation and expanded our Respite Services, providing families with more comprehensive support options."
  },
  {
    year: "2023",
    title: "Reducing Wait Times",
    description: "Through strategic growth and efficient processes, we reduced family wait times by 50-75%, getting children the support they need faster than ever."
  },
  {
    year: "2024",
    title: "Building Excellence",
    description: "We continued to build our reputation for excellence, serving more families and refining our evidence-based practices."
  },
  {
    year: "Present",
    title: "Continuing Our Mission",
    description: "Today, we continue to serve hundreds of families across the GTA with minimal wait times, constantly evolving our practices to provide the best possible outcomes."
  }
];

const disciplines = [
  {
    name: "Applied Behaviour Analysis",
    description: "ABA is one of the most effective interventions for Autism Spectrum Disorder. Our BCBAs use reinforcement strategies to increase desired behaviours and reduce barriers, helping clients lead more independent lives.",
    link: "/services/aba-therapy"
  },
  {
    name: "Speech-Language Pathology",
    description: "Our Speech-Language Pathologists address communication challenges including speech disorders, language disorders, and social communication difficulties, creating opportunities for children to express their needs.",
    link: "/services/speech-therapy"
  },
  {
    name: "Occupational Therapy",
    description: "Our OTs devise interventions that help children be more successful in engaging in important activities including self-care, community participation, school activities, and leisure.",
    link: "/services/occupational-therapy"
  },
  {
    name: "Therapeutic Recreation",
    description: "Recreation Therapists treat and maintain physical, cognitive, social and emotional wellbeing through recreational activities, achieving goals while using the vehicle of play and motivation.",
    link: "/services/therapeutic-recreation"
  },
  {
    name: "Respite Services",
    description: "Every family needs time to rest and rejuvenate. Our respite workers provide quality care with specialized training, allowing children to expand their experiences while parents get a well-deserved break.",
    link: "/services/respite-services"
  }
];

const About = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>About Side by Side Therapy | Our Mission, History & Philosophy | Toronto</title>
        <meta 
          name="description" 
          content="Learn about Side by Side Therapy's mission, history, and philosophy. Our trans-disciplinary team has been supporting families with autism and special needs in Toronto since 2020." 
        />
        <meta name="keywords" content="about side by side therapy, autism therapy history, ABA therapy philosophy, Toronto therapy services, OAP provider" />
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(107,61,123,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(76,175,80,0.08),transparent_50%)]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
                Our Story
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Supporting Families <span className="text-gradient">Side by Side</span> Since 2020
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
                For over 5 years, Side by Side Therapy has been dedicated to helping children with autism and special needs 
                reach their full potential through compassionate, evidence-based care.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <a href="tel:647-955-5995" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Schedule a Free Consultation
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/team" className="flex items-center gap-2">
                    Meet Our Team
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Mission</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">Why We Do What We Do</h2>
              </div>
              
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
                <p className="text-lg md:text-xl text-center leading-relaxed mb-6">
                  Parents of children with autism or other special needs often have a very difficult time helping their child overcome their challenges.
                </p>
                <p className="text-lg md:text-xl text-center leading-relaxed mb-6">
                  We work as a <strong className="text-primary">trans-disciplinary team</strong> to create individualized, functional, evidence-based interventions that teach these missing skills.
                </p>
                <p className="text-xl md:text-2xl text-center font-semibold text-primary">
                  As a result, the family achieves an improved quality of life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Philosophy</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">The Values That Guide Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These core principles shape every interaction, every treatment plan, and every relationship we build with the families we serve.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-soft border border-border/50 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* History Timeline */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Journey</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">A History of Helping Families</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From our humble beginnings to becoming a leading therapy provider in the GTA, here's our story.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2" />
                
                {timeline.map((item, index) => (
                  <div 
                    key={index}
                    className={`relative flex items-start gap-8 mb-12 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 mt-2 z-10" />
                    
                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm mb-2">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Disciplines Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Expertise</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Five Disciplines, One Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our therapists work together across disciplines to provide comprehensive, coordinated care for your child.
              </p>
            </div>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              {disciplines.map((discipline, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/50 hover:border-primary/30 transition-all group"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{discipline.name}</h3>
                    </div>
                    <p className="text-muted-foreground flex-1 md:pl-16">{discipline.description}</p>
                    <Button variant="ghost" size="sm" asChild className="self-start md:self-center">
                      <a href={discipline.link} className="flex items-center gap-1">
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Making a Difference Every Day</h2>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto">
                These numbers represent the families we've had the privilege to serve and the impact we've made together.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <Award className="h-12 w-12 mx-auto mb-4 opacity-80" />
                <div className="text-4xl md:text-5xl font-bold mb-2">5+</div>
                <p className="text-primary-foreground/80">Years of Service</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 mx-auto mb-4 opacity-80" />
                <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                <p className="text-primary-foreground/80">Families Served</p>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 mx-auto mb-4 opacity-80" />
                <div className="text-4xl md:text-5xl font-bold mb-2">50-75%</div>
                <p className="text-primary-foreground/80">Reduced Wait Times</p>
              </div>
              <div className="text-center">
                <Star className="h-12 w-12 mx-auto mb-4 opacity-80" />
                <div className="text-4xl md:text-5xl font-bold mb-2">OAP</div>
                <p className="text-primary-foreground/80">Approved Provider</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Why Side by Side</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">What Makes Us Different</h2>
                
                <div className="space-y-4">
                  {[
                    "All services provided in your home for maximum comfort and family involvement",
                    "Trans-disciplinary team approach ensures comprehensive, coordinated care",
                    "Board Certified Behaviour Analysts (BCBAs) lead our treatment programs",
                    "Ontario Autism Program (OAP) approved provider for funded services",
                    "Free 30-minute consultation to discuss your family's unique needs",
                    "Continuous parent coaching and involvement in all therapies",
                    "Flexible scheduling to accommodate your family's lifestyle",
                    "Serving the entire Greater Toronto Area and surrounding regions",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-muted-foreground mb-8">
                  We understand that every family's journey is unique. Contact us today for a free, no-obligation 
                  30-minute consultation to learn how we can work together to support your child's development.
                </p>
                
                <div className="space-y-4">
                  <Button variant="hero" size="lg" className="w-full" asChild>
                    <a href="tel:647-955-5995" className="flex items-center justify-center gap-2">
                      <Phone className="h-5 w-5" />
                      Call 647-955-5995
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full" asChild>
                    <a href="/#contact">Send Us a Message</a>
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground text-center mt-6">
                  <Clock className="h-4 w-4 inline-block mr-1" />
                  Available Monday - Friday, 9am - 5pm
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </PageTransition>
  );
};

export default About;
