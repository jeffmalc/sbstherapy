import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/SEOSchema";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  return (
    <>
      <SEOSchema />
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <AnimatedSection animation="fade-up">
            <Services />
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <ServiceAreaMap />
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <About />
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <FAQ />
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <Contact />
          </AnimatedSection>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
