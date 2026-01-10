import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Clock, BookOpen, Search, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

interface BlogPost {
  title: string;
  date: string;
  summary: string;
  url: string;
  category: string;
  readTime?: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Is Your Child on the Spectrum? Recognizing 10 Early Symptoms and Signs of Autism",
    date: "December 3, 2025",
    summary: "If you notice that your child is experiencing delays or is behaving differently from kids, as a parent you may be thinking to yourself, does my child have autism? It can be so hard to know what is 'normal'...",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/is-your-child-on-the-spectrum-recognizing-10-early-symptoms-and-signs-of-autism/",
    category: "Early Signs"
  },
  {
    title: "The Importance of Finding the Best Therapy For Autism",
    date: "November 17, 2025",
    summary: "The goal of autism therapy is to help the child develop academic skills, communication and social skills, increase independence, and learn daily living skills. There are many different interventions that have been developed to aid in this process.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/the-importance-of-finding-the-best-therapy-for-autism-is-it-aba-therapy-speech-therapy-a-combination-or-another-therapy-all-together/",
    category: "Therapy Options"
  },
  {
    title: "Speech Therapy – Alternative and Augmentative Communication (AAC): A Powerful Tool",
    date: "August 30, 2025",
    summary: "Autism Spectrum Disorder (ASD) affects a great number of children and often these children have difficulty communicating. In addition to having an applied behaviour analysis team, these children benefit from speech therapy.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/speech-therapy-aac/",
    category: "Speech Therapy"
  },
  {
    title: "How to Toilet Train your Autistic Child (Part 2)",
    date: "August 16, 2025",
    summary: "In this second post on how to toilet train your autistic child, you'll learn about: day vs night time training, urine vs bowel training and how to leverage reinforcement.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/how-to-toilet-train-your-autistic-child-part-2/",
    category: "Parent Tips"
  },
  {
    title: "Toilet Training Tips from ABA Therapy (Part 1)",
    date: "August 9, 2025",
    summary: "Many children struggle with toilet training. Autistic kids can have a difficult time making the transition from diapers to the toilet. ABA Therapy offers several tried and tested strategies for training children.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/toilet-training-tips-from-aba-therapy-part-1/",
    category: "ABA Therapy",
    readTime: "4 minutes"
  },
  {
    title: "Pairing in ABA Therapy",
    date: "August 7, 2025",
    summary: "To an uninformed observer, pairing in ABA therapy is a waste of time and resources. However, this could not be farther from the truth! Pairing is a vital component of all ABA therapy programs.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/pairing-in-aba-therapy/",
    category: "ABA Therapy"
  },
  {
    title: "ABA Therapy: Behaviours and Consequences",
    date: "July 31, 2025",
    summary: "One of the most important principles in ABA Therapy is the three-term contingency or antecedents, behaviours and consequences. Whenever we change behaviour, we have to look at the function of the behaviour.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/antecedents-behaviours-and-consequences-in-aba-therapy/",
    category: "ABA Therapy",
    readTime: "4 minutes"
  },
  {
    title: "Why is Occupational Therapy Used for Treating Autism?",
    date: "July 19, 2025",
    summary: "Many people wonder why occupational therapy is used for treating autism. Every day, you do meaningful activities. They bring you happiness, satisfaction and a sense of accomplishment.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/why-is-occupational-therapy-used-for-treating-autism/",
    category: "Occupational Therapy",
    readTime: "5 minutes"
  },
  {
    title: "Should My Toddler See a Speech Therapist?",
    date: "July 11, 2025",
    summary: "Many new parents aren't confident in their child's milestone mastery. They often wonder 'Should my toddler see a speech therapist?' In their first two years, children accomplish many things.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/should-my-toddler-see-a-speech-therapist/",
    category: "Speech Therapy",
    readTime: "4 minutes"
  },
  {
    title: "Can Parents Do ABA Therapy?",
    date: "July 5, 2025",
    summary: "Traditionally, trained professionals deliver Applied Behaviour Analysis (ABA). As a result of the COVID-19 pandemic and the skyrocketing costs of therapy, parents do ABA therapy more frequently.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/can-parents-do-aba-therapy/",
    category: "Parent Tips",
    readTime: "3 minutes"
  },
  {
    title: "How Does Virtual ABA Therapy Work?",
    date: "June 27, 2025",
    summary: "With the end of the pandemic in sight, a lot of people are wondering if virtual ABA therapy will remain a therapy option. This post will explain what virtual ABA therapy is, how it works and some things to consider.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/how-does-virtual-aba-therapy-work/",
    category: "ABA Therapy"
  },
  {
    title: "What Kind of Therapy Does a Child with Autism Need?",
    date: "June 21, 2025",
    summary: "Many parents of children recently diagnosed with autism ask themselves this question. This blog covers therapy options and guidelines for what to avoid when picking a therapy model and provider.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/what-kind-of-therapy-does-a-child-with-autism-need/",
    category: "Therapy Options"
  },
  {
    title: "What Makes ABA Effective?",
    date: "June 13, 2025",
    summary: "Many families ask 'What makes ABA effective?' when they're starting their autism therapy journey. This post describes a number of factors that make ABA an evidence-based approach.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/what-makes-aba-effective/",
    category: "ABA Therapy"
  },
  {
    title: "What Can An OT Do For My Autistic Child?",
    date: "May 30, 2025",
    summary: "Is your child autistic? Did their doctor recommend occupational therapy? Read on to find out what an OT can do for an autistic child.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/what-can-an-ot-do-for-my-autistic-child/",
    category: "Occupational Therapy"
  },
  {
    title: "What Does Masking Autism Mean?",
    date: "May 17, 2025",
    summary: "Camouflaging or masking in autism has far reaching effects on the person. In this post you'll discover what masking is, what effects it has, why it is damaging and how to avoid it.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/what-does-masking-autism-mean/",
    category: "Understanding Autism"
  },
  {
    title: "Early Intervention in Autism Treatment",
    date: "May 10, 2025",
    summary: "There is a lot of hype around early intervention in autism treatment. This deep dive into early intervention will help you understand the goal, how and where to access it, and why it's important.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/early-intervention-in-autism-treatment/",
    category: "Early Intervention"
  },
  {
    title: "Autism Severity Levels (DSM-5)",
    date: "May 3, 2025",
    summary: "When your child gets an Autism Spectrum Disorder diagnosis there is an avalanche of information. What do the autism severity levels mean?",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/autism-severity-levels-in-2021/",
    category: "Understanding Autism",
    readTime: "4 minutes"
  },
  {
    title: "Challenging Behaviours in Autism Treatment",
    date: "April 26, 2025",
    summary: "This blog discusses challenging behaviours: why language matters when describing behaviour, behaviour as communication, functions of behaviour, replacements and safety.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/challenging-behaviours-in-autism-treatment/",
    category: "Behaviour",
    readTime: "3 minutes"
  },
  {
    title: "Autoclitics: 4 Things to Know",
    date: "April 19, 2025",
    summary: "This is the last blog in our series about Skinner's verbal behaviour. If you haven't already, you should read the other posts about Manding, Echoics, Tacts and Intraverbals.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/autoclitics-4-things-to-know-in-2021/",
    category: "Verbal Behaviour"
  },
  {
    title: "Intraverbals: 4 Things To Know",
    date: "April 10, 2025",
    summary: "This week's post continues the series on Skinner's Verbal Behaviour. If you haven't already, you should read the other posts about Manding, Echoics and Tacts.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/intraverbals-4-things-to-know/",
    category: "Verbal Behaviour"
  },
  {
    title: "Tacting: 4 Things To Know",
    date: "April 1, 2025",
    summary: "This week's post continues the series on Skinner's Verbal Behaviour. This post will tackle Tacts and tacting.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/tacting-4-things-to-know/",
    category: "Verbal Behaviour"
  },
  {
    title: "Echoics: 4 Things to Know",
    date: "March 23, 2025",
    summary: "This post continues the series about Skinner's Verbal Behaviour. Last week we spoke about Mands and their value in improving a person's quality of life. This week we'll talk about Echoics!",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/echoics-4-things-to-know/",
    category: "Verbal Behaviour"
  },
  {
    title: "Manding: 4 Things to Know",
    date: "March 14, 2025",
    summary: "Last week I introduced Skinner's Verbal Behaviour. This week we're going to focus on the first verbal operant: mands. Another word for mand is request.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/manding-4-things-to-know/",
    category: "Verbal Behaviour"
  },
  {
    title: "What is Skinner's Verbal Behaviour?",
    date: "March 8, 2025",
    summary: "B.F. Skinner created Verbal Behaviour. Read this short introduction to learn more about what he developed and how it can help autistics.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/what-is-skinners-verbal-behaviour/",
    category: "Verbal Behaviour"
  },
  {
    title: "What is Stimming in Autism?",
    date: "February 28, 2025",
    summary: "One of the clinical indicators of autism is repeating the same actions over and over again (AKA: stims or stimming). Stimming in autism is movements or other behaviours that are either calming or alerting.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/what-is-stimming-in-autism/",
    category: "Understanding Autism"
  },
  {
    title: "Top 5 Picky Eating Strategies",
    date: "February 21, 2025",
    summary: "Autistic children are often picky eaters. Once you've figured out the reason your child is picky you can use these picky eating strategies.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/top-5-picky-eating-strategies/",
    category: "Parent Tips",
    readTime: "3 minutes"
  },
  {
    title: "What is Parent Coaching?",
    date: "February 14, 2025",
    summary: "Parent coaching is an excellent way to learn ABA strategies and techniques to become empowered to help your child yourself!",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/what-is-parent-coaching/",
    category: "Parent Tips"
  },
  {
    title: "Is There a Cure for Autism? Part 2",
    date: "February 7, 2025",
    summary: "In last week's post we discussed that some parents are searching for a cure for autism. This week we'll be looking at IF there should even be a cure.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/is-there-a-cure-for-autism-part-2/",
    category: "Understanding Autism"
  },
  {
    title: "Is There a Cure for Autism? Part 1",
    date: "February 1, 2025",
    summary: "'Is there a cure for Autism?' 'How long will my child have to be in therapy?' Each week I speak with parents, most of who have newly diagnosed children.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/is-there-a-cure-for-autism-part-1/",
    category: "Understanding Autism"
  },
  {
    title: "How and When To Tell a Child They're Autistic",
    date: "January 25, 2025",
    summary: "Many parents are unsure of when or how to tell a child they're autistic. It can be a very sensitive subject and without some thought it can be a tricky conversation to navigate.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/how-and-when-to-tell-a-child-theyre-autistic/",
    category: "Parent Tips"
  },
  {
    title: "Strategies Used in ABA: Top 5!",
    date: "January 18, 2025",
    summary: "There are MANY ABA strategies that are effective for teaching learners new skills. Here are my top 5 favourite!",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/strategies-used-in-aba-top-5/",
    category: "ABA Therapy"
  },
  {
    title: "Top 5 Myths about ABA",
    date: "January 11, 2025",
    summary: "There are many myths about ABA. Here are the top 5 myths debunked! Connect with Side by Side Therapy for more information about how we help!",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/top-5-myths-about-aba/",
    category: "ABA Therapy"
  },
  {
    title: "What is Reinforcement in ABA?",
    date: "January 4, 2025",
    summary: "When you're new to ABA it can be very daunting. There are many acronyms and words with unusual meanings. In this post we'll discuss reinforcement in ABA and how you can use it to increase behaviour.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/what-is-reinforcement-in-aba/",
    category: "ABA Therapy"
  },
  {
    title: "How to Choose an ABA Provider",
    date: "December 28, 2024",
    summary: "This post describes the elements you need to consider when you choose an ABA provider for your child. As soon as you get an Autism diagnosis the first place you turn is likely Google.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/how-to-choose-an-aba-provider/",
    category: "ABA Therapy"
  },
  {
    title: "How to Get Your Child to Cooperate!",
    date: "December 21, 2024",
    summary: "Robert Schramm has developed these 7 steps to get your child to cooperate. In applied behaviour analysis, cooperation or compliance is one of the first things we work to establish.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/how-to-get-your-child-to-cooperate/",
    category: "Parent Tips"
  },
  {
    title: "Ontario Autism Program Announcement",
    date: "December 14, 2024",
    summary: "On Friday December 11th, 2020, the province published an announcement about the rollout of the newest variation of the Ontario Autism Program.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/ontario-autism-program-announcement/",
    category: "Ontario Autism Program"
  },
  {
    title: "Red Flags for Autism: 8 Behaviours to Look For",
    date: "December 7, 2024",
    summary: "Each child develops at their own pace. However, there are general guidelines, called milestones, that are used in monitoring if your child is progressing. When a child doesn't meet their milestones, it can be a red flag for autism.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/red-flags-for-autism-8-behaviours-to-look-for/",
    category: "Early Signs"
  },
  {
    title: "How To Get An Autism Diagnosis",
    date: "November 30, 2024",
    summary: "Families with concerns about their child's development will wonder where to go. Read on to find out where you can go in Ontario for help.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/how-to-get-an-autism-diagnosis/",
    category: "Diagnosis",
    readTime: "3 minutes"
  },
  {
    title: "Why is ABA Therapy So Expensive?",
    date: "November 23, 2024",
    summary: "Why is ABA Therapy so expensive? Read on to find out more about some of the barriers in Ontario that make therapy unaffordable.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/why-is-aba-therapy-so-expensive/",
    category: "ABA Therapy",
    readTime: "3 minutes"
  },
  {
    title: "Autism in Ontario: What Funding is Available?",
    date: "November 16, 2024",
    summary: "Autism is expensive. Utilize these funds to help offset the extraordinary costs associated with raising your child.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/autism-in-ontario-what-funding-is-available/",
    category: "Ontario Autism Program"
  },
  {
    title: "How to Use Visual Schedules to Reduce Challenging Behaviour",
    date: "November 9, 2024",
    summary: "Children thrive on predictability and structure. Using visual schedules is an excellent way to support your child in many settings.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/how-to-use-visual-schedules-to-reduce-challenging-behaviour/",
    category: "Behaviour"
  },
  {
    title: "What is Social Communication?",
    date: "November 2, 2024",
    summary: "Autistic children have difficulty with social communication. This blog post explains what social communication is and how to address it.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/what-is-social-communication/",
    category: "Speech Therapy"
  },
  {
    title: "Early Autism Diagnosis: Key to Successful Intervention",
    date: "October 25, 2024",
    summary: "There are many ways that receiving an early autism diagnosis will benefit your child and family (having a treatment plan is just one!)",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/early-autism-diagnosis-key-to-successful-intervention/",
    category: "Diagnosis"
  },
  {
    title: "Things You Need To Know About Language Delays",
    date: "October 19, 2024",
    summary: "Many children with autism also have language delays. Read about how your S-LP can address these challenges and why it's important to!",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/things-you-need-to-know-about-language-delays/",
    category: "Speech Therapy",
    readTime: "3 minutes"
  },
  {
    title: "How To Choose A Speech-Language Pathologist",
    date: "October 12, 2024",
    summary: "It can be very difficult to know how to choose a Speech-Language Pathologist. Ask these questions before you sign up with a new clinician.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/how-to-choose-a-speech-language-pathologist/",
    category: "Speech Therapy",
    readTime: "3 minutes"
  },
  {
    title: "Autistic Teenagers and Adults Getting Jobs",
    date: "October 5, 2024",
    summary: "An autism diagnosis should not stop anyone from being a productive person and bringing their contribution to society. Both autistic teenagers and adults can get jobs.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/autistic-teenagers-and-adults-getting-jobs/",
    category: "Life Skills",
    readTime: "2 minutes"
  },
  {
    title: "Speech Therapy in Autism Treatment",
    date: "September 28, 2024",
    summary: "Learn how speech therapy in autism treatment can be key to helping your child communicate and learn. All areas of communication can be addressed.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/speech-therapy-in-autism-treatment/",
    category: "Speech Therapy",
    readTime: "2 minutes"
  },
  {
    title: "The 5 Benefits of Outdoor Play",
    date: "September 20, 2024",
    summary: "Most children love playing outside but few recognize the benefits of outdoor play. Learn why you should encourage your child to play outside!",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/the-benefits-of-outdoor-play/",
    category: "Parent Tips",
    readTime: "2 minutes"
  },
  {
    title: "How to Build a Good Relationship with Your Child's Teacher",
    date: "September 13, 2024",
    summary: "There are specific things you can do to help build the relationship you have with your child's teacher to set them up for success.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/how-to-build-a-good-relationship-with-your-childs-teacher/",
    category: "School",
    readTime: "3 minutes"
  },
  {
    title: "What is Sensory Processing Disorder?",
    date: "September 6, 2024",
    summary: "Many children and adults have Sensory Processing Disorder. Read on to learn what the signs are and who can help!",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/what-is-sensory-processing-disorder/",
    category: "Occupational Therapy"
  },
  {
    title: "How To Pick The Right Autism Therapy: 8 Questions",
    date: "August 23, 2024",
    summary: "Knowing which direction to move when looking for autism therapy can be tricky. Here are 8 questions to ask potential therapy providers.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/how-to-pick-the-right-autism-therapy-8-questions/",
    category: "Therapy Options",
    readTime: "4 minutes"
  },
  {
    title: "IBI and ABA: What's the Difference?",
    date: "August 16, 2024",
    summary: "Learn about the differences between Intensive Behavioural Intervention (IBI) and Applied Behaviour Analysis (ABA) therapy approaches.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/ibi-and-aba-whats-the-difference/",
    category: "ABA Therapy",
    readTime: "3 minutes"
  }
];

