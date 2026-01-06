import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: "ABA Therapy",
    questions: [
      {
        question: "What is ABA therapy?",
        answer: "Applied Behavior Analysis (ABA) therapy is an evidence-based treatment that focuses on improving specific behaviors and skills. It's widely recognized as the most effective intervention for individuals with autism spectrum disorder, helping develop social skills, communication, learning, and adaptive behaviors."
      },
      {
        question: "How long does ABA therapy take to show results?",
        answer: "Every child is unique, but many families begin to see improvements within the first few months. Significant progress typically occurs over 1-2 years of consistent therapy. We track progress through regular assessments and adjust treatment plans to ensure optimal outcomes."
      },
      {
        question: "What ages do you work with?",
        answer: "We provide ABA therapy for children from early intervention (18 months) through adolescence. Early intervention often leads to the best outcomes, but ABA therapy can be beneficial at any age."
      },
      {
        question: "Where does therapy take place?",
        answer: "We offer therapy in multiple settings including your home, our clinic, school, and community environments throughout the Greater Toronto Area. We work with families to determine the best setting for their child's needs."
      }
    ]
  },
  {
    category: "Insurance & Funding",
    questions: [
      {
        question: "Is ABA therapy covered by insurance?",
        answer: "Many insurance plans cover ABA therapy. We work with most major insurance providers and can help you understand your coverage. We also assist with documentation needed for claims and prior authorizations."
      },
      {
        question: "What government funding is available in Ontario?",
        answer: "Ontario families may access funding through the Ontario Autism Program (OAP). We can help guide you through the application process and provide the necessary documentation to support your application."
      },
      {
        question: "Do you offer payment plans?",
        answer: "Yes, we understand that therapy is an investment in your child's future. We offer flexible payment options and can discuss arrangements that work for your family's budget."
      }
    ]
  },
  {
    category: "Assessment Process",
    questions: [
      {
        question: "What happens during the initial assessment?",
        answer: "Our comprehensive assessment includes parent interviews, direct observation, and standardized testing. We evaluate your child's current skills, identify areas for growth, and develop personalized goals. This typically takes 2-4 sessions."
      },
      {
        question: "How long before we can start therapy?",
        answer: "After your initial consultation, we typically complete the assessment within 1-2 weeks. Once the assessment is complete and goals are established, therapy can begin immediately based on therapist availability."
      },
      {
        question: "How are therapy goals determined?",
        answer: "Goals are developed collaboratively with your family based on assessment results, your child's needs, and your priorities. We focus on meaningful, functional skills that will improve your child's daily life and independence."
      },
      {
        question: "How often will my child receive therapy?",
        answer: "Therapy frequency is individualized based on your child's needs and goals. Many children receive 10-40 hours per week, but we work with each family to create a schedule that fits their lifestyle while maximizing progress."
      }
    ]
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-teal font-semibold text-sm uppercase tracking-wider">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about ABA therapy, insurance coverage, and our assessment process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal"></span>
                {category.category}
              </h3>
              <Accordion type="single" collapsible className="space-y-3">
                {category.questions.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`${categoryIndex}-${index}`}
                    className="border border-border rounded-lg px-6 bg-card shadow-soft hover:shadow-card transition-shadow"
                  >
                    <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-primary font-semibold hover:text-magenta transition-colors"
          >
            Contact us for more information
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
