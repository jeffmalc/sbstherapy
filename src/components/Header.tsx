import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown, Brain, MessageCircle, HandHeart, Gamepad2, Heart, Users, GraduationCap, BookOpen, ChevronRight, ExternalLink, DollarSign, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import OptimizedImage from "@/components/OptimizedImage";
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

const fundingItems = [
  { name: "Ontario Autism Program (OAP)", href: "/oap", icon: Award, external: false },
  { name: "Special Services at Home", href: "https://www.ontario.ca/page/special-services-home#section-0", icon: ExternalLink, external: true },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isFundingOpen, setIsFundingOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Service Areas", href: "/#service-area" },
    { name: "About", href: "/about" },
    { name: "Prices", href: "/prices" },
    { name: "Funding", href: "/oap", isDropdown: true },
    { name: "Our Team", href: "/team" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/#contact" },
  ];

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleMenuToggle = () => {
    if (isMenuOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsAnimating(false);
        setIsServicesOpen(false);
        setIsFundingOpen(false);
      }, 300);
    } else {
      setIsMenuOpen(true);
    }
  };

  const handleLinkClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsAnimating(false);
      setIsServicesOpen(false);
    }, 300);
  };

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a href="#home" className="skip-link">
        Skip to main content
      </a>
      
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-card/98 backdrop-blur-lg shadow-md py-0' : 'bg-card/95 backdrop-blur-md shadow-soft py-1'}`} role="banner">
        <div className="container mx-auto px-4">
          <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
            {/* Logo */}
            <a href="/" className="flex-shrink-0 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg" aria-label="Side by Side Therapy - Home">
              <OptimizedImage src={logo} alt="Side by Side Therapy" className="h-10 md:h-14 w-auto max-w-[140px] md:max-w-[180px] object-contain" width={180} height={56} loading="eager" />
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

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
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
              className={`lg:hidden p-2 text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xl min-w-[44px] min-h-[44px] flex items-center justify-center transition-all duration-300 ${isMenuOpen ? 'bg-primary text-primary-foreground rotate-90' : 'bg-muted/50 hover:bg-muted'}`}
              onClick={handleMenuToggle}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="relative w-6 h-6">
                <X className={`h-6 w-6 absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`} />
                <Menu className={`h-6 w-6 absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div 
          className={`fixed inset-0 z-40 lg:hidden ${isAnimating ? 'animate-fade-out' : 'animate-fade-in'}`}
          style={{ animationDuration: '300ms' }}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
            onClick={handleMenuToggle}
          />
          
          {/* Menu Panel */}
          <nav 
            id="mobile-menu"
            className={`absolute top-20 left-4 right-4 max-h-[calc(100vh-6rem)] overflow-y-auto bg-card rounded-2xl shadow-elevated border border-border/50 ${isAnimating ? 'mobile-menu-exit' : 'mobile-menu-enter'}`}
            role="navigation" 
            aria-label="Mobile navigation"
            style={{
              boxShadow: '0 25px 50px -12px hsl(289 35% 36% / 0.25), 0 0 0 1px hsl(289 35% 36% / 0.05)',
            }}
          >
            {/* Decorative gradient bar */}
            <div className="h-1 w-full rounded-t-2xl gradient-hero" />
            
            <div className="p-5">
              {/* Main Links */}
              <div className="space-y-1">
                <a
                  href="/#home"
                  className="mobile-menu-item group flex items-center justify-between p-4 rounded-xl text-foreground hover:bg-muted/50 font-medium transition-all duration-200 hover:translate-x-1"
                  onClick={handleLinkClick}
                  style={{ animationDelay: '50ms' }}
                >
                  <span>Home</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                
                {/* Services Accordion */}
                <div className="mobile-menu-item" style={{ animationDelay: '100ms' }}>
                  <button
                    className="group flex items-center justify-between w-full p-4 rounded-xl text-foreground hover:bg-muted/50 font-medium transition-all duration-200"
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                  >
                    <span className="flex items-center gap-3">
                      Services
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                        {serviceItems.length}
                      </span>
                    </span>
                    <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${isServicesOpen ? 'rotate-180 text-primary' : ''}`} />
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ease-out ${isServicesOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="ml-4 mt-1 mb-2 pl-4 border-l-2 border-primary/30 space-y-1">
                      {serviceItems.map((item, index) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="group flex items-center gap-3 p-3 rounded-lg text-foreground/80 hover:text-foreground hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent transition-all duration-200 hover:translate-x-1"
                          onClick={handleLinkClick}
                          style={{ 
                            animationDelay: `${150 + index * 30}ms`,
                            opacity: isServicesOpen ? 1 : 0,
                            transform: isServicesOpen ? 'translateX(0)' : 'translateX(-10px)',
                            transition: `all 200ms ease-out ${index * 30}ms`
                          }}
                        >
                          <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                            <item.icon className="h-4 w-4" />
                          </div>
                          <span className="text-sm font-medium">{item.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Other nav links */}
                {navLinks.slice(1).map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="mobile-menu-item group flex items-center justify-between p-4 rounded-xl text-foreground hover:bg-muted/50 font-medium transition-all duration-200 hover:translate-x-1"
                    onClick={handleLinkClick}
                    style={{ animationDelay: `${150 + index * 50}ms` }}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
              
              {/* Divider */}
              <div className="my-4 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              
              {/* CTA Section */}
              <div className="mobile-menu-item space-y-3" style={{ animationDelay: '400ms' }}>
                <a 
                  href="tel:647-955-5995" 
                  className="flex items-center justify-center gap-2 p-4 rounded-xl bg-muted/50 text-primary font-semibold hover:bg-muted transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  647-955-5995
                </a>
                
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full h-14 text-base font-semibold shadow-lg hover:shadow-xl transition-shadow" 
                  asChild
                >
                  <a href="tel:647-955-5995" onClick={handleLinkClick}>
                    <Phone className="h-5 w-5 mr-2" />
                    Free Consultation
                  </a>
                </Button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
