import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { serviceAreas } from "@/data/serviceAreas";
import { blogPosts } from "@/data/blogPosts";

const mainPages = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/team", label: "Our Team" },
  { to: "/oap", label: "Ontario Autism Program (OAP)" },
  { to: "/ssah", label: "Special Services at Home (SSAH)" },
  { to: "/prices", label: "Prices" },
  { to: "/faq", label: "FAQ" },
  { to: "/blog", label: "Blog" },
  { to: "/careers", label: "Careers" },
  { to: "/privacy-policy", label: "Privacy Policy" },
];

const services = [
  { to: "/services/aba-therapy", label: "ABA Therapy" },
  { to: "/services/speech-therapy", label: "Speech Therapy" },
  { to: "/services/occupational-therapy", label: "Occupational Therapy" },
  { to: "/services/respite-services", label: "Respite Services" },
  { to: "/services/social-skills-training", label: "Social Skills Training" },
  { to: "/services/bcba-mentorship", label: "BCBA Mentorship & Supervision" },
  { to: "/services/psycho-educational-assessments", label: "Psycho-Educational Assessments" },
];

const Sitemap = () => {
  const areasByRegion = serviceAreas.reduce<Record<string, typeof serviceAreas>>((acc, a) => {
    (acc[a.region] = acc[a.region] || []).push(a);
    return acc;
  }, {});

  return (
    <>
      <Helmet>
        <title>Sitemap | Side by Side Therapy</title>
        <meta
          name="description"
          content="Browse all pages on Side by Side Therapy: services, service areas across the GTA, blog articles, and resources."
        />
        <link rel="canonical" href="https://sidebysidetherapy.ca/sitemap" />
      </Helmet>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content" className="container mx-auto px-4 py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Sitemap</h1>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          A complete index of pages on Side by Side Therapy.
        </p>

        <section aria-labelledby="main-pages" className="mb-10">
          <h2 id="main-pages" className="text-2xl font-semibold mb-4 text-primary">Main Pages</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {mainPages.map((p) => (
              <li key={p.to}>
                <Link to={p.to} className="text-foreground hover:text-primary underline-offset-4 hover:underline min-h-[44px] inline-flex items-center">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="services" className="mb-10">
          <h2 id="services" className="text-2xl font-semibold mb-4 text-primary">Services</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {services.map((s) => (
              <li key={s.to}>
                <Link to={s.to} className="text-foreground hover:text-primary underline-offset-4 hover:underline min-h-[44px] inline-flex items-center">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="service-areas" className="mb-10">
          <h2 id="service-areas" className="text-2xl font-semibold mb-4 text-primary">Service Areas</h2>
          {Object.entries(areasByRegion).map(([region, areas]) => (
            <div key={region} className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-foreground">{region}</h3>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {areas.map((a) => (
                  <li key={a.slug}>
                    <Link
                      to={`/service-area/${a.slug}`}
                      className="text-foreground hover:text-primary underline-offset-4 hover:underline min-h-[44px] inline-flex items-center"
                    >
                      {a.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section aria-labelledby="blog-posts" className="mb-10">
          <h2 id="blog-posts" className="text-2xl font-semibold mb-4 text-primary">Blog Articles</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {blogPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-foreground hover:text-primary underline-offset-4 hover:underline min-h-[44px] inline-flex items-center"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Sitemap;
