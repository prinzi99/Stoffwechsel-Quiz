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
import Quiz from "./pages/Quiz";
import ThankYou from "./pages/ThankYou";
import ResultPage from "./pages/ResultPage";
import ResultPageA2 from "./pages/ResultPageA2";
import ResultPageB from "./pages/ResultPageB";
import ResultPageC from "./pages/ResultPageC";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import Buch from "./pages/Buch";
import BuchBonus from "./pages/BuchBonus";
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
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/danke" element={<ThankYou />} />
            <Route path="/dfgk34k" element={<ResultPage />} />
            <Route path="/dfgk34k-2" element={<ResultPageA2 />} />
            <Route path="/k93fda" element={<ResultPageB />} />
            <Route path="/x7q9p2" element={<ResultPageC />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/buch" element={<Buch />} />
            <Route path="/buch/bonus" element={<BuchBonus />} />
            <Route path="/buch/bonus/intern" element={<BuchBonusIntern />} />
            <Route path="/buch/bonus/intern/biohacking-tools" element={<BiohackingTools />} />
            <Route path="/buch/bonus/intern/downloads" element={<DownloadsChecklisten />} />
            <Route path="/buch/bonus/intern/kalorienrechner" element={<KalorienRechner />} />
            <Route path="/buch/bonus/intern/stoffwechsel-check" element={<StoffwechselCheck />} />
            <Route path="/tools" element={<Navigate to="/buch/bonus" replace />} />
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
