import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen, CheckCircle, Phone, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PsychoEducationalAssessments = () => {
  const assessmentAreas = [
    "Cognitive abilities and intellectual functioning",
    "Academic achievement (reading, writing, math)",
    "Attention and executive functioning",
    "Memory and processing speed",
    "Social-emotional functioning",
    "Adaptive behaviour skills",
  ];

  const benefits = [
    "Identify learning disabilities and giftedness",
    "Support IEP development and school accommodations",
    "Guide intervention planning",
    "Access to specialized programs and funding",
    "Comprehensive written report with recommendations",
    "Feedback session with parents/caregivers",
  ];

  return (
    <>
      <Helmet>
        <title>Psycho-Educational Assessments | Side by Side Therapy</title>
        <meta name="description" content="Comprehensive psycho-educational assessments for children in the GTA. Identify strengths, learning needs, and get school accommodation recommendations." />
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        <section className="py-16 md:py-24 bg-gradient-to-br from-amber-100 to-yellow-50">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/20 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-amber-600" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground">
                Psycho-Educational Assessments
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-3xl mb-8">
              Standardized testing to identify your child's strengths and areas for growth, providing invaluable support for school accommodations and intervention planning.
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
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Understanding Your Child's Learning Profile</h2>
              <p className="text-muted-foreground mb-4">
                A psycho-educational assessment provides a comprehensive picture of how your child learns. Using standardized tests and clinical observations, we evaluate cognitive abilities, academic skills, and social-emotional functioning.
              </p>
              <p className="text-muted-foreground">
                The results help identify learning disabilities, attention difficulties, giftedness, or other factors that may be affecting your child's performance at school. This information is crucial for developing effective educational plans and accessing appropriate supports.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">What We Assess</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {assessmentAreas.map((area, index) => (
                <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-xl shadow-sm">
                  <CheckCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Benefits of Assessment</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-xl shadow-sm border">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
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
              Contact us today to schedule a psycho-educational assessment and gain valuable insights into your child's learning needs.
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

export default PsychoEducationalAssessments;