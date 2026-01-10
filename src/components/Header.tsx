import { useState } from "react";
import { Menu, X, Phone, ChevronDown, Brain, MessageCircle, HandHeart, Gamepad2, Heart, Users, GraduationCap, BookOpen, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.png";

const serviceItems = [
  { name: "Applied Behaviour Analysis", href: "/services/aba-therapy", icon: Brain },
  { name: "Speech Therapy", href: "/services/speech-therapy", icon: MessageCircle },
  { name: "Occupational Therapy", href: "/services/occupational-therapy", icon: HandHeart },
  { name: "Therapeutic Recreation", href: "/services/therapeutic-recreation", icon: Gamepad2 },
  { name: "Respite Services", href: "/services/respite-services", icon: Heart },
  { name: "Social Skills Training", href: "/services/social-skills-training", icon: Users },
  { name: "BCBA Mentorship & Supervision", href: "/services/bcba-mentorship", icon: GraduationCap },
  { name: "Psycho-Educational Assessments", href: "/services/psycho-educational-assessments", icon: BookOpen },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Service Areas", href: "/#service-area" },
    { name: "About", href: "/about" },
    { name: "OAP Guide", href: "/oap" },
    { name: "Our Team", href: "/team" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a href="#home" className="skip-link">
        Skip to main content
      </a>
      
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-soft" role="banner">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg" aria-label="Side by Side Therapy - Home">
              <img src={logo} alt="Side by Side Therapy" className="h-14 w-auto" width={56} height={56} />
            </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" role="navigation" aria-label="Main navigation">
            <a
              href="/#home"
              className="text-foreground/80 hover:text-primary font-medium transition-colors duration-300"
            >
              Home
            </a>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground/80 hover:text-primary font-medium transition-colors duration-300 outline-none">
                Services
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-72">
                {serviceItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <a
                      href={item.href}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <item.icon className="h-4 w-4 text-primary" />
                      <span>{item.name}</span>
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.slice(1).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://www.facebook.com/sidebysidetherapy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/sidebysidetherapy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a href="tel:647-955-5995" className="flex items-center gap-2 text-primary font-semibold">
              <Phone className="h-4 w-4" />
              647-955-5995
            </a>
            <Button variant="hero" size="lg" asChild>
              <a href="tel:647-955-5995">Free Consultation</a>
            </Button>
          </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-border animate-slide-up">
            <div className="flex flex-col gap-4">
              <a
                href="/#home"
                className="text-foreground/80 hover:text-primary font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              
              {/* Mobile Services Accordion */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-foreground/80 hover:text-primary font-medium py-2 transition-colors"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="pl-4 mt-2 space-y-2 border-l-2 border-primary/20">
                    {serviceItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-2 text-foreground/70 hover:text-primary text-sm py-1.5 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <item.icon className="h-4 w-4 text-primary" />
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.slice(1).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="hero" size="lg" className="mt-4" asChild>
                <a href="tel:647-955-5995">
                  <Phone className="h-4 w-4" />
                  Free Consultation
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
    </>
  );
};

export default Header;
