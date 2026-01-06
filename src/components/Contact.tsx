import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
              Ready to <span className="text-gradient">Get Started?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Take the first step towards supporting your child's development. 
              Book a free consultation with our team today.
            </p>
          </div>
          
          {/* Contact Card */}
          <div className="gradient-hero rounded-3xl p-8 md:p-12 text-primary-foreground shadow-elevated">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Book Your Free Consultation
                </h3>
                <p className="opacity-90 mb-6">
                  Our team is ready to answer your questions and discuss how we can help your child thrive.
                </p>
                
                <Button variant="outline" size="xl" className="bg-primary-foreground/10 border-primary-foreground/30 hover:bg-primary-foreground hover:text-primary" asChild>
                  <a href="tel:647-955-5995" className="gap-3">
                    <Phone className="h-5 w-5" />
                    Call: 647-955-5995
                  </a>
                </Button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-primary-foreground/10 rounded-xl p-4">
                  <Phone className="h-6 w-6" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <a href="tel:647-955-5995" className="opacity-90 hover:opacity-100">647-955-5995</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-primary-foreground/10 rounded-xl p-4">
                  <Mail className="h-6 w-6" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href="mailto:info@sidebysidetherapy.ca" className="opacity-90 hover:opacity-100">info@sidebysidetherapy.ca</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-primary-foreground/10 rounded-xl p-4">
                  <MapPin className="h-6 w-6" />
                  <div>
                    <div className="font-semibold">Location</div>
                    <span className="opacity-90">Greater Toronto Area</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-primary-foreground/10 rounded-xl p-4">
                  <Clock className="h-6 w-6" />
                  <div>
                    <div className="font-semibold">Hours</div>
                    <span className="opacity-90">Mon-Fri: 9am-6pm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
