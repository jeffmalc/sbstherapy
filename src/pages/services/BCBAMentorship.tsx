import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { GraduationCap, CheckCircle, Phone, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BCBAMentorship = () => {
  const offerings = [
    "Supervised fieldwork hours (unrestricted and concentrated)",
    "Mentorship from experienced BCBAs",
    "Case conceptualization and analysis",
    "Ethical decision-making guidance",
    "Exam preparation support",
    "Professional development opportunities",
  ];

  return (
    <>
      <Helmet>
        <title>BCBA Mentorship & Supervision | Side by Side Therapy</title>
        <meta name="description" content="BCBA and BCaBA supervision and mentorship in the GTA. Accumulate supervised fieldwork hours with experienced Board Certified Behavior Analysts." />
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-100 to-purple-50">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 flex items-center justify-center">
                <GraduationCap className="h-8 w-8 text-indigo-600" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground">
                BCBA Mentorship & Supervision
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-3xl mb-8">
              Interested in becoming a BCBA or BCaBA? Let our experienced Board Certified Behavior Analysts help you achieve your professional certification goals.
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
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Your Path to Certification</h2>
              <p className="text-muted-foreground mb-4">
                Becoming a Board Certified Behavior Analyst requires extensive supervised experience. Our supervision program provides the high-quality mentorship and fieldwork hours you need to meet BACB requirements.
              </p>
              <p className="text-muted-foreground">
                Our supervisors are experienced BCBAs who are passionate about developing the next generation of behavior analysts. We provide both individual and group supervision, with opportunities to work across diverse cases and settings.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">What We Offer</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {offerings.map((offering, index) => (
                <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-xl shadow-sm">
                  <CheckCircle className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{offering}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about our supervision program and take the next step in your career.
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

export default BCBAMentorship;