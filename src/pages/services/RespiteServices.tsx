import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, CheckCircle, Phone, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const RespiteServices = () => {
  const features = [
    "Trained professionals experienced with autism",
    "Engaging, fun activities for your child",
    "In-home or community-based options",
    "Flexible scheduling to meet family needs",
    "Peace of mind knowing your child is safe",
    "Opportunity for siblings to get attention too",
  ];

  return (
    <>
      <Helmet>
        <title>Respite Services | Side by Side Therapy</title>
        <meta name="description" content="Respite care services for families of children with autism in the GTA. Give caregivers a break while children enjoy engaging activities with trained professionals." />
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        <section className="py-16 md:py-24 bg-gradient-to-br from-rose-100 to-pink-50">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-rose-500/20 flex items-center justify-center">
                <Heart className="h-8 w-8 text-rose-600" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground">
                Respite Services
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-3xl mb-8">
              We provide caregivers a much-needed break while your child enjoys fun, engaging activities with trained professionals who understand their unique needs.
            </p>
            
            <Button variant="hero" size="lg" asChild>
              <a href="tel:647-955-5995">
                <Phone className="h-4 w-4 mr-2" />
                Schedule Free Consultation
              </a>
            </Button>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Supporting the Whole Family</h2>
              <p className="text-muted-foreground mb-4">
                Caring for a child with autism can be rewarding but also demanding. Respite services provide temporary relief for primary caregivers, allowing you to rest, attend to other responsibilities, or simply take time for yourself.
              </p>
              <p className="text-muted-foreground">
                Our respite workers are carefully selected and trained to work with children with autism. They provide engaging, age-appropriate activities while maintaining the routines and strategies that work best for your child.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">What We Offer</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-xl shadow-sm">
                  <CheckCircle className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about our respite services and how we can support your family.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="tel:647-955-5995">
                <Phone className="h-4 w-4 mr-2" />
                Call 647-955-5995
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default RespiteServices;