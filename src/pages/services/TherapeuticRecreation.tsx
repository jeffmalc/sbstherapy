import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Gamepad2, CheckCircle, Phone, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TherapeuticRecreation = () => {
  const benefits = [
    "Social skill development through structured play",
    "Emotional regulation and coping strategies",
    "Physical fitness and motor skill improvement",
    "Increased self-confidence and self-esteem",
    "Community integration and leisure skills",
    "Stress reduction and enjoyment",
  ];

  return (
    <>
      <Helmet>
        <title>Therapeutic Recreation | Side by Side Therapy</title>
        <meta name="description" content="Therapeutic recreation services for children with autism in the GTA. Develop social, emotional, and physical skills through engaging recreational activities." />
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        <section className="py-16 md:py-24 bg-gradient-to-br from-violet-100 to-purple-50">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-violet-500/20 flex items-center justify-center">
                <Gamepad2 className="h-8 w-8 text-violet-600" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground">
                Therapeutic Recreation
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-3xl mb-8">
              Our Recreation Therapists engage with your child to address social, emotional, cognitive, and physical development through the power of play and recreational activities.
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
              <h2 className="text-2xl md:text-3xl font-bold mb-6">The Power of Play</h2>
              <p className="text-muted-foreground mb-4">
                Therapeutic recreation uses recreational activities as a treatment modality to improve functioning and well-being. For children with autism, play-based interventions can be particularly effective because they tap into natural motivations and interests.
              </p>
              <p className="text-muted-foreground">
                Our certified therapeutic recreation specialists design individualized programs that make therapy feel like fun while addressing important developmental goals.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-xl shadow-sm">
                  <CheckCircle className="h-5 w-5 text-violet-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to learn how therapeutic recreation can benefit your child.
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

export default TherapeuticRecreation;