import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { HandHeart, CheckCircle, Phone, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const OccupationalTherapy = () => {
  const areas = [
    "Fine motor skills (writing, cutting, buttoning)",
    "Gross motor coordination and balance",
    "Sensory processing and regulation",
    "Self-care skills (dressing, feeding, hygiene)",
    "Visual motor integration",
    "Executive functioning and organization",
  ];

  return (
    <>
      <Helmet>
        <title>Occupational Therapy | Side by Side Therapy</title>
        <meta name="description" content="Occupational therapy for children with autism in the GTA. Address motor skills, sensory processing, and daily living skills with experienced OTs." />
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-100 to-teal-50">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
                <HandHeart className="h-8 w-8 text-emerald-600" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground">
                Occupational Therapy
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-3xl mb-8">
              Our Occupational Therapists address challenges that prevent your child from being successful at school and home, using targeted interventions to build independence and confidence.
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
              <h2 className="text-2xl md:text-3xl font-bold mb-6">What is Occupational Therapy?</h2>
              <p className="text-muted-foreground mb-4">
                Occupational therapy helps children participate in the activities (or "occupations") that are important to them—playing, learning, and self-care. For children with autism, this often means addressing sensory processing differences, motor skill challenges, and difficulties with daily routines.
              </p>
              <p className="text-muted-foreground">
                Our OTs work collaboratively with families to set meaningful goals and create strategies that can be implemented across home, school, and community settings.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Areas We Address</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {areas.map((area, index) => (
                <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-xl shadow-sm">
                  <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to schedule a free consultation and learn how occupational therapy can help your child thrive.
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

export default OccupationalTherapy;