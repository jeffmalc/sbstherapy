import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import BackToTop from "./components/BackToTop";
import PageTransition from "./components/PageTransition";
import Index from "./pages/Index";
import FAQPage from "./pages/FAQPage";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import About from "./pages/About";
import OAP from "./pages/OAP";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import ABATherapy from "./pages/services/ABATherapy";
import SpeechTherapy from "./pages/services/SpeechTherapy";
import OccupationalTherapy from "./pages/services/OccupationalTherapy";
import TherapeuticRecreation from "./pages/services/TherapeuticRecreation";
import RespiteServices from "./pages/services/RespiteServices";
import SocialSkillsTraining from "./pages/services/SocialSkillsTraining";
import BCBAMentorship from "./pages/services/BCBAMentorship";
import PsychoEducationalAssessments from "./pages/services/PsychoEducationalAssessments";
import ServiceAreaPage from "./pages/ServiceAreaPage";
import Prices from "./pages/Prices";

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
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/team" element={<Team />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/services/aba-therapy" element={<ABATherapy />} />
              <Route path="/services/speech-therapy" element={<SpeechTherapy />} />
              <Route path="/services/occupational-therapy" element={<OccupationalTherapy />} />
              <Route path="/services/therapeutic-recreation" element={<TherapeuticRecreation />} />
              <Route path="/services/respite-services" element={<RespiteServices />} />
              <Route path="/services/social-skills-training" element={<SocialSkillsTraining />} />
              <Route path="/services/bcba-mentorship" element={<BCBAMentorship />} />
              <Route path="/services/psycho-educational-assessments" element={<PsychoEducationalAssessments />} />
              <Route path="/service-area/:slug" element={<ServiceAreaPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
          <BackToTop />
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
