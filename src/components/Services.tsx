import { Brain, BookOpen, MessageCircle, HandHeart, Gamepad2, Users, GraduationCap, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { StaggeredItem } from "@/components/AnimatedSection";

const services = [
  {
    icon: Brain,
    title: "Applied Behaviour Analysis",
    description: "Evidence-based therapy to teach helpful behaviours while reducing challenging ones. Comprehensive, focused, or consultation models available.",
    color: "primary",
    link: "/services/aba-therapy",
  },
  {
    icon: MessageCircle,
    title: "Speech Therapy",
    description: "Speech-Language Pathologists work to improve your child's verbal and nonverbal communication skills.",
    color: "secondary",
    link: "/services/speech-therapy",
  },
  {
    icon: HandHeart,
    title: "Occupational Therapy",
    description: "Addressing challenges that prevent your child from being successful at school and home with targeted interventions.",
    color: "accent",
    link: "/services/occupational-therapy",
  },
  {
    icon: Gamepad2,
    title: "Therapeutic Recreation",
    description: "Recreation therapists engage with your child to address social, emotional, cognitive and physical development through play.",
    color: "primary",
    link: "/services/therapeutic-recreation",
  },
  {
    icon: Heart,
    title: "Respite Services",
    description: "Providing caregivers a much-needed break while your child enjoys fun, engaging activities with trained professionals.",
    color: "secondary",
    link: "/services/respite-services",
  },
  {
    icon: Users,
    title: "Social Skills Training",
    description: "Dedicated learning opportunities in groups or dyads to help your child practice and master essential social skills.",
    color: "accent",
    link: "/services/social-skills-training",
  },
  {
    icon: GraduationCap,
    title: "BCBA Mentorship & Supervision",
    description: "Interested in becoming a BCBA or BCaBA? Let us help you achieve your professional certification goals.",
    color: "primary",
    link: "/services/bcba-mentorship",
  },
  {
    icon: BookOpen,
    title: "Psycho-Educational Assessments",
    description: "Standardized testing to identify your child's strengths and areas for growth, providing invaluable support for school accommodations.",
    color: "secondary",
    link: "/services/psycho-educational-assessments",
  },
];

const colorClasses = {
  primary: "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground",
  secondary: "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground",
  accent: "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground",
};

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 gradient-soft opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Comprehensive <span className="text-gradient">Therapy Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We offer a full range of evidence-based therapies designed to support children with autism and their families.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <StaggeredItem key={service.title} index={index} staggerDelay={75} animation="fade-up">
              <Link
                to={service.link}
                className="group relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 block h-full"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${colorClasses[service.color as keyof typeof colorClasses]}`}>
                  <service.icon className="h-7 w-7" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                
                <div className="flex items-center text-sm font-semibold text-primary group-hover:text-primary transition-colors">
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </StaggeredItem>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <a href="tel:647-955-5995">Schedule Your Free Consultation</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
