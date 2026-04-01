import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, User, Share2, ArrowRight } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { getBlogPostBySlug, getRelatedPosts, type BlogPostSection } from "@/data/blogPosts";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.summary,
    "datePublished": new Date(post.date).toISOString(),
    "author": {
      "@type": "Person",
      "name": post.author || "Side by Side Therapy"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Side by Side Therapy",
      "url": "https://sidebysidetherapy.ca",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sidebysidetherapy.ca/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://sidebysidetherapy.ca/blog/${post.slug}`
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sidebysidetherapy.ca" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://sidebysidetherapy.ca/blog" },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://sidebysidetherapy.ca/blog/${post.slug}` }
    ]
  };

  const renderSection = (section: BlogPostSection, index: number) => {
    switch (section.type) {
      case "heading":
        return (
          <h2 key={index} className="text-xl md:text-2xl font-bold text-foreground mt-8 mb-4">
            {section.content}
          </h2>
        );
      case "paragraph":
        return (
          <p key={index} className="text-muted-foreground leading-relaxed mb-4">
            {section.content}
          </p>
        );
      case "list":
        return (
          <div key={index} className="mb-4">
            {section.content && (
              <p className="text-muted-foreground leading-relaxed mb-2 font-medium">{section.content}</p>
            )}
            <ul className="list-disc pl-6 space-y-2">
              {section.items?.map((item, i) => (
                <li key={i} className="text-muted-foreground">{item}</li>
              ))}
            </ul>
          </div>
        );
      case "video":
        return (
          <div key={index} className="my-8 aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              src={`https://www.youtube.com/embed/${section.videoId}`}
              title="Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        );
      default:
        return null;
    }
  };

  const handleShare = async () => {
    const shareUrl = `https://sidebysidetherapy.ca/blog/${post.slug}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: post.title, text: post.summary, url: shareUrl });
      } catch { /* user cancelled */ }
    } else {
      navigator.clipboard.writeText(shareUrl);
    }
  };

  return (
    <PageTransition>
      <Helmet>
        <title>{post.title} | Side by Side Therapy Blog</title>
        <meta name="description" content={post.summary} />
        <meta name="keywords" content={`${post.category}, autism, ABA therapy, autism therapy, ${post.title.toLowerCase().split(' ').slice(0, 3).join(', ')}`} />
        <link rel="canonical" href={`https://sidebysidetherapy.ca/blog/${post.slug}`} />
        <meta property="og:title" content={`${post.title} | Side by Side Therapy`} />
        <meta property="og:description" content={post.summary} />
        <meta property="og:url" content={`https://sidebysidetherapy.ca/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:site_name" content="Side by Side Therapy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.summary} />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Toronto" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background pt-20">
        {/* Article Header */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>

              <Badge className="mb-4 bg-primary/20 text-primary">{post.category}</Badge>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                {post.author && (
                  <span className="flex items-center gap-1.5 text-sm">
                    <User className="h-4 w-4" />
                    {post.author}
                  </span>
                )}
                <span className="flex items-center gap-1.5 text-sm">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </span>
                {post.readTime && (
                  <span className="flex items-center gap-1.5 text-sm">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                )}
                <Button variant="ghost" size="sm" onClick={handleShare} className="ml-auto">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* YouTube Video (if available) */}
        {post.youtubeVideoId && (
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg border">
                  <iframe
                    src={`https://www.youtube.com/embed/${post.youtubeVideoId}`}
                    title={post.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Article Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {post.content ? (
                <article className="prose prose-lg max-w-none">
                  {post.content.map((section, index) => renderSection(section, index))}
                </article>
              ) : (
                <article className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                    {post.summary}
                  </p>
                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-8">
                    <p className="text-foreground font-medium mb-3">
                      Read the full article on our website for more detailed information on this topic.
                    </p>
                    <Button asChild>
                      <a href={post.url} target="_blank" rel="noopener noreferrer">
                        Read Full Article
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </article>
              )}

              {/* CTA within article */}
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mt-12 text-center">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Need Help With Your Child's Development?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our team of experienced therapists is here to help. Contact us for a free consultation.
                </p>
                <Button variant="hero" size="lg" asChild>
                  <a href="tel:647-955-5995">Call 647-955-5995</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold text-foreground mb-8">Related Articles</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedPosts.map((related) => (
                    <Card key={related.slug} className="group hover:shadow-lg transition-all duration-300">
                      <CardHeader className="pb-3">
                        <Badge variant="secondary" className="w-fit text-xs mb-2">
                          {related.category}
                        </Badge>
                        <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
                          {related.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                          {related.summary}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3 mr-1" />
                            {related.date}
                          </span>
                          <Button variant="ghost" size="sm" className="text-primary" asChild>
                            <Link to={`/blog/${related.slug}`}>
                              Read More
                              <ArrowRight className="w-3 h-3 ml-1" />
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
        )}
      </main>

      <Footer />
    </PageTransition>
  );
};

export default BlogPostPage;