const categories = [...new Set(blogPosts.map(post => post.category))].sort();

// Get the 3 most recent articles (already sorted by date in the array)
const featuredPosts = blogPosts.slice(0, 3);

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <PageTransition>
      <Helmet>
        <title>Blog & Resources | Autism & ABA Therapy Articles | Side by Side Therapy</title>
        <meta 
          name="description" 
          content="Explore our collection of articles about autism spectrum disorder, ABA therapy, speech therapy, occupational therapy, and practical tips for parents." 
        />
        <meta name="keywords" content="autism blog, ABA therapy articles, autism resources, parent tips autism, autism spectrum disorder" />
        <link rel="canonical" href="https://sidebysidetherapy.ca/blog" />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-primary/20 text-primary">
                <BookOpen className="w-4 h-4 mr-2" />
                Resources & Articles
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Blog & Resources
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Expert insights, practical tips, and evidence-based information about autism spectrum disorder and therapy approaches.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-2 mb-8">
                <Sparkles className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Featured Articles</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {featuredPosts.map((post, index) => (
                  <Card 
                    key={index} 
                    className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-primary/20 bg-gradient-to-br from-card to-primary/5"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-primary/20 text-primary text-xs">
                          {post.category}
                        </Badge>
                        {post.readTime && (
                          <span className="flex items-center text-xs text-muted-foreground">
                            <Clock className="w-3 h-3 mr-1" />
                            {post.readTime}
                          </span>
                        )}
                      </div>
                      <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">
                        {post.summary}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/30">
                        <span className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3 mr-1" />
                          {post.date}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-primary hover:text-primary/80 group/btn"
                          asChild
                        >
                          <a href={post.url} target="_blank" rel="noopener noreferrer">
                            Read Article
                            <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
              >
                All Articles
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {filteredPosts.map((post, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 flex flex-col">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      {post.readTime && (
                        <span className="flex items-center text-xs text-muted-foreground">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.readTime}
                        </span>
                      )}
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">
                      {post.summary}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/30">
                      <span className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:text-primary/80"
                        asChild
                      >
                        <a href={post.url} target="_blank" rel="noopener noreferrer">
                          Read More
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No articles found matching your search.</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory(null);
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Have Questions About Your Child's Development?
              </h2>
              <p className="text-muted-foreground mb-6">
                Our team of experienced therapists is here to help. Contact us for a free consultation.
              </p>
              <Button size="lg" asChild>
                <a href="/#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </PageTransition>
  );
};

export default Blog;
