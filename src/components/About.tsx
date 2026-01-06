import { CheckCircle2, Award, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Board Certified Behaviour Analysts (BCBAs)",
  "Ontario Autism Program (OAP) approved provider",
  "In-home, in-clinic, and school-based services",
  "Individualized treatment plans",
  "Family-centered approach",
  "Evidence-based interventions",
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
              Supporting Families <span className="text-gradient">Side by Side</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              At Side by Side Therapy, we believe every child deserves the opportunity to reach their full potential. 
              Our team of experienced therapists works closely with families to provide compassionate, 
              evidence-based care tailored to each child's unique needs.
            </p>
            
            <p className="text-muted-foreground mb-8">
              As an approved Ontario Autism Program (OAP) provider, we help families navigate funding options 
              and ensure access to the highest quality therapeutic services in the Greater Toronto Area.
            </p>
            
            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button variant="hero" size="lg" asChild>
              <a href="tel:647-955-5995">Learn More About Our Approach</a>
            </Button>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-background rounded-2xl p-8 shadow-soft text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-primary mb-2">BCBA</div>
              <p className="text-sm text-muted-foreground">Certified Analysts</p>
            </div>
            
            <div className="bg-background rounded-2xl p-8 shadow-soft text-center">
              <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
              <div className="text-4xl font-bold text-secondary mb-2">500+</div>
              <p className="text-sm text-muted-foreground">Families Served</p>
            </div>
            
            <div className="bg-background rounded-2xl p-8 shadow-soft text-center">
              <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
              <div className="text-4xl font-bold text-accent mb-2">15+</div>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            
            <div className="gradient-hero rounded-2xl p-8 text-center text-primary-foreground">
              <div className="text-4xl font-bold mb-2">OAP</div>
              <p className="text-sm opacity-90">Approved Provider</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
