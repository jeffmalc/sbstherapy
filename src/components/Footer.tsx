import { Heart, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import OptimizedImage from "@/components/OptimizedImage";
import footerLogo from "@/assets/footer-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <a href="/" aria-label="Side by Side Therapy - Home">
              <OptimizedImage src={footerLogo} alt="Side by Side Therapy" className="h-16 w-auto mb-4 hover:opacity-80 transition-opacity" height={64} />
            </a>
            <p className="text-primary-foreground/70 max-w-md mb-4">
              Supporting families with compassionate, evidence-based autism therapy services in the Greater Toronto Area.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/sidebysidetherapy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/sidebysideabatherapy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.youtube.com/c/SidebySideTherapy-Autism-and-ABA-Therapy-Services"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/side-by-side-therapy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><a href="/services/aba-therapy" className="hover:text-primary-foreground transition-colors">ABA Therapy</a></li>
              <li><a href="/services/speech-therapy" className="hover:text-primary-foreground transition-colors">Speech Therapy</a></li>
              <li><a href="/services/occupational-therapy" className="hover:text-primary-foreground transition-colors">Occupational Therapy</a></li>
              <li><a href="/services/therapeutic-recreation" className="hover:text-primary-foreground transition-colors">Therapeutic Recreation</a></li>
              <li><a href="/services/respite-services" className="hover:text-primary-foreground transition-colors">Respite Services</a></li>
              <li><a href="/services/social-skills-training" className="hover:text-primary-foreground transition-colors">Social Skills Training</a></li>
              <li><a href="/services/bcba-mentorship" className="hover:text-primary-foreground transition-colors">BCBA Mentorship</a></li>
              <li><a href="/services/psycho-educational-assessments" className="hover:text-primary-foreground transition-colors">Psycho-Educational Assessments</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><a href="tel:647-955-5995" className="hover:text-primary-foreground transition-colors">647-955-5995</a></li>
              <li><a href="mailto:info@sidebysidetherapy.ca" className="hover:text-primary-foreground transition-colors">info@sidebysidetherapy.ca</a></li>
              <li>Greater Toronto Area</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Side by Side Therapy. All rights reserved.
            </p>
            <a 
              href="/privacy-policy" 
              className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors underline-offset-2 hover:underline"
            >
              Privacy Policy
            </a>
          </div>
          <p className="text-sm text-primary-foreground/60 flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-accent fill-accent" /> in <a href="/service-area/toronto" className="hover:text-primary-foreground transition-colors underline-offset-2 hover:underline">Toronto</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
