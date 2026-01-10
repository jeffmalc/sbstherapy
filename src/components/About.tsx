import { CheckCircle2, Award, Users, Clock, Heart, Target, Sparkles, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { StaggeredItem } from "@/components/AnimatedSection";

const coreValues = [
  {
    icon: Target,
    title: "Trans-Disciplinary Approach",
    description: "Our therapists from ABA, Speech, OT, and Recreation work as a unified team to address all aspects of your child's development."
  },
  {
    icon: Heart,
    title: "Family-Centered Care",
    description: "We believe families are integral parts of the treatment team. All services happen in your home, ensuring you're involved in every step."
  },
  {
    icon: Sparkles,
    title: "Evidence-Based Interventions",
    description: "We create individualized, functional, evidence-based interventions that teach missing skills and achieve meaningful outcomes."
  }
];

const qualifications = [
  "Board Certified Behaviour Analysts (BCBAs)",
  "Ontario Autism Program (OAP) approved provider",
  "In-home, in-clinic, and school-based services",
  "Individualized treatment plans",
  "30-minute free consultation available",
  "Comprehensive psycho-educational assessments",
];

const disciplines = [
  { name: "ABA Therapy", desc: "Behaviour analysis & skill building", link: "/services/aba-therapy" },
  { name: "Speech Therapy", desc: "Communication & language development", link: "/services/speech-therapy" },
  { name: "Occupational Therapy", desc: "Independence & daily living skills", link: "/services/occupational-therapy" },
  { name: "Therapeutic Recreation", desc: "Learning through play & recreation", link: "/services/therapeutic-recreation" },
  { name: "Respite Services", desc: "Quality care & family support", link: "/services/respite-services" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Mission Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Mission</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Supporting Families <span className="text-gradient">Side by Side</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Parents of children with autism or other special needs often have a very difficult time helping their child overcome their challenges. 
            We work as a <strong className="text-foreground">trans-disciplinary team</strong> to create individualized, functional, evidence-based interventions 
            that teach these missing skills. As a result, <strong className="text-foreground">the family achieves an improved quality of life.</strong>
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {coreValues.map((value, index) => (
            <StaggeredItem key={index} index={index} staggerDelay={150} animation="fade-up">
              <div className="bg-background rounded-2xl p-8 shadow-soft border border-border/50 hover:shadow-[0_8px_30px_-8px_hsl(289_35%_36%_/_0.25),0_0_15px_hsl(327_48%_43%_/_0.1)] hover:border-primary/30 transition-all duration-300 group h-full hover:-translate-y-1 hover:scale-[1.01]">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_hsl(289_35%_36%_/_0.3)] transition-all duration-300">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </StaggeredItem>
          ))}
        </div>

        {/* About Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Who We Are</span>
            <h3 className="text-2xl md:text-3xl font-bold mt-3 mb-6">
              A Team of Paediatric Specialists Working Together
            </h3>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Side by Side Therapy is a transdisciplinary team of paediatric therapists who work with parents and their special needs children 
              to teach skills that will improve the child and family's quality of life. We have therapists from <strong className="text-foreground">five disciplines</strong>: 
              Applied Behaviour Analysis, Speech-Language Pathology, Occupational Therapy, Therapeutic Recreation and Respite.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our Board Certified Behaviour Analysts (BCBAs), Senior Therapists and Instructor Therapists develop goals that address all domains 
              of learning: <strong className="text-foreground">academics, life skills, social skills, play skills, challenging behaviours</strong> and more. 
              The overall goal is to improve socially significant behaviours and help your child reach their full potential.
            </p>
            
            {/* Qualifications List */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {qualifications.map((qualification, index) => (
                <StaggeredItem key={qualification} index={index} staggerDelay={75} animation="fade-left">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-sm font-medium">{qualification}</span>
                  </div>
                </StaggeredItem>
              ))}
            </div>
            
            <Button variant="hero" size="lg" asChild>
              <a href="tel:647-955-5995" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Book Your Free Consultation
              </a>
            </Button>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <StaggeredItem index={0} staggerDelay={100} animation="zoom-in">
              <div className="bg-background rounded-2xl p-8 shadow-soft text-center border border-border/50 hover:border-primary/30 hover:shadow-[0_0_25px_hsl(289_35%_36%_/_0.3)] hover:scale-[1.03] transition-all duration-300">
                <Award className="h-12 w-12 text-primary mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
                <div className="text-4xl font-bold text-primary mb-2">BCBA</div>
                <p className="text-sm text-muted-foreground">Certified Analysts</p>
              </div>
            </StaggeredItem>
            
            <StaggeredItem index={1} staggerDelay={100} animation="zoom-in">
              <div className="bg-background rounded-2xl p-8 shadow-soft text-center border border-border/50 hover:border-secondary/30 hover:shadow-[0_0_25px_hsl(191_31%_51%_/_0.3)] hover:scale-[1.03] transition-all duration-300">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <div className="text-4xl font-bold text-secondary mb-2">500+</div>
                <p className="text-sm text-muted-foreground">Families Served</p>
              </div>
            </StaggeredItem>
            
            <StaggeredItem index={2} staggerDelay={100} animation="zoom-in">
              <div className="bg-background rounded-2xl p-8 shadow-soft text-center border border-border/50 hover:border-accent/30 hover:shadow-[0_0_25px_hsl(327_48%_43%_/_0.3)] hover:scale-[1.03] transition-all duration-300">
                <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
                <div className="text-4xl font-bold text-accent mb-2">5+</div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </StaggeredItem>
            
            <StaggeredItem index={3} staggerDelay={100} animation="zoom-in">
              <div className="gradient-hero rounded-2xl p-8 text-center text-primary-foreground hover:shadow-[0_0_30px_hsl(289_35%_36%_/_0.5)] hover:scale-[1.03] transition-all duration-300">
                <div className="text-4xl font-bold mb-2">OAP</div>
                <p className="text-sm opacity-90">Approved Provider</p>
              </div>
            </StaggeredItem>
          </div>
        </div>

        {/* Team Disciplines Section */}
        <div className="mt-20 bg-background rounded-3xl p-8 md:p-12 shadow-soft border border-border/50">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Five Therapeutic Disciplines</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each discipline brings specialized expertise, working together to provide comprehensive care tailored to your child's unique needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-4">
            {disciplines.map((discipline, index) => (
              <StaggeredItem key={index} index={index} staggerDelay={100} animation="fade-up">
                <Link 
                  to={discipline.link}
                  className="text-center p-6 rounded-xl bg-muted/30 hover:bg-primary/10 transition-all duration-300 group hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0_8px_25px_-8px_hsl(289_35%_36%_/_0.3)] block h-full active:scale-[0.98]"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-3 flex items-center justify-center text-primary-foreground font-bold">
                    {index + 1}
                  </div>
                  <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">{discipline.name}</h4>
                  <p className="text-xs text-muted-foreground mb-2">{discipline.desc}</p>
                  <div className="flex items-center justify-center text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </div>
                </Link>
              </StaggeredItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
