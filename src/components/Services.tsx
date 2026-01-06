import { Brain, BookOpen, MessageCircle, HandHeart, Gamepad2, Users, GraduationCap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Brain,
    title: "Applied Behaviour Analysis",
    description: "Evidence-based therapy to teach helpful behaviours while reducing challenging ones. Comprehensive, focused, or consultation models available.",
    color: "primary",
  },
  {
    icon: MessageCircle,
    title: "Speech Therapy",
    description: "Speech-Language Pathologists work to improve your child's verbal and nonverbal communication skills.",
    color: "secondary",
  },
  {
    icon: HandHeart,
    title: "Occupational Therapy",
    description: "Addressing challenges that prevent your child from being successful at school and home with targeted interventions.",
    color: "accent",
  },
  {
    icon: Gamepad2,
    title: "Therapeutic Recreation",
    description: "Recreation therapists engage with your child to address social, emotional, cognitive and physical development through play.",
    color: "primary",
  },
  {
    icon: Heart,
    title: "Respite Services",
    description: "Providing caregivers a much-needed break while your child enjoys fun, engaging activities with trained professionals.",
    color: "secondary",
  },
  {
    icon: Users,
    title: "Social Skills Training",
    description: "Dedicated learning opportunities in groups or dyads to help your child practice and master essential social skills.",
    color: "accent",
  },
  {
    icon: GraduationCap,
    title: "BCBA Mentorship & Supervision",
    description: "Interested in becoming a BCBA or BCaBA? Let us help you achieve your professional certification goals.",
    color: "primary",
  },
  {
    icon: BookOpen,
    title: "Psycho-Educational Assessments",
    description: "Standardized testing to identify your child's strengths and areas for growth, providing invaluable support for school accommodations.",
    color: "secondary",
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
            <article
              key={service.title}
              className="group relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${colorClasses[service.color as keyof typeof colorClasses]}`}>
                <service.icon className="h-7 w-7" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </article>
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
