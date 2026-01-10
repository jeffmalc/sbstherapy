import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Brain, CheckCircle, Phone, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ABATherapy = () => {
  const benefits = [
    "Individualized treatment plans based on comprehensive assessments",
    "Evidence-based interventions proven effective through research",
    "Data-driven progress monitoring and adjustments",
    "Parent training and family involvement",
    "Focus on meaningful, functional skill development",
    "Reduction of challenging behaviors through positive strategies",
  ];

  const serviceModels = [
    {
      title: "Comprehensive ABA",
      description: "Intensive, full-time therapy addressing multiple developmental areas including communication, social skills, self-care, and academics.",
      hours: "25-40 hours/week",
    },
    {
      title: "Focused ABA",
      description: "Targeted intervention addressing specific skill deficits or behavioral challenges with measurable goals.",
      hours: "10-25 hours/week",
    },
    {
      title: "Consultation Model",
      description: "Expert guidance for families and other professionals, including program development and staff training.",
      hours: "As needed",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Applied Behaviour Analysis (ABA) Therapy | Side by Side Therapy</title>
        <meta name="description" content="Evidence-based ABA therapy for children with autism in the GTA. Comprehensive, focused, and consultation models available with experienced BCBAs." />
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground">
                Applied Behaviour Analysis
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-3xl mb-8">
              ABA is the gold standard in autism treatment, using evidence-based techniques to teach helpful behaviours while reducing challenging ones. Our Board Certified Behavior Analysts (BCBAs) create individualized programs that make a real difference.
            </p>
            
            <Button variant="hero" size="lg" asChild>
              <a href="tel:647-955-5995">
                <Phone className="h-4 w-4 mr-2" />
                Schedule Free Consultation
              </a>
            </Button>
          </div>
        </section>

        {/* What is ABA */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">What is ABA Therapy?</h2>
              <p className="text-muted-foreground mb-4">
                Applied Behaviour Analysis (ABA) is a scientific approach to understanding behaviour and how it is affected by the environment. ABA therapy applies our understanding of how behaviour works to real situations, with the goal of increasing helpful behaviours and decreasing behaviours that may cause harm or interfere with learning.
              </p>
              <p className="text-muted-foreground mb-4">
                ABA therapy programs are designed and supervised by Board Certified Behavior Analysts (BCBAs) who have completed graduate-level education and supervised experience. Each program is tailored to the individual needs of the child and family.
              </p>
              <p className="text-muted-foreground">
                Research has shown that intensive and long-term therapy using ABA principles improves outcomes for many children with autism. These improvements include gains in intellectual functioning, language development, daily living skills, and social functioning.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Benefits of ABA Therapy</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-xl shadow-sm">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Models */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Service Models</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {serviceModels.map((model, index) => (
                <div key={index} className="bg-card rounded-2xl p-6 shadow-soft border">
                  <h3 className="text-xl font-bold mb-3 text-primary">{model.title}</h3>
                  <p className="text-muted-foreground mb-4">{model.description}</p>
                  <div className="text-sm font-semibold text-foreground bg-secondary/50 px-3 py-1.5 rounded-full inline-block">
                    {model.hours}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to schedule a free consultation and learn how ABA therapy can help your child reach their full potential.
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

export default ABATherapy;