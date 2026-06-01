import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { CookieConsentProvider } from "./contexts/CookieConsentContext";
import ScrollToTop from "./components/ScrollToTop";
import CookieBanner from "./components/CookieBanner";
import CookieSettingsButton from "./components/CookieSettingsButton";
import { captureUtmParams } from "./hooks/useUtmParams";
import Index from "./pages/Index";
import LpOld from "./pages/LpOld";
import Quiz from "./pages/Quiz";
import QuizP from "./pages/QuizP";
import ThankYou from "./pages/ThankYou";
import ResultPage from "./pages/ResultPage";
import ResultPageA2 from "./pages/ResultPageA2";
import ResultPageA3 from "./pages/ResultPageA3";
import ResultPageA4 from "./pages/ResultPageA4";
import ResultPageB from "./pages/ResultPageB";
import ResultPageB2 from "./pages/ResultPageB2";
import ResultPageB3 from "./pages/ResultPageB3";
import ResultPageB4 from "./pages/ResultPageB4";
import ResultPageC from "./pages/ResultPageC";
import ResultPageC2 from "./pages/ResultPageC2";
import ResultPageC3 from "./pages/ResultPageC3";
import ResultPageC4 from "./pages/ResultPageC4";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import Buch from "./pages/Buch";
import BuchAnbot from "./pages/BuchAnbot";
import BuchAnbot2 from "./pages/BuchAnbot2";
import BuchAnbotTest from "./pages/BuchAnbotTest";
import BuchAnbotTestFs26 from "./pages/BuchAnbotTestFs26";
import BuchAnbotProfA from "./pages/BuchAnbotProfA";
import BuchAnbotProfB from "./pages/BuchAnbotProfB";
import BuchAnbotProfC from "./pages/BuchAnbotProfC";
import BuchAnbotOld from "./pages/BuchAnbotOld";
import BuchAnbot2Old from "./pages/BuchAnbot2Old";
import BuchBonus from "./pages/BuchBonus";
import Analyse from "./pages/Analyse";
import BuchBonusIntern from "./pages/BuchBonusIntern";
import BiohackingTools from "./pages/BiohackingTools";
import DownloadsChecklisten from "./pages/DownloadsChecklisten";
import KalorienRechner from "./pages/KalorienRechner";
import StoffwechselCheck from "./pages/StoffwechselCheck";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    captureUtmParams();
  }, []);

  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CookieConsentProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/lp-old" element={<LpOld />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/quiz-p" element={<QuizP />} />
            <Route path="/danke" element={<ThankYou />} />
            <Route path="/dfgk34k" element={<ResultPage />} />
            <Route path="/dfgk34k-2" element={<ResultPageA2 />} />
            <Route path="/dfgk34k-3" element={<ResultPageA3 />} />
            <Route path="/dfgk34k-4" element={<ResultPageA4 />} />
            <Route path="/k93fda" element={<ResultPageB />} />
            <Route path="/k93fda-2" element={<ResultPageB2 />} />
           <Route path="/k93fda-3" element={<ResultPageB3 />} />
            <Route path="/k93fda-4" element={<ResultPageB4 />} />
            <Route path="/x7q9p2" element={<ResultPageC />} />
            <Route path="/x7q9p2-2" element={<ResultPageC2 />} />
            <Route path="/x7q9p2-3" element={<ResultPageC3 />} />
            <Route path="/x7q9p2-4" element={<ResultPageC4 />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/buch" element={<Buch />} />
            <Route path="/buch/anbot00z00z01-old" element={<BuchAnbot2Old />} />
            <Route path="/buch/angebot000z00-old" element={<BuchAnbotOld />} />
            <Route path="/buch/anbot3g4a3e" element={<BuchAnbotTest />} />
            <Route path="/buch/anbot3g4a3e_fs26" element={<BuchAnbotTestFs26 />} />
            <Route path="/buch/anbot-prof-a" element={<BuchAnbotProfA />} />
            <Route path="/buch/anbot-prof-b" element={<BuchAnbotProfB />} />
            <Route path="/buch/anbot-prof-c" element={<BuchAnbotProfC />} />
            
            
            <Route path="/buch/bonus" element={<BuchBonus />} />
            <Route path="/buch/bonus/intern" element={<BuchBonusIntern />} />
            <Route path="/buch/bonus/intern/biohacking-tools" element={<BiohackingTools />} />
            <Route path="/buch/bonus/intern/downloads" element={<DownloadsChecklisten />} />
            <Route path="/buch/bonus/intern/kalorienrechner" element={<KalorienRechner />} />
            <Route path="/buch/bonus/intern/stoffwechsel-check" element={<StoffwechselCheck />} />
            <Route path="/tools" element={<Navigate to="/buch/bonus" replace />} />
            <Route path="/analyse" element={<Analyse />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <CookieBanner />
        <CookieSettingsButton />
      </CookieConsentProvider>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
