import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, CheckCircle, Phone, ArrowLeft, MessageSquare, Heart, Target, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SocialSkillsTraining = () => {
  const skills = [
    "Initiating and maintaining conversations",
    "Reading social cues and body language",
    "Taking turns and sharing",
    "Making and keeping friends",
    "Understanding emotions in self and others",
    "Handling conflicts and problem-solving",
    "Perspective-taking and empathy",
    "Understanding unwritten social rules",
    "Appropriate behavior in different settings",
  ];

  const formats = [
    {
      title: "Group Sessions",
      description: "Small groups of 4-6 peers provide natural opportunities to practice social skills with structured support and feedback.",
      icon: Users,
    },
    {
      title: "Dyad Sessions",
      description: "One-on-one pairing with another child allows for intensive practice in a less overwhelming setting.",
      icon: MessageSquare,
    },
    {
      title: "Individual Coaching",
      description: "Direct instruction and practice with a therapist to build foundational skills before group participation.",
      icon: Target,
    },
    {
      title: "Naturalistic Practice",
      description: "Community outings and real-world situations where children practice skills in natural environments.",
      icon: Sparkles,
    },
  ];

  const curriculum = [
    {
      title: "Conversation Skills",
      topics: ["Greetings and introductions", "Asking and answering questions", "Topic maintenance", "Active listening", "Ending conversations appropriately"],
    },
    {
      title: "Friendship Skills",
      topics: ["Identifying shared interests", "Inviting others to play", "Joining activities in progress", "Being a good friend", "Handling rejection"],
    },
    {
      title: "Emotional Regulation",
      topics: ["Identifying emotions", "Coping strategies", "Managing frustration", "Handling disappointment", "Self-calming techniques"],
    },
    {
      title: "Social Awareness",
      topics: ["Reading body language", "Understanding tone of voice", "Personal space", "Perspective-taking", "Social context cues"],
    },
  ];

  const faqs = [
    {
      question: "Why do children with autism struggle with social skills?",
      answer: "Social interaction involves many complex, unwritten rules that neurotypical children often pick up naturally. Children with autism may struggle to read social cues, understand others' perspectives, or know what to say in social situations. These challenges are not due to a lack of desire for social connection—many children with autism want friends but don't know how to make them."
    },
    {
      question: "What are social skills groups?",
      answer: "Social skills groups are structured therapy sessions where a small group of children (typically 4-6) practice social skills together with guidance from trained therapists. Groups provide natural opportunities to practice skills like conversation, cooperation, and conflict resolution with peers while receiving coaching and feedback."
    },
    {
      question: "How is your social skills program different from typical groups?",
      answer: "Our social skills program is designed specifically for children with autism by professionals who understand their unique needs. We use evidence-based curricula, provide individualized goals within the group context, offer a high staff-to-child ratio, and create a structured, predictable environment that reduces anxiety. We also work with families to ensure skills generalize outside of sessions."
    },
    {
      question: "What age groups do you serve?",
      answer: "We offer social skills programming for children and teens across different age groups. Groups are formed based on age and developmental level to ensure appropriate peer matching. We typically have groups for early elementary, upper elementary, middle school, and high school ages."
    },
    {
      question: "My child doesn't want to make friends. Should they still participate?",
      answer: "Some children with autism may express that they prefer to be alone, but this may be because social interactions have been confusing or unsuccessful in the past. Many children who initially resist social skills training come to enjoy it once they learn strategies that make social interaction more predictable and successful. We start where your child is and never force interaction."
    },
    {
      question: "How are children matched for group sessions?",
      answer: "We carefully match children for group sessions based on age, developmental level, interests, and specific social goals. Good peer matching is essential for effective groups. Before starting groups, children complete an assessment and may participate in individual or dyad sessions to build foundational skills."
    },
    {
      question: "How do you teach social skills?",
      answer: "We use a variety of evidence-based techniques including: direct instruction and discussion, modeling and role-playing, video modeling, social stories and visual supports, structured games and activities, in-vivo practice with coaching, and positive reinforcement. Skills are taught explicitly, practiced repeatedly, and reinforced across settings."
    },
    {
      question: "Will my child practice with other children who have autism?",
      answer: "Yes, our social skills groups include peers who are also working on social skills. This creates a supportive, understanding environment where children can practice without judgment. We also work on helping children interact with neurotypical peers in their daily lives through community-based practice and coaching."
    },
    {
      question: "How long does social skills training take?",
      answer: "Social skill development is an ongoing process. Most children benefit from at least one full program cycle (typically 8-12 weeks), and many continue for multiple cycles to address different skill areas. The goal is for children to eventually use their skills independently in natural settings. We regularly assess progress and adjust programming accordingly."
    },
    {
      question: "How can I support my child's social development at home?",
      answer: "Parent involvement is crucial! We provide coaching for parents on: arranging playdates and social opportunities, prompting and reinforcing skills at home, using visual supports and social stories, debriefing social situations with your child, and modeling social skills. We also communicate regularly about what your child is learning so you can reinforce skills at home."
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Social Skills Training",
    "description": "Social skills training for children with autism in the Greater Toronto Area. Group and individual sessions to help children build meaningful relationships and navigate social situations.",
    "provider": {
      "@type": "Organization",
      "name": "Side by Side Therapy",
      "telephone": "+1-647-955-5995",
      "url": "https://sidebysidetherapy.ca"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sidebysidetherapy.ca" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://sidebysidetherapy.ca/#services" },
      { "@type": "ListItem", "position": 3, "name": "Social Skills Training", "item": "https://sidebysidetherapy.ca/services/social-skills-training" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Social Skills Training for Autism Toronto | Groups & Individual | Side by Side</title>
        <meta name="description" content="Social skills groups and training for children with autism in Toronto & GTA. Build friendship skills, conversation abilities, and social awareness. Free consultation: 647-955-5995" />
        <meta name="keywords" content="social skills training Toronto, autism social skills groups, friendship skills, social skills therapy, peer interaction autism, social communication GTA" />
        <link rel="canonical" href="https://sidebysidetherapy.ca/services/social-skills-training" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-sky-100 to-blue-50">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-sky-500/20 flex items-center justify-center">
                    <Users className="h-8 w-8 text-sky-600" />
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold text-foreground">
                    Social Skills Training
                  </h1>
                </div>
                
                <p className="text-xl text-muted-foreground mb-6">
                  Helping children with autism build the social skills they need to make friends, navigate social situations, and connect with others. Our evidence-based programs make learning social skills fun and effective.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <a href="tel:647-955-5995">
                      <Phone className="h-4 w-4 mr-2" />
                      Free Consultation
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="#faq">View FAQ</a>
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {formats.map((format, index) => (
                  <div key={index} className="bg-card p-6 rounded-2xl shadow-soft border">
                    <format.icon className="h-8 w-8 text-sky-500 mb-3" />
                    <h3 className="font-bold text-lg mb-2">{format.title}</h3>
                    <p className="text-sm text-muted-foreground">{format.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Building Social Connections</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  Social skills are essential for success in life—from making friends on the playground to collaborating with colleagues as adults. For children with autism, the unwritten rules of social interaction that others pick up naturally can be confusing and difficult to understand. The good news is that social skills can be taught and learned.
                </p>
                <p className="mb-4">
                  Our social skills program is designed specifically for children with autism, recognizing their unique learning styles and needs. We break down complex social interactions into learnable components, teach skills explicitly, and provide ample opportunities for practice in a supportive environment. Our evidence-based curriculum addresses everything from basic conversation skills to complex friendship dynamics.
                </p>
                <p>
                  Most importantly, we make learning social skills enjoyable. Through games, role-playing, and fun activities, children practice skills without even realizing they're in therapy. We work closely with families to ensure that skills learned in our sessions generalize to school, home, and community settings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills We Teach */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Skills We Teach</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our comprehensive curriculum covers all aspects of social interaction.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-xl shadow-sm border">
                  <CheckCircle className="h-5 w-5 text-sky-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Curriculum</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our structured curriculum covers key areas of social development.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {curriculum.map((module, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-soft border">
                  <h3 className="font-bold text-xl mb-4 text-sky-600">{module.title}</h3>
                  <ul className="space-y-2">
                    {module.topics.map((topic, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground">
                        <Heart className="h-4 w-4 text-sky-400" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about our social skills training program.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-xl border px-6">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-sky-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Help Your Child Build Friendships</h2>
            <p className="mb-8 max-w-2xl mx-auto opacity-90">
              Contact us today to learn how our social skills program can help your child connect with others and build meaningful relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <a href="tel:647-955-5995">
                  <Phone className="h-4 w-4 mr-2" />
                  Call 647-955-5995
                </a>
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-sky-600" asChild>
                <a href="mailto:info@sidebysidetherapy.ca">Email Us</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SocialSkillsTraining;