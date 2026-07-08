import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { CookieConsentProvider } from "./contexts/CookieConsentContext";
import ScrollToTop from "./components/ScrollToTop";
import CookieBanner from "./components/CookieBanner";
import CookieSettingsButton from "./components/CookieSettingsButton";
import { captureUtmParams } from "./hooks/useUtmParams";

// QuizP ist die Landing-Route ("/") — eager laden, damit kein zusätzlicher Roundtrip beim First Paint entsteht
import QuizP from "./pages/QuizP";

// Alle anderen Routen lazy laden → kleinerer Initial-Bundle
const Index = lazy(() => import("./pages/Index"));
const LpOld = lazy(() => import("./pages/LpOld"));
const Quiz = lazy(() => import("./pages/Quiz"));
const Start = lazy(() => import("./pages/Start"));
const Pin = lazy(() => import("./pages/Pin"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const ResultPage = lazy(() => import("./pages/ResultPage"));
const ResultPageA2 = lazy(() => import("./pages/ResultPageA2"));
const ResultPageA3 = lazy(() => import("./pages/ResultPageA3"));
const ResultPageA4 = lazy(() => import("./pages/ResultPageA4"));
const ResultPageA5 = lazy(() => import("./pages/ResultPageA5"));
const ResultPageB = lazy(() => import("./pages/ResultPageB"));
const ResultPageB2 = lazy(() => import("./pages/ResultPageB2"));
const ResultPageB3 = lazy(() => import("./pages/ResultPageB3"));
const ResultPageB4 = lazy(() => import("./pages/ResultPageB4"));
const ResultPageC = lazy(() => import("./pages/ResultPageC"));
const ResultPageC2 = lazy(() => import("./pages/ResultPageC2"));
const ResultPageC3 = lazy(() => import("./pages/ResultPageC3"));
const ResultPageC4 = lazy(() => import("./pages/ResultPageC4"));
const Impressum = lazy(() => import("./pages/Impressum"));
const Datenschutz = lazy(() => import("./pages/Datenschutz"));
const Buch = lazy(() => import("./pages/Buch"));
const BuchAnbotTest = lazy(() => import("./pages/BuchAnbotTest"));
const BuchAnbotTestFs26 = lazy(() => import("./pages/BuchAnbotTestFs26"));
const BuchAnbotProfA = lazy(() => import("./pages/BuchAnbotProfA"));
const AnbotA = lazy(() => import("./pages/AnbotA"));
const AnbotB = lazy(() => import("./pages/AnbotB"));
const AnbotC = lazy(() => import("./pages/AnbotC"));
const BuchAnbotProfB = lazy(() => import("./pages/BuchAnbotProfB"));
const BuchAnbotProfC = lazy(() => import("./pages/BuchAnbotProfC"));
const BuchAnbotOld = lazy(() => import("./pages/BuchAnbotOld"));
const BuchAnbot2Old = lazy(() => import("./pages/BuchAnbot2Old"));
const BuchBonus = lazy(() => import("./pages/BuchBonus"));
const Analyse = lazy(() => import("./pages/Analyse"));
const BuchBonusIntern = lazy(() => import("./pages/BuchBonusIntern"));
const Kompass = lazy(() => import("./pages/Kompass"));
const KompassKalorienRechner = lazy(() => import("./pages/KompassKalorienRechner"));
const KompassStoffwechselCheck = lazy(() => import("./pages/KompassStoffwechselCheck"));
const KompassBiohackingTools = lazy(() => import("./pages/KompassBiohackingTools"));
const KompassDownloads = lazy(() => import("./pages/KompassDownloads"));
const BiohackingTools = lazy(() => import("./pages/BiohackingTools"));
const DownloadsChecklisten = lazy(() => import("./pages/DownloadsChecklisten"));
const KalorienRechner = lazy(() => import("./pages/KalorienRechner"));
const StoffwechselCheck = lazy(() => import("./pages/StoffwechselCheck"));
const NotFound = lazy(() => import("./pages/NotFound"));
const DankeAktionsplan = lazy(() => import("./pages/DankeAktionsplan"));
const Umsetzungshilfen = lazy(() => import("./pages/Umsetzungshilfen"));

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
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<QuizP />} />
              <Route path="/start" element={<Start />} />
              <Route path="/pin" element={<Pin />} />
              <Route path="/lp-old" element={<LpOld />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/quiz-p" element={<QuizP />} />
              <Route path="/danke" element={<ThankYou />} />
              <Route path="/danke-aktionsplan" element={<DankeAktionsplan />} />
              <Route path="/umsetzungshilfen" element={<Umsetzungshilfen />} />
              <Route path="/dfgk34k" element={<ResultPage />} />
              <Route path="/dfgk34k-2" element={<ResultPageA2 />} />
              <Route path="/dfgk34k-3" element={<ResultPageA3 />} />
          <Route path="/dfgk34k-4" element={<ResultPageA4 />} />
          <Route path="/dfgk34k-5" element={<ResultPageA5 />} />
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
              <Route path="/anbot-a" element={<AnbotA />} />
              <Route path="/anbot-b" element={<AnbotB />} />
              <Route path="/anbot-c" element={<AnbotC />} />
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
              <Route path="/kompass" element={<Kompass />} />
              <Route path="/kompass/kalorienrechner" element={<KompassKalorienRechner />} />
              <Route path="/kompass/stoffwechsel-check" element={<KompassStoffwechselCheck />} />
              <Route path="/kompass/biohacking-tools" element={<KompassBiohackingTools />} />
              <Route path="/kompass/downloads" element={<KompassDownloads />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
        <CookieBanner />
        <CookieSettingsButton />
      </CookieConsentProvider>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
