import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Side by Side Therapy</title>
        <meta
          name="description"
          content="Privacy Policy for Side by Side Therapy. Learn how we collect, use, and protect your personal information when using our autism therapy services in the GTA."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sidebysidetherapy.ca/privacy-policy" />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background pt-24">
        <div className="container mx-auto px-4 py-12">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </AnimatedSection>

          <div className="prose prose-lg max-w-none">
            <AnimatedSection delay={100}>
              <section className="mb-10">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  Introduction
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Side by Side Therapy ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you visit our website or use our autism therapy services in the Greater Toronto Area.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <section className="mb-10">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  Information We Collect
                </h2>
                <h3 className="text-xl font-semibold text-foreground mb-3">Personal Information</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide when you:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>Fill out our contact form</li>
                  <li>Request information about our services</li>
                  <li>Schedule a consultation or assessment</li>
                  <li>Enroll in our therapy programs</li>
                  <li>Subscribe to our newsletter</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  This information may include your name, email address, phone number, mailing address, 
                  and information about your child's needs and therapy requirements.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <section className="mb-10">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide and improve our therapy services</li>
                  <li>Communicate with you about appointments, services, and updates</li>
                  <li>Process Ontario Autism Program (OAP) funding applications</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Send you relevant information about our services (with your consent)</li>
                  <li>Comply with legal and regulatory requirements</li>
                </ul>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={250}>
              <section className="mb-10">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  Health Information Protection
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  As a healthcare provider, we adhere to the Personal Health Information Protection Act (PHIPA) 
                  in Ontario. Any personal health information collected during the provision of therapy services 
                  is handled with the utmost confidentiality and in accordance with applicable healthcare privacy 
                  laws. We implement appropriate safeguards to protect the security, accuracy, and integrity of 
                  your personal health information.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <section className="mb-10">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  Information Sharing
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share 
                  your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations or court orders</li>
                  <li>With service providers who assist in our operations (under confidentiality agreements)</li>
                  <li>With government agencies for OAP funding purposes (with your consent)</li>
                  <li>To protect the rights, safety, or property of Side by Side Therapy or others</li>
                </ul>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={350}>
              <section className="mb-10">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  Cookies and Tracking Technologies
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may use cookies and similar tracking technologies to enhance your browsing 
                  experience and analyze website traffic. You can control cookie settings through your 
                  browser preferences. Disabling cookies may affect some functionality of our website.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <section className="mb-10">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction. However, 
                  no method of transmission over the Internet or electronic storage is 100% secure, and we 
                  cannot guarantee absolute security.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={450}>
              <section className="mb-10">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  Your Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Access your personal information that we hold</li>
                  <li>Request corrections to your personal information</li>
                  <li>Request deletion of your personal information (subject to legal retention requirements)</li>
                  <li>Withdraw consent for certain uses of your information</li>
                  <li>Receive a copy of your information in a portable format</li>
                </ul>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={500}>
              <section className="mb-10">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  Children's Privacy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are primarily intended for families with children. We collect information 
                  about children only with the consent of their parents or legal guardians and only as 
                  necessary to provide our therapy services. Parents and guardians can request access to, 
                  correction of, or deletion of their child's information at any time.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={550}>
              <section className="mb-10">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  Changes to This Privacy Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices 
                  or legal requirements. We will notify you of any material changes by posting the updated 
                  policy on our website with a new "Last Updated" date.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={600}>
              <section className="mb-10">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have questions about this Privacy Policy or wish to exercise your privacy rights, 
                  please contact us at:
                </p>
                <div className="bg-secondary/30 p-6 rounded-lg">
                  <p className="text-foreground font-semibold mb-2">Side by Side Therapy</p>
                  <p className="text-muted-foreground">
                    Email: <a href="mailto:info@sidebysidetherapy.ca" className="text-primary hover:underline">info@sidebysidetherapy.ca</a>
                  </p>
                  <p className="text-muted-foreground">
                    Phone: <a href="tel:647-955-5995" className="text-primary hover:underline">647-955-5995</a>
                  </p>
                  <p className="text-muted-foreground">Greater Toronto Area, Ontario, Canada</p>
                </div>
              </section>
            </AnimatedSection>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;