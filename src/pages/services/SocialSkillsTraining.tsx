import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, CheckCircle, Phone, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SocialSkillsTraining = () => {
  const skills = [
    "Initiating and maintaining conversations",
    "Reading social cues and body language",
    "Taking turns and sharing",
    "Making and keeping friends",
    "Understanding emotions in self and others",
    "Handling conflicts and problem-solving",
  ];

  return (
    <>
      <Helmet>
        <title>Social Skills Training | Side by Side Therapy</title>
        <meta name="description" content="Social skills training for children with autism in the GTA. Group and individual sessions to help children build meaningful relationships and navigate social situations." />
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        <section className="py-16 md:py-24 bg-gradient-to-br from-sky-100 to-blue-50">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-sky-500/20 flex items-center justify-center">
                <Users className="h-8 w-8 text-sky-600" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground">
                Social Skills Training
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-3xl mb-8">
              Dedicated learning opportunities in groups or dyads to help your child practice and master essential social skills in a supportive, structured environment.
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
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Building Social Connections</h2>
              <p className="text-muted-foreground mb-4">
                Social skills can be challenging for children with autism, but with the right support and practice, significant improvements are possible. Our social skills programs provide structured opportunities to learn and practice these important skills.
              </p>
              <p className="text-muted-foreground">
                We offer both group sessions (where children can practice with peers) and dyad sessions (one-on-one with a trained therapist) depending on each child's needs and comfort level.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Skills We Teach</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-xl shadow-sm">
                  <CheckCircle className="h-5 w-5 text-sky-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to learn how social skills training can help your child build meaningful connections.
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

export default SocialSkillsTraining;