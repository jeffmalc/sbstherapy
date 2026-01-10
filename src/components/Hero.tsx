import { Phone, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";

const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return { count, ref };
};

const Hero = () => {
  const { count: familiesCount, ref: familiesRef } = useCountUp(150, 2500);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-soft" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-soft mb-8 animate-fade-in">
            <Heart className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">Toronto's Trusted ABA Therapy Provider</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            Has Your Child Been{" "}
            <span className="text-gradient">Diagnosed with Autism?</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Connect with the most qualified and experienced ABA therapy team in Toronto. 
            We're here to support your child's development every step of the way.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="tel:647-955-5995" className="gap-3">
                <Phone className="h-5 w-5" />
                Free Consultation: 647-955-5995
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#services" className="gap-2">
                Explore Our Services
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="text-center p-4 bg-card rounded-xl shadow-soft">
              <div className="text-2xl md:text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div ref={familiesRef} className="text-center p-4 bg-card rounded-xl shadow-soft">
              <div className="text-2xl md:text-3xl font-bold text-primary">{familiesCount}+</div>
              <div className="text-sm text-muted-foreground">Families Helped</div>
            </div>
            <div className="text-center p-4 bg-card rounded-xl shadow-soft">
              <div className="text-2xl md:text-3xl font-bold text-primary">8</div>
              <div className="text-sm text-muted-foreground">Therapy Services</div>
            </div>
            <div className="text-center p-4 bg-card rounded-xl shadow-soft">
              <div className="text-2xl md:text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">OAP Approved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
