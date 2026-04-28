import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import BackToTop from "./components/BackToTop";
import GoogleAnalytics from "./components/GoogleAnalytics";
import PageTransition from "./components/PageTransition";
import Index from "./pages/Index";
import FAQPage from "./pages/FAQPage";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import BlogPostPage from "./pages/BlogPost";
import About from "./pages/About";
import OAP from "./pages/OAP";
import SSAH from "./pages/SSAH";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import ABATherapy from "./pages/services/ABATherapy";
import SpeechTherapy from "./pages/services/SpeechTherapy";
import OccupationalTherapy from "./pages/services/OccupationalTherapy";

import RespiteServices from "./pages/services/RespiteServices";
import SocialSkillsTraining from "./pages/services/SocialSkillsTraining";
import BCBAMentorship from "./pages/services/BCBAMentorship";
import PsychoEducationalAssessments from "./pages/services/PsychoEducationalAssessments";
import ServiceAreaPage from "./pages/ServiceAreaPage";
import Prices from "./pages/Prices";
import Careers from "./pages/Careers";
import Sitemap from "./pages/Sitemap";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <PageTransition>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/prices" element={<Prices />} />
              <Route path="/about" element={<About />} />
              <Route path="/oap" element={<OAP />} />
              <Route path="/ssah" element={<SSAH />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/team" element={<Team />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/services/aba-therapy" element={<ABATherapy />} />
              <Route path="/services/speech-therapy" element={<SpeechTherapy />} />
              <Route path="/services/occupational-therapy" element={<OccupationalTherapy />} />
              <Route path="/services/therapeutic-recreation" element={<Navigate to="/" replace />} />
              <Route path="/services/respite-services" element={<RespiteServices />} />
              <Route path="/services/social-skills-training" element={<SocialSkillsTraining />} />
              <Route path="/services/bcba-mentorship" element={<BCBAMentorship />} />
              <Route path="/services/psycho-educational-assessments" element={<PsychoEducationalAssessments />} />
              <Route path="/service-area/:slug" element={<ServiceAreaPage />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/sitemap" element={<Sitemap />} />
              
              {/* Legacy WordPress redirects */}
              <Route path="/about-us" element={<Navigate to="/about" replace />} />
              <Route path="/applied-behaviour-analysis" element={<Navigate to="/services/aba-therapy" replace />} />
              <Route path="/aba-therapy" element={<Navigate to="/services/aba-therapy" replace />} />
              <Route path="/aba" element={<Navigate to="/services/aba-therapy" replace />} />
              <Route path="/speech-therapy" element={<Navigate to="/services/speech-therapy" replace />} />
              <Route path="/speech-therapy-in-toronto" element={<Navigate to="/services/speech-therapy" replace />} />
              <Route path="/occupational-therapy" element={<Navigate to="/services/occupational-therapy" replace />} />
              <Route path="/occupational-therapy-in-toronto" element={<Navigate to="/services/occupational-therapy" replace />} />
              <Route path="/psycho-educational-assessment-in-toronto" element={<Navigate to="/services/psycho-educational-assessments" replace />} />
              <Route path="/therapeutic-recreation-in-toronto" element={<Navigate to="/" replace />} />
              <Route path="/respite-in-toronto" element={<Navigate to="/services/respite-services" replace />} />
              <Route path="/respite" element={<Navigate to="/services/respite-services" replace />} />
              <Route path="/social-skills-training-in-toronto" element={<Navigate to="/services/social-skills-training" replace />} />
              <Route path="/social-skills" element={<Navigate to="/services/social-skills-training" replace />} />
              <Route path="/bcba-mentorship-and-supervision-in-toronto" element={<Navigate to="/services/bcba-mentorship" replace />} />
              <Route path="/contact" element={<Navigate to="/#contact" replace />} />
              <Route path="/contact-us" element={<Navigate to="/#contact" replace />} />
              <Route path="/our-team" element={<Navigate to="/team" replace />} />
              <Route path="/meet-the-team" element={<Navigate to="/team" replace />} />
              <Route path="/faqs" element={<Navigate to="/faq" replace />} />
              <Route path="/frequently-asked-questions" element={<Navigate to="/faq" replace />} />
              <Route path="/oap-funding" element={<Navigate to="/oap" replace />} />
              <Route path="/ontario-autism-program" element={<Navigate to="/oap" replace />} />
              <Route path="/special-services-at-home" element={<Navigate to="/ssah" replace />} />
              <Route path="/ssah-funding" element={<Navigate to="/ssah" replace />} />
              <Route path="/pricing" element={<Navigate to="/prices" replace />} />
              <Route path="/rates" element={<Navigate to="/prices" replace />} />
              <Route path="/careers-side-by-side-therapy-in-toronto" element={<Navigate to="/careers" replace />} />
              <Route path="/aba-therapy-careers-at-side-by-side-therapy" element={<Navigate to="/careers" replace />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
          <GoogleAnalytics />
          <BackToTop />
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
