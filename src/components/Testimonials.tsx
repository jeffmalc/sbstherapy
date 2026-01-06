import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Side by Side has been a lifeline for our family. The therapists truly care about our son's progress and work with us every step of the way.",
    author: "Sarah M.",
    role: "Parent",
    rating: 5,
  },
  {
    quote: "The ABA therapy has made such a difference. Our daughter's communication skills have improved dramatically in just a few months.",
    author: "Michael T.",
    role: "Parent",
    rating: 5,
  },
  {
    quote: "Professional, compassionate, and incredibly knowledgeable. I couldn't recommend Side by Side more highly to other families.",
    author: "Jennifer L.",
    role: "Parent",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-soft" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            What <span className="text-gradient">Families Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from the families we've had the privilege of supporting.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              <Quote className="h-10 w-10 text-primary/20 mb-4" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                ))}
              </div>
              
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.author[0]}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
