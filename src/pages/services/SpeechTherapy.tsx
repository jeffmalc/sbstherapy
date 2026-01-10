import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle, Phone, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SpeechTherapy = () => {
  const areas = [
    "Expressive language (verbal communication)",
    "Receptive language (understanding others)",
    "Articulation and speech clarity",
    "Augmentative and alternative communication (AAC)",
    "Social communication and pragmatics",
    "Feeding and swallowing difficulties",
  ];

  return (
    <>
      <Helmet>
        <title>Speech Therapy | Side by Side Therapy</title>
        <meta name="description" content="Speech-Language Pathology services for children with autism in the GTA. Improve verbal and nonverbal communication skills with experienced SLPs." />
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        <section className="py-16 md:py-24 bg-gradient-to-br from-orange-100 to-amber-50">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center">
                <MessageCircle className="h-8 w-8 text-orange-600" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground">
                Speech Therapy
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-3xl mb-8">
              Our Speech-Language Pathologists work to improve your child's verbal and nonverbal communication skills, helping them express their needs, thoughts, and feelings more effectively.
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
              <h2 className="text-2xl md:text-3xl font-bold mb-6">How Speech Therapy Helps</h2>
              <p className="text-muted-foreground mb-4">
                Communication challenges are common in children with autism spectrum disorder. Speech-Language Pathologists (SLPs) specialize in evaluating and treating these challenges, whether they involve spoken language, understanding language, or using alternative forms of communication.
              </p>
              <p className="text-muted-foreground">
                Our SLPs use evidence-based techniques tailored to each child's unique needs, working closely with families and other therapy team members to ensure consistent progress across all environments.
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
                  <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
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
              Contact us today to schedule a free consultation and learn how speech therapy can help your child communicate more effectively.
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

export default SpeechTherapy;