import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, BookOpen, Search, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

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
                          <Link to={`/blog/${post.slug}`}>
                            Read Article
                            <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
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
                        <Link to={`/blog/${post.slug}`}>
                          Read More
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Link>
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
